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
    private String nome;
    private String email;
    private SelectDTO cargo;
    private boolean status;

    public UsuarioListagemDTO(Long id, String nome, String email, SelectDTO cargo, boolean status) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.cargo = cargo;
        this.status = status;
    }
}
