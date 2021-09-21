package g5.projeto.dbcoffeetime.service.mapper;


import g5.projeto.dbcoffeetime.domain.Cargo;
import g5.projeto.dbcoffeetime.service.dto.SelectDTO;
import org.mapstruct.InheritInverseConfiguration;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;


@Mapper(componentModel = "spring", uses = {})
public interface UsuarioEventoMapper extends EntityMapper<SelectDTO, Cargo> {

    @Mapping(source = "id", target = "value")
    @Mapping(source = "descricao", target = "label")
    SelectDTO toDto(Cargo cargo);

    @Override
    @InheritInverseConfiguration
    Cargo toEntity(SelectDTO dto);
}