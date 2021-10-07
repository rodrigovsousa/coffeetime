package g5.projeto.dbcoffeetime.service.filtro;

import g5.projeto.dbcoffeetime.domain.*;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.jpa.domain.Specification;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.*;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;


@Getter
@Setter
public class EventoFiltro implements EntityFiltro<Evento> {

    private Long id;
    private String data;
    private Double valor;
    private String patrocinador;

    @Override
    public Specification<Evento> filter() {
        return (root, cq, cb) -> cb.and(getPredicates(root, cb, cq).toArray(new Predicate[0]));
    }

    private List<Predicate> getPredicates(Root<Evento> root, CriteriaBuilder cb, CriteriaQuery<?> cq) {

        List<Predicate> predicates = new ArrayList<>();
        cq.orderBy(cb.desc(root.get(Evento_.data)));

        if (Objects.nonNull(data)) {
            DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy");
            LocalDate date = LocalDate.parse(data, formatter);
            predicates.add(cb.greaterThanOrEqualTo(root.get(Evento_.data), date));

        }
        if (Objects.nonNull(patrocinador)) {
            predicates.add(cb.like(root.get(Evento_.nome), "%" + patrocinador + "%")
            );
        }
        if (Objects.nonNull(id)) {
            Expression<?> param = null;
            predicates.add(cb.equal(root.get(Evento_.id), id));
        }
        return predicates;

    }
}
