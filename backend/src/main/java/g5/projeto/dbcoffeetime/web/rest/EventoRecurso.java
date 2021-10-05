package g5.projeto.dbcoffeetime.web.rest;
import g5.projeto.dbcoffeetime.service.EventoServico;
import g5.projeto.dbcoffeetime.service.dto.EventoDTO;
import g5.projeto.dbcoffeetime.service.filtro.EventoFiltro;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import java.net.URI;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/eventos")
public class EventoRecurso {

    private final EventoServico eventoServico;


    @GetMapping("/filtro")
    ResponseEntity<List<EventoDTO>> filtrarData(EventoFiltro filtro) {
        return ResponseEntity.ok(eventoServico.filtrarData(filtro));
    }


    @GetMapping(value = "/{id}")
    public ResponseEntity<EventoDTO> findById(@PathVariable Long id) {
        EventoDTO eventoDTO = eventoServico.findById(id);
        return ResponseEntity.ok().body(eventoDTO);
    }

    @GetMapping()
    public ResponseEntity<List<EventoDTO>> findAll(){
         List <EventoDTO> eventos = eventoServico.buscarTodos();
         return ResponseEntity.ok().body(eventos);
    }

    @PostMapping
    public ResponseEntity<EventoDTO> insert(@RequestBody EventoDTO dto) {
        dto = eventoServico.insert(dto);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(dto.getId()).toUri();
        return ResponseEntity.created(uri).body(dto);
    }


    @DeleteMapping(value = "/{id}")
    public ResponseEntity<EventoDTO> delete(@PathVariable Long id) {
        eventoServico.delete(id);
        return ResponseEntity.noContent().build();
    }
}