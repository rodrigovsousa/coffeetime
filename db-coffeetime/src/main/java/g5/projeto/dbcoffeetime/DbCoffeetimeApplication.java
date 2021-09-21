package g5.projeto.dbcoffeetime;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@EnableScheduling
@SpringBootApplication
public class DbCoffeetimeApplication {

	public static void main(String[] args) {
		SpringApplication.run(DbCoffeetimeApplication.class, args);
	}

}
