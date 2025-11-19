package auth.provider;

public interface CriptoProvider {
    String hash(String value);
    
    boolean compare(String value, String hashedValue);
}
