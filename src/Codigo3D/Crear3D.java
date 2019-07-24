/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Codigo3D;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;

/**
 *
 * @author Bayyron
 */
public class Crear3D {
    public int NumeroT = 0;
    public int NumeroSalto = 0;
    public int Quemado1 = 0;
    
    public String AsignarT(int NumeroTo, String valor){
        System.out.println("t"+NumeroTo+" = "+valor);  
        Archivo3D("t"+NumeroTo+" = "+valor+"\n");
        NumeroT++;
        return "t"+NumeroTo;
    }
    
    public String AsignarT2(int NumeroTo, String valor1, String Valor2, String Operacion){
        System.out.println("t"+NumeroTo+" = "+valor1 + " " +Operacion + " "+ Valor2);   
         Archivo3D("t"+NumeroTo+" = "+valor1 + " " +Operacion + " "+ Valor2 + "\n");
        NumeroT++;
        return "t"+NumeroTo;
    }
     public String Codigo3DPotencia2(int NumeroTo, String Base, String exponente){
        String Cadena = "t" + NumeroTo + " = P + 0;"+"\n";
        NumeroTo++;
        Cadena = Cadena + "t" + (NumeroTo) + " = t" + (NumeroTo-1) + " + 0 ;" + "\n"  ;
        NumeroTo++;
        Cadena = Cadena + "t" + (NumeroTo) + " = t" + (NumeroTo-2) + " + 1 ;" + "\n"  ;
        Cadena = Cadena + "stack[t" + (NumeroTo-1) + "] = " + Base + ";\n"  ;
        Cadena = Cadena + "stack[t" + (NumeroTo) + "] = " + exponente + ";\n"  ;
        Cadena = Cadena + "P = P + 0; \n";
        Cadena = Cadena + "call mi_pow();\n" ;
        NumeroTo++;
        Cadena = Cadena + "t" + NumeroTo + " = P + 2;"+"\n";
        NumeroTo++;
        Cadena = Cadena + "t" + (NumeroTo) + " = stack[t"+ (NumeroTo-1) +"];" + "\n"  ;
        Cadena = Cadena + "P = P - 0; \n";
        NumeroT = NumeroTo+1;
        System.out.println(Cadena);
        Archivo3D(Cadena);
        return "t"+NumeroTo;
    }
    public void Codigo3DPotencia(int NumeroTo, int quemado){
        if(quemado == 0){
            String Codigo3D = "\nproc mi_pow begin \n";
            Codigo3D =Codigo3D+ "   t"+ NumeroTo + " = P" + "0;" + "\n";
            NumeroTo++;
            Codigo3D =Codigo3D+ "   t"+ NumeroTo + " = P" + "1;" + "\n";
            NumeroTo++;
            Codigo3D =Codigo3D+ "   t"+ NumeroTo + " = stack[t" + (NumeroTo-2) + "];" + "\n";
            NumeroTo++;
            Codigo3D =Codigo3D+ "   t"+ NumeroTo + " = stack[t" + (NumeroTo-2) + "];" + "\n";
            NumeroTo++;
            Codigo3D =Codigo3D+ "   t"+ NumeroTo + " = 0;" + "\n";
            NumeroTo++;
            Codigo3D =Codigo3D+ "   t"+ NumeroTo + " = 1;" + "\n";
            Codigo3D = Codigo3D + "   L" + NumeroSalto + ":"+ "\n";
            NumeroSalto++;
            Codigo3D = Codigo3D + "      if( t" + (NumeroTo-1) +"< t" + (NumeroTo-2) + ") goto L" + (NumeroSalto-1) + ";"+ "\n";
            NumeroSalto++;
            Codigo3D = Codigo3D + "      goto L" + NumeroSalto + ";"+ "\n";
            Codigo3D = Codigo3D + "   L" + (NumeroSalto-1) + ":" + "\n";
            Codigo3D = Codigo3D + "      t"+ NumeroTo +" = t" +NumeroTo + " * t" + (NumeroTo-3) +";"+"\n";
            Codigo3D = Codigo3D + "      t"+ (NumeroTo-1) +" = t" + (NumeroTo-1) + " +1" +";"+"\n";
            Codigo3D = Codigo3D + "      goto L" + (NumeroSalto-2) + ";"+ "\n";
            Codigo3D = Codigo3D + "   L"+ NumeroSalto +":\n";
            NumeroTo++;
            Codigo3D = Codigo3D + "      t"+ NumeroTo +" = t" +NumeroTo + " + 2" +";"+"\n";
            Codigo3D = Codigo3D + "      stack[t"+ NumeroTo +"] = t" + (NumeroTo-1) + ";"+"\n";
            Codigo3D = Codigo3D +"end \n";
            NumeroT = NumeroTo+1;
            System.out.println(Codigo3D);
            Archivo3D(Codigo3D);
            Quemado1++;
        }
    }
   
    public void Archivo3D(String contenido){
         try {
            String ruta = "3d.txt";
            File file = new File(ruta);
            // Si el archivo no existe es creado
            if (!file.exists()) {
                file.createNewFile();
            }
            FileWriter fw = new FileWriter(file.getAbsoluteFile(),true);
            BufferedWriter bw = new BufferedWriter(fw);
            bw.write(contenido);
            bw.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
