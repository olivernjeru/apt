package quiz2;

import java.util.Scanner;

public class Cube {
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
