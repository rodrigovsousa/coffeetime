package g5.projeto.dbcoffeetime.service.dto;


import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.io.Serializable;

@Getter
@Setter
public class UsuarioListagemDTO implements Serializable {

    @NotNull
    private Long id;

    @NotNull
    @NotBlank
    private String nome;

    @NotNull
    @NotBlank
    @Email
    @Size(max = 225)
    private String email;

    @NotNull
    @NotBlank
    private boolean status;
};

