package g5.projeto.dbcoffeetime.service.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.Max;
import javax.validation.constraints.NotBlank;
import java.io.Serializable;
import java.time.LocalDate;
import java.util.List;

@Getter
@Setter
public class EventoDTO implements Serializable {

    private Long id;

    @NotBlank
    @JsonFormat(pattern = "dd/MM/yyyy")
    private LocalDate data;

    @NotBlank
    private Double valor;

    @NotBlank
    private SelectDTO situacao;

    @NotBlank
    @Max(30)
    private SelectDTO motivo;

    @NotBlank
    private String patrocinador;

}

