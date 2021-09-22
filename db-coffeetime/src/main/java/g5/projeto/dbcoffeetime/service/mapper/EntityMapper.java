package g5.projeto.dbcoffeetime.service.mapper;

import java.util.List;

public interface EntityMapper <D, E>{

    E toEntity(D dto);

    D toDto(E entity);

    List<E> toEntity (List<D> dtos);

    List<D> toDto(List<E> entitys);
}

