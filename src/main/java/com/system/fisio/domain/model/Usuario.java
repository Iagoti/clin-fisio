package com.system.fisio.domain.model;

import com.system.fisio.domain.enums.AtivoInativoEnum;
import com.system.fisio.domain.enums.TipoUsuario;
import com.system.fisio.domain.exception.UsuarioException;
import java.time.LocalDateTime;

public class Usuario {

    private Integer cdUsuario;
    private String nome;
    private String email;
    private String login;
    private String senha;
    private AtivoInativoEnum stUsuario;
    private TipoUsuario tipo;
    private final LocalDateTime dataCadastro;

    public Usuario(
            Integer cdUsuario,
            String nome,
            String email,
            String login,
            String senha,
            AtivoInativoEnum stUsuario,
            TipoUsuario tipo
    ) {
        this.cdUsuario = cdUsuario;
        this.nome = nome;
        this.email = email;
        this.login = login;
        this.senha = senha;
        this.stUsuario = stUsuario;
        this.tipo = tipo;
        this.dataCadastro = LocalDateTime.now();
        validar();
    }

    private void validar() {
        if (nome == null || nome.isBlank()) throw new UsuarioException("Nome obrigatório");
        if (login == null || login.isBlank()) throw new UsuarioException("Login obrigatório");
        if (senha == null || senha.isBlank()) throw new UsuarioException("Senha obrigatória");
        if (tipo == null) throw new UsuarioException("Tipo de usuário obrigatório");
    }

    public void inativar() {
        this.stUsuario = AtivoInativoEnum.INATIVO;
    }

    public void ativar() {
        this.stUsuario = AtivoInativoEnum.ATIVO;
    }

    public Integer getCdUsuario() {
        return cdUsuario;
    }

    public String getNome() {
        return nome;
    }

    public String getEmail() {
        return email;
    }

    public String getLogin() {
        return login;
    }

    public String getSenha() {
        return senha;
    }

    public AtivoInativoEnum getStUsuario() {
        return stUsuario;
    }

    public TipoUsuario getTipo() {
        return tipo;
    }

    public LocalDateTime getDataCadastro() {
        return dataCadastro;
    }
}
