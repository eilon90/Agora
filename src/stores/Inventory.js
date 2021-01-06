import {observable, makeObservable, action, computed} from 'mobx';
import { Item } from './Item';

export class Inventory {
    constructor() {
        this.items = [];

        makeObservable(this, {
            items: observable,
            numItems: computed,
            addItem: action,
            buyItem: action,
            changePrice: action
        })
    }

    get numItems() {
        let num = 0;
        this.items.forEach(i => num += i.quantity);
        return num;
    }

    addItem(name) {
        if (this.items.some(i => i.name === name)) {
            this.items.find(i => i.name === name).quantity++;
        }
        else {
            const item = new Item(name);
            this.items.push(item);
        }
    }

    buyItem(name) {
        this.items.find(i => i.name === name).quantity > 1 ? this.items.find(i => i.name === name).quantity-- : this.items.splice(this.items.findIndex(i => i.name === name), 1);
    }

    changePrice(name, price) {
        this.items.find(i => i.name = name).price = price;
    }
}