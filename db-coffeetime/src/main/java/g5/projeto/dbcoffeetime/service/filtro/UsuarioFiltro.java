package g5.projeto.dbcoffeetime.service.filtro;

import g5.projeto.dbcoffeetime.domain.Usuario;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.jpa.domain.Specification;

import java.time.LocalDate;
import java.util.function.Predicate;

@Getter
@Setter
public class UsuarioFiltro implements EntityFiltro<Usuario> {

    private Long id;
    private String nome;
    private String cpf;
    private String email;
    private String foto;
    private LocalDate dataDeNascimento;
    private boolean status;
    private String telefone;


    @Override
    public Specification<Usuario> filter() {

        return (root, cq, cb) -> cb.and(getPredicates(root, cq, cb).toArray(new Predicate()[0]));
    }

}

        return (root, cq, cb) -> cb.and(getPredicates(root, cq, cb)).toArray(new Predicate()[0]);
    }

