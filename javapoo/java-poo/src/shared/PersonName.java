package shared;

public record PersonName(String completeName) {

    public PersonName {
        if (completeName == null || completeName.isBlank()) {
            throw new IllegalArgumentException("Name cannot be null or blank.");
        }

        String trimmed = completeName.trim();

        if (trimmed.length() < 2) {
            throw new IllegalArgumentException("Name must have at least 2 characters.");
        }
        if (trimmed.length() > 100) {
            throw new IllegalArgumentException("Name must have at most 100 characters.");
        }

        if (!trimmed.contains(" ")) {
            throw new IllegalArgumentException("Name must contain at least a first name and surname.");
        }

        if (!trimmed.matches("[A-Za-zÀ-ÖØ-öø-ÿ'\\- ]+")) {
            throw new IllegalArgumentException("Name contains invalid characters.");
        }

        for (String part : trimmed.split(" ")) {
            if (part.length() < 2) {
                throw new IllegalArgumentException("Each part of the name must have at least 2 letters.");
            }
        }
    }
}

