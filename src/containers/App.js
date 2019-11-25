import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as booksActions from "../Actions/Books";
import * as sortActions from "../Actions/Sort";
import App from '../components/App'

const mapStateToProps = ({books}) => ({
    books: books.items,
    isReady: books.isReady,
});


const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(booksActions, dispatch),
    ...bindActionCreators(sortActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(App)