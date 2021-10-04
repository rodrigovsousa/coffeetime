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
@Table(name = "USUARIO")
public class Usuario  implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
    private Long id;

    @Column(name = "NOME")
    private String patrocinador;

    @Column(name = "CPF")
    private String cpf;

    @Column(name = "EMAIL")
    private String email;

    @Column(name = "DATANASCIMENTO")
    private LocalDate dataDeNascimento;

    @Column(name = "ST_ATIVO")
    private Boolean status;

    @Column(name = "TELEFONE")
    private String telefone;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "CARGO_ID")
    private Cargo cargo;

    @ManyToMany(mappedBy = "patrocinador")
    private List<Evento> eventos = new ArrayList<>();

}
