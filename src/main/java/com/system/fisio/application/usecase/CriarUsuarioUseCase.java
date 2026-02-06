package com.system.fisio.application.usecase;

import com.system.fisio.application.mapper.UsuarioMapper;
import com.system.fisio.domain.exception.UsuarioException;
import com.system.fisio.domain.model.Usuario;
import com.system.fisio.domain.ports.IUsuarioRepository;
import com.system.fisio.application.dto.UsuarioRequest;
import com.system.fisio.application.dto.UsuarioResponse;
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

    public UsuarioResponse execute(UsuarioRequest usuarioRequest) {
        try {
            usuarioRepository.findByEmail(usuarioRequest.getEmail()).ifPresent(usuario -> {
                throw new UsuarioException("Usuário já cadastrado");
            });
            UsuarioRequest requestEncodedPassword = new UsuarioRequest(
                    usuarioRequest.getNome(),
                    usuarioRequest.getEmail(),
                    usuarioRequest.getLogin(),
                    passwordEncoder.encode(usuarioRequest.getSenha()),
                    usuarioRequest.getStUsuario(),
                    usuarioRequest.getTipo()
            );
            Usuario usuario = usuarioRepository.save(usuarioMapper.toDomain(requestEncodedPassword));
            return usuarioMapper.toResponse(usuario);
        } catch (Exception e) {
            throw new UsuarioException("Erro ao criar usuário: " + e.getMessage());
        }
    }

}
