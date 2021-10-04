package g5.projeto.dbcoffeetime.service;

import g5.projeto.dbcoffeetime.domain.Evento;
import g5.projeto.dbcoffeetime.repositorio.EventoRepositorio;
import g5.projeto.dbcoffeetime.service.dto.EmailDTO;
import g5.projeto.dbcoffeetime.service.dto.EventoDTO;
import g5.projeto.dbcoffeetime.service.exceptions.ResourceNotFoundException;
import g5.projeto.dbcoffeetime.service.filtro.EventoFiltro;
import g5.projeto.dbcoffeetime.service.mapper.EventoMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor
public class EventoServico {

    private final EventoMapper mapper;
    private final EventoRepositorio repositorio;

    public List<EventoDTO> filtrarData(EventoFiltro filtro) {
        return mapper.toDto(repositorio.findAll(filtro.filter()));
        private final EmailServico servico;

        @Scheduled(cron = "0 0 0 * * 5")
        public void rotinaEmail () {
            EmailDTO emailDTO = new EmailDTO();
            emailDTO.setDestinatario("destinatario@gmail.com");
            emailDTO.setAssunto("assunto");
            emailDTO.setCorpo("corpo");
            emailDTO.getCopias().add("copias@gmail.com");

            servico.enviarEmail(emailDTO);
        }

        public List<EventoDTO> findAll () {
            return mapper.toDto(repositorio.findAll());
        }

        public EventoDTO findById (Long id){
            Optional<Evento> obj = repositorio.findById(id);
            Evento entity = obj.orElseThrow(() -> new ResourceNotFoundException("Evento não encontrado!"));
            return mapper.toDto(entity);
        }

        public EventoDTO insert (EventoDTO dto){
            Evento entity = mapper.toEntity(dto);
            entity = repositorio.save(entity);
            return mapper.toDto(entity);
        }

    }

}
