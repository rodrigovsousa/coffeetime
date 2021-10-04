package g5.projeto.dbcoffeetime.service;

import g5.projeto.dbcoffeetime.domain.Usuario;
import g5.projeto.dbcoffeetime.repositorio.UsuarioRepositorio;
import g5.projeto.dbcoffeetime.service.dto.UsuarioDTO;
import g5.projeto.dbcoffeetime.service.dto.UsuarioListagemDTO;
import g5.projeto.dbcoffeetime.service.exceptions.ResourceNotFoundException;
import g5.projeto.dbcoffeetime.service.filtro.UsuarioFiltro;
import g5.projeto.dbcoffeetime.service.mapper.ListagemUsuarioMapper;
import g5.projeto.dbcoffeetime.service.mapper.UsuarioMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class UsuarioServico {

    private final UsuarioRepositorio repositorio;
    private final ListagemUsuarioMapper listagemUsuarioMapper;
    private final UsuarioMapper mapper;

    public List<UsuarioListagemDTO> findAll(){
        return listagemUsuarioMapper.toDto(repositorio.findAll());
    }

    public List<UsuarioDTO> obterTodosFiltrado(UsuarioFiltro filtro){
        return mapper.toDto(repositorio.findAll(filtro.filter()));
    }

    public UsuarioDTO findById(Long id) {
        return repositorio.findById(id).map(mapper::toDto).
                orElseThrow(() -> new ResourceNotFoundException("Usuario não encontrado!"));
    }

    public UsuarioDTO save(UsuarioDTO dto) {
        Usuario entity = mapper.toEntity(dto);
        entity = repositorio.save(entity);
        return mapper.toDto(entity);
    }

    public UsuarioDTO toggleUsuarioActive(Long id) {
        UsuarioDTO dto = findById(id);
        dto.setActive(!dto.isActive());
        save(dto);
        return dto;
    }
}