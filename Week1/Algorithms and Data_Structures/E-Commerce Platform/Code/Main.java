import java.util.Arrays;
import java.util.Comparator;

public class Main
{
    public static void main(String[] args)
    {

        // Sample Product Array
        Product[] products = {
                new Product(101, "Laptop", "Electronics"),
                new Product(102, "Mouse", "Electronics"),
                new Product(103, "Shirt", "Fashion"),
                new Product(104, "Keyboard", "Electronics"),
                new Product(105, "Shoes", "Fashion")
        };

        // 1. Linear Search Test
        System.out.println("🔍 Linear Search for 'Mouse':");
        Product linearResult = SearchFunctions.linearSearch(products, "Mouse");
        System.out.println(linearResult != null ? linearResult : "Product not found");

        // 2. Sort array by product name for binary search
        Arrays.sort(products, Comparator.comparing(Product::getProductName));

        // 3. Binary Search Test
        System.out.println("\n🔍 Binary Search for 'Shirt':");
        Product binaryResult = SearchFunctions.binarySearch(products, "Shirt");
        System.out.println(binaryResult != null ? binaryResult : "Product not found");
    }
}
