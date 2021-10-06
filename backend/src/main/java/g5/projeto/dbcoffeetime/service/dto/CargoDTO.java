package g5.projeto.dbcoffeetime.service.dto;

import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
public class CargoDTO implements Serializable {

    private Long id;
    private String descricao;
}
