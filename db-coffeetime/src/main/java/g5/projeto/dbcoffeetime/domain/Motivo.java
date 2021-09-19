package g5.projeto.dbcoffeetime.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@Entity (name = "motivo")
public class Motivo {

    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    @Column (name = "ID", nullable = false)
    private Long id;

    @Column (name = "DESCRICAO", nullable = false, length = 20)
    private String descricao;

    @Column (name = "TITULO", nullable = false, length = 200)
    private String titulo;

    @OneToMany (mappedBy = "motivo")
    private List<Evento> eventos = new ArrayList<>();

}
