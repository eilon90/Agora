import React, {Component} from 'react';
import {observer, inject} from 'mobx-react';

class Item extends Component {

    buyItem = () => {
        this.props.shop.buyItem(this.props.item.name, 0);
    }

    editPrice = () => {
        const newPrice = Number(prompt('Enter a new price:'));
        if (!isNaN(newPrice)) {
            this.props.shop.changePrice(this.props.item.name, newPrice);
        }
    }

    render(){
        const item = this.props.item;
        return (
            <div>
                <li onDoubleClick = {this.editPrice}><button onClick = {this.buyItem}>Buy</button> we have {item.quantity} {item.name} at {item.price} per item </li>
            </div>
        )
    }
}

export default inject('shop')(observer(Item));
