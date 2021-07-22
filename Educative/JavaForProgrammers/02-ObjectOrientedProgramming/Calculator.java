public class Calculator {
    //  Fields
    private double num1;
    private double num2;

    // Constructor
    public Calculator(){
        this.num1 = 0;
        this.num2 = 0;
    }

    public Calculator(double a, double b) {
        this.num1 = a;
        this.num2 = b;
    }

    // Methods
    public double add() {
        return this.num1 + this.num2;
    }
    public double subtract() {
        return this.num1 - this.num2;
    }
    public double multiply() {
        return this.num1 * this.num2;
    }
    public double divide() {
        return this.num1 / this.num2;
    }
}
