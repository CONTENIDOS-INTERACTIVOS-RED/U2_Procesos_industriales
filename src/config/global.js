export default {
  global: {
    numeroUnidad: '2',
    tituloUnidad: 'Diseño y análisis de procesos',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Principios de diseño de procesos industriales',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo:
              'Importancia de los principios de diseño, en el contexto del diseño y el análisis de los procesos',
            hash: 't_2_1',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Métodos de análisis y mejora de procesos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Diagrama SIPOC',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Análisis de flujo de valor (VSM)',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Diagramas de flujo',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Diagrama de Ishikawa (espina de pescado)',
            hash: 't_3_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.5',
            titulo: 'Análisis de tiempos y movimientos',
            hash: 't_3_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.6',
            titulo: 'Ciclo PHVA (Planear-Hacer-Verificar-Actuar)',
            hash: 't_3_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.7',
            titulo:
              '¿En qué momento se aplican los métodos de análisis y mejora de procesos?',
            hash: 't_3_7',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo:
          'Herramientas tecnológicas para el modelado y simulación de procesos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo:
              'Clasificación de herramientas tecnológicas de modelado y simulación de procesos',
            hash: 't_4_1',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'García Moreno, E. (2020). <i>Automatización de procesos industriales: robótica y automática</i>. Editorial de la Universidad Politécnica de Valencia. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/129686',
    },
    {
      referencia:
        'Ramírez León, C. (2022). <i>La práctica empresarial en el proceso de formación del Diseñador Industrial: perspectivas</i>. Editorial UPTC. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/231878',
    },
    {
      referencia:
        'Pérez, E. & Gómez, E. (Dir.). (2019). <i>Evaluación de métodos de diseño de distribución en planta en el área de preparación y armado de una empresa manufacturera de neumáticos</i>. D - Universidad de Carabobo. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/119367',
    },
    {
      referencia:
        'Urdaneta, J. & Gómez, E. (Dir.). (2019). <i>Plan de mejoras en el sistema de producción del Departamento de Servicios de una empresa de reparación de maquinarias pesadas</i>. D - Universidad de Carabobo. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/120055',
    },
    {
      referencia:
        'Sainz, J. S. & Sainz, L. S. (2020).<i> Introducción a la ciencia cognitiva: procesos y simulación</i>. McGraw-Hill. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/125468',
    },
  ],
  glosario: [
    {
      termino: 'Análisis de flujo de valor (VSM)',
      significado:
        'Herramienta que permite mapear las actividades de un proceso para identificar las que agregan o no, valor.',
    },
    {
      termino: 'AutoMOD',
      significado:
        '<i>Software</i> para simular sistemas de manufactura automatizados y logística interna compleja.',
    },
    {
      termino: '<i>Bizagi Modeler</i>',
      significado:
        'Herramienta basada en BPMN para modelar y documentar procesos de forma visual.',
    },
    {
      termino: 'Ciclo PHVA',
      significado:
        'Ciclo de mejora continua que incluye las fases Planear, Hacer, Verificar y Actuar.',
    },
    {
      termino: 'Cuello de botella',
      significado:
        'Punto del proceso donde la capacidad es limitada y genera retrasos en la cadena productiva.',
    },
    {
      termino: '<i>Digital Twin</i> (Gemelo Digital)',
      significado:
        'Representación virtual en tiempo real de un sistema físico para simular y predecir su comportamiento.',
    },
    {
      termino: 'Diagrama de flujo',
      significado:
        'Representación gráfica secuencial de las actividades que conforman un proceso.',
    },
    {
      termino: 'Diagrama de Ishikawa',
      significado:
        'Diagrama que ayuda a identificar causas raíz de un problema de calidad o eficiencia.',
    },
    {
      termino: 'Draw.io',
      significado:
        'Aplicación gratuita en línea para crear diagramas de flujo y mapas de procesos.',
    },
    {
      termino: 'Estandarización',
      significado:
        'Principio de diseño que busca definir procedimientos uniformes para asegurar calidad y eficiencia.',
    },
    {
      termino: 'FlexSim',
      significado:
        '<i>Software</i> 3D para simular procesos logísticos, industriales y cadenas de suministro.',
    },
    {
      termino: 'Lucidchart',
      significado:
        'Plataforma online colaborativa para crear diagramas de flujo, procesos y mapas visuales.',
    },
    {
      termino: 'Microsoft Visio',
      significado:
        'Aplicación de Microsoft para crear diagramas técnicos con plantillas industriales.',
    },
    {
      termino: 'Modelado de procesos',
      significado:
        'Actividad de representar gráficamente las secuencias y lógica de un proceso productivo.',
    },
    {
      termino: 'Simulación de procesos',
      significado:
        'Uso de <i>software</i> para experimentar con procesos en entornos virtuales y predecir su desempeño.',
    },
  ],
}
