public class ModernStrategy {
    public static void main(String[] args) {
        String paymentMethod = "CREDIT_CARD";
        PaymentMethodType.valueOf(paymentMethod).pay(3.0);
    }
}

class PaymentMethods {
    public static void creditCard(double amount) {
        System.out.println("credit card");
    }

    public static void boleto(double amount) {
        System.out.println("boleto");
    }

    public static void pix(double amount) {
        System.out.println("pix");
    }
}

enum PaymentMethodType {
    CREDIT_CARD(PaymentMethods::creditCard), BOLETO(PaymentMethods::boleto), PIX(PaymentMethods::pix);

    private Consumer<Double> paymentStrategy;

    PaymentMethod(Consumer<Double> paymentStrategy) {
        this.paymentStrategy = paymentStrategy;
    }

    public void pay(Double amount) {
        paymentStrategy.accept(amount);
    }
}