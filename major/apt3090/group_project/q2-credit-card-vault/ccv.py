import tkinter.messagebox as messagebox
from tkinter import *
from tkinter import ttk
from tkinter.ttk import *
import sqlite3
from Cryptodome.Random import get_random_bytes
from Cryptodome.Cipher import AES
import hashlib
from base64 import b64encode, b64decode
import SK as secretKey
from PIL import Image, ImageTk
import os

# Global variables
authenticated_user = None  # Global variable to track logged-in user

root = Tk()
root.title("VAULT")
root.geometry("1100x500")


# Load background image
current_dir = os.path.dirname(os.path.realpath(__file__))  # Get the current directory
image_path = os.path.join(current_dir, "images", "vaultBg.png")
background_image = Image.open(image_path)
background_image_tk = ImageTk.PhotoImage(background_image)

# Create a label to hold the background image
background_label = Label(root, image=background_image_tk)
background_label.place(x=0, y=0, relwidth=1, relheight=1)

current_page = None
entry_widgets = None

# Function to encrypt credit card details
def encrypt_sensitive_information(plain_text, password):
    # Generate a random salt
    salt = get_random_bytes(AES.block_size)

    # Use the Scrypt KDF to get a private key from the password
    private_key = hashlib.scrypt(
        password.encode(), salt=salt, n=2 ** 14, r=8, p=1, dklen=32)

    # Create cipher config
    cipher_config = AES.new(private_key, AES.MODE_GCM)

    # Encrypt the plain text
    cipher_text, _ = cipher_config.encrypt_and_digest(bytes(plain_text, 'utf-8'))

    # Return encrypted data as a single string (including salt and nonce)
    return b64encode(salt + cipher_config.nonce + cipher_text).decode('utf-8')

# Function to decrypt credit card details
def decrypt_sensitive_information(encrypted_data, password):
    # Decode base64 encoded data
    encrypted_text = b64decode(encrypted_data)

    # Extract salt, nonce, and cipher text
    salt = encrypted_text[:AES.block_size]
    nonce = encrypted_text[AES.block_size:AES.block_size * 2]
    cipher_text = encrypted_text[AES.block_size * 2:]

    # Use the Scrypt KDF to derive the private key from the password and salt
    private_key = hashlib.scrypt(
        password.encode(), salt=salt, n=2 ** 14, r=8, p=1, dklen=32)

    # Create cipher config
    cipher_config = AES.new(private_key, AES.MODE_GCM, nonce=nonce)

    # Decrypt the cipher text
    plain_text = cipher_config.decrypt(cipher_text)

    # Return decrypted plain text
    return plain_text.decode('utf-8')

# Creation of database
def createDatabase():
    conn = sqlite3.connect('creditcard_vault.db')
    c = conn.cursor()

    try:
        c.execute("""
            CREATE TABLE IF NOT EXISTS CUSTOMERS (
                customerID INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                email TEXT UNIQUE,
                idNo INTEGER NOT NULL,
                userID INTEGER,
                FOREIGN KEY (userID) REFERENCES USERS(userID)
            )
        """)
    except sqlite3.OperationalError as e:
        print(f"Error creating table: {e}")

    try:
        c.execute("""
            CREATE TABLE IF NOT EXISTS CREDITCARDS (
                cardID INTEGER PRIMARY KEY AUTOINCREMENT,
                customerID INTEGER NOT NULL,
                cardNumber INTEGER NOT NULL,
                expirationDate TEXT NOT NULL,
                CVV INTEGER NOT NULL,
                FOREIGN KEY (customerID) REFERENCES CUSTOMERS(customerID)
            )
        """)
    except sqlite3.OperationalError as e:
        print(f"Error creating table: {e}")

    try:
        c.execute("""
            CREATE TABLE IF NOT EXISTS USERS (
                userID INTEGER PRIMARY KEY AUTOINCREMENT,
                username TEXT NOT NULL,
                password TEXT NOT NULL,
                role TEXT NOT NULL
            )
        """)
    except sqlite3.OperationalError as e:
        print(f"Error creating table: {e}")

#Creation of views
def createViews():
    conn = sqlite3.connect('creditcard_vault.db')
    c = conn.cursor()
    try:
        # Check if CustomerCreditCardView already exists
        c.execute("SELECT name FROM sqlite_master WHERE type='view' AND name='CustomerCreditCardView'")
        view_exists = c.fetchone()

        # If the view doesn't exist, create it
        if not view_exists:
            c.execute("""
                CREATE VIEW CustomerCreditCardView AS
                SELECT c.customerID, c.name, c.email, c.idNo, cc.cardNumber, cc.expirationDate, cc.CVV
                FROM CUSTOMERS c
                INNER JOIN CREDITCARDS cc ON c.customerID = cc.customerID
            """)

        # Check if AllUsersView already exists
        c.execute("SELECT name FROM sqlite_master WHERE type='view' AND name='AllUsersView'")
        view_exists = c.fetchone()

        # If the view doesn't exist, create it
        if not view_exists:
            c.execute("""
                CREATE VIEW AllUsersView AS
                SELECT * FROM USERS
            """)
    except sqlite3.OperationalError as e:
        print(f"Error creating view: {e}")
    finally:
        conn.commit()
        conn.close()

# Function to show AllUsersView
def showAllUsersView():
    conn = sqlite3.connect('creditcard_vault.db')
    c = conn.cursor()

    try:
        # Query the AllUsersView
        c.execute("SELECT * FROM AllUsersView")
        rows = c.fetchall()

        # Print the results (you can modify this to display in a new page)
        for row in rows:
            print(row)
    except sqlite3.OperationalError as e:
        print(f"Error querying AllUsersView: {e}")

    conn.close()

createDatabase()
createViews()

# UI
def define_widgets(root):
    entry_widgets = {}
    labels = [
        "Username", "Full Name", "Email Address", "National Identification Number",
        "Credit Card Number", "Credit Card Expiration Date", "Credit Card CVV"
    ]
    for i, label in enumerate(labels):
        entry = Entry(root, width=30)
        entry.grid(row=i, column=1, padx=10, pady=(10, 0))
        entry_widgets[label] = entry

        label_widget = Label(root, text=label)
        label_widget.grid(row=i, column=0, pady=(10, 0))

    return entry_widgets

def get_user_id(username):
    conn = sqlite3.connect('creditcard_vault.db')
    c = conn.cursor()
    c.execute("SELECT userID FROM USERS WHERE username = ?", (username,))
    user = c.fetchone()
    conn.close()
    if user:
        return user[0]
    else:
        return None

def addCustomerRecord():
    global entry_widgets
    try:
        username = entry_widgets["Username"].get().strip()
        customer_name = entry_widgets["Full Name"].get().strip()
        customer_email = entry_widgets["Email Address"].get().strip()
        customer_id_no = entry_widgets["National Identification Number"].get().strip()
        credit_card_number = entry_widgets["Credit Card Number"].get().strip()
        expiration_date = entry_widgets["Credit Card Expiration Date"].get().strip()
        cvv = entry_widgets["Credit Card CVV"].get().strip()

        # Form validation
        if not all([username, customer_name, customer_email, customer_id_no, credit_card_number, expiration_date, cvv]):
            raise ValueError("All fields are required")

        # Retrieve userID based on username
        user_id = get_user_id(username)

        if user_id is None:
            raise ValueError("User not found")

        # Encrypt credit card details
        encrypted_id_number = encrypt_sensitive_information(customer_id_no, "secretKey")
        encrypted_cc_number = encrypt_sensitive_information(credit_card_number, "secretKey")
        encrypted_exp_date = encrypt_sensitive_information(expiration_date, "secretKey")
        encrypted_cvv = encrypt_sensitive_information(cvv, "secretKey")

        conn = sqlite3.connect('creditcard_vault.db')
        c = conn.cursor()

        c.execute("INSERT INTO CUSTOMERS (name, email, idNo, userID) VALUES (?, ?, ?, ?)",
                  (customer_name, customer_email, encrypted_id_number, user_id))
        conn.commit()

        customer_id = c.lastrowid

        c.execute("INSERT INTO CREDITCARDS (customerID, cardNumber, expirationDate, CVV) VALUES (?, ?, ?, ?)",
          (customer_id, encrypted_cc_number, encrypted_exp_date, encrypted_cvv))
        conn.commit()

        conn.close()

        for entry_widget in entry_widgets.values():
            entry_widget.delete(0, END)

        messagebox.showinfo("Success", "Customer record added successfully!")

        # Redirect to show customer details page after adding customer details
        showCustomerDetailsPage()

    except (sqlite3.Error, ValueError) as e:
        messagebox.showerror("Error", f"Error occurred: {e}")

def showCustomerDetailsPage():
    global authenticated_user, current_page
    conn = sqlite3.connect('creditcard_vault.db')
    c = conn.cursor()

    try:
        print("Authenticated user ID:", authenticated_user)

        # Retrieve customer ID based on user ID
        c.execute("SELECT customerID FROM CUSTOMERS WHERE userID = ?", (authenticated_user,))
        customer_id = c.fetchone()[0]

        # Query customer details based on the retrieved customer ID
        c.execute("SELECT * FROM CustomerCreditCardView WHERE customerID = ?", (customer_id,))
        customer_details = c.fetchone()

        # Clear current page if it exists
        if current_page:
            current_page.pack_forget()

        # Display customer details
        if customer_details:
            current_page = Frame(root)
            current_page.pack()

            customer_id = customer_details[0]
            name = customer_details[1]
            email = customer_details[2]
            id_no = customer_details[3]
            card_number = customer_details[4]
            expiration_date = customer_details[5]
            cvv = customer_details[6]

            # Decrypt sensitive information
            try:
                id_no = decrypt_sensitive_information(id_no, "secretKey")
                card_number = decrypt_sensitive_information(card_number, "secretKey")
                expiration_date = decrypt_sensitive_information(expiration_date, "secretKey")
                cvv = decrypt_sensitive_information(cvv, "secretKey")
            except Exception as e:
                print("Error decrypting customer details:", e)

            # Labels to display customer details
            Label(current_page, text="Customer Details", font=("Helvetica", 16, "bold")).grid(row=0, columnspan=2)
            Label(current_page, text=f"Customer ID: {customer_id}").grid(row=1, column=0, sticky="w")
            Label(current_page, text=f"Name: {name}").grid(row=2, column=0, sticky="w")
            Label(current_page, text=f"Email: {email}").grid(row=3, column=0, sticky="w")
            Label(current_page, text=f"ID No: {id_no}").grid(row=4, column=0, sticky="w")
            Label(current_page, text=f"Card Number: {card_number}").grid(row=5, column=0, sticky="w")
            Label(current_page, text=f"Expiration Date: {expiration_date}").grid(row=6, column=0, sticky="w")
            Label(current_page, text=f"CVV: {cvv}").grid(row=7, column=0, sticky="w")

            # Hide the form for adding customer details
            hideAddCustomerDetailsButton()

            # Hide all other buttons except "Logout"
            hideAddUsersNavigationBtn()
            hideAddCustomersNavigationButton()
            hideShowAllCustomerDetailsNavBtn()
            hideShowAllUsersButton()
            hideDeleteUserButton()
            showLogOutBtn()
            hide_update_password_button()

        else:
            print("No customer details found for the authenticated user.")

           # Clear current page if it exists
            if current_page:
                current_page.pack_forget()

            # Display message
            current_page = Frame(root)
            current_page.pack()

            # Display message
            Label(current_page, text="No customer details found.").grid(row=0, columnspan=2)

    except sqlite3.OperationalError as e:
        print(f"Error querying customer details: {e}")

    conn.close()

def addCustomerInfoPage():
    global current_page, entry_widgets
    if current_page:
        current_page.pack_forget()

    current_page = Frame(root)
    current_page.pack()

    #entry_widgets = define_widgets(current_page)
    #showAddCustomerDetailsBtn()
    showAllCustomerDetailsButton()
    showAddUsersNavigationBtn()
    showLogOutBtn()
    show_update_password_button()
    showDeleteUserButton()

    # Check if the authenticated user is a customer
    global authenticated_user
    if authenticated_user:
        conn = sqlite3.connect('creditcard_vault.db')
        c = conn.cursor()
        c.execute("SELECT role FROM USERS WHERE userID = ?", (authenticated_user,))
        role = c.fetchone()[0]
        conn.close()

        # If the role is 'customer', hide the "Add Users Page" button
        if role == 'customer':
            entry_widgets = define_widgets(current_page)
            showAddCustomerDetailsBtn()
            hideDeleteUserButton()
            hideAddUsersNavigationBtn()
            hideShowAllUsersButton()
            hideShowAllCustomerDetailsNavBtn()
        else:
            showAllUsersButton()

def hideAddUsersNavigationBtn():
    addUsersBtn.pack_forget()

# Create a function to define the button and its functionality
def createShowUsersButton(root):
    def onShowUsersClick():
        # Call the function to show users when the button is clicked
        showAllUsersPage()

    showUsersBtn = Button(root, text="Show Users", command=onShowUsersClick)
    showUsersBtn.pack(side=LEFT, padx=10, pady=10)

    return showUsersBtn

# Call the function to create the button
showUsersButton = createShowUsersButton(root)

# Function to hide the Show Users button
def hideShowAllUsersButton():
    showUsersButton.pack_forget()

# Function to show the Show Users button
def showAllUsersButton():
    showUsersButton.pack(side=LEFT, padx=10, pady=10)

def showAllUsersPage():
    global current_page
    if current_page:
        current_page.pack_forget()

    current_page = Frame(root)
    current_page.pack()

    # Connect to the database
    conn = sqlite3.connect('creditcard_vault.db')
    c = conn.cursor()

    try:
        # Query the AllUsersView
        c.execute("SELECT * FROM AllUsersView")
        records = c.fetchall()

        record_listbox = Listbox(current_page, width=200)
        record_listbox.pack(padx=10, pady=10)

        for row in records:
            user_id = row[0]
            username = row[1]
            password = row[2]
            role = row[3]

            # Format the record
            formatted_record = f"User ID: {user_id}, Username: {username}, Password: {password}, Role: {role}"

            # Insert the formatted record into the listbox
            record_listbox.insert(END, formatted_record)

    except sqlite3.OperationalError as e:
        print(f"Error querying AllUsersView: {e}")

    conn.close()

    conn.close()
    hideShowAllCustomerDetailsNavigationButton()
    hideAddCustomerDetailsButton()
    showAddCustomerNavigationBtn()
    showLogOutBtn()
    showAddUsersNavigationBtn()
    hideShowAllUsersButton()
    hide_update_password_button()
    hideDeleteUserButton()

def showRecordsPage():
    global current_page
    if current_page:
        current_page.pack_forget()

    current_page = Frame(root)
    current_page.pack()

    conn = sqlite3.connect('creditcard_vault.db')
    c = conn.cursor()

    c.execute("""
        SELECT c.customerID, c.name, c.email, c.idNo, cc.cardNumber, cc.expirationDate, cc.CVV
        FROM CUSTOMERS c
        INNER JOIN CREDITCARDS cc ON c.customerID = cc.customerID
    """)
    records = c.fetchall()

    record_listbox = Listbox(current_page, width=200)
    record_listbox.pack(padx=10, pady=10)

    for record in records:
        # Decrypt credit card details if they are encrypted
        decrypted_id_number = record[3]
        decrypted_cc_number = record[4]
        decrypted_exp_date = record[5]
        decrypted_cvv = record[6]

        try:
            decrypted_id_number = decrypt_sensitive_information(record[3], "secretKey")
            decrypted_cc_number = decrypt_sensitive_information(record[4], "secretKey")
            decrypted_exp_date = decrypt_sensitive_information(record[5], "secretKey")
            decrypted_cvv = decrypt_sensitive_information(record[6], "secretKey")
        except Exception as e:
            print(f"Error decrypting record: {e}")

        # Format the record
        formatted_record = f"Customer ID: {record[0]}, Name: {record[1]}, Email: {record[2]}, ID No: {decrypted_id_number}, Card Number: {decrypted_cc_number}, Expiration Date: {decrypted_exp_date}, CVV: {decrypted_cvv}"

        # Insert the formatted record into the listbox
        record_listbox.insert(END, formatted_record)

    conn.close()
    hideShowAllCustomerDetailsNavBtn()
    hideAddCustomerDetailsButton()
    showAddCustomerNavigationBtn()
    showLogOutBtn()
    showAddUsersNavigationBtn()
    hide_update_password_button()

def addUser(username, password, role):
    try:
        # Hash the password before storing
        hashed_password = hash_password(password)

        conn = sqlite3.connect('creditcard_vault.db')
        c = conn.cursor()
        c.execute("INSERT INTO USERS (username, password, role) VALUES (?, ?, ?)", (username, hashed_password, role))
        conn.commit()
        conn.close()
        messagebox.showinfo("Success", "User added successfully!")
    except sqlite3.Error as e:
        messagebox.showerror("Error", f"Error occurred: {e}")

def hash_password(password):
    # Hash the password using SHA-256
    hashed_password = hashlib.sha256(password.encode()).hexdigest()
    return hashed_password

def addUserPage():
    def submitUser():
        username = getUsername.get().strip()
        password = getPassword.get().strip()
        role = getRole.get().strip()
        if not (username and password and role):
            messagebox.showerror("Error", "All fields are required")
            return
        addUser(username, password, role)
        loginPage()

    global current_page
    if current_page:
        current_page.pack_forget()

    current_page = Frame(root)
    current_page.pack()

    hideAddCustomerDetailsButton()
    hideLogOutBtn()
    hideShowAllCustomerDetailsNavigationButton()
    hideShowAllCustomerDetailsNavigationButton()
    hideAddCustomersNavigationButton()
    hideShowAllUsersButton()
    hideShowAllCustomerDetailsNavBtn()
    hide_update_password_button()
    hideDeleteUserButton()

    getUsernameLabel = Label(current_page, text="Username")
    getUsernameLabel.grid(row=0, column=0, pady=(10, 0))
    getPasswordLabel = Label(current_page, text="Password")
    getPasswordLabel.grid(row=1, column=0, pady=(10, 0))
    getRoleLabel = Label(current_page, text="Role")
    getRoleLabel.grid(row=2, column=0, pady=(10, 0))

    getUsername = Entry(current_page, width=30)
    getUsername.grid(row=0, column=1, padx=10, pady=(10, 0))
    getPassword = Entry(current_page, width=30, show="*")
    getPassword.grid(row=1, column=1, padx=10, pady=(10, 0))
    # Combobox for role selection
    role_options = ["admin", "customer"]
    getRole = ttk.Combobox(current_page, values=role_options, width=27, state="readonly")  # Set state to "readonly"
    getRole.grid(row=2, column=1, padx=10, pady=(10, 0))


    submitBtn = Button(current_page, text="Submit", command=submitUser)
    submitBtn.grid(row=3, column=1, pady=10)
    # hideShowAllUsersButton()

def loginPage():
    def authenticateUser():
        global authenticated_user, customerUserID
        username = getUsername.get().strip()
        password = getPassword.get().strip()

        if not (username and password):
            messagebox.showerror("Error", "Username and password are required")
            return

        # Hash the provided password
        hashed_password = hash_password(password)

        try:
            conn = sqlite3.connect('creditcard_vault.db')
            c = conn.cursor()

            c.execute("SELECT * FROM USERS WHERE username = ?", (username,))
            user = c.fetchone()

            if user:
                # Retrieve the hashed password stored in the database
                stored_password = user[2]  # Assuming password is stored at index 2
                # Compare the hashed password from the database with the provided hashed password
                if hashed_password == stored_password:
                    authenticated_user = user[0]  # Set authenticated_user to userID
                    print("Authenticated user has userID: ", authenticated_user)

                    # Retrieve user role
                    user_role = user[3]

                    # Print out who is logged in based on their role and user ID
                    print(f"Logged in as UserID: {authenticated_user}, Role: {user_role}")

                    # Check if the authenticated user has already added their customer details
                    c.execute("SELECT COUNT(*) FROM CUSTOMERS WHERE userID = ?", (authenticated_user,))
                    customer_details_count = c.fetchone()[0]

                    if customer_details_count > 0:
                        # If customer details exist, show the customer details page
                        showCustomerDetailsPage()
                    else:
                        # If no customer details exist, show the add customer details page
                        addCustomerInfoPage()
                    return
            messagebox.showerror("Error", "Invalid username or password")
        except sqlite3.Error as e:
            messagebox.showerror("Error", f"Database error: {e}")
        finally:
            conn.close()

    global current_page
    if current_page:
        current_page.pack_forget()

    current_page = Frame(root)
    current_page.pack()

    hideAddCustomersNavigationButton()
    hideAddCustomerDetailsButton()
    hideLogOutBtn()
    hideShowAllCustomerDetailsNavBtn()
    hideAddUsersNavigationBtn()
    hideShowAllUsersButton()
    hide_update_password_button()
    hideDeleteUserButton()

    getUsernameLabel = Label(current_page, text="Username")
    getUsernameLabel.grid(row=0, column=0, pady=(10, 0))
    getPasswordLabel = Label(current_page, text="Password")
    getPasswordLabel.grid(row=1, column=0, pady=(10, 0))

    getUsername = Entry(current_page, width=30)
    getUsername.grid(row=0, column=1, padx=10, pady=(10, 0))
    getPassword = Entry(current_page, width=30, show="*")
    getPassword.grid(row=1, column=1, padx=10, pady=(10, 0))

    LoginBtn = Button(current_page, text="Login", command=authenticateUser)
    LoginBtn.grid(row=2, column=1, pady=10)

# Function to update user's password in the database
def update_password(username, current_password, new_password):
    conn = sqlite3.connect('creditcard_vault.db')
    c = conn.cursor()

    # Hash the current password for comparison
    hashed_current_password = hash_password(current_password)

    # Check if the username and current password match
    c.execute("SELECT * FROM USERS WHERE username = ? AND password = ?", (username, hashed_current_password))
    user = c.fetchone()

    if user:
        # Hash the new password before updating
        hashed_new_password = hash_password(new_password)

        # Update the password in the database
        c.execute("UPDATE USERS SET password = ? WHERE username = ?", (hashed_new_password, username))
        conn.commit()
        conn.close()
        return True
    else:
        conn.close()
        return False

# UI for password update form
def password_update_page():
    def update_password_action():
        # Get values from the input fields
        username = username_entry.get().strip()
        current_password = current_password_entry.get().strip()
        new_password = new_password_entry.get().strip()
        confirm_new_password = confirm_new_password_entry.get().strip()

        # Validate input fields
        if not all([username, current_password, new_password, confirm_new_password]):
            messagebox.showerror("Error", "All fields are required")
            return

        if new_password != confirm_new_password:
            messagebox.showerror("Error", "New password and confirm password do not match")
            return

        # Check if the username and current password match before updating
        if update_password(username, current_password, new_password):
            messagebox.showinfo("Success", "Password updated successfully")
            # Clear input fields
            username_entry.delete(0, END)
            current_password_entry.delete(0, END)
            new_password_entry.delete(0, END)
            confirm_new_password_entry.delete(0, END)
        else:
            messagebox.showerror("Error", "Incorrect username or current password")

    # Create the password update form
    password_update_window = Toplevel(root)
    password_update_window.title("Update Password")

    # Username field
    username_label = Label(password_update_window, text="Username:")
    username_label.grid(row=0, column=0, padx=10, pady=5)
    username_entry = Entry(password_update_window)
    username_entry.grid(row=0, column=1, padx=10, pady=5)

    # Current password field
    current_password_label = Label(password_update_window, text="Current Password:")
    current_password_label.grid(row=1, column=0, padx=10, pady=5)
    current_password_entry = Entry(password_update_window, show="*")
    current_password_entry.grid(row=1, column=1, padx=10, pady=5)

    # New password field
    new_password_label = Label(password_update_window, text="New Password:")
    new_password_label.grid(row=2, column=0, padx=10, pady=5)
    new_password_entry = Entry(password_update_window, show="*")
    new_password_entry.grid(row=2, column=1, padx=10, pady=5)

    # Confirm new password field
    confirm_new_password_label = Label(password_update_window, text="Confirm New Password:")
    confirm_new_password_label.grid(row=3, column=0, padx=10, pady=5)
    confirm_new_password_entry = Entry(password_update_window, show="*")
    confirm_new_password_entry.grid(row=3, column=1, padx=10, pady=5)

    # Button to update password
    update_button = Button(password_update_window, text="Update Password", command=update_password_action)
    update_button.grid(row=4, columnspan=2, padx=10, pady=10)

# Function to show password update page
def show_update_password_button():
    password_update_button.config(command=password_update_page)
    password_update_button.pack(side=RIGHT, padx=10, pady=15)

# Create a button to show the password update page
password_update_button = Button(root, text="Update Password", command=show_update_password_button)

# Function to hide the update password button
def hide_update_password_button():
    password_update_button.pack_forget()

def delete_user_and_details(user_id):
    conn = sqlite3.connect('creditcard_vault.db')
    c = conn.cursor()

    try:
        # Get customer ID associated with the user
        c.execute("SELECT customerID FROM CUSTOMERS WHERE userID = ?", (user_id,))
        customer_id = c.fetchone()[0]

        # Delete customer's credit card details
        c.execute("DELETE FROM CREDITCARDS WHERE customerID = ?", (customer_id,))

        # Delete customer details
        c.execute("DELETE FROM CUSTOMERS WHERE customerID = ?", (customer_id,))

        # Delete the user
        c.execute("DELETE FROM USERS WHERE userID = ?", (user_id,))

        conn.commit()
        conn.close()
        messagebox.showinfo("Success", "User and associated details deleted successfully!")

        # Redirect to add customer info page after successful deletion
        addCustomerInfoPage()
    except sqlite3.Error as e:
        conn.rollback()
        conn.close()
        messagebox.showerror("Error", f"Error occurred: {e}")

def deleteUserPage():
    def deleteUser():
        try:
            user_id_str = userIdEntry.get().strip()
            if not user_id_str:
                raise ValueError("User ID is required")

            user_id = int(user_id_str)

            # Check if the user ID exists before attempting deletion
            conn = sqlite3.connect('creditcard_vault.db')
            c = conn.cursor()
            c.execute("SELECT * FROM USERS WHERE userID = ?", (user_id,))
            user = c.fetchone()
            conn.close()

            if user:
                # Confirm deletion
                confirm = messagebox.askyesno("Confirm Deletion", "Are you sure you want to delete this user?")
                if confirm:
                    delete_user_and_details(user_id)
                    # Clear input field after deletion
                    userIdEntry.delete(0, END)
            else:
                # Display error message if user ID does not exist
                messagebox.showerror("Error", "User ID does not exist.")
        except ValueError:
            messagebox.showerror("Error", "Please enter a valid user ID.")

    global current_page
    if current_page:
        current_page.pack_forget()

    current_page = Frame(root)
    current_page.pack()

    hideAddCustomerDetailsButton()
    hideLogOutBtn()
    hideShowAllCustomerDetailsNavBtn()
    hideAddUsersNavigationBtn()
    hideShowAllUsersButton()
    hide_update_password_button()
    hideDeleteUserButton()
    showAddCustomerNavigationBtn()

    userIdLabel = Label(current_page, text="User ID:")
    userIdLabel.grid(row=0, column=0, pady=(10, 0))

    userIdEntry = Entry(current_page, width=30)
    userIdEntry.grid(row=0, column=1, padx=10, pady=(10, 0))

    deleteBtn = Button(current_page, text="Delete User", command=deleteUser)
    deleteBtn.grid(row=1, column=1, pady=10)


def showDeleteUserButton():
    deleteUserButton.pack(side=RIGHT, padx=15, pady=15)

# Create a button to navigate to the delete user page
deleteUserButton = Button(root, text="Delete User", command=deleteUserPage)
deleteUserButton.pack(side=RIGHT, padx=15, pady=15)

# Add a function to hide the delete user page
def hideDeleteUserButton():
    deleteUserButton.pack_forget()

def logout():
    global authenticated_user, customerUserID
    authenticated_user = None
    customerUserID = None
    loginPage()

def hideLogOutBtn():
    logOutBtn.pack_forget()

def showLogOutBtn():
    logOutBtn.pack(side=LEFT, padx=10, pady=10)

def hideAddCustomerDetailsButton():
    addCustomerDetailsBtn.pack_forget()

def hideAddCustomersNavigationButton():
    addCustomersBtn.pack_forget()

def hideShowAllCustomerDetailsNavBtn():
    showAllCustomerDetailsBtn.pack_forget()

def hideShowAllCustomerDetailsNavigationButton():
    addUsersBtn.pack_forget()

def showAddUsersNavigationBtn():
    addUsersBtn.pack(side=RIGHT, padx=10, pady=10)

def showAddCustomerDetailsBtn():
    addCustomerDetailsBtn.pack(side=RIGHT, padx=10, pady=10)

def showAddCustomerNavigationBtn():
    addCustomersBtn.pack(side=RIGHT, padx=10, pady=10)

def showAllCustomerDetailsButton():
    showAllCustomerDetailsBtn.pack(side=LEFT, padx=10, pady=10)

addUsersBtn = Button(root, text="Add Users Page", command=addUserPage)
addUsersBtn.pack(side=RIGHT, padx=10, pady=10)

logOutBtn = Button(root, text="Log Out", command=logout)
logOutBtn.pack(side=LEFT, padx=10, pady=10)

addCustomerDetailsBtn = Button(root, text="Add Customer Details", command=addCustomerRecord)
addCustomerDetailsBtn.pack(side=RIGHT, padx=10, pady=10)

addCustomersBtn = Button(root, text="Home", command=addCustomerInfoPage)
addCustomersBtn.pack(side=RIGHT, padx=10, pady=10)

showAllCustomerDetailsBtn = Button(root, text="Show Customer Details Page", command=showRecordsPage)
showAllCustomerDetailsBtn.pack(side=LEFT, padx=10, pady=10)

# Check if the USERS table is empty
def is_users_table_empty():
    conn = sqlite3.connect('creditcard_vault.db')
    c = conn.cursor()
    c.execute("SELECT COUNT(*) FROM USERS")
    count = c.fetchone()[0]
    conn.close()
    return count == 0

if is_users_table_empty():
    addUserPage()
else:
    loginPage()

root.mainloop()
