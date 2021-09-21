package g5.projeto.dbcoffeetime.service.mapper;

import g5.projeto.dbcoffeetime.service.dto.SelectDTO;

import java.util.List;

public interface EntityMapper <D, E>{

    E toEntity(D dto);

    SelectDTO toDto(E entity);

    List<E> toEntity(List<D> dtoList);

    List<D> toDto(List<E> entityList);
}

