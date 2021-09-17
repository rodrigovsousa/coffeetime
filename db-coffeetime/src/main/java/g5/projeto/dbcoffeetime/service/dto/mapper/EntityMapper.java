package g5.projeto.dbcoffeetime.service.dto.mapper;

public interface EntityMapper <D, E>{

    E toEntity(D dto);

    D toDto(E entity);

    List<E> toEntity
}

