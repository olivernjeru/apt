package Labs;

//MultiMethodGreeting Class
public class MultiMethodGreeting {  
//    A function that is within a class is called a method
//    Swahili method
    public static void swahili() {
        System.out.println("Habari");
    }
    
//    English method
    public static void english() {
        System.out.println("Hello");
    }
    
//    Spanish method
    public static void spanish() {
        System.out.println("Holla");
    }
    
//    Non void method
    public static String swah() {
        System.out.println("Habari Yako");
//        a return statement is mandatory since when declaring the method, we did not use a void, instead we used a string indicating that we have to return something
        return "Mzuri Sana";
    }
    //    Main method
    public static void main (String [] args) {
//        Calling swahili method
        swahili();
//        Calling english method
        english();
//        Calling spanish method
        spanish();
//        Initialize a String, cm
        String cm;
//        Declare cm to call the method swah()  
        cm=swah();
//        Display cm which calls the method swah() to run
        System.out.println(cm);
    }
}
