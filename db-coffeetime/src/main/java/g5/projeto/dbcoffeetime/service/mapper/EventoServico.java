package g5.projeto.dbcoffeetime.service.mapper;

import g5.projeto.dbcoffeetime.service.EmailServico;
import g5.projeto.dbcoffeetime.service.dto.EmailDTO;
import org.springframework.scheduling.annotation.Scheduled;

public class EventoServico {


    private final EmailServico emailServico;


    @Scheduled(cron = "* * * * * *")
    public  void rotinaDeEmail(){

        EmailDTO emailDTO = new EmailDTO();
        emailDTO.setDestinatario("nathan.rocha@basis.com");
        emailDTO.setAssunto("sexta do salgado");
        emailDTO.setCorpo(""+"");
        emailDTO.setCopias().add("");

        emailServico.sedEmail(emailDTO);


    }


}
