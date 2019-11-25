import React, {Component} from 'react';
import {Input, Label, Menu} from 'semantic-ui-react'

const Sort = props => {
    const {setSort, sortBy} = props;


    return (
        <Menu vertical>
            <Menu.Item

                active={sortBy === 'all'}
                onClick={setSort.bind(this, 'all')}
            >
                Все
            </Menu.Item>

            <Menu.Item

                active={sortBy === 'price_high'}
                onClick={setSort.bind(this, 'price_high')}
            >
                Цена (дорогие)
            </Menu.Item>

            <Menu.Item

                active={sortBy === 'price_low'}
                onClick={setSort.bind(this, 'price_low')}
            >
                Цена (дешёвые)
            </Menu.Item>

            <Menu.Item
                active={sortBy === 'author'}
                onClick={setSort.bind(this, 'author')}
            >

                По автору
            </Menu.Item>
        </Menu>
    )
};

export default Sort;