package g5.projeto.dbcoffeetime.config;

import lombok.Getter;
import lombok.Setter;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

<<<<<<< HEAD
@Setter
@Getter
=======
@Getter
@Setter
>>>>>>> 207e46fda28999f21ba670f38f2ac154a8b00000
@Configuration
@ConfigurationProperties(prefix = "application")
public class ApplicationProperties {

    private String enderecoRemetente;
    private String nomeRemetente;

}
