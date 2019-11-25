import React, {Component} from 'react';
import {Container} from 'semantic-ui-react'
import axios from 'axios'
import BookCard from "./bookCard/BookCard";
import NavMenu from "./Menu/Menu";
import {Card} from "semantic-ui-react";
import Sort from "../containers/Sort"



class App extends Component {

    constructor(state) {
        super(state);
        const {setBooks} = this.props;
        axios.get('/books.json').then(({data}) => {
            setBooks(data);
        });
    }

    render() {
        const {books, isReady, setSort} = this.props;
        return (
            <Container>
                    <NavMenu/>
                    <Sort setSort={setSort}/>
                    <Card.Group itemsPerRow={4}>
                    {! isReady ? 'Загрузка...' : books.map((book, index) => (
                      <BookCard key={index} {...book} />
                    ))}
                    </Card.Group>
            </Container>

        );
    }

}



export default App;