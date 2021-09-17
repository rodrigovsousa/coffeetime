package g5.projeto.dbcoffeetime.service;

import g5.projeto.dbcoffeetime.domain.Usuario;
import g5.projeto.dbcoffeetime.repositorio.UsuarioRepositorio;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@RequiredArgsConstructor
@Transactional
public class UsuarioService {

    private final UsuarioRepositorio usuarioRepositorio;

     public Usuario get(Long id) {
         return usuarioRepositorio.getById(id)
     }

    public List<Usuario> get() {
        return usuarioRepositorio.findAll()
    }

    public Usuario Salvar(Usuario usuario) {
        return usuarioRepositorio.save(usuario)
    }

    public Usuario Editar(Usuario usuario) {
        return usuarioRepositorio.save(id)
    }

    public void deletar(Long id) {
         usuarioRepositorio.deleteById(id)
    }



}
