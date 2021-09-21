package g5.projeto.dbcoffeetime.service.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotNull;

@Getter
@Setter
public class SituacaoDTO {

    private Long id;

    @NotNull
    private String descricao;
}
