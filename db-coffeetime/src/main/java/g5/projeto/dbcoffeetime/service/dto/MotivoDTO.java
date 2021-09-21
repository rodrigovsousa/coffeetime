package g5.projeto.dbcoffeetime.service.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Getter
@Setter
public class MotivoDTO {

    @NotNull
    private Long id;

    @NotNull
    @NotBlank
    @Size(max = 20)
    private String descricao;

    @NotNull
    @NotBlank
    @Size(max = 200)
    private String titulo;


}