package g5.projeto.dbcoffeetime.repositorio;

import g5.projeto.dbcoffeetime.domain.Situacao;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SituacaoRepositorio extends JpaRepository<Situacao, Long> {
}
