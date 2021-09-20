package g5.projeto.dbcoffeetime.service.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter

public class EmailDTO {
    private String assunto;
    private  String destinatario;
    private  String corpo;
    private List<String> copias = new ArrayList<>();
}
