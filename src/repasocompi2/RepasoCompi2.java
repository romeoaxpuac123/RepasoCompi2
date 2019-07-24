/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package repasocompi2;

import Analizadores.Analizador_Lexico;
import Analizadores.Analizador_Sintactico;
import java.io.BufferedReader;
import java.io.StringReader;
import javax.swing.JTextArea;
import java.io.StringReader;
import java.util.logging.Level;
import java.util.logging.Logger;
import CodigoAST.*;
import Codigo.*;
import javax.swing.JTextArea;

/**
 *
 * @author Bayyron
 */
public class RepasoCompi2 {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // TODO code application logic here
        //System.out.println("hola que onda");
        Formulario1 form1 = new Formulario1();
        form1.setVisible(true);
       
        
    }
    
    public void Analizar(String entrada,JTextArea salida){
        Analizador_Lexico Texto = new Analizador_Lexico(new BufferedReader  (new StringReader(entrada)));
        Analizador_Sintactico Sintactico = new Analizador_Sintactico (Texto);
        
        try{
            Sintactico.parse();
            this.Ejecutar(Sintactico.Raiz , salida);
        }catch(Exception e){
            
        }
    }
    
        public void Analizar2(String entrada,JTextArea salida){
        Analizador_Lexico Texto = new Analizador_Lexico(new BufferedReader  (new StringReader(entrada)));
        Analizador_Sintactico Sintactico = new Analizador_Sintactico (Texto);
        
        try{
            Sintactico.parse();
            Graficador g = new Graficador();
            g.graficarAST(Sintactico.Raiz);
            //this.Ejecutar(Sintactico.Raiz , salida);
        }catch(Exception e){
            
        }
    }
    
     public void Ejecutar(NodoAbstracto raiz,JTextArea salida){
        Entorno entorno = new Entorno();
        for (NodoAbstracto sentencia : raiz.Hijos.get(0).Hijos) {// para ejecutar solo sentencias 
            sentencia.Ejecutar(entorno,salida);
        }
    };
}
