//DATOS FIJOS USADOS PARA LA CONFIGURACIÓN Y FUNCIONAMIENTO DEL PLUGIN

//Colores base segun documento "Entregable 2.3.1"
export const coloresBase = {
  negro: 'RGB(0 0 0 )',
  blanco: 'RGB(255 255 255)',
  gris_1: 'RGB(212 212 212)',
  gris_2: 'RGB(186 186 186)',
  gris_3: 'RGB(140 140 140)',
  gris_4: 'RGB(80 80 80)',
  azul: 'RGB(115 140 192)',
  magenta: 'RGB(141 50 149)',
  amarillo: 'RGB(255 242 1)',
  naranja: 'RGB(253 169 57)',
  rojo: 'RGB(255 1 1)',
  verde: 'RGB(58 170 172)',
};

export const dataUnidadesAGC = [
  {
    agcMode: 'payload_Committed_AGCG01',
    nameSub: 'GEN 1',
    programedStatus: 'payload_Committed_AGCG01',
    setPointAGC: 100,
    suministroAGC: 101,
  },
  {
    agcMode: 'payload_Committed_AGCG02',
    nameSub: 'GEN 2',
    programedStatus: 'payload_Committed_AGCG02',
    setPointAGC: 100,
    suministroAGC: 101,
  },
  {
    agcMode: 'payload_Committed_AGCG03',
    nameSub: 'GEN 3',
    programedStatus: 'payload_Committed_AGCG03',
    setPointAGC: 100,
    suministroAGC: 102,
  },
  {
    agcMode: 'payload_Committed_AGCG04',
    nameSub: 'GEN 4',
    programedStatus: 'payload_Committed_AGCG04',
    setPointAGC: 100,
    suministroAGC: 100,
  },
  {
    agcMode: 'payload_Committed_AGCG05',
    nameSub: 'GEN 5',
    programedStatus: 'payload_Committed_AGCG05',
    setPointAGC: 100,
    suministroAGC: 103,
  },
  {
    agcMode: 'payload_Committed_AGCG07',
    nameSub: 'GEN 7',
    programedStatus: 'payload_Committed_AGCG07',
    setPointAGC: 100,
    suministroAGC: 105,
  },
  {
    agcMode: 'payload_Committed_AGCG08',
    nameSub: 'GEN 8',
    programedStatus: 'payload_Committed_AGCG08',
    setPointAGC: 100,
    suministroAGC: 110,
  },
  {
    agcMode: 'payload_Committed_AGCG010',
    nameSub: 'GEN 10',
    programedStatus: 'payload_Committed_AGCG010',
    setPointAGC: 100,
    suministroAGC: 101,
  },
];

export const dataUnidadesAGC_FERNC = [
  { indicadorRemoto: 1, nameSub: 'GEN 6', AGCMode: 1, setPointAGC: 100, suministroAGC: 104 },
  { indicadorRemoto: 0, nameSub: 'GEN 9', AGCMode: 0, setPointAGC: 100, suministroAGC: 105 },
];
