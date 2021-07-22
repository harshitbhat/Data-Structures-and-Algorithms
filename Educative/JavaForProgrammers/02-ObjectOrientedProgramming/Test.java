public class Test {
    public static void main(String[] args) {
        
    }
}


// Structure of JAVA class
class Car {
    // Class data members
    private int speed;
    int topSpeed;
    int totalSeats;
    int fuelCapacity;
    final int wheels = 4;
    static String manufacturer;

    // Class Methods

    // Setter method to set speed
    public void setSpeed(int newSpeed) {
        speed = newSpeed;
    }

    // Getter method to get value of the speed 
    public int getSpeed() {
        return speed;
    }

    void refuel(){}
    void park(){}
    void drive(){}
    public void printSpeed(int speed){
        System.out.println("Speed: " + speed);
    }
}

class Cop {
    private int gun;

    public int getGun(){
        return gun;
    }
}

// Method overloading

class Calculator {
    public double product(double x, double y){
        return x * y;
    }
    public double product(double x, double y,double z){
        return x * y * z;
    }
    public int product(int x, int y) {
        return x + y;
    }
}

// Constructors

class Date {
    private int date;
    private int month;
    private int year;
    private String event;

    // Default constructor
    public Date(){
        this.date = 0;
        this.month = 0;
        this.year = 0;
    }

    // Parameterised Constructor
    public Date(int d, int m, int y) {
        this.date = d;
        this.month = m;
        this.year = y;
    }

    // Parameterised Constructor
    public Date(int d, int m, int y, String event){
        this(d,m,y);
        this.event = event;
    }

    public void printDate(){
        System.out.println("Date: "+ date + "/ " + month + "/ " + year + " ---> " + event);
    }
}