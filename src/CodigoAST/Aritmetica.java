/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package CodigoAST;

import Codigo.Entorno;
import javax.swing.JTextArea;
import jflex.Options;
import Codigo3D.*;

/**
 *
 * @author lml
 */
public class Aritmetica extends NodoAbstracto{

    public Aritmetica(String Nombre) {
        super(Nombre);
    }
    
    

    @Override
    public void Ejecutar() {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public String Ejecutar(Entorno entorno, JTextArea salida) {
        int total = 0;
        String val1 = this.Hijos.get(0).Ejecutar(entorno, salida);
        String val2 = this.Hijos.get(2).Ejecutar(entorno, salida);
        
        
        if (val1.equalsIgnoreCase("#Error") || val2.equalsIgnoreCase("#Error")){
            return "#Error";
        }
        int valor1 = Integer.parseInt(val1);
        int valor2 = Integer.parseInt(val2);
        switch(this.Hijos.get(1).Nombre){
            case "+":
                total = valor1 + valor2;
                System.out.println("Paso por una suma");
                break;
            case "-":
                total = valor1 - valor2;
                System.out.println("Paso por una resta");
                break;
            case "/":
                if(valor2==0){
                    salida.append("#Error: Se está intentando dividir por 0 \n");
                    return "#Error";
                }
                total = valor1 / valor2;
                System.out.println("Paso por una division");
                break;
            case "*":
                total = valor1 * valor2;
                System.out.println("Paso por una multiplicacion");
                break;
          case "^":
                total =  (int) Math.pow(valor1,valor2);
                System.out.println("Paso por una potencia");
                break;
            default:
                
        }
        
        return Integer.toString(total);
    }
    
}