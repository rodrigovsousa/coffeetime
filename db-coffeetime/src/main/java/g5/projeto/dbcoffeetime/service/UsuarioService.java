package g5.projeto.dbcoffeetime.service;

import g5.projeto.dbcoffeetime.domain.Usuario;
import g5.projeto.dbcoffeetime.repositorio.UsuarioRepositorio;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class UsuarioService {

    private final UsuarioRepositorio usuarioRepositorio;
    private final UsuarioMapper usuarioMapper;

    public UsuarioService(UsuarioMapper usuarioMapper, UsuarioRepositorio usuarioRepositorio){
        this.usuarioMapper = usuarioMapper;
        this.usuarioRepositorio = usuarioRepositorio;
    }

    public Usuario buscar(Long id) {
        return usuarioRepositorio.findById(id).orElse(null);
    }

    public List<Usuario> buscarTodos() {
        return usuarioRepositorio.findAll();
    }

    public Usuario salvar(Usuario usuario) {
        return usuarioRepositorio.save(usuario);
    }

    public Usuario editar(Usuario usuario) {
        return usuarioRepositorio.save(usuario);
    }

    public void deletar(Long id) {
         usuarioRepositorio.deleteById(id);
    }

    public UsuarioMapper getUsuarioMapper() {
        return usuarioMapper;
    }
}
