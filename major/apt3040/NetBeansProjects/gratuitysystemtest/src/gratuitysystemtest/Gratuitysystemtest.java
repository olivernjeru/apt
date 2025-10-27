package gratuitysystemtest;

public class Gratuitysystemtest {

    public static void main(String[] args) {
        Employee emobj=new Employee("Bob", "elll", 80000, 0);
        System.out.println("Name: " + emobj.getName() + " " + "Employee ID: " + emobj.getEmpid() + " " + "Salary: " + emobj.getSalary() + " " + "Gratuity: " + emobj.getGratuity());
        Manager mobj= new Manager("Mandela", "e665", 400000, 20000, "Accounting", 20000);
        System.out.println("Manager Name: " + mobj.getName() + " " + "Employee ID: " + mobj.getEmpid() + " " + "Salary: " + mobj.getSalary() + " " + "Gratuity: " + mobj.getGratuity() + " " + "Department: " + mobj.getDepartment() + " " + "Bonus: " + mobj.getBonus());
    }
    
}
