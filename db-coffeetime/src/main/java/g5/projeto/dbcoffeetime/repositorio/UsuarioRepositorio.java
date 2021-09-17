package g5.projeto.dbcoffeetime.repositorio;

import g5.projeto.dbcoffeetime.domain.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.RepositoryDefinition;

@RepositoryDefinition()
public interface UsuarioRepositorio {
    extends JpaRepository<Usuario, Long> {

    }
}
