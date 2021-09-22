package g5.projeto.dbcoffeetime.web.rest;

import g5.projeto.dbcoffeetime.service.UsuarioService;
import g5.projeto.dbcoffeetime.service.dto.UsuarioDTO;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;


@RestController
@RequestMapping("/api/usuarios")
public class UsuarioRecurso {

    public UsuarioRecurso(UsuarioService usuarioService){
        this.usuarioService = usuarioService;
    }

    private final UsuarioService usuarioService;

    @GetMapping
    public ResponseEntity<List<UsuarioDTO>> buscarTodos() {
        List<UsuarioDTO> usuarios = usuarioService.buscarTodos();
        return ResponseEntity.ok(usuarios);
    }

    @GetMapping("/{id}")
    public ResponseEntity<UsuarioDTO>buscarPorId(@PathVariable Long id) {
        UsuarioDTO usuario = usuarioService.buscar(id);
        return ResponseEntity.ok(usuario);
    }

    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<UsuarioDTO> cadastrar(@RequestBody UsuarioDTO usuarioDTO) throws URISyntaxException {
       UsuarioDTO usuarioSalvo = usuarioService.salvar(usuarioDTO);
        return ResponseEntity.created(new URI("/api/usuarios/"+usuarioSalvo.getId())).build();
    }

    @PutMapping
    public ResponseEntity<UsuarioDTO> editar(@RequestBody UsuarioDTO usuarioDTO) {
        UsuarioDTO usuarioEditado = usuarioService.editar(usuarioDTO);
        return  ResponseEntity.ok(usuarioEditado);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deletar(@PathVariable Long id) {
        usuarioService.deletar(id);
        return ResponseEntity.ok().build();
    }
}

