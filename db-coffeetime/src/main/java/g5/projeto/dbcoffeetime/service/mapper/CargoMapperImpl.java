package g5.projeto.dbcoffeetime.service.mapper;

import g5.projeto.dbcoffeetime.domain.Cargo;
import g5.projeto.dbcoffeetime.service.dto.CargoDTO;
import g5.projeto.dbcoffeetime.service.dto.SelectDTO;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class CargoMapperImpl implements CargoMapper {

    @Override
    public SelectDTO toDto(Cargo cargo) {
        if (cargo == null){
            return null;
        }
        SelectDTO selectDTO = new SelectDTO();
        selectDTO.setNome(cargo.getDescricao());
        selectDTO.setValue(cargo.getId());
        return selectDTO;
        }

    @Override
    public List<Cargo> toEntity(List<SelectDTO> dtos) {
        List<Cargo> cargos = new ArrayList<>();
        for (SelectDTO select : dtos){
            cargos.add(toEntity(select));
        }
        return cargos;
      }

    @Override
    public List<SelectDTO> toDto(List<Cargo> entitys) {
        List<SelectDTO> selects = new ArrayList<>();
        for (Cargo cargo : entitys){
            selects.add(toDto(cargo));

        }
        return selects;
      }

    @Override
    public Cargo toEntity(SelectDTO selectDTO) {
        if (selectDTO == null) {
            return null;
        }
        Cargo cargo = new Cargo();
        cargo.setDescricao(selectDTO.getNome());
        cargo.setId(selectDTO.getValue());
        return cargo;


    }

}
