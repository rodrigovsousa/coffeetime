package g5.projeto.dbcoffeetime.service.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Getter
@Setter
@NoArgsConstructor
public class CargoDTO {

    private Long id;

    @NotNull
    @Size(max = 200)
    private String descricao;
}
