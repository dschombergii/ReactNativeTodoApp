export const stack = {
    root: {
        stack: {
            children: [
                {
                    component: {
                        name: 'AddItem',
                        options: {
                            topBar: {
                                title: { text: 'Add Item', color: 'white' },
                                background: { color: '#009688' },
                                backButton: { color: 'white' }
                            },
                        },
                    },
                },
                {
                    component: {
                        name: 'ViewItems',
                        options: {
                            topBar: {
                                title: { text: 'View Items', color: 'white' },
                                background: { color: '#009688' }
                            },
                        },
                    },
                },
            ]
        }
    }
}