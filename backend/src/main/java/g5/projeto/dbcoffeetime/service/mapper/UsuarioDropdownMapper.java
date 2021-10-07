package g5.projeto.dbcoffeetime.service.mapper;


import g5.projeto.dbcoffeetime.domain.Usuario;
import g5.projeto.dbcoffeetime.service.dto.SelectDTO;
import g5.projeto.dbcoffeetime.service.dto.UsuarioDTO;
import org.mapstruct.InheritInverseConfiguration;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring", uses = CargoMapper.class)
public interface UsuarioDropdownMapper extends EntityMapper <SelectDTO, Usuario>{

    @Override
    @InheritInverseConfiguration
    Usuario toEntity(SelectDTO dto);

    @Override
    @Mapping(source = "id", target = "value")
    @Mapping(source = "nome", target = "label")
    SelectDTO toDto(Usuario entity);
}