package g5.projeto.dbcoffeetime.service.dto;

import g5.projeto.dbcoffeetime.domain.Evento;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.validator.constraints.br.CPF;

import javax.validation.constraints.*;
import java.time.LocalDate;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UsuarioDTO {

    private Long id;

    @NotBlank
    @Size(max = 120)
    private String nome;

    @CPF
    private String cpf;

    @Email
    private String email;

    @NotBlank
    private LocalDate dataDeNascimento;

    @NotBlank
    private boolean status;

    @NotBlank
    @Size(min = 11, max = 15)
    private String telefone;

<<<<<<< HEAD
};
=======
    @NotBlank
    private List<Evento> evento;
}
>>>>>>> 173069d0474de1c5e0952a1394f450f6193bc1d5
