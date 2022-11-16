package gratuitysysguitest;

public class Manager extends Employee{
    private String department;
    private double bonus;
    public Manager(String nme, String eid, double sal, double grt, String dep, double bnus) {
          super(nme,eid, sal, grt); // calls Employee constructor
          department=dep;
          bonus=bnus;
    }
    public void setDepartment(String dpt) {
        department=dpt;
    }
     public void setBonus(double bns) {
        bonus=bns;
    }
     
     public String getDepartment() {
        return department;
    }
     public double getBonus() {
        return bonus;
    }
}
