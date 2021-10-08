package g5.projeto.dbcoffeetime.service.mapper;

import g5.projeto.dbcoffeetime.domain.Motivo;
import g5.projeto.dbcoffeetime.domain.Situacao;
import g5.projeto.dbcoffeetime.service.dto.MotivoDTO;
import g5.projeto.dbcoffeetime.service.dto.SelectDTO;
import org.mapstruct.InheritInverseConfiguration;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface MotivoMapper extends EntityMapper<SelectDTO, Motivo> {
    @Mapping(source = "id", target = "value")
    @Mapping(source = "descricao", target = "label")
    SelectDTO toDto(Motivo motivo);

    @InheritInverseConfiguration
    Motivo toEntity(SelectDTO selectDTO);
}
