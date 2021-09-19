package g5.projeto.dbcoffeetime.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDate;


@Getter
@Setter
@Entity (name = "EVENTO")
public class Evento {

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

    @Column (name = "PATROCINADOR", nullable = false, length = 80)
    private String patrocinador;

    @ManyToOne
    private Motivo motivo;

    @ManyToOne
    private Situacao situacao;

}
