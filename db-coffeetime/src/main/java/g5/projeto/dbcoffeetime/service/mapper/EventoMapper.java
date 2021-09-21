package g5.projeto.dbcoffeetime.service.mapper;

import g5.projeto.dbcoffeetime.domain.Evento;
import g5.projeto.dbcoffeetime.service.dto.EventoDTO;
<<<<<<< HEAD
=======
import g5.projeto.dbcoffeetime.service.dto.SelectDTO;
>>>>>>> 173069d0474de1c5e0952a1394f450f6193bc1d5
import org.mapstruct.InheritInverseConfiguration;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;


@Mapper(componentModel = "spring", uses = {})
public interface EventoMapper extends EntityMapper<EventoDTO, Evento> {
<<<<<<< HEAD
=======

    @Override
    @Mapping(source = "id", target = "value");

    @Override
    @Mapping(source = "patrocinador", target = "value");
    @Mapping(source = "justificativaAdiamento", target = "value");

    SelectDTO toDto(Evento Evento);

    @Override
    @InheritInverseConfiguration
    Evento toEntity(EventoDTO dto);
>>>>>>> 173069d0474de1c5e0952a1394f450f6193bc1d5
}
