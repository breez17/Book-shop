import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as sortActions from "../Actions/Sort";
import Sort from "../components/Sorting/Sort";


const mapStateToProps = ({books}) => ({
    sortBy: books.sortBy,
});


const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(sortActions, dispatch)
});


export default connect(mapStateToProps, mapDispatchToProps)(Sort)

