package g5.projeto.dbcoffeetime.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;


@Getter
@Setter
@Entity (name = "evento_patrocinador")
@Table(name = "evento_patrocinador")
public class EventoPatrocinador implements Serializable {

    @EmbeddedId
    private EventoPatrocinadorId id;

    @ManyToOne
    @JoinColumns({
            @JoinColumn (name = "USUARIOID", referencedColumnName = "id", insertable = false, updatable = false)
    })
    private Usuario usuario;

    @ManyToOne
    @JoinColumns({
            @JoinColumn (name = "EVENTOID", referencedColumnName = "id", insertable = false, updatable = false)
    })
    private Evento evento;



}
