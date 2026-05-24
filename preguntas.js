 // ========================================================================
// ¡¡¡AQUÍ VA TU BASE DE DATOS DE PREGUNTAS!!!
// ========================================================================
// Edita, añade o borra preguntas aquí.
// Sigue el formato:
// {
//    tema: "Nombre del Tema",
//    pregunta: "¿Texto de la pregunta?",
//    opciones: ["Opción 0", "Opción 1", "Opción 2"],
//    correcta: 1  (El número de la opción correcta)
// }
// ¡Importante! No olvides la coma (,) entre cada objeto {pregunta}.

const BBDD_PREGUNTAS = [
    
    
    {
        "tema": "Junio 2019 Modelo C",
        "pregunta": "La exposición y ensayo en imaginación puede incluir la utilización de palabras clave relacionadas con los momentos y situaciones más críticos.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Junio 2019 Modelo C",
        "pregunta": "El procedimiento clave de la evaluación psicológica en el ámbito del entrenamiento deportivo son los cuestionarios específicos del deporte.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Junio 2019 Modelo C",
        "pregunta": "Las situaciones análogas resultan eficaces cuando provocan un nivel de activación medio-bajo.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Junio 2019 Modelo C",
        "pregunta": "La distinción entre la ejecución y la decisión no es un factor relevante en la habilidad de evaluar objetivamente el propio rendimiento.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Junio 2019 Modelo C",
        "pregunta": "El reforzamiento de la adherencia a los periodos de descanso es una estrategia aconsejable para prevenir el exceso de adherencia al entrenamiento.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Junio 2019 Modelo C",
        "pregunta": "Los errores en la evaluación del comportamiento táctico pueden favorecer un estado de indefensión en lugar de la percepción de control que se deriva de un sistema de evaluación adecuado.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Junio 2019 Modelo C",
        "pregunta": "En el entrenamiento de los deportistas para que utilicen autoinstrucciones, el primer paso es que el psicólogo proponga las frases que considere más adecuadas para conseguir los objetivos del deportista.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Junio 2019 Modelo C",
        "pregunta": "En los periodos de “competición menor” el cometido más importante del entrenamiento es la exposición y ensayo en las condiciones de la competición.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Junio 2019 Modelo C",
        "pregunta": "La fatiga y el agotamiento psicológicos pueden presentarse por defecto o por exceso mediante contenidos menos o más motivantes o estresantes.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Junio 2019 Modelo C",
        "pregunta": "Una de las ventajas de los objetivos de resultado respecto a los objetivos de realización es que favorecen en mayor medida la percepción de control.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Junio 2019 Modelo C",
        "pregunta": "Para cada deportista y situación existe un nivel de activación óptimo en cuya presencia es más probable el máximo rendimiento.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Junio 2019 Modelo C",
        "pregunta": "En los deportes de equipo, la planificación de objetivos debe referirse a los objetivos colectivos, pero no a los objetivos individuales que van por cuenta de cada deportista.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Junio 2019 Modelo C",
        "pregunta": "En el entrenamiento de exposición y ensayo en las condiciones de la competición no es necesario que el efecto de las técnicas psicológicas se sume al de otros factores motivantes o estresantes que suelen estar presentes en la competición.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Junio 2019 Modelo C",
        "pregunta": "El condicionamiento de estrategias psicológicas apropiadas procede prioritariamente en los periodos de pausa de una competición.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Junio 2019 Modelo C",
        "pregunta": "Establecer objetivos especiales y contingencias apropiadas según se consigan o no tales objetivos, no es una estrategia eficaz para transformar una competición rutinaria en una interesante experiencia de exposición y ensayo.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Junio 2019 Modelo C",
        "pregunta": "En la preparación personal para la actuación en la competición, no se deben anticipar posibles dificultades interferentes para, así, no debilitar la autoconfianza de los deportistas.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Junio 2019 Modelo C",
        "pregunta": "Cuando se establece la prioridad de los objetivos, se debe tener en cuenta: la simplicidad del trabajo a realizar, la urgencia de cada contenido, la relación con otros contenidos, la integración del contenido en el conjunto del trabajo a realizar y el coste de cada contenido en dedicación y esfuerzo.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Junio 2019 Modelo C",
        "pregunta": "La falta de adherencia puede proporcionar algún tipo de consecuencia gratificante de mayor peso que los posibles perjuicios.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Junio 2019 Modelo C",
        "pregunta": "A diferencia de las condiciones estresantes, las condiciones motivantes características de la competición no deben ser consideradas en el entrenamiento de exposición y ensayo.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Junio 2019 Modelo C",
        "pregunta": "El cansancio psicológico y la inhibición motriz pueden ser síntomas de alto nivel de estrés que podrían confundirse con síntomas de relajación.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Junio 2019 Modelo C",
        "pregunta": "En los deportes colectivos, en general, el enfoque atencional debe ser más amplio cuando el deportista atiende a los estímulos antecedentes discriminativos y reducirse cuando toma una decisión y procede a ejecutarla.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Junio 2019 Modelo C",
        "pregunta": "Asociar la sensación de cansancio/dolor al rendimiento deportivo no es una estrategia útil para controlar el cansancio o el dolor durante la práctica deportiva.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Junio 2019 Modelo C",
        "pregunta": "Una puntuación baja en las escalas de motivación y control del estrés del cuestionario CPRD podría indicar una cierta vulnerabilidad a la falta de adherencia.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Junio 2019 Modelo C",
        "pregunta": "La novedad, la dificultad y el esfuerzo exigido son elementos estresantes en las sesiones de entrenamiento.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Junio 2019 Modelo C",
        "pregunta": "El reforzamiento diferencial no resulta muy útil cuando se trata de conductas de esfuerzo.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Junio 2019 Modelo C",
        "pregunta": "El establecimiento de objetivos personales resulta muy útil tanto antes de las competiciones como antes de las sesiones de entrenamiento.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Junio 2019 Modelo C",
        "pregunta": "Un ejercicio-test sobre la habilidad del deportista para trabajar en imaginación consiste en cronometrar el tiempo que tarda en realizar un desplazamiento en imaginación y compararlo con lo que tardan sus compañeros en la misma distancia.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Junio 2019 Modelo C",
        "pregunta": "El propósito del reforzamiento extrínseco es que el deportista emita la conducta que es objeto de aprendizaje con una mayor frecuencia, de forma que tenga oportunidades de percibir el reforzamiento intrínseco que proporciona la propia conducta.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Junio 2019 Modelo C",
        "pregunta": "En el aprendizaje de la decisión entre dos o más conductas alternativas es importante distinguir entre los estímulos antecedentes estables y los estímulos antecedentes variables.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Junio 2019 Modelo C",
        "pregunta": "En los programas de “coste de respuesta” las condiciones del castigo deben ser progresivamente más duras (de menos a más), de forma que los deportistas acojan estos programas con la motivación más conveniente.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Septiembre 2019 Modelo C",
        "pregunta": "Uno de los objetivos de las estrategias de autoaplicación en el deporte es que se produzcan experiencias de reforzamiento interno.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Septiembre 2019 Modelo C",
        "pregunta": "Una de las escalas del cuestionario CPRD es: 'Resistencia a la frustración'.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Septiembre 2019 Modelo C",
        "pregunta": "Tanto los objetivos de resultado intra-sujeto como los objetivos de realización contribuyen a aumentar la percepción de control y a fortalecer la autoconfianza antes de una competición.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Septiembre 2019 Modelo C",
        "pregunta": "En el proceso de aprendizaje de habilidades, las sensaciones asociadas a la ejecución se consideran una vía apropiada para que los deportistas puedan obtener feedback.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Septiembre 2019 Modelo C",
        "pregunta": "En el programa de los 'Cinco Pasos' de Singer, estos son: motivación, autoconfianza, atención, nivel de activación y toma de decisiones.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Septiembre 2019 Modelo C",
        "pregunta": "El entrenamiento de los deportistas en técnicas de relajación debe incluir, entre otras estrategias, el control de estímulos antecedentes relacionados con las sesiones de práctica.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Septiembre 2019 Modelo C",
        "pregunta": "Los objetivos de realización son más apropiados que los objetivos de resultado para desarrollar un clima motivante /estresante que transforme la competición rutinaria en una experiencia de exposición y ensayo.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Septiembre 2019 Modelo C",
        "pregunta": "En el aprendizaje de habilidades deportivas, uno de los propósitos del control de estímulos ambientales es que los deportistas se motiven más.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Septiembre 2019 Modelo C",
        "pregunta": "La economía de fichas es una estrategia apropiada en el entrenamiento de los deportes de equipo.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Septiembre 2019 Modelo C",
        "pregunta": "La combinación apropiada de 'establecimiento de objetivos de resultado' difíciles de conseguir, y bien 'reforzamiento positivo o negativo' si se alcanza el objetivo, o 'castigo' si no se consigue, puede utilizarse para provocar una situación estresante que se aproxime a la que está presente en una competición.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Septiembre 2019 Modelo C",
        "pregunta": "Con los deportistas más jóvenes es difícil introducir el entrenamiento psicológico específico como parte de su entrenamiento cotidiano.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Septiembre 2019 Modelo C",
        "pregunta": "En el aprendizaje de las conductas de toma de decisiones, el aspecto fundamental es el resultado inmediato de cada alternativa posible.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Septiembre 2019 Modelo C",
        "pregunta": "Uno de los principales cometidos de las matrices de decisiones es que los deportistas observen la relación entre los costes a corto plazo y los beneficios a medio/largo plazo.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Septiembre 2019 Modelo C",
        "pregunta": "Las tendencias de funcionamiento constituyen directrices que deberían seguir, preferentemente, las decisiones de los deportistas.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Septiembre 2019 Modelo C",
        "pregunta": "La escala de 'control del estrés' del cuestionario CPRD incluye ítems relacionados con la autoconfianza.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Septiembre 2019 Modelo C",
        "pregunta": "En la preparación personal para la actuación en la competición, no es conveniente anticipar posibles dificultades interferentes para, así, no debilitar la autoconfianza de los deportistas.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Septiembre 2019 Modelo C",
        "pregunta": "Cuando se establece la prioridad de los objetivos, se debe tener en cuenta: la simplicidad del trabajo a realizar, la urgencia de cada contenido, la relación con otros contenidos, la integración del contenido en el conjunto del trabajo a realizar y el coste de cada contenido en dedicación y esfuerzo.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Septiembre 2019 Modelo C",
        "pregunta": "La falta de adherencia puede proporcionar algún tipo de consecuencia gratificante de mayor peso que los posibles perjuicios.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Septiembre 2019 Modelo C",
        "pregunta": "A diferencia de las condiciones estresantes, las condiciones motivantes características de la competición no deben ser consideradas en el entrenamiento de exposición y ensayo.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Septiembre 2019 Modelo C",
        "pregunta": "El cansancio psicológico y la inhibición motriz pueden ser síntomas de alto nivel de estrés que podrían confundirse con síntomas de relajación.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Septiembre 2019 Modelo C",
        "pregunta": "En los deportes colectivos, en general, el enfoque atencional debe ser más amplio cuando el deportista atiende a los estímulos antecedentes discriminativos y reducirse cuando toma una decisión y procede a ejecutarla.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Septiembre 2019 Modelo C",
        "pregunta": "Asociar la sensación de cansancio/dolor al rendimiento deportivo es una estrategia útil para controlar el cansancio o el dolor durante la práctica deportiva.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Septiembre 2019 Modelo C",
        "pregunta": "Una puntuación baja en las escalas de motivación y control del estrés del cuestionario CPRD podría indicar una cierta vulnerabilidad a la falta de adherencia.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Septiembre 2019 Modelo C",
        "pregunta": "La novedad, la dificultad y el esfuerzo exigido son elementos estresantes en las sesiones de entrenamiento.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Septiembre 2019 Modelo C",
        "pregunta": "El reforzamiento diferencial es una estrategia útil para el aprendizaje de conductas de esfuerzo.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Septiembre 2019 Modelo C",
        "pregunta": "El establecimiento de objetivos personales resulta muy útil tanto antes de las competiciones como antes de las sesiones de entrenamiento.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Septiembre 2019 Modelo C",
        "pregunta": "Un ejercicio-test sobre la habilidad del deportista para trabajar en imaginación consiste en cronometrar el tiempo que tarda en realizar un desplazamiento en imaginación y compararlo con lo que tardan sus compañeros en la misma distancia.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Septiembre 2019 Modelo C",
        "pregunta": "El propósito del reforzamiento extrínseco es que el deportista emita la conducta que es objeto de aprendizaje con una mayor frecuencia, de forma que tenga oportunidades de percibir el reforzamiento intrínseco que proporciona la propia conducta.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Septiembre 2019 Modelo C",
        "pregunta": "En el aprendizaje de la decisión entre dos o más conductas alternativas es importante distinguir entre los estímulos antecedentes estables y los estímulos antecedentes variables.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Septiembre 2019 Modelo C",
        "pregunta": "En los programas de 'coste de respuesta' las condiciones del castigo deben ser progresivamente más duras (de menos a más), de forma que los deportistas acojan estos programas con la motivación más conveniente.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Junio 2022 Modelo C",
        "pregunta": "Las dos grandes fuentes que principalmente nutren al nivel de activación son la motivación y la autoconfianza.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Junio 2022 Modelo C",
        "pregunta": "Cuando la competición siguiente está próxima, la evaluación post-competición debe centrarse prioritariamente en los recursos que el deportista no domina para que pueda rendir mejor en la competición inminente.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Junio 2022 Modelo C",
        "pregunta": "Durante los periodos de pausa en las competiciones, las técnicas psicológicas deben estar condicionadas a estímulos antecedentes muy concretos, de forma que no interfieran en la concentración de los deportistas en las tareas deportivas.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Junio 2022 Modelo C",
        "pregunta": "Potenciar la autoconfianza para contrarrestar el estrés es una estrategia muy útil en el periodo previo a una competición.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Junio 2022 Modelo C",
        "pregunta": "El proceso de búsqueda de interpretaciones, expectativas y creencias alternativas incluye la búsqueda de evidencia que el deportista debe realizar en el periodo posterior a la sesión con el psicólogo.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Junio 2022 Modelo C",
        "pregunta": "En deportes de interacción con compañeros y/o adversarios, al elaborar los planes atencionales para una competición suelen ser más apropiados los estímulos externos.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Junio 2022 Modelo C",
        "pregunta": "Las sesiones de práctica en imaginación deben ser lo suficientemente extensas como para que el deportista pueda visualizar toda la competición.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Junio 2022 Modelo C",
        "pregunta": "Cuando se combinan dos o más técnicas de relajación en situaciones estresantes que exigen un afrontamiento inmediato, es aconsejable utilizar los ejercicios de respiración antes que las otras técnicas.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Junio 2022 Modelo C",
        "pregunta": "La “detención del pensamiento”, seguida de “respiración profunda” y “autoinstrucciones enérgicas” sobre la conducta alternativa, puede ser muy útil para debilitar el vínculo “estímulo-respuesta” existente y potenciar un vínculo “estímulo-respuesta” nuevo.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Junio 2022 Modelo C",
        "pregunta": "En su estudio pionero de los psicólogos que trabajaron con deportistas que participaron en los Juegos Olímpicos de 1984, Orlick y Partington encontraron que los psicólogos que fueron valorados positivamente, entre otras características, dedicaban más tiempo al trabajo en grupo con talleres, etc. que a las sesiones individuales.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Junio 2022 Modelo C",
        "pregunta": "En la relación entre activación y rendimiento deportivo, la U invertida puede ser una “U invertida deforme”.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Junio 2022 Modelo C",
        "pregunta": "La motivación básica se refiere al interés del deportista por su actividad diaria.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Junio 2022 Modelo C",
        "pregunta": "En el contexto del alto rendimiento, el psicólogo tiene un único objetivo fundamental: contribuir al máximo rendimiento de los deportistas.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Junio 2022 Modelo C",
        "pregunta": "Las variables psicológicas pueden ser un antecedente de la conducta deportiva o bien esta una consecuencia de aquella.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Junio 2022 Modelo C",
        "pregunta": "La principal virtud del cuestionario CPRD en el campo aplicado es que las puntuaciones de sus escalas y subescalas permiten obtener un diagnóstico estable del funcionamiento psicológico de los deportistas.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Junio 2022 Modelo C",
        "pregunta": "Los excesos de adherencia al entrenamiento suelen estar reforzados por el reconocimiento social.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Junio 2022 Modelo C",
        "pregunta": "En ocasiones, cuando se trata de toma de decisiones, el aprendizaje incluye la vinculación de una conducta ya existente a circunstancias antecedentes diferentes.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Junio 2022 Modelo C",
        "pregunta": "El elemento esencial de los entrenamientos conjuntos es que no sean competitivos.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Junio 2022 Modelo C",
        "pregunta": "Para calcular la tendencia colectiva mediante el instrumento TEP se consideran las puntuaciones medias de cada variable, pero no las desviaciones típicas.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Junio 2022 Modelo C",
        "pregunta": "Los objetivos de resultado, la evaluación del rendimiento y los premios y penalizaciones vinculados a esos objetivos permiten incrementar la motivación y la concentración en los ejercicios de ensayo repetitivo de habilidades de precisión.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Septiembre 2022 Modelo A",
        "pregunta": "Es irrelevante incidir en las actividades deportivas para que estas tengan un impacto psicológico favorable.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Septiembre 2022 Modelo A",
        "pregunta": "De los errores cometidos por psicólogos en los equipos de fútbol, aprendimos, entre otras cosas, que el trabajo psicológico específico con los jugadores debe ser obligatorio.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Septiembre 2022 Modelo A",
        "pregunta": "La aportación de Burt Giges desde la Psicología Clínica plantea un enfoque de intervención alternativo al entrenamiento en habilidades psicológicas.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Septiembre 2022 Modelo A",
        "pregunta": "El TEP es un instrumento cuya principal aportación es recabar información sobre la tendencia colectiva del estado psicológico de los deportistas de un equipo.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Septiembre 2022 Modelo A",
        "pregunta": "La activación “positiva” favorece el rendimiento, mientras que la activación “negativa” lo perjudica.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Septiembre 2022 Modelo A",
        "pregunta": "En el tramo final previo a la competición, los check-points sirven para que el deportista de alto rendimiento evalúe sus posibilidades de ganar.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Septiembre 2022 Modelo A",
        "pregunta": "En la evaluación del rendimiento post-competición, una vez valorados independientemente el rendimiento y el resultado, se deben extraer conclusiones constructivas sobre la relación entre ambos.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Septiembre 2022 Modelo A",
        "pregunta": "Los modelos “expertos” son deportistas de prestigio que se caracterizan por sus éxitos y reconocida destreza en las conductas a observar e imitar.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Septiembre 2022 Modelo A",
        "pregunta": "La práctica en imaginación “a cámara lenta” no es apropiada cuando se intenta modificar un gesto técnico.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Septiembre 2022 Modelo A",
        "pregunta": "La carga psicológica en el entrenamiento deportivo se relaciona fundamentalmente con tres variables: determinación, perseverancia y tolerancia a la frustración.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Septiembre 2022 Modelo A",
        "pregunta": "Los estímulos antecedentes estables son los que conforman la situación en la que procede tomar una decisión.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Septiembre 2022 Modelo A",
        "pregunta": "Los deportistas muy competitivos no son necesariamente buenos competidores.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Septiembre 2022 Modelo A",
        "pregunta": "En la evaluación del rendimiento se debe discriminar entre decisión, ejecución, resultado inmediato y resultado global.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Septiembre 2022 Modelo A",
        "pregunta": "Lo que se pretende con las situaciones análogas es que el deportista ensaye en condiciones estresantes, pero sin la interferencia de otros elementos que forman parte de un partido.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Septiembre 2022 Modelo A",
        "pregunta": "Cuando la competición siguiente está próxima, la evaluación post-competición debe centrarse prioritariamente en los recursos que el deportista no domina para favorecer que pueda rendir mejor en la competición inminente.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Septiembre 2022 Modelo A",
        "pregunta": "Durante los periodos de pausa en las competiciones, las técnicas psicológicas deben estar condicionadas a estímulos antecedentes muy concretos, de forma que no interfieran en la concentración de los deportistas en las tareas deportivas.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Septiembre 2022 Modelo A",
        "pregunta": "Las sesiones de práctica en imaginación deben ser lo suficientemente extensas como para que el deportista pueda visualizar toda la competición.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Septiembre 2022 Modelo A",
        "pregunta": "La principal virtud del cuestionario CPRD en el campo aplicado es que las puntuaciones de sus escalas y subescalas permiten obtener un diagnóstico estable del funcionamiento psicológico de los deportistas.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Septiembre 2022 Modelo A",
        "pregunta": "El elemento esencial de los entrenamientos conjuntos es que sean competitivos.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Septiembre 2022 Modelo A",
        "pregunta": "En ocasiones, cuando se trata de toma de decisiones, el aprendizaje incluye la vinculación de una conducta ya existente a circunstancias antecedentes diferentes.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        tema: "Tema 1 Deporte_Antonio",
        pregunta: "En el alto rendimiento, el psicólogo tiene como único objetivo el bienestar emocional del deportista, por encima del rendimiento físico.",
        opciones: ["Verdadero", "Falso"],
        correcta: 1 
    },
    {
        tema: "Tema 1 Deporte_Antonio",
        pregunta: "La intervención psicológica debe ser un elemento integrado en el plan general de preparación del deportista.",
        opciones: ["Verdadero", "Falso"],
        correcta: 0
    },
    {
        tema: "Tema 1 Deporte_Antonio",
        pregunta: "El psicólogo deportivo debe trabajar de forma aislada para no interferir con el trabajo del entrenador.",
        opciones: ["Verdadero", "Falso"],
        correcta: 1 
    },
    {
        tema: "Tema 1 Deporte_Antonio",
        pregunta: "La evaluación psicológica debe ser un proceso continuo que se realiza a lo largo de toda la temporada.",
        opciones: ["Verdadero", "Falso"],
        correcta: 0
    },
    {
        tema: "Tema 1 Deporte_Antonio",
        pregunta: "Los cuestionarios como el CPRD permiten obtener una información inicial valiosa sobre el funcionamiento psicológico del deportista.",
        opciones: ["Verdadero", "Falso"],
        correcta: 0
    },
    {
        tema: "Tema 1 Deporte_Antonio",
        pregunta: "La autoobservación ayuda a que el deportista tome conciencia de sus conductas, pensamientos y sensaciones.",
        opciones: ["Verdadero", "Falso"],
        correcta: 0
    },
    {
        tema: "Tema 1 Deporte_Antonio",
        pregunta: "El nivel de activación óptimo es el mismo para todos los deportistas y para todas las tareas deportivas.",
        opciones: ["Verdadero", "Falso"],
        correcta: 1 
    },
    {
        tema: "Tema 1 Deporte_Antonio",
        pregunta: "La relación entre activación y rendimiento suele representarse mediante la hipótesis de la 'U invertida'.",
        opciones: ["Verdadero", "Falso"],
        correcta: 0
    },
    {
        tema: "Tema 1 Deporte_Antonio",
        pregunta: "El estrés surge cuando el deportista percibe que las demandas de la situación superan sus recursos para afrontarlas.",
        opciones: ["Verdadero", "Falso"],
        correcta: 0
    },
    {
        tema: "Tema 1 Deporte_Antonio",
        pregunta: "La autoconfianza se define como la convicción de que uno puede realizar con éxito la conducta necesaria para producir un resultado.",
        opciones: ["Verdadero", "Falso"],
        correcta: 0
    },
    {
        tema: "Tema 1 Deporte_Antonio",
        pregunta: "La relajación progresiva de Jacobson se basa exclusivamente en ejercicios de respiración profunda.",
        opciones: ["Verdadero", "Falso"],
        correcta: 1 
    },
    {
        tema: "Tema 1 Deporte_Antonio",
        pregunta: "La práctica en imaginación implica reproducir mentalmente situaciones deportivas con el fin de mejorar el rendimiento.",
        opciones: ["Verdadero", "Falso"],
        correcta: 0
    },
    {
        tema: "Tema 1 Deporte_Antonio",
        pregunta: "El establecimiento de objetivos es una estrategia clave para mantener la motivación y la autoconfianza.",
        opciones: ["Verdadero", "Falso"],
        correcta: 0
    },
    {
        tema: "Tema 1 Deporte_Antonio",
        pregunta: "Los objetivos de resultado son los que más dependen del control directo del propio deportista.",
        opciones: ["Verdadero", "Falso"],
        correcta: 1 
    },
    {
        tema: "Tema 1 Deporte_Antonio",
        pregunta: "Los objetivos de realización se centran en la conducta y ejecución del deportista, favoreciendo la percepción de control.",
        opciones: ["Verdadero", "Falso"],
        correcta: 0
    },
    {
        tema: "Tema 1 Deporte_Antonio",
        pregunta: "Las autoinstrucciones ayudan a dirigir la atención hacia los estímulos relevantes de la tarea.",
        opciones: ["Verdadero", "Falso"],
        correcta: 0
    },
    {
        tema: "Tema 1 Deporte_Antonio",
        pregunta: "Un enfoque atencional 'estrecho-interno' es adecuado para analizar el estado emocional propio.",
        opciones: ["Verdadero", "Falso"],
        correcta: 0
    },
    {
        tema: "Tema 1 Deporte_Antonio",
        pregunta: "En el entrenamiento de toma de decisiones, lo más importante es evaluar únicamente el resultado final de la acción.",
        opciones: ["Verdadero", "Falso"],
        correcta: 1 
    },
    {
        tema: "Tema 1 Deporte_Antonio",
        pregunta: "Las situaciones análogas permiten al deportista ensayar habilidades en condiciones similares a las de competición.",
        opciones: ["Verdadero", "Falso"],
        correcta: 0
    },
    {
        tema: "Tema 1 Deporte_Antonio",
        pregunta: "La evaluación post-competición debe realizarse de forma inmediata, sin importar el estado emocional del deportista.",
        opciones: ["Verdadero", "Falso"],
        correcta: 1 
    },
    {
        tema: "Tema 1 Deporte_Antonio",
        pregunta: "La cohesión de equipo incluye tanto la cohesión de tarea como la cohesión social.",
        opciones: ["Verdadero", "Falso"],
        correcta: 0
    },
    {
        tema: "Tema 1 Deporte_Antonio",
        pregunta: "La motivación básica se refiere al interés del deportista por la actividad diaria y las sesiones de entrenamiento.",
        opciones: ["Verdadero", "Falso"],
        correcta: 1 
    },
    {
        tema: "Tema 1 Deporte_Antonio",
        pregunta: "La motivación cotidiana es la que mantiene el interés por el entrenamiento día a día.",
        opciones: ["Verdadero", "Falso"],
        correcta: 0
    },
    {
        tema: "Tema 1 Deporte_Antonio",
        pregunta: "El sobreentrenamiento puede ser consecuencia de una carga psicológica excesiva sin periodos de descanso adecuados.",
        opciones: ["Verdadero", "Falso"],
        correcta: 0
    },
    {
        tema: "Tema 1 Deporte_Antonio",
        pregunta: "La adherencia al entrenamiento es esencial para que los beneficios físicos y psicológicos se consoliden.",
        opciones: ["Verdadero", "Falso"],
        correcta: 0
    },
    {
        tema: "Tema 1 Deporte_Antonio",
        pregunta: "El refuerzo positivo debe evitarse para que el deportista no se vuelva dependiente de la aprobación externa.",
        opciones: ["Verdadero", "Falso"],
        correcta: 1 
    },
    {
        tema: "Tema 1 Deporte_Antonio",
        pregunta: "El castigo es más eficaz cuando se aplica de forma intermitente e imprevisible.",
        opciones: ["Verdadero", "Falso"],
        correcta: 1 
    },
    {
        tema: "Tema 1 Deporte_Antonio",
        pregunta: "Las rutinas pre-competición sirven para que el deportista alcance su estado ideal de rendimiento antes de la prueba.",
        opciones: ["Verdadero", "Falso"],
        correcta: 0
    },
    {
        tema: "Tema 1 Deporte_Antonio",
        pregunta: "La técnica de 'detención del pensamiento' sirve para cortar cadenas de pensamientos negativos interferentes.",
        opciones: ["Verdadero", "Falso"],
        correcta: 0
    },
    {
        tema: "Tema 1 Deporte_Antonio",
        pregunta: "El POMS evalúa rasgos de personalidad estables en el deportista de alto rendimiento.",
        opciones: ["Verdadero", "Falso"],
        correcta: 1 
    },
    {
        tema: "Tema 1 Deporte_Antonio",
        pregunta: "La carga psicológica del entrenamiento puede aumentarse manipulando variables como la incertidumbre o la novedad.",
        opciones: ["Verdadero", "Falso"],
        correcta: 0
    },
    {
        tema: "Tema 1 Deporte_Antonio",
        pregunta: "Un deportista con alta autoconfianza suele persistir más ante el fracaso o la dificultad.",
        opciones: ["Verdadero", "Falso"],
        correcta: 0
    },
    {
        tema: "Tema 1 Deporte_Antonio",
        pregunta: "El aprendizaje por observación (modelado) es ineficaz si el modelo no es un experto mundial en la materia.",
        opciones: ["Verdadero", "Falso"],
        correcta: 1 
    },
    {
        tema: "Tema 1 Deporte_Antonio",
        pregunta: "Las matrices de decisiones permiten analizar las ventajas y desventajas de las conductas a corto y largo plazo.",
        opciones: ["Verdadero", "Falso"],
        correcta: 0
    },
    {
        tema: "Tema 1 Deporte_Antonio",
        pregunta: "La comunicación asertiva facilita la relación entre el entrenador y sus deportistas.",
        opciones: ["Verdadero", "Falso"],
        correcta: 0
    },
    {
        tema: "Tema 1 Deporte_Antonio",
        pregunta: "El entrenamiento psicológico solo es necesario cuando el deportista tiene un problema grave o trastorno mental.",
        opciones: ["Verdadero", "Falso"],
        correcta: 1 
    },
    {
        tema: "Tema 1 Deporte_Antonio",
        pregunta: "La confidencialidad es un requisito ético indispensable en la labor del psicólogo del deporte.",
        opciones: ["Verdadero", "Falso"],
        correcta: 0
    },
    {
        tema: "Tema 1 Deporte_Antonio",
        pregunta: "El 'control de estímulos' consiste en organizar el entorno para favorecer la aparición de conductas deseadas.",
        opciones: ["Verdadero", "Falso"],
        correcta: 0
    },
    {
        tema: "Tema 1 Deporte_Antonio",
        pregunta: "La preparación psicológica debe ser idéntica para deportistas jóvenes y para adultos profesionales.",
        opciones: ["Verdadero", "Falso"],
        correcta: 1 
    },
    {
        tema: "Tema 1 Deporte_Antonio",
        pregunta: "Las técnicas de respiración son útiles para regular la activación en momentos de pausa competitiva.",
        opciones: ["Verdadero", "Falso"],
        correcta: 0
    },
    {
        tema: "Tema 1 Deporte_Antonio",
        pregunta: "Es necesario evaluar periódicamente la eficacia de la intervención psicológica para ajustarla.",
        opciones: ["Verdadero", "Falso"],
        correcta: 0
    },
    {
        tema: "Tema 1 Deporte_Antonio",
        pregunta: "El 'miedo a ganar' puede generar ansiedad y bloqueos cuando el deportista está cerca de lograr un gran éxito.",
        opciones: ["Verdadero", "Falso"],
        correcta: 0
    },
    {
        tema: "Tema 1 Deporte_Antonio",
        pregunta: "Los objetivos colectivos son irrelevantes si cada deportista cumple sus objetivos individuales.",
        opciones: ["Verdadero", "Falso"],
        correcta: 1 
    },
    {
        tema: "Tema 1 Deporte_Antonio",
        pregunta: "La fatiga psicológica puede mermar la capacidad atencional y de toma de decisiones del deportista.",
        opciones: ["Verdadero", "Falso"],
        correcta: 0
    },
    {
        tema: "Tema 1 Deporte_Antonio",
        pregunta: "El feedback debe ser lo más general posible (ej. '¡bien hecho!') para no abrumar al deportista con detalles.",
        opciones: ["Verdadero", "Falso"],
        correcta: 1 
    },
    {
        tema: "Tema 1 Deporte_Antonio",
        pregunta: "Un enfoque atencional 'externo-estrecho' es útil para centrarse en un solo estímulo del entorno, como el balón.",
        opciones: ["Verdadero", "Falso"],
        correcta: 0
    },
    {
        tema: "Tema 1 Deporte_Antonio",
        pregunta: "El estrés negativo (distrés) puede tener consecuencias perjudiciales para la salud del deportista.",
        opciones: ["Verdadero", "Falso"],
        correcta: 0
    },
    {
        tema: "Tema 1 Deporte_Antonio",
        pregunta: "Los planes de competición deben centrarse solo en lo que el deportista domina, ignorando posibles fallos.",
        opciones: ["Verdadero", "Falso"],
        correcta: 1 
    },
    {
        tema: "Tema 1 Deporte_Antonio",
        pregunta: "La práctica en imaginación debe incluir sensaciones propioceptivas (sentir el movimiento) para ser más eficaz.",
        opciones: ["Verdadero", "Falso"],
        correcta: 0
    },
    {
        tema: "Tema 1 Deporte_Antonio",
        pregunta: "La evaluación objetiva del rendimiento ayuda a separar los hechos de las emociones post-partido.",
        opciones: ["Verdadero", "Falso"],
        correcta: 0
    },
    {
        tema: "Tema 1 Deporte_Antonio",
        pregunta: "El refuerzo social ayuda a aumentar la adherencia a programas de entrenamiento exigentes.",
        opciones: ["Verdadero", "Falso"],
        correcta: 0
    },
    {
        tema: "Tema 1 Deporte_Antonio",
        pregunta: "La automatización de gestos técnicos permite que el deportista libere recursos atencionales para la táctica.",
        opciones: ["Verdadero", "Falso"],
        correcta: 0
    },
    {
        tema: "Tema 1 Deporte_Antonio",
        pregunta: "El objetivo final del psicólogo es que el deportista sea autónomo en el uso de sus herramientas mentales.",
        opciones: ["Verdadero", "Falso"],
        correcta: 0
    },
    {
        tema: "Tema 1 Deporte_Antonio",
        pregunta: "La observación en entrenamiento es insuficiente; solo la observación en competición es válida.",
        opciones: ["Verdadero", "Falso"],
        correcta: 1 
    },
    {
        tema: "Tema 1 Deporte_Antonio",
        pregunta: "Los objetivos de evitación (ej. 'no fallar el tiro') aumentan el riesgo de parálisis por análisis y ansiedad.",
        opciones: ["Verdadero", "Falso"],
        correcta: 0
    },
    {
        tema: "Tema 1 Deporte_Antonio",
        pregunta: "La técnica de 'asociación' consiste en centrar la atención intensamente en las sensaciones corporales.",
        opciones: ["Verdadero", "Falso"],
        correcta: 0
    },
    {
        tema: "Tema 1 Deporte_Antonio",
        pregunta: "La asertividad permite al deportista expresar sus opiniones de forma clara y respetuosa ante el equipo.",
        opciones: ["Verdadero", "Falso"],
        correcta: 0
    },
    {
        tema: "Tema 1 Deporte_Antonio",
        pregunta: "La preparación psicológica incluye organizar aspectos logísticos para reducir el estrés innecesario.",
        opciones: ["Verdadero", "Falso"],
        correcta: 0
    },
    {
        tema: "Tema 1 Deporte_Antonio",
        pregunta: "Los modelos competentes son personas percibidas como similares al deportista que está aprendiendo.",
        opciones: ["Verdadero", "Falso"],
        correcta: 0
    },
    {
        tema: "Tema 1 Deporte_Antonio",
        pregunta: "El psicólogo del deporte debe actuar como un segundo entrenador, dando instrucciones técnicas tácticas.",
        opciones: ["Verdadero", "Falso"],
        correcta: 1 
    },
    {
        tema: "Tema 1 Deporte_Antonio",
        pregunta: "El entrenamiento atencional debe iniciarse en situaciones de alta presión competitiva.",
        opciones: ["Verdadero", "Falso"],
        correcta: 1 
    },
    {
        tema: "Tema 1 Deporte_Antonio",
        pregunta: "La evaluación del estado de ánimo transitorio ayuda a monitorizar la recuperación del deportista.",
        opciones: ["Verdadero", "Falso"],
        correcta: 0
    },
    {
        tema: "Tema 1 Deporte_Antonio",
        pregunta: "La monotonía del entrenamiento puede reducir la motivación cotidiana del deportista.",
        opciones: ["Verdadero", "Falso"],
        correcta: 0
    },
    {
        tema: "Tema 1 Deporte_Antonio",
        pregunta: "La autoconfianza solo depende de los éxitos pasados y no de la preparación actual.",
        opciones: ["Verdadero", "Falso"],
        correcta: 1 
    },
    {
        tema: "Tema 1 Deporte_Antonio",
        pregunta: "La cohesión de tarea se centra en la unión del grupo para alcanzar los objetivos comunes.",
        opciones: ["Verdadero", "Falso"],
        correcta: 0
    },
    {
        tema: "Tema 1 Deporte_Antonio",
        pregunta: "El psicólogo debe asesorar al entrenador en cómo dar feedback de forma constructiva.",
        opciones: ["Verdadero", "Falso"],
        correcta: 0
    },
    {
        tema: "Tema 1 Deporte_Antonio",
        pregunta: "La reestructuración cognitiva busca identificar y cambiar pensamientos que sabotean el rendimiento.",
        opciones: ["Verdadero", "Falso"],
        correcta: 0
    },
    {
        tema: "Tema 1 Deporte_Antonio",
        pregunta: "La práctica en imaginación es más potente si se realiza en periodos de tiempo cortos pero frecuentes.",
        opciones: ["Verdadero", "Falso"],
        correcta: 0
    },
    {
        tema: "Tema 1 Deporte_Antonio",
        pregunta: "El feedback intrínseco es el que proporciona el entrenador tras ver la ejecución de su deportista.",
        opciones: ["Verdadero", "Falso"],
        correcta: 1 
    },
    {
        tema: "Tema 1 Deporte_Antonio",
        pregunta: "La sobremotivación puede llevar a un aumento excesivo de la activación, perjudicando el rendimiento.",
        opciones: ["Verdadero", "Falso"],
        correcta: 0
    },
    {
        tema: "Tema 1 Deporte_Antonio",
        pregunta: "Las evaluaciones post-partido deben ser breves y evitar el análisis técnico profundo si hay fatiga extrema.",
        opciones: ["Verdadero", "Falso"],
        correcta: 0
    },
    {
        tema: "Tema 1 Deporte_Antonio",
        pregunta: "Un deportista con buena higiene del sueño rinde mejor y gestiona mejor el estrés.",
        opciones: ["Verdadero", "Falso"],
        correcta: 0
    },    
    {
        tema: "Tema 1 Deporte_Antonio",
        pregunta: "La autocrítica debe centrarse en aspectos que el deportista no puede cambiar para aprender a aceptarlos.",
        opciones: ["Verdadero", "Falso"],
        correcta: 1 
    },
    {
        tema: "Tema 1 Deporte_Antonio",
        pregunta: "Las habilidades sociales son prescindibles en deportes individuales ya que el deportista compite solo.",
        opciones: ["Verdadero", "Falso"],
        correcta: 1 
    },
    {
        tema: "Tema 1 Deporte_Antonio",
        pregunta: "El dolor lesivo debe ser una señal inmediata para detener o modificar el entrenamiento.",
        opciones: ["Verdadero", "Falso"],
        correcta: 0
    },
    {
        tema: "Tema 1 Deporte_Antonio",
        pregunta: "Visualizar no es lo mismo que imaginar, ya que imaginar involucra todos los sentidos y no solo la vista.",
        opciones: ["Verdadero", "Falso"],
        correcta: 0
    },
    {
        tema: "Tema 1 Deporte_Antonio",
        pregunta: "El estilo de liderazgo del entrenador influye decisivamente en el clima motivacional del equipo.",
        opciones: ["Verdadero", "Falso"],
        correcta: 0
    },
    {
        tema: "Tema 1 Deporte_Antonio",
        pregunta: "Un buen plan de actuación debe incluir rutinas para volver a concentrarse tras un error.",
        opciones: ["Verdadero", "Falso"],
        correcta: 0
    },
    {
        tema: "Tema 1 Deporte_Antonio",
        pregunta: "La preparación psicológica de base es la que se realiza justo los minutos antes de la competición.",
        opciones: ["Verdadero", "Falso"],
        correcta: 1 
    },
    {
        tema: "Tema 1 Deporte_Antonio",
        pregunta: "La focalización externa estrecha ayuda a ejecutar tareas de precisión técnica.",
        opciones: ["Verdadero", "Falso"],
        correcta: 0
    },
    {
        tema: "Tema 1 Deporte_Antonio",
        pregunta: "La fatiga física severa puede provocar una pérdida del control atencional.",
        opciones: ["Verdadero", "Falso"],
        correcta: 0
    },
    {
        tema: "Tema 1 Deporte_Antonio",
        pregunta: "La observación directa permite captar conductas que los cuestionarios a menudo pasan por alto.",
        opciones: ["Verdadero", "Falso"],
        correcta: 0
    },
    {
        tema: "Tema 1 Deporte_Antonio",
        pregunta: "Las instrucciones de 'ritmo' ayudan al deportista a gestionar su energía en esfuerzos largos.",
        opciones: ["Verdadero", "Falso"],
        correcta: 0
    },
    {
        tema: "Tema 1 Deporte_Antonio",
        pregunta: "La toma de decisiones debe evaluarse analizando si la elección fue correcta para la situación táctica dada.",
        opciones: ["Verdadero", "Falso"],
        correcta: 0
    },
    {
        tema: "Tema 1 Deporte_Antonio",
        pregunta: "El refuerzo positivo es más potente para el aprendizaje que el uso exclusivo del castigo.",
        opciones: ["Verdadero", "Falso"],
        correcta: 0
    },
    {
        tema: "Tema 1 Deporte_Antonio",
        pregunta: "El asesoramiento al entrenador es una vía de trabajo indirecto muy eficaz para el psicólogo.",
        opciones: ["Verdadero", "Falso"],
        correcta: 0
    },
    {
        tema: "Tema 1 Deporte_Antonio",
        pregunta: "La motivación intrínseca depende exclusivamente de las recompensas económicas recibidas.",
        opciones: ["Verdadero", "Falso"],
        correcta: 1 
    },
    {
        tema: "Tema 1 Deporte_Antonio",
        pregunta: "Sentir que se tiene control sobre la situación deportiva reduce significativamente el estrés.",
        opciones: ["Verdadero", "Falso"],
        correcta: 0
    },
    {
        tema: "Tema 1 Deporte_Antonio",
        pregunta: "La práctica en imaginación permite ensayar estrategias tácticas sin fatiga física.",
        opciones: ["Verdadero", "Falso"],
        correcta: 0
    },
    {
        tema: "Tema 1 Deporte_Antonio",
        pregunta: "Los objetivos SMART deben evitar ser realistas para fomentar la ambición máxima.",
        opciones: ["Verdadero", "Falso"],
        correcta: 1 
    },
    {
        tema: "Tema 1 Deporte_Antonio",
        pregunta: "La intervención psicológica finaliza formalmente con un informe de evaluación de resultados.",
        opciones: ["Verdadero", "Falso"],
        correcta: 0
    },
    {
        tema: "Tema 1 Deporte_Antonio",
        pregunta: "La cohesión social se refiere a lo bien que se llevan los miembros del equipo fuera del campo.",
        opciones: ["Verdadero", "Falso"],
        correcta: 0
    },
    {
        tema: "Tema 1 Deporte_Antonio",
        pregunta: "La fatiga psicológica nunca afecta a la velocidad de reacción muscular.",
        opciones: ["Verdadero", "Falso"],
        correcta: 1 
    },
    {
        tema: "Tema 1 Deporte_Antonio",
        pregunta: "Un plan de actuación debe estar automatizado para ser fluido durante la competición.",
        opciones: ["Verdadero", "Falso"],
        correcta: 0
    },
    {
        tema: "Tema 1 Deporte_Antonio",
        pregunta: "El psicólogo deportivo no debe participar en reuniones técnicas de equipo.",
        opciones: ["Verdadero", "Falso"],
        correcta: 1 
    },
    {
        tema: "Tema 1 Deporte_Antonio",
        pregunta: "La percepción de autocompetencia aumenta la motivación intrínseca del deportista.",
        opciones: ["Verdadero", "Falso"],
        correcta: 0
    },
    {
        tema: "Tema 1 Deporte_Antonio",
        pregunta: "Las evaluaciones grupales son más íntimas y precisas que las individuales para detectar problemas personales.",
        opciones: ["Verdadero", "Falso"],
        correcta: 1 
    },
    {
        tema: "Tema 1 Deporte_Antonio",
        pregunta: "Un clima de maestría (centrado en la mejora personal) favorece más la autoconfianza que un clima de resultado.",
        opciones: ["Verdadero", "Falso"],
        correcta: 0
    },
    {
        tema: "Tema 1 Deporte_Antonio",
        pregunta: "La preparación psicológica de base permite afrontar mejor las crisis de rendimiento a lo largo de la carrera.",
        opciones: ["Verdadero", "Falso"],
        correcta: 0
    },
    {
        "tema": "Tema 4 Deporte_Antonio",
        "pregunta": "Las variables psicológicas principales para el rendimiento incluyen la motivación, el estrés, la autoconfianza, el nivel de activación y la atención. [1]",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 4 Deporte_Antonio",
        "pregunta": "La fortaleza mental se considera una variable psicológica principal en lugar de una complementaria o adicional. [2]",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 4 Deporte_Antonio",
        "pregunta": "El nivel de activación se considera el eje central del entramado de variables psicológicas y su relación con el rendimiento. [2]",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 4 Deporte_Antonio",
        "pregunta": "Cada deportista puede utilizar un termómetro subjetivo (de 0 a 10) para cuantificar los distintos niveles de activación. [2]",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 4 Deporte_Antonio",
        "pregunta": "El nivel de activación influye únicamente en el funcionamiento físico, no en el mental. [3]",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 4 Deporte_Antonio",
        "pregunta": "El déficit de activación provoca que el deportista movilice mucha más energía de la necesaria. [3]",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 4 Deporte_Antonio",
        "pregunta": "El exceso de activación puede provocar un agarrotamiento que paralice la movilización de energía. [3]",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 4 Deporte_Antonio",
        "pregunta": "La sobreactivación en el deporte puede provocar inhibición o impulsividad. [4]",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 4 Deporte_Antonio",
        "pregunta": "Las tareas de precisión y de mayor complejidad requieren un nivel de activación más elevado que las tareas simples. [4]",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 4 Deporte_Antonio",
        "pregunta": "La activación colectiva implica que todos los miembros del equipo tienen exactamente la misma cantidad absoluta (cuantitativa) de activación. [5]",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 4 Deporte_Antonio",
        "pregunta": "La hipótesis de la U invertida fue propuesta por Yerkes y Dodson. [6]",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 4 Deporte_Antonio",
        "pregunta": "La forma de la U invertida debe ser siempre una U perfectamente simétrica. [6]",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 4 Deporte_Antonio",
        "pregunta": "Hardy sugirió que la ansiedad somática y el rendimiento tienen una relación curvilínea si la activación cognitiva negativa está ausente. [7]",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 4 Deporte_Antonio",
        "pregunta": "En presencia de activación cognitiva negativa (estrés), la relación continua de la U invertida se interrumpe y el rendimiento desciende drásticamente. [7]",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 4 Deporte_Antonio",
        "pregunta": "Es poco frecuente que en el deportista predomine una de las dos formas de manifestación de activación (física o mental). [7]",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 4 Deporte_Antonio",
        "pregunta": "La motivación y el estrés son las dos grandes variables que influyen en la activación de los deportistas. [8]",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 4 Deporte_Antonio",
        "pregunta": "La motivación contribuye habitualmente a la disminución del nivel de activación. [8]",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 4 Deporte_Antonio",
        "pregunta": "La ansiedad y la hostilidad son manifestaciones negativas del estrés que propician una activación negativa. [9]",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 4 Deporte_Antonio",
        "pregunta": "Ansiedad y activación son exactamente el mismo concepto en el contexto del deporte. [9]",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 4 Deporte_Antonio",
        "pregunta": "La activación negativa siempre resulta perjudicial para el rendimiento, independientemente del nivel óptimo. [9]",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 4 Deporte_Antonio",
        "pregunta": "El funcionamiento atencional es una variable que media entre el nivel de activación y el rendimiento deportivo. [10]",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 4 Deporte_Antonio",
        "pregunta": "Según Easterbrook, un aumento del nivel de activación favorece que se produzca una menor selectividad atencional. [10]",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 4 Deporte_Antonio",
        "pregunta": "La visión de túnel es consecuencia de un nivel de activación demasiado alto. [11]",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 4 Deporte_Antonio",
        "pregunta": "La distracción suele ser la consecuencia de un nivel de activación demasiado bajo que no alcanza el nivel óptimo. [11]",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 4 Deporte_Antonio",
        "pregunta": "Un exceso de información puede dificultar que el deportista centre su atención en lo prioritario y aumentar el nivel de activación. [12]",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 4 Deporte_Antonio",
        "pregunta": "El aprendizaje y perfeccionamiento de nuevos recursos técnicos requiere atención automática. [13]",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 4 Deporte_Antonio",
        "pregunta": "La utilización de recursos existentes en competición exige un tipo de atención predominantemente automática. [13]",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 4 Deporte_Antonio",
        "pregunta": "Nideffer destacó la existencia de cuatro enfoques atencionales combinando dirección y amplitud de la atención. [14]",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 4 Deporte_Antonio",
        "pregunta": "La atención interna se dirige a aspectos ajenos al deportista, como el rival o el público. [15]",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 4 Deporte_Antonio",
        "pregunta": "La atención interna resulta beneficiosa para el análisis consciente del propio rendimiento. [15]",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 4 Deporte_Antonio",
        "pregunta": "La práctica en imaginación requiere predominantemente un enfoque de atención externa. [16]",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 4 Deporte_Antonio",
        "pregunta": "Escuchar las instrucciones del entrenador requiere un enfoque de atención externa. [16]",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 4 Deporte_Antonio",
        "pregunta": "La atención amplia permite centrarse únicamente en la propia ejecución técnica olvidando el contexto. [17]",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 4 Deporte_Antonio",
        "pregunta": "El estado de alerta general para reaccionar ante estímulos inesperados se favorece mediante la atención reducida. [18]",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 4 Deporte_Antonio",
        "pregunta": "La atención reducida favorece la asimilación de cualquier tipo de información y la precisión en la ejecución. [18]",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 4 Deporte_Antonio",
        "pregunta": "El descanso atencional se considera un desgaste innecesario en el deporte de alto rendimiento. [19]",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 4 Deporte_Antonio",
        "pregunta": "Es aconsejable atender con la misma alta intensidad a todos los estímulos, independientemente de su relevancia. [19]",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 4 Deporte_Antonio",
        "pregunta": "Gritos, aplausos y reflejos solares son ejemplos de actividad cognitiva interferente. [20]",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 4 Deporte_Antonio",
        "pregunta": "Pensamientos de duda o ideas agresivas contra el árbitro son considerados actividad cognitiva interferente. [21]",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 4 Deporte_Antonio",
        "pregunta": "La motivación básica se relaciona con el compromiso estable del deportista y su interés por el resultado a largo plazo. [22]",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 4 Deporte_Antonio",
        "pregunta": "La motivación cotidiana busca la gratificación inmediata en las tareas del día a día y el ambiente de trabajo. [22]",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 4 Deporte_Antonio",
        "pregunta": "La disposición del deportista a afrontar un coste elevado es un factor que influye en la motivación básica. [23]",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 4 Deporte_Antonio",
        "pregunta": "La falta de motivación básica favorece un compromiso a largo plazo gracias a la reducción del estrés. [23]",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 4 Deporte_Antonio",
        "pregunta": "El reforzamiento social y la percepción de progreso impactan principalmente en la motivación cotidiana. [24]",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 4 Deporte_Antonio",
        "pregunta": "El dinero y el prestigio social son elementos propios de la motivación intrínseca. [25]",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 4 Deporte_Antonio",
        "pregunta": "Una motivación excesivamente alta, sin control, puede generar una sobreactivación perjudicial previa a competir. [26]",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 4 Deporte_Antonio",
        "pregunta": "Si existe alta motivación sin autoconfianza frente a un desafío, es probable que la motivación se transforme en estrés. [27]",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 4 Deporte_Antonio",
        "pregunta": "El estrés, si se percibe como un reto, puede llegar a transformarse en motivación. [28]",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 4 Deporte_Antonio",
        "pregunta": "Tratar de motivar a los deportistas resaltando solo el beneficio sin especificar el coste es un error. [29]",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 4 Deporte_Antonio",
        "pregunta": "Los objetivos muy fáciles o ya conseguidos son los más potentes para alimentar la motivación. [30]",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 4 Deporte_Antonio",
        "pregunta": "El estrés puede resultar beneficioso porque permite la movilización de recursos psicológicos y fisiológicos. [31]",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 4 Deporte_Antonio",
        "pregunta": "Una sobredosis continua de estrés en el deporte suele generar agotamiento. [31]",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 4 Deporte_Antonio",
        "pregunta": "Las manifestaciones de ansiedad y desánimo provocan siempre un aumento en el nivel de activación del deportista. [32]",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 4 Deporte_Antonio",
        "pregunta": "El agotamiento psicológico favorece una disminución del nivel de activación. [32]",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 4 Deporte_Antonio",
        "pregunta": "Tanto la ansiedad como la hostilidad incrementan el nivel de activación negativa. [32]",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 4 Deporte_Antonio",
        "pregunta": "En el desánimo, la falta de interés es la causa que genera el problema inicial. [33]",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 4 Deporte_Antonio",
        "pregunta": "Transformar la ansiedad en hostilidad controlada a veces ayuda a desinhibir el agarrotamiento. [33]",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 4 Deporte_Antonio",
        "pregunta": "La mejor solución ante un cuadro severo de agotamiento psicológico es aumentar la intensidad del entrenamiento. [34]",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 4 Deporte_Antonio",
        "pregunta": "Experiencias anteriores de éxito rotundo nunca se constituyen como situaciones generadoras de estrés. [34]",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 4 Deporte_Antonio",
        "pregunta": "Algunos deportistas sienten pánico ante las altas expectativas generadas por el éxito, lo cual les genera estrés. [35]",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 4 Deporte_Antonio",
        "pregunta": "El miedo a ganar puede presentarse como un efecto estresante del éxito. [35]",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 4 Deporte_Antonio",
        "pregunta": "Las creencias rígidas sobre cómo debe ser el rendimiento tienden a reducir la intensidad del estrés. [36]",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 4 Deporte_Antonio",
        "pregunta": "El perfeccionismo extremo en los deportistas puede favorecer la aparición del estrés por exigencias irreales. [37]",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 4 Deporte_Antonio",
        "pregunta": "Si un deportista perfeccionista experimenta malos resultados, su vulnerabilidad al estrés se reduce considerablemente. [37]",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 4 Deporte_Antonio",
        "pregunta": "Escapar de la situación o culparse constantemente aumenta la vulnerabilidad al estrés y sus efectos nocivos. [38]",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 4 Deporte_Antonio",
        "pregunta": "Los apoyos sociales pueden amortiguar las experiencias estresantes al incrementar la autoconfianza del sujeto. [39]",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 4 Deporte_Antonio",
        "pregunta": "Ajustar las expectativas a la realidad y fortalecer la autoconfianza son dos estrategias eficaces para controlar el estrés. [40]",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 4 Deporte_Antonio",
        "pregunta": "Bandura denominaba a la autoconfianza deportiva como autoeficacia. [41]",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 4 Deporte_Antonio",
        "pregunta": "La autoconfianza alta se basa en ilusiones infundadas sin conocimiento de los recursos reales. [42]",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 4 Deporte_Antonio",
        "pregunta": "La falsa confianza se caracteriza por esconder una autoconfianza débil detrás de una máscara de ganador. [42]",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 4 Deporte_Antonio",
        "pregunta": "El autoengaño en la falsa confianza puede llegar a derivar en una disminución drástica de la autoestima. [43]",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 4 Deporte_Antonio",
        "pregunta": "Cuando hay nula motivación y muy alto estrés, la alta autoconfianza siempre conduce a un nivel óptimo de activación. [44]",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 4 Deporte_Antonio",
        "pregunta": "En ocasiones, dudar un poco de sí mismo (bajar la autoconfianza) puede activar al deportista si está excesivamente relajado. [44]",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 4 Deporte_Antonio",
        "pregunta": "Según Bandura, la autoduda interfiere negativamente con la adquisición de nuevas habilidades en los entrenamientos. [45]",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 4 Deporte_Antonio",
        "pregunta": "El nivel de autoconfianza exigido durante la competición debe ser mayor que el requerido para aprender en entrenamientos. [45]",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 4 Deporte_Antonio",
        "pregunta": "Mantener expectativas poco realistas es el mejor método para fortalecer la verdadera autoconfianza. [46]",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 4 Deporte_Antonio",
        "pregunta": "Los objetivos centrados en el rendimiento propio de realización mejoran las posibilidades de éxito más que enfocarse solo en el resultado. [46]",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 4 Deporte_Antonio",
        "pregunta": "El fracaso controlado ocurre cuando el deportista pierde pero es consciente de qué conductas propias debe corregir para mejorar. [47]",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 4 Deporte_Antonio",
        "pregunta": "El éxito controlado implica la consecución del objetivo y la atribución del mismo a la suerte o factores externos. [48]",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 4 Deporte_Antonio",
        "pregunta": "Anticipar dificultades ayuda a evitar el factor sorpresa y previene descensos en la autoconfianza en la competición. [49]",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 4 Deporte_Antonio",
        "pregunta": "La autoconfianza del deportista se ve negativamente afectada si confía en la eficacia y credibilidad de su entrenador. [50]",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 4 Deporte_Antonio",
        "pregunta": "Carron define la cohesión de equipo como una cualidad estática que no fluctúa a lo largo de la temporada. [51]",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 4 Deporte_Antonio",
        "pregunta": "Alejados de competiciones importantes, debilitar levemente la cohesión puede ayudar a estimular el rendimiento individual. [51]",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 4 Deporte_Antonio",
        "pregunta": "En los deportes de equipo de alto rendimiento, la cohesión por el resultado debe predominar sobre la cohesión social. [52]",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 4 Deporte_Antonio",
        "pregunta": "Una alta cohesión puramente social siempre previene el acomodamiento de los deportistas de élite. [52]",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 4 Deporte_Antonio",
        "pregunta": "La holgazanería social se refiere a la pérdida de responsabilidad individual en situaciones de grupo y daña el rendimiento. [53]",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 4 Deporte_Antonio",
        "pregunta": "La experiencia previa de fracasos que no se pueden controlar incrementa automáticamente la cohesión por resultados. [54]",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 4 Deporte_Antonio",
        "pregunta": "El debilitamiento puntual de la cohesión permite generar estrés positivo que combata el acomodamiento de los deportistas. [55]",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 4 Deporte_Antonio",
        "pregunta": "En el entramado de variables principales, la motivación y el estrés nutren al nivel de activación. [56]",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 4 Deporte_Antonio",
        "pregunta": "La autoconfianza funge como 'llave de paso' para activar la motivación o amortiguar el estrés. [56]",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 4 Deporte_Antonio",
        "pregunta": "La fortaleza mental contribuye a una mayor autoconfianza y a la capacidad de mantener una alta motivación. [57]",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 4 Deporte_Antonio",
        "pregunta": "Las emociones positivas y la fortaleza mental pertenecen al bloque de variables psicológicas principales en vez de adicionales. [57]",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 4 Deporte_Antonio",
        "pregunta": "Las emociones negativas nutren al nivel de activación con activación predominantemente positiva. [57]",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 4 Deporte_Antonio",
        "pregunta": "El nivel de activación influye sobre la atención y la toma de decisiones. [56]",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 4 Deporte_Antonio",
        "pregunta": "La tensión muscular y la ejecución motriz se ven directamente influidas por el nivel de activación presente. [56]",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 4 Deporte_Antonio",
        "pregunta": "Es imposible generar un estado de déficit de activación en un deportista con alta motivación para su objetivo. [44]",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 4 Deporte_Antonio",
        "pregunta": "Las creencias flexibles suelen sesgar la interpretación del estrés aumentando siempre la sobreactivación. [36]",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 4 Deporte_Antonio",
        "pregunta": "La tolerancia a la frustración y la perseverancia se incluyen dentro del concepto de fortaleza mental. [57]",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 4 Deporte_Antonio",
        "pregunta": "Una adecuada comprensión del equilibrio costes-beneficios es un componente fundamental de la motivación. [29]",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 4 Deporte_Antonio",
        "pregunta": "El estrés, al convertirse en un reto alcanzable mediante autoconfianza, favorece la motivación y la activación positiva. [58]",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 5 Deporte_Antonio",
        "pregunta": "La evaluación psicológica (EP) en el alto rendimiento incluye el uso de la Metodología Conductual.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 5 Deporte_Antonio",
        "pregunta": "Uno de los objetivos principales de la evaluación psicológica es conocer cómo es el rendimiento real del deportista y las variables que lo determinan.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 5 Deporte_Antonio",
        "pregunta": "La evaluación psicológica no debe centrarse en la eficacia de la intervención ni buscar relaciones causa-efecto.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 5 Deporte_Antonio",
        "pregunta": "El simple proceso de evaluación puede propiciar cambios en las variables evaluadas, modificando el funcionamiento del deportista.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 5 Deporte_Antonio",
        "pregunta": "En la evaluación psicológica, el rendimiento y los resultados deportivos se consideran siempre variables independientes.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 5 Deporte_Antonio",
        "pregunta": "Las variables ambientales pueden influir tanto en las variables dependientes como en las independientes.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 5 Deporte_Antonio",
        "pregunta": "Es estrictamente necesario evaluar siempre todas las variables psicológicas posibles en cada caso, sean o no relevantes.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 5 Deporte_Antonio",
        "pregunta": "Para evaluar una variable psicológica como la autoconfianza, es pertinente recabar información sobre experiencias previas de éxito o fracaso.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 5 Deporte_Antonio",
        "pregunta": "Las variables de rendimiento deportivo se dividen exclusivamente en físicas y tácticas.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 5 Deporte_Antonio",
        "pregunta": "El rendimiento físico puede medirse mediante indicadores biológicos como la frecuencia cardíaca y test de campo.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 5 Deporte_Antonio",
        "pregunta": "La evaluación del rendimiento físico no necesita considerar variables psicológicas interferentes, como la falta de motivación o ansiedad.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 5 Deporte_Antonio",
        "pregunta": "Las decisiones tomadas por el deportista conforman su comportamiento táctico-estratégico.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 5 Deporte_Antonio",
        "pregunta": "Las conductas de ejecución motriz se refieren a las elecciones estratégicas previas al movimiento.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 5 Deporte_Antonio",
        "pregunta": "Es necesario distinguir entre resultados inmediatos (consecuencia de cada decisión) y resultados globales.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 5 Deporte_Antonio",
        "pregunta": "Las decisiones deben ser siempre valoradas a posteriori basándose exclusivamente en si el resultado global fue un éxito.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 5 Deporte_Antonio",
        "pregunta": "La valoración de una decisión se debe hacer en función de las circunstancias y estímulos presentes en el momento de tomarla.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 5 Deporte_Antonio",
        "pregunta": "Una ejecución motriz perfecta siempre garantiza un buen resultado, sin importar variables externas o del rival.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 5 Deporte_Antonio",
        "pregunta": "La ejecución motriz se debe valorar en función de criterios técnicos, aislando la influencia de factores externos que puedan afectar el resultado.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 5 Deporte_Antonio",
        "pregunta": "La metodología conductual ayuda a registrar de manera objetiva la frecuencia e intensidad de las conductas de ejecución.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 5 Deporte_Antonio",
        "pregunta": "Es correcto analizar los resultados deportivos saltándose las decisiones y acciones motrices que los generaron.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 5 Deporte_Antonio",
        "pregunta": "Al evaluar los resultados, se deben considerar variables intervinientes externas que pudieron afectar el éxito de la acción.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 5 Deporte_Antonio",
        "pregunta": "Las conductas de adherencia y de autocuidado son ejemplos claros de variables no observables.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 5 Deporte_Antonio",
        "pregunta": "Las manifestaciones externas de agresividad y evitación se clasifican como variables observables.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 5 Deporte_Antonio",
        "pregunta": "Las respuestas psicofisiológicas como la tasa cardíaca entran en el grupo de variables observables para un observador externo.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 5 Deporte_Antonio",
        "pregunta": "Las situaciones antecedentes son la causa directa y única de las conductas del deportista.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 5 Deporte_Antonio",
        "pregunta": "Para la observación de conductas observables, no es estrictamente necesaria la colaboración activa del deportista.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 5 Deporte_Antonio",
        "pregunta": "Las variables internas como pensamientos, expectativas y emociones se clasifican como variables no observables.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 5 Deporte_Antonio",
        "pregunta": "Para poder evaluar las variables no observables, el psicólogo necesita la implicación y participación activa del deportista.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 5 Deporte_Antonio",
        "pregunta": "Las hipótesis sobre el estado psicológico basadas en variables observables son conclusiones definitivas e infalibles.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 5 Deporte_Antonio",
        "pregunta": "El establecimiento de hipótesis sólidas evita la necesidad de preguntar constantemente al deportista sobre su estado mental.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 5 Deporte_Antonio",
        "pregunta": "Si un deportista comete muchas faltas, estamos ante un 'problema concreto' que requiere una evaluación específica focalizada en esa conducta.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 5 Deporte_Antonio",
        "pregunta": "Ante un 'problema poco definido', el evaluador debe aplicar inmediatamente una técnica de relajación sin delimitar el problema.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 5 Deporte_Antonio",
        "pregunta": "El 'déficit de motivación' suele presentarse inicialmente como un problema poco definido que la evaluación debe desglosar.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 5 Deporte_Antonio",
        "pregunta": "Cuando existe un total desconocimiento del problema, el evaluador debe descartar hipótesis rápidamente para ahorrar tiempo.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 5 Deporte_Antonio",
        "pregunta": "La evaluación psicológica también es útil en ausencia de problemas, con el fin de detectar fortalezas y necesidades para optimizar el rendimiento.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 5 Deporte_Antonio",
        "pregunta": "Si la predisposición del deportista es baja, es aconsejable iniciar la evaluación por los temas más personales y amenazantes.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 5 Deporte_Antonio",
        "pregunta": "El Análisis Funcional (AF) es la principal herramienta de la evaluación conductual.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 5 Deporte_Antonio",
        "pregunta": "El eje central del Análisis Funcional no es la conducta, sino los rasgos de personalidad del individuo.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 5 Deporte_Antonio",
        "pregunta": "El Análisis Funcional ayuda a establecer la relación de contingencias entre una conducta y sus consecuencias.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 5 Deporte_Antonio",
        "pregunta": "En el Análisis Funcional no es relevante la exploración de la actividad mental subyacente, como creencias y expectativas.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 5 Deporte_Antonio",
        "pregunta": "El Análisis Funcional sirve tanto para evaluar conductas que se desea eliminar como conductas que no existen y se quieren instaurar.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 5 Deporte_Antonio",
        "pregunta": "Una secuencia donde una situación estresante causa ansiedad, que a su vez causa mala toma de decisiones, es un ejemplo de cadena evaluable mediante Análisis Funcional.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 5 Deporte_Antonio",
        "pregunta": "La evaluación psicológica previa no necesita valorar la viabilidad ni los recursos disponibles para la intervención, de eso se encarga el entrenador.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 5 Deporte_Antonio",
        "pregunta": "El mejor método para evaluar las variables observables es la observación directa.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 5 Deporte_Antonio",
        "pregunta": "En la observación directa, se utilizan estímulos estables (como la zona del campo) y estímulos variables (como la defensa rival) para analizar la toma de decisiones.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 5 Deporte_Antonio",
        "pregunta": "Actualmente, la grabación en video está desaconsejada para analizar las observaciones 'a posteriori'.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 5 Deporte_Antonio",
        "pregunta": "Para evaluar habilidades específicas del deportista, el psicólogo puede apoyarse en la realización de ejercicios-test específicos.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 5 Deporte_Antonio",
        "pregunta": "El uso de cuestionarios estandarizados ha aumentado sistemáticamente en las dos últimas décadas como la única técnica válida.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 5 Deporte_Antonio",
        "pregunta": "Una desventaja de los cuestionarios es que los deportistas tienden a contestar de forma 'socialmente deseable' para no parecer vulnerables.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 5 Deporte_Antonio",
        "pregunta": "Las puntuaciones de los cuestionarios deben utilizarse como orientación y no como una verdad absoluta de la evaluación.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 5 Deporte_Antonio",
        "pregunta": "El cuestionario SCAT fue diseñado históricamente para evaluar el estado del deportista justo minutos antes de competir.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 5 Deporte_Antonio",
        "pregunta": "El cuestionario CSAI-2 es utilizado habitualmente para medir la ansiedad-estado del deportista antes de la competición.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 5 Deporte_Antonio",
        "pregunta": "El cuestionario CPRD, creado por Buceta y colaboradores en la UNED, es el más utilizado en lengua española para evaluar recursos de los deportistas.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 5 Deporte_Antonio",
        "pregunta": "El POMS (Profile of Mood States) es un cuestionario exhaustivo que mide únicamente el nivel táctico y la ejecución física.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 5 Deporte_Antonio",
        "pregunta": "El POMS agrupa las respuestas en variables como Tensión, Estado Depresivo, Cólera, Vigor, Fatiga y Confusión.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 5 Deporte_Antonio",
        "pregunta": "En el listado POMS, se asume que un estado psicológico óptimo coincide con puntuaciones muy bajas en Vigor y altas en Tensión.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 5 Deporte_Antonio",
        "pregunta": "Escalas subjetivas de 0 a 10 son especialmente útiles para medir la intensidad del esfuerzo, el dolor o la concentración.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 5 Deporte_Antonio",
        "pregunta": "Las Escalas Visuales Análogas consisten en pares de adjetivos idénticos separados por una línea de 5 centímetros.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 5 Deporte_Antonio",
        "pregunta": "El cuestionario Pódium (UNED) agrupa pares de adjetivos en factores como Ansiedad, Motivación y Autoconfianza.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 5 Deporte_Antonio",
        "pregunta": "El Test del Estado Psicológico (TEP) tiene como principal aportación su carácter colectivo, aunque puede aplicarse individualmente.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 5 Deporte_Antonio",
        "pregunta": "En el TEP, la posición izquierda-derecha de los adjetivos se mantiene estática para crear un efecto de aprendizaje deliberado.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 5 Deporte_Antonio",
        "pregunta": "En las escalas del TEP, el 'Desánimo' y el 'Cansancio' se evalúan como manifestaciones de estrés que conllevan activación baja perjudicial.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 5 Deporte_Antonio",
        "pregunta": "La 'Ansiedad' y 'Hostilidad' medidas en el TEP se asocian con estados de sobractivación perjudiciales para el rendimiento.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 5 Deporte_Antonio",
        "pregunta": "Para la aplicación del Test del Estado Psicológico a nivel grupal se aconseja el anonimato de las respuestas.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 5 Deporte_Antonio",
        "pregunta": "En el análisis grupal del TEP, una desviación típica muy amplia sugiere una tendencia colectiva muy homogénea y unánime.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 5 Deporte_Antonio",
        "pregunta": "Cuando la desviación típica de una escala del TEP es pequeña, la información sobre la tendencia colectiva del equipo es más precisa.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 5 Deporte_Antonio",
        "pregunta": "La entrevista psicológica sólo debe tener un carácter estrictamente formal y estar centrada exclusivamente en recabar datos duros.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 5 Deporte_Antonio",
        "pregunta": "La entrevista puede servir para establecer una relación de confianza mutua, incluso sacrificando parte de la obtención inmediata de información.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 5 Deporte_Antonio",
        "pregunta": "El psicólogo deportivo debe usar la entrevista para coordinar también los distintos procedimientos como escalas u observación.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 5 Deporte_Antonio",
        "pregunta": "La técnica de la autoobservación permite al deportista recoger información sobre sus variables no observables como el nivel de activación.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 5 Deporte_Antonio",
        "pregunta": "La inmensa mayoría de los deportistas de élite ya poseen un hábito natural para cumplimentar hojas de autorregistro sin requerir entrenamiento.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 5 Deporte_Antonio",
        "pregunta": "Es aconsejable iniciar a los deportistas en la autoobservación pidiéndoles que recuerden experiencias retrospectivas.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 5 Deporte_Antonio",
        "pregunta": "Llevar un diario deportivo es un mal ejemplo de autorregistro, porque la información pierde valor al registrarla a mano.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 5 Deporte_Antonio",
        "pregunta": "Los registros psicofisiológicos son exclusivamente usados para medir procesos digestivos y nunca se relacionan con variables de rendimiento.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 5 Deporte_Antonio",
        "pregunta": "En la práctica, los registros psicofisiológicos suelen estar más relacionados con la actividad de médicos y preparadores físicos.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 5 Deporte_Antonio",
        "pregunta": "El psicólogo del deporte no puede valerse de registros psicofisiológicos ni usar esa información para complementar su propia evaluación.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 5 Deporte_Antonio",
        "pregunta": "Los registros psicofisiológicos pueden ayudar a detectar una sobreactivación por ansiedad que podría causar errores en la toma de decisiones.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 5 Deporte_Antonio",
        "pregunta": "Las conductas deportivas o de toma de decisiones no pueden ser desglosadas funcionalmente porque no son medibles.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 5 Deporte_Antonio",
        "pregunta": "Para evaluar la conducta de un deportista en competición, primero se debe aislar el resultado y observar la ejecución en sí misma.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 5 Deporte_Antonio",
        "pregunta": "El SCAT mide la ansiedad-estado antes de una competición, mientras que el CSAI-2 mide la ansiedad-rasgo general.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 5 Deporte_Antonio",
        "pregunta": "El cuestionario PSIS fue diseñado para medir las necesidades y habilidades mentales de los deportistas de alto rendimiento.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 5 Deporte_Antonio",
        "pregunta": "Las variables de funcionamiento físico pueden incluir conductas como el número de flexiones o el tiempo en recorrer una distancia.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 5 Deporte_Antonio",
        "pregunta": "En la observación mediante metodología conductual, las situaciones consecuentes no se registran porque sólo importan los antecedentes.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 5 Deporte_Antonio",
        "pregunta": "Los reconocimientos médicos son ajenos y opuestos a la evaluación global de las variables de rendimiento físico.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 5 Deporte_Antonio",
        "pregunta": "Las expectativas y creencias rígidas pueden considerarse como parte de la actividad mental subyacente analizada en la evaluación psicológica.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 5 Deporte_Antonio",
        "pregunta": "En el contexto del autorregistro, es muy recomendable que los deportistas visionen videos de sus actuaciones para recordar y registrar mejor su estado en ese momento.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 5 Deporte_Antonio",
        "pregunta": "Las conductas de evitación ante problemas tácticos se consideran variables no observables que sólo el psicólogo puede inferir.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 5 Deporte_Antonio",
        "pregunta": "El uso de la hoja de registro de toma de decisiones permite distinguir entre decisiones tomadas en condiciones estables e inestables.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 5 Deporte_Antonio",
        "pregunta": "La intensidad de una conducta es el parámetro conductual más fácil de registrar objetivamente por encima de la frecuencia.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 5 Deporte_Antonio",
        "pregunta": "En la exploración inicial para la evaluación de necesidades y fortalezas, una exploración general puede conducir a un análisis más específico posterior.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 5 Deporte_Antonio",
        "pregunta": "La 'ansiedad' y la 'hostilidad' son identificables a menudo como variables observables, especialmente a través del lenguaje o comportamientos agresivos.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 5 Deporte_Antonio",
        "pregunta": "El análisis de los resultados globales siempre tiene más peso psicológico que el análisis de la ejecución motriz.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 5 Deporte_Antonio",
        "pregunta": "Al plantear hipótesis de evaluación, es prudente relacionar variables observables con posibles estados psicológicos internos.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 5 Deporte_Antonio",
        "pregunta": "El desarrollo de un estilo de funcionamiento objetivo es un efecto positivo colateral de involucrarse en la evaluación psicológica conductual.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 5 Deporte_Antonio",
        "pregunta": "La duración de la atención sobre una tarea se considera una variable conductual dependiente e imposible de modificar.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 5 Deporte_Antonio",
        "pregunta": "Las conductas previas que predisponen al deportista para el partido forman parte de las variables independientes del rendimiento.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 5 Deporte_Antonio",
        "pregunta": "Si un jugador falla en una acción de precisión por un mal bote del balón, la evaluación técnica no debe calificar su ejecución de incorrecta basándose en ese resultado final.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 5 Deporte_Antonio",
        "pregunta": "El psicólogo deportivo tiene la obligación de imponer la autoobservación al deportista, aun cuando el problema de rendimiento no esté definido.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 5 Deporte_Antonio",
        "pregunta": "El grado de dificultad de cuantificar una conducta no exime al evaluador de intentar definir criterios objetivos para medirla.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 5 Deporte_Antonio",
        "pregunta": "La 'predisposición del deportista' hacia el trabajo psicológico es irrelevante si las herramientas de evaluación están validadas científicamente.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 6 Deporte_Antonio",
        "pregunta": "Las estrategias incluyen un plan de acción, mientras que las técnicas son las herramientas para ejecutar ese plan.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 6 Deporte_Antonio",
        "pregunta": "Recordar experiencias pasadas de éxito para fortalecer la autoconfianza es una estrategia y no una técnica.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 6 Deporte_Antonio",
        "pregunta": "El establecimiento de objetivos y la práctica en imaginación son ejemplos de técnicas de intervención psicológica.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 6 Deporte_Antonio",
        "pregunta": "Para estimular la motivación básica, lo más conveniente suele ser establecer objetivos de realización muy alcanzables a corto plazo.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 6 Deporte_Antonio",
        "pregunta": "Para fortalecer la autoconfianza, es aconsejable establecer objetivos de realización que sean alcanzables a corto plazo.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 6 Deporte_Antonio",
        "pregunta": "Locke fue un investigador clave que impulsó el estudio sobre el establecimiento de objetivos en los años 60.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 6 Deporte_Antonio",
        "pregunta": "La técnica de establecimiento de objetivos está reservada exclusivamente para ser aplicada por el psicólogo, sin intervención del entrenador.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 6 Deporte_Antonio",
        "pregunta": "La cualidad más importante de los objetivos es que resulten atractivos y alcanzables para el deportista.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 6 Deporte_Antonio",
        "pregunta": "Los objetivos que resultan ser demasiado fáciles son los más potentes para alimentar la motivación a largo plazo.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 6 Deporte_Antonio",
        "pregunta": "Si un objetivo no es alcanzable, la motivación del deportista corre el riesgo de desvanecerse y transformarse en frustración.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 6 Deporte_Antonio",
        "pregunta": "El grado de dificultad de los objetivos es un elemento secundario que no influye en la eficacia de la técnica.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 6 Deporte_Antonio",
        "pregunta": "Para un deportista que sale de una lesión, lo más aconsejable es establecer objetivos que tengan una alta probabilidad de ser alcanzados.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 6 Deporte_Antonio",
        "pregunta": "Se recomienda establecer objetivos de alta dificultad a deportistas que están fracasando para que se esfuercen más.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 6 Deporte_Antonio",
        "pregunta": "El atractivo de un objetivo puede estar relacionado con el propio desafío, y no solo con el dinero o el prestigio social.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 6 Deporte_Antonio",
        "pregunta": "Para saber si un objetivo es alcanzable, basta con fijarse únicamente en los datos objetivos, ignorando la percepción del deportista.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 6 Deporte_Antonio",
        "pregunta": "El estado de 'falsa confianza' puede provocar que un deportista perciba como alcanzable un objetivo que objetivamente no lo es.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 6 Deporte_Antonio",
        "pregunta": "Si los datos sugieren que un objetivo es alcanzable pero el deportista no lo cree así, conviene fortalecer su autoconfianza con objetivos de menor dificultad.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 6 Deporte_Antonio",
        "pregunta": "Los objetivos de resultado se refieren a lo que el deportista hace o puede hacer (su propia conducta en el terreno).",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 6 Deporte_Antonio",
        "pregunta": "Los objetivos de realización se centran en la conducta que el deportista emplea, independientemente de la consecuencia.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 6 Deporte_Antonio",
        "pregunta": "Los objetivos de resultado intersujetos son aquellos por los cuales el deportista compite contra sí mismo y sus propias marcas.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 6 Deporte_Antonio",
        "pregunta": "Tratar de mejorar una marca personal de tiempo en una carrera se considera un objetivo de resultado intrasujeto.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 6 Deporte_Antonio",
        "pregunta": "Los objetivos de resultado son siempre perjudiciales, por lo que la psicología del deporte recomienda no usarlos.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 6 Deporte_Antonio",
        "pregunta": "Los objetivos de resultado contribuyen poderosamente a incrementar la motivación, pero pueden perjudicar si la autoconfianza es baja.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 6 Deporte_Antonio",
        "pregunta": "Los objetivos de realización favorecen que el deportista se centre en su propia conducta en lugar de especular improductivamente sobre los resultados.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 6 Deporte_Antonio",
        "pregunta": "Los objetivos de realización dificultan una evaluación sencilla y fiable del rendimiento por parte del entrenador.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 6 Deporte_Antonio",
        "pregunta": "Es altamente beneficioso que los deportistas tengan únicamente objetivos finales, sin establecer objetivos intermedios.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 6 Deporte_Antonio",
        "pregunta": "La consecución de objetivos intermedios fortalece la autoconfianza al servir de referencia de que se va por el buen camino.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 6 Deporte_Antonio",
        "pregunta": "Los objetivos intermedios progresivos deben ser exclusivamente objetivos de realización y nunca de resultado.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 6 Deporte_Antonio",
        "pregunta": "Lograr objetivos intermedios de realización puede proteger la autoconfianza aunque fallen los objetivos intermedios de resultado.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 6 Deporte_Antonio",
        "pregunta": "El objetivo intermedio más próximo se debe establecer sin tener en cuenta los objetivos finales a largo plazo.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 6 Deporte_Antonio",
        "pregunta": "Cuando la autoconfianza es débil, no se aconseja plantear objetivos de resultado a corto plazo.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 6 Deporte_Antonio",
        "pregunta": "Los objetivos a corto plazo deben ser muy abstractos para evitar generar presión extra en el deportista.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 6 Deporte_Antonio",
        "pregunta": "Antes de una sesión de entrenamiento, establecer objetivos inmediatos prioritarios contribuye a centrar la atención y aprovechar el tiempo.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 6 Deporte_Antonio",
        "pregunta": "La gran mayoría de los objetivos inmediatos en los entrenamientos deben ser objetivos de resultado.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 6 Deporte_Antonio",
        "pregunta": "En las competiciones, los objetivos inmediatos de realización ayudan al deportista a percibir un mayor control antes de empezar.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 6 Deporte_Antonio",
        "pregunta": "Añadir objetivos de resultado antes de competir nunca es útil para paliar un posible estado de baja activación.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 6 Deporte_Antonio",
        "pregunta": "En los deportes de equipo, los objetivos individuales y los colectivos deben mantener una conexión de interdependencia recíproca.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 6 Deporte_Antonio",
        "pregunta": "El psicólogo deportivo debe evitar sugerir objetivos individuales dentro de un equipo para no romper la cohesión.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 6 Deporte_Antonio",
        "pregunta": "Los objetivos de evitación, como 'no perder balones', suelen generar ansiedad y un estado mental negativo.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 6 Deporte_Antonio",
        "pregunta": "Se aconseja a los entrenadores transformar los objetivos de consecución en objetivos de evitación siempre que sea posible.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 6 Deporte_Antonio",
        "pregunta": "Los objetivos de realización concretos deben incluir no solo la conducta, sino también los estímulos antecedentes asociados a ella.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 6 Deporte_Antonio",
        "pregunta": "Los objetivos de resultado, al estar lejos en el tiempo, tienen que ser obligatoriamente muy concretos desde el primer día.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 6 Deporte_Antonio",
        "pregunta": "Plantearse 'jugar sin red' significa establecer un objetivo único y principal, asumiendo el riesgo de no tener alternativas.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 6 Deporte_Antonio",
        "pregunta": "Todos los deportistas sufren más ansiedad cuando juegan con objetivos alternativos en lugar de un objetivo único.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 6 Deporte_Antonio",
        "pregunta": "Un riesgo de los objetivos alternativos es que el deportista se conforme con ellos y no realice el esfuerzo necesario para los ambiciosos.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 6 Deporte_Antonio",
        "pregunta": "El planteamiento en tres niveles incluye un objetivo principal realista, un objetivo ideal y un objetivo de emergencia.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 6 Deporte_Antonio",
        "pregunta": "El objetivo de emergencia es una meta inalcanzable para que el deportista sueñe a largo plazo.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 6 Deporte_Antonio",
        "pregunta": "Solo el objetivo principal requiere asociarse con objetivos de realización; los ideales y de emergencia no lo precisan.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 6 Deporte_Antonio",
        "pregunta": "Haber fijado previamente un objetivo ideal previene que los deportistas se relajen una vez conseguido el objetivo principal.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 6 Deporte_Antonio",
        "pregunta": "El replanteamiento de un objetivo a la baja no requiere reajustar las expectativas del deportista.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 6 Deporte_Antonio",
        "pregunta": "La técnica del control de estímulos sirve para vincular (o debilitar) una conducta respecto a ciertos estímulos antecedentes o consecuentes.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 6 Deporte_Antonio",
        "pregunta": "Para debilitar un vínculo perjudicial se puede utilizar la técnica de 'detención del pensamiento' seguida de respiración profunda.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 6 Deporte_Antonio",
        "pregunta": "El control de estímulos es una técnica inútil cuando se pretende adquirir nuevas conductas táctico-estratégicas.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 6 Deporte_Antonio",
        "pregunta": "Para modificar una conducta muy consolidada por consecuencias positivas, hay que debilitar la contingencia o vincular esa gratificación a una nueva conducta.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 6 Deporte_Antonio",
        "pregunta": "El reforzamiento social, como el elogio del entrenador, no se considera un estímulo consecuente en la modificación de conducta.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 6 Deporte_Antonio",
        "pregunta": "El modelado es una técnica que se apoya en el aprendizaje vicario o aprendizaje por imitación de modelos.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 6 Deporte_Antonio",
        "pregunta": "Las características del modelo, como el sexo o la edad, no ejercen ninguna influencia sobre el aprendizaje del observador.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 6 Deporte_Antonio",
        "pregunta": "Un modelo competente es un deportista más cercano al nivel del observador que un modelo experto reconocido mundialmente.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 6 Deporte_Antonio",
        "pregunta": "Los modelos expertos son ideales para aprender habilidades motrices directas, ya que es más fácil identificarse con ellos que con los modelos competentes.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 6 Deporte_Antonio",
        "pregunta": "La observación de un modelo experto contribuye especialmente a estimular la motivación y ambición del observador.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 6 Deporte_Antonio",
        "pregunta": "Para aplicar el modelado, solo es lícito utilizar como ejemplos a deportistas que practiquen exactamente la misma disciplina.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 6 Deporte_Antonio",
        "pregunta": "El entrenador actúa con frecuencia como un modelo potencial que los deportistas observan e imitan de manera natural.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 6 Deporte_Antonio",
        "pregunta": "Si la conducta-objetivo que realiza el modelo es demasiado difícil, el observador dejará de atenderla.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 6 Deporte_Antonio",
        "pregunta": "Para que un video de modelado funcione, basta con proyectarlo, no hace falta que el entrenador guíe la atención del observador.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 6 Deporte_Antonio",
        "pregunta": "Si las consecuencias de la conducta-objetivo en el modelo son negativas, es menos probable que el observador la imite.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 6 Deporte_Antonio",
        "pregunta": "Cerca de una competición, los videos que provocan mucha motivación pueden generar una sobreactivación perjudicial en el deportista.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 6 Deporte_Antonio",
        "pregunta": "Cerca de una competición importante, los deportistas generalmente necesitan que se potencie más su motivación que su autoconfianza.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 6 Deporte_Antonio",
        "pregunta": "El aprendizaje vicario engloba fundamentalmente la observación y la posterior imitación de la conducta u estado psicológico.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 6 Deporte_Antonio",
        "pregunta": "La imitación de estados psicológicos no se puede producir mediante el aprendizaje vicario, únicamente la imitación de técnicas.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 6 Deporte_Antonio",
        "pregunta": "El aprendizaje vicario puede llegar a ser perjudicial si un líder del equipo muestra conformismo e influye negativamente en los compañeros.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 6 Deporte_Antonio",
        "pregunta": "Para controlar a un modelo perjudicial en un equipo, la negociación con el deportista para que aporte y no perjudique es la mejor estrategia.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 6 Deporte_Antonio",
        "pregunta": "Fomentar el grado de independencia de los deportistas-observadores dificulta la neutralización de la influencia de un modelo perjudicial.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 6 Deporte_Antonio",
        "pregunta": "Ante un modelo perjudicial en el equipo, la primera e inmediata opción recomendada es expulsarlo o prescindir de él.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 6 Deporte_Antonio",
        "pregunta": "Las técnicas para la toma de decisiones ayudan a los deportistas a afrontar de manera eficaz situaciones estresantes o problemas presentados.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 6 Deporte_Antonio",
        "pregunta": "El primer paso en la solución de problemas es centrarse en lo que no se puede controlar para intentar cambiar el terreno de juego.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 6 Deporte_Antonio",
        "pregunta": "La técnica de 'tormenta de ideas' es un paso de la solución de problemas cuyo fin es generar un número amplio de soluciones alternativas.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 6 Deporte_Antonio",
        "pregunta": "Al valorar las opciones en la solución de problemas, únicamente deben tomarse en cuenta los beneficios a corto plazo.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 6 Deporte_Antonio",
        "pregunta": "En la Matriz de Decisiones, los costes a corto plazo se pueden visualizar como un paso intermedio para lograr beneficios a largo plazo.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 6 Deporte_Antonio",
        "pregunta": "En el establecimiento de objetivos, los objetivos de realización se refieren exclusivamente a los títulos y medallas conseguidos.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 6 Deporte_Antonio",
        "pregunta": "Los objetivos de evitación se relacionan con intentar no realizar errores, como 'no perder balones'.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 6 Deporte_Antonio",
        "pregunta": "Una desventaja de 'jugar sin red' (objetivo único) es que puede aumentar la ansiedad si el deportista no fortalece antes su autoconfianza.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 6 Deporte_Antonio",
        "pregunta": "El replanteamiento de objetivos a la baja implica establecer metas superiores después de haber conseguido los objetivos iniciales.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 6 Deporte_Antonio",
        "pregunta": "La técnica de '¡STOP!' seguida de respiración es útil para debilitar la relación entre un pensamiento negativo y una conducta desadaptativa.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 6 Deporte_Antonio",
        "pregunta": "La técnica de Modelado requiere que el observador lea sobre el modelo en lugar de observarlo ejecutando la conducta.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 6 Deporte_Antonio",
        "pregunta": "En el uso de videos para el Modelado, las instrucciones y verbalizaciones del entrenador no son importantes si el video tiene buena calidad.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 6 Deporte_Antonio",
        "pregunta": "Las decisiones provisionales sobre alternativas en la solución de problemas deben analizarse respondiendo a si existen los recursos reales para viabilizarlas.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 6 Deporte_Antonio",
        "pregunta": "La 'tormenta de ideas' debe ser rechazada si el deportista tiene mucha confianza, ya que solo retrasará su primera intuición.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 6 Deporte_Antonio",
        "pregunta": "Establecer prioridades en el entrenamiento a veces se ve favorecido por la elaboración de una Matriz de Decisiones.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 6 Deporte_Antonio",
        "pregunta": "Tener expectativas irreales antes del inicio de una fase de establecimiento de objetivos previene totalmente la frustración.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 6 Deporte_Antonio",
        "pregunta": "Un objetivo de 'emergencia' es muy útil por si hay que replantear el objetivo principal a la baja ante la falta de resultados.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 6 Deporte_Antonio",
        "pregunta": "Un psicólogo puede emplear la 'tormenta de ideas' no solo para problemas tácticos, sino como técnica psicológica ante estrés externo.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 6 Deporte_Antonio",
        "pregunta": "En el contexto de la solución de problemas, aceptar los límites del terreno de juego significa que el psicólogo asume las reglas de arbitraje.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 6 Deporte_Antonio",
        "pregunta": "El objetivo final debe establecerse sin pensar en objetivos intermedios que acerquen a su consecución.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 6 Deporte_Antonio",
        "pregunta": "Para la solución de problemas, es necesario valorar las ventajas e inconvenientes comparando las distintas opciones disponibles.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 6 Deporte_Antonio",
        "pregunta": "Un modelo perjudicial dentro de un equipo, si no puede expulsarse o negociarse, requiere extinguir o castigar las conductas negativas del modelo.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 6 Deporte_Antonio",
        "pregunta": "Las conductas que son recompensadas (consecuencias positivas) resultan difíciles de modificar debido al condicionamiento.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 6 Deporte_Antonio",
        "pregunta": "Se considera irrelevante que los objetivos individuales satisfagan los intereses personales del deportista dentro del equipo.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 6 Deporte_Antonio",
        "pregunta": "Los objetivos de realización actúan como un mejor indicador del progreso del atleta frente a los objetivos de resultado exclusivo.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 6 Deporte_Antonio",
        "pregunta": "Los objetivos de evitación disminuyen la presión psicológica y siempre optimizan el rendimiento.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 6 Deporte_Antonio",
        "pregunta": "En el establecimiento de objetivos, se recomienda priorizar aquellos relacionados con el resultado a corto plazo cuando existe gran desconfianza.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 6 Deporte_Antonio",
        "pregunta": "Los deportistas con alta implicación valoran positivamente los retos donde el equilibrio entre coste y beneficio es percibido como justo o necesario.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 7 Deporte_Antonio",
        "pregunta": "Las técnicas de relajación solo pueden ser aplicadas por el psicólogo, nunca por el propio deportista.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 7 Deporte_Antonio",
        "pregunta": "El grado de profundidad o intensidad de la relajación depende de la habilidad del deportista y de los objetivos específicos que se persigan.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 7 Deporte_Antonio",
        "pregunta": "Uno de los objetivos específicos de las técnicas de relajación es reducir la sobreactivación para situarla en el nivel óptimo de rendimiento.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 7 Deporte_Antonio",
        "pregunta": "Las técnicas de relajación siempre tienen como único objetivo disminuir el nivel de activación el máximo posible, independientemente de la situación.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 7 Deporte_Antonio",
        "pregunta": "Las técnicas de relajación carecen de utilidad para facilitar el contracondicionamiento.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 7 Deporte_Antonio",
        "pregunta": "Cuando el objetivo de la relajación es lograr un contracondicionamiento, es imprescindible la presencia e intervención del psicólogo.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 7 Deporte_Antonio",
        "pregunta": "La Relajación Progresiva de Jacobson se basa en tensar y destensar alternativamente distintos grupos musculares.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 7 Deporte_Antonio",
        "pregunta": "En la Relajación Progresiva de Jacobson no es necesario que el deportista aprenda a discriminar entre las sensaciones de tensión y relajación.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 7 Deporte_Antonio",
        "pregunta": "La técnica de Jacobson utiliza la tensión inicial como punto de partida para lograr posteriormente la relajación.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 7 Deporte_Antonio",
        "pregunta": "La relajación progresiva solo permite modificar la activación de forma general, siendo inútil para relajar una parte concreta del cuerpo.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 7 Deporte_Antonio",
        "pregunta": "En el ejercicio de la Relajación Progresiva, el deportista inhala mientras tensa un grupo muscular específico.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 7 Deporte_Antonio",
        "pregunta": "El Entrenamiento Autógeno de Schultz toma como punto de partida y de referencia original a la hipnosis.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 7 Deporte_Antonio",
        "pregunta": "Una desventaja del Entrenamiento Autógeno frente a la Relajación Progresiva es que obliga a tensar grupos musculares, agravando posibles lesiones.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 7 Deporte_Antonio",
        "pregunta": "El Entrenamiento Autógeno se puede aplicar de forma inmediata y sencilla en la misma pista durante el escenario de la competición.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 7 Deporte_Antonio",
        "pregunta": "El Entrenamiento Autógeno de Schultz incluye ejercicios para generar sensaciones de pesadez y de calor en las extremidades.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 7 Deporte_Antonio",
        "pregunta": "La regulación cardíaca y respiratoria en el Entrenamiento Autógeno suelen ser, desde el primer día, los ejercicios más apreciados y rápidos de asimilar.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 7 Deporte_Antonio",
        "pregunta": "Los ejercicios de respiración son una estrategia sumamente compleja de aprender para controlar la activación fisiológica.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 7 Deporte_Antonio",
        "pregunta": "Los ejercicios de respiración se pueden emplear en combinación con otras técnicas como la Relajación Progresiva o el Entrenamiento Autógeno.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 7 Deporte_Antonio",
        "pregunta": "Ante situaciones estresantes que exigen un afrontamiento inmediato, está desaconsejado utilizar ejercicios de respiración en primer lugar.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 7 Deporte_Antonio",
        "pregunta": "La meditación y el yoga son consideradas las opciones más rápidas y prácticas para autorregular la activación en la cancha durante la competición.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 7 Deporte_Antonio",
        "pregunta": "La detención del pensamiento puede ser una técnica cognitiva útil que contribuya al control del nivel de activación.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 7 Deporte_Antonio",
        "pregunta": "Un efecto paradójico perjudicial al aplicar técnicas de relajación puede ser un incremento inesperado de la ansiedad en el deportista.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 7 Deporte_Antonio",
        "pregunta": "El miedo a perder el control durante un ejercicio de relajación ayuda a conseguir un estado de calma absoluta sin aumentar la activación.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 7 Deporte_Antonio",
        "pregunta": "Algunos deportistas con baja autoestima pueden sentir ansiedad y malestar si se les pide centrar la atención en sí mismos durante la relajación.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 7 Deporte_Antonio",
        "pregunta": "El entrenamiento en relajación debe ser obligatorio y preferentemente colectivo, sin importar la predisposición individual inicial del atleta.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 7 Deporte_Antonio",
        "pregunta": "Edmund Jacobson observó en 1932 que las personas al imaginar el uso de su cuerpo movían levemente los músculos implicados.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 7 Deporte_Antonio",
        "pregunta": "El procedimiento de la desensibilización sistemática de Wolpe es un ejemplo de técnica que utiliza la práctica en imaginación.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 7 Deporte_Antonio",
        "pregunta": "En la década de los 70, Richard Suinn utilizó la práctica en imaginación con esquiadores olímpicos para ensayar sus carreras.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 7 Deporte_Antonio",
        "pregunta": "La práctica en imaginación tiene la ventaja de poder sustituir completamente a la práctica motriz real de una habilidad deportiva.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 7 Deporte_Antonio",
        "pregunta": "Para que la práctica en imaginación de un movimiento sea de máxima utilidad, es muy conveniente que el deportista lo haya practicado previamente en vivo.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 7 Deporte_Antonio",
        "pregunta": "La práctica en imaginación también resulta de utilidad para el entrenamiento de la toma de decisiones tácticas y sus estímulos antecedentes.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 7 Deporte_Antonio",
        "pregunta": "La visualización está desaconsejada como herramienta para el entrenamiento previo de habilidades psicológicas (ej. detener el pensamiento).",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 7 Deporte_Antonio",
        "pregunta": "Es altamente aconsejable sobrecargar diariamente al deportista con ejercicios de imaginación para la repetición de destrezas ya consolidadas.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 7 Deporte_Antonio",
        "pregunta": "La práctica en imaginación puede usarse para que el deportista se exponga a situaciones críticas simuladas y ensaye cómo gestionarlas.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 7 Deporte_Antonio",
        "pregunta": "Para provocar contracondicionamiento mediante la práctica en imaginación, el deportista debe hacerlo obligatoriamente a solas sin el psicólogo.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 7 Deporte_Antonio",
        "pregunta": "Imaginar detalladamente las peores dificultades posibles a escasos minutos de iniciar la competición es lo más recomendado para mitigar el estrés.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 7 Deporte_Antonio",
        "pregunta": "Cuando la competición está inminente, el ensayo en imaginación debe limitarse preferentemente a repasar planes de actuación exitosos.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 7 Deporte_Antonio",
        "pregunta": "Los momentos inmediatos previos a competir pueden aprovecharse para que el deportista visualice y logre un control de su atención y activación.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 7 Deporte_Antonio",
        "pregunta": "La práctica en imaginación es inviable e incompatible con su uso durante los periodos de pausa de una competición real.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 7 Deporte_Antonio",
        "pregunta": "Tras finalizar la competición, la práctica en imaginación puede servir para ayudar a ordenar las imágenes de una actuación que no se recuerda bien.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 7 Deporte_Antonio",
        "pregunta": "Durante la recuperación de lesiones fisiológicas, la técnica de visualización está clínicamente contraindicada y prohibida en el deporte.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 7 Deporte_Antonio",
        "pregunta": "Un estado de relajación general previa ayuda notablemente al deportista a concentrarse en los ejercicios de imaginación.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 7 Deporte_Antonio",
        "pregunta": "Durante el calentamiento físico inmediato en la cancha, es vital inducir una relajación muy profunda antes de aplicar visualización rápida.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 7 Deporte_Antonio",
        "pregunta": "En una sesión dirigida por el psicólogo, se recomienda que este use instrucciones enérgicas al pedir al deportista que cambie rápidamente de escena mental.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 7 Deporte_Antonio",
        "pregunta": "El psicólogo siempre debe mantener el mismo tono de voz monótono, bajo y aburrido en todas las fases de una sesión en imaginación.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 7 Deporte_Antonio",
        "pregunta": "En las sesiones conjuntas de imaginación, se aconseja pactar un sistema de comunicación no verbal para que el deportista comunique sus experiencias (ej. levantar un dedo).",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 7 Deporte_Antonio",
        "pregunta": "Las sesiones de práctica en imaginación deben durar horas ininterrumpidas para poder consolidar firmemente la huella de la conducta técnica.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 7 Deporte_Antonio",
        "pregunta": "Se recomienda que cada serie o bloque de escenas en la práctica en imaginación no exceda aproximadamente el minuto de duración.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 7 Deporte_Antonio",
        "pregunta": "Para que la práctica en imaginación sea efectiva, solo se debe involucrar el sentido de la vista, aislando audición o propiocepción.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 7 Deporte_Antonio",
        "pregunta": "La perspectiva interna de visualización favorece que el deportista imagine las acciones desde la misma visión con la que competiría en vivo.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 7 Deporte_Antonio",
        "pregunta": "Se debe forzar al deportista a emplear siempre la perspectiva interna, incluso si afirma funcionar perfectamente con una perspectiva de tercera persona.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 7 Deporte_Antonio",
        "pregunta": "Los deportistas deben siempre imaginar las ejecuciones motrices a cámara lenta cuando su objetivo inminente es competir a velocidad real.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 7 Deporte_Antonio",
        "pregunta": "Las imágenes mentales que se salen de control y no responden a la intención del deportista pueden resultar seriamente perjudiciales.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 7 Deporte_Antonio",
        "pregunta": "Incluso si se simulan errores mediante la imaginación, se aconseja que el desenlace final del ejercicio sea positivo y muestre la corrección.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 7 Deporte_Antonio",
        "pregunta": "Los autodiálogos consisten en la comunicación interna del deportista con el objetivo de modular y dirigir sus estados psicológicos y conducta.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 7 Deporte_Antonio",
        "pregunta": "La técnica del autodiálogo se basa en forzarse a pensar frases positivas estereotipadas aunque el deportista perciba que carecen totalmente de credibilidad.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 7 Deporte_Antonio",
        "pregunta": "Una autoinstrucción es un tipo de autodiálogo en forma de orden concreta que señala la acción específica que se debe acometer.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 7 Deporte_Antonio",
        "pregunta": "Para garantizar la eficacia de los autodiálogos, es el psicólogo quien debe imponer la frase y su uso sin consultar previamente al deportista.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 7 Deporte_Antonio",
        "pregunta": "Es altamente beneficioso que el deportista comprenda el razonamiento psicológico que justifica el uso de un autodiálogo específico.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 7 Deporte_Antonio",
        "pregunta": "El entrenamiento de los autodiálogos solo se debe llevar a cabo directamente en la competición en vivo, descartando el uso de role-playing.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 7 Deporte_Antonio",
        "pregunta": "El 'Control de Respuestas Cognitivas' busca detectar autodiálogos destructivos para sustituirlos por formulaciones constructivas o neutras.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 7 Deporte_Antonio",
        "pregunta": "La técnica atencional de 'Atención-distracción' consiste en enfocar la mente en las exigencias deportivas para olvidar la sensación de fatiga o dolor.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 7 Deporte_Antonio",
        "pregunta": "En la técnica de 'Atención-atención', el atleta ignora completamente su propio agotamiento focalizándose únicamente en la multitud.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 7 Deporte_Antonio",
        "pregunta": "La 'Distracción-distracción' describe apartar la mente del desgaste deportivo y del dolor para centrarse en un estímulo externo (ej. una melodía).",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 7 Deporte_Antonio",
        "pregunta": "El propósito de la técnica de la Detención del Pensamiento es frenar cogniciones y rumiaciones que comprometen el rendimiento presente.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 7 Deporte_Antonio",
        "pregunta": "La Detención del Pensamiento pierde efectividad si se emplea un estímulo cortante y enérgico, siendo mejor usar susurros suaves y pasivos.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 7 Deporte_Antonio",
        "pregunta": "Dejar la mente completamente en blanco tras interrumpir un pensamiento negativo es el paso final que garantiza el éxito en la Detención del Pensamiento.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 7 Deporte_Antonio",
        "pregunta": "Una palabra clave empleada en la Detención del Pensamiento puede funcionar como interruptor e inmediatamente dar paso a una autoinstrucción de reenfoque.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 7 Deporte_Antonio",
        "pregunta": "Durante la adquisición de la Detención del Pensamiento, el deportista puede empezar pronunciando en voz alta las rumiaciones antes de aplicar el '¡Stop!'.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 7 Deporte_Antonio",
        "pregunta": "Las expectativas y creencias rígidas son cogniciones muy superficiales y conscientes que no afectan a cómo el deportista percibe la realidad.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 7 Deporte_Antonio",
        "pregunta": "Pensar 'soy un desastre' tras fallar un pase se considera una respuesta cognitiva en superficie originada ante un estímulo concreto.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 7 Deporte_Antonio",
        "pregunta": "Por regla general, los atletas son instantáneamente conscientes de las creencias rígidas y dogmáticas que rigen el fondo de su pensamiento negativo.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 7 Deporte_Antonio",
        "pregunta": "La evaluación de creencias subyacentes e irracionales representa una intervención introspectiva hacia la cual numerosos deportistas muestran rechazo o recelo.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 7 Deporte_Antonio",
        "pregunta": "Ante un deportista que se resiste a explorar su mundo interior más profundo, el psicólogo carece de opciones y no puede intervenir a nivel superficial.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 7 Deporte_Antonio",
        "pregunta": "La Terapia Racional Emotiva (Ellis) y la Terapia Cognitiva (Beck) han sentado las bases para la modificación de creencias irracionales en los deportistas.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 7 Deporte_Antonio",
        "pregunta": "Al intentar modificar expectativas disfuncionales, el rol del psicólogo es actuar con estilo altamente directivo e imponer su racionalidad absoluta.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 7 Deporte_Antonio",
        "pregunta": "El objetivo al modificar creencias rígidas no es adoctrinar, sino propiciar que el deportista cuestione, observe perspectivas y recabe pruebas reales.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 7 Deporte_Antonio",
        "pregunta": "En la intervención sobre cogniciones rígidas se deben evitar las preguntas abiertas, ya que provocan que el deportista se desvíe del diagnóstico del psicólogo.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 7 Deporte_Antonio",
        "pregunta": "Para contrastar la veracidad de una creencia, el psicólogo puede instar al deportista a solicitar retroalimentación directa a su propio entrenador.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 7 Deporte_Antonio",
        "pregunta": "El abordaje para modificar expectativas subyacentes requiere obligatoriamente que preexista una relación afianzada de mutua confianza psicólogo-deportista.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 7 Deporte_Antonio",
        "pregunta": "En el proceso de flexibilizar la mente del atleta, se le propone tratar sus esquemas interpretativos como hipótesis transitorias que requieren evaluación.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 7 Deporte_Antonio",
        "pregunta": "Si las evidencias confirman que una creencia catastrofista del deportista resulta ser totalmente objetiva, el psicólogo tiene que falsificar los datos para motivarlo.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 7 Deporte_Antonio",
        "pregunta": "En caso de corroborarse objetivamente una interpretación negativa real, la estrategia se redirige a paliar, soportar y gestionar eficazmente los daños previstos.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 7 Deporte_Antonio",
        "pregunta": "El abandono de una creencia rígida tras evidenciarse su inconsistencia lógica y empírica marca un hito de éxito en la intervención cognitiva profunda.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 7 Deporte_Antonio",
        "pregunta": "Durante la retención de la respiración en la relajación de Jacobson (aprox. 8 segundos), el foco atencional se dirige estrictamente al punto de tensión muscular máxima.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 7 Deporte_Antonio",
        "pregunta": "Para iniciar el Entrenamiento Autógeno de Schultz, la instrucción dicta comenzar indefectiblemente por la zona abdominal antes que brazos o piernas.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 7 Deporte_Antonio",
        "pregunta": "El entrenamiento en pautas de respiración se considera una de las alternativas más efectivas y de aprendizaje rápido debido a su gran relación coste-beneficio.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 7 Deporte_Antonio",
        "pregunta": "El empleo de técnicas de sugestión hipnótica facilita que el atleta se independice tempranamente y prescinda del auxilio del psicólogo en la competición.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 7 Deporte_Antonio",
        "pregunta": "Un motivo para sufrir efectos paradójicos ante la relajación es la aversión subyacente que experimentan algunos atletas a encontrarse a solas con sus propios pensamientos ansiosos.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 7 Deporte_Antonio",
        "pregunta": "Evocar mentalmente una pieza musical agradable o evadir la atención hacia imágenes de la naturaleza son estrategias cognitivas válidas para promover un estado de calma.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 7 Deporte_Antonio",
        "pregunta": "Las pautas de atención-distracción resultan de gran pertinencia en disciplinas deportivas que conllevan duración prolongada y acciones repetitivas.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 7 Deporte_Antonio",
        "pregunta": "El tiempo de latencia al aplicar el estímulo en la Detención del Pensamiento es intrascendente; el efecto positivo se produce igual si se responde lentamente.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 7 Deporte_Antonio",
        "pregunta": "Para la práctica asistida de la Detención del Pensamiento, el deportista mantiene los ojos cerrados y gesticula (ej. levantando el dedo) para avisar de la incursión del pensamiento no deseado.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 7 Deporte_Antonio",
        "pregunta": "Antes de trasladar los autodiálogos a la ejecución en vivo en la competición, es aconsejable validarlos exponiendo al atleta en sesiones de imaginación y entrenamiento rutinario.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 7 Deporte_Antonio",
        "pregunta": "Durante un período de interrupción competitiva (pausa reglamentaria), la técnica de visualización queda descartada de plano al agotar cognitivamente los limitados recursos atencionales.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 7 Deporte_Antonio",
        "pregunta": "Para deportistas impedidos temporalmente por lesiones articulares o musculares agudas, los métodos autógenos de Schultz son mucho más prudentes que la tensión inducida por el modelo de Jacobson.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 7 Deporte_Antonio",
        "pregunta": "La visualización carece de todo valor pragmático para autorregular las oscilaciones atencionales y somáticas cuando el deportista atraviesa momentos de pausa entre sus participaciones activas.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 7 Deporte_Antonio",
        "pregunta": "La herramienta denominada Matriz de Decisiones constituye el eje fundamental que sostiene y dirige el proceso secuencial de la relajación progresiva de Jacobson.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 7 Deporte_Antonio",
        "pregunta": "Al inducir y orientar una escena imaginaria, la voz del psicólogo debe mostrarse pausada y calmada para ayudar al deportista a introducirse armónicamente en el cuadro mental.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 7 Deporte_Antonio",
        "pregunta": "Inmediatamente después de clausurar la visualización imaginaria, psicólogo y deportista deben someterse a estricto silencio para no corromper ni tergiversar la huella mnémica de lo experimentado.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
     {
        "tema": "Tema 8 Deporte_Antonio",
        "pregunta": "La aplicación de las estrategias psicológicas en el área del entrenamiento corresponde exclusivamente al psicólogo, excluyendo a los entrenadores.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 8 Deporte_Antonio",
        "pregunta": "El psicólogo puede colaborar en la planificación del entrenamiento, incidiendo sobre todo en sus aspectos psicológicos.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 8 Deporte_Antonio",
        "pregunta": "Las necesidades del entrenamiento que se pueden atender mediante estrategias psicológicas abarcan áreas como la adherencia y la exposición a condiciones de competición.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 8 Deporte_Antonio",
        "pregunta": "Los planes de entrenamiento para periodos más largos suelen ser más concretos y específicos que los planes de sesiones diarias.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 8 Deporte_Antonio",
        "pregunta": "El primer paso del psicólogo en la planificación es observar las necesidades, posibilidades y riesgos psicológicos del plan deportivo.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 8 Deporte_Antonio",
        "pregunta": "Un riesgo psicológico a evaluar en la planificación es que la introducción de contenidos muy novedosos pueda generar inseguridad en los deportistas.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 8 Deporte_Antonio",
        "pregunta": "La carga psicológica del entrenamiento se relaciona fundamentalmente con tres variables: motivación, estrés y atención.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 8 Deporte_Antonio",
        "pregunta": "A mayor motivación, estrés y demanda atencional en los ejercicios, menor será la carga psicológica soportada por el deportista.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 8 Deporte_Antonio",
        "pregunta": "La evaluación del rendimiento en el entrenamiento, especialmente si incluye premios o penalizaciones, aumenta significativamente la carga mental.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 8 Deporte_Antonio",
        "pregunta": "La sobrecarga psicológica cualitativa se refiere a tener un número muy elevado de demandas sencillas y sin relevancia.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 8 Deporte_Antonio",
        "pregunta": "La sobrecarga psicológica 'productiva' puede ser beneficiosa si se gestiona bien, induciendo un esfuerzo mental que optimiza el rendimiento.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 8 Deporte_Antonio",
        "pregunta": "Es muy aconsejable incrementar drásticamente la carga psicológica inútil en los días inmediatamente previos a la competición.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 8 Deporte_Antonio",
        "pregunta": "El establecimiento de objetivos es una de las técnicas que mejor debe dominar el entrenador para enriquecer su planificación deportiva.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 8 Deporte_Antonio",
        "pregunta": "Es competencia principal del psicólogo deportivo seleccionar los contenidos físicos y tácticos del entrenamiento que mejor funcionen.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 8 Deporte_Antonio",
        "pregunta": "El psicólogo debe opinar sobre los contenidos del entrenamiento analizando si el momento o el tipo de demanda causará estrés o conformismo.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 8 Deporte_Antonio",
        "pregunta": "Al establecer prioridades en el entrenamiento, factores como el coste estimado o la incompatibilidad entre objetivos deben ser ignorados.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 8 Deporte_Antonio",
        "pregunta": "Al elegir entre varios contenidos de entrenamiento para un mismo objetivo, es aconsejable priorizar los que conlleven un menor coste en esfuerzo.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 8 Deporte_Antonio",
        "pregunta": "Anticipar dificultades en la planificación del entrenamiento disminuye la autoconfianza del deportista porque le genera miedo.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 8 Deporte_Antonio",
        "pregunta": "La adherencia al entrenamiento comprende no solo la asistencia, sino el cumplimiento de pautas como alimentación, descanso y fisioterapia.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 8 Deporte_Antonio",
        "pregunta": "El déficit de adherencia cualitativa ocurre cuando el deportista acude al entrenamiento pero no se esfuerza lo suficiente en él.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 8 Deporte_Antonio",
        "pregunta": "El exceso de adherencia (entrenar por cuenta propia quitando horas de descanso) siempre es un indicador saludable de compromiso que debe aplaudirse.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 8 Deporte_Antonio",
        "pregunta": "La falta de adherencia se mantiene a menudo porque proporciona al deportista una consecuencia gratificante mayor que la de ir a entrenar.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 8 Deporte_Antonio",
        "pregunta": "Las conductas de falta de adherencia no pueden adquirirse mediante aprendizaje vicario o imitación de compañeros.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 8 Deporte_Antonio",
        "pregunta": "Desarrollar la motivación básica es uno de los pilares más efectivos para potenciar y sostener la adherencia a largo plazo.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 8 Deporte_Antonio",
        "pregunta": "Los casos de exceso de adherencia obsesiva frecuentemente derivan de un estrés elevado y un intento del deportista por percibir control.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 8 Deporte_Antonio",
        "pregunta": "El reforzamiento social del entrenador a un jugador sobreentrenado ayuda a reducir rápida y eficazmente el síndrome de exceso de adherencia.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 8 Deporte_Antonio",
        "pregunta": "En el aprendizaje de habilidades, la 'ejecución' se relaciona con la técnica, mientras que la 'decisión' atañe al comportamiento táctico-estratégico.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 8 Deporte_Antonio",
        "pregunta": "Los deportistas experimentados siempre están predispuestos positivamente a sustituir habilidades técnicas fuertemente consolidadas por otras nuevas.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 8 Deporte_Antonio",
        "pregunta": "Las creencias rígidas negativas y la falta de autoconfianza pueden manifestarse como barreras que obstaculizan el aprendizaje técnico de un deportista.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 8 Deporte_Antonio",
        "pregunta": "Para eliminar una conducta técnica perjudicial, se deben fortalecer sus vínculos con estímulos antecedentes y mantener las gratificaciones que la acompañan.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 8 Deporte_Antonio",
        "pregunta": "Los estímulos antecedentes estables conforman el contexto general de la jugada, mientras que los variables determinan la decisión final a tomar.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 8 Deporte_Antonio",
        "pregunta": "Durante la fase temprana del aprendizaje de ejecución, la atención debe dirigirse prioritariamente a estímulos internos como sensaciones y movimientos.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 8 Deporte_Antonio",
        "pregunta": "En el aprendizaje de toma de decisiones, la atención del deportista jamás debe orientarse a los estímulos externos variables del entorno.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 8 Deporte_Antonio",
        "pregunta": "Para favorecer el aprendizaje de la ejecución técnica, es aconsejable evitar ejercicios competitivos que pongan el foco en el resultado.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 8 Deporte_Antonio",
        "pregunta": "Al iniciar el aprendizaje de una decisión táctica, el entrenador debe incluir de golpe todos los estímulos variables reales posibles para causar estrés.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 8 Deporte_Antonio",
        "pregunta": "Una técnica fundamental para el aprendizaje de habilidades es el establecimiento de objetivos centrados en la realización en lugar de objetivos de resultado.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 8 Deporte_Antonio",
        "pregunta": "El ensayo repetitivo en el entrenamiento comprende tanto conductas de puro esfuerzo físico como habilidades finas de precisión.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 8 Deporte_Antonio",
        "pregunta": "La rutina del ensayo repetitivo no requiere que el deportista aplique la atención ni la motivación, pues la tarea se adquiere por mero cansancio.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 8 Deporte_Antonio",
        "pregunta": "En los ejercicios de repetición de precisión (ej. tiros libres), registrar aciertos y errores incrementa la motivación y simula presión competitiva.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 8 Deporte_Antonio",
        "pregunta": "En las fases iniciales de aprendizaje, el uso intensivo de contingencias por resultados (premios/castigos) acelera la correcta ejecución motriz.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 8 Deporte_Antonio",
        "pregunta": "En la etapa de aprendizaje (a diferencia de la repetición masiva), es fundamental que el entrenador proporcione feedback descriptivo sobre la ejecución.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 8 Deporte_Antonio",
        "pregunta": "Las técnicas psicológicas aplicadas para motivar en el ensayo repetitivo mantienen su máxima eficacia aunque se usen abusivamente todos los días del año.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 8 Deporte_Antonio",
        "pregunta": "El uso de técnicas psicológicas para amenizar el ensayo repetitivo resulta más útil en periodos de monotonía y fatiga alejados del comienzo de temporada.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 8 Deporte_Antonio",
        "pregunta": "Es recomendable establecer ensayos repetitivos con alta competitividad y penalizaciones duras justo el día antes de la competición oficial principal.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 8 Deporte_Antonio",
        "pregunta": "Si se hacen ensayos repetitivos antes de competir, el entrenador debe aclarar que el objetivo es la puesta a punto y no juzgarse por el resultado obtenido.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 8 Deporte_Antonio",
        "pregunta": "Reproducir el 100% de las condiciones exactas de una competición oficial en un entrenamiento diario es una tarea sencilla y frecuente.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 8 Deporte_Antonio",
        "pregunta": "Ser un deportista muy competitivo es sinónimo absoluto de ser un buen competidor que gestiona perfectamente la presión en cualquier evento.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 8 Deporte_Antonio",
        "pregunta": "La exposición simulada a la competición ayuda al deportista a acostumbrarse a las situaciones estresantes y a aplicar la autorregulación.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 8 Deporte_Antonio",
        "pregunta": "Las normas y la actuación de jueces o árbitros son estímulos que se pueden incorporar en los entrenamientos para simular el estrés competitivo.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 8 Deporte_Antonio",
        "pregunta": "El trabajo de simulación con fuerte carga de estrés psicológico está especialmente recomendado la víspera de competiciones muy importantes.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 8 Deporte_Antonio",
        "pregunta": "Las competiciones oficiales de menor trascendencia no son útiles para exponer al deportista y ensayar habilidades de afrontamiento.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 8 Deporte_Antonio",
        "pregunta": "Para que una competición de menor importancia sirva como ensayo útil, es aconsejable que los deportistas tengan objetivos claros de realización.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 8 Deporte_Antonio",
        "pregunta": "Las 'competiciones-test' son especialmente recomendables en deportes que tienen muy pocas competiciones oficiales a lo largo del año.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 8 Deporte_Antonio",
        "pregunta": "En las competiciones-test, al carecer de puntos oficiales, el entrenador pierde el control sobre la elección de rivales o lugar de la prueba.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 8 Deporte_Antonio",
        "pregunta": "Los entrenamientos conjuntos con deportistas de otros equipos sirven para subir la motivación y ensayar con rivales sin la presión de un torneo oficial.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 8 Deporte_Antonio",
        "pregunta": "Una 'situación análoga' se caracteriza por ser un ejercicio prolongado de muy baja dificultad, diseñado para relajar muscularmente al deportista.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 8 Deporte_Antonio",
        "pregunta": "En las situaciones análogas, se debe buscar que el ejercicio sea difícil para provocar un alto nivel de estrés similar al de competición.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 8 Deporte_Antonio",
        "pregunta": "El ensayo repetitivo requiere un elevado dominio de técnicas psicológicas de autorregulación, mientras que las situaciones análogas no lo necesitan.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 8 Deporte_Antonio",
        "pregunta": "La exposición y ensayo en imaginación resulta más efectiva cuando se combina con la simulación real de la habilidad motriz.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 8 Deporte_Antonio",
        "pregunta": "Las situaciones análogas abarcan todo el espectro de exposición necesario y hacen innecesarios los entrenamientos conjuntos y las competiciones test.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 8 Deporte_Antonio",
        "pregunta": "La preparación específica para competiciones trascendentes consiste en utilizar los mejores recursos del equipo para rendir al máximo.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 8 Deporte_Antonio",
        "pregunta": "En las competiciones menores, el objetivo de la preparación específica puede priorizar la consolidación y evaluación de habilidades tácticas en lugar de ganar a toda costa.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 8 Deporte_Antonio",
        "pregunta": "La estrategia a seguir en competición debe decidirse ignorando las características de los rivales para no afectar la confianza del equipo propio.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 8 Deporte_Antonio",
        "pregunta": "Para exponer a los deportistas a las condiciones de la competición, es obligatorio provocar siempre reacciones emocionales intensas de pánico.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 8 Deporte_Antonio",
        "pregunta": "Si hay poco tiempo antes de la competición (ej. menos de tres días), no es recomendable exponer a los deportistas a las condiciones más estresantes de simulación.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 8 Deporte_Antonio",
        "pregunta": "La regla básica sobre el ensayo de planes de actuación es: mayor exposición a dificultades estresantes cuanto mayor sea la proximidad de la competición.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 8 Deporte_Antonio",
        "pregunta": "Ensayar planes muy novedosos a horas de la competición suele ser la mejor estrategia para incrementar de inmediato la autoconfianza del atleta.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 8 Deporte_Antonio",
        "pregunta": "La percepción de control y autoeficacia neutraliza las respuestas de temor y preocupación asociadas al entorno competitivo inminente.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 8 Deporte_Antonio",
        "pregunta": "Un elemento para fortalecer la autoconfianza colectiva es no definir el rol de ningún jugador hasta el mismo instante del pitido inicial.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 8 Deporte_Antonio",
        "pregunta": "Definir anticipadamente el papel que cada jugador tendrá en el equipo ayuda a fortalecer la autoconfianza de cara a la competición.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 8 Deporte_Antonio",
        "pregunta": "En partidos que se presuponen excesivamente fáciles, el entrenador puede beneficiarse provocando un estrés controlado para prevenir la relajación.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 8 Deporte_Antonio",
        "pregunta": "Estimular intencionalmente cierta inseguridad en el deportista resaltando las dificultades siempre produce sobreactivación catastrófica y está prohibido.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 8 Deporte_Antonio",
        "pregunta": "Si un jugador suplente carece de motivación por falta de interés en un torneo, establecer objetivos y darle titularidad puntual puede revivir su activación positiva.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 8 Deporte_Antonio",
        "pregunta": "Cuando el déficit de motivación surge por puro agotamiento psicológico, se deben aplicar medidas de descanso urgentes antes que proponer más retos desafiantes.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 8 Deporte_Antonio",
        "pregunta": "La evaluación del entrenamiento sirve exclusivamente para clasificar a los deportistas por volumen muscular, ignorando los aspectos psicológicos adquiridos.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 8 Deporte_Antonio",
        "pregunta": "La evaluación del entrenamiento puede valorar qué porcentaje de tiempo real se ha dedicado a cumplir con los apartados técnicos planificados inicialmente.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 8 Deporte_Antonio",
        "pregunta": "Los efectos del entrenamiento en el rendimiento también pueden ser medidos con base a las observaciones en competición oficial usando hojas de registro.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 8 Deporte_Antonio",
        "pregunta": "El nivel óptimo de activación durante las situaciones análogas garantiza un aumento automático de las habilidades motrices básicas sin intervención técnica previa.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 8 Deporte_Antonio",
        "pregunta": "En las competiciones-test, es aconsejable que los deportistas centren sus objetivos en el resultado final, dejando en un segundo plano los objetivos de realización.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 8 Deporte_Antonio",
        "pregunta": "Los entrenamientos conjuntos facilitan el aprendizaje vicario al poder observar estrategias, intensidades o conductas novedosas en jugadores de otros equipos.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 8 Deporte_Antonio",
        "pregunta": "Durante la etapa del ensayo repetitivo de habilidades de precisión, el feedback continuo sobre cada milímetro de técnica es preferible al foco en el resultado.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 8 Deporte_Antonio",
        "pregunta": "La simulación de la competición proporciona una excelente oportunidad para evaluar la eficacia de los planes atencionales del deportista en condiciones adversas.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 8 Deporte_Antonio",
        "pregunta": "La evaluación psicológica formativa que realiza el psicólogo sobre el programa de entrenamiento, no debe ser discutida jamás con el entrenador principal.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 8 Deporte_Antonio",
        "pregunta": "Al igual que con la carga física, la periodización de la carga psicológica implica otorgar tiempos de descanso mental para asimilar el esfuerzo atencional.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 8 Deporte_Antonio",
        "pregunta": "Exigir un desempeño perfecto en cada entrenamiento eleva la carga mental pudiendo generar un exceso que se transforme en estrés improductivo.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 8 Deporte_Antonio",
        "pregunta": "Los comportamientos del entrenador, como la corrección constante y gritos en un entrenamiento, tienen un nulo impacto en el aumento de la carga mental colectiva.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 8 Deporte_Antonio",
        "pregunta": "La selección de contenidos del entrenamiento en alto rendimiento jamás requiere adaptarse a la disponibilidad de tiempo, priorizando hacerlos todos simultáneamente.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 8 Deporte_Antonio",
        "pregunta": "La anticipación de dificultades técnicas o ambientales sirve para generar planes B que mitiguen el impacto emocional de las crisis imprevisibles.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 8 Deporte_Antonio",
        "pregunta": "Las conductas persistentes de evitación de ciertos ejercicios por un deportista deben ser analizadas para comprender los antecedentes y contingencias de esa adherencia negativa.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 8 Deporte_Antonio",
        "pregunta": "Los casos de falta de adherencia cualitativa suelen resolverse únicamente con el endurecimiento brutal de los castigos físicos sin ahondar en la motivación básica.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 8 Deporte_Antonio",
        "pregunta": "Implementar descansos regulados y formaciones en autocontrol temporal fomenta la desaparición sana de los excesos de adherencia patológicos.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 8 Deporte_Antonio",
        "pregunta": "En el aprendizaje táctico de toma de decisiones, la información visual sobre las posiciones de compañeros y rivales constituye los estímulos antecedentes clave.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 8 Deporte_Antonio",
        "pregunta": "Una técnica psicológica para agilizar la toma de decisión táctica consiste en incorporar multitud de estímulos irrelevantes simultáneos durante la primera fase de aprendizaje.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 8 Deporte_Antonio",
        "pregunta": "Las habilidades de precisión que ya se dominan técnica y físicamente, requieren gran esfuerzo atencional mantenido para que la repetición sea productiva.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 8 Deporte_Antonio",
        "pregunta": "Introducir juegos con penalizaciones lúdicas a fin de temporada durante los ensayos de repetición facilita que el deportista soporte mejor el aburrimiento.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 8 Deporte_Antonio",
        "pregunta": "Durante una situación análoga, el psicólogo induce estrés provocando ruidos ambientales muy fuertes, exigiendo al atleta aplicar su autorregulación simultáneamente.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 8 Deporte_Antonio",
        "pregunta": "Para la preparación de competiciones trascendentes, la mejor técnica para manejar el estrés de los novatos es la improvisación completa de las tácticas el día anterior.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 8 Deporte_Antonio",
        "pregunta": "Ayudar a que el equipo visualice un escenario 'trampa' donde podrían relajarse por exceso de confianza, sirve para estimular el estado de alerta necesario antes del partido.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 8 Deporte_Antonio",
        "pregunta": "La evaluación del entrenamiento mediante diseños intra-sujeto como los pre y post tests psicológicos carece de validez metodológica en el ámbito deportivo.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 8 Deporte_Antonio",
        "pregunta": "La técnica de anticipar dificultades antes de competir resulta beneficiosa siempre que no se enfoque el día previo en pensar exclusivamente sobre los escenarios catastróficos.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 9 Deporte_Antonio",
        "pregunta": "En el deporte de alto rendimiento, el funcionamiento psicológico es irrelevante si las condiciones físicas y tácticas son idénticas a las del rival.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 9 Deporte_Antonio",
        "pregunta": "El objetivo de la intervención psicológica en la competición es ayudar a optimizar el funcionamiento mental de los deportistas para que rindan al máximo.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 9 Deporte_Antonio",
        "pregunta": "Para funcionar bien psicológicamente en la competición, la motivación del deportista debe ser inmensamente alta e incontrolada.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 9 Deporte_Antonio",
        "pregunta": "La autoconfianza es una variable psicológica clave para neutralizar el estrés presente antes y durante la competición.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 9 Deporte_Antonio",
        "pregunta": "La motivación para competir depende tanto del interés por el resultado como de la percepción de disponer de recursos para afrontar el desafío.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 9 Deporte_Antonio",
        "pregunta": "Las necesidades psicológicas son exactamente las mismas para un deportista que compite sesenta veces al año que para uno que lo hace cinco veces.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 9 Deporte_Antonio",
        "pregunta": "La proximidad entre competiciones es un elemento crucial en el calendario para detectar necesidades psicológicas e intervenir apropiadamente.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 9 Deporte_Antonio",
        "pregunta": "Un calendario con muchas competiciones continuadas tiende a provocar habituación y altibajos en el nivel de activación de los deportistas.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 9 Deporte_Antonio",
        "pregunta": "Tras una competición trascendente, la activación se mantiene siempre en su grado máximo independientemente de si el siguiente evento es intrascendente.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 9 Deporte_Antonio",
        "pregunta": "El estudio riguroso del programa de competiciones ayuda a identificar con antelación los momentos de mayor riesgo de sobreactivación.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 9 Deporte_Antonio",
        "pregunta": "En cada uno de los periodos (pre, durante y post), el funcionamiento psicológico del deportista tiene exactamente las mismas necesidades inalterables.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 9 Deporte_Antonio",
        "pregunta": "El periodo 'pre' competición incluye el tiempo desde que finaliza el entrenamiento específico hasta el instante exacto de empezar a competir.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 9 Deporte_Antonio",
        "pregunta": "En el periodo previo a la competición está totalmente contraindicado realizar cualquier tipo de sesión de entrenamiento físico suave.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 9 Deporte_Antonio",
        "pregunta": "El periodo 'durante la competición' se divide exclusivamente en momentos de participación activa ininterrumpida, sin existir pausas o descansos en ningún deporte.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 9 Deporte_Antonio",
        "pregunta": "El periodo 'post' competición abarca la recuperación física y mental, además de la evaluación de lo sucedido en la prueba.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 9 Deporte_Antonio",
        "pregunta": "Es biológicamente imposible que el periodo 'post' de una competición se solape con el periodo 'pre' de la siguiente competición en un torneo.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 9 Deporte_Antonio",
        "pregunta": "El periodo 'pre' se divide en dos: hasta que el deportista emprende el último tramo a la competición, y desde ese tramo hasta el comienzo oficial.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 9 Deporte_Antonio",
        "pregunta": "En el primer subperiodo del periodo previo, el fortalecimiento de la autoconfianza es la variable psicológica más prioritaria.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 9 Deporte_Antonio",
        "pregunta": "El acondicionamiento físico, la puesta a punto técnica y el fortalecimiento de la autoconfianza son necesidades vitales en la fase previa a la competición.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 9 Deporte_Antonio",
        "pregunta": "La planificación de actividades en el periodo previo debe incluir actividades de ocio para distraer la atención y mantener bajo el nivel de activación.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 9 Deporte_Antonio",
        "pregunta": "La programación del tiempo en los días previos debe intentar evitar a toda costa reproducir los horarios del día de competición.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 9 Deporte_Antonio",
        "pregunta": "En su preparación mental previa, el deportista debe darle vueltas continuas e ininterrumpidas a lo que deberá hacer sin tener momentos de desconexión.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 9 Deporte_Antonio",
        "pregunta": "Los días previos a una competición de alto nivel son un escenario potencialmente estresante que dificulta el descanso y genera ansiedad.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 9 Deporte_Antonio",
        "pregunta": "Un exceso de hipermotivación en los días previos siempre resulta ventajoso y nunca genera una sobreactivación mental que produzca desgaste.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 9 Deporte_Antonio",
        "pregunta": "Para controlar el estrés y el exceso de motivación previa, es fundamental explorar y ajustar las expectativas de los deportistas a la realidad.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 9 Deporte_Antonio",
        "pregunta": "El empleo de técnicas de relajación o autodiálogos sirve para disminuir la activación producida por el estrés o hipermotivación en la fase precompetitiva.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 9 Deporte_Antonio",
        "pregunta": "Potenciar la autoconfianza es una de las estrategias principales para contrarrestar el estrés previo a competir.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 9 Deporte_Antonio",
        "pregunta": "El estrés natural inherente a una competición 'de ganar o morir' puede ser eliminado por completo sin dificultad si el psicólogo está presente.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 9 Deporte_Antonio",
        "pregunta": "Entrenar físicamente de forma intensa muy tarde en la noche previa a la competición facilita la rápida conciliación del sueño profundo.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 9 Deporte_Antonio",
        "pregunta": "Para combatir el insomnio previo a la prueba, la mejor indicación es que el deportista realice intentos activos, directos y desesperados por forzarse a dormir.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 9 Deporte_Antonio",
        "pregunta": "Realizar actividades estimulantes en la cama o repasar mentalmente la competición se consideran conductas incompatibles con conciliar el sueño.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 9 Deporte_Antonio",
        "pregunta": "Preocuparse y enfadarse consigo mismo por no poder dormirse genera un efecto paradójico que mantiene al deportista aún más despierto.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 9 Deporte_Antonio",
        "pregunta": "Mantener la mente ocupada mediante autoinstrucciones de relajación monótonas es una estrategia recomendada para favorecer el sueño precompetitivo.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 9 Deporte_Antonio",
        "pregunta": "Se considera imprescindible introducir habilidades técnicas novedosas y modificar gestos clave en el último entrenamiento el día previo a competir.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 9 Deporte_Antonio",
        "pregunta": "En las sesiones inmediatamente previas a la competición se desaconseja el uso de ejercicios competitivos duros que conlleven alta presión psicológica.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 9 Deporte_Antonio",
        "pregunta": "Si un deportista siente ansiedad precompetitiva, la solución universal es dejarle que sobreentrene por su cuenta sin supervisión para que se agote.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 9 Deporte_Antonio",
        "pregunta": "En el periodo previo a competir, el entrenador debe organizar reuniones larguísimas y repasar aspectos insignificantes para calmar a la plantilla.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 9 Deporte_Antonio",
        "pregunta": "Para la puesta a punto inmediata, el entrenador debe mostrarse tranquilo, centrado en lo prioritario y evitar introducir contenidos tácticos inéditos.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 9 Deporte_Antonio",
        "pregunta": "Los instantes de tensión de la pre-competición son el momento oportuno en el que el entrenador puede requerir y beneficiarse del apoyo del psicólogo.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 9 Deporte_Antonio",
        "pregunta": "El método propuesto para la preparación personal del deportista consta de: objetivos prioritarios, planes atencionales, anticipar dificultades y planes alternativos.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 9 Deporte_Antonio",
        "pregunta": "Los objetivos prioritarios fijados por el deportista en su preparación previa deben ser muy numerosos y centrarse en las variables fuera de su control.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 9 Deporte_Antonio",
        "pregunta": "En deportes de equipo como el baloncesto, los objetivos prioritarios prepartido pueden agruparse en categorías como ataque, defensa y autocontrol.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 9 Deporte_Antonio",
        "pregunta": "El diseño de planes atencionales exige la definición de estímulos concretos para que el deportista identifique fácilmente a qué atender.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 9 Deporte_Antonio",
        "pregunta": "En las horas previas al partido, es beneficioso que el deportista intente anticipar decenas de dificultades novedosas e improbables para curarse en salud.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 9 Deporte_Antonio",
        "pregunta": "La anticipación de dificultades en los instantes cercanos a la competición debe limitarse a problemas altamente probables o de relevancia crítica.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 9 Deporte_Antonio",
        "pregunta": "La preparación de planes alternativos ayuda al deportista cambiando el enfoque atencional en caso de que aparezcan las dificultades anticipadas.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 9 Deporte_Antonio",
        "pregunta": "El ensayo en imaginación de los planes alternativos antes de competir debe enfatizar mentalmente las imágenes de fracaso por encima del control de la situación.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 9 Deporte_Antonio",
        "pregunta": "Concluir la sesión de visualización precompetitiva imaginando sensaciones de disfrute o dominio favorece que el estado psicológico del deportista se torne positivo.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 9 Deporte_Antonio",
        "pregunta": "Para un deportista inseguro y sin percepción de control, forzarse a imaginar sensaciones positivas ilusorias arreglará su falta de autoconfianza al instante.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 9 Deporte_Antonio",
        "pregunta": "El recuerdo de experiencias de éxito en competiciones análogas pasadas es un factor potente para robustecer la autoconfianza precompetitiva.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 9 Deporte_Antonio",
        "pregunta": "El último tramo previo a la competición comienza formalmente cuando el árbitro da el pitido inicial del encuentro.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 9 Deporte_Antonio",
        "pregunta": "El objetivo en el último tramo previo a competir es llegar al inicio con la precisión física y la autorregulación psicológica en condiciones óptimas.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 9 Deporte_Antonio",
        "pregunta": "Las rutinas previas en el vestuario son irrelevantes y el deportista puede improvisar sus acciones precompetitivas en cada ocasión para no aburrirse.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 9 Deporte_Antonio",
        "pregunta": "Las rutinas precompetitivas jamás deben ser flexibles; si la hora del partido se retrasa por lluvia, el deportista no puede alterar el orden bajo ningún concepto.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 9 Deporte_Antonio",
        "pregunta": "Centrarse en las operaciones mecánicas de vestirse o vendarse puede ser una excelente estrategia rutinaria para evitar rumiaciones precompetitivas ansiosas.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 9 Deporte_Antonio",
        "pregunta": "En las competiciones individuales donde los deportistas comparten zonas de preparación, es innecesario adaptar las rutinas puesto que el rival no puede ejercer ninguna influencia.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 9 Deporte_Antonio",
        "pregunta": "A la hora de programar los tiempos del tramo final, lo más pragmático es retroceder paso a paso partiendo desde la hora oficial del inicio de la competición.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 9 Deporte_Antonio",
        "pregunta": "En los deportes de equipo, es indispensable coordinar las rutinas colectivas con las individuales de modo que no interfieran negativamente unas con otras.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 9 Deporte_Antonio",
        "pregunta": "Establecer normas sobre el comportamiento en los vestuarios pre-competición debe hacerse siempre de improviso (in situ) para sorprender favorablemente al grupo.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 9 Deporte_Antonio",
        "pregunta": "La participación y consenso de los deportistas en la elaboración de normas internas precompetitivas garantiza que las perciban como propias en lugar de impuestas.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 9 Deporte_Antonio",
        "pregunta": "Un deportista novato sin experiencia en entrenamiento psicológico posee el hábito instintivo perfecto para autoobservarse y autorregularse mediante rutinas de check-points.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 9 Deporte_Antonio",
        "pregunta": "Los 'check-points' del tramo precompetitivo son momentos de control específicos para que el deportista observe su activación y realice correcciones si son necesarias.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 9 Deporte_Antonio",
        "pregunta": "Es un hecho fisiológico que cuando la competición comienza activamente, el nivel de activación siempre aumentará drásticamente en comparación con el vestuario.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 9 Deporte_Antonio",
        "pregunta": "El objetivo al aplicar la autorregulación instantes antes de competir no es aniquilar toda la activación, sino adaptarla al umbral óptimo necesario.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 9 Deporte_Antonio",
        "pregunta": "Las técnicas de autorregulación empleadas a pie de campo o en vestuarios compartidos requieren ser ejecutadas con lentitud y de forma enormemente llamativa.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 9 Deporte_Antonio",
        "pregunta": "Muchos deportistas experimentados ya utilizan estrategias eficaces propias para gestionar su activación, sin que haga falta que el psicólogo les enseñe unas enteramente nuevas.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 9 Deporte_Antonio",
        "pregunta": "El control de la atención precompetitivo favorece la ejecución rigurosa de las rutinas y neutraliza el desarrollo de rumiaciones estresantes.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 9 Deporte_Antonio",
        "pregunta": "Al impartir la charla táctica previa, el entrenador debe bombardear a la plantilla con información nueva y abrumadora para poner a prueba su máxima atención.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 9 Deporte_Antonio",
        "pregunta": "Las directrices que recibe un deportista en la antesala inmediata a competir tienen mayor asimilación si son escasas, precisas y concisas.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 9 Deporte_Antonio",
        "pregunta": "Efectuar un repaso mental de los objetivos prioritarios antes de iniciar la prueba ayuda al deportista a fortalecer su sentido de control y minimizar dudas.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 9 Deporte_Antonio",
        "pregunta": "El repaso de objetivos prioritarios en el vestuario agota los recursos atencionales del jugador, dejándolo en desventaja cognitiva para comenzar el partido.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 9 Deporte_Antonio",
        "pregunta": "La programación precompetitiva puede usar el tiempo de ocio como una medida profiláctica que limite el ascenso desmedido de la activación nerviosa.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 9 Deporte_Antonio",
        "pregunta": "Si existe sospecha de baja activación patológica de un atleta antes de su competición, los ejercicios de relajación profunda son la primera intervención sugerida.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 9 Deporte_Antonio",
        "pregunta": "Con el objetivo de garantizar una alta concentración, el entrenador debe prohibir todo espacio de desconexión personal durante los tres días anteriores al campeonato.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 9 Deporte_Antonio",
        "pregunta": "Someter al deportista a la estrategia de aislamiento y repetición constante mental de sus obligaciones previene todo riesgo de estrés o agotamiento emocional.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 9 Deporte_Antonio",
        "pregunta": "El exceso de motivación en los prolegómenos puede llegar a agotar de forma prematura las reservas de energía psicológica necesarias para la propia competición.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 9 Deporte_Antonio",
        "pregunta": "Una técnica de detención del pensamiento puede ser invocada de urgencia si irrumpen imágenes de duda fatalistas antes de la hora oficial del encuentro.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 9 Deporte_Antonio",
        "pregunta": "La autoconfianza fortalecida minimiza el efecto pernicioso de los factores estresantes, facilitando un entorno preparatorio emocionalmente estable.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 9 Deporte_Antonio",
        "pregunta": "Es perjudicial pretender arreglar el insomnio previo a través del rumiar frustrado; se aconseja cambiar el foco de atención hacia pautas relajantes monótonas.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 9 Deporte_Antonio",
        "pregunta": "Los ensayos técnicos precompetitivos que incorporan contabilización estricta de aciertos fungen maravillosamente bien para consolidar la confianza de quien los falla.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 9 Deporte_Antonio",
        "pregunta": "Una posible manifestación colateral originada por la ansiedad no tratada durante los días precompetitivos es la vulnerabilidad ante la producción de lesiones o infecciones.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 9 Deporte_Antonio",
        "pregunta": "Cuando un entrenador impone innovaciones técnicas el último día, usualmente facilita una oleada de confort y autoeficacia entre sus pupilos.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 9 Deporte_Antonio",
        "pregunta": "El psicólogo tiene entre sus deberes el vigilar y promover que se respete la inactividad y desconexión programada dentro de la agenda precompetitiva del atleta.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 9 Deporte_Antonio",
        "pregunta": "Los deportistas sin un control apropiado de las rutinas tienden a improvisar, exponiéndose gratuitamente a interferencias antes del comienzo de su participación.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 9 Deporte_Antonio",
        "pregunta": "A nivel de planes de atención, identificar previamente los estímulos discriminativos del entorno previene la confusión general del atleta en mitad del partido.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 9 Deporte_Antonio",
        "pregunta": "Si surge una dificultad de última hora ajena al deportista, la anticipación y visualización del plan de contingencia oportuno atenúa la percepción de amenaza.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 9 Deporte_Antonio",
        "pregunta": "Es altamente recomendado enfocar los planes alternativos precompetitivos en analizar mentalmente y detallar cómo fracasaría uno por culpa de su propio funcionamiento.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 9 Deporte_Antonio",
        "pregunta": "Terminar la rutina de imaginación precompetitiva asociando imágenes de dominio de la pista promueve la fluidez y una disposición positiva favorable.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 9 Deporte_Antonio",
        "pregunta": "Si un jugador nota un nivel de activación bajo indeseable en su check-point final, la aplicación de autoinstrucciones activadoras aceleradas remedia el déficit.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 9 Deporte_Antonio",
        "pregunta": "Escuchar música de ritmos cadenciosos y bajos antes de salir al tatami está rigurosamente prohibido por todas las normativas internacionales de entrenamiento mental.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 9 Deporte_Antonio",
        "pregunta": "El nivel de activación del último check-point no requiere coincidir matemáticamente con el del ecuador de la competición, previendo su tendencia al reajuste al inicio.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 9 Deporte_Antonio",
        "pregunta": "Saturar al atleta con veinte objetivos prioritarios diferentes para cumplir en su prueba facilita su concentración y asimilación motora integral.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 9 Deporte_Antonio",
        "pregunta": "Seleccionar y agrupar objetivos realistas y manejables por áreas como técnica ofensiva o defensiva confiere organización e incrementa la confianza en la tarea.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 9 Deporte_Antonio",
        "pregunta": "El empleo de hojas de autorregistro para planificar el horario decreciente del día facilita que el deportista integre eficientemente los periodos de descanso en la previa.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 9 Deporte_Antonio",
        "pregunta": "Acudir al baño minutos previos al arranque para despejarse y autorregular en soledad es un ejemplo válido de hábito precompetitivo planificado.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 9 Deporte_Antonio",
        "pregunta": "Si llueve intensamente paralizando las rutinas temporales, un deportista carente de adaptación sufrirá incremento perjudicial en la vulnerabilidad al estrés.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 9 Deporte_Antonio",
        "pregunta": "Para la puesta a punto física el último día es preferible el desarrollo de tácticas ligeras a la sobrecarga que extenúa al deportista.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 9 Deporte_Antonio",
        "pregunta": "En las postrimerías del inicio, intentar recordar de urgencia todos los esquemas olvidados en los últimos seis meses constituye un plan mental salvador.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 9 Deporte_Antonio",
        "pregunta": "La anticipación y superación mental de la dificultad ambiental más probable sirve como un blindaje del atleta contra una inesperada y nociva sorpresa en la arena.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 9 Deporte_Antonio",
        "pregunta": "Al igual que con los planes alternativos, la visualización de la respuesta correctiva a una dificultad externa propicia mayor control atencional si esta llegara a ocurrir.",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 10 Deporte_Antonio",
        "pregunta": "En el deporte de alto rendimiento, el funcionamiento mental carece de importancia si el deportista tiene un buen nivel físico y táctico frente a sus rivales [1].",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 10 Deporte_Antonio",
        "pregunta": "El objetivo de la intervención psicológica en la competición es ayudar a optimizar el funcionamiento mental de los deportistas para que rindan al máximo [1].",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 10 Deporte_Antonio",
        "pregunta": "Para funcionar bien psicológicamente al competir, el deportista requiere una motivación alta pero controlada y una autoconfianza sólida [2].",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 10 Deporte_Antonio",
        "pregunta": "En los deportes colectivos, la cohesión de equipo es un factor psicológico irrelevante para neutralizar el estrés durante la competición [2].",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 10 Deporte_Antonio",
        "pregunta": "Las necesidades psicológicas de un deportista que compite sesenta veces al año son idénticas a las de uno que solo compite cinco veces [3].",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 10 Deporte_Antonio",
        "pregunta": "La proximidad entre competiciones en el calendario es un elemento crucial para detectar las necesidades psicológicas e intervenir correctamente [3].",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 10 Deporte_Antonio",
        "pregunta": "Un calendario con muchísimas competiciones continuadas suele provocar en los deportistas habituación y altibajos en su nivel de activación [4].",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 10 Deporte_Antonio",
        "pregunta": "El estudio adecuado del programa de competiciones ayuda a identificar con antelación los momentos de mayor riesgo de sobreactivación o baja activación [5].",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 10 Deporte_Antonio",
        "pregunta": "En cada uno de los períodos (pre, durante y post-competición), el funcionamiento psicológico del deportista presenta exactamente las mismas necesidades invariables [6].",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 10 Deporte_Antonio",
        "pregunta": "En el contexto 'durante la competición', se distinguen tres subperíodos: participación activa, pausas, y participación activa de intensidad menor [7, 8].",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 10 Deporte_Antonio",
        "pregunta": "Las carreras de velocidad son un ejemplo de deporte que alterna períodos de participación activa con constantes y prolongados periodos de pausa [7].",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 10 Deporte_Antonio",
        "pregunta": "Los períodos de pausa pueden darse cuando la actividad global se detiene o cuando un deportista en concreto no interviene activamente [8].",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 10 Deporte_Antonio",
        "pregunta": "Durante los periodos de participación activa de intensidad menor, los deportistas están libres de cualquier demanda deportiva o exigencia atencional [8].",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 10 Deporte_Antonio",
        "pregunta": "Los periodos de participación activa constituyen momentos decisivos donde los deportistas deben afrontar las demandas que decidirán el resultado [9].",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 10 Deporte_Antonio",
        "pregunta": "Las conductas posicionales y atencionales permiten al deportista estar en alerta frente a las acciones de sus rivales y otros estímulos discriminativos [9].",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 10 Deporte_Antonio",
        "pregunta": "Durante los periodos de participación activa, los deportistas disponen del tiempo suficiente para reflexionar conscientemente sobre sus decisiones [10].",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 10 Deporte_Antonio",
        "pregunta": "Un nivel de activación óptimo al comenzar la participación activa permite al deportista decidir y ejecutar con el mínimo esfuerzo mental consciente [11].",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 10 Deporte_Antonio",
        "pregunta": "El 'estado de fluidez' se caracteriza por una concentración absoluta en la tarea deportiva, percepción de dominio y funcionamiento automático [11].",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 10 Deporte_Antonio",
        "pregunta": "Las situaciones interferentes durante los periodos de participación activa provienen exclusivamente de circunstancias externas como los rivales o árbitros [12].",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 10 Deporte_Antonio",
        "pregunta": "Los errores cometidos por un deportista actúan a menudo como situaciones interferentes que aumentan su nivel de activación y distraen su atención [13].",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 10 Deporte_Antonio",
        "pregunta": "Una 'cadena de errores' se origina cuando el impacto de un primer error altera el funcionamiento psicológico propiciando nuevas equivocaciones [13].",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 10 Deporte_Antonio",
        "pregunta": "El entrenador jamás puede convertirse en una situación interferente durante los períodos de participación activa, incluso si da demasiadas instrucciones [13].",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 10 Deporte_Antonio",
        "pregunta": "La discrepancia entre el rendimiento que el deportista percibe y sus expectativas previas puede generar una situación interna altamente estresante [14].",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 10 Deporte_Antonio",
        "pregunta": "La escasez de tiempo restante para finalizar y la incertidumbre del resultado son variables que normalmente reducen por completo el estrés competitivo [15, 16].",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 10 Deporte_Antonio",
        "pregunta": "En deportes sin límite de tiempo definido, las situaciones de mayor estrés suelen producirse con el marcador igualado cerca del final del set o partido [16].",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 10 Deporte_Antonio",
        "pregunta": "Durante la participación activa es muy sencillo intervenir deteniendo la competición para que el deportista analice sus errores calmadamente con el psicólogo [16, 17].",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 10 Deporte_Antonio",
        "pregunta": "Muchos de los problemas surgidos en los periodos de participación activa deben ser corregidos cuando el deportista dispone de periodos de pausa o de intensidad menor [17].",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 10 Deporte_Antonio",
        "pregunta": "El condicionamiento clásico puede ser utilizado para vincular sensaciones de control y disfrute a estímulos presentes en el escenario competitivo [18].",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 10 Deporte_Antonio",
        "pregunta": "Utilizar una palabra clave como 'stop' al cometer un error es una estrategia que condiciona una respuesta rápida de reenfoque atencional [18, 19].",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 10 Deporte_Antonio",
        "pregunta": "Los periodos de pausa, si son mal utilizados, pueden facilitar que el deportista se involucre en actividades cognitivas negativas y perjudiciales [19].",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 10 Deporte_Antonio",
        "pregunta": "Durante las pausas de la competición, está contraindicado beber agua o atender molestias corporales porque rompe irrevocablemente la concentración [20].",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 10 Deporte_Antonio",
        "pregunta": "Evaluar en exceso el rendimiento previo de manera no constructiva es un error de funcionamiento muy común durante los periodos de pausa [21].",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 10 Deporte_Antonio",
        "pregunta": "Si un entrenador abruma a sus deportistas dando demasiadas instrucciones complejas en un periodo de pausa, está cometiendo un error metodológico [21].",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 10 Deporte_Antonio",
        "pregunta": "Una actividad productiva durante las pausas es centrarse fundamentalmente en las acciones futuras que aún se pueden controlar en el partido [22].",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 10 Deporte_Antonio",
        "pregunta": "Para los entrenadores, lo ideal en las pausas es priorizar la cantidad de directrices por encima de que sean claras y concisas [22, 23].",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 10 Deporte_Antonio",
        "pregunta": "La intervención psicológica en relación a las pausas incluye entrenar previamente a los deportistas para que sepan autoaplicar técnicas de autorregulación [24].",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 10 Deporte_Antonio",
        "pregunta": "Cuando una pausa es muy corta, lo más conveniente es que el deportista y el entrenador realicen un profundo análisis táctico sobre lo sucedido [25].",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 10 Deporte_Antonio",
        "pregunta": "Los autodiálogos durante los periodos de pausa sirven tanto para animarse como para controlar el estrés atencional y recuperar la concentración [26].",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 10 Deporte_Antonio",
        "pregunta": "Las técnicas de relajación durante las pausas son inútiles porque inducen un adormecimiento permanente que arruina el rendimiento posterior [27].",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 10 Deporte_Antonio",
        "pregunta": "En deportes como la gimnasia o los saltos, la práctica en imaginación puede emplearse durante los segundos de pausa justo antes de la ejecución [27].",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 10 Deporte_Antonio",
        "pregunta": "Los períodos de participación activa de intensidad menor son momentos mixtos donde se combinan menores exigencias deportivas con oportunidades de respiro [28].",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 10 Deporte_Antonio",
        "pregunta": "En los periodos de intensidad menor, el deportista está completamente a salvo de cualquier tipo de riesgo o interferencia atencional presente en las pausas [28].",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 10 Deporte_Antonio",
        "pregunta": "Un objetivo en los periodos de intensidad menor es identificar los estímulos discriminativos que alertan del comienzo de un periodo de intensidad plena [29, 30].",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 10 Deporte_Antonio",
        "pregunta": "Durante una etapa ciclista llana (intensidad menor), evaluar y regular conscientemente el nivel de activación es una estrategia productiva [30].",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 10 Deporte_Antonio",
        "pregunta": "Al terminar un periodo de intensidad menor, los deportistas disponen siempre de un periodo largo para activarse y volver progresivamente a la competición [30].",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 10 Deporte_Antonio",
        "pregunta": "La intervención psicológica post-competición debe desentenderse totalmente de los procesos de recuperación física por no ser competencia del psicólogo [31, 32].",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 10 Deporte_Antonio",
        "pregunta": "El psicólogo deportivo puede contribuir en el periodo post-competición fomentando la adherencia a las rutinas de masajes, fisioterapia y estiramientos [32].",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 10 Deporte_Antonio",
        "pregunta": "Para la relajación física post-competición se recomiendan intensos ejercicios de tensión-distensión muscular de Jacobson para aliviar el cansancio general [32].",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 10 Deporte_Antonio",
        "pregunta": "Al finalizar la prueba, los ejercicios que provocan sensaciones de pesadez y calor (método de Schultz) benefician la relajación sin añadir tensión extra [32].",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 10 Deporte_Antonio",
        "pregunta": "Las reacciones emocionales de la competición desaparecen automáticamente en el instante exacto en el que el deportista abandona la instalación deportiva [33].",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 10 Deporte_Antonio",
        "pregunta": "Si hay mucho tiempo hasta la siguiente prueba, otorgar un periodo de tregua permite al deportista experimentar y disipar sus emociones naturalmente [34].",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 10 Deporte_Antonio",
        "pregunta": "El concepto de 'éxito controlado' significa haber logrado el resultado deseado e identificar qué acciones propias propiciaron esa victoria para poder repetirlas [34].",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 10 Deporte_Antonio",
        "pregunta": "Un 'fracaso controlado' se da cuando, pese a perder, el deportista comprende las causas corregibles de su error y planifica cómo entrenarlas para el futuro [35].",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 10 Deporte_Antonio",
        "pregunta": "La mejor forma de curar el impacto emocional de un gran fracaso es forzar una nueva competición inmediata sin permitir tregua ni desconexión [36].",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 10 Deporte_Antonio",
        "pregunta": "Se considera que la recuperación psicológica es de carácter urgente cuando los deportistas deben competir nuevamente en un plazo muy breve [37].",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 10 Deporte_Antonio",
        "pregunta": "En procesos de recuperación urgente tras una victoria, es vital fomentar la máxima euforia posible para garantizar una actitud ganadora al día siguiente [38].",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 10 Deporte_Antonio",
        "pregunta": "Si el resultado previo fue muy doloroso y la siguiente prueba está muy próxima, es recomendable hacer solo un análisis muy breve para cerrar la etapa [39].",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 10 Deporte_Antonio",
        "pregunta": "En situaciones urgentes de recuperación, evitar la planificación de actividades distractivas ayuda a que el deportista mantenga su mente focalizada en el dolor [39].",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 10 Deporte_Antonio",
        "pregunta": "La estrategia del aplazamiento controlado de las emociones ayuda a los deportistas a desconectar rápidamente de los impactos sufridos en la prueba finalizada [40].",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 10 Deporte_Antonio",
        "pregunta": "El establecimiento de rutinas de transición, como evitar hablar obsesivamente de la competición finalizada, es ideal entre competiciones muy seguidas [41].",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 10 Deporte_Antonio",
        "pregunta": "Si un jugador compite en un torneo intensivo, debe aprovechar cada rueda de prensa entre partidos para recrearse extensamente en sus fallos del pasado [41].",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 10 Deporte_Antonio",
        "pregunta": "La consecución prematura de los objetivos finales en un campeonato incrementa de forma automática la ambición competitiva en los partidos que restan [42, 43].",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 10 Deporte_Antonio",
        "pregunta": "Alcanzar anticipadamente la meta principal del torneo puede propiciar que los deportistas bajen la guardia o se acomoden sin quererlo voluntariamente [43].",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 10 Deporte_Antonio",
        "pregunta": "Una intervención in situ para combatir el acomodamiento por éxito prematuro consiste en plantear nuevos retos desafiantes pero alcanzables [43].",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 10 Deporte_Antonio",
        "pregunta": "Para promover la motivación por un nuevo objetivo sobre la marcha, se deben exponer los beneficios pero ocultando siempre el coste del esfuerzo necesario [43, 44].",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 10 Deporte_Antonio",
        "pregunta": "La pérdida prematura del objetivo principal en un campeonato (ej. eliminación matemática) suele añadir frustración y mermar la autoconfianza colectiva [44].",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 10 Deporte_Antonio",
        "pregunta": "Anticipar la existencia de un segundo objetivo (ej. luchar por una posición menor) previene la adopción de actitudes conformistas ante la pérdida del objetivo inicial [45].",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 10 Deporte_Antonio",
        "pregunta": "En los deportes colectivos, la totalidad de los jugadores rinde mejor cuando saben que tienen 'objetivos alternativos' y nunca cuando sienten la presión de 'jugar sin red' [45].",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 10 Deporte_Antonio",
        "pregunta": "El enorme desgaste de las competiciones continuas puede favorecer un déficit de activación perjudicial cuando los deportistas encuentran el mínimo respiro [46].",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 10 Deporte_Antonio",
        "pregunta": "Alerta sobre el déficit de activación entre competiciones es perjudicial; se debe ocultar el riesgo para no generar ansiedad en los deportistas [47].",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 10 Deporte_Antonio",
        "pregunta": "Hablar de los 'partidos trampa' ayuda a combatir el exceso de confianza de un equipo al enfrentarse a un rival débil tras venir de una gran victoria [48].",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 10 Deporte_Antonio",
        "pregunta": "Tras un éxito previo importante, el entrenador debe fomentar activamente la relajación y el conformismo para proteger emocionalmente al grupo [49].",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 10 Deporte_Antonio",
        "pregunta": "La evaluación posterior a la competición debe limitar su enfoque al marcador numérico del resultado, desechando los objetivos de realización propuestos [49, 50].",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 10 Deporte_Antonio",
        "pregunta": "Uno de los fines de la evaluación post-competición es extraer conclusiones constructivas estableciendo una relación adecuada entre rendimiento y resultados [50, 51].",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 10 Deporte_Antonio",
        "pregunta": "A medida que la siguiente competición se encuentre más lejana, la evaluación sobre la competición finalizada podrá abarcar un contenido más amplio y profundo [51].",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 10 Deporte_Antonio",
        "pregunta": "Si una competición trascendente se jugará en apenas 48 horas, lo más pertinente es elaborar un análisis minucioso y crudo de todos los fallos cometidos [51, 52].",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 10 Deporte_Antonio",
        "pregunta": "Diferenciar el rendimiento del resultado al evaluar permite al deportista evitar el sesgo emocional que provoca un marcador desfavorable [52].",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 10 Deporte_Antonio",
        "pregunta": "La evaluación constructiva con el tiempo justo entre competiciones, contribuye al fortalecimiento de la autoconfianza enfatizando las habilidades dominadas [53, 54].",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 10 Deporte_Antonio",
        "pregunta": "Antes de una competición inminente, el psicólogo debe aplazar el análisis profundo de aquellas acciones mal ejecutadas que no se pueden corregir de inmediato [54].",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 10 Deporte_Antonio",
        "pregunta": "En las evaluaciones urgentes entre dos partidos, es de suma importancia centrarse primero en los recursos técnicos que el deportista todavía no domina [55].",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 10 Deporte_Antonio",
        "pregunta": "El uso de hojas de registro o evaluación ayuda a que muchos deportistas ordenen su percepción visualizando datos objetivos, fortaleciendo su percepción de control [55].",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 10 Deporte_Antonio",
        "pregunta": "Para todos los deportistas, resaltar visualmente los errores que escapan a su control en una planilla reduce mágicamente el nivel de ansiedad [55].",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 10 Deporte_Antonio",
        "pregunta": "El entrenador, cuando la siguiente competición se acerca, debe enfocar su evaluación a las causas especulativas y no tanto a las acciones deportivas concretas [56].",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 10 Deporte_Antonio",
        "pregunta": "Cuando se cuenta con suficiente tiempo entre competiciones, la evaluación se denomina 'en frío' porque permite reducir los sesgos provocados por el estado emocional [57].",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 10 Deporte_Antonio",
        "pregunta": "En las evaluaciones 'en frío', se deben desestimar los datos objetivos numéricos para priorizar exclusivamente las valoraciones subjetivas personales del deportista [58].",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 10 Deporte_Antonio",
        "pregunta": "Las evaluaciones de 'cierre', típicas del final de la temporada, deben contemplar de forma analítica tanto las conductas bien dominadas como aquellas deficitarias [59, 60].",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 10 Deporte_Antonio",
        "pregunta": "Al concluir la temporada, la evaluación de cierre prohíbe establecer relaciones lógicas entre las conductas de rendimiento del deportista y sus resultados en competición [60].",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 10 Deporte_Antonio",
        "pregunta": "Un cuestionario estructurado puede ser una excelente herramienta inicial durante la evaluación de cierre, sirviendo para guiar las entrevistas posteriores en profundidad [60].",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 10 Deporte_Antonio",
        "pregunta": "Las evaluaciones online están contraindicadas al final de la temporada, ya que el aislamiento geográfico del deportista anula por completo la utilidad de recabar información [61].",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 10 Deporte_Antonio",
        "pregunta": "Para asegurar la fiabilidad de la evaluación de cierre online, basta con imponerla de forma obligatoria, independientemente de que el deportista le encuentre o no utilidad [61].",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 10 Deporte_Antonio",
        "pregunta": "Para rendir al máximo en los periodos de participación activa, el nivel de activación del deportista es indiferente si el trabajo técnico-táctico en los entrenamientos fue impecable [2, 11].",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 10 Deporte_Antonio",
        "pregunta": "En deportes o especialidades de participación breve y continua como el levantamiento de pesas, la competición puede prescindir de los periodos prolongados de pausa [7].",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 10 Deporte_Antonio",
        "pregunta": "Las decisiones con toma de iniciativa propia así como las reacciones tácticas al movimiento del rival son demandas primordiales en los periodos de participación activa [9, 10].",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 10 Deporte_Antonio",
        "pregunta": "El 'estado de fluidez' garantiza que el deportista invierta un tiempo prolongado en dudar sobre las tácticas y asimilar conscientemente la mecánica de sus movimientos [11].",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 10 Deporte_Antonio",
        "pregunta": "Una 'cadena de errores' se origina si las interferencias desvían la atención provocando fallos encadenados e impulsivos en el intento de solucionarlo velozmente [13].",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 10 Deporte_Antonio",
        "pregunta": "Las interferencias subjetivas sobre el beneficio o el coste son irrelevantes, pues el deportista se concentra de igual manera independientemente de que el rival sea débil o duro [14].",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    },
    {
        "tema": "Tema 10 Deporte_Antonio",
        "pregunta": "El planteamiento previo de planes alternativos ayuda a mitigar las situaciones estresantes cuando el rendimiento actual del deportista no obedece a las previsiones teóricas [14, 15].",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 10 Deporte_Antonio",
        "pregunta": "Un objetivo de los ensayos con práctica en imaginación antes de la competición es condicionar rutinas y estados de activación positivos vinculados al escenario deportivo [17, 18].",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 10 Deporte_Antonio",
        "pregunta": "La falta de rutinas estructuradas en el periodo de pausa entre partes aumenta el riesgo de que el equipo se disperse atencionalmente y merme su rendimiento [21].",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 0
    },
    {
        "tema": "Tema 10 Deporte_Antonio",
        "pregunta": "En las competiciones donde abunden periodos de intensidad menor (ej: ciclismo de fondo), es perjudicial entrenar al deportista para aprovechar esas pausas con autodiálogos [26, 28].",
        "opciones": ["Verdadero", "Falso"],
        "correcta": 1
    }
    



];