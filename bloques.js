Blockly.Blocks['SELECT'] = {
    init: function() {
      this.appendValueInput('SELECT')
          .setCheck('String')
          .appendField('SELECT');

      this.appendStatementInput('WHERE')
          .appendField('WHERE');
      this.setColour("green");
        
        }
    };

    Blockly.Blocks['INSERT'] = {
        init: function() {
          this.appendValueInput('INSERT INTO')
              .appendField('INSERT INTO');
    
          this.appendStatementInput('VALUES')
              .appendField('VALUES');
          this.setColour("green");
            
            }
        };

        Blockly.Blocks['UPDATE'] = {
            init: function() {
              this.appendValueInput('UPDATE')
                  .appendField('UPDATE');
        
              this.appendStatementInput('SET')
                  .appendField('SET');
              
               this.appendStatementInput('WHERE')
                  .appendField('WHERE');
                  
              this.setColour("green");
                
                }
            };

            Blockly.Blocks['DELETE'] = {
                init: function() {
                  this.appendValueInput('DELETE FROM')
                      .appendField('DELETE FROM');
                  
                   this.appendStatementInput('WHERE')
                      .appendField('WHERE');
                      
                  this.setColour("green");
                    
                    }
                };


  Blockly.defineBlocksWithJsonArray([
    {
      "type": "OPERADORES",
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
            [">", "s1"],
            [">=", "s2"],
            ["<", "s3"],
            ["<=", "s4"],
            ["<>", "s5"],
            ["==", "s6"]
          ]
        }
        ,{
            "type": "input_value",
            "name": "VALUE"
        }
        
      ],   
     
      "previousStatement": null,
      "colour": "yellow",
      "tooltip": "",
      "helpUrl": ""
    }    
  ]);
  Blockly.defineBlocksWithJsonArray([
    {
      "type": "VALORESXD",
      "message0": " ( %1 )",
      "args0": [
        {
            "type": "input_value",
            "name": "VALUE"
        }
        
        
      ],   
     
      "previousStatement": null,
      "colour": "blue",
      "tooltip": "",
      "helpUrl": ""
    }    
  ]);

  Blockly.defineBlocksWithJsonArray([
    {
      "type": "VALORESXDx",
      "message0": "  %1 ",
      "args0": [
        {
            "type": "input_value",
            "name": "VALUE"
        }
        
        
      ],   
     
      "previousStatement": null,
      "colour": "blue",
      "tooltip": "",
      "helpUrl": ""
    }    
  ]);

  Blockly.defineBlocksWithJsonArray([
    {
      "type": "OPERADORES",
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
            [">", "s1"],
            [">=", "s2"],
            ["<", "s3"],
            ["<=", "s4"],
            ["<>", "s5"],
            ["==", "s6"],
            ["OR", "s7"],
            ["AND", "s8"],
            ["NOT", "s9"],
            ["XOR", "s10"],
          ]
        }
        ,{
            "type": "input_value",
            "name": "VALUE"
        }
        
      ],   
     
      "previousStatement": null,
      "colour": "yellow",
      "tooltip": "",
      "helpUrl": ""
    }    
  ]);

  Blockly.defineBlocksWithJsonArray([
    {
      "type": "OPERADORES2",
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
            [">", "s1"],
            [">=", "s2"],
            ["<", "s3"],
            ["<=", "s4"],
            ["<>", "s5"],
            ["==", "s6"],
            ["=", "s67"]
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
      "type": "OPERADORES3",
      "message0": " %1 %2  %3 , %4",
      "args0": [
        {
            "type": "input_value",
            "name": "VALUE"
        },
        {
          "type": "field_dropdown",
          "name": "VAR1",
          "options": [
            [">", "s1"],
            [">=", "s2"],
            ["<", "s3"],
            ["<=", "s4"],
            ["<>", "s5"],
            ["==", "s6"],
            ["=", "s7"]
          ]
        }
        ,{
            "type": "input_value",
            "name": "VALUE"
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
        "type": "textos",
        "message0": " %1",
        "args0": [
          {
              "type": "field_input",
              "name": "VALUE"
          }
        ],
        "output": null,
        "colour": "blue",
         "tooltip": "",
         "helpUrl": ""
    } 
]);

Blockly.defineBlocksWithJsonArray([
  {
      "type": "cadena1",
      "message0": "\" %1 \"",
      "args0": [
        {
            "type": "field_input",
            "name": "VALUE"
        }
      ],
      "output": null,
      "colour": "blue",
       "tooltip": "",
       "helpUrl": ""
  } 
]);

Blockly.defineBlocksWithJsonArray([
  {
      "type": "cadena2",
      "message0": " \" %1 \" , %2 " ,
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
      "colour": "blue",
       "tooltip": "",
       "helpUrl": ""
  } 
]);

Blockly.defineBlocksWithJsonArray([
    {
        "type": "textos2",
        "message0": " %1 %2" ,
        "args0": [
          {
              "type": "field_input",
              "name": "VALUE"
          },{

            "type": "field_input",
            "name": "VALUE"
          }
        ],
        "output": null,
        "colour": "blue",
         "tooltip": "",
         "helpUrl": ""
    } 
]);

Blockly.defineBlocksWithJsonArray([
    {
        "type": "textos3",
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
        "colour": "blue",
         "tooltip": "",
         "helpUrl": ""
    } 
]);

Blockly.defineBlocksWithJsonArray([
  {
      "type": "fecha",
      "message0": " %1 / %2 / %3" ,
      "args0": [
        {
            "type": "field_input",
            "name": "VALUE"
        },{

          "type": "field_input",
          "name": "VALUE"
        },{

          "type": "field_input",
          "name": "VALUE"
        }
      ],
      "output": null,
      "colour": "blue",
       "tooltip": "",
       "helpUrl": ""
  } 
]);

Blockly.defineBlocksWithJsonArray([
  {
      "type": "decimal",
      "message0": " %1 . %2 " ,
      "args0": [
        {
            "type": "field_input",
            "name": "VALUE"
        },{

          "type": "field_input",
          "name": "VALUE"
        }
      ],
      "output": null,
      "colour": "blue",
       "tooltip": "",
       "helpUrl": ""
  } 
]);
Blockly.defineBlocksWithJsonArray([
  {
      "type": "decimal2",
      "message0": " %1 . %2  , %3" ,
      "args0": [
        {
            "type": "field_input",
            "name": "VALUE"
        },{

          "type": "field_input",
          "name": "VALUE"
        },{

          "type": "input_value",
          "name": "VALUE"
        }
      ],
      "output": null,
      "colour": "blue",
       "tooltip": "",
       "helpUrl": ""
  } 
]);


Blockly.defineBlocksWithJsonArray([
  {
      "type": "fecha2",
      "message0": " %1 / %2 / %3 , %4" ,
      "args0": [
        {
            "type": "field_input",
            "name": "VALUE"
        },{

          "type": "field_input",
          "name": "VALUE"
        },{

          "type": "field_input",
          "name": "VALUE"
        },{

          "type": "input_value",
          "name": "VALUE"
        }
      ],
      "output": null,
      "colour": "blue",
       "tooltip": "",
       "helpUrl": ""
  } 
]);

Blockly.defineBlocksWithJsonArray([
    {
        "type": "atributo1",
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
        "colour": "red",
         "tooltip": "",
         "helpUrl": ""
    } 
]);


Blockly.defineBlocksWithJsonArray([
  {
      "type": "atributo1x",
      "message0": " %1 ( %2 )" ,
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
      "colour": "red",
       "tooltip": "",
       "helpUrl": ""
  } 
]);

Blockly.defineBlocksWithJsonArray([
    {
        "type": "atributo2",
        "message0": " %1",
        "args0": [
          {
              "type": "field_input",
              "name": "VALUE"
          }
        ],
        "output": null,
        "colour": "red",
         "tooltip": "",
         "helpUrl": ""
    } 
]);

Blockly.defineBlocksWithJsonArray([
    {
        "type": "atributo3",
        "message0": " %1 %2" ,
        "args0": [
          {
              "type": "field_input",
              "name": "VALUE"
          },{

            "type": "field_input",
            "name": "VALUE"
          }
        ],
        "output": null,
        "colour": "red",
         "tooltip": "",
         "helpUrl": ""
    } 
]);

Blockly.defineBlocksWithJsonArray([
  {
      "type": "atributo4",
      "message0": " %1  %2" ,
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
      "colour": "red",
       "tooltip": "",
       "helpUrl": ""
  } 
]);

Blockly.defineBlocksWithJsonArray([
  {
      "type": "atributo5",
      "message0": "FROM %1  " ,
      "args0": [
        {
            "type": "field_input",
            "name": "VALUE"
        }
      ],
      "output": null,
      "colour": "red",
       "tooltip": "",
       "helpUrl": ""
  } 
]);

Blockly.defineBlocksWithJsonArray([
  {
    "type": "TRUEFALSE",
    "message0": " %1 ",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "VAR",
        "options": [
            ["true", "C1"],
            ["false", "C2"]
        ]
      }
    ],   
    "output": null,
    "colour": "blue",
    "tooltip": "",
    "helpUrl": ""
  }    
]);

Blockly.defineBlocksWithJsonArray([
  {
    "type": "TRUEFALSE2",
    "message0": " %1 , %2",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "VAR",
        "options": [
            ["true", "C1"],
            ["false", "C2"]
        ]
      },{

        "type": "input_value",
        "name": "VALUE"
      }
    ],   
    "output": null,
    "colour": "blue",
    "tooltip": "",
    "helpUrl": ""
  }    
]);