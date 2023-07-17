interface Item {
    name: string;
    image: string;
    price: string;
}


export class MenuItem implements Item {
    name: string;
    image: string;
    price: string;

    constructor(name: string, image: string, price: string) {
        this.name = name;
        this.image = image;
        this.price = price;
    }
}