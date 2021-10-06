package g5.projeto.dbcoffeetime.service;

import g5.projeto.dbcoffeetime.repositorio.CargoRepositorio;
import g5.projeto.dbcoffeetime.service.dto.SelectDTO;
import g5.projeto.dbcoffeetime.service.mapper.SelectCargoMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class CargoServico {

    private final CargoRepositorio repositorio;

    private final SelectCargoMapper mapper;

    public List<SelectDTO> listarTodos(){
        return mapper.toDto(repositorio.findAll());
    }


}
