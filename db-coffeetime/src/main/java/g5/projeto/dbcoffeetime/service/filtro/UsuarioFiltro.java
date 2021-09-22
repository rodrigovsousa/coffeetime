package g5.projeto.dbcoffeetime.service.filtro;

import g5.projeto.dbcoffeetime.domain.Cargo_;
import g5.projeto.dbcoffeetime.domain.Usuario;
import g5.projeto.dbcoffeetime.domain.Usuario_;
import org.springframework.data.jpa.domain.Specification;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import java.util.ArrayList;
import java.util.List;


public class UsuarioFiltro implements EntityFiltro{

    private Long id;
    private String nome;
    private String cargo;
    private String email;
    private String cpf;

    @Override
    public Specification<Usuario> filter() {
        return ((root, cq, cb) -> cb.and(getPredicates(root, cq, cb).toArray(new Predicate[0])));
    }

    private List<Predicate> getPredicates
            (Root<Usuario> root,
             CriteriaQuery<?> cq,
             CriteriaBuilder cb) {

        List<Predicate> predicates = new ArrayList<>();
        cq.orderBy(cb.desc(root.get("id")));

        if (id != null){
            predicates.add(cb.equal(root.get(Usuario_.id), id));
        }

        if (nome != null){
            predicates.add(cb.like(root.get(Usuario_.nome),"%" + nome + "%"));
        }

        if (email != null){
            predicates.add(cb.like(root.get(Usuario_.email),"%" + email + "%"));
        }

        if (cpf != null){
            predicates.add(cb.like(root.get(Usuario_.cpf),"%" + cpf + "%"));
        }

        if (cargo != null){
            predicates.add(cb.like(root.join(String.valueOf(Cargo_.descricao)), "%" + cargo + "%"));
        }

        return predicates;

    }
}