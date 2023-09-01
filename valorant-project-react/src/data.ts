export type AgentDataProp = {
  name: string;
  pais: string;
  classe: string;
  habilidades: string[];
  orbes: number;
};

const agentData = [
  {
    name: 'Astra',
    pais: 'Gana',
    classe: 'Controlador',
    habilidades: ['pulso nova', 'nebulosa', 'poço gravitacional', 'divisa cósmica'],
    orbes: 7,
  },
  {
    name: 'Breach',
    pais: 'Suécia',
    classe: 'Iniciador',
    habilidades: ['estopim', 'falha tectônica', 'pós-choque', 'onda trovejante'],
    orbes: 7,
  },
  {
    name: 'Brimstone',
    pais: 'Estados Unidos',
    classe: 'Controlador',
    habilidades: ['incendiário',
      'fumaça celeste', 'sinalizador estimulante', 'ataque orbital'],
    orbes: 7,
  },
  {
    name: 'Chamber',
    pais: 'França',
    classe: 'Sentinela',
    habilidades: ['caçador de cabeças',
      'rendezvous', 'marca registrada', 'tour de force'],
    orbes: 7,
  },
  {
    name: 'Cypher',
    pais: 'Marrocos',
    classe: 'Sentinela',
    habilidades: ['jaula cibernética',
      'câmera de vigilância', 'fio-armadilha', 'assalto neural'],
    orbes: 6,
  },
  {
    name: 'Fade',
    pais: 'Turquia',
    classe: 'Iniciadora',
    habilidades: ['clausura', 'assombrar', 'espreitador', 'véu da noite'],
    orbes: 7,
  },
  {
    name: 'Jett',
    pais: 'Coreia do Sul',
    classe: 'Duelista',
    habilidades: ['corrente ascendente',
      'brisa de impulso', 'erupção das brumas', 'tormenta de aço'],
    orbes: 7,
  },
  {
    name: 'Kay/o',
    pais: 'Undefined',
    classe: 'Iniciador',
    habilidades: ['granada/clarão', 'ponto/zero', 'frag/mento', 'anular/CMD'],
    orbes: 7,
  },
  {
    name: 'Killjoy',
    pais: 'Alemanha',
    classe: 'Sentinela',
    habilidades: ['robô de alarme', 'torreta', 'nanoenxame', 'confinamento'],
    orbes: 7,
  },
  {
    name: 'Neon',
    pais: 'Filipinas',
    classe: 'Duelista',
    habilidades: ['ricochete elétrico',
      'equipamento voltaico', 'via expressa', 'sobrecarga'],
    orbes: 7,
  },
  {
    name: 'Omen',
    pais: 'Undefined',
    classe: 'Controlador',
    habilidades: ['paranoia', 'manto sombrio', 'passos tenebrosos', 'salto das sombras'],
    orbes: 7,
  },
  {
    name: 'Phoenix',
    pais: 'Reino Unido',
    classe: 'Duelista',
    habilidades: ['bola curva', 'mãos quentes', 'labareda', 'renascimento'],
    orbes: 6,
  },
  {
    name: 'Raze',
    pais: 'Brasil',
    classe: 'Duelista',
    habilidades: ['cargas de explosivos',
      'cartucho de tinta', 'bumba', 'estraga-prazeres'],
    orbes: 7,
  },
  {
    name: 'Reyna',
    pais: 'México',
    classe: 'Duelista',
    habilidades: ['devorar', 'dispensar', 'olhar voraz', 'imperatriz'],
    orbes: 6,
  },
  {
    name: 'Sage',
    pais: 'China',
    classe: 'Sentinela',
    habilidades: ['orbe de lentidão',
      'orbe curativo', 'orbe de barreira', 'ressurreição'],
    orbes: 8,
  },
  {
    name: 'Skye',
    pais: 'Austrália',
    classe: 'Iniciador',
    habilidades: ['predador explosivo',
      'luz desbravadora', 'reflorescer', 'rastreadores'],
    orbes: 6,
  },
  {
    name: 'Sova',
    pais: 'Rússia',
    classe: 'Iniciador',
    habilidades: ['flecha de choque',
      'flecha rastreadora', 'drone coruja', 'fúria do caçador'],
    orbes: 8,
  },
  {
    name: 'Viper',
    pais: 'Estados Unidos',
    classe: 'Controlador',
    habilidades: ['nuvem venenosa',
      'cortina tóxica', 'veneno de cobra', 'poço peçonhento'],
    orbes: 7,
  },
  {
    name: 'Yoru',
    pais: 'Japão',
    classe: 'Duelista',
    habilidades: ['ponto cego',
      'passagem dimensional', 'distração', 'espionagem dimensional'],
    orbes: 6,
  },

];

export default agentData;
