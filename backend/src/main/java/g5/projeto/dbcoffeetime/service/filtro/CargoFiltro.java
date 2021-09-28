package g5.projeto.dbcoffeetime.service.filtro;

import g5.projeto.dbcoffeetime.domain.Cargo;
import g5.projeto.dbcoffeetime.domain.Cargo_;
import org.springframework.data.jpa.domain.Specification;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import java.util.ArrayList;
import java.util.List;

public class CargoFiltro implements EntityFiltro {

    private Long id;
    private String descricao;

    @Override
    public Specification<Cargo> filter() {
        return ((root, cq, cb) -> cb.and(getPredicates(root, cq, cb).toArray(new Predicate[0])));
    }

    private List<Predicate> getPredicates (Root<Cargo> root, CriteriaQuery<?> cq, CriteriaBuilder cb) {

        List<Predicate> predicates = new ArrayList<>();
        cq.orderBy(cb.desc(root.get("id")));

        if(id != null){
            predicates.add(cb.equal(root.get(Cargo_.id), id));
        }

        if(descricao != null){
            predicates.add(cb.like(root.get(Cargo_.descricao), "%" + descricao + "%"));
        }

        return predicates;

    }
}
