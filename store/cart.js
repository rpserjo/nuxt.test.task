import { defineStore } from "pinia";
import mockCatalog from './mockCatalog.js';

export const useCart = defineStore('cart', {
    state: () => ({
        userInstallation: true,
        userCart: [
            {
                id: 1,
                product_name: 'Вытяжное устройство G2H',
                product_description: '12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия',
                part_number: 'G2H1065',
                price: 12644,
                quantity: 1,
                image: {
                    src: '/img/g2h.png',
                    title: 'Вытяжное устройство G2H'
                }
            },
            {
                id: 2,
                product_name: 'Вытяжное устройство BXC',
                product_description: '12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия',
                part_number: 'G2H1065',
                price: 12644,
                quantity: 2,
                image: {
                    src: '/img/bxc.png',
                    title: 'Вытяжное устройство BXC'
                }
            },
            {
                id: 3,
                product_name: 'Вытяжное устройство GHN',
                product_description: '12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия',
                part_number: 'G2H1065',
                price: 12644,
                quantity: 1,
                image: {
                    src: '/img/ghn.png',
                    title: 'Вытяжное устройство GHN'
                }
            },
        ],
    }),
    getters: {
        total: (state) => {
            return state.userCart.reduce((acc, el) => {
                return acc + el.price
            }, 0);
        },
        cartQuantity: (state) => {
            return state.userCart.reduce((acc, el) => {
                return acc + el.quantity
            }, 0);
        },
        cart: (state) => {
            return state.userCart;
        },
        installation: (state) => {
            return state.userInstallation;
        }
    },
    actions: {
        addRandomElement() {
            const key = Math.floor(Math.random() * mockCatalog.length);
            const el = { id: this.userCart.length + 1, ...mockCatalog[key] };
            this.userCart.push(el);
        },
        updateQuantity(el, quantity){
            this.userCart = this.userCart.map(item => {
                if(item === el){
                    return { ...item, quantity };
                }
                return item;
            })
        },
        resetCart() {
            this.userCart.length = 0;
        },
        toggleInstallation() {
            this.userInstallation = !this.userInstallation;
        },
        removeItem(id) {
            this.userCart = this.userCart.filter(el => el.id !== id);
        }
    },

});
