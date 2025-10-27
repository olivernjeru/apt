package gratuitysysguitest;

public class gratuitysystemtest {
    public static void main(String[] args) {
        Employee emobj= new Employee("Bob", "e111",80000,0);
        System.out.println("NAME: " +emobj.getName()+ " "+emobj.getEmpid()+" " +emobj.getSalaray()+" "+emobj.getGratuity());
        Manager mobj=new Manager("mandela", "e665", 4000000,20000,"accounting", 20000);
        System.out.println("NAME manager: "+mobj.getName()+ " "+mobj.getEmpid()+" "+mobj.getSalaray()+" "+mobj.getGratuity());
        System.out.println("NAME manager: "+mobj.getDepartment()+" "+mobj.getBonus());
    }
}
