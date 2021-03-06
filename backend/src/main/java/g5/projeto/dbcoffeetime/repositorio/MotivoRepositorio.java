package g5.projeto.dbcoffeetime.repositorio;


import g5.projeto.dbcoffeetime.domain.Motivo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

@Repository
public interface MotivoRepositorio extends JpaRepository<Motivo, Long>, JpaSpecificationExecutor<Motivo> {

}