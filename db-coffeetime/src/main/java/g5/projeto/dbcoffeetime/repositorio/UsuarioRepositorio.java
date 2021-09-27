package g5.projeto.dbcoffeetime.repositorio;

import g5.projeto.dbcoffeetime.domain.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.RepositoryDefinition;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UsuarioRepositorio extends JpaRepository<Usuario, Long> {

    List<Usuario> findAllByStatus(Boolean status);

    Usuario findByEmailAndCpfAndTelefone(String email, String cpf, String telefone);

}
