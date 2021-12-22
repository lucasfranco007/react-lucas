const productsMock = () => [
    {
        id: 0, category: "buzos", title: "Buzo Nike Jordan Jumpman De Hombre", price: "10.999",
        pictureUrl: "https://sporting.vteximg.com.br/arquivos/ids/277671-1500-1500/4AV3145-010-1.jpg?v=637559193916900000",
        stock: 5, initialValue: 1, description: `
        Sos un fanático de Jordan y este buzo lo demuestra a la perfección.

- Capucha con cordón de ajuste visible.
- Bolsillo canguro.
- Cintura y puños elásticos.
- Logo Jordan estampado.
- Con friza.
- Material: 80% Algodón, 20% Poliéster
        `
    },
    {
        id: 1, category: "buzos", title: "Buzo Puma Essentials Logo De Mujer ", price: "7.599",
        pictureUrl: "https://sporting.vteximg.com.br/arquivos/ids/370531-1000-1000/1086874-001-1.jpg?v=637677494036570000",
        stock: 5, initialValue: 1, description: `De inspiración urbana y sencilla, esta sudadera con capucha con estilo luce un femenino corte largo. Con sus líneas clásicas y sencillas, y su vistoso logotipo de la marca, no pasará desapercibida.
        Contiene material reciclado: Producto hecho con fibras recicladas. Una de las soluciones de PUMA para reducir el impacto ambiental
        
        - Corte holgado
        - Diseño de talle largo
        - Capucha forrada en tejido de punto con cordón regulable, para un ajuste personalizado
        - Bolsillo canguro
        - Dobladillo y puños acanalados
        - Logotipo PUMA N.º 1 en el pecho
        - Composición
        - Forro De La Capucha: 100% Algodón
        - Acanalado: 98% Algodón, 2% Elastano
        - Exterior: 68% Algodón, 32% Poliéster
        `
    },
    {
        id: 2, category: "buzos", title: "Buzo adidas Essentials Unisex", price: "9.449",
        pictureUrl: "https://sporting.vteximg.com.br/arquivos/ids/436106-1000-1000/6H14657-000-1.jpg?v=637750879884900000",
        stock: 5, initialValue: 1, description: `UN BUZO CON CAPUCHA CON UN LLAMATIVO ESTILO DEPORTIVO

        Este buzo con capucha de adidas te garantiza comodidad y cobertura todos los días de la semana. Su tejido de felpa francesa es suave al tacto y el corte holgado te permite moverte con total libertad. El cordón de ajuste de la capucha te permite ajustarlo a tu medida si el tiempo empeora.
        
        -Nuestro modelo usa el talle M, mide 186 cm, tiene un pecho de 98 cm y una cintura de 75 cm. Nuestra modelo usa el talle M, mide 177 cm, tiene un pecho de 84 cm y una cintura 70 cm.
        -Corte holgado
        -Capucha con cordón de ajuste
        -Felpa francesa 53 % algodón, 36 % poliéster reciclado, 11 % viscosa
        -Bolsillo canguro
        -Puños y dobladillo acanalados
        -Better Cotton Initiative
        -Color del artículo: Orbit Violet / White-
        `


    },
    {
        id: 3, category: "buzos", title: "Buzo Puma Canguro Manchester City Ftblculture de Hombre", price: "10.899",
        pictureUrl: "https://sporting.vteximg.com.br/arquivos/ids/383245-1500-1500/1064516-012-1.jpg?v=637701638703800000",
        stock: 5, initialValue: 1, description: `Una colección en la sección transversal del fútbol y el estilo de vida, FtblCulture es deportiva, pero lo suficientemente elegante para el uso diario. Usando gráficos inspirados en la colección oficial de ropa de esta temporada, PUMA celebra la modernidad con un nuevo look, una nueva actitud y nuevas reglas. Rebosante del espíritu del Manchester City, con bloques de colores geniales, mangas llamativas y una silueta sofisticada, este buzo es imprescindible para los seguidores serios.

        CARACTERÍSTICAS Y BENEFICIOS
        -Al comprar productos de algodón de PUMA, está apoyando un cultivo de algodón más sostenible. Obtenga más información en PUMA.COM/FOREVERBETTER
        
        DETALLES
        -Ajuste regular
        -Capucha con cordones ajustables para una comodidad personalizada
        -Bolsillo canguro en la parte delantera
        -Ribete elástico en puños y dobladillo
        -Gráfico inspirado en la ropa a juego en la parte delantera
        -Patrones geométricos en las mangas
        -Logotipo oficial del club Manchester City en el lado izquierdo del pecho
        -Logotipo de PUMA No. 1 en el lado derecho del pecho
        `
    },
    {
        id: 4, category: "buzos", title: "Buzo Fila Hoodie FBox de Hombre", price: "4.490",
        pictureUrl: "https://sporting.vteximg.com.br/arquivos/ids/207284-1500-1500/9509565-168-01.jpg?v=637276540359400000",
        stock: 5, initialValue: 1, description: `Capucha con cordon de ajuste
        Bolsillos frontales
        `
    },
    {
        id: 5, category: "remeras", title: "Remera adidas Women X De Mujer", price: "6.499",
        pictureUrl: "https://sporting.vteximg.com.br/arquivos/ids/391461-1500-1500/6GD9018-000-1.jpg?v=637705067902530000",
        stock: 5, initialValue: 1, description: `Dejate contagiar por la energía tropical de esta remera corta adidas. Parte de una colaboración con la marca brasilera FARM RIO, luce estampados coloridos que le inyectan la alegría de Brasil a tu día. Está hecha con materiales reciclados, un paso más en el camino hacia un mundo más sostenible.

        -Corte holgado
        -Cuello redondo
        -Tejido de punto jersey 100 % poliéster reciclado
        -Remera corta
        -Estampdo adidas x FARM Rio
        -Este producto fue hecho con Primegreen, una serie de materiales reciclados de alto desempeño, sin usar poliéster virgen.
        -Color del artículo: Royal Blue / White
        `
    },
    {
        id: 6, category: "remeras", title: "Remera Puma BMW MMS De Hombre ", price: "5.499",
        pictureUrl: "https://sporting.vteximg.com.br/arquivos/ids/442615-1000-1000/1031196-001-1.jpg?v=637756201646700000",
        stock: 5, initialValue: 1, description: `Inspirada en la innovación del mundo del automovilismo, la camiseta BMW M Motorsport Logo Graphic confeccionada en material de algodón BCI sostenible tiene un cuello redondo y un gráfico con un automóvil BMW MMS en la parte delantera para los mayores entusiastas de la marca.

        -Al comprar productos de algodón de la marca PUMA, está apoyando la producción sostenible de algodón. Obtenga más información en https://about.puma.com/en/forever-better
        -cuello redondo
        -Estampado gráfico cuadrado con el automóvil BMW M Motorsport en colores /// M en la parte delantera
        -Hélice de BMW y logotipo de BMW M Motorsport en la manga izquierda
        -Logotipo de PUMA en la manga derecha
        `
    },
    {
        id: 7, category: "remeras", title: "Remera Topper Esencia De Hombre ", price: "2.680",
        pictureUrl: "https://sporting.vteximg.com.br/arquivos/ids/443674-1000-1000/2164604-000-1.jpg?v=637757273606400000",
        stock: 5, initialValue: 1, description: `Completa tu look diario con esta remera Topper Esencia

        -Material: Algodón
        -Logo de la marca
        -Cuello: Redondo
        -Manga: Corta
        -Calce: Regular
        
        
        `
    },
    {
        id: 8, category: "remeras", title: "Remera Nike Jordan de Hombre", price: "5.999",
        pictureUrl: "https://sporting.vteximg.com.br/arquivos/ids/218360-1000-1000/4cj6304-010-1.jpg?v=637442360256400000",
        stock: 4, initialValue: 1, description: `
        La playera Jordan está confeccionada con tela de algodón ligera y suave con la foto del icónico Michael Jordan que inspiró el diseño entallado Jumpman.`
    },




// A FUTURO SE CONTINUA CON EL STOCK DE PRODUCTOS  "PANTALONES Y ZAPATILLAS" ////
///                                                                          ///




]

export default productsMock;