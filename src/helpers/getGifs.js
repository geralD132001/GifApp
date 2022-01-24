
export const getGifs = async ( categoria ) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( categoria ) }&limit=13&api_key=xL0zlaS0eDCSYLpWoK6ZgEkb16CBFyCU`;
    const rpta = await fetch(url);
    const { data } = await rpta.json();

    const gifs = data.map(img => {

        return {

            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url

        }
    })

    console.log( gifs );

    return gifs;
    // Regresa una promesa con la coleccion de las imagenes
}