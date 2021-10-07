package g5.projeto.dbcoffeetime.service.mapper;


import g5.projeto.dbcoffeetime.domain.Evento;
import g5.projeto.dbcoffeetime.service.dto.FullCalendarDTO;
import org.mapstruct.InheritInverseConfiguration;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface FullCalendarMapper extends EntityMapper<FullCalendarDTO, Evento>{

    @Mapping(source = "nome", target = "title")
    @Mapping(source = "data", target = "date")
    FullCalendarDTO toDto(Evento evento);

    @InheritInverseConfiguration
    Evento toEntity(FullCalendarDTO selectDTO);
}
