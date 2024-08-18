import axios from "axios";

export async function getIngredientsApi(){
    return axios.get('https://www.themealdb.com/api/json/v1/1/list.php?i=list');
}