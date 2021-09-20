package g5.projeto.dbcoffeetime.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;

@Getter
@Setter
@Entity
@Table(name = "cargo")
public class Cargo implements Serializable {

    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    @Column (name = "ID", nullable = false)
    private Long id;
    @Column (name = "DESCRICAO", nullable = false, length = 20)
    private String descricao;

}
