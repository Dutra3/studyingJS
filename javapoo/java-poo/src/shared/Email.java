package shared;

public record Email(String email) {

    public Email {
        if (email == null || email.isBlank()) {
            throw new IllegalArgumentException("Email cannot be null or blank.");
        }

        String trimmed = email.trim().toLowerCase();

        if (trimmed.length() < 5) {
            throw new IllegalArgumentException("Email is too short.");
        }
        if (trimmed.length() > 254) {
            throw new IllegalArgumentException("Email is too long.");
        }

        String regex = "^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}$";

        if (!trimmed.matches(regex)) {
            throw new IllegalArgumentException("Invalid email format.");
        }

        String domain = trimmed.substring(trimmed.indexOf("@") + 1);
        if (domain.startsWith("-") || domain.endsWith("-") ||
            domain.startsWith(".") || domain.endsWith(".")) {
            throw new IllegalArgumentException("Invalid domain format.");
        }

        String local = trimmed.substring(0, trimmed.indexOf("@"));
        if (local.startsWith(".")) {
            throw new IllegalArgumentException("Invalid email format.");
        }
    }
}

