package gratuitysystemtest;

public class Gratuitysystemtest {

    public static void main(String[] args) {
        Employee emobj=new Employee("Bob", "elll", 80000, 0);
        System.out.println("Name: " + emobj.getName() + " " + "Employee ID: " + emobj.getEmpid() + " " + "Salary: " + emobj.getSalary() + " " + "Gratuity: " + emobj.getGratuity());
    }
    
}
