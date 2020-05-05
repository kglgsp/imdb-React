
  export function removeCard(items, imdbID) {
    return {
        type: "DELETE_DATA",
        payload: {
            items: items.filter((items) => items.imdbID !== imdbID)
        }
    }
  }

  export function searchQuery(value, API_KEY) {

    return function(dispatch) {
        return fetch(`https://www.omdbapi.com/?s=${value}&apikey=${API_KEY}`)
        .then(res => res.json())  
        .then(
        (result) => {
            console.log(result)
            dispatch({
                type: "GET_DATA",
                payload: {
                    isLoaded: true,
                    items: result.Search
                }
            })

        },
        
        ).catch((error) => {
            dispatch({
            type: "ERROR",
            payload: {
                isLoaded: false,
                error: error
            }
        })})
    }
  }