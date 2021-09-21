package g5.projeto.dbcoffeetime.service;


import g5.projeto.dbcoffeetime.config.ApplicationPropertier;
import g5.projeto.dbcoffeetime.config.ApplicationProperties;
import g5.projeto.dbcoffeetime.service.dto.EmailDTO;
import lombok.RequiredArgsConstructor;
import lombok.SneakyThrows;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import javax.mail.internet.MimeMessage;
import javax.transaction.Transactional;

@Transactional
@Service
@RequiredArgsConstructor
public class EmailServico {

    private final JavaMailSender javaMailSender;

    private final ApplicationPropertier applicationProperties;

    @SneakyThrows
    public  void sedEmail(EmailDTO emailDTO){

        MimeMessage mimeMessage = javaMailSender.createMimeMessage();

        MimeMessageHelper mime = new MimeMessageHelper(mimeMessage, false);

        mime.setTo(emailDTO.getDestinatario());
        mime.setFrom(applicationProperties.getEndecoRemetente());
        mime.setSubject((emailDTO.getAssunto()));

        for(String s: emailDTO.getCopias()){

            mime.addCc(s);
        }

        mime.setText("hoje teremos salgado patrocinado por"+"nathan");

        javaMailSender.send(mimeMessage);

    }

    private final ApplicationProperties applicationProperties;

    @SneakyThrows
    public void sendEmail(EmailDTO emailDTO) {

        MimeMessage mimeMessage = javaMailSender.createMimeMessage();
        MimeMessageHelper mime = new MimeMessageHelper((mimeMessage), false);

        mime.setTo(emailDTO.getDestinatario());
        mime.setFrom(applicationProperties.getEnderecoRemetente());
        mime.setSubject(emailDTO.getAssunto());

        for(String s: emailDTO.getCopias()){
            mime.addCc(s);
        }

        mime.setText("Aqui vamos colocar quem vai patrocinar, temos que setar o patrocinador");

        javaMailSender.send(mimeMessage);
    }
}
