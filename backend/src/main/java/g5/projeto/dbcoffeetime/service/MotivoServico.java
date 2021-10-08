package g5.projeto.dbcoffeetime.service;

import g5.projeto.dbcoffeetime.domain.Motivo;
import g5.projeto.dbcoffeetime.repositorio.MotivoRepositorio;
import g5.projeto.dbcoffeetime.service.dto.MotivoDTO;
import g5.projeto.dbcoffeetime.service.dto.SelectDTO;
import g5.projeto.dbcoffeetime.service.exceptions.ResourceNotFoundException;
import g5.projeto.dbcoffeetime.service.filtro.MotivoFiltro;
import g5.projeto.dbcoffeetime.service.mapper.MotivoMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class MotivoServico {

    public final MotivoRepositorio repositorio;
    public final MotivoMapper mapper;
    private final MotivoFiltro motivoFiltro;

    public List<SelectDTO> findAll(){
        return mapper.toDto(repositorio.findAll());
    }

    public List<SelectDTO> findAllTitle(MotivoFiltro filtro){
        return mapper.toDto(repositorio.findAll(filtro.filter()));
    }

    public SelectDTO findById(Long id) {
        return repositorio.findById(id).map(mapper::toDto).orElseThrow(ResourceNotFoundException::new);
    }

    public SelectDTO save(SelectDTO dto) {
        Motivo entity = mapper.toEntity(dto);
        entity = repositorio.save(entity);
        return mapper.toDto(entity);
    }

    public void delete(Long id) {
        try {
            repositorio.deleteById(id);
        } catch (EmptyResultDataAccessException resultadoEx) {
            throw new ResourceNotFoundException("Motivo não encontrado!!!");
        }
    }
}

