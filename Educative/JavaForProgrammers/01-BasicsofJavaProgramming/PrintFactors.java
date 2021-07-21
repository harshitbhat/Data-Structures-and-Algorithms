public class PrintFactors {
    public static void printFactors(int num) {
        int current = 1;
        while(current <= num) {
            if(num % current == 0) {
                System.out.println(current);
            }
            current++;
        }
    }
    public static void main(String[] args) {
        printFactors(42);
    }
}
