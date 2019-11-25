import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as booksActions from "../Actions/Books";
import App from '../components/App'
import orderBy from 'lodash/orderBy'
import {setSearchQuery} from "../Actions/Sort";


    const filterBy = (books, filterBy) => {

    switch (filterBy) {
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

const filterBooks = (books, searchQuery) =>
    books.filter(
        o => o.title.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0 ||
        o.author.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0,
);

const searchBooks = (books, sortBy, searchQuery) => {
    return filterBy(filterBooks(books, searchQuery), sortBy)
};

const mapStateToProps = ({books, sort}) => ({

    books: books.items && searchBooks(books.items, sort.sortBy, sort.searchQuery),
    isReady: books.isReady,
});


const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(booksActions, dispatch),

});

export default connect(mapStateToProps, mapDispatchToProps)(App)