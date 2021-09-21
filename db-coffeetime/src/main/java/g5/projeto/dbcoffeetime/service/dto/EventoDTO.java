package g5.projeto.dbcoffeetime.service.dto;

import g5.projeto.dbcoffeetime.domain.Situacao;
import g5.projeto.dbcoffeetime.domain.Usuario;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Index;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.io.Serializable;
import java.time.LocalDate;
import java.util.List;

@Table(indexes = {
        @Index(name = "idx_eventodto_patrocinador", columnList = "patrocinador")
})
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
<<<<<<< HEAD
    @NotBlank
    private String patrocinador;
<<<<<<< HEAD
}
=======
=======
    private Situacao situacao;

    @NotNull
    private String patrocinador;

    @NotBlank
    private List<Usuario> usuario;
}
>>>>>>> 173069d0474de1c5e0952a1394f450f6193bc1d5
>>>>>>> 207e46fda28999f21ba670f38f2ac154a8b00000
