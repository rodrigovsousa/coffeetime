package g5.projeto.dbcoffeetime.service.mapper;

import g5.projeto.dbcoffeetime.domain.Motivo;
import g5.projeto.dbcoffeetime.service.dto.MotivoDTO;
<<<<<<< HEAD
import g5.projeto.dbcoffeetime.service.dto.SelectDTO;
import org.mapstruct.Mapping;
=======
import org.mapstruct.Mapper;
>>>>>>> 207e46fda28999f21ba670f38f2ac154a8b00000


@Mapper(componentModel = "spring", uses = {})
public interface MotivoMapper extends EntityMapper<MotivoDTO, Motivo> {

}
