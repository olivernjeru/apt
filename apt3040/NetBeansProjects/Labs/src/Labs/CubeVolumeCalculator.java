package Labs;
import java.util.Scanner;

public class CubeVolumeCalculator {
    
    public static void main (String[]args) {
    Scanner input = new Scanner(System.in);
    float h, w, l;
    System.out.println("Please Enter height:");
    h = input.nextFloat();
    System.out.println("Please Enter width:");
    w = input.nextFloat();
    System.out.println("Please Enter length:");
    l = input.nextFloat();
    double volume = l* w* h;
    System.out.println ("The volume is: " + volume + "cubic centimetres");
}
}
