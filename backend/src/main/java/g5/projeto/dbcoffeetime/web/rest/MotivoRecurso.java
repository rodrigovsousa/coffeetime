package g5.projeto.dbcoffeetime.web.rest;

import g5.projeto.dbcoffeetime.service.MotivoServico;
import g5.projeto.dbcoffeetime.service.dto.MotivoDTO;
import g5.projeto.dbcoffeetime.service.filtro.MotivoFiltro;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/motivos")
public class MotivoRecurso {

    private final MotivoServico servico;

    @GetMapping
    public ResponseEntity<List<MotivoDTO>> findAll() {
        return ResponseEntity.ok(servico.findAll());
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<MotivoDTO> findById(@PathVariable Long id) {
        MotivoDTO motivoDTO = servico.findById(id);
        return ResponseEntity.ok().body(motivoDTO);
    }

    @GetMapping("/filtro")
    public ResponseEntity<List<MotivoDTO>> findByTitle(MotivoFiltro filtro){
        return ResponseEntity.ok(servico.findAllTitle(filtro));

    }

    @PostMapping
    public ResponseEntity<MotivoDTO> create(@RequestBody MotivoDTO dto) {
        dto = servico.save(dto);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(dto.getId()).toUri();
        return ResponseEntity.created(uri).body(dto);
    }

    @DeleteMapping
    public ResponseEntity<MotivoDTO> delete(@PathVariable Long id) {
        servico.delete(id);
        return ResponseEntity.noContent().build();
    }

}
