package g5.projeto.dbcoffeetime.service;

import g5.projeto.dbcoffeetime.service.dto.EmailDTO;
import org.springframework.scheduling.annotation.Scheduled;

public class EventoServico {


    private final EmailServico emailServico;

    public EventoServico(EmailServico emailServico) {
        this.emailServico = emailServico;
    }


    @Scheduled(cron = "* * * * * *")
    public  void rotinaDeEmail(){

        EmailDTO emailDTO = new EmailDTO();
        emailDTO.setDestinatario("nathan.rocha@basis.com");
        emailDTO.setAssunto("sexta do salgado");
        emailDTO.setCorpo(""+"");
        emailDTO.getCopias().add("");

        emailServico.enviarEmail(emailDTO);

    }


}
