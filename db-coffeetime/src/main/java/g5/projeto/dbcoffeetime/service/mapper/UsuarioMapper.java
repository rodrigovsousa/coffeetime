package g5.projeto.dbcoffeetime.service.mapper;

import g5.projeto.dbcoffeetime.domain.Usuario;
import g5.projeto.dbcoffeetime.service.dto.SelectDTO;
import g5.projeto.dbcoffeetime.service.dto.UsuarioDTO;


@Mapper(componentModel = "spring", uses = {})
public interface UsuarioMapper extends EntityMapper<UsuarioDTO, Usuario> {

    @Override

    Usuario toEntity (UsuarioDTO dto);

    @Override
    SelectDTO toDto (Usuario usuario);
}

