package g5.projeto.dbcoffeetime.service.mapper;

import g5.projeto.dbcoffeetime.domain.Evento;
import g5.projeto.dbcoffeetime.service.dto.EventoDTO;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring", uses = {SelectMotivoMapper.class, SituacaoMapper.class, PatrocinadorMapper.class})
public interface EventoMapper extends EntityMapper<EventoDTO, Evento>{
}