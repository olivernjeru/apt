package makeup;

import java.util.Arrays;

public class MakeUp {

    public static void main(String[] args) {
        //Initialize array  
        int [] arr = new int [] {25, 131, 7, 22214475, 43256, 1043};  
        //Initialize max with first element of array.  
        int max = arr[0];  
        //Loop through the array  
        for (int i = 0; i < arr.length; i++) {  
            //Traverse through the elements of the array and compare elements with max  
           if(arr[i] > max)  
               max = arr[i];  
        }  
        System.out.println("The elements in the array are: " + Arrays.toString(arr));  
        System.out.println("The largest element in the array is: " + max);  
    }
    
}
