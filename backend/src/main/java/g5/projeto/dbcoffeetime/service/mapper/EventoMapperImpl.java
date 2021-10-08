package g5.projeto.dbcoffeetime.service.mapper;

import g5.projeto.dbcoffeetime.domain.*;
import g5.projeto.dbcoffeetime.service.dto.EventoDTO;
import g5.projeto.dbcoffeetime.service.dto.EventoPatrocindorDTO;
import g5.projeto.dbcoffeetime.service.dto.UsuarioDTO;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;


@Component
public class EventoMapperImpl implements EventoMapper {

    private final MotivoMapper motivoMapper;
    private final SituacaoMapper situacaoMapper;
    private final EventoPatrocinadorMapper eventoPatrocinadorMapper;
    private final UsuarioMapper usuarioMapper;

    public EventoMapperImpl(MotivoMapper motivoMapper, EventoPatrocinadorMapper eventoPatrocinadorMapper, SituacaoMapper situacaoMapper, UsuarioMapper usuarioMapper){
        this.eventoPatrocinadorMapper = eventoPatrocinadorMapper;
        this.situacaoMapper = situacaoMapper;
        this.motivoMapper = motivoMapper;
        this.usuarioMapper = usuarioMapper;
    }

    public EventoDTO toDto(Evento evento) {
        EventoDTO eventoDto = new EventoDTO();
        eventoDto.setId(evento.getId());
        eventoDto.setNome(evento.getNome());
        eventoDto.setData(evento.getData());
        eventoDto.setSituacao(situacaoMapper.toDto(evento.getSituacao()));
        eventoDto.setMotivo(motivoMapper.toDto(evento.getMotivo()));
        eventoDto.setValor(evento.getValor());
        List<EventoPatrocindorDTO> patrocinadorDto = eventoPatrocinadorMapper.toDto(evento.getPatrocinadores());

        List<UsuarioDTO> usuariosDto = new ArrayList<>();
        for (EventoPatrocindorDTO eventoPatrocinador : patrocinadorDto){
            usuariosDto.add(eventoPatrocinador.getUsuario());
        }

        eventoDto.setPatrocinadores(usuariosDto);

        return eventoDto;
    }

    @Override
    public List<Evento> toEntity(List<EventoDTO> dtoList) {
        return dtoList.stream().map(this::toEntity).collect(Collectors.toList());
    }

    @Override
    public List<EventoDTO> toDto(List<Evento> entityList) {
        return entityList.stream().map(this::toDto).collect(Collectors.toList());
    }

    public Evento toEntity(EventoDTO eventoDTO){
        Evento evento = new Evento();
        evento.setId(eventoDTO.getId());
        evento.setNome(eventoDTO.getNome());
        evento.setData(eventoDTO.getData());
        evento.setSituacao(situacaoMapper.toEntity(eventoDTO.getSituacao()));
        evento.setMotivo(motivoMapper.toEntity(eventoDTO.getMotivo()));
        evento.setValor(eventoDTO.getValor());
        evento.setSituacao(new Situacao(1L));

        List<Usuario> usuarios = usuarioMapper.toEntity(eventoDTO.getPatrocinadores());

        List<EventoPatrocinador> patrocinadores = new ArrayList<>();

        for (Usuario usuario : usuarios){
            EventoPatrocinador eventoPatrocinador = new EventoPatrocinador();
            EventoPatrocinadorId id = new EventoPatrocinadorId();
            id.setIdEvento(evento.getId());
            id.setIdUsuario(usuario.getId());
            eventoPatrocinador.setId(id);
            patrocinadores.add(eventoPatrocinador);
        }

        evento.setPatrocinadores(patrocinadores);

        return evento;
    }
}
