package g5.projeto.dbcoffeetime;

import g5.projeto.dbcoffeetime.config.ApplicationProperties;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.scheduling.annotation.EnableScheduling;

@EnableConfigurationProperties(ApplicationProperties.class)
@EnableScheduling
@SpringBootApplication
public class DbCoffeetimeApplication {

	public static void main(String[] args) {
		SpringApplication.run(DbCoffeetimeApplication.class, args);
	}

}
