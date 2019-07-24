/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package CodigoAST;

import Codigo.*;
import CodigoAst.*;
import javax.swing.JTextArea;

public class Imprimir extends NodoAbstracto{

    @Override
    public void Ejecutar() {
         System.err.println("Se esta ejecutnado imprimir\n");
    }

    public Imprimir(String Valor) {
        super(Valor);
    }

    @Override
    public String Ejecutar(Entorno entorno,JTextArea salida) {
        
        String val = this.Hijos.get(0).Ejecutar(entorno, salida);
        if (!val.equalsIgnoreCase("#Error")){
            salida.append(val+"\n");
        }
        return "imprimir";
    }
    
    
}
