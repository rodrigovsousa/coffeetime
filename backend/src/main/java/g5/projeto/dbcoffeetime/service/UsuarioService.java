package g5.projeto.dbcoffeetime.service;

import g5.projeto.dbcoffeetime.domain.Usuario;
import g5.projeto.dbcoffeetime.repositorio.UsuarioRepositorio;
import g5.projeto.dbcoffeetime.service.dto.EmailDTO;
import g5.projeto.dbcoffeetime.service.dto.UsuarioDTO;
import g5.projeto.dbcoffeetime.service.mapper.UsuarioMapper;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class UsuarioService {

    private final UsuarioRepositorio usuarioRepositorio;
    private final UsuarioMapper usuarioMapper;
    private final EmailServico emailServico;


    public UsuarioService(UsuarioMapper usuarioMapper, UsuarioRepositorio usuarioRepositorio, EmailServico emailServico){
        this.usuarioMapper = usuarioMapper;
        this.usuarioRepositorio = usuarioRepositorio;
        this.emailServico = emailServico;
    }

    public UsuarioDTO buscar(Long id) {
        Usuario usuario = usuarioRepositorio.findById(id).orElse(null);
        return usuarioMapper.toDto(usuario);
    }

    public List<UsuarioDTO> buscarTodos() {
        List<Usuario> usuarios = usuarioRepositorio.findAll();
        return usuarioMapper.toDto(usuarios);
    }

    public UsuarioDTO salvar(UsuarioDTO usuarioDTO) {
        Usuario usuario = usuarioMapper.toEntity(usuarioDTO);
        Usuario usuarioSalvo = usuarioRepositorio.save(usuario);
        return usuarioMapper.toDto(usuarioSalvo);
    }


    public UsuarioDTO editar (UsuarioDTO usuarioDTO) {
        Usuario usuario = usuarioMapper.toEntity(usuarioDTO);
        Usuario usuarioSalvo = usuarioRepositorio.save(usuario);
        return usuarioMapper.toDto(usuarioSalvo);
    }


    public void enviarEmail () {
        EmailDTO emailDTO = new EmailDTO();
        emailDTO.setDestinatario("mhateus1995@gmail.com");
        emailDTO.setAssunto("sexta do salgado");
        emailDTO.setCorpo(""+"");
        emailDTO.getCopias().add("mhateus1995@gmail.com");

        emailServico.enviarEmail(emailDTO);
    }

    public void deletar(Long id) {
         usuarioRepositorio.deleteById(id);
    }

    public UsuarioMapper getUsuarioMapper() {
        return usuarioMapper;
    }
}
