using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace arraysgradinglab
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int i, n, sum = 0;
            int[] a = new int[100];
            double avg;
            string grade;

            Console.Write("How many students did the exam: ");
            n = Convert.ToInt32(Console.ReadLine());
            for (i = 0; i < n; i++)
            {
                Console.Write("Enter student {0} score:", i + 1);
                a[i] = Convert.ToInt32(Console.ReadLine());
                sum += a[i]; 
            }
            avg = sum / n;
            if (avg > 100) grade = "Error!";
            else if (avg < 0) grade = "Error!";
            else if (avg > 90) grade = "A+!";
            else if (avg > 70) grade = "B+!";
            else if (avg > 50) grade = "C+!";
            else if (avg > 30) grade = "E!";
            else grade = "F!";

            Console.Write("\nThe marks of the {0} students as stored in the array are: \n", n);
            for(i = 0; i <n; i++)
            {
                Console.Write("{0}\n", a[i]);
            }
            Console.WriteLine("The sum = {0}\n\n", sum);
            Console.WriteLine("The Class Mean Score = {0}\n\n", avg);
            Console.WriteLine("The Class Mean Grade = {0}\n\n", grade);
            Console.ReadKey();



        }
    }
}
