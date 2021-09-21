package g5.projeto.dbcoffeetime.service.dto;

import g5.projeto.dbcoffeetime.domain.Situacao;
import g5.projeto.dbcoffeetime.domain.Usuario;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.io.Serializable;
import java.time.LocalDate;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class EventoDTO implements Serializable {

    private Long id;

    @NotNull
    private LocalDate data;

    @NotNull
    @Size(max = 200)
    private String justificativaAdiamento;

    @NotNull
    private Double valor;

    @NotNull
    private Situacao situacao;

    @NotNull
    private String patrocinador;

    @NotBlank
    private List<Usuario> usuario;
}
