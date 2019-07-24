package CodigoAST;
import Codigo.*;
import java.util.ArrayList;
import Codigo.*;
import javax.swing.JTextArea;

/**
 *
 * @author lml
 */
public class Nodo extends NodoAbstracto{

    
    @Override
    public void Ejecutar() {
        System.out.println("Ejecutar nodo");
    }
    
    public Nodo(String val)
    {
        this.Nombre = val;
        this.id=0;
        this.linea=0;
        this.columna=0;
        this.Hijos = new ArrayList<>();
    }
    
    public Nodo(String val, int lin, int col)
    {
        this.Nombre = val;
        this.id=0;
        this.linea=lin;
        this.columna=col;
        this.Hijos = new ArrayList<>();
    }

    @Override
    public String Ejecutar(Entorno entorno,JTextArea salida) {
        String sali = "";
        switch(this.Nombre){
            case "Entero":
                sali = this.Hijos.get(0).Nombre;
                break;
            case "Decimal":
                sali = this.Hijos.get(0).Nombre;
                break;
            case "Cadena":
                sali = this.Hijos.get(0).Nombre;
                break;
            case "id":
                sali = entorno.ObtenerValor(this.Hijos.get(0).Nombre);
                if ("#Error".equalsIgnoreCase(sali)){
                    salida.append("#Error: No se ha encontrado la variables -> "+this.Hijos.get(0).Nombre+"\n");
                }
                break;
            case "x":
                
                break;
            default:
                
        }
        return sali;
    }
    
    
}


