public class EvenInRange {
    public static boolean evenInRange(int x) {
        return x % 2 == 0 && x >= 24 && x <= 32;
     }
    public static void main(String[] args) {
        System.out.println(evenInRange(0));
        System.out.println(evenInRange(24));
        System.out.println(evenInRange(25));
        System.out.println(evenInRange(34)); 
        }
}
