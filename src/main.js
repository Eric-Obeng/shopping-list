const ShoppingListApp = Vue.createApp({
    data() {
        return {
            title: "Shopping List App",
            items: [
                {id: 1, label:"10 party hats"},
                {id: 2, label:"2 board games"},
                {id: 3, label:"20 cups"},
            ],
            newItem: "",
            newItemHighPriority: false,

        }
    },

    // template: "<div> hi </div>",
}).mount("#vue-app")