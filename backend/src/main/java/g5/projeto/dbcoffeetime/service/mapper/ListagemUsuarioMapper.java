package g5.projeto.dbcoffeetime.service.mapper;

import g5.projeto.dbcoffeetime.domain.Usuario;
import g5.projeto.dbcoffeetime.service.dto.UsuarioListagemDTO;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring", uses = CargoMapper.class)
public interface ListagemUsuarioMapper extends EntityMapper<UsuarioListagemDTO, Usuario>{
}
