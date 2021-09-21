package g5.projeto.dbcoffeetime.domain;

import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.Type;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDate;
import java.util.List;


@Entity
@Getter
@Setter
@Table(name = "usuario")
public class Usuario  implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
    private Long id;

    @Column(name = "NOME")
    private String nome;

    @Column(name = "CPF")
    private String cpf;

    @Column(name = "EMAIL")
    private String email;

    @Column(name = "FOTO", columnDefinition="TEXT")
    @Lob
    private String foto;

    @Column(name = "DATANASCIMENTO")
    private LocalDate dataDeNascimento;

    @Column(name = "ST_ATIVO")
    private Boolean status;

    @Column(name = "TELEFONE")
    private String telefone;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "CARGO_ID")
    private Cargo cargo;

}
