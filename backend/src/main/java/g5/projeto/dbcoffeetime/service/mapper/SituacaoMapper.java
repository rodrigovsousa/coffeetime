package g5.projeto.dbcoffeetime.service.mapper;

import g5.projeto.dbcoffeetime.domain.Situacao;
import g5.projeto.dbcoffeetime.service.dto.SelectDTO;
import org.mapstruct.InheritInverseConfiguration;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface SituacaoMapper extends EntityMapper<SelectDTO, Situacao> {

    @Mapping(source = "id", target = "value")
    @Mapping(source = "nome", target = "label")
    SelectDTO toDto(Situacao situacao);

    @InheritInverseConfiguration
    Situacao toEntity(SelectDTO selectDTO);
}