package g5.projeto.dbcoffeetime.service;

<<<<<<< HEAD
=======
<<<<<<< HEAD

import g5.projeto.dbcoffeetime.config.ApplicationPropertier;
=======
>>>>>>> 173069d0474de1c5e0952a1394f450f6193bc1d5
>>>>>>> 207e46fda28999f21ba670f38f2ac154a8b00000
import g5.projeto.dbcoffeetime.config.ApplicationProperties;
import g5.projeto.dbcoffeetime.service.dto.EmailDTO;
import lombok.RequiredArgsConstructor;
import lombok.SneakyThrows;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import javax.mail.internet.MimeMessage;
import javax.transaction.Transactional;

<<<<<<< HEAD



@Transactional
@Service
=======
<<<<<<< HEAD
@Transactional
@Service
=======
@Service
@Transactional
>>>>>>> 173069d0474de1c5e0952a1394f450f6193bc1d5
>>>>>>> 207e46fda28999f21ba670f38f2ac154a8b00000
@RequiredArgsConstructor
public class EmailServico {

    private final JavaMailSender javaMailSender;

<<<<<<< HEAD
    private final ApplicationProperties applicationProperties;
=======
<<<<<<< HEAD
    private final ApplicationPropertier applicationProperties;
=======
    private final ApplicationProperties applicationProperties;
>>>>>>> 173069d0474de1c5e0952a1394f450f6193bc1d5
>>>>>>> 207e46fda28999f21ba670f38f2ac154a8b00000

    @SneakyThrows
    public  void sedEmail(EmailDTO emailDTO){

        MimeMessage mimeMessage = javaMailSender.createMimeMessage();

        MimeMessageHelper mime = new MimeMessageHelper(mimeMessage, false);

        mime.setTo(emailDTO.getDestinatario());
        mime.setFrom(applicationProperties.getEnderecoRemetente());
        mime.setSubject((emailDTO.getAssunto()));

        for(String s: emailDTO.getCopias()){

            mime.addCc(s);
        }

        mime.setText("hoje teremos salgado patrocinado por"+"nathan");

        javaMailSender.send(mimeMessage);

    }

<<<<<<< HEAD
=======
<<<<<<< HEAD
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
=======
>>>>>>> 173069d0474de1c5e0952a1394f450f6193bc1d5
>>>>>>> 207e46fda28999f21ba670f38f2ac154a8b00000
}
