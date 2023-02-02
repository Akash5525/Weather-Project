const cityName = document.getElementById('cityName');       /* For Serach Box */
const submitBtn = document.getElementById('submitBtn');    /* For Button */
const city_name = document.getElementById('city_name');   /* For Output  */
const temp_real_value = document.getElementById('temp_real_value');            /* For Dynamic Tempraeture */
const temp_status = document.getElementById('temp_status'); /* For Dynamic Tempraeture */
const datahide = document.querySelector('.data_hide');

const getInfo = async (event) => {
    event.preventDefault();                            /* By using this Page Can't reload again after search */
    let cityVal = cityName.value;
    if (cityVal === "" || cityName === undefined || cityName === null) {
        city_name.innerText = `Please Write The Name Before Search`;
        datahide.classList.add('data_hide');              
    }
    else {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=b9e262a28444c13d7f2bb8ad0e97d2b0`;
            const response = await fetch(url);
            const data = await response.json();
            console.log("datsdfsda", data);
            const arrData = [data];
            city_name.innerText = `${arrData[0].name},${arrData[0].sys.country}`;
            const abcd = parseFloat(arrData[0].main.temp - (273.15)).toFixed(2);
            temp_real_value.innerText = abcd;
            // temp_real_value.innerText = arrData[0].main.temp-(273.15).toFixed(2);

            const tempMood = arrData[0].weather[0].main;

            // Condtion for sunny or cloudy.......... etc
            if (tempMood == "Clear") {
                temp_status.innerHTML = "<i class='fa-solid fa-sun'></i>"; //done
            }
            else if (tempMood == "Clouds") {
                temp_status.innerHTML = "<i class='fa-solid fa-cloud'></i>";  //done
            }
            else if (tempMood == "Rain") {
                temp_status.innerHTML = "<i class='fa-solid fa-cloud-rain'></i>"; //done
            }
            else if (tempMood == "Fog") {
                temp_status.innerHTML = "<i class='fa-solid fa-smog'></i>"; //done
            }
            else if (tempMood == "Snow") {
                temp_status.innerHTML = "<i class='fa-solid fa-snowflake'></i>"; //done
            }
            else if (tempMood == "Storms") {
                temp_status.innerHTML = "<i class='fa-solid fa-poo-storm'></i>"; //done
            }
            else if (tempMood == "Tornado") {
                temp_status.innerHTML = "<i class='fa-solid fa-tornado'></i>"; //done
            }
            else if (tempMood == "Wind") {
                temp_status.innerHTML = "<i class='fa-solid fa-wind'></i>";  //done
            }
            else if (tempMood == "Hail") {
                temp_status.innerHTML = "<i class='fa-solid fa-hill-avalanche'></i>"; //done
            }
            else if (tempMood == "Thunder") {
                temp_status.innerHTML = "<i class='fa-solid fa-cloud-bolt'></i>"; //done
            }
            else if (tempMood == "Haze") {
                temp_status.innerHTML = "<i class='fa-solid fa-smog'></i>"; //done
            }
            else if (tempMood == "Mist") {
                temp_status.innerHTML = "<i class='fa-brands fa-cloudversify'></i>"; //done
            }
            else if (tempMood == "Smoke") {
                temp_status.innerHTML = "<i class='fa-solid fa-smog'></i>"; //done
            }
            else {
                temp_status.innerHTML = "<i class='fa-solid fa-question'></i>";
            }
            datahide.classList.remove('data_hide');



        }
        catch {

            city_name.innerText = "Please Enter The City Name Properly ";

            datahide.classList.add('data_hide');

        }
    }
}
submitBtn.addEventListener('click', getInfo);
















// temp_status.innerText = arrData[0].whether[0].main;
