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