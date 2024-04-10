async function weather_location (zipcode) {
    // console.log info
    try {
        let url = `http://api.weatherapi.com/v1/current.json?key=5add91952e9842d3863164236240804&q=${zipcode}`
        let response = await fetch(url, {mode: 'cors'})
        let json = await response.json()
        let data = json.current
        return data
    }catch (err) {
        console.log(err)
    } 
}
// weather_location(90503)

let find_weather = async () => {
    let zip = document.getElementById("zipcode").value
    let weather = await weather_location(zip)
    let info = document.querySelector(".data")
    console.log(weather)
    info.textContent = JSON.stringify(weather)

}
const submit = document.getElementById("submit")
submit.addEventListener("click", (event) => {
    event.preventDefault
    find_weather()
})