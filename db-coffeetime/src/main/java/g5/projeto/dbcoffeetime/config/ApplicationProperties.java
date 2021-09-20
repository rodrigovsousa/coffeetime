package g5.projeto.dbcoffeetime.config;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

@Configuration
@ConfigurationProperties(prefix = "aplication")
public class ApplicationProperties {

    private String enderecoRemetente;
    private String nomeRemetente
}
