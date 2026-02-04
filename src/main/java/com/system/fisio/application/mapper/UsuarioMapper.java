package com.system.fisio.application.mapper;

import com.system.fisio.domain.model.Usuario;
import com.system.fisio.application.dto.UsuarioRequest;
import org.springframework.stereotype.Component;

@Component
public class UsuarioMapper {

    public Usuario toDomain(UsuarioRequest usuarioRequest) {
        return new Usuario(
                null,
                usuarioRequest.getNome(),
                usuarioRequest.getEmail(),
                usuarioRequest.getLogin(),
                usuarioRequest.getSenha(),
                usuarioRequest.getStUsuario(),
                usuarioRequest.getTipo()
        );
    }

}
