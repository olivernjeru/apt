/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package quiz;

import java.util.Scanner;

/**
 *
 * @author olive
 */
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
