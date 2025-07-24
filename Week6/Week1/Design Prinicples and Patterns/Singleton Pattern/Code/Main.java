public class Main {
    public static void main(String[] args) {
        // Get two instances
        Logger logger1 = Logger.getInstance();
        Logger logger2 = Logger.getInstance();

        // Log messages using both
        logger1.log("This is the first log message.");
        logger2.log("This is the second log message.");

        // Test condition
        if (logger1 == logger2) {
            System.out.println("Only one instance of Logger exists.");
        } else {
            System.out.println("Different instances exist!");
        }
    }
}
