package Labs;
import java.util.Scanner;

public class NestedLoops {
//    main method
    public static void main (String [] myString){
        int num,j = 0, i = 0;
        for(j = 1; j <= 5; j++) {
            System.out.println("Please enter the number of values you wanna work with: ");
            Scanner n = new Scanner(System.in);
            num = n.nextInt();
            int sum = 0;
            for (i = 0; i<=num; i++) {
               sum = sum + i;
            }
            if(num>1){
                System.out.println("The sum of the first " + num + " numbers is " + sum);
            }
            else{
                System.out.println("The sum of " + num + " is " + sum);
        }
        }
    }
}
