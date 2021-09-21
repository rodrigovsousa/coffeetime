package g5.projeto.dbcoffeetime.service.mapper;


import g5.projeto.dbcoffeetime.domain.Usuario;
import g5.projeto.dbcoffeetime.service.dto.UsuarioDTO;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class UsuarioMapperImpl implements UsuarioMapper{

    @Override
    public Usuario toEntity(UsuarioDTO dto) {
        if ( dto == null ) {
            return null;
        }

        Usuario usuario = new Usuario();

        usuario.setId( dto.getId() );
        usuario.setNome( dto.getNome() );
        usuario.setCpf( dto.getCpf() );
        usuario.setEmail( dto.getEmail() );
        usuario.setDataDeNascimento( dto.getDataDeNascimento() );
        usuario.setStatus( dto.isStatus() );
        usuario.setTelefone( dto.getTelefone() );
        usuario.setCargo( CargoMapper.toEntity(dto.getCargo() ) );



        return usuario;
    }

    @Override
    public UsuarioDTO toDto(Usuario entity) {
        return null;
    }

    @Override
    public List<Usuario> toEntity(List<UsuarioDTO> dtos) {
        return null;
    }
}
