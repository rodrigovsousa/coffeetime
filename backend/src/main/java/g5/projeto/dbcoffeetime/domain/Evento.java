package g5.projeto.dbcoffeetime.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import java.io.Serializable;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;


@Getter
@Setter
@Entity (name = "evento")
public class Evento implements Serializable {

    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    @Column (name = "ID", nullable = false)
    private Long id;

    @Column (name = "DATA", nullable = false)
    private LocalDate data;

    @Column (name = "JUSTIFICATIVAADIAMENTO", nullable = false, length = 200)
    private String justificativaAdiamento;

    @Column (name = "VALOR", nullable = false)
    private Double valor;

    @ManyToOne
    private Motivo motivo;

    @ManyToOne
    @JoinColumn(name = "SITUACAO")
    private Situacao situacao;

    @ManyToMany
    @JoinTable(name = "rel_usuario_evento",
            joinColumns = @JoinColumn(name ="evento_id"),
            inverseJoinColumns = @JoinColumn(name = "patrocinador_id"))
    private List<Usuario> patrocinador  = new ArrayList<>();


}
