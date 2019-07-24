
package Analizadores;
import java_cup.runtime.*;

%%

%{

%}


%public
%class Analizador_Lexico
%cupsym Simbolo
%cup
%char
%column
%full
%ignorecase
%line
%unicode

entero = [0-9]+
decimal={entero}"."{entero}
cadena = [\"]([^\"\n]|(\\\"))*[\"]
id = [a-z](_|[0-9]|[a-z])*

COMENT_UNILINEA =("//".*\r\n)|("//".*\n)|("//".*\r)
COMENT_MULTILINEA ="/*""/"* ([^*/]|[^*]"/"|"*"[^/])* "*"*"*/"

%state COMENT_SIMPLE
%state COMENT_MULTI

%%



{COMENT_UNILINEA}        {   System.out.println("--->Comentario 1 línea");} 
{COMENT_MULTILINEA}      {   System.out.println("--->Comentario multilínea");} 


<YYINITIAL> "Imprimir"  {   System.out.println("--->"+yytext()+" - Imprimir");
                            return new Symbol(Simbolo.imprimir, yycolumn, yyline, yytext());}

<YYINITIAL> "int"       {   System.out.println("--->"+yytext()+" - int");
                            return new Symbol(Simbolo.tint, yycolumn, yyline, yytext());}

<YYINITIAL> "bool"      {   System.out.println("--->"+yytext()+" - boole");
                            return new Symbol(Simbolo.tbool, yycolumn, yyline, yytext());}

<YYINITIAL> "float"     {   System.out.println("--->"+yytext()+" - float");
                            return new Symbol(Simbolo.tfloat, yycolumn, yyline, yytext());}

<YYINITIAL> "double"     {   System.out.println("--->"+yytext()+" - double");
                            return new Symbol(Simbolo.tdouble, yycolumn, yyline, yytext());}

<YYINITIAL> "="         {   System.out.println("--->"+yytext()+" - igual");
                            return new Symbol(Simbolo.igual, yycolumn, yyline, yytext());}

<YYINITIAL> "+"         {   System.out.println("--->"+yytext()+" - mas");
                            return new Symbol(Simbolo.mas, yycolumn, yyline, yytext());}     
                            
<YYINITIAL> "-"         {   System.out.println("--->"+yytext()+" - menos");
                            return new Symbol(Simbolo.menos, yycolumn, yyline, yytext());}  

<YYINITIAL> "/"      {   System.out.println("--->"+yytext()+" - dividido");
                            return new Symbol(Simbolo.div, yycolumn, yyline, yytext());}     

<YYINITIAL> "*"      {   System.out.println("--->"+yytext()+" - por");
                            return new Symbol(Simbolo.por, yycolumn, yyline, yytext());}

<YYINITIAL> "^"         {   System.out.println("--->"+yytext()+" - potencia");
                            return new Symbol(Simbolo.potencia, yycolumn, yyline, yytext());}

<YYINITIAL> ";"         {   System.out.println("--->"+yytext()+" - punto y coma v*****v*****v*****v*****v*****\n");
                            return new Symbol(Simbolo.puntoycoma, yycolumn, yyline, yytext());}

<YYINITIAL> "{"         {   System.out.println("--->"+yytext()+" - llave abrir");
                            return new Symbol(Simbolo.llaveabrir, yycolumn, yyline, yytext());}

<YYINITIAL> "}"         {   System.out.println("--->"+yytext()+" - llave cerrar");
                            return new Symbol(Simbolo.llavecerrar, yycolumn, yyline, yytext());}

<YYINITIAL> "("         {   System.out.println("--->"+yytext()+" - llave abrir");
                            return new Symbol(Simbolo.parentesisabrir, yycolumn, yyline, yytext());}

<YYINITIAL> ")"         {   System.out.println("--->"+yytext()+" - llave cerrar");
                            return new Symbol(Simbolo.parentesiscerrar, yycolumn, yyline, yytext());}




<YYINITIAL> {entero}    {   System.out.println("--->"+yytext()+" - entero");
                            return new Symbol(Simbolo.entero, yycolumn, yyline, yytext());}

<YYINITIAL> {decimal}    {   System.out.println("--->"+yytext()+" - decimal");
                            return new Symbol(Simbolo.decimal, yycolumn, yyline, yytext());}                            

<YYINITIAL> {id}        {   System.out.println("--->"+yytext()+" - id");
                            return new Symbol(Simbolo.id, yycolumn, yyline, yytext());}
<YYINITIAL> {cadena}    {   System.out.println("--->"+yytext()+" - CADENA");
                            return new Symbol(Simbolo.cadena, yycolumn, yyline, yytext());}


[ \t\r\n\f]             {/* Se ignora */ }
 

.                       {   System.out.println("#Error léxico: <"+yytext()+"> Linea: "+yyline+" ,Columna: "+yycolumn);}

