package g5.projeto.dbcoffeetime.service.dto;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Index;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;

@Table(indexes = {
        @Index(name = "idx_eventodto_patrocinador", columnList = "patrocinador")
})
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