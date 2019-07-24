SET JAVA_HOME="C:\Program Files\Java\jdk1.8.0_141\bin"
SET PATH=%JAVA_HOME%;%PATH%
SET CLASSPATH=%JAVA_HOME%;
cd C:\Users\Bayyron\Desktop\RepasoCompi2\src\Analizadores
java -jar C:\Users\Bayyron\Desktop\Librerias\librerias\java-cup-11b.jar -parser Analizador_Sintactico -symbols Simbolo Analizador_Sintactico.cup 
pause
