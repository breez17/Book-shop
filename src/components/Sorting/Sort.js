import React, { Component } from 'react';
import { Input, Label, Menu } from 'semantic-ui-react'
import ProTypes from 'prop-types'

export default class MenuExampleVertical extends Component {
    state = { activeItem: 'all' };

    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    render() {
        const { activeItem } = this.state;
        console.log(this.state);
        return (
            <Menu vertical>
                <Menu.Item
                    name='all'
                    active={activeItem === 'all'}
                    onClick={this.handleItemClick}
                >
                    Все
                </Menu.Item>

                <Menu.Item
                    name='popular'
                    active={activeItem === 'popular'}
                    onClick={this.handleItemClick}
                >
                    Популярные
                </Menu.Item>

                <Menu.Item
                    name='price_high'
                    active={activeItem === 'price_high'}
                    onClick={this.handleItemClick}
                >
                    Цена (дорогие)
                </Menu.Item>

                <Menu.Item
                    name='price_low'
                    active={activeItem === 'price_low'}
                    onClick={this.handleItemClick}
                >
                    Цена (дешёвые)
                </Menu.Item>

                <Menu.Item
                    name='author'
                    active={activeItem === 'author'}
                    onClick={this.handleItemClick}
                >

                   По автору
                </Menu.Item>
            </Menu>
        )
    }
}