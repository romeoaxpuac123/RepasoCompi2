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