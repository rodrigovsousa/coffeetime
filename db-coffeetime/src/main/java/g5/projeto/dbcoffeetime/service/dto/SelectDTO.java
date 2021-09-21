package g5.projeto.dbcoffeetime.service.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Getter
@Setter
public class SelectDTO {

    private Long value;

    private String nome;

    private SelectDTO cargo;

    private boolean status;
}