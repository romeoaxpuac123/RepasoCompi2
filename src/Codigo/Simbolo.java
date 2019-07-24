/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Codigo;

import Codigo.*;

/**
 *
 * @author lml
 */
public class Simbolo {
    String Id;
    String Valor;
    String Tipo;

    public Simbolo(String Id, String Valor, String Tipo) {
        this.Id = Id;
        this.Valor = Valor;
        this.Tipo = Tipo;
    }

    public String ObtenerId() {
        return Id;
    }

    public String ObtenerValor() {
        return Valor;
    }

    public String ObtenerTipo() {
        return Tipo;
    }
   
    
}
