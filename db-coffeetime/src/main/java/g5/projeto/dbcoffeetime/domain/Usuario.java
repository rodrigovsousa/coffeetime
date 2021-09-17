package g5.projeto.dbcoffeetime.domain;
import javassist.bytecode.ByteArray;
import jdk.nashorn.internal.objects.annotations.Getter;
import jdk.nashorn.internal.objects.annotations.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDate;


@Entity
@Getter
@Setter
@Table(name = "usuario")
public class Usuario  implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "nome")
    private String nome;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    @Column(name = "cpf")
    private String cpf;

    @Column(name = "email")
    private String email;

    @Column(name = "foto")
    private ByteArray foto;

    @Column(name = "datadenascimento")
    private LocalDate dataDeNascimento;

    @Column(name = "st_ativo")
    private boolean status;

    @Column(name = "telefone")
    private String telefone;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "id_cargo")
    private Cargo cargo;


    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name="evento_uduario", joinColumns = {
            @JoinColumn(name="id_usuario")
    }, inverseJoinColumns = {
            @JoinColumn(name="id_evento")
    })
    private List <Evento> evento;
}
