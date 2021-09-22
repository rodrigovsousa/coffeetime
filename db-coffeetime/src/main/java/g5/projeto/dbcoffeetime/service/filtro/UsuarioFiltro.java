package g5.projeto.dbcoffeetime.service.filtro;

import g5.projeto.dbcoffeetime.domain.Usuario;
import org.springframework.data.jpa.domain.Specification;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.criteria.Predicate;

public class UsuarioFiltro implements EntityFiltro{

    private Long id;
    private String nome;
    private String email;

    @Override
    public Specification<Usuario> filter() {
        return (root, cq, cb) -> cb.and(getPredicates(root, cq, cb).toArray(new Predicate()[0]));
    }

    private List<Predicate> getPredicates(Root<Usuario> root, CriteriaQuery<?> cq, CriteriaBuilder cb) {

        List<Predicate> predicates = new ArrayList<>();

        cq.orderBy(cb.desc(root.get("id")));

        if (id != null) {
            predicates.add(cb.equal(root.get(Usuario_.id), id));
        }
        if (nome != null) {
            predicates.add(cb.like(root.get(Usuario_.nome),"%" + nome + "%"));
        }
        if (email != null) {
            predicates.add(cb.like(root.get(Usuario_.email), "%" + email + "%"));
        }

        return predicates;
    }

}
