package g5.projeto.dbcoffeetime.service;
import g5.projeto.dbcoffeetime.domain.*;
import g5.projeto.dbcoffeetime.repositorio.EventoPatrocinadorRepositorio;
import g5.projeto.dbcoffeetime.repositorio.EventoRepositorio;
import g5.projeto.dbcoffeetime.repositorio.UsuarioEventoRepositorio;
import g5.projeto.dbcoffeetime.service.dto.EmailDTO;
import g5.projeto.dbcoffeetime.service.dto.EventoDTO;
import g5.projeto.dbcoffeetime.service.dto.UsuarioDTO;
import g5.projeto.dbcoffeetime.service.exceptions.ResourceNotFoundException;
import g5.projeto.dbcoffeetime.service.filtro.EventoFiltro;
import g5.projeto.dbcoffeetime.service.mapper.EventoMapper;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import javax.transaction.Transactional;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class EventoServico {


    private final EmailServico emailServico;
    private final EventoRepositorio eventoRepositorio;
    private final UsuarioEventoRepositorio usuarioEventoRepositorio;
    private final EventoPatrocinadorRepositorio eventoPatrocinadorRepositorio;
    private final EventoMapper eventoMapper;

    public EventoServico(EmailServico emailServico, EventoRepositorio eventoRepositorio,
                         UsuarioEventoRepositorio usuarioEventoRepositorio,
                         EventoPatrocinadorRepositorio eventoPatrocinadorRepositorio, EventoMapper eventoMapper) {
        this.emailServico = emailServico;
        this.eventoRepositorio = eventoRepositorio;
        this.usuarioEventoRepositorio = usuarioEventoRepositorio;
        this.eventoPatrocinadorRepositorio = eventoPatrocinadorRepositorio;
        this.eventoMapper = eventoMapper;
    }


    @Scheduled(cron = "0 43 15 * * *")
    public  void rotinaDeEmail(){
        List<Evento> eventos = eventoRepositorio.findAllByDataGreaterThanEqual(LocalDate.now());

        for(Evento evento : eventos){
            List<UsuarioEvento> usuarioEventos = usuarioEventoRepositorio.findAllByEvento_IdAndUsuario_Status(evento.getId(),true);
            enviarEmailsUsuarios(usuarioEventos);
        }

    }

    public List<EventoDTO> filtrarData(EventoFiltro filtro) {
        return eventoMapper.toDto(eventoRepositorio.findAll(filtro.filter()));
    }


    private void enviarEmailsUsuarios(List<UsuarioEvento> usuarioEventos) {
        for(UsuarioEvento usuarioEvento : usuarioEventos){
            EmailDTO emailDTO = new EmailDTO();
            emailDTO.setDestinatario(usuarioEvento.getUsuario().getEmail());
            emailDTO.setAssunto("Novo evento " + usuarioEvento.getEvento().getMotivo().getDescricao());
            emailDTO.setCorpo("Novo evento patrocinado por " + usuarioEvento.getEvento().getPatrocinadores());
            emailDTO.getCopias().add("leoneerick56@gmail.com");

            emailServico.enviarEmail(emailDTO);

        }
    }

    public List<EventoDTO> buscarTodos(){
        List<Evento> eventos = eventoRepositorio.findAll();
        return eventoMapper.toDto(eventos);

    }

    public EventoDTO findById (Long id){
        Optional<Evento> obj = eventoRepositorio.findById(id);
        Evento entity = obj.orElseThrow(() -> new ResourceNotFoundException("Evento não encontrado!"));
        return eventoMapper.toDto(entity);
    }

    public EventoDTO insert (EventoDTO dto){
        Evento entity = eventoMapper.toEntity(dto);
        entity = eventoRepositorio.save(entity);


        for (UsuarioDTO patrocinador : dto.getPatrocinadores()){
            EventoPatrocinador evetoPatroc = new EventoPatrocinador();
            evetoPatroc.setId(new EventoPatrocinadorId(entity.getId(), patrocinador.getId()));
            evetoPatroc = eventoPatrocinadorRepositorio.save(evetoPatroc);
            entity.getPatrocinadores().add(evetoPatroc);
        }

        return eventoMapper.toDto(entity);
    }


    public void delete(Long id) {
        eventoRepositorio.deleteById(id);
    }
}
