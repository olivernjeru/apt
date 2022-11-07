package oopwithjava;
//import scanner class and util package so as to be able to get input from user in primitive data types such as int, float, double, etc
import java.util.Scanner;

public class FirstN2 {
    
    public static void main (String[] mystring) {
        Scanner input=new Scanner(System.in);
        int n=1;
        int ctr2=1; 
        int counter = 1;
        while(ctr2<=5) {
            System.out.println("Enter integer n:");
            n=input.nextInt();
            while(counter<=n){
                System.out.println(counter);
                counter=counter+1;
        }
        counter=1;
        ctr2=ctr2+1;
        }
    }
}
