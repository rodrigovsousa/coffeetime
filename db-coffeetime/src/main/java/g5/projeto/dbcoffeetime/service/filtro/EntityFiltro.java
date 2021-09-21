package g5.projeto.dbcoffeetime.service.filtro;


import org.springframework.data.jpa.domain.Specification;

public class EntityFiltro<T> {

    Specification<T> filter();

}