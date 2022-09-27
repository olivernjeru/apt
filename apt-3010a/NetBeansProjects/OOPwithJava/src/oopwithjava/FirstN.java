package oopwithjava;
//get the scanner class and use the util package to obtain the input of primitive types like int, double, float, etc
import java.util.Scanner;

public class FirstN {
    
//    main method of the whole class
    public static void main (String[] args) {
//        get the input of the number num
        Scanner number=new Scanner(System.in);
        int num, counter = 1;
        System.out.println("Enter integer num:");
        num=number.nextInt();
        while(counter<=num){
            System.out.println(counter);
            counter=counter+1;
        }
    }
}
