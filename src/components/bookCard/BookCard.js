import React from 'react';
import {Card, Image, Icon} from 'semantic-ui-react'

const BookCard = ({title, author, price, image}) => {
    return (
        <div>
            <Card>
                <Image src={image} />
                <Card.Content>
                    <Card.Header>{title}</Card.Header>
                    <Card.Meta>
                        <span className='date'>{author}</span>
                    </Card.Meta>
                </Card.Content>
                <Card.Content extra>
                    <a>
                        <Icon name='rub' />
                        {price}
                    </a>
                </Card.Content>
            </Card>
        </div>
    );
};

export default BookCard