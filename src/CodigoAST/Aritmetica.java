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
        double totald = 0;
        String totalc = "";
        String val1 = this.Hijos.get(0).Ejecutar(entorno, salida);
        String val2 = this.Hijos.get(2).Ejecutar(entorno, salida);
        
        String Tipo1 = this.Hijos.get(0).TipoDato;
        String Tipo2 = this.Hijos.get(2).TipoDato;
        
        
        
        if (val1.equalsIgnoreCase("#Error") || val2.equalsIgnoreCase("#Error")){
            return "#Error";
        }
        
        if("entero".equals(Tipo1) && "entero".equals(Tipo2)){        
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
        }else if(("decimal".equals(Tipo1)||"entero".equals(Tipo1)) && "decimal".equals(Tipo2)){        
            double valor1 = Double.parseDouble(val1);
            double valor2 =  Double.parseDouble(val2);
            switch(this.Hijos.get(1).Nombre){
                case "+":
                    totald = valor1 + valor2;
                    System.out.println("Paso por una suma");
                    break;
                case "-":
                    totald = valor1 - valor2;
                    System.out.println("Paso por una resta");
                    break;
                case "/":
                    if(valor2==0){
                        salida.append("#Error: Se está intentando dividir por 0 \n");
                        return "#Error";
                    }
                    totald = valor1 / valor2;
                    System.out.println("Paso por una division");
                    break;
                case "*":
                    totald = valor1 * valor2;
                    System.out.println("Paso por una multiplicacion");
                    break;
              case "^":
                    totald =  (int) Math.pow(valor1,valor2);
                    System.out.println("Paso por una potencia");
                    break;
                default:

            }

            return String.valueOf(totald);
        }else if(("cadena".equals(Tipo1)||"decimal".equals(Tipo1)||"entero".equals(Tipo1)) && "cadena".equals(Tipo2)){        
            String valor1 = val1;
            String valor2 =  val2;
            switch(this.Hijos.get(1).Nombre){
                case "+":
                    totalc = valor1 + valor2;
                    System.out.println("Paso por una suma");
                    break;
                case "-":
                    return "#Error";
                case "/":
                   return "#Error";
                case "*":
                   return "#Error";
              case "^":
                    return "#Error";
                default:

            }

            return String.valueOf(totalc);
        }else if("decimal".equals(Tipo1) && ("decimal".equals(Tipo2)||"entero".equals(Tipo2))){        
            double valor1 = Double.parseDouble(val1);
            double valor2 =  Double.parseDouble(val2);
            switch(this.Hijos.get(1).Nombre){
                case "+":
                    totald = valor1 + valor2;
                    System.out.println("Paso por una suma");
                    break;
                case "-":
                    totald = valor1 - valor2;
                    System.out.println("Paso por una resta");
                    break;
                case "/":
                    if(valor2==0){
                        salida.append("#Error: Se está intentando dividir por 0 \n");
                        return "#Error";
                    }
                    totald = valor1 / valor2;
                    System.out.println("Paso por una division");
                    break;
                case "*":
                    totald = valor1 * valor2;
                    System.out.println("Paso por una multiplicacion");
                    break;
              case "^":
                    totald =  (int) Math.pow(valor1,valor2);
                    System.out.println("Paso por una potencia");
                    break;
                default:

            }

            return String.valueOf(totald);
        }else if("cadena".equals(Tipo1) && ("cadena".equals(Tipo2)||"decimal".equals(Tipo2)||"entero".equals(Tipo2))){ 
            String valor1 = val1;
            String valor2 =  val2;
            switch(this.Hijos.get(1).Nombre){
                case "+":
                    totalc = valor1 + valor2;
                    System.out.println("Paso por una suma");
                    break;
                case "-":
                    return "#Error";
                case "/":
                   return "#Error";
                case "*":
                   return "#Error";
              case "^":
                    return "#Error";
                default:
        
        }
            return String.valueOf(totalc);
        }
        
        return "";
    }
    
}