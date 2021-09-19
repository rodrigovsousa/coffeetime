package g5.projeto.dbcoffeetime.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;


@Getter
@Setter
@Entity (name = "usuario_evento")
public class UsuarioEvento {

    @EmbeddedId
    private UsuarioEventoId id;

    @ManyToOne
    @JoinColumns({
            @JoinColumn (name = "USUARIOID", referencedColumnName = "id")
    })
    private Usuario usuario;

    @ManyToOne
    @JoinColumns({
            @JoinColumn (name = "EVENTOID", referencedColumnName = "id")
    })
    private Evento evento;



}
