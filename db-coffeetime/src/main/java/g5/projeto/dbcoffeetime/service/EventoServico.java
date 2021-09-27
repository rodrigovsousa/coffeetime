package g5.projeto.dbcoffeetime.service;

import g5.projeto.dbcoffeetime.domain.Evento;
import g5.projeto.dbcoffeetime.domain.UsuarioEvento;
import g5.projeto.dbcoffeetime.repositorio.EventoRepositorio;
import g5.projeto.dbcoffeetime.repositorio.UsuarioEventoRepositorio;
import g5.projeto.dbcoffeetime.service.dto.EmailDTO;
import g5.projeto.dbcoffeetime.service.dto.EventoDTO;
import g5.projeto.dbcoffeetime.service.mapper.EventoMapper;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.time.LocalDate;
import java.util.List;

@Service
@Transactional

public class EventoServico {


    private final EmailServico emailServico;
    private final EventoRepositorio eventoRepositorio;
    private final EventoMapper eventoMapper;
    private final UsuarioEventoRepositorio usuarioEventoRepositorio;

    public EventoServico(EmailServico emailServico, EventoRepositorio eventoRepositorio, EventoMapper eventoMapper,
                         UsuarioEventoRepositorio usuarioEventoRepositorio) {
        this.emailServico = emailServico;
        this.eventoRepositorio = eventoRepositorio;
        this.eventoMapper = eventoMapper;
        this.usuarioEventoRepositorio = usuarioEventoRepositorio;

    }


    @Scheduled(cron = "0 33 23 * * *")
    public  void rotinaDeEmail(){
        List<Evento> eventos = eventoRepositorio.findAllByDataGreaterThanEqual(LocalDate.now());

        for(Evento evento : eventos){
            List<UsuarioEvento> usuarioEventos = usuarioEventoRepositorio.findAllByEvento_IdAndUsuario_Status(evento.getId(),true);
            enviarEmailsUsuarios(usuarioEventos);
        }

    }

    private void enviarEmailsUsuarios(List<UsuarioEvento> usuarioEventos) {
        for(UsuarioEvento usuarioEvento : usuarioEventos){
            EmailDTO emailDTO = new EmailDTO();
            emailDTO.setDestinatario(usuarioEvento.getUsuario().getEmail());
            emailDTO.setAssunto("Novo evento " + usuarioEvento.getEvento().getMotivo().getDescricao());
            emailDTO.setCorpo("Novo evento patrocinado por " + usuarioEvento.getEvento().getPatrocinador());
            emailDTO.getCopias().add("matheus1995@gmail.com");

            emailServico.enviarEmail(emailDTO);

        }
    }

    public List<EventoDTO> buscarTodos(){
        List<Evento> eventos = eventoRepositorio.findAll();
        return eventoMapper.toDto(eventos);

    }

}
