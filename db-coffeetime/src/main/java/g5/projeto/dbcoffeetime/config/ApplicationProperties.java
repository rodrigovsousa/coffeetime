package g5.projeto.dbcoffeetime.config;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

@Configuration
@ConfigurationProperties
public class ApplicationProperties {

    private String enderecoRemente;
    private String nomeRemetente
}
