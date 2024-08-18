import axios from "axios";

export default function getAreasApi(){
    return axios.get('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
}
