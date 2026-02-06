package com.system.fisio.domain.enums;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.system.fisio.domain.exception.CodigoInvalidoException;

@JsonFormat(shape = JsonFormat.Shape.OBJECT)
public enum TipoUsuario {

    ADM(1, "Administrador"),
    RECEPCAO(2, "Recepção");

    private final int codigo;
    private final String descricao;

    TipoUsuario(int codigo, String descricao) {
        this.codigo = codigo;
        this.descricao = descricao;
    }

    public int getCodigo() {
        return codigo;
    }

    public String getDescricao() {
        return descricao;
    }

    @JsonCreator
    public static TipoUsuario fromCodigo(Integer codigo) {
        if (codigo == null) {
            return null;
        }

        for (TipoUsuario tipo : values()) {
            if (tipo.codigo == codigo) {
                return tipo;
            }
        }

        throw new CodigoInvalidoException("Código inválido para AtivoInativo: " + codigo);
    }

    @Override
    public String toString() {
        return descricao;
    }
}


