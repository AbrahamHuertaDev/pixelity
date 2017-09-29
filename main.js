const PixelityBrain = require('./brain');

const sentences = [
    {
        ask: '¿Por qué flotan las nubes si el agua pesa más que el aire?',
        answer: 'Las nubes están formadas por partículas de agua o cristales de hielo demasiado pequeñas para ser afectadas por la fuerza de gravedad y el aire ascendente se encarga de empujarlas haia arriba hasta que muchas partículas se unen y pesan lo suficiente para caer.'
    },
    {
        ask: '¿Por qué el hielo de los glaciares se ve azul?',
        answer: 'La luz blanca se descompone en varias longitudes de onda que el ojo humano percibe como colores. El hielo comprimido de los glaciares absorbe la longitud de onda que corresponde al color rojo, que es larga, y el color azul, con una longitud corta, es el que se transmite y dispersa.'
    }
];

const brain = new PixelityBrain(sentences)

brain.enableVerbose(false).setMinPercentage(60).train('las nubes estan flotando sabes por que?');

console.log(brain.getSentence().answer)
