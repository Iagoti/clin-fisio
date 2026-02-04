package com.system.fisio.application.usecase;

import com.system.fisio.application.mapper.UsuarioMapper;
import com.system.fisio.domain.model.Usuario;
import com.system.fisio.domain.ports.IUsuarioRepository;
import com.system.fisio.application.dto.UsuarioRequest;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
public class CriarUsuarioUseCase {

    private final IUsuarioRepository usuarioRepository;
    private final PasswordEncoder passwordEncoder;
    private final UsuarioMapper usuarioMapper;

    public CriarUsuarioUseCase(
            IUsuarioRepository usuarioRepository,
            PasswordEncoder passwordEncoder,
            UsuarioMapper usuarioMapper
    ) {
        this.usuarioRepository = usuarioRepository;
        this.passwordEncoder = passwordEncoder;
        this.usuarioMapper = usuarioMapper;
    }

    private void execute(UsuarioRequest usuarioRequest) {
        //Verificar se o usuário já existe (por email)
        UsuarioRequest requestEncodedPassword = new UsuarioRequest(
                usuarioRequest.getNome(),
                usuarioRequest.getEmail(),
                usuarioRequest.getLogin(),
                passwordEncoder.encode(usuarioRequest.getSenha()),
                usuarioRequest.getStUsuario(),
                usuarioRequest.getTipo()
        );
        Usuario usuario = usuarioMapper.toDomain(requestEncodedPassword);
    }

}
