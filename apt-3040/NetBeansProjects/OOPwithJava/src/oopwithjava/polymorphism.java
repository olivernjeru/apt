package oopwithjava;

public class polymorphism {
    public static void main (String[] args){
        polymorphism(6);
        polymorphism(8.0);
        polymorphism(5, 2.0);
        polymorphism(4.0, 3);
    }
    public static void polymorphism(int i){
        int ti;
        ti=i*3;
        System.out.println("Integer: "+ti);
    }
    public static void polymorphism(double d){
        double td;
        td=d*3;
        System.out.println("Double: "+td);
    }
    public static void polymorphism(int i1,double d1){
        int ti1=0;
        double td1=0.0;
        ti1=i1*3;
        td1=d1*3;
        System.out.println("Double Integer: "+ti1+""+td1);
    }
    public static void polymorphism(double d1, int i1){
        int ti1=0;
        double td1=0.0;
        ti1=i1*3;
        td1=d1*3;
        System.out.println("Integer Double: "+td1+""+ti1);
    }
}
