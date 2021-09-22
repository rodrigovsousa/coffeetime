package g5.projeto.dbcoffeetime.service.mapper;

import g5.projeto.dbcoffeetime.domain.Usuario;
import g5.projeto.dbcoffeetime.service.dto.UsuarioDTO;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class UsuarioMapperImpl implements UsuarioMapper{

    private final CargoMapper cargoMapper;

    public UsuarioMapperImpl (CargoMapper cargoMapper) {

        this.cargoMapper = cargoMapper;
    }

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
        usuario.setCargo( cargoMapper.toEntity(dto.getCargo() ) );

        return usuario;
    }

    @Override
    public UsuarioDTO toDto(Usuario entity) {
        if (entity == null){
            return null;
        }
        UsuarioDTO usuarioDTO = new UsuarioDTO();

        usuarioDTO.setId(entity.getId());
        usuarioDTO.setNome(entity.getNome());
        usuarioDTO.setEmail(entity.getEmail());
        usuarioDTO.setDataDeNascimento(entity.getDataDeNascimento());
        usuarioDTO.setCargo(cargoMapper.toDto(entity.getCargo()));
        usuarioDTO.setStatus(entity.getStatus());
        usuarioDTO.setTelefone(entity.getTelefone());

        return usuarioDTO;
    }

    @Override
    public List<Usuario> toEntity(List<UsuarioDTO> dtos) {
        return null;
    }

    @Override
    public List<UsuarioDTO> toDto(List<Usuario> entitys) {
        return null;
    }
}
