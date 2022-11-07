package oopwithjava;

public class polymorphismExercise {
    public static void main (String[] args){
        polymorphismExercise(12.0, 6.0);
        polymorphismExercise(8, 4);
        polymorphismExercise(5, 2.0);
        polymorphismExercise(4.0, 3);
    }
    public static void polymorphismExercise(double ti, double it){
        double res;
        res=ti/it;
        System.out.println("Double and Double Division Result is: "+res);
    }
    public static void polymorphismExercise(int d, int e){
        int res1;
        res1=d/e;
        System.out.println("Integer and Integer Division Result is: "+res1);
    }
    public static void polymorphismExercise(int i1, double li){
        double res2;
        res2=i1/li;
        System.out.println("Integer and Double Division Result is: "+res2);
    }
    public static void polymorphismExercise(double d1, int ld){
        double res3;
        res3=d1/ld;
        System.out.println("Integer and Double Division Result is: "+res3);
    }
}
