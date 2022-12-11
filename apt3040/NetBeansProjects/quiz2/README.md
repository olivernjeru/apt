# Quiz 2

* Explain the following java terms:
    * Static
        <p>Static in java means that a particular member belongs to a type of itself, rather than to an instance of that type. It belongs to a class but it does not belong to an instance of that class and it can be called without the instance or object or object of that class.</p>
    * Abstract
        <p>Abstract in java is used in classes to restrict a class not to be used to create objects and to access it, it must be inherited from another class. Abstract in java is also used in methods which can only be used in an abstract class and it does not have a body. The body is provided by a subclass inherited from.</p>
    * Double
        <p>Double in java represents floating point numbers by utilizing 64 bits to store variable value thereby having a range greater than float type.</p>
    * Protected
        <p>Protected in java is an access modifier used for attributes, methods and constructors making them accessible in the same package and subclasses.</p>
    * Referenced Data Type
        <p>Reference data type in java include Strings where they store a reference to the object rather than the object itself. An example of this is when you assign a string variable to another variable, it copies the reference to the object but not the object itself.</p>

* <a href="https://github.com/olivernjeru/apt/blob/main/apt3040/NetBeansProjects/quiz2/src/quiz2/Quiz2.java">Write a java program that asks user to enter 6 positive integers,  stores integers in an array, squares the numbers and displays the total of squares of numbers.</a>
```
package quiz;

import java.util.Scanner;

public class Quiz {
    public static void main(String[] args) {
        int[] nums = {0,0,0,0,0,0};
        int sqr, sum = 0;
        Scanner num = new Scanner(System.in);
        System.out.println("This program calculates the squares of six numbers you will enter and returns their sum at the end.");
        for (int i = 0;i <= 5;i++)
        {
            System.out.println("Please enter positive number: ");
            nums[i] = num.nextInt();
            if (nums[i] > 0)
            {
                sqr=nums[i] * nums[i];
                System.out.println("The square of " + nums[i] + " is: " + sqr);
                sum = sum + nums[i];
            }
            else
            {
                System.out.println("Please restart the program and enter positive integers only.");
                System.exit(0);
            }
        }
        System.out.println("The sum of the squared numbers is " + sum);
    }
}
```

* <a href="https://github.com/olivernjeru/apt/blob/main/apt3040/NetBeansProjects/quiz2/src/quiz2/Cube.java">Write a java polymorphic program that cubes float, double and integer numbers user enters.</a>
```
package quiz;

import java.util.Scanner;

public class cube {
    public static void cubeNumber(float sd)
    {
        float smalldecimal;
        System.out.println("Please enter a float value");
        Scanner floatval = new Scanner(System.in);
        sd = floatval.nextFloat();
        smalldecimal = sd * sd * sd;
        System.out.println("The cube of " + sd + " is " + smalldecimal);
    }
    public static void cubeNumber(int nd)
    {
        int nondecimal;
        System.out.println("Please enter an integer value");
        Scanner intval = new Scanner(System.in);
        nd = intval.nextInt();
        nondecimal = nd * nd * nd;
        System.out.println("The cube of " + nd + " is " + nondecimal);
    }
    public static void cubeNumber(double bd)
    {
        double bigdecimal;
        System.out.println("Please enter a double value");
        Scanner doubleval=new Scanner(System.in);
        bd = doubleval.nextDouble();
        bigdecimal=bd * bd * bd;
        System.out.println("The cube of " + bd + " is " + bigdecimal);
    }
    public static void main(String[] args)
    {
        cubeNumber(0f);
        cubeNumber(0);
        cubeNumber(0d);
    }
}
```
