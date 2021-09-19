package g5.projeto.dbcoffeetime.domain;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;

@Getter
@Setter
@NoArgsConstructor
@Embeddable
public class UsuarioEventoId implements Serializable {


    @Column (name = "IDEVENTO", nullable = false)
    private Long idEvento;

    @Column (name = "IDUSUARIO", nullable = false)
    private Long idUsuario;

    public UsuarioEventoId (Long idEvento, Long idUsuario){
        this.idEvento = idEvento;
        this.idUsuario = idUsuario;
    }

}
