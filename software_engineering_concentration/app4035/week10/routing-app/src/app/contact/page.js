"use client";

export default function Contact() {
    const handleSubmit = (e) => {
        console.log('form submitted');
        e.preventDefault();
    }

    return (
        <div>
            <h1>This is the contact us page</h1>
            <p>This is the contact us page content.</p>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" />
                </label>
                <input type="submit" value="submit" />
            </form>
        </div>
    );
}