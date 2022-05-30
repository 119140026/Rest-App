
export const GET_LIST = 'GET_LIST'
export const GET_DETAIL ='GET_DETAIL'

export const fetchList = () => {
    try {
        return async dispatch => {
            const result = await fetch('https://restaurant-api.dicoding.dev/list', {
                'method': 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            const json = await result.json();
            if (json) {
                dispatch({
                    type: GET_LIST,
                    payload: json
                });
            } else {
                console.log('Unable to fetch!');
            }

        }
    } catch (error) {
        console.log(error);
    }
}

export const fetchDetail = (id) => {
    try {
        return async dispatch => {
            const result = await fetch('https://restaurant-api.dicoding.dev/detail/' + id, {
                'method': 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            const json = await result.json();
            if (json) {
                dispatch({
                    type: GET_DETAIL,
                    payload: json
                });
            } else {
                console.log('Unable to fetch!');
            }

        }
    } catch (error) {
        console.log(error);
    }
}


