import Axios from 'axios';

export default class TradeService 
{
    createTrade = (callback) => {
        Axios({
            method: 'POST',
            url: 'https://localhost:44392/api/trade/create/',
            data: {
                IsActive: true,
                Description: "Trade from front end",
                Product: {
                }
            },
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(response => {
            callback(response.data);
        })
        .catch(e => {
            console.log("error", e);
        })
    }
    
}