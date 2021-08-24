import ProductData from "./Product"
import Attribute from './Attribute'
import Money from './Money'

class ProductServices {

    static getProduct() {
        let products = []

        const PRODUCTSLIST = [{
                id: 1,
                name: "Cherries",
                foto: ["https://cdn.pixabay.com/photo/2018/06/15/23/27/cherries-3477927_960_720.jpg", "https://cdn.pixabay.com/photo/2018/05/27/16/10/cherries-3433775_960_720.jpg", "https://cdn.pixabay.com/photo/2019/06/07/16/32/cherry-4258570_960_720.jpg"],
                price: {
                    standard: {
                        amount: 10,
                        currency: "MDL"
                    },
                    discount: {
                        amount: 8,
                        currency: "MDL"
                    }
                },
                description: "Minim 10kg",
                attribute: [{
                    name: "Sezon",
                    value: "summer"
                }]
            },

            {
                id: 2,
                name: "Orange",
                foto: ["https://cdn.pixabay.com/photo/2017/02/06/19/25/mandarins-2043983_960_720.jpg", "https://cdn.pixabay.com/photo/2017/01/20/15/06/oranges-1995056_960_720.jpg", "https://cdn.pixabay.com/photo/2017/02/26/12/27/oranges-2100108_960_720.jpg"],
                price: {
                    standard: {
                        amount: 18,
                        currency: "MDL"
                    }
                },
                description: "Minim 2kg",
                attribute: [{
                    name: "Sezon",
                    value: "winter"
                }]
            },

            {
                id: 3,
                name: "Apple",
                foto: ["https://cdn.pixabay.com/photo/2017/09/26/13/31/apple-2788616_960_720.jpg", "https://cdn.pixabay.com/photo/2016/11/30/15/00/apples-1872997_960_720.jpg", "https://cdn.pixabay.com/photo/2015/10/24/20/03/apples-1004886_960_720.jpg"],
                price: {
                    standard: {
                        amount: 8,
                        currency: "MDL"
                    },
                    discount: {
                        amount: 4,
                        currency: "MDL"
                    }
                },
                description: "Minim 20kg",
                attribute: [{
                    name: "Sezon",
                    value: "autumn"
                }]
            }
        ]

        PRODUCTSLIST.forEach(({id, name, foto, price:{standard, discount}, description, attribute})=>products.push(
            new ProductData(
                id,
                name,
                Array.isArray(foto) ? foto : [],
                {
                    standard: standard ? new Money(standard.amount, standard.currency).toPOJO() : false,
                    discount: discount ? new Money(discount.amount, discount.currency).toPOJO() : false
                },
                description,
                attribute.map(atr => new Attribute(atr.name, atr.value).toPOJO())
            ).toPOJO())
        )

        return products
    }

    

    
}

export default ProductServices