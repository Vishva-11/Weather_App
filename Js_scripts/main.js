let card = document.querySelector('.card');
let details = document.querySelector('.details');
let cityForm = document.querySelector('form');
let time = document.querySelector('img.time');


const updateUI = (data)=>{

let cityDetails = data.cityDetails;
let weather = data.weatherDetails;

// update UI Templates

    details.innerHTML = ` 
    <h5 class="my-3">${cityDetails.EnglishName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-4">
        <span>${weather.Temperature.Metric.Value}</span>
        <span>&deg;C</span>
    </div>`;

    //update the night/day & icon images

    let timeSrc = null;
    if(weather.IsDayTime)
        {
            timeSrc = 'day.svg'
        }
    else{
        timeSrc='night.svg'
    }
    time.setAttribute('src',timeSrc);

    // remove d-none class from card if present
    if(card.classList.contains('d-none'))
    {
    card.classList.remove('d-none');
    }

}

let updateCity = async (typed_data)=>{

    let cityDetails = await getCity(typed_data);
    let weatherDetails = await getweather(cityDetails.Key);

    return {
        cityDetails,
        weatherDetails 
        
        // object shorthand notations where if key and value both are same in an object u can write anyone and js will presume both the values are same
    };
}


cityForm.addEventListener('submit', e=>{
    // prevent default action
    e.preventDefault();


    // get city value (.city is a class we have given in form, check HTML, dont get confused)

    let city = cityForm.City.value.trim();
    cityForm.reset(); // to clear the form field for future value

    //setting local storage
    localStorage.setItem('city', city);

    //update the ui with new city
    updateCity(city)
    .then(data=>{
        updateUI(data);
    })
    .catch(err=>{
        console.log(err);
    });

});

if(localStorage.getItem('city'))
{
    updateCity(localStorage.getItem('city'))
    .then(data=>updateUI(data)).catch(err=>console.log(err));
}