package shared;

import java.util.UUID;

public abstract class Entity {
    public final UUID id;

    protected Entity(UUID id) {
        this.id = id != null ? id : UUID.randomUUID();
    }

    public UUID getId() {
        return id;
    }

    @Override
    public int hashCode() {
        return id.hashCode();
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) return true;
        if (obj == null || getClass() != obj.getClass()) return false;
        Entity entity = (Entity) obj;
        return id.equals(entity.id);
    }
}
