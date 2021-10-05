package g5.projeto.dbcoffeetime.service.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.validator.constraints.br.CPF;

import javax.validation.constraints.Email;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.io.Serializable;
import java.time.LocalDate;
import java.util.List;

@Getter
@Setter
public class UsuarioDTO implements Serializable {

    private Long id;

    @NotBlank
    @Size(min = 3, max = 50)
    private String patrocinador;

    @NotBlank
    @JsonFormat(pattern = "dd/MM/yyyy")
    private LocalDate dataDeNascimento;

    @CPF
    private String cpf;

    @Email
    private String email;

    @NotBlank
    @Min(11)
    private String telefone;

    @NotBlank
    private boolean active;

    @NotBlank
    private SelectDTO cargo;

    @NotBlank
    private List<EventoDTO> eventos;

}
