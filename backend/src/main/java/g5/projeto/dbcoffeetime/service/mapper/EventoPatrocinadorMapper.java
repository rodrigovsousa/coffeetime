package g5.projeto.dbcoffeetime.service.mapper;

import g5.projeto.dbcoffeetime.domain.Evento;
import g5.projeto.dbcoffeetime.domain.EventoPatrocinador;
import g5.projeto.dbcoffeetime.service.dto.EventoDTO;
import g5.projeto.dbcoffeetime.service.dto.EventoPatrocindorDTO;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring", uses = {UsuarioMapper.class})
public interface EventoPatrocinadorMapper extends EntityMapper<EventoPatrocindorDTO, EventoPatrocinador>{
}