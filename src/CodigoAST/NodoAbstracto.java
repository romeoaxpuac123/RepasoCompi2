/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package CodigoAST;

import Codigo.*;
import java.util.ArrayList;
import Codigo.*;
import javax.swing.JTextArea;

/**
 *
 * @author lml
 */
public abstract class NodoAbstracto {
    public String Nombre;    
    public int id, linea, columna;
    public String Cadena;
    public ArrayList<NodoAbstracto> Hijos;

    public NodoAbstracto() {
    }
    
    public NodoAbstracto(String Cadena, int codigo){
        this.Cadena = Cadena;
    }
    
    public NodoAbstracto(String nom)
    {
        this.Nombre = nom;
        this.id=0;
        this.linea=0;
        this.columna=0;
        this.Hijos = new ArrayList<>();
    }
    
    public NodoAbstracto(String nom, int lin, int col)
    {
        this.Nombre = nom;
        this.id=0;
        this.linea=lin;
        this.columna=col;
        this.Hijos = new ArrayList<>();
    }
    public abstract void Ejecutar();
    public abstract String Ejecutar(Entorno entorno,JTextArea salida);
}
