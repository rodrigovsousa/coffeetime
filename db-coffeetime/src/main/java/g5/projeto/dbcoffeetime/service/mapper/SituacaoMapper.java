package g5.projeto.dbcoffeetime.service.mapper;

import g5.projeto.dbcoffeetime.domain.Situacao;
import g5.projeto.dbcoffeetime.service.dto.SelectDTO;


@Mapper(componentModel = "spring", uses = {})
public interface SituacaoMapper extends EntityMapper<SituacaoMapper, Situacao> {

    @Mapping(source = "id", target = "value");
    @Mapping(source = "descricao", target = "value");

    SelectDTO toDto(Situacao situacao);

}
