import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as booksActions from "../Actions/Books";
import App from '../components/App'
import orderBy from 'lodash/orderBy'

const filterBy = (books, sortBy) => {
    switch (sortBy) {
        case 'all':
            return books;
        case 'price_high':
            return orderBy(books, 'price', 'desc');
        case 'price_low':
            return orderBy(books, 'price', 'asc');
        case 'author':
            return orderBy(books, 'author', 'asc');
        default:
            return books;
    }
};

const mapStateToProps = ({books}) => ({

    books: filterBy(books.items, books.sortBy),
    isReady: books.isReady,
});


const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(booksActions, dispatch),

});

export default connect(mapStateToProps, mapDispatchToProps)(App)