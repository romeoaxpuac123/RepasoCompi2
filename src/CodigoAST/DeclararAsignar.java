/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package CodigoAST;

import javax.swing.JTextArea;
import Codigo.*;
import CodigoAst.*;
/**
 *
 * @author Bayyron
 */
public class DeclararAsignar extends NodoAbstracto{

    public DeclararAsignar(String Valor) {
        super(Valor);
    }
    

    @Override
    public void Ejecutar() {
        System.err.println("Se está Ejecutnado declararasiganar");
    }

    public String Ejecutar(Entorno entorno,JTextArea salida) {
        String tipo = this.Hijos.get(0).Nombre;
        String id = this.Hijos.get(1).Nombre;
        String valor = this.Hijos.get(2).Ejecutar(entorno, salida);
        entorno.Agregar(id, tipo, valor);
        return "";
    }
}