package g5.projeto.dbcoffeetime.config;


import lombok.Getter;
import lombok.Setter;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

@Setter
@Getter
@Configuration
@ConfigurationProperties(prefix =  "aplication")
public class ApplicationPropertier {

    private String enderecoRemetente;
    private  String nomeRemetente;


    public String getEndecoRemetente() {
    }
}
