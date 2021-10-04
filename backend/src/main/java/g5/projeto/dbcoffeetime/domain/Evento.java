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
@Entity (name = "EVENTO")
public class Evento implements Serializable {

    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    @Column (name = "ID")
    private Long id;

    @Column (name = "DATA")
    private LocalDate data;

    @Column (name = "JUSTIFICATIVAADIAMENTO", nullable = false, length = 200)
    private String justificativaAdiamento;

    @Column (name = "VALOR", nullable = false)
    private Double valor;

    @ManyToOne
    @JoinColumn (name = "MOTIVO_ID")
    private Motivo motivo;

    @ManyToOne
    @JoinColumn(name = "SITUACAO_ID")
    private Situacao situacao;

    @ManyToMany
    @JoinTable(name = "REL_USUARIO_EVENTO",
            joinColumns = @JoinColumn(name ="EVENTO_ID"),
            inverseJoinColumns = @JoinColumn(name = "PATROCINADOR_ID"))
    private List<Usuario> patrocinador = new ArrayList<>();

}
