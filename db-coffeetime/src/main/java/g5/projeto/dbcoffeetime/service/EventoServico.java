package g5.projeto.dbcoffeetime.service;

import g5.projeto.dbcoffeetime.repositorio.EventoRepositorio;
import g5.projeto.dbcoffeetime.service.dto.EmailDTO;
import g5.projeto.dbcoffeetime.service.mapper.EventoMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
//@RequiredArgsConstructor
public class EventoServico {


    private final EmailServico emailServico;
    //private final EventoRepositorio eventoRepositorio;
   // private final EventoMapper eventoMapper;

    public EventoServico(EmailServico emailServico) {
        this.emailServico = emailServico;
    }


    @Scheduled(cron = "0 59 14 * * *")
    public  void rotinaDeEmail(){

        EmailDTO emailDTO = new EmailDTO();
        emailDTO.setDestinatario("rodrigovsousa92@gmail.com");
        emailDTO.setAssunto("sexta do salgado");
        emailDTO.setCorpo(""+"");
        emailDTO.getCopias().add("");

        emailServico.enviarEmail(emailDTO);

    }

}
