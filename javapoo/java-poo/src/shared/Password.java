package shared;

import java.util.regex.Pattern;

public record Password(String password) {

    private static final Pattern BCRYPT_PATTERN = Pattern.compile("^\\$2[ayb]?\\$\\d{2}\\$[./A-Za-z0-9]{53}$");

    public Password {
        validate(password);
    }

    private void validate(String password) {
        if (password != null && BCRYPT_PATTERN.matcher(password).matches()) {
            return;
        }

        if (password == null || password.isBlank()) {
            throw new IllegalArgumentException("Password cannot be null or blank.");
        }

        String trimmed = password.trim();

        if (trimmed.length() < 8) {
            throw new IllegalArgumentException("Password must have at least 8 characters.");
        }
        if (trimmed.length() > 64) {
            throw new IllegalArgumentException("Password must have at most 64 characters.");
        }

        if (!trimmed.matches(".*[A-Z].*")) {
            throw new IllegalArgumentException("Password must contain at least one uppercase letter.");
        }
        if (!trimmed.matches(".*[a-z].*")) {
            throw new IllegalArgumentException("Password must contain at least one lowercase letter.");
        }
        if (!trimmed.matches(".*\\d.*")) {
            throw new IllegalArgumentException("Password must contain at least one digit.");
        }
        if (!trimmed.matches(".*[!@#$%^&*()_+\\-=[\\]{};':\"\\\\|,.<>/?].*")) {
            throw new IllegalArgumentException("Password must contain at least one special character.");
        }
    }
}
