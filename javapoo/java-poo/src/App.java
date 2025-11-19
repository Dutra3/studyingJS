import auth.model.User;

public class App {
    public static void main(String[] args) throws Exception {
        User user = new User("gabriel", "email@email.com");
        System.out.println("Hello, " + user.getName() + "! Your email is " + user.getEmail() + " and your ID is " + user.getId());
    }
}
