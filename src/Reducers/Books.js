const initialState = {
    isReady:false,
    items: null,
    sortBy: 'all',
};

export default (state = initialState, action) => {

    switch(action.type) {

        case 'SET_BOOKS':
            return {
                ...state,
              items: action.payload,
                isReady: true,
            };
        case 'SET_IS_READY':
            return {
                ...state,
                isReady: action.payload
            };
        case 'SET_SORT':
            return {
                ...state,
                sortBy: action.payload,
            };
                default:
                    return state;

    }

}