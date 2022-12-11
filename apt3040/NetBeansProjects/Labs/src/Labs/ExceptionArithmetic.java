package Labs;

public class ExceptionArithmetic {
    public static void main(String [] myString){
        int num1 = 4, num2 = 0, res = 0;
        try{
            res = num1 / num2;
            System.out.println("Products " + res);
        }
        catch(ArithmeticException e) {
            System.out.println(e.getMessage());
            System.out.println("Math Error");
        }
    }
}
