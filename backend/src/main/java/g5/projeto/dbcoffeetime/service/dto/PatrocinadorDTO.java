package g5.projeto.dbcoffeetime.service.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
@NoArgsConstructor
public class PatrocinadorDTO implements Serializable {

    private Long id;
    private String patrocinador;
    private String email;
    private SelectDTO cargo;

    public PatrocinadorDTO(Long id, String patrocinador, String email, SelectDTO cargo) {
        this.id = id;
        this.patrocinador = patrocinador;
        this.email = email;
        this.cargo = cargo;
    }
}