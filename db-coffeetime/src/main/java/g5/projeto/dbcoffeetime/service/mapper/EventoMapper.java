package g5.projeto.dbcoffeetime.service.mapper;

import g5.projeto.dbcoffeetime.domain.Evento;
import g5.projeto.dbcoffeetime.service.dto.EventoDTO;
import g5.projeto.dbcoffeetime.service.dto.UsuarioDTO;
import org.mapstruct.Mapper;



@Mapper(componentModel = "spring", uses = {UsuarioDTO.class})
public interface EventoMapper extends EntityMapper<EventoDTO, Evento> {

    @Override
    EventoDTO toDto(Evento evento);

    @Override
    Evento toEntity(EventoDTO dto);

}
