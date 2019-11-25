const initialState = {
    sortBy: 'all',
    searchQuery: '',
};

export default (state = initialState, action) => {

    switch(action.type) {
        case 'SET_SORT':
            return {
                ...state,
                sortBy: action.payload,
            };

            case 'SET_QUERY':
            return {
                ...state,
               searchQuery: action.payload,
            };
        default:
            return state;

    }

}