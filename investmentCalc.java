import java.util.*;
import java.util.Scanner;
import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.Scanner;

public class InterestCalculator {
    public static void main(String[] args) {

        Scanner input = new Scanner(System.in);

        System.out.println("Enter the initial amount: ");
        double principal = input.nextDouble();

        System.out.println("Enter the rate of interest: ");
        double rate = input.nextDouble();

        System.out.println("Enter the number of years: ");
        int years = input.nextInt();

        System.out.println("Enter the monthly deposit amount: ");
        double monthlyDeposit = input.nextDouble();

        BigDecimal futureValue = calculateFutureValue(principal, rate, years, monthlyDeposit);
        System.out.println("The future value of your investment is: " + futureValue);
    }

    private static BigDecimal calculateFutureValue(double principal, double rate, int years, double monthlyDeposit) {

        rate = rate / 100;
        double totalMonthlyDeposits = years * 12;
        BigDecimal totalAmount = BigDecimal.valueOf(0);

        for (int i = 0; i < totalMonthlyDeposits; i++) {
            totalAmount = totalAmount.add(BigDecimal.valueOf(principal));
            principal = principal * (1 + rate / 12);
            principal = principal + monthlyDeposit;
        }

        return totalAmount.setScale(2, RoundingMode.HALF_UP);
    }
}