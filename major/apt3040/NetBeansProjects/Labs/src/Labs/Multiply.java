package Labs; //name of the package that this file is in
import java.util.Scanner; //is import to enable functionality of getting user input

public class Multiply { //multiply class
    public static void main (String [] args){ //main method
        double firstNum, secondNum, thirdNum; //declare the three variables
        Scanner input = new Scanner(System.in); //initialize an object for getting user input
        System.out.println("Please enter the First Number: "); //display message asking for user input
        firstNum = input.nextDouble(); //initialize firstNum to be the value of the object initialized before that gets user input
        System.out.println("Please enter the Second Number: "); //display message asking for user input
        secondNum = input.nextDouble(); //initialize firstNum to be the value of the object initialized before that gets user input
        System.out.println("Please enter the Third Number: "); //display message asking for user input
        thirdNum = input.nextDouble(); //initialize firstNum to be the value of the object initialized before that gets user input
        double product = firstNum * secondNum * thirdNum; //declare product to be the result of multiplying firstNum, secondNum and thirdNum
        System.out.println("The Product of the three numbers is: " + product); //display a message with the product
    }
}
