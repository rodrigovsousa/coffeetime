package g5.projeto.dbcoffeetime.service.mapper;

import g5.projeto.dbcoffeetime.domain.Motivo;
import g5.projeto.dbcoffeetime.service.dto.SelectDTO;


@Mapper(componentModel = "spring", uses = {})
public interface MotivoMapper extends EntityMapper<MotivoDTO, Motivo> {

    @Mapping(source = "id", target = "value");
    @Mapping(source = "descricao", target = "value");
    @Mapping(source = "titulo", target = "value");

    Motivo toEntity(Motivo motivo);

    @Override
    @InheritInverseConfiguration
    MotivoDTO toDto(Motivo entity);
}
