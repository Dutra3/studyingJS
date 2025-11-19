package auth.model;

import java.util.UUID;

import shared.Email;
import shared.Entity;
import shared.Password;
import shared.PersonName;

public class User extends Entity {
    private PersonName name;
    private Email email;
    private Password password;

    public User(String name, String email) {
        this(null, name, email, null);
    }

    public User(UUID id, String name, String email, String password) {
        super(id);
        this.name = new PersonName(name);
        this.email = new Email(email);
        this.password = password != null ? new Password(password) : null;
    }

    public User withoutPassword() {
        return new User(this.id, this.name.completeName(), this.email.email(), null);
    }

    public PersonName getName() {
        return name;
    }

    public Email getEmail() {
        return email;
    }

    public Password getPassword() {
        return password;
    }
}
