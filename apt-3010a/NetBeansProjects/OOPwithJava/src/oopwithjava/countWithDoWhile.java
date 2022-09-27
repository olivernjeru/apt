package oopwithjava;

public class countWithDoWhile {
    public static void main (String [] args) {
        int num = 10, counter = 1;
        do {
            System.out.println(counter);
            counter = counter + 1;
        } while (counter <= num);
    }
}
