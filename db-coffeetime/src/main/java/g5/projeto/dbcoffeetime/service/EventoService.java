package g5.projeto.dbcoffeetime.service;

import g5.projeto.dbcoffeetime.service.dto.EmailDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
@RequiredArgsConstructor
public class EventoService {

    private final EmailServico emailServico;

    @Scheduled(cron = "0 55 15 * * *  ")
    public rotinaDeEmail() {
        EmailDTO emailDTO = new EmailDTO();
        emailDTO.setDestinatario("grupo5@gmail.com");
        emailDTO.setAssunto("SEXTA DO SALGADO");
        emailDTO.setCorpo("Hoje teremos salgado patrocinado por ...... tem que instanciar aqui");
        emailDTO.getCopias().add("aqui manda pra alguém, tem que ter um email aqui nessa merda");
        emailServico.sendEmail(emailDTO);

    }
}
