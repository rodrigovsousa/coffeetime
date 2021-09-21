package g5.projeto.dbcoffeetime.service.mapper;

import g5.projeto.dbcoffeetime.domain.Evento;
import g5.projeto.dbcoffeetime.service.dto.EventoDTO;
import g5.projeto.dbcoffeetime.service.dto.SelectDTO;
import org.mapstruct.InheritInverseConfiguration;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;


@Mapper(componentModel = "spring", uses = {})
public interface EventoMapper extends EntityMapper<EventoDTO, Evento> {

    @Override
    @Mapping(source = "id", target = "value");

    @Override
    @Mapping(source = "patrocinador", target = "value");
    @Mapping(source = "justificativaAdiamento", target = "value");

    SelectDTO toDto(Evento Evento);

    @Override
    @InheritInverseConfiguration
    Evento toEntity(EventoDTO dto);

}
