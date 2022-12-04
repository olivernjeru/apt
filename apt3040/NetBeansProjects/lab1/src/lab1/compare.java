package lab1; //name of the package that houses this file
import java.util.Scanner; //import the scanner class used to get user input

public class compare { //create compare class
    public static void main (String [] args) //declare main function
    {
        int firstNum, secondNum; //declare the int variables firstNum and secondNum
        Scanner firstinput=new Scanner(System.in); //create an object of the Scanner class
        System.out.println("Please enter the first Number in whole number format without decimals: "); //display message asking for input of first number
        firstNum=firstinput.nextInt(); //initialize firstNum to be the int value read from the user by using next.Int() method
        Scanner secondinput=new Scanner(System.in); //create an object of the Scanner class
        System.out.println("Please enter the second Number in whole number format without decimals: "); //display message asking for input of second number
        secondNum=secondinput.nextInt(); //initialize secondNum to be the int value read from the user by using next.Int() method
        if (firstNum>secondNum){ //use an if statement to check whether the firstNum is greater than the secondNum
            System.out.println(firstNum + ", which is the first number, is greater than " + secondNum); //print this message if the previous condition holds true
        }
        else if (firstNum==secondNum) { //check whether the firstNum is equal to the secondNum
            System.out.println(firstNum + ", which is the first number, is equal to " + secondNum + " which is the second number"); //print this message if the previous condition holds true
        }
        else if(secondNum>firstNum) { //check whether the secondNum is greater than the firstNum
        System.out.println(secondNum + ", which is the second number, is greater than " + firstNum); //print this message if the previous condition holds true
    }
    }
}
