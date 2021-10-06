package g5.projeto.dbcoffeetime.service.mapper;

import g5.projeto.dbcoffeetime.domain.Usuario;
import g5.projeto.dbcoffeetime.service.dto.PatrocinadorDTO;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring", uses = CargoMapper.class)
public interface PatrocinadorMapper extends EntityMapper<PatrocinadorDTO, Usuario> {
}