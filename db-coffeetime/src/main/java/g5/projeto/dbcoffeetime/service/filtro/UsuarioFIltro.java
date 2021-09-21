package g5.projeto.dbcoffeetime.service.filtro;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.jpa.domain.Specification;

import javax.swing.text.html.HTMLDocument;
@Getter
@Setter
public interface Specification<Usuario> filter() {
        return(root, cq, cb) ->
        cb.and(cb.getPredicates(root, cq, cb);
        .toArray(new Predicate[0]));
        };

private List<Predicate>getPredicates
        (Root<Usuario> root,
        CriteriaQuery<?>cq,
        CriteriaBuilder cb){
        List<Predicate> predicates = new ArrayList<>();

        cq.orderBy(cb.desc(root.get("id")));
        return predicates;
        }
