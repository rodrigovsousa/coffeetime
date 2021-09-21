package g5.projeto.dbcoffeetime.service.mapper;

import g5.projeto.dbcoffeetime.domain.Evento;
import g5.projeto.dbcoffeetime.service.dto.SelectDTO;


@Mapper(componentModel = "spring", uses = {})
public interface EventoMapper extends EntityMapper<EventoDTO, Evento> {

    @Mapping(source = "id", target = "value");
    @Mapping(source = "patrocinador", target = "value");
    @Mapping(source = "justificativaAdiamento", target = "value");

    SelectDTO toDto(Evento Evento);

    @Override
    @InheritInverseConfiguration
    Evento toEntity(EventoDTO dto);
}
