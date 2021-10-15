import { food } from "./food.js";

const foodList = document.getElementById('food-list');

function render(food) {
    const foodCard =document.createElement('li');
    foodCard.classList.add('food-item');

    const foodImage = document.createElement('img');
    foodImage.src = food.img;

    const foodName = document.createElement('span');
    foodName.classList.add('food-name');
    foodName.textContent = food.name;

    foodCard.append(foodImage, foodName);
    return foodCard;
}

