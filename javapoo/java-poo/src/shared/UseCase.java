package shared;

public interface UseCase<Input, Output> {
    Output execute(Input input);
    
}
