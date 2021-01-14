export default function stockInfoReducer(state, action){
    switch(action.type){
        case 'API_FETCH_INIT':
            return {
                ...state,
                isLoading: true,
                isError: false,
            }
        case 'API_FETCH_SUCCESS':
            console.log(`this is the payload ${JSON.stringify(action.payload)}`)
         
            return {
                ...state,
                ...action.payload,
                isLoading: false,
                isError: false,
        
            }
        case 'API_FETCH_FAILURE':
            return {
                ...state,
                isLoading: false,
                isError: true,
            }

            

        default:
            throw new Error();
    }

    }
    
