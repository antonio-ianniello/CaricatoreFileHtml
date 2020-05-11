$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/prova.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author:IANNIELLO ANTONIO"
    }
  ],
  "line": 3,
  "name": "HomeWork 2 Testing",
  "description": "Voglio usare questo template per testare il codice inerente all\u0027 homework 2",
  "id": "homework-2-testing",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@HW2"
    }
  ]
});
formatter.scenario({
  "line": 7,
  "name": "HW2 prova del comando aiuto",
  "description": "",
  "id": "homework-2-testing;hw2-prova-del-comando-aiuto",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@Hw2"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "Ho iniziato la partita",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "ho digitato \"aiuto\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "il programma ha stampato\"vai,aiuto,fine,prendi,posa,guarda\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "ho digitato \"fine\"",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "la partita e finita",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "la riga \"1\" ha stampato \"vai\"",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "la riga \"1\" ha stampato \"aiuto\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "la riga \"1\" ha stampato \"prendi\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "la riga \"1\" ha stampato \"posa\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "la riga \"1\" ha stampato \"guarda\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "la riga \"1\" ha stampato \"fine\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "il programma ha stampato \"Grazie di aver giocato!\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.ho_iniziato_la_partita()"
});
formatter.result({
  "duration": 122117200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "aiuto",
      "offset": 13
    }
  ],
  "location": "StepDefinition.ho_digitato(String)"
});
formatter.result({
  "duration": 1302200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "vai,aiuto,fine,prendi,posa,guarda",
      "offset": 25
    }
  ],
  "location": "StepDefinition.il_programma_ha_stampato(String)"
});
formatter.result({
  "duration": 29300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "fine",
      "offset": 13
    }
  ],
  "location": "StepDefinition.ho_digitato(String)"
});
formatter.result({
  "duration": 25100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.la_partita_e_finita()"
});
formatter.result({
  "duration": 2055700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    },
    {
      "val": "vai",
      "offset": 25
    }
  ],
  "location": "StepDefinition.la_riga_ha_stampato(int,String)"
});
formatter.result({
  "duration": 1473900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    },
    {
      "val": "aiuto",
      "offset": 25
    }
  ],
  "location": "StepDefinition.la_riga_ha_stampato(int,String)"
});
formatter.result({
  "duration": 72800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    },
    {
      "val": "prendi",
      "offset": 25
    }
  ],
  "location": "StepDefinition.la_riga_ha_stampato(int,String)"
});
formatter.result({
  "duration": 57100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    },
    {
      "val": "posa",
      "offset": 25
    }
  ],
  "location": "StepDefinition.la_riga_ha_stampato(int,String)"
});
formatter.result({
  "duration": 75700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    },
    {
      "val": "guarda",
      "offset": 25
    }
  ],
  "location": "StepDefinition.la_riga_ha_stampato(int,String)"
});
formatter.result({
  "duration": 53100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    },
    {
      "val": "fine",
      "offset": 25
    }
  ],
  "location": "StepDefinition.la_riga_ha_stampato(int,String)"
});
formatter.result({
  "duration": 54700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Grazie di aver giocato!",
      "offset": 26
    }
  ],
  "location": "StepDefinition.il_programma_ha_stampato1(String)"
});
formatter.result({
  "duration": 127200,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "HW2 prova del comando fine",
  "description": "",
  "id": "homework-2-testing;hw2-prova-del-comando-fine",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 21,
      "name": "@Hw2"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "Ho iniziato la partita",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "ho digitato \"fine\"",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "il programma ha stampato\"Grazie di aver giocato!\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "la partita e finita",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "il programma ha stampato \"Grazie di aver giocato!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.ho_iniziato_la_partita()"
});
formatter.result({
  "duration": 70200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "fine",
      "offset": 13
    }
  ],
  "location": "StepDefinition.ho_digitato(String)"
});
formatter.result({
  "duration": 33900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Grazie di aver giocato!",
      "offset": 25
    }
  ],
  "location": "StepDefinition.il_programma_ha_stampato(String)"
});
formatter.result({
  "duration": 51500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.la_partita_e_finita()"
});
formatter.result({
  "duration": 143100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Grazie di aver giocato!",
      "offset": 26
    }
  ],
  "location": "StepDefinition.il_programma_ha_stampato1(String)"
});
formatter.result({
  "duration": 111900,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Homework 2 caso digita vai est",
  "description": "",
  "id": "homework-2-testing;homework-2-caso-digita-vai-est",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 29,
      "name": "@Hw2"
    }
  ]
});
formatter.step({
  "line": 31,
  "name": "Ho iniziato la partita",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "ho digitato \"vai est\"",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "il programma ha stampato\"Aula N11\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "ho digitato \"fine\"",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "la partita e finita",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "la riga \"1\" ha stampato \"N11\"",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "il programma ha stampato \"Grazie di aver giocato!\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.ho_iniziato_la_partita()"
});
formatter.result({
  "duration": 25500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "vai est",
      "offset": 13
    }
  ],
  "location": "StepDefinition.ho_digitato(String)"
});
formatter.result({
  "duration": 36500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Aula N11",
      "offset": 25
    }
  ],
  "location": "StepDefinition.il_programma_ha_stampato(String)"
});
formatter.result({
  "duration": 27300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "fine",
      "offset": 13
    }
  ],
  "location": "StepDefinition.ho_digitato(String)"
});
formatter.result({
  "duration": 25500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.la_partita_e_finita()"
});
formatter.result({
  "duration": 380200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    },
    {
      "val": "N11",
      "offset": 25
    }
  ],
  "location": "StepDefinition.la_riga_ha_stampato(int,String)"
});
formatter.result({
  "duration": 67700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Grazie di aver giocato!",
      "offset": 26
    }
  ],
  "location": "StepDefinition.il_programma_ha_stampato1(String)"
});
formatter.result({
  "duration": 99700,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "Homework 2 caso digita vai ovest",
  "description": "",
  "id": "homework-2-testing;homework-2-caso-digita-vai-ovest",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 39,
      "name": "@Hw2"
    }
  ]
});
formatter.step({
  "line": 41,
  "name": "Ho iniziato la partita",
  "keyword": "Given "
});
formatter.step({
  "line": 42,
  "name": "ho digitato \"vai ovest\"",
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "il programma ha stampato\"Sei in Laboratorio Campus\"",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "ho digitato \"fine\"",
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "la partita e finita",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "la riga \"1\" ha stampato \"Laboratorio Campus\"",
  "keyword": "Then "
});
formatter.step({
  "line": 47,
  "name": "il programma ha stampato \"Grazie di aver giocato!\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.ho_iniziato_la_partita()"
});
formatter.result({
  "duration": 34100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "vai ovest",
      "offset": 13
    }
  ],
  "location": "StepDefinition.ho_digitato(String)"
});
formatter.result({
  "duration": 47900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sei in Laboratorio Campus",
      "offset": 25
    }
  ],
  "location": "StepDefinition.il_programma_ha_stampato(String)"
});
formatter.result({
  "duration": 27400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "fine",
      "offset": 13
    }
  ],
  "location": "StepDefinition.ho_digitato(String)"
});
formatter.result({
  "duration": 24900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.la_partita_e_finita()"
});
formatter.result({
  "duration": 283400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    },
    {
      "val": "Laboratorio Campus",
      "offset": 25
    }
  ],
  "location": "StepDefinition.la_riga_ha_stampato(int,String)"
});
formatter.result({
  "duration": 62400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Grazie di aver giocato!",
      "offset": 26
    }
  ],
  "location": "StepDefinition.il_programma_ha_stampato1(String)"
});
formatter.result({
  "duration": 172700,
  "status": "passed"
});
formatter.scenario({
  "line": 50,
  "name": "Homework 2 caso digita vai nord e vittoria",
  "description": "",
  "id": "homework-2-testing;homework-2-caso-digita-vai-nord-e-vittoria",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 49,
      "name": "@Hw2"
    }
  ]
});
formatter.step({
  "line": 51,
  "name": "Ho iniziato la partita",
  "keyword": "Given "
});
formatter.step({
  "line": 52,
  "name": "ho digitato \"vai nord\"",
  "keyword": "When "
});
formatter.step({
  "line": 53,
  "name": "il programma ha stampato\"Sei in Biblioteca\"",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "ho digitato \"fine\"",
  "keyword": "When "
});
formatter.step({
  "line": 55,
  "name": "la partita e finita",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "la riga \"1\" ha stampato \"Biblioteca\"",
  "keyword": "Then "
});
formatter.step({
  "line": 57,
  "name": "il programma ha stampato \"Hai vinto\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.ho_iniziato_la_partita()"
});
formatter.result({
  "duration": 38800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "vai nord",
      "offset": 13
    }
  ],
  "location": "StepDefinition.ho_digitato(String)"
});
formatter.result({
  "duration": 34500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sei in Biblioteca",
      "offset": 25
    }
  ],
  "location": "StepDefinition.il_programma_ha_stampato(String)"
});
formatter.result({
  "duration": 32100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "fine",
      "offset": 13
    }
  ],
  "location": "StepDefinition.ho_digitato(String)"
});
formatter.result({
  "duration": 33200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.la_partita_e_finita()"
});
formatter.result({
  "duration": 161200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    },
    {
      "val": "Biblioteca",
      "offset": 25
    }
  ],
  "location": "StepDefinition.la_riga_ha_stampato(int,String)"
});
formatter.result({
  "duration": 99400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hai vinto",
      "offset": 26
    }
  ],
  "location": "StepDefinition.il_programma_ha_stampato1(String)"
});
formatter.result({
  "duration": 98700,
  "status": "passed"
});
formatter.scenario({
  "line": 60,
  "name": "Homework 2 caso digita vai ovest 2 volte",
  "description": "",
  "id": "homework-2-testing;homework-2-caso-digita-vai-ovest-2-volte",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 59,
      "name": "@Hw2"
    }
  ]
});
formatter.step({
  "line": 61,
  "name": "Ho iniziato la partita",
  "keyword": "Given "
});
formatter.step({
  "line": 62,
  "name": "ho digitato \"vai ovest\"",
  "keyword": "When "
});
formatter.step({
  "line": 63,
  "name": "il programma ha stampato\"Sei in Laboratorio Campus\"",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "ho digitato \"vai ovest\"",
  "keyword": "When "
});
formatter.step({
  "line": 65,
  "name": "il programma ha stampato\"Sei in Aula N11\"",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "ho digitato \"fine\"",
  "keyword": "When "
});
formatter.step({
  "line": 67,
  "name": "la partita e finita",
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "la riga \"1\" ha stampato \"Laboratorio Campus\"",
  "keyword": "Then "
});
formatter.step({
  "line": 69,
  "name": "la riga \"2\" ha stampato \"N11\"",
  "keyword": "And "
});
formatter.step({
  "line": 70,
  "name": "il programma ha stampato \"Grazie di aver giocato!\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.ho_iniziato_la_partita()"
});
formatter.result({
  "duration": 30800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "vai ovest",
      "offset": 13
    }
  ],
  "location": "StepDefinition.ho_digitato(String)"
});
formatter.result({
  "duration": 94500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sei in Laboratorio Campus",
      "offset": 25
    }
  ],
  "location": "StepDefinition.il_programma_ha_stampato(String)"
});
formatter.result({
  "duration": 40900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "vai ovest",
      "offset": 13
    }
  ],
  "location": "StepDefinition.ho_digitato(String)"
});
formatter.result({
  "duration": 37100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sei in Aula N11",
      "offset": 25
    }
  ],
  "location": "StepDefinition.il_programma_ha_stampato(String)"
});
formatter.result({
  "duration": 33500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "fine",
      "offset": 13
    }
  ],
  "location": "StepDefinition.ho_digitato(String)"
});
formatter.result({
  "duration": 26000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.la_partita_e_finita()"
});
formatter.result({
  "duration": 261000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    },
    {
      "val": "Laboratorio Campus",
      "offset": 25
    }
  ],
  "location": "StepDefinition.la_riga_ha_stampato(int,String)"
});
formatter.result({
  "duration": 65700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    },
    {
      "val": "N11",
      "offset": 25
    }
  ],
  "location": "StepDefinition.la_riga_ha_stampato(int,String)"
});
formatter.result({
  "duration": 49500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Grazie di aver giocato!",
      "offset": 26
    }
  ],
  "location": "StepDefinition.il_programma_ha_stampato1(String)"
});
formatter.result({
  "duration": 94300,
  "status": "passed"
});
formatter.scenario({
  "line": 73,
  "name": "Homework 2 caso stanza bloccata",
  "description": "",
  "id": "homework-2-testing;homework-2-caso-stanza-bloccata",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 72,
      "name": "@Hw2"
    }
  ]
});
formatter.step({
  "line": 74,
  "name": "Ho iniziato la partita",
  "keyword": "Given "
});
formatter.step({
  "line": 75,
  "name": "ho digitato \"vai est\"",
  "keyword": "When "
});
formatter.step({
  "line": 76,
  "name": "il programma ha stampato\"Sei in Aula N11\"",
  "keyword": "And "
});
formatter.step({
  "line": 77,
  "name": "ho digitato \"vai sud\"",
  "keyword": "When "
});
formatter.step({
  "line": 78,
  "name": "il programma ha stampato\"Sei in Bloccata\"",
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "ho digitato \"vai nord\"",
  "keyword": "When "
});
formatter.step({
  "line": 80,
  "name": "il programma ha stampato\"Sei in Bloccata\"",
  "keyword": "And "
});
formatter.step({
  "line": 81,
  "name": "ho digitato \"fine\"",
  "keyword": "When "
});
formatter.step({
  "line": 82,
  "name": "la partita e finita",
  "keyword": "And "
});
formatter.step({
  "line": 83,
  "name": "la riga \"1\" ha stampato \"N11\"",
  "keyword": "Then "
});
formatter.step({
  "line": 84,
  "name": "la riga \"2\" ha stampato \"Bloccata\"",
  "keyword": "And "
});
formatter.step({
  "line": 85,
  "name": "la riga \"3\" ha stampato \"Bloccata\"",
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "il programma ha stampato \"Grazie di aver giocato!\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.ho_iniziato_la_partita()"
});
formatter.result({
  "duration": 24200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "vai est",
      "offset": 13
    }
  ],
  "location": "StepDefinition.ho_digitato(String)"
});
formatter.result({
  "duration": 38300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sei in Aula N11",
      "offset": 25
    }
  ],
  "location": "StepDefinition.il_programma_ha_stampato(String)"
});
formatter.result({
  "duration": 23700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "vai sud",
      "offset": 13
    }
  ],
  "location": "StepDefinition.ho_digitato(String)"
});
formatter.result({
  "duration": 27400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sei in Bloccata",
      "offset": 25
    }
  ],
  "location": "StepDefinition.il_programma_ha_stampato(String)"
});
formatter.result({
  "duration": 23800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "vai nord",
      "offset": 13
    }
  ],
  "location": "StepDefinition.ho_digitato(String)"
});
formatter.result({
  "duration": 25200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sei in Bloccata",
      "offset": 25
    }
  ],
  "location": "StepDefinition.il_programma_ha_stampato(String)"
});
formatter.result({
  "duration": 24200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "fine",
      "offset": 13
    }
  ],
  "location": "StepDefinition.ho_digitato(String)"
});
formatter.result({
  "duration": 266500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.la_partita_e_finita()"
});
formatter.result({
  "duration": 310200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    },
    {
      "val": "N11",
      "offset": 25
    }
  ],
  "location": "StepDefinition.la_riga_ha_stampato(int,String)"
});
formatter.result({
  "duration": 90700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    },
    {
      "val": "Bloccata",
      "offset": 25
    }
  ],
  "location": "StepDefinition.la_riga_ha_stampato(int,String)"
});
formatter.result({
  "duration": 80000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 9
    },
    {
      "val": "Bloccata",
      "offset": 25
    }
  ],
  "location": "StepDefinition.la_riga_ha_stampato(int,String)"
});
formatter.result({
  "duration": 71200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Grazie di aver giocato!",
      "offset": 26
    }
  ],
  "location": "StepDefinition.il_programma_ha_stampato1(String)"
});
formatter.result({
  "duration": 138400,
  "status": "passed"
});
formatter.scenario({
  "line": 89,
  "name": "Homework 2 caso stanza bloccata con chiave",
  "description": "",
  "id": "homework-2-testing;homework-2-caso-stanza-bloccata-con-chiave",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 88,
      "name": "@Hw2"
    }
  ]
});
formatter.step({
  "line": 90,
  "name": "Ho iniziato la partita",
  "keyword": "Given "
});
formatter.step({
  "line": 91,
  "name": "ho digitato \"prendi chiave\"",
  "keyword": "When "
});
formatter.step({
  "line": 92,
  "name": "il programma ha stampato\"oggetto messo nella borsa correttamente!\"",
  "keyword": "And "
});
formatter.step({
  "line": 93,
  "name": "ho digitato \"vai est\"",
  "keyword": "When "
});
formatter.step({
  "line": 94,
  "name": "il programma ha stampato\"Sei in Aula N11\"",
  "keyword": "And "
});
formatter.step({
  "line": 95,
  "name": "ho digitato \"vai sud\"",
  "keyword": "When "
});
formatter.step({
  "line": 96,
  "name": "il programma ha stampato\"Sei in Bloccata\"",
  "keyword": "And "
});
formatter.step({
  "line": 97,
  "name": "ho digitato \"posa chiave\"",
  "keyword": "When "
});
formatter.step({
  "line": 98,
  "name": "il programma ha stampato\"L\u0027 oggetto:chiave � stato posato correttamente\"",
  "keyword": "And "
});
formatter.step({
  "line": 99,
  "name": "ho digitato \"vai nord\"",
  "keyword": "When "
});
formatter.step({
  "line": 100,
  "name": "il programma ha stampato\"Sei in Aula N11\"",
  "keyword": "And "
});
formatter.step({
  "line": 101,
  "name": "ho digitato \"fine\"",
  "keyword": "When "
});
formatter.step({
  "line": 102,
  "name": "la partita e finita",
  "keyword": "And "
});
formatter.step({
  "line": 103,
  "name": "la riga \"1\" ha stampato \"correttamente\"",
  "keyword": "Then "
});
formatter.step({
  "line": 104,
  "name": "la riga \"2\" ha stampato \"N11\"",
  "keyword": "And "
});
formatter.step({
  "line": 105,
  "name": "la riga \"3\" ha stampato \"Bloccata\"",
  "keyword": "And "
});
formatter.step({
  "line": 106,
  "name": "la riga \"4\" ha stampato \"chiave\"",
  "keyword": "And "
});
formatter.step({
  "line": 107,
  "name": "la riga \"4\" ha stampato \"posato correttamente\"",
  "keyword": "And "
});
formatter.step({
  "line": 108,
  "name": "la riga \"5\" ha stampato \"N11\"",
  "keyword": "And "
});
formatter.step({
  "line": 109,
  "name": "il programma ha stampato \"Grazie di aver giocato!\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.ho_iniziato_la_partita()"
});
formatter.result({
  "duration": 33500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "prendi chiave",
      "offset": 13
    }
  ],
  "location": "StepDefinition.ho_digitato(String)"
});
formatter.result({
  "duration": 41900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "oggetto messo nella borsa correttamente!",
      "offset": 25
    }
  ],
  "location": "StepDefinition.il_programma_ha_stampato(String)"
});
formatter.result({
  "duration": 28700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "vai est",
      "offset": 13
    }
  ],
  "location": "StepDefinition.ho_digitato(String)"
});
formatter.result({
  "duration": 29300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sei in Aula N11",
      "offset": 25
    }
  ],
  "location": "StepDefinition.il_programma_ha_stampato(String)"
});
formatter.result({
  "duration": 23900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "vai sud",
      "offset": 13
    }
  ],
  "location": "StepDefinition.ho_digitato(String)"
});
formatter.result({
  "duration": 23600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sei in Bloccata",
      "offset": 25
    }
  ],
  "location": "StepDefinition.il_programma_ha_stampato(String)"
});
formatter.result({
  "duration": 22800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "posa chiave",
      "offset": 13
    }
  ],
  "location": "StepDefinition.ho_digitato(String)"
});
formatter.result({
  "duration": 29100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "L\u0027 oggetto:chiave � stato posato correttamente",
      "offset": 25
    }
  ],
  "location": "StepDefinition.il_programma_ha_stampato(String)"
});
formatter.result({
  "duration": 23500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "vai nord",
      "offset": 13
    }
  ],
  "location": "StepDefinition.ho_digitato(String)"
});
formatter.result({
  "duration": 23300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sei in Aula N11",
      "offset": 25
    }
  ],
  "location": "StepDefinition.il_programma_ha_stampato(String)"
});
formatter.result({
  "duration": 24500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "fine",
      "offset": 13
    }
  ],
  "location": "StepDefinition.ho_digitato(String)"
});
formatter.result({
  "duration": 26900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.la_partita_e_finita()"
});
formatter.result({
  "duration": 519500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    },
    {
      "val": "correttamente",
      "offset": 25
    }
  ],
  "location": "StepDefinition.la_riga_ha_stampato(int,String)"
});
formatter.result({
  "duration": 62700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    },
    {
      "val": "N11",
      "offset": 25
    }
  ],
  "location": "StepDefinition.la_riga_ha_stampato(int,String)"
});
formatter.result({
  "duration": 298300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 9
    },
    {
      "val": "Bloccata",
      "offset": 25
    }
  ],
  "location": "StepDefinition.la_riga_ha_stampato(int,String)"
});
formatter.result({
  "duration": 58100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 9
    },
    {
      "val": "chiave",
      "offset": 25
    }
  ],
  "location": "StepDefinition.la_riga_ha_stampato(int,String)"
});
formatter.result({
  "duration": 72800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 9
    },
    {
      "val": "posato correttamente",
      "offset": 25
    }
  ],
  "location": "StepDefinition.la_riga_ha_stampato(int,String)"
});
formatter.result({
  "duration": 71100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 9
    },
    {
      "val": "N11",
      "offset": 25
    }
  ],
  "location": "StepDefinition.la_riga_ha_stampato(int,String)"
});
formatter.result({
  "duration": 69600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Grazie di aver giocato!",
      "offset": 26
    }
  ],
  "location": "StepDefinition.il_programma_ha_stampato1(String)"
});
formatter.result({
  "duration": 155400,
  "status": "passed"
});
formatter.scenario({
  "line": 112,
  "name": "Homework 2 caso stanza buia",
  "description": "",
  "id": "homework-2-testing;homework-2-caso-stanza-buia",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 111,
      "name": "@Hw2"
    }
  ]
});
formatter.step({
  "line": 113,
  "name": "Ho iniziato la partita",
  "keyword": "Given "
});
formatter.step({
  "line": 114,
  "name": "ho digitato \"vai est\"",
  "keyword": "When "
});
formatter.step({
  "line": 115,
  "name": "il programma ha stampato\"Sei in N11\"",
  "keyword": "And "
});
formatter.step({
  "line": 116,
  "name": "ho digitato \"vai nord\"",
  "keyword": "When "
});
formatter.step({
  "line": 117,
  "name": "il programma ha stampato\"Sei in Buia\"",
  "keyword": "And "
});
formatter.step({
  "line": 118,
  "name": "ho digitato \"guarda\"",
  "keyword": "When "
});
formatter.step({
  "line": 119,
  "name": "il programma ha stampato\"qui c\u0027� un buio pesto!\"",
  "keyword": "And "
});
formatter.step({
  "line": 120,
  "name": "ho digitato \"fine\"",
  "keyword": "When "
});
formatter.step({
  "line": 121,
  "name": "la partita e finita",
  "keyword": "And "
});
formatter.step({
  "line": 122,
  "name": "la riga \"1\" ha stampato \"N11\"",
  "keyword": "Then "
});
formatter.step({
  "line": 123,
  "name": "la riga \"2\" ha stampato \"Buia\"",
  "keyword": "And "
});
formatter.step({
  "line": 124,
  "name": "la riga \"3\" ha stampato \"buio\"",
  "keyword": "And "
});
formatter.step({
  "line": 125,
  "name": "il programma ha stampato \"Grazie di aver giocato!\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.ho_iniziato_la_partita()"
});
formatter.result({
  "duration": 34200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "vai est",
      "offset": 13
    }
  ],
  "location": "StepDefinition.ho_digitato(String)"
});
formatter.result({
  "duration": 39000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sei in N11",
      "offset": 25
    }
  ],
  "location": "StepDefinition.il_programma_ha_stampato(String)"
});
formatter.result({
  "duration": 299200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "vai nord",
      "offset": 13
    }
  ],
  "location": "StepDefinition.ho_digitato(String)"
});
formatter.result({
  "duration": 40600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sei in Buia",
      "offset": 25
    }
  ],
  "location": "StepDefinition.il_programma_ha_stampato(String)"
});
formatter.result({
  "duration": 35100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "guarda",
      "offset": 13
    }
  ],
  "location": "StepDefinition.ho_digitato(String)"
});
formatter.result({
  "duration": 36000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qui c\u0027� un buio pesto!",
      "offset": 25
    }
  ],
  "location": "StepDefinition.il_programma_ha_stampato(String)"
});
formatter.result({
  "duration": 29200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "fine",
      "offset": 13
    }
  ],
  "location": "StepDefinition.ho_digitato(String)"
});
formatter.result({
  "duration": 25200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.la_partita_e_finita()"
});
formatter.result({
  "duration": 367600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    },
    {
      "val": "N11",
      "offset": 25
    }
  ],
  "location": "StepDefinition.la_riga_ha_stampato(int,String)"
});
formatter.result({
  "duration": 59300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    },
    {
      "val": "Buia",
      "offset": 25
    }
  ],
  "location": "StepDefinition.la_riga_ha_stampato(int,String)"
});
formatter.result({
  "duration": 52000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 9
    },
    {
      "val": "buio",
      "offset": 25
    }
  ],
  "location": "StepDefinition.la_riga_ha_stampato(int,String)"
});
formatter.result({
  "duration": 48600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Grazie di aver giocato!",
      "offset": 26
    }
  ],
  "location": "StepDefinition.il_programma_ha_stampato1(String)"
});
formatter.result({
  "duration": 209700,
  "status": "passed"
});
});