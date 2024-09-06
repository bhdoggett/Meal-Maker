const menu = {
    courses: {
        appetizers: [],
        mains: [],
        desserts: [],
    },

    addDishToCourse: function (courseName, dishName, dishPrice) {
        this.courses[courseName].push({ name: dishName, price: dishPrice })

    },

    getRandomDishFromCourse: function (courseName) {
        let dishes = this.courses[courseName];
        let i = Math.floor(Math.random() * dishes.length);
        return dishes[i];
    },

    generateRandomMeal: function () {
        let appetizer = menu.getRandomDishFromCourse('appetizers');
        let main = menu.getRandomDishFromCourse('mains');
        let dessert = menu.getRandomDishFromCourse('desserts');
        let total = appetizer.price + main.price + dessert.price;
        return `Your appetizer is ${appetizer.name}, your main dish is ${main.name}, and your dessert is ${dessert.name}. Your total comes to $${total}.`
    }
};

menu.addDishToCourse('appetizers', 'eggrolls', 10);
menu.addDishToCourse('appetizers', 'salad', 5);
menu.addDishToCourse('appetizers', 'mozzarella sticks', 30);
menu.addDishToCourse('mains', 'chicken', 20);
menu.addDishToCourse('mains', 'steak', 40);
menu.addDishToCourse('mains', 'pork', 30);
menu.addDishToCourse('desserts', 'cake', 40);
menu.addDishToCourse('desserts', 'pie', 45);
menu.addDishToCourse('desserts', 'candy', 33);

let meal = menu.generateRandomMeal();

console.log(meal);
