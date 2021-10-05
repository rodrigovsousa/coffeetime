package g5.projeto.dbcoffeetime.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDate;


@Getter
@Setter
@Entity (name = "EVENTO")
public class Evento implements Serializable {

    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    @Column (name = "ID", nullable = false)
    private Long id;

    @Column (name = "DATA", nullable = false)
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
    private Motivo motivo;

    @ManyToOne
    @JoinColumn(name = "SITUACAO")
    private Situacao situacao;

}
