package g5.projeto.dbcoffeetime.service.filtro;

import org.springframework.data.jpa.domain.Specification;

public interface EntityFiltro<T> {

    Specification<T> filter();

}
