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

    @Scheduled(cron = "0 0 0 0 0 0")
    public void rotinaDeEmail() {
        EmailDTO emailDTO = new EmailDTO();
        emailDTO.setDestinatario("nathan.rocha@basis.com");
        emailDTO.setAssunto("COFFETIME");
        emailDTO.setCorpo("Hoje teremos salgado patrocinado por " + "");
        emailDTO.getCopias().add("alisson.vighini@basis.com");

        emailServico.sendEmail(emailDTO);

    }
}
