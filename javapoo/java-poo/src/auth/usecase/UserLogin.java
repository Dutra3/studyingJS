package auth.usecase;

import auth.model.User;
import auth.provider.CriptoProvider;
import shared.UseCase;

public class UserLogin implements UseCase<UserLogin.Input, User> {

    public record Input(String email, String password) {}

    private final UserRepository userRepository;
    private final CriptoProvider criptoProvider;

    public UserLogin(UserRepository userRepository, CriptoProvider criptoProvider) {
        this.userRepository = userRepository;
        this.criptoProvider = criptoProvider;
    }

    @Override
    public Output execute(Input input) {
        String email = input.email();
        String password = input.password();

        User user = userRepository.findByEmail(email);
        if (user == null) {
            throw new RuntimeException("User not found");
        } else if (user.getPassword() != null) {
            if (!criptoProvider.compare(password, user.getPassword().password()))
            throw new RuntimeException("Invalid credentials");
        }

        return user.withoutPassword();
    }
    
}
