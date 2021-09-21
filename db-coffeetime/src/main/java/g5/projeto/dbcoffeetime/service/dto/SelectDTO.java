package g5.projeto.dbcoffeetime.service.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Getter
@Setter
public class SelectDTO {

    @NotNull
    private Long value;

    @NotNull
    private String nome;

    @NotNull
    @NotBlank
    private SelectDTO cargo;

    @NotNull
    @NotBlank
    private boolean status;
}