

  Blockly.defineBlocksWithJsonArray([
    {
      "type": "id1",
      "message0": " @ %1 ",
      "args0": [
        {
            "type": "input_value",
            "name": "VALUE"
        }
        
        
      ],   
     
      "output": null,
      "colour": "green",
      "tooltip": "",
      "helpUrl": ""
    }    
  ]);

  Blockly.defineBlocksWithJsonArray([
    {
        "type": "id1",
        "message0": "@%1 ; " ,
        "args0": [
          {
            "type": "field_input",
              "name": "VALUE"
          }
        ],
        "output": null,
        "colour": "green",
         "tooltip": "",
         "helpUrl": ""
    } 
]);
Blockly.defineBlocksWithJsonArray([
    {
        "type": "id2",
        "message0": " %1 ; " ,
        "args0": [
          {
            "type": "field_input",
              "name": "VALUE"
          }
        ],
        "output": null,
        "colour": "green",
         "tooltip": "",
         "helpUrl": ""
    } 
]);
Blockly.defineBlocksWithJsonArray([
    {
        "type": "id3",
        "message0": " %1 , %2" ,
        "args0": [
          {
              "type": "field_input",
              "name": "VALUE"
          },{

            "type": "input_value",
            "name": "VALUE"
          }
        ],
        "output": null,
        "colour": "green",
         "tooltip": "",
         "helpUrl": ""
    } 
]);

Blockly.defineBlocksWithJsonArray([
    {
        "type": "id4",
        "message0": " %1 = %2 ; " ,
        "args0": [
          {
            "type": "field_input",
              "name": "VALUE"
          }
          ,{

            "type": "input_value",
            "name": "VALUE"
          }
        ],
        "output": null,
        "colour": "green",
         "tooltip": "",
         "helpUrl": ""
    } 
]);
Blockly.defineBlocksWithJsonArray([
    {
        "type": "id5",
        "message0": "@%1 = %2; " ,
        "args0": [
          {
            "type": "field_input",
              "name": "VALUE"
          },{

            "type": "input_value",
            "name": "VALUE"
          }
        ],
        "output": null,
        "colour": "green",
         "tooltip": "",
         "helpUrl": ""
    } 
]);
Blockly.defineBlocksWithJsonArray([
  {
    "type": "OPERADORESentrada",
    "message0": " %1 %2 %3 ",
    "args0": [
      
      {
          "type": "input_value",
          "name": "VALUE"
      },
      {
        "type": "field_dropdown",
        "name": "VAR1",
        "options": [
          ["=", "s11"],
          [">", "s1"],
          [">=", "s2"],
          ["<", "s3"],
          ["<=", "s4"],
          ["<>", "s5"],
          ["==", "s6"],
          ["&&", "s7"],
          ["||", "s8"],
          ["XOR", "s9"],
          ["OTRO", "S10"]
        ]
      }
      ,{
          "type": "input_value",
          "name": "VALUE"
      }
      
    ],   
    "output": null,
    "colour": "yellow",
    "tooltip": "",
    "helpUrl": ""
  }    
]);

Blockly.defineBlocksWithJsonArray([
    {
      "type": "OPERADORESxd",
      "message0": " %1 %2 %3",
      "args0": [
        {
            "type": "input_value",
            "name": "VALUE"
        },
        {
          "type": "field_dropdown",
          "name": "VAR1",
          "options": [
            ["+", "s1"],
            ["-", "s2"],
            ["*", "s3"],
            ["/", "s4"]
          ]
        }
        ,{
            "type": "input_value",
            "name": "VALUE"
        }
        
      ],   
     
      "output": null,
      "colour": "yellow",
      "tooltip": "",
      "helpUrl": ""
    }    
  ]);

  Blockly.defineBlocksWithJsonArray([
    {
        "type": "funcion",
        "message0": "%1(%2); " ,
        "args0": [
          {
            "type": "field_input",
              "name": "VALUE"
          },{

            "type": "input_value",
            "name": "VALUE"
          }
        ],
        "output": null,
        "colour": "yellow",
         "tooltip": "",
         "helpUrl": ""
    } 
]);

Blockly.defineBlocksWithJsonArray([
    {
        "type": "funcion2",
        "message0": "%1(%2) " ,
        "args0": [
          {
            "type": "field_input",
              "name": "VALUE"
          },{

            "type": "input_value",
            "name": "VALUE"
          }
        ],
        "output": null,
        "colour": "yellow",
         "tooltip": "",
         "helpUrl": ""
    } 
]);

Blockly.defineBlocksWithJsonArray([
    {
        "type": "funcion3",
        "message0": "%1(%2),%3 " ,
        "args0": [
          {
            "type": "field_input",
              "name": "VALUE"
          },{

            "type": "input_value",
            "name": "VALUE"
          },{

            "type": "input_value",
            "name": "VALUE"
          }
        ],
        "output": null,
        "colour": "yellow",
         "tooltip": "",
         "helpUrl": ""
    } 
]);
/* 
  PARTE DE LO SENTECIAS DE SELECCION if
*/


Blockly.defineBlocksWithJsonArray([
  {
    "type": "IF",
    "message0": "IF( %1 ) {%2}",
    "args0": [
      {"type": "input_value", "name": "TIMES", "check": "Number"},
      {
        "type": "input_value",
            "name": "VALUE"
      }
    ],
    "message1": "ELSE %1",
    "args1": [
      {"type": "input_statement", "name": "DO"}
    ],
    "previousStatement": null,
    "colour": "red"
  }
]);

Blockly.defineBlocksWithJsonArray([
  {
    "type": "IF2",
    "message0": "IF( %1 ) {%2}",
    "args0": [
      {"type": "input_value", "name": "TIMES", "check": "Number"},
      {
        "type": "input_value",
            "name": "VALUE"
      }
    ],
    "previousStatement": null,
    "colour": "red"
  }
]);
Blockly.defineBlocksWithJsonArray([
  {
      "type": "ELSE",
      "message0": "{%1}" ,
      "args0": [
        {
          "type": "input_value",
            "name": "VALUE"
        }
      ],
      "previousStatement": null,
      "colour": "red",
       "tooltip": "",
       "helpUrl": ""
  } 
]);

/* 
  PARTE DE LO SENTECIAS DE SWITHC SWITCH
*/
Blockly.defineBlocksWithJsonArray([
  {
    "type": "SWITCH",
    "message0": "SWITCH( %1 ) {%2}",
    "args0": [
      {"type": "input_value", "name": "TIMES", "check": "Number"},
      {
        "type": "input_value",
            "name": "VALUE"
      }
    ],
    "previousStatement": null,
    "colour": "red"
  }
]);

Blockly.defineBlocksWithJsonArray([
  {
    "type": "CASE",
    "message0": "CASE  (%1) : %2 //fin",
    "args0": [
      { 
        "type": "input_value",
        "name": "VALUE"
      },
      {
        "type": "input_value",
            "name": "VALUE"
      }
    ],
    "previousStatement": null,
    "colour": "red"
  }
]);

Blockly.defineBlocksWithJsonArray([
  {
    "type": "def",
    "message0": "default:  %1 ",
    "args0": [
      { 
        "type": "input_value",
        "name": "VALUE"
      }
    ],
    "previousStatement": null,
    "colour": "red"
  }
]);

Blockly.defineBlocksWithJsonArray([
  {
    "type": "break",
    "message0": "break;   ",
    "args0": [
      
    ],
    "previousStatement": null,
    "colour": "red"
  }
]);

Blockly.defineBlocksWithJsonArray([
  {
    "type": "return",
    "message0": "return  %1; ",
    "args0": [
      { 
        "type": "input_value",
        "name": "VALUE"
      }
    ],
    "previousStatement": null,
    "colour": "red"
  }
]);
Blockly.defineBlocksWithJsonArray([
  {
    "type": "continue",
    "message0": "continue;   ",
    "args0": [
      
    ],
    "previousStatement": null,
    "colour": "red"
  }
]);


/* 
  WHILE, DOWHILE, FOR
*/
Blockly.defineBlocksWithJsonArray([
  {
    "type": "WHILE",
    "message0": "WHILE( %1 ) {%2}",
    "args0": [
      {"type": "input_value", "name": "TIMES", "check": "Number"},
      {
        "type": "input_value",
            "name": "VALUE"
      }
    ],
    "previousStatement": null,
    "colour": "#890ABD"
  }
]);

Blockly.defineBlocksWithJsonArray([
  {
    "type": "DOWHILE",
    "message0": "DO{%1} WHILE (%2) {%3}",
    "args0": [
      {"type": "input_value", "name": "TIMES", "check": "Number"},
      {
        "type": "input_value",
            "name": "VALUE"
      },
      {
        "type": "input_value",
            "name": "VALUE"
      }
    ],
    "previousStatement": null,
    "colour": "#890ABD"
  }
]);
Blockly.defineBlocksWithJsonArray([
  {
    "type": "FOR",
    "message0": "FOR( %1 ;%2; %3 ) {%4}",
    "args0": [
      {"type": "input_value", "name": "TIMES", "check": "Number"},
      {"type": "input_value", "name": "TIMES", "check": "Number"},
      {"type": "input_value", "name": "TIMES", "check": "Number"},
      {
        "type": "input_value",
            "name": "VALUE"
      }
    ],
    "previousStatement": null,
    "colour": "#890ABD"
  }
]);

/* 
  CONECTORES
*/
Blockly.defineBlocksWithJsonArray([
  {
    "type": "UNION",
    "message0": " %1",
    "args0": [
      {"type": "input_statement", "name": "TIMES", "check": "Number"},
      
    ],
    "message1": "%1",
    "args1": [
      {"type": "input_statement", "name": "DO"}
    ],
    "output": null,
    "colour": "black"
  }
]);

Blockly.defineBlocksWithJsonArray([
  {
    "type": "UNION2",
    "message0": " %1",
    "args0": [
      {"type": "input_statement", "name": "TIMES", "check": "Number"},
      
    ],
    "message1": "%1",
    "args1": [
      {"type": "input_statement", "name": "DO"}
    ],
    "previousStatement": null,
    "colour": "black"
  }
]);
Blockly.defineBlocksWithJsonArray([
  {
    "type": "UNION3",
    "message0": " %1 ",
    "args0": [
       
      {
          "type": "input_value",
          "name": "VALUE"
      }
      
    ],   
   
    "previousStatement": null,
    "colour": "black",
    "tooltip": "",
    "helpUrl": ""
  }    
]);
Blockly.defineBlocksWithJsonArray([
  {
    "type": "UNION4",
    "message0": " %1 ",
    "args0": [
       
      {
          "type": "input_statement",
          "name": "VALUE"
      }
      
    ],   
   
    "output": null,
    "colour": "black",
    "tooltip": "",
    "helpUrl": ""
  }    
]);


Blockly.defineBlocksWithJsonArray([
    {
      "type": "TIPOSVARIABLES",
      "message0": " %1 %2 ",
      "args0": [
         {
          "type": "field_dropdown",
          "name": "VAR1",
          "options": [
            ["int", "s1"],
            ["double", "s2"],
            ["string", "s3"],
            ["Boolean", "s4"],
            ["Date", "s5"],
            ["Time", "s6"]
          ]
        }
        ,{
            "type": "input_value",
            "name": "VALUE"
        }
        
      ],   
     
      "previousStatement": null,
      "colour": "green",
      "tooltip": "",
      "helpUrl": ""
    }    
  ]);

  /* 
 funciones
*/Blockly.defineBlocksWithJsonArray([
  {
    "type": "FUNCION",
    "message0": " %1  (%2);",
    "args0": [
      {"type": "input_value", "name": "TIMES", "check": "Number"},
      {
        "type": "input_value",
            "name": "VALUE"
      }
    ],
    "previousStatement": null,
    "colour": "#14D1C3"
  }
]);
Blockly.defineBlocksWithJsonArray([
  {
    "type": "FUNCION2",
    "message0": " %1  (%2);",
    "args0": [
      {"type": "input_value", "name": "TIMES", "check": "Number"},
      {
        "type": "input_value",
            "name": "VALUE"
      }
    ],
    "output": null,
    "colour": "#14D1C3"
  }
]);


Blockly.defineBlocksWithJsonArray([
  {
    "type": "PROC1",
    "message0": " CALL %1  (%2);",
    "args0": [
      {"type": "input_value", "name": "TIMES", "check": "Number"},
      {
        "type": "input_value",
            "name": "VALUE"
      }
    ],
    "previousStatement": null,
    "colour": "#14D1C3"
  }
]);
Blockly.defineBlocksWithJsonArray([
  {
    "type": "PROC2",
    "message0": " CALL %1  (%2);",
    "args0": [
      {"type": "input_value", "name": "TIMES", "check": "Number"},
      {
        "type": "input_value",
            "name": "VALUE"
      }
    ],
    "output": null,
    "colour": "#14D1C3"
  }
]);

Blockly.defineBlocksWithJsonArray([
  {
    "type": "LENGTH1",
    "message0": "%1  .lenght();",
    "args0": [
      {"type": "input_value", "name": "TIMES", "check": "Number"},
     
    ],
    "previousStatement": null,
    "colour": "#14D1C3"
  }
]);
Blockly.defineBlocksWithJsonArray([
  {
    "type": "LENGTH2",
    "message0": "%1  .lenght();",
    "args0": [
      {"type": "input_value", "name": "TIMES", "check": "Number"},
     
    
    ],
    "output": null,
    "colour": "#14D1C3"
  }
]);

Blockly.defineBlocksWithJsonArray([
  {
    "type": "TUC1",
    "message0": "%1  .toUpperCase();",
    "args0": [
      {"type": "input_value", "name": "TIMES", "check": "Number"},
     
    ],
    "previousStatement": null,
    "colour": "#14D1C3"
  }
]);
Blockly.defineBlocksWithJsonArray([
  {
    "type": "TUC2",
    "message0": "%1  .toUpperCase();",
    "args0": [
      {"type": "input_value", "name": "TIMES", "check": "Number"},
     
    
    ],
    "output": null,
    "colour": "#14D1C3"
  }
]);

Blockly.defineBlocksWithJsonArray([
  {
    "type": "TLC1",
    "message0": "%1  .toLowerCase();",
    "args0": [
      {"type": "input_value", "name": "TIMES", "check": "Number"},
     
    ],
    "previousStatement": null,
    "colour": "#14D1C3"
  }
]);
Blockly.defineBlocksWithJsonArray([
  {
    "type": "TLC2",
    "message0": "%1  .toLowerCase();",
    "args0": [
      {"type": "input_value", "name": "TIMES", "check": "Number"},
     
    
    ],
    "output": null,
    "colour": "#14D1C3"
  }
]);

Blockly.defineBlocksWithJsonArray([
  {
    "type": "STAR1",
    "message0": "%1  .startsWith(%2);",
    "args0": [
      {"type": "input_value", "name": "TIMES", "check": "Number"},
      {"type": "input_value", "name": "TIMES", "check": "Number"},
    ],
    "previousStatement": null,
    "colour": "#14D1C3"
  }
]);
Blockly.defineBlocksWithJsonArray([
  {
    "type": "STAR2",
    "message0": "%1  .startsWith(%2);",
    "args0": [
      {"type": "input_value", "name": "TIMES", "check": "Number"},
      {"type": "input_value", "name": "TIMES", "check": "Number"},
    
    ],
    "output": null,
    "colour": "#14D1C3"
  }
]);

Blockly.defineBlocksWithJsonArray([
  {
    "type": "END1",
    "message0": "%1  .endsWith(%2);",
    "args0": [
      {"type": "input_value", "name": "TIMES", "check": "Number"},
      {"type": "input_value", "name": "TIMES", "check": "Number"},
    ],
    "previousStatement": null,
    "colour": "#14D1C3"
  }
]);
Blockly.defineBlocksWithJsonArray([
  {
    "type": "END2",
    "message0": "%1  .endsWith(%2);",
    "args0": [
      {"type": "input_value", "name": "TIMES", "check": "Number"},
      {"type": "input_value", "name": "TIMES", "check": "Number"},
    
    ],
    "output": null,
    "colour": "#14D1C3"
  }
]);

Blockly.defineBlocksWithJsonArray([
  {
    "type": "SUB1",
    "message0": "%1  .subStrin(%2,%3);",
    "args0": [
      {"type": "input_value", "name": "TIMES", "check": "Number"},
      {"type": "input_value", "name": "TIMES", "check": "Number"},
      {"type": "input_value", "name": "TIMES", "check": "Number"},
    ],
    "previousStatement": null,
    "colour": "#14D1C3"
  }
]);
Blockly.defineBlocksWithJsonArray([
  {
    "type": "SUB2",
    "message0": "%1  .subStrin(%2,%3);",
    "args0": [
      {"type": "input_value", "name": "TIMES", "check": "Number"},
      {"type": "input_value", "name": "TIMES", "check": "Number"},
      {"type": "input_value", "name": "TIMES", "check": "Number"},
    ],
    "output": null,
    "colour": "#14D1C3"
  }
]);

Blockly.defineBlocksWithJsonArray([
  {
    "type": "Y1",
    "message0": "%1  .getYear();",
    "args0": [
      {"type": "input_value", "name": "TIMES", "check": "Number"},
     
    ],
    "previousStatement": null,
    "colour": "#14D1C3"
  }
]);
Blockly.defineBlocksWithJsonArray([
  {
    "type": "Y2",
    "message0": "%1  .getYear();",
    "args0": [
      {"type": "input_value", "name": "TIMES", "check": "Number"},
     
    
    ],
    "output": null,
    "colour": "#14D1C3"
  }
]);
Blockly.defineBlocksWithJsonArray([
  {
    "type": "M1",
    "message0": "%1  .getMonth();",
    "args0": [
      {"type": "input_value", "name": "TIMES", "check": "Number"},
     
    ],
    "previousStatement": null,
    "colour": "#14D1C3"
  }
]);
Blockly.defineBlocksWithJsonArray([
  {
    "type": "M2",
    "message0": "%1  .getMonth();",
    "args0": [
      {"type": "input_value", "name": "TIMES", "check": "Number"},
     
    
    ],
    "output": null,
    "colour": "#14D1C3"
  }
]);
Blockly.defineBlocksWithJsonArray([
  {
    "type": "D1",
    "message0": "%1  .getDay();",
    "args0": [
      {"type": "input_value", "name": "TIMES", "check": "Number"},
     
    ],
    "previousStatement": null,
    "colour": "#14D1C3"
  }
]);
Blockly.defineBlocksWithJsonArray([
  {
    "type": "D2",
    "message0": "%1  .getDay();",
    "args0": [
      {"type": "input_value", "name": "TIMES", "check": "Number"},
     
    
    ],
    "output": null,
    "colour": "#14D1C3"
  }
]);

Blockly.defineBlocksWithJsonArray([
  {
    "type": "H1",
    "message0": "%1  .getHour());",
    "args0": [
      {"type": "input_value", "name": "TIMES", "check": "Number"},
     
    ],
    "previousStatement": null,
    "colour": "#14D1C3"
  }
]);
Blockly.defineBlocksWithJsonArray([
  {
    "type": "H2",
    "message0": "%1  .getHour();",
    "args0": [
      {"type": "input_value", "name": "TIMES", "check": "Number"},
     
    
    ],
    "output": null,
    "colour": "#14D1C3"
  }
]);
Blockly.defineBlocksWithJsonArray([
  {
    "type": "MI1",
    "message0": "%1  .getMinuts();",
    "args0": [
      {"type": "input_value", "name": "TIMES", "check": "Number"},
     
    ],
    "previousStatement": null,
    "colour": "#14D1C3"
  }
]);
Blockly.defineBlocksWithJsonArray([
  {
    "type": "MI2",
    "message0": "%1  .getMinuts();",
    "args0": [
      {"type": "input_value", "name": "TIMES", "check": "Number"},
     
    
    ],
    "output": null,
    "colour": "#14D1C3"
  }
]);

Blockly.defineBlocksWithJsonArray([
  {
    "type": "S1",
    "message0": "%1  .getSeconds());",
    "args0": [
      {"type": "input_value", "name": "TIMES", "check": "Number"},
     
    ],
    "previousStatement": null,
    "colour": "#14D1C3"
  }
]);
Blockly.defineBlocksWithJsonArray([
  {
    "type": "S2",
    "message0": "%1  .getSeconds();",
    "args0": [
      {"type": "input_value", "name": "TIMES", "check": "Number"},
     
    
    ],
    "output": null,
    "colour": "#14D1C3"
  }
]);

Blockly.defineBlocksWithJsonArray([
  {
    "type": "T1",
    "message0": "%1  .today();",
    "args0": [
      {"type": "input_value", "name": "TIMES", "check": "Number"},
     
    ],
    "previousStatement": null,
    "colour": "#14D1C3"
  }
]);
Blockly.defineBlocksWithJsonArray([
  {
    "type": "T2",
    "message0": "%1  .today();",
    "args0": [
      {"type": "input_value", "name": "TIMES", "check": "Number"},
     
    
    ],
    "output": null,
    "colour": "#14D1C3"
  }
]);


Blockly.defineBlocksWithJsonArray([
  {
    "type": "N1",
    "message0": "%1  .Now();",
    "args0": [
      {"type": "input_value", "name": "TIMES", "check": "Number"},
     
    ],
    "previousStatement": null,
    "colour": "#14D1C3"
  }
]);
Blockly.defineBlocksWithJsonArray([
  {
    "type": "N2",
    "message0": "%1  .Now();",
    "args0": [
      {"type": "input_value", "name": "TIMES", "check": "Number"},
     
    
    ],
    "output": null,
    "colour": "#14D1C3"
  }
]);

Blockly.defineBlocksWithJsonArray([
  {
    "type": "Log1",
    "message0": "LOG (%1);",
    "args0": [
      {"type": "input_value", "name": "TIMES", "check": "Number"},
     
    ],
    "previousStatement": null,
    "colour": "#14D1C3"
  }
]);
Blockly.defineBlocksWithJsonArray([
  {
    "type": "Log2",
    "message0": "LOG (%1);",
    "args0": [
      {"type": "input_value", "name": "TIMES", "check": "Number"},
     
    
    ],
    "output": null,
    "colour": "#14D1C3"
  }
]);