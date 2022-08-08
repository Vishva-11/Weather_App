const apiKey = 'Pp1yHhpj6BvZ1v1dHVhyBVlvDwVIj4qU';

//get weather info
const getweather = async (id)=>{

    let baseURL2 = 'http://dataservice.accuweather.com/currentconditions/v1/';

    let query2 = `${id}?apikey=${apiKey}`;

    let response2 = await fetch(baseURL2+query2);

    let data2 = await response2.json();
    // console.log(data2);

    return data2[0];
}


// get city info

let getCity = async (city)=>{

    let baseURL1 = 'http://dataservice.accuweather.com/locations/v1/cities/search';

    let query1= `?apikey=${apiKey}&q=${city}`

    let response = await fetch(baseURL1+query1);

    let data = await response.json();
    return (data[0]);
}

// // city function call
// getCity('ahmedabad')
//     .then(data =>{
//     //weather function call
//     return getweather(data.Key)
//     }).then(data =>{
//         console.log(data); //getwather(data.key) also returns a promise so .then and its data is then console.log here and error can be handled easily now
//     })
//     .catch(err=>console.log(err));