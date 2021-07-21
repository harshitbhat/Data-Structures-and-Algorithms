public class CircleArea {
    public static double circleArea(double radius) {
        double PI = 3.14159;
        return PI * radius * radius;
    }
    public static void main(String[] args) {
        int radius = 10;

        double area = circleArea(radius);
        System.out.println(area);
    }
}
