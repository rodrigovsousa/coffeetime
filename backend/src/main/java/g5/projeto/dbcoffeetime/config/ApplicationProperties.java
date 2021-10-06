package g5.projeto.dbcoffeetime.config;

import lombok.Getter;
import lombok.Setter;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

@Getter
@Setter
@Configuration
@ConfigurationProperties
public class ApplicationProperties {

    private String enderecoRemetente;
    private String nomeRemetente;

}
