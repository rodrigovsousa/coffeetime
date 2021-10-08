package g5.projeto.dbcoffeetime.repositorio;

import g5.projeto.dbcoffeetime.domain.EventoPatrocinador;
import g5.projeto.dbcoffeetime.domain.EventoPatrocinadorId;
import g5.projeto.dbcoffeetime.domain.UsuarioEvento;
import g5.projeto.dbcoffeetime.domain.UsuarioEventoId;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EventoPatrocinadorRepositorio extends JpaRepository<EventoPatrocinador, EventoPatrocinadorId> {}