async function fetch_api() {

    let citys = document.getElementById("search").value;
    if (citys === '') {
        alert("enter city name")
        return
    }

    document.getElementById("city").innerHTML = citys

    const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${citys}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'f1c1e8af5amshbccdcfeb113b13ep1e24b7jsn62cc70330906',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };

    try {

        const response = await fetch(url, options);
        const result = await response.json();
        if (result.cloud_pct === undefined) {
            return "-"
        }
        console.log(result);
        cloud_pct.innerHTML = result.cloud_pct
        feels_like.innerHTML = result.feels_like
        humidity.innerHTML = result.humidity
        max_temp.innerHTML = result.max_temp + "&degc"
        min_temp.innerHTML = result.min_temp + "&degc"
        sunrise.innerHTML = result.sunrise
        sunset.innerHTML = result.sunset
        temp.innerHTML = result.temp + "&degc"
        wind_degrees.innerHTML = result.wind_degrees
        wind_speed.innerHTML = result.wind_speed
        citys.innerHTML = result.cloud_pct
    } catch (error) {
        console.error(error);
    }

}

fetch_api()