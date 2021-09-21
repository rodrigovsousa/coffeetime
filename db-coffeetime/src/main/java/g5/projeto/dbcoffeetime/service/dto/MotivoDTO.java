package g5.projeto.dbcoffeetime.service.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.io.Serializable;

@Getter
@Setter
public class MotivoDTO implements Serializable {

    private Long id;

    @NotNull
    @Size(max = 200)
    private String descricao;

    @NotNull
    private String titulo;
<<<<<<< HEAD

}

=======
>>>>>>> 173069d0474de1c5e0952a1394f450f6193bc1d5
}

