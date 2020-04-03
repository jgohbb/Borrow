import axios from "axios";

export default {
    getInventory: function(user) {
        return axios.get("/api/inventory/" + user);
    },
    searchInventory: function(itemQuery, locationQuery) {
        console.log({params: {search: itemQuery, city: locationQuery}});
        return axios.post("/api/inventory/search/", {params: {search: itemQuery, city: locationQuery}});
        
    },
    searchItem: function (item) {
        console.log({params: {search: item}});
        return axios.get("/api/item/" + {params: {search: item}});
    }
}