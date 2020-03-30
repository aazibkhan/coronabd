fetch('https://cors-anywhere.herokuapp.com/https://pomber.github.io/covid19/timeseries.json'
).then((response)=>{
    return response.json();
}).then((coronaData)=>{
    let holder = document.querySelector('.boxes')
    let dataBD = coronaData["Bangladesh"]
    holder.innerHTML = dataBD.map(bd =>
        `
        <div class="box">
        <h2>${bd.date}</h2>
        <div class="results">
            <span class="confirmed">Confirmed: ${bd.confirmed}</span>
            <span class="deaths">Death: ${bd.deaths}</span>
            <span class="recovered">Recovered: ${bd.recovered}</span>
        </div>
    </div>
        `
        ).join('')
   
})
