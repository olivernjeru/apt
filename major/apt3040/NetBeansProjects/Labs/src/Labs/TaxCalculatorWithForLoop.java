package Labs;

import java.util.Scanner;

public class TaxCalculatorWithForLoop {
    public static void main (String [] myString) {
        int salaryPay, n, i;
        System.out.println("Please enter the number of employees you wanna work with: ");
        Scanner num = new Scanner(System.in);
        n = num.nextInt();
        Scanner salary = new Scanner(System.in);
        double taxRate, taxedSalary;
        for (i=1; i<=n; i++){
            System.out.println("Please Enter The Salary of Employee: " + i);
            salaryPay = salary.nextInt();
            if (salaryPay>=0 && salaryPay<=12000)
            {
                taxRate = .00*salaryPay;
                taxedSalary=salaryPay-taxRate;
                System.out.println("The Tax is " + taxRate + " and the Salary after tax is: " + taxedSalary);
            } 
            else if(salaryPay>=12001 && salaryPay<=20000)
            {
            taxRate = .02*salaryPay;
            taxedSalary=salaryPay-taxRate;
            System.out.println("The Tax is " + taxRate + " and the Salary after tax is: " + taxedSalary);
            }
            else if(salaryPay>=20001 && salaryPay<=30000)
            {
            taxRate = .05*salaryPay;
            taxedSalary=salaryPay-taxRate;
            System.out.println("The Tax is " + taxRate + " and the Salary after tax is: " + taxedSalary);
            }
            else if(salaryPay>=30001 && salaryPay<=50000)
            {
            taxRate = .10*salaryPay;
            taxedSalary=salaryPay-taxRate;
            System.out.println("The Tax is " + taxRate + " and the Salary after tax is: " + taxedSalary);
            }
            else if(salaryPay>=50001 && salaryPay<=70000)
            {
            taxRate = .15*salaryPay;
            taxedSalary=salaryPay-taxRate;
            System.out.println("The Tax is " + taxRate + " and the Salary after tax is: " + taxedSalary);
            }
            else if(salaryPay>=70001 && salaryPay<=100000)
            {
            taxRate = .25*salaryPay;
            taxedSalary=salaryPay - taxRate;
            System.out.println("The Tax is " + taxRate + " and the Salary after tax is: " + taxedSalary);
            }
            else if(salaryPay>=100001 && salaryPay<=150000)
            {
            taxRate = 0.30*salaryPay;
            taxedSalary=salaryPay - taxRate;
            System.out.println("The Tax is " + taxRate + " and the Salary after tax is: " + taxedSalary);
            }
            else if(salaryPay>=150001)
            {
                taxRate=salaryPay * 0.35;
                taxedSalary=salaryPay - taxRate;
                System.out.println("The Tax is " + taxRate + " and the Salary after tax is: " + taxedSalary);
            }
    }
    }
}
