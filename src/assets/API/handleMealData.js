export default function handleMealData(meal) {
    const ingredientsArr = [];
    const measuresArr = [];

    for (let i = 1; i <= 20; i++) {
        const ingredient = meal[`strIngredient${i}`]?.trim();
        const measure = meal[`strMeasure${i}`]?.trim();

        if (ingredient) 
            ingredientsArr.push(ingredient);
        if (measure) 
            measuresArr.push(measure);

        delete meal[`strIngredient${i}`];
        delete meal[`strMeasure${i}`];
    }

    meal.ingredients = ingredientsArr;
    meal.measures = measuresArr;
    return meal;
}