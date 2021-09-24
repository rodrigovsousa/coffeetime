package g5.projeto.dbcoffeetime.repositorio;

import g5.projeto.dbcoffeetime.domain.Evento;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface EventoRepositorio extends JpaRepository<Evento, Long> {
    List<Evento> findAllByDataGreaterThanEqual(LocalDate data);

}
