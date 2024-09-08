const obtenerValorInput = () => {
    let inputTexto = document.getElementById('input_pais')
    let valor = inputTexto.value
    peticionesApi(valor)
}