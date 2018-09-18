class ShoppingCart {
    constructor() {
        this.goods = new Set(); //Set of ItemOrder
        this.Coupons = new Set(); //Attach a set of discount coupons
    }

    add(item) {
        if(this.goods.has(item)) {
            this.goods[item].addItem();
        } else {
            this.goods.add(item);
        }
    }

    remove(item) {
        if(this.goods.has(item)) {
            if(this.goods[item].quantity > 0) {
                this.goods[item].reduceQuantity();
            } else {
                this.goods.delete(item);
            }
        }
    }

    addCoupon(coupon) {
        this.Coupons.add(coupon);
    }

    getTotal() {
        let total = 0;
        for(let item of this.goods) {
            total = total + item.price;
        }
        let temp = total;
        for(let item of this.Coupons) {
            let margin = item.percent/100 * temp;
            total = total - margin;
        }
        return total;
    }
}

class ItemOrder {
    constructor(item, quantity, price) {
        this.item = item;
        this.quantity = quantity;
    }

    addItem() {
        this.quantity++;
    }

    reduceQuantity() {
        this.quantity--;
    }

    removeItem() {
        this.quantity = 0;
    }

    getPrice() {
        return this.item.price * this.quantity;
    }
}

class Item {
    constructor(name, price, itemId) {
        this.name = name;
        this.price = price;
        this.itemId = itemId;
    }
}

class Coupon {
    constructor(code, percent) {
        this.code = code;
        this.percent = percent;
    }
}