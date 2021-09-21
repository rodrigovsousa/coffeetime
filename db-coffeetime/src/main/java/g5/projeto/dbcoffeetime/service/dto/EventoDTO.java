package g5.projeto.dbcoffeetime.service.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;

@Getter
@Setter
public class EventoDTO {

    @NotNull
    private Long id;

    @NotNull
    @NotBlank
    private LocalDate data;

    @NotNull
    @NotBlank
    private String justificativaAdiamento;

    @NotNull
    @NotBlank
    private Double valor;

    @NotNull
    @NotBlank
    private String patrocinador;
}
