<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. Métodos de análisis y mejora de procesos'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
    .bg-color-6.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto
          figure
            img.img-a.img-t(src='@/assets/curso/temas/24.png', alt='')      
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") Una vez que se ha comprendido cómo se diseñan los procesos industriales, el siguiente paso esencial es aprender a analizarlos y mejorarlos, de forma sistemática. En el entorno industrial actual, marcado por la eficiencia, la calidad y la capacidad de adaptación, es fundamental contar con herramientas que permitan detectar ineficiencias, identificar cuellos de botella y proponer mejoras concretas, basadas en datos.

    .row.mb-5 
      .col-lg-8.mb-3.mb-lg-0 
        p(data-aos="fade-down") Los métodos de análisis y la mejora de los procesos, permiten examinar en detalle cada componente del sistema productivo, desde las actividades que generan valor hasta aquellas que deben ser eliminadas o reconfiguradas. Estos enfoques ayudan a optimizar tiempos, recursos y costos, al tiempo que garantizan una alineación con los objetivos estratégicos de la organización.      
        .bg-color-5.p-4.mb-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img.img-a.img-t(src="@/assets/curso/temas/25.svg")
            .col-lg
              p.mb-0 En esta sección, se presentarán las metodologías más representativas y utilizadas en el sector real, que permiten al ingeniero industrial del siglo XXI, tomar decisiones informadas, estructurar soluciones prácticas y fomentar una cultura de mejora continua, en cualquier entorno operativo.
      .col-lg-4
        figure
          img.img-a.img-t(src="@/assets/curso/temas/26.png", data-aos="zoom-in")

    #t_3_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.1] Diagrama SIPOC

    p(data-aos="fade-down") Esta herramienta proporciona una vista general del proceso, desde sus proveedores (S), las entradas (I), el proceso central (P), las salidas (O) y los clientes (C). Su utilidad radica en delimitar claramente el alcance del proceso y alinear expectativas con las partes interesadas.

    .bg-full-width.bg-color-7.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img.img-a.img-t(src="@/assets/curso/temas/27.png")
          .col-lg
            h5 Cómo se aplica:
            ul.lista-ul--color.mb-0
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.color-1
                p.mb-0 Identificar el proceso general que se piensa analizar.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.color-1
                p.mb-0 Definir claramente los proveedores, entradas, actividades del proceso, salidas y clientes.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.color-1
                p.mb-0 Reunir a los actores claves para validar cada componente.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.color-1
                p.mb-0 Usar el SIPOC como base para documentación, capacitación o rediseño. Ejemplo paso a paso (empresa real). Empresa: Starbucks (proceso de atención al cliente en tienda):  

    .row.align-items-start.mb-5(data-aos="fade-left")
      .col-lg-8.mb-3.mb-lg-0
        AcordionA(tipo="b")
          .div(titulo="Proveedor (S)")
            p Proveedores de café, leche, insumos de empaque y materias primas. 
            
          .div(titulo="Entradas (I)")
            p Ingredientes, orden del cliente, sistema POS, personal capacitado. 

          .div(titulo="Proceso (P)")
            p Toma de pedido → Preparación → Entrega → Pago.

          .div(titulo="Salidas (O)")
            p Bebidas y alimentos preparados, recibo de compra, experiencia de servicio.

          .div(titulo="Clientes (C)")
            p Clientes que asisten a la tienda o hacen pedidos por app. Este SIPOC ayuda a Starbucks a estandarizar el proceso de atención, mejorar tiempos de respuesta y asegurar la calidad del servicio a través de la alineación de los eslabones clave de su operación. 

          .div(titulo="Ejemplo real")
            p En una empresa de logística como DHL, se usa SIPOC para alinear expectativas entre los centros de distribución (proveedores) y los clientes finales, asegurando visibilidad de principio a fin.
      .col-lg-4
        figure
          img.img-a.img-t(src="@/assets/curso/temas/28.png", alt="") 

    #t_3_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.2] Análisis de flujo de valor (VSM)

    p(data-aos="fade-down") Permite mapear y distinguir entre actividades que agregan valor y aquellas que no lo hacen. Es esencial para identificar desperdicios y rediseñar procesos con un enfoque Lean.

    .bg-color-8.p-4(data-aos="fade-down")
      .row.align-items-center
        .col-lg-auto
          img.img-a.img-t(src="@/assets/curso/temas/29.png")
        .col-lg
          h5 Cómo se aplica:
          ul.lista-ul--color.mb-0
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.color-1
              p.mb-0 Mapear todas las etapas del proceso productivo.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.color-1
              p.mb-0 Identificar cada actividad como de valor agregado o no.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.color-1
              p.mb-0 Medir tiempos de ciclo y espera.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.color-1
              p.mb-0 Identificar desperdicios y definir un estado futuro ideal.           
    .bg-color-1.p-4.mb-5(data-aos="fade-up")
      h5 Ejemplo real

      p.mb-0 En una empresa de transformación de hierro, se aplica el análisis de flujo de valor (VSM) para evaluar el proceso de corte y distribución de varilla.   

    p(data-aos="fade-down") Paso a paso:  

    .row.align-items-center.mb-5
      .col-lg-7.mb-4.mb-lg-0
        LineaTiempoD.color-primario.large(data-aos="fade-left")
          p(numero="1" titulo="Paso 1") Se mapea el proceso desde la recepción del hierro hasta su entrega a planta o cliente.
          p(numero="2" titulo="Paso 2") Se identifican las actividades que agregan valor: corte a medida, inspección final y carga.
          p(numero="3" titulo="Paso 3") Se identifican actividades que no agregan valor: doble verificación de órdenes en papel, esperas por disponibilidad de grúa y reubicación manual del material.
          p(numero="4" titulo="Paso 4") Se definen mejoras: automatizar el registro de pedidos, asignar prioridad en el uso de grúa, mediante sistema digital y rediseñar el layout de almacenamiento.
          p(numero="5" titulo="Resultado") Reducción del tiempo de entrega en 15 % y eliminación de movimientos innecesarios del operario.

      .col-lg-5
        figure
          img.img-a.img-t(src="@/assets/curso/temas/30.png", alt="", data-aos="zoom-in") 

    #t_3_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.3] Diagramas de flujo

    p(data-aos="fade-down") Representan de manera gráfica y secuencial las actividades de un proceso, permitiendo identificar redundancias, re-trabajos o rutas no optimizadas.

    .bg-full-width.bg-color-9.mb-5
      .px-4.px-md-5.py-4
        figure
          img.img-a.img-t(src="@/assets/curso/temas/31.png", alt="", data-aos="zoom-in") 

    .row.mb-5
      .col-lg-8.mb-3.mb-lg-0
        .bg-color-5.p-4(data-aos="fade-left")
          h5 Cómo se aplica:
          ul.lista-ul--color.mb-0
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.color-1
              p.mb-0 Definir el proceso o subproceso a representar.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.color-1
              p.mb-0 Dibujar cada paso del proceso de manera secuencial.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.color-1
              p.mb-0 Identificar decisiones, bucles o pasos innecesarios.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.color-1
              p.mb-0 Validar con los responsables del proceso.
        .bg-color-10.p-4.mb-3(data-aos="fade-left")                      
          .row.align-items-center
            .col-lg-auto
              img.img-a.img-t(src="@/assets/curso/temas/32.svg")
            .col-lg
              .p-3
                h5 Ejemplo real
                p.mb-0 En hospitales, los diagramas de flujo se usan para mapear el proceso de admisión de pacientes y optimizar el tiempo de espera.

      .col-lg-4
        figure
          img.img-a.img-t(src="@/assets/curso/temas/33.png", data-aos="zoom-in")  


    .row.align-items-start.mb-5(data-aos="fade-left")
      .col-lg-4.mb-3.mb-lg-0
        figure
          img.img-a.img-t(src="@/assets/curso/temas/34.png", alt="")     
      .col-lg-8
        AcordionA(tipo="b")
          .div(titulo="Paso 1")
            p El paciente llega y se registra en recepción.
            
          .div(titulo="Paso 2")
            p Se verifica su información y cobertura del seguro.

          .div(titulo="Paso 3")
            p Es dirigido a la sala de espera.
          
    .row.align-items-start.mb-5(data-aos="fade-left")
      .col-lg-8.mb-3.mb-lg-0
        AcordionA(tipo="b")
          .div(titulo="Paso 4")
            p Lo llama la enfermera para ingresar a consulta.
            
          .div(titulo="Paso 5")
            p El médico lo atiende, emite diagnóstico y prescribe tratamiento.

          .div(titulo="Paso 6")
            p El paciente se dirige a caja y finaliza el proceso con el pago. Este flujo puede representarse con símbolos estandarizados (inicio, actividad, decisión, fin) y permite identificar mejoras como reducción de pasos duplicados o tiempos de espera prolongados en la sala de admisión. 
            ol.mb-0
              li El proceso o subproceso a representar. 
              li Dibujar cada paso del proceso de manera secuencial. 
              li Identificar decisiones, bucles o pasos innecesarios. 
              li Validar con los responsables del proceso.            
          
      .col-lg-4
        figure
          img.img-a.img-t(src="@/assets/curso/temas/35.png", alt="")   


    #t_3_4.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.4] Diagrama de Ishikawa (espina de pescado)

    p(data-aos="fade-down") Utilizado para analizar las causas raíz de un problema relacionado con calidad, tiempos o costos. Agrupa las posibles causas en categorías como método, maquinaria, personal, materiales, entorno y medición.

    .bg-color-8.p-4(data-aos="fade-down")
      .row.align-items-center
        .col-lg-auto
          img.img-a.img-t(src="@/assets/curso/temas/36.png")
        .col-lg
          h5 Cómo se aplica:
          ul.lista-ul--color.mb-0
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.color-1
              p.mb-0 Definir el problema central (efecto).
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.color-1
              p.mb-0 Dibujar las categorías de causa general.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.color-1
              p.mb-0 Lluvia de ideas para identificar causas específicas.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.color-1
              p.mb-0 Validar y priorizar causas más probables.          
    .bg-color-1.p-4.mb-5(data-aos="fade-up")
      h5 Ejemplo real

      p.mb-0 Problema industrial. Contaminación cruzada en líneas de envasado en una planta farmacéutica.

    p(data-aos="fade-down") Paso a paso:  

    .row.align-items-center.mb-5
      .col-lg-7.mb-4.mb-lg-0
        LineaTiempoD.color-primario.large(data-aos="fade-left")
          div(numero="1" titulo="Paso 1") Definir el problema (efecto):
            ul.lista-ul--color.mb-0
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.color-1
                p.mb-0 Aparición de trazas de ingredientes de un producto en lotes de otro producto. 
          div(numero="2" titulo="Paso 2") Dibujar las categorías generales de causa:
            ul.lista-ul--color.mb-0
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.color-1
                p.mb-0 Método, maquinaria, personal, materiales, entorno, medición. 
          div(numero="3" titulo="Paso 3") Lluvia de ideas para causas específicas por categoría:
            ul.lista-ul--color.mb-0
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.color-1
                p.mb-0 #[b Método.] Procedimientos de limpieza inadecuados, falta de validación cruzada.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.color-1
                p.mb-0 #[b Maquinaria.] Líneas compartidas sin separación adecuada, fallas en válvulas.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.color-1
                p.mb-0 #[b Personal.] Falta de capacitación, rotación alta de operarios.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.color-1
                p.mb-0 #[b Materiales.] Envases reutilizados sin trazabilidad.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.color-1
                p.mb-0 #[b Entorno.] Flujo de aire contaminado, acceso sin control entre áreas.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.color-1
                p.mb-0 #[b Medición.] Falta de monitoreo continuo de residuos en líneas compartidas. 
          div(numero="4" titulo="Paso 4") Validar y priorizar causas:
            ul.lista-ul--color.mb-0
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.color-1
                p.mb-0 Se identificaron como principales causas, la deficiente separación entre lotes, limpieza inadecuada entre cambios de producto y errores humanos en la operación.           
          div(numero="5" titulo="Resultado esperado") La planta rediseña el protocolo de limpieza, implementa validaciones con trazadores químicos y capacita nuevamente al personal en Buenas Prácticas de Manufactura (BPM). Se logra una disminución del 90 % en los casos de contaminación cruzada registrados en auditorías internas.

      .col-lg-5
        figure
          img.img-a.img-t(src="@/assets/curso/temas/37.png", alt="", data-aos="zoom-in")

    #t_3_5.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.5] Análisis de tiempos y movimientos

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img.img-a.img-t(src="@/assets/curso/temas/38.png", data-aos="zoom-in")      
      .col-lg-8
        p(data-aos="fade-down") Técnica clásica pero vigente, que permite descomponer las tareas en movimientos elementales para eliminar pasos innecesarios y estandarizar operaciones.
        .bg-color-5.p-4(data-aos="fade-left")
          h5 Cómo se aplica:
          ul.lista-ul--color.mb-0
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.color-1
              p.mb-0 Observar directamente la tarea.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.color-1
              p.mb-0 Dividirla en movimientos individuales.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.color-1
              p.mb-0 Evaluar cada movimiento, según su utilidad.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.color-1
              p.mb-0 Rediseñar el método para eficiencia.
        .bg-color-10.p-4.mb-3(data-aos="fade-left")                      
          .row.align-items-center
            .col-lg-auto
              img.img-a.img-t(src="@/assets/curso/temas/41.svg")
            .col-lg
              .p-3
                h5 Ejemplo real
                p.mb-0 Actividad: observar una tarea operativa en la industria (empacado de cajas en línea de producción de alimentos).

    .row.align-items-start.mb-5(data-aos="fade-left")
      .col-lg-8.mb-3.mb-lg-0
        AcordionA(tipo="b")
          .div(titulo="Paso 1")
            p #[b Tarea observada.] Empacado manual de cajas con productos en una planta de alimentos procesados.
            
          .div(titulo="Paso 2")
            p #[b Observación directa.] Se identifica que el operario toma la caja vacía, la arma manualmente, la llena con paquetes de producto, la sella y la coloca en una tarima.

          .div(titulo="Paso 3")
            p #[b Descomposición en movimientos:]
            ol.ol-alfa.mb-0
              li Tomar caja y armarla (6 seg).
              li Llenar con productos (10 seg).
              li Cerrar y sellar manualmente (8 seg).
              li Trasladar y ubicar en tarima (12 seg).

      .col-lg-4
        figure
          img.img-a.img-t(src="@/assets/curso/temas/39.png", alt="") 

    .row.align-items-start.mb-5(data-aos="fade-left")
      .col-lg-4.mb-3.mb-lg-0
        figure
          img.img-a.img-t(src="@/assets/curso/temas/40.png", alt="")     
      .col-lg-8
        AcordionA(tipo="b")
          .div(titulo="Paso 4")
            p #[b Evaluación.] El movimiento de traslado y armado representa más del 50 % del tiempo total de la operación.
            
          .div(titulo="Paso 5")
            p #[b Propuesta de mejora.] Instalar una formadora automática de cajas al inicio del proceso, rediseñar el #[i layout] para reducir la distancia entre estaciones y usar una banda transportadora para la entrega en tarima.
          .div(titulo="Paso 6")
            p #[b Cronograma optimizado:]
            ol.ol-alfa.mb-0
              li Armar y trasladar cajas: reducido de 18 seg a 8 seg por caja.
              li Nuevo tiempo total por caja: 20 seg (reducción del 35 %).
          .div(titulo="Resultado")
            p Aumento en la capacidad de empacado por hora, reducción del esfuerzo físico del operario y mejor ergonomía del puesto de trabajo.    
            
    #t_3_6.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.6] Ciclo PHVA (Planear-Hacer-Verificar-Actuar)

    p(data-aos="fade-down") Base de la mejora continua, este ciclo iterativo permite planificar acciones de mejora, implementarlas, evaluar resultados y estandarizar si fueron efectivas.

    h5(data-aos="fade-down") Cómo se aplica:
    .bg-color-9
      .p-4
        figure
          img.img-a.img-t(src="@/assets/curso/temas/42.svg", alt="", data-aos="zoom-in") 
    .bg-color-10.p-4.mb-5(data-aos="fade-left")                      
      .row.align-items-center
        .col-lg-auto
          img.img-a.img-t(src="@/assets/curso/temas/43.svg")
        .col-lg
          .p-3
            h5 Ejemplo real
            p.mb-0 En una planta de embotellado de bebidas, se detecta que el cambio de formato (de botella de 350 ml a 600 ml) genera tiempos muertos prolongados, que afectan la eficiencia de producción.  

    .row.align-items-start.mb-5(data-aos="fade-left")
      .col-lg-8.mb-3.mb-lg-0
        AcordionA(tipo="b")
          .div(titulo="Paso 1")
            p Planear:
            ul.lista-ul--color.mb-0
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.color-1
                p.mb-0 Problema. Tiempos de paro prolongados durante el cambio de formato.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.color-1
                p.mb-0 Meta. Reducir en un 30 % el tiempo de cambio de formato.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.color-1
                p.mb-0 Plan. Estudiar el proceso actual, identificar causas y proponer acciones de mejora.              
            
          .div(titulo="Paso 2")
            p Hacer:
            ul.lista-ul--color.mb-0
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.color-1
                p.mb-0 Se graba el proceso actual y se realiza un análisis de tiempos y movimientos.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.color-1
                p.mb-0 Se capacita al equipo en la nueva secuencia propuesta con roles más definidos.              

          .div(titulo="Paso 3")
            p Verificar: 
            ul.lista-ul--color.mb-0
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.color-1
                p.mb-0 Se compara el tiempo actual (40 min) con el tiempo tras aplicar la mejora (28 min).
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.color-1
                p.mb-0 Se recopilan opiniones del personal operativo sobre claridad, esfuerzo y seguridad.    

          .div(titulo="Paso 4")
            p Actuar: 
            ul.lista-ul--color.mb-0
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.color-1
                p.mb-0 Se estandariza la nueva secuencia de cambio de formato.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.color-1
                p.mb-0 Se documenta el procedimiento en el manual de operación y se entrena a todo el turno.                           

          .div(titulo="Conclusión")
            p Se logró una reducción del 30 % en el tiempo de cambio, lo que se tradujo en mayor disponibilidad de línea. El personal reportó mayor claridad en su función y menor estrés operativo. La mejora se replicó en otras líneas con éxito y se incluyó como práctica recomendada en auditorías internas. 

      .col-lg-4
        figure
          img.img-a.img-t(src="@/assets/curso/temas/44.png", alt="")  

    #t_3_7.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.7] ¿En qué momento se aplican los métodos de análisis y mejora de procesos?

    p(data-aos="fade-down") El uso adecuado de los métodos de análisis y mejora de procesos es esencial para garantizar decisiones efectivas durante el ciclo de mejora continua en la industria.

    .bg-full-width.bg-color-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.mb-3.mb-lg-0
            h2.mb-4(data-aos="flip-up") ¿En qué momento se aplican los métodos de análisis y mejora de procesos?
            p.mb-4(data-aos="fade-right") En el PDF #[b En qué momento se aplican los métodos de análisis y mejora de procesos], se detallan los momentos estratégicos en los que deben utilizarse herramientas como SIPOC, VSM, Ishikawa o el ciclo PHVA, junto con tecnologías digitales e Inteligencia Artificial, que potencian su efectividad. Este enfoque permite a los estudiantes aplicar estas metodologías con criterio técnico y actualizado, fortaleciendo sus competencias en la optimización de los procesos industriales.
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_4.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> ¿En qué momento se aplican los métodos de análisis y mejora de procesos?
          .col-lg-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/45.png', alt='') 



    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/213844" target="_blank" rel="noopener noreferrer") Viáfara Gálvez, L., Quintero Salgado, J. & Montero Méndez, V. (2021). Industria 4.0 - Gestión del conocimiento. Editorial Universidad Icesi.  

            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              a(href="https://repositorio.unal.edu.co/handle/unal/80242" target="_blank" rel="noopener noreferrer") Sánchez, J. F. (2019). Aplicación de herramientas Lean en procesos productivos. Tesis de pregrado. Universidad Nacional de Colombia. 


            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=U5dwT0CYb5Q&ab_channel=ClaudiaGioscio" target="_blank" rel="noopener noreferrer") Claudia Gioscio. (2020). Simulación.

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
