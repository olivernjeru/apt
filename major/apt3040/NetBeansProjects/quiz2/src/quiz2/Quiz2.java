package quiz2;

import java.util.Scanner;

public class Quiz2 {
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
