package g5.projeto.dbcoffeetime.service.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.*;
import java.time.LocalDate;

@Getter
@Setter
public class UsuarioDTO {

    @NotNull
    private Long id;

    @NotNull
    @NotBlank
    @Size(max = 120)
    private String nome;

    @NotNull
    @Size(min = 9, max = 11)
    private String cpf;

    @Email
    @NotNull
    @NotBlank
    @Size(max = 225)
    private String email;

    @NotNull
    private String foto;

    @NotNull
    @Past
    private LocalDate dataDeNascimento;

    @NotNull
    @NotBlank
    private boolean status;

    @NotNull
    @Size(max = 15)
    private String telefone;
}
