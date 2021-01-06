import React, {Component} from 'react';
import { inject, observer } from 'mobx-react';
import Item from './Item';

class Market extends Component {

    addItem = (e) => {
        if (e.keyCode === 13) {
            this.props.shop.addItem(e.target.value);
            e.target.value = '';
        }
    }

    render() {

        return(
            <div>
                <span id = "input-span">Add a new item:</span>
                <input id = "new-item" type = "text" onKeyDown = {this.addItem}/>
                <h3 id = "num-item">We have {this.props.shop.numItems} items in the shop</h3>
                {this.props.shop.items.map(i => <Item key = {i.name} item = {i} shop = {this.props.shop}/>)}
            </div>
        )
    }
}

export default inject('shop')(observer(Market));