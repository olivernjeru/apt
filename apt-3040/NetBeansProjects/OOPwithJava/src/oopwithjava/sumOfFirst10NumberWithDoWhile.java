package oopwithjava;
import java.util.Scanner;

public class sumOfFirst10NumberWithDoWhile {
    public static void main (String [] args) {
        int n, i = 0;
        Scanner input = new Scanner(System.in);
        System.out.println("Please Enter the number of values you want to use: ");
        n=input.nextInt();
        int sum = 0;
        do {
            sum = sum + i;
            i++;
        } while (i<=n);
        System.out.println("The sum of the first " + n + " numbers is " + sum);
    }
}
