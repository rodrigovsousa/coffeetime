package g5.projeto.dbcoffeetime.repositorio;

import g5.projeto.dbcoffeetime.domain.Evento;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

@Repository
public interface EventoRepositorio extends JpaRepository<Evento, Long>,
        JpaSpecificationExecutor<Evento> {
}