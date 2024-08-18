import axios from "axios";
import handleMealData from './handleMealData'

export async function getMealsByCategoryApi(category){
    const data = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
    return handleApiError(data);
}

export async function getMealsByNameApi(name){
    const data = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`);
    return handleApiError(data);
}

export async function getMealsByFLetterApi(letter){
    const data = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`);
    return handleApiError(data);
}

export async function getMealByIdApi(id){
    return axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
}

export async function getMealsByAreaApi(area){
    const data = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`);
    return handleApiError(data);
}

export async function getMealsByIngredientApi(ingredient){
    const data = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    return handleApiError(data);
}

function handleApiError(data){
    try {
        data.data.meals = data.data.meals.map(meal => handleMealData(meal));
        return data.data;
    } catch (error) {
        return 'something wrong!';
    }
}
