
/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Codigo;

import Codigo.*;
import java.util.Hashtable;

/**
 *
 * @author lml
 */
public class Entorno {
    Hashtable<String,Simbolo> Elementos;

    public Entorno() {
        Elementos = new Hashtable<>();
    }
    
    public boolean Agregar(String id, String tipo, String valor){
        if (!Elementos.containsKey(id)) {
            Simbolo sim = new Simbolo(id, valor, tipo);
            Elementos.put(id, sim);
            System.out.println("La variables se agregó -> "+id);
            return true;
        }else{
            System.out.println("La variables ya existe -> "+id);
            return false;
        }
    }
    
    public String ObtenerValor(String id){
        if (Elementos.containsKey(id)) {
            return Elementos.get(id).ObtenerValor();
        } else{
            return "#Error";
        }
    }
    
    public String ObtenerTipo(String id){
        if (Elementos.containsKey(id)) {
            return Elementos.get(id).ObtenerTipo();
        } else{
            return "#Error";
        }
    }
    
}
