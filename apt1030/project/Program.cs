using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


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



class Project2
{

    class Student
    {
        public string name;
        public double weight;
        public double height;
        public double BMI;
        public string healthStatus;
    }

    public static void Main(String[] args)
    {
        Console.Write("Enter the number of students: ");
        int numOfStudents = Convert.ToInt32(Console.ReadLine());
        Student[] students = new Student[numOfStudents];

        for (int i = 0; i < students.Length; i++)
        {
            // create student object
            students[i] = new Student();
            // collect data about students(name, weight, height)
            Console.WriteLine("===============================================");
            Console.Write($"Enter Student {i + 1}'s name: ");
            students[i].name = Console.ReadLine();

            Console.Write($"Enter Student {i + 1}'s weight(kg): ");
            students[i].weight = Convert.ToDouble(Console.ReadLine());

            Console.Write($"Enter Student {i + 1}'s height(m): ");
            students[i].height = Convert.ToDouble(Console.ReadLine());
            Console.WriteLine("===============================================");


            // fill in the BMI of each student through BMI formula
            students[i].BMI = Math.Round(students[i].weight / Math.Pow(students[i].height, 2), 1);

            // fill in the health status of each student through BMI
            if (students[i].BMI <= 18.5)
            {
                students[i].healthStatus = "Underweight";
            }
            else if (students[i].BMI > 18.5 && students[i].BMI <= 24.9)
            {
                students[i].healthStatus = "Normal Weight";
            }
            else if (students[i].BMI >= 25 && students[i].BMI <= 29.9)
            {
                students[i].healthStatus = "Overweight";
            }
            else
            {
                students[i].healthStatus = "Obese";
            }
        }

        // calculate the averages(weight, height, BMI, health status) and health status
        double averageWeight = 0;
        double averageHeight = 0;
        double averageBMI = 0;
        string classHealthStatus;

        foreach (Student student in students)
        {
            averageWeight += student.weight;
            averageHeight += student.height;
            averageBMI += student.BMI;
        }

        averageWeight = Math.Round(averageWeight / students.Length, 1);
        averageHeight = Math.Round(averageHeight / students.Length, 2);
        averageBMI = Math.Round(averageBMI / students.Length, 1);

        // calculate the class's health status
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

        // display student health data in console
        // output data
        Console.WriteLine("\nStudent Health Data\n");
        Console.WriteLine("Name\tWeight(kg)\tHeight(m)\tBMI\tHealth Status");
        Console.WriteLine("==============================================================");
        foreach (Student student in students)
        {
            Console.WriteLine($"{student.name}\t{student.weight}\t\t{student.height}\t\t{student.BMI}\t{student.healthStatus}");
        }
        Console.WriteLine("\n==============================================================");
        Console.WriteLine($"Average Class Weight(kg): {averageWeight}");
        Console.WriteLine($"Average Class Height(m): {averageHeight}");
        Console.WriteLine($"Average Class BMI: {averageBMI}");
        Console.WriteLine($"Remark: This class is {classHealthStatus}");
    }
}
