package oopwithjava;
import java.util.Scanner;

public class nestedLoops {
    public static void main (String [] args){
        int n,j = 0, i = 0;
        for(j=1; j<=5; j++) {
            System.out.println("Please enter the number of values you wanna work with: ");
            Scanner input = new Scanner(System.in);
            n = input.nextInt();
            int sum = 0;
            for (i = 0; i<=n; i++) {
               sum = sum + i;
            }
            System.out.println("The sum of the first " + n + " numbers is " + sum);
        }
    }
}
