package g5.projeto.dbcoffeetime.service.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Getter
@Setter
public class CargoDTO {

    @NotNull
    private Long id;

    @NotNull
    @Size(max = 20)
    private String descricao;
}
