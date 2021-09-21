package g5.projeto.dbcoffeetime.service.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotNull;

@Getter
@Setter
public class UsuarioEventoDTO {

    @NotNull
    private Long id;

    @NotNull
    private Long idEvento;

    @NotNull
    private Long idUsuario;
}
