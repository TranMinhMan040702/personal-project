const initialState = [
    {
        id: 1,
        createdBy: 'admindd@gmail.com',
        createdAt: 1677404888000,
        updatedBy: 'admindd@gmail.com',
        updatedAt: 1677404888000,
        name: 'Nhà giả kim',
        description: 'Sách hay',
        price: 123000.0,
        promotionalPrice: 99000.0,
        quantity: 100,
        category: 1,
        images: [
            'p0c8824db-e3b2-4556-bd19-10165fb82091.jpg',
            'p804f84c0-e52e-47f1-8add-91724d23b879.jpg',
            'pbf063457-0acd-48e8-a6d6-a1c428d9d60e.jpg',
            'p50922337-e348-498d-af07-fc856efe51c1.jpg',
        ],
    },
];

const rootReducer = (state = initialState, action) => {
    console.log({ state, action });
    switch (action.type) {
        case 'addToCart':
            return [...state, action.payload];

        default: {
            return state;
        }
    }
};

export default rootReducer;
