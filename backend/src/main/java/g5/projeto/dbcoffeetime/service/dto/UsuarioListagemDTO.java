package g5.projeto.dbcoffeetime.service.dto;


import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
@NoArgsConstructor
public class UsuarioListagemDTO implements Serializable {

    private Long id;
    private String patrocinador;
    private String email;
    private SelectDTO cargo;
    private boolean active;

    public UsuarioListagemDTO(Long id, String nome, String email, SelectDTO cargo, boolean active) {
        this.id = id;
        this.patrocinador = patrocinador;
        this.email = email;
        this.cargo = cargo;
        this.active = active;
    }
}
