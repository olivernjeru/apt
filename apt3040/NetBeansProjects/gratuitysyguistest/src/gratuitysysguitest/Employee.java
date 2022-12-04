package gratuitysysguitest;

public class Employee {
    private String name;
    private String empid;
    private double salary;
    private double gratuity;
    
    public Employee(String nme, String eid, double sal, double grt) {
        name=nme;
        empid=eid;
        salary=sal;
        gratuity=grt;
    }
    public void setName(String nm) {
        name=nm;
    }
     public void setEmpid(String ed) {
        empid=ed;
    }
      public void setGratuity(double gt) {
        gratuity=gt;
    }
        public void setSalaray(double sal) {
        salary=sal;
    }
     public String getName() {
        return name;
    }
     public String getEmpid() {
        return empid;
    }
      public double getGratuity() {
        return gratuity;
    }
        public double getSalaray() {
        return salary;
    }   
}
