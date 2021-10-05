package g5.projeto.dbcoffeetime.service.filtro;

import g5.projeto.dbcoffeetime.domain.Motivo;
import g5.projeto.dbcoffeetime.domain.Motivo_;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Component;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Component
public class MotivoFiltro implements EntityFiltro {

    private Long id;
    private String descricao;
    private String titulo;

    public Specification<Motivo> filter() {
        return (root, criteriaQuery, criteriaBuilder) ->
                criteriaBuilder.and(getPredicates(root, criteriaQuery, criteriaBuilder).toArray(new Predicate[0]));
    }

    private List<Predicate> getPredicates
            (Root<Motivo> root,
             CriteriaQuery<?> criteriaQuery,
             CriteriaBuilder criteriaBuilder) {

        List<Predicate> predicates = new ArrayList();
        criteriaQuery.orderBy(criteriaBuilder.desc(root.get("id")));


        if (Objects.nonNull(id)) {
            predicates.add(criteriaBuilder.equal(root.get(Motivo_.id), id));
        }

        if (Objects.nonNull(descricao)) {
            predicates.add(criteriaBuilder.like(root.get(Motivo_.descricao), "%" + descricao + "%"));
        }

        if (Objects.nonNull(titulo)) {
            predicates.add(criteriaBuilder.like(root.get(Motivo_.descricao), "%" + titulo + "%"));
        }

        return predicates;
    }
}
