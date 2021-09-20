package g5.projeto.dbcoffeetime.service.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
public class EmailDTO {

    @NotNull
    private String assunto;

    @NotNull
    @NotBlank
    private String destinatario;

    @NotNull
    private String corpo;

    private List<String> copias new = ArrayList<>();
}
