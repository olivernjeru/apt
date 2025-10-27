using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

/*namespace test2
{
    /*internal class Arrays
    {
        public static void Main(string[] args)
        {
            // Arrays Declaration
            // datatype[] array_name;
            // Store only int values
            // int[] numbers;
            //Store only string values
            // string[] names;
            //Store only double values
            // double[] ranges;

            // Arrays Initialization
            // Declaring and Initializing an array with size of 5
            // int[] array = new int[5];
            //Defining and assigning an elements at the same time
            // int[] array2 = new int[5] { 1, 2, 3, 4, 5 };
            //Initialize with 5 elements will indicates the size of an array
            // int[] array3 = new int[] { 1, 2, 3, 4, 5 };
            // Another way to initialize an array without size
            // int[] array4 = { 1, 2, 3, 4, 5 };

            // Declare an array without initialization
            /* int[] array5;
            array5 = new int[] { 1, 2, 3, 4, 5 };
            After an array declaration, we can initialize array elements using index values:
            int[] array = new int[5];
            array[0] = 1;
            array[1] = 2;
            array[2] = 3;
            array[3] = 4;
            array[4] = 5; */

// Accessing an Array Elements
/* Without using loops:
int[] array = new int[5] { 1, 2, 3, 4, 5 };
Console.WriteLine(array[0]);
Console.WriteLine(array[1]);
Console.WriteLine(array[2]);
Console.WriteLine(array[3]);
Console.WriteLine(array[4]);
Console.WriteLine("Press Enter Key to Exit..");
Console.ReadLine(); */

// Using Loops:
/* For Loop:
int[] array = new int[5] { 1, 2, 3, 4, 5 };
for (int i = 0; i < array.Length; i++)
{
Console.WriteLine(array[i]);
}
Console.WriteLine("Press Enter Key to Exit..");
Console.ReadLine(); */

/* Foreach Loop:
int[] array = new int[5] { 1, 2, 3, 4, 5 };
foreach (int i in array)
{
    Console.WriteLine(i);
}
Console.WriteLine("Press Enter Key to Exit..");
Console.ReadLine(); */

// Array Types
/* int[] array = new int[5] { 1, 4, 2, 3, 5 };
Console.WriteLine("---Initial Array Elements---");
foreach (int i in array)
{
    Console.WriteLine(i);
}
Array.Sort(array);
Console.WriteLine("---Elements After Sort---");
foreach (int i in array)
{
    Console.WriteLine(i);
}
Array.Reverse(array);
Console.WriteLine("---Elements After Reverse---");
foreach (int i in array)
{
    Console.WriteLine(i);
}
Console.WriteLine("Press Enter Key to Exit..");
Console.ReadLine(); */

// Multidimensional Arrays
// Multi-Dimensional Array Declaration
// Two Dimensional Array
/* int[,] arr = new int[4, 2]
{
    {4,3 },
    {1,7 },
    {7,2 },
    {5,7 }
};
Console.WriteLine(arr[3,0]);
// is used for getting inputs Console.ReadLine();
// Three Dimensional Array
int[,,] arr1 = new int[4, 2, 3]; */

// Multi - Dimensional Array Initialization
/* // Two Dimensional Integer Array
int[,] intarr = new int[3, 2] {
                    { 4, 5 },
                    { 5, 0 },
                    { 3, 1 }
                  };
// Two Dimensional Integer Array without Dimensions
int[,] intarr1 = new int[,] { { 4, 5 }, { 5, 0 }, { 3, 1 } };
// Three Dimensional Array
int[,,] array3D = new int[2, 2, 3] { { { 1, 2, 3 }, { 4, 5, 6 } },
                        { { 7, 8, 9 }, { 10, 11, 12 } }
                      };
// Three Dimensional Array without Dimensions
int[,,] array3D1 = new int[,,] { { { 1, 2, 3 }, { 4, 5, 6 } },
                      { { 7, 8, 9 }, { 10, 11, 12 } }
                    }; */

// Access Multidimensional Array Elements
// Two Dimensional Array
/* int[,] arr2D = new int[3, 2] {
                   { 4, 5 },
                   { 5, 0 },
                   { 3, 1 }
                 };
// Three Dimensional Array
int[,,] array3D = new int[2, 2, 3] {
                         { { 1, 2, 3 }, { 4, 5, 6 } },
                         { { 7, 8, 9 }, { 10, 11, 12 } }
                      };
Console.WriteLine(arr2D[1, 0]); // 5
Console.WriteLine(array3D[1, 1, 1]); // 11 */

// Multidimensional Array Example
/* // Two Dimensional Array
int[,] array2D = new int[3, 2] { 
    { 4, 5 }, 
    { 5, 0 }, 
    { 3, 1 } 
};
// Three Dimensional Array
int[,,] array3D = new int[2, 2, 3] { 
    { 
        { 1, 2, 3 }, 
        { 4, 5, 6 } 
    }, 
    { 
        { 7, 8, 9 }, 
        { 10, 11, 12 } 
    } 
};
Console.WriteLine("---Two Dimensional Array Elements---");
for (int i = 0; i < 3; i++)
{
    for (int j = 0; j < 2; j++)
    {
        Console.WriteLine("a[{0},{1}] = {2}", i, j, array2D[i, j]);
    }
}
Console.WriteLine("---Three Dimensional Array Elements---");
for (int i = 0; i < 2; i++)
{
    for (int j = 0; j < 2; j++)
    {
        for (int k = 0; k < 3; k++)
        {
            Console.WriteLine("a[{0},{1},{2}] = {3}", i, j, k, array3D[i, j, k]);
        }
    }
}
Console.WriteLine("Press Enter Key to Exit..");
Console.ReadLine(); */

// Jagged Array Declaration
/* // Jagged Array with Single Dimensional Array
int[][] jarray = new int[2][];
// Jagged Array with Two Dimensional Array
int[][,] jarray1 = new int[3][,]; */

// Jagged Array Initialization
/* // Jagged Array with Single Dimensional Array
int[][] jarray = new int[3][];
jarray[0] = new int[5] { 1, 2, 3, 4, 5 };
jarray[1] = new int[3] { 10, 20, 30 };
jarray[2] = new int[] { 12, 50, 60, 70, 32 }; */
/* // Jagged Array with Two Dimensional Array
int[][,] jarray1 = new int[3][,];
jarray1[0] = new int[2, 2] { { 15, 24 }, { 43, 54 } };
jarray1[1] = new int[,] { { 11, 12 }, { 13, 14 }, { 25, 26 } };
jarray1[2] = new int[4, 3]; */

/* // Initializing an Array on Declaration
int[][] jarray2 = new int[][]
{
    new int[]{1,2,3,4,5},
    new int[]{98, 56, 45},
    new int[]{32}
}; */

/* }
}
} */


/* class strucExer3
{
    //employee is a structure of members eName and dtObirth
    struct employee
    {
        public string eName;
        public dtObirth Date;
    }
    //dtObirth is a nested structure of employee
    struct dtObirth
    {
        public int Day;
        public int Month;
        public int Year;
    }
    static void Main(string[] args)
    {

        int dd = 0, mm = 0, yy = 0;
        int total = 2;
        Console.Write("\n\nCreate a nested structure and store data in an array :\n");
        Console.Write("-------------------------------------------------------\n");
        employee[] emp = new employee[total];

        for (int i = 0; i < total; i++)
        {
            Console.Write("Name of the employee : ");
            string nm = Console.ReadLine();
            emp[i].eName = nm;

            Console.Write("Input day of the birth : ");
            dd = Convert.ToInt32(Console.ReadLine());
            emp[i].Date.Day = dd;

            Console.Write("Input month of the birth : ");
            mm = Convert.ToInt32(Console.ReadLine());
            emp[i].Date.Month = mm;

            Console.Write("Input year for the birth : ");
            yy = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine();
            emp[i].Date.Year = yy;
        }
    }
} */


/* Example 2
Write a program in C# Sharp to create a structure to store students details in an array.

Solution */

/* namespace StructureExample
{
    struct student
    {
        public int s_id;
        public String s_name, grade;
        public int Test1, Test2;
        public double Sum, Avg;
    }
    class Program
    {
        static void Main(string[] args)
        {
            int i, n;
            Console.Write("How many students were in the Class: ");
            n = Convert.ToInt32(Console.ReadLine());

            student[] arr = new student[n];
            for (i = 0; i < n; i++)
            {
                Console.WriteLine("Please enter StudentId");
                arr[i].s_id = Int32.Parse(Console.ReadLine());
                Console.WriteLine("Please enter StudentName");/* 
                arr[i].s_name = Console.ReadLine();
                Console.WriteLine("Please Test 1 Score");
                arr[i].Test1 = Int32.Parse(Console.ReadLine());
                Console.WriteLine("Please Test 2 Score");
                arr[i].Test2 = Int32.Parse(Console.ReadLine());
                arr[i].Sum = arr[i].Test1 + arr[i].Test2;
                arr[i].Avg = arr[i].Sum / 2;
                if (arr[i].Avg > 100) arr[i].grade = "Error";
                else if (arr[i].Avg < 0) arr[i].grade = "Error";
                else if (arr[i].Avg > 90) arr[i].grade = "A+";
                else if (arr[i].Avg > 70) arr[i].grade = "B+";
                else if (arr[i].Avg > 50) arr[i].grade = "C+";
                else if (arr[i].Avg > 30) arr[i].grade = "C";
                else arr[i].grade = "F";
            }
            Console.Write("Student details are as follows:\n");
            for (i = 0; i < n; i++)
            {
                System.Console.Write("{0}\t{1}\t{2}\t{3}\t{4}\t{5}\n", arr[i].s_name, arr[i].Test1, arr[i].Test2, arr[i].Sum, arr[i].Avg, arr[i].grade);
                Console.ReadLine();
            }
        }
    }
} */


/* class strucExer3
{
    //employee is a structure of members eName and dtObirth
    struct employee
    {
        public string eName;
        public dtObirth Date;
    }
    //dtObirth is a nested structure of employee
    struct dtObirth
    {
        public int Day;
        public int Month;
        public int Year;
    }
    static void Main(string[] args)
    {

        int dd = 0, mm = 0, yy = 0;
        int total = 2;
        Console.Write("\n\nCreate a nested structure and store data in an array :\n");
        Console.Write("-------------------------------------------------------\n");
        employee[] emp = new employee[total];

        for (int i = 0; i < total; i++)
        {
            Console.Write("Name of the employee : ");
            string nm = Console.ReadLine();
            emp[i].eName = nm;

            Console.Write("Input day of the birth : ");
            dd = Convert.ToInt32(Console.ReadLine());
            emp[i].Date.Day = dd;

            Console.Write("Input month of the birth : ");
            mm = Convert.ToInt32(Console.ReadLine());
            emp[i].Date.Month = mm;

            Console.Write("Input year for the birth : ");
            yy = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine();
            emp[i].Date.Year = yy;
        }
    }
} */

/* class Assignment1
{
    struct item
    {
        public int itemcode;
        public double price;
        public int quantity;
        public double totalcost;
    }

    static void Main(string[] args)
    {
        int i;
        Console.Write("Please enter the number of products: ");
        int noofproducts = Convert.ToInt32(Console.ReadLine());
        item[] it = new item[noofproducts];

        for (i = 0; i < noofproducts; i++)
        {
            Console.Write("Please enter the Item Code: ");
            int ic = Convert.ToInt32(Console.ReadLine());
            it[i].itemcode = ic;

            Console.Write("Please enter the Price: ");
            double pr = Convert.ToInt32(Console.ReadLine());
            it[i].price = pr;

            Console.Write("Please enter the Quantity: ");
            int qu = Convert.ToInt32(Console.ReadLine());
            it[i].quantity = qu;

            it[i].totalcost = pr * qu;
        }
        Console.Write("Item details are as follows:\n");
        Console.Write("Item code: \tItem price: \tItem Quantity:\t Total Cost: \n");
        Console.Write("======================================================================\n");
        for (i = 0; i < noofproducts; i++)
        {
            Console.Write($"{it[i].itemcode}\t\t {it[i].price}\t\t {it[i].quantity}\t\t {it[i].totalcost}");
            Console.ReadLine();
        }
    }
}*/


/* class Assignment2
{
    struct employee
    {
        public int employeenumber;
        public String employeename;
        public double allowances;
        public double basicsalary;
        public double grosssalary;
        public double netsalary;
        public double taxamount;
    }

    static void Main(string[] args)
    {
        int i;
        Console.Write("Please enter the number of employees: ");
        int noofemployees = Convert.ToInt32(Console.ReadLine());
        employee[] emp = new employee[noofemployees];

        for (i = 0; i < noofemployees; i++)
        {
            Console.Write("Please enter the Employee Number: ");
            int enumber = Convert.ToInt32(Console.ReadLine());
            emp[i].employeenumber = enumber;

            Console.Write("Please enter the Employee Name: ");
            String ename = Console.ReadLine();
            emp[i].employeename = ename;

            Console.Write("Please enter the Allowances: ");
            double eallowances = Convert.ToInt32(Console.ReadLine());
            emp[i].allowances = eallowances;

            Console.Write("Please enter the Basic Salary: ");
            double ebasicsalary = Convert.ToInt32(Console.ReadLine());
            emp[i].basicsalary = ebasicsalary;

            emp[i].grosssalary = ebasicsalary + eallowances;

            if (emp[i].grosssalary < 10000)
            {
                emp[i].taxamount = 0.05 * emp[i].grosssalary;
            }
            else if (emp[i].grosssalary >= 10000 && emp[i].taxamount <= 20000)
            {
                emp[i].grosssalary = 0.10 * emp[i].grosssalary;
            }
            else
            {
                emp[i].grosssalary = 0.15 * emp[i].grosssalary;
            }

            emp[i].netsalary = emp[i].grosssalary - emp[i].taxamount;
        }

        Console.Write("Item details are as follows:\n");
        Console.Write("Employee Number:\t Employee Name:\t Basic Salary:\t Allowances:\t Net Salary: \n");
        Console.Write("===================================================================================\n");
        for (i = 0; i < noofemployees; i++)
        {
            Console.Write($"{emp[i].employeenumber}\t\t\t {emp[i].employeename}\t\t {emp[i].basicsalary}\t\t {emp[i].allowances}\t\t {emp[i].netsalary}\n");
        }
    }
} */


/*class Project
{
    struct student
    {
        public double sweight;
        public double sheight;
        public String sname;
    }

    static void Main(string[] args)
    {
        int i, n;
        String remark;
        double bmi = 0;

        Console.Write("Please enter the number of students in the class: ");
        n = Convert.ToInt32(Console.ReadLine());

        student[] sarr = new student[n];


        for (i = 0; i < n; i++)
        {
            Console.Write($"Please enter Student {i + 1} Weight: ");
            sarr[i].sweight = Convert.ToDouble(Console.ReadLine());
            Console.Write($"Please enter Student {i + 1} Height: ");
            sarr[i].sheight = Convert.ToDouble(Console.ReadLine());
            Console.Write($"Please enter Student {i + 1} Name: ");
            sarr[i].sname = Console.ReadLine();

            /*bmi = Math.Round(sarr[i].sweight / (sarr[i].sheight * sarr[i].sheight), 2);


            if (bmi <= 18.5)
            {
                remark = "Underweight";
            }
            else if (bmi > 18.5 && bmi <= 24.9)
            {
                remark = "Normal Weight";
            }
            else if (bmi > 24.9 && bmi <= 29.9)
            {
                remark = "Overweight";
            }
            else if (bmi > 29.9)
            {
                remark = "Obese";
            }

            /* sarr[i].sumweight += sarr[i].sweight;
            sarr[i].avgclassweight = sarr[i].sumweight / n;
            sarr[i].sumheight += sarr[i].sheight;
            sarr[i].avgclassheight = sarr[i].sumheight / n;
            sarr[i].classBMI = (Math.Round(sarr[i].avgclassweight / (sarr[i].avgclassheight * sarr[i].avgclassheight), 1) / 2);

            if (sarr[i].classBMI <= 18.5)
            {
                sarr[i].classremark = "Underweight";
            }
            else if (sarr[i].classBMI > 18.5 && sarr[i].classBMI <= 24.9)
            {
                sarr[i].classremark = "Normal Weight";
            }
            else if (sarr[i].classBMI >= 25 && sarr[i].classBMI <= 29.9)
            {
                sarr[i].classremark = "Overweight";
            }
            else
            {
                sarr[i].classremark = "Obese";
            }

            if (n > 1)
            {
                Console.Write($"\nThe average class bmi is {sarr[i].classBMI} which is {sarr[i].classremark}\n");
            } */
/*}

Console.Write("Students' details are as follows:\n\n");
Console.Write("Number\t Name\t Weight\t Height\n");
Console.Write("===============================================\n");
for (i = 0; i < n; i++)
{
    System.Console.Write($"{i++}\t {sarr[i].sname}\t {sarr[i].sweight}\t {sarr[i].sheight}\n");
}
}
}*/

/*// Selection Structures
namespace selectionstructures;
class selectionstructuresassignment
{
    static void Main(string[] args)
    {
        Console.Write("Please enter the first number: ");
        double num1 = Convert.ToDouble(Console.ReadLine());
        Console.Write("Please enter the second number: ");
        double num2 = Convert.ToDouble(Console.ReadLine());
        Console.Write("Please enter the third number: ");
        double num3 = Convert.ToDouble(Console.ReadLine());

        // If statement to determine the largest of the three numbers
        if (num1 > num2 && num1 > num3)
        {
            Console.Write($"The largest number is {num1}");
        }
        else if (num2 > num1 && num2 > num3)
        {
            Console.Write($"The largest number is {num2}");
        }
        else if (num3 > num2 && num3 > num1)
        {
            Console.Write($"The largest number is: {num3}");
        }
    }
}*/

/*namespace student;
public class studentdetails
{
    static void Main(string[] args)
    {
        int rollno;
        String name;
        Double sum;
        int i;
        Double marks;
        double mean;
        String division;

        Console.Write("Please enter the roll no: ");
        rollno = Convert.ToInt32(Console.ReadLine());
        Console.Write("Please enter the name: ");
        name = Console.ReadLine();
        sum = 0;

        for (i = 0; i < 3; i++)
        {
            Console.Write($"Please enter Mark {i + 1}: ");
            marks = Convert.ToDouble(Console.ReadLine());
            Console.Write($"Mark {i + 1} is {marks}\n");

            sum += marks;
        }

        mean = Math.Round((sum / 3) ,2);

        if (mean >= 60)
        {
            division = "First";
        }
        else if (mean < 60 && mean >= 48)
        {
            division = "Second";
        }
        else if (mean < 48 && mean >= 36)
        {
            division = "Pass";
        }
        else
            division = "Fail";

        Console.Write($"Roll No: {rollno}\t Name: {name}\t Total: {sum}\t Mean: {mean}\t Division: {division}");
    }
}*/

/*namespace studentgrades;

public class students
{
    static void Main(string[] args)
    {
        int id;
        String name;
        Double marks;
        Double sum = 0;
        Double mean;
        String grade;
        Console.Write("Please enter the Number of Students: ");
        int n = Convert.ToInt32(Console.ReadLine());
        int i;
        for (i = 0; i < n; i++)
        {
            Console.Write($"Please enter student {i + 1} id: ");
            id = Convert.ToInt32(Console.ReadLine());
            Console.Write($"Please enter student {i + 1} name: ");
            name = Console.ReadLine();
            Console.Write($"Please enter student {i + 1} marks: ");
            marks = Convert.ToDouble(Console.ReadLine());

            Console.Write($"Student {i + 1} id is: {id}\t Student {i + 1} name is {name}\t Student {i + 1} marks are {marks}\n");

            sum += marks;
        }

        mean = sum / n;

        if (mean >= 0 && mean <=39)
        {
            grade = "E";
        }
        else if (mean >=40 && mean <= 49)
        {
            grade = "D";
        }
        else if (mean >=50 && mean <=59)
        {
            grade = "C";
        }
        else if (mean >=60 && mean <=69)
        {
            grade = "B";
        }
        else
        {
            grade = "A";
        }
        Console.WriteLine($"The class mean score is {mean} and the class grade is {grade}");
    }
}*/



/*namespace question5
{
    public class question5
    {
        static void Main(string[] args)
        {
            int num;
            int Ans;
            Console.Write("Please enter a number: ");
            num = Convert.ToInt32(Console.ReadLine());

            if (num > 10)
            {
                Ans = num + 5;
            }
            else
            {
                Ans = num * 3;
            }

            Console.Write($"the answer is {Ans}");
        }
    }
}*/


/*namespace question6
{
    public class question6
    {
        static void Main(String[] args)
        {
            double r;
            double Pi = 3.14;
            double area;

            Console.Write("Please enter the radius: ");
            r = Convert.ToDouble(Console.ReadLine());

            area = Pi * Math.Pow(r, 2);

            Console.Write($"The area of the circle is {area}");
        }
    }
}*/


/*namespace question7
{
    public class question7
    {
        static void Main(String[] args)
        {
            double score1;
            double score2;
            double sum;
            double mean;

            Console.Write("Please enter Score 1: ");
            score1 = Convert.ToDouble(Console.ReadLine());
            Console.Write("Please enter Score 2: ");
            score2 = Convert.ToDouble(Console.ReadLine());

            sum = score1 + score2;

            mean = sum / 2;

            Console.Write($"The Total is {sum} and the Average is {mean}");
        }
    }
}*/


/*namespace question8
{
    public class question8
    {
        static void Main(String[] args)
        {
            String name;
            int i;

            for (i = 0; i < 10; i++)
            {
                Console.Write($"Please enter Name {i + 1}: ");
                name = Console.ReadLine();

                Console.Write($"Name {i + 1} is {name}\n");
            }
        }
    }
}*/


/*class Project
{
    struct student
    {
        public string sname;
        public double sweight;
        public double sheight;
        public double BMI;
        public string healthStatus;
    }

    public static void Main(String[] args)
    {
        Console.Write("Enter the number of students: ");
        int n = Convert.ToInt32(Console.ReadLine());
        student[] students = new student[n];

        for (int i = 0; i < students.Length; i++)
        {
            // get student details
            Console.WriteLine("===============================================");
            Console.Write($"Enter Student {i + 1}'s name: ");
            students[i].sname = Console.ReadLine();

            Console.Write($"Enter Student {i + 1}'s weight(kg): ");
            students[i].sweight = Convert.ToDouble(Console.ReadLine());

            Console.Write($"Enter Student {i + 1}'s height(m): ");
            students[i].sheight = Convert.ToDouble(Console.ReadLine());
            Console.WriteLine("===============================================");


            // working out the BMI
            students[i].BMI = Math.Round(students[i].sweight / Math.Pow(students[i].sheight, 2), 1);

            // get the health status calculated
            if (students[i].BMI <= 18.5)
            {
                students[i].healthStatus = "Underweight";
            }
            else if (students[i].BMI > 18.5 && students[i].BMI <= 24.9)
            {
                students[i].healthStatus = "Normal Weight";
            }
            else if (students[i].BMI > 24.9 && students[i].BMI <= 29.9)
            {
                students[i].healthStatus = "Overweight";
            }
            else
            {
                students[i].healthStatus = "Obese";
            }
        }

        // calculate the averages
        double averageWeight = 0;
        double averageHeight = 0;
        double averageBMI = 0;
        string classHealthStatus;

        // to get the average weight, height and bmi
        foreach (student student in students)
        {
            averageWeight += student.sweight;
            averageHeight += student.sheight;
            averageBMI += student.BMI;
        }

        averageWeight = Math.Round(averageWeight / students.Length, 2);
        averageHeight = Math.Round(averageHeight / students.Length, 2);
        averageBMI = Math.Round(averageBMI / students.Length, 2);

        // get health status
        if (averageBMI <= 18.5)
        {
            classHealthStatus = "Underweight";
        }
        else if (averageBMI > 18.5 && averageBMI <= 24.9)
        {
            classHealthStatus = "Normal Weight";
        }
        else if (averageBMI >= 25 && averageBMI <= 29.9)
        {
            classHealthStatus = "Overweight";
        }
        else
        {
            classHealthStatus = "Obese";
        }

        // display student data in console
        Console.WriteLine("\nStudent Health Data\n");
        Console.WriteLine("Name\tWeight(kg)\tHeight(m)\tBMI\tHealth Status");
        Console.WriteLine("==============================================================");
        foreach (student student in students)
        {
            Console.WriteLine($"{student.sname}\t{student.sweight}\t\t{student.sheight}\t\t{student.BMI}\t{student.healthStatus}");
        }
        Console.WriteLine("\n==============================================================");
        Console.WriteLine($"Average Class Weight(kg): {averageWeight}");
        Console.WriteLine($"Average Class Height(m): {averageHeight}");
        Console.WriteLine($"Average Class BMI: {averageBMI}");
        Console.WriteLine($"Remark: This class is {classHealthStatus}");
    }
} */


namespace question10
{
    public class question10class
    {
        struct Student
        {
            public String name;
            public double score1;
            public double score2;
            public double sum;
            public String sgrade;
            public double smean;
        }
        static void Main(String[] args)
        {
            int n, i;

            Console.Write("Please enter the number of students in the class: ");
            n = Convert.ToInt32(Console.ReadLine());

            Student[] students = new Student[n];

            for (i = 0; i < n; i++)
            {
                Console.Write($"Please enter Student {i + 1} name: ");
                students[i].name = Console.ReadLine();
                Console.Write($"Please enter Student {i + 1} Test1: ");
                students[i].score1 = Convert.ToDouble(Console.ReadLine());
                Console.Write($"Please enter Student {i + 1} Test2: ");
                students[i].score2 = Convert.ToDouble(Console.ReadLine());

                students[i].sum = students[i].score1 + students[i].score2;

                students[i].smean = students[i].sum / 2;

                if (students[i].smean < 0 || students[i].smean >100)
                {
                    Console.Write("Error!");
                }
                else
                {
                    if (students[i].smean <= 30)
                    {
                        students[i].sgrade = "F";
                    }
                    else if (students[i].smean > 30 && students[i].smean <= 50)
                    {
                        students[i].sgrade = "C";
                    }
                    else if (students[i].smean > 50 && students[i].smean <= 70)
                    {
                        students[i].sgrade = "C+";
                    }
                    else if (students[i].smean > 70 && students[i].smean <= 90)
                    {
                        students[i].sgrade = "B+";
                    }
                    else if (students[i].smean > 90)
                    {
                        students[i].sgrade = "A+";
                    }
                }
                

            }

            double mean = 0;
            foreach (Student Student in students)
            {
                mean += Student.smean;
            }

            double classmean;
            classmean = mean / students.Length;

            string grade = "";

            if (classmean < 0 || classmean >100)
            {
                Console.Write("Error!");
            }
            else
            {
                if (classmean <= 30)
                {
                    grade = "F";
                }
                else if (classmean > 30 && classmean <= 50)
                {
                    grade = "C";
                }
                else if (classmean > 50 && classmean <= 70)
                {
                    grade = "C+";
                }
                else if (classmean > 70 && classmean <= 90)
                {
                    grade = "B+";
                }
                else if (mean > 90)
                {
                    grade = "A+";
                }
            }
            

            Console.Write("Name\t Test1\t Test2\t Total\t Avg\t Grade\n");
            Console.Write("================================================\n");

            foreach (Student Student in students)
            {
                Console.Write($"{Student.name}\t {Student.score1}\t {Student.score2}\t {Student.sum}\t {Student.smean}\t {Student.sgrade}\n");
            }

            Console.Write("================================================\n");
            Console.Write($"The Class Mean Score is {classmean}\n");
            Console.WriteLine($"The Class Mean Grade is {grade}");
        }
    }
}



