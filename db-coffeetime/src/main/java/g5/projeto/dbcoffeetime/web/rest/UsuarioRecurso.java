package g5.projeto.dbcoffeetime.web.rest;

import g5.projeto.dbcoffeetime.domain.Usuario;
import g5.projeto.dbcoffeetime.service.UsuarioService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/usuarios")
@RequiredArgsConstructor
public class UsuarioRecurso {

    private  final UsuarioService usuarioService;

    @GetMapping
    public ResponseEntity<List<Usuario>> buscarTodos() {
        <List<Usuario> usuarios = usuarioService.buscarTodos;
        return ResponseEntity.ok(usuarios);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Usuario>buscarPorId(@PathVariable LOng id) {
        Usuario usuario = usuarioService.buscar(id);
        return ResponseEntity.ok(usuario);
    }

    @PostMapping
    public ResponseEntity<Usuario>
    cadastrar(@RequestBody Usuario usuario) {
        Usuario usuarioCriado = usuarioService.salvar(usuario);
        return ResponseEntity.created(new URI(str"/api/usuario"))
    }

    @PutMapping
    public ResponseEntity<Usuario>
    editar(@ResponseBody Usuario usuario) {
        Usuario usuarioEditado = usuarioService.editar(usuario);
        return  ResponseEntity.ok(usuarioEditado);
    }

    @DeleteMapping("/{id}")
    public void
    deletar(@PathVariable Long id) {
        usuarioService.deletar(id);
        return ResponseEntity.
    }
}

