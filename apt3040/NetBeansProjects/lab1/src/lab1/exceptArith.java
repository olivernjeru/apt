package lab1;

public class exceptArith {
    public static void main(String [] myString){
        int num1=4, num2=0, prod=0;
        try{
            prod=num1/num2;
            System.out.println("Products " + prod);
        }catch(ArithmeticException e) {
            System.out.println(e.getMessage());
            System.out.println("Math Error");
        }
    }
}
