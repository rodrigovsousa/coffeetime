package g5.projeto.dbcoffeetime.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@Table(name = "EVENTO")
public class Evento implements Serializable {

    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    @Column (name = "ID")
    private Long id;

    @Column (name = "DATA")
    private LocalDate data;

    @Column (name = "JUSTIFICATIVAADIAMENTO", length = 200)
    private String justificativaAdiamento;

    @Column (name = "VALOR", nullable = false)
    private Double valor;

    @Column (name = "PATROCINADOR", nullable = false, length = 80)
    private String patrocinador;

    @Column (name = "NOME", nullable = false, length = 100)
    private  String nome;

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
