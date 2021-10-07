package g5.projeto.dbcoffeetime.web.rest;

import g5.projeto.dbcoffeetime.service.UsuarioServico;
import g5.projeto.dbcoffeetime.service.dto.SelectDTO;
import g5.projeto.dbcoffeetime.service.dto.UsuarioDTO;
import g5.projeto.dbcoffeetime.service.dto.UsuarioListagemDTO;
import g5.projeto.dbcoffeetime.service.filtro.UsuarioFiltro;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.validation.Valid;
import java.net.URI;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/usuarios")
public class UsuarioRecurso {

    private final UsuarioServico servico;
    private final UsuarioFiltro filtro;

    @GetMapping
    public ResponseEntity<List<UsuarioListagemDTO>> findAll(){
        return ResponseEntity.ok(servico.findAll());
    }

    @GetMapping("/dropdown")
    public ResponseEntity<List<SelectDTO>> findAllDropDown(){
        return ResponseEntity.ok(servico.findAllDropDown());
    }

    @GetMapping("filtro")
    public ResponseEntity<List<UsuarioDTO>> obterTodosFiltrado(){
        return ResponseEntity.ok(servico.obterTodosFiltrado(filtro));
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<UsuarioDTO> findById(@PathVariable Long id){
        UsuarioDTO usuarioDTO = servico.findById(id);
        return ResponseEntity.ok().body(usuarioDTO);
    }

    @PostMapping
    public ResponseEntity<UsuarioDTO> create(@RequestBody UsuarioDTO dto) {
        dto = servico.save(dto);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(dto.getId()).toUri();
        return ResponseEntity.created(uri).body(dto);
    }

    @PatchMapping(value = "/{id}")
    public ResponseEntity<UsuarioDTO> toggleActive(@PathVariable Long id){
        UsuarioDTO usuarioDTO = servico.toggleUsuarioActive(id);
        return  ResponseEntity.ok().body(usuarioDTO);

    }
}

