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
<<<<<<< HEAD
}
=======
}
>>>>>>> 9e3cd96a01ffec9bd1a957b4a353b0a5b11953e3
