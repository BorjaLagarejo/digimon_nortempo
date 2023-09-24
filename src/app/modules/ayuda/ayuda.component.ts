import { Component } from '@angular/core';

@Component({
    selector: 'app-ayuda',
    templateUrl: './ayuda.component.html',
    styleUrls: ['./ayuda.component.scss']
})
export class AyudaComponent {
    public faqCategorias = [
        {
            titulo: 'General',
            faqs: [
                {
                    pregunta: '¿Cómo funciona la tarjeta de información en la página de inicio?',
                    respuesta: 'La tarjeta de información en la página de inicio muestra detalles de un personaje de Digimon seleccionado aleatoriamente. Se actualiza automáticamente cada 15 segundos para mostrar un nuevo personaje.'
                },
                {
                    pregunta: '¿Cómo puedo buscar personajes de Digimon en la aplicación?',
                    respuesta: 'Para buscar personajes, ve a la página de búsqueda. Utiliza los filtros de nombre, atributos y nivel para refinar tu búsqueda y encuentra personajes que coincidan con tus criterios.'
                },
                {
                    pregunta: '¿Cómo puedo cambiar el número de resultados mostrados por página en la búsqueda?',
                    respuesta: 'En la página de búsqueda, verás una opción para seleccionar la cantidad de resultados por página. Puedes elegir entre 10, 25, 50 o 100 resultados por página.'
                },
                {
                    pregunta:
                        '¿Qué sucede si hay más resultados de búsqueda de los que se muestran en una sola página?',
                    respuesta: 'Si el número total de resultados excede la cantidad seleccionada por página, la aplicación proporcionará un sistema de paginación para que puedas acceder al resto de resultados.'
                },
                {
                    pregunta: '¿Cómo puedo ver más detalles de un personaje de Digimon en la página de búsqueda?',
                    respuesta: 'Haz clic en un resultado de la búsqueda para acceder a la página de detalle del personaje. Allí encontrarás información adicional, como imágenes, atributos, niveles y evoluciones.'
                },
                {
                    pregunta:
                        '¿Puedo volver a la página de búsqueda con los mismos filtros después de ver los detalles de un personaje?',
                    respuesta: 'Sí, hay una opción para volver a la página de búsqueda desde la página de detalle del personaje. Los filtros de búsqueda se mantendrán junto con la posición en la lista de resultados.'
                },
                {
                    pregunta: '¿Qué información puedo encontrar en la página de ayuda?',
                    respuesta: 'La página de ayuda actúa como un glosario y lista diferentes tipos de atributo, especie y nivel que puedes consultar a través del API. Incluye nombres, descripciones y, si está disponible, imágenes correspondientes.'
                },
                {
                    pregunta: '¿Cómo puedo navegar a diferentes partes de la aplicación?',
                    respuesta: 'En la parte superior de la aplicación, encontrarás un menú de navegación con enlaces directos a la página de inicio, la página de búsqueda y la página de ayuda.'
                }
            ]
        },
        {
            titulo: 'Pagina Inicio',
            faqs: [
                {
                    pregunta: '¿Cómo se elige el personaje que se muestra en la página de inicio?',
                    respuesta: 'El personaje se selecciona aleatoriamente y se muestra en la página de inicio. La tarjeta se actualiza cada 15 segundos para mostrar un nuevo personaje.'
                }
            ]
        },
        {
            titulo: 'Pagina Busqueda',
            faqs: [
                {
                    pregunta: '¿Cómo puedo buscar personajes en la página de búsqueda?',
                    respuesta: 'En la página de búsqueda, utiliza los filtros de nombre, atributos y nivel para buscar personajes de Digimon que coincidan con tus criterios.'
                },
                {
                    pregunta: '¿Cómo funciona el sistema de paginación en la búsqueda?',
                    respuesta: 'Si hay más resultados de búsqueda de los que se muestran en una sola página, la aplicación proporciona un sistema de paginación para acceder a más resultados.'
                },
                {
                    pregunta:
                        '¿Puedo volver a la página de búsqueda con los mismos filtros después de ver los detalles de un personaje?',
                    respuesta: 'Sí, desde la página de detalle de un personaje, puedes volver a la página de búsqueda manteniendo los filtros y la posición en la lista de resultados.'
                }
            ]
        },
        {
            titulo: 'Pagina Ayuda',
            faqs: [
                {
                    pregunta: '¿Qué información se encuentra en la página de ayuda?',
                    respuesta: 'La página de ayuda lista diferentes tipos de atributo, especie y nivel que puedes consultar a través del API. Incluye nombres, descripciones y, si está disponible, imágenes correspondientes.'
                }
            ]
        },
        {
            titulo: 'Navegacion',
            faqs: [
                {
                    pregunta: '¿Cómo puedo acceder a diferentes partes de la aplicación?',
                    respuesta: 'En la parte superior de la aplicación, encontrarás un menú de navegación que te permite acceder directamente a la página de inicio, la página de búsqueda y la página de ayuda.'
                }
            ]
        }
    ];

    /*
    -------------------------------------------------------------------
        CONSTRUCTOR
    -------------------------------------------------------------------
    */
    constructor() {}

    /*
    -------------------------------------------------------------------
        METODOS PUBLICOS
    -------------------------------------------------------------------
    */
}
