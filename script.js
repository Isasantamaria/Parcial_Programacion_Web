const obtenerValorInput = () => {
    let inputTexto = document.getElementById('input_pais')
    let valor = inputTexto.value
    peticionesApi(valor)
}

const peticionesApi = (pais) => {
    const baseUrl = 'https://restcountries.com/v3.1/'
    const enpoint = `name/${pais}`
    const url = `${baseUrl}${enpoint}`

    axios.get(url)
    .then(res => printData(res.data))
    .catch(err => console.log(err))
}

const printData = (data) => {
    let respuesta = document.getElementById('show-info')
    respuesta.innerHTML = `
        <label>Nombre Oficial: <h3>${data[0].name.official}</h3></label>
        <label>Nombre: <h3>${data[0].name.common}</h3></label>
        <label>Capital: <h3>${data[0]['capital']}</h3></label>
        <label>Región: <h3>${data[0].region}</h3></label>
    `
}