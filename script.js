function calcularRatios() {
    let colTotal = parseFloat(document.getElementById('colTotal').value);
    let colHDL = parseFloat(document.getElementById('colHDL').value);
    let colLDL = parseFloat(document.getElementById('colLDL').value);
    let trigliceridos = parseFloat(document.getElementById('trigliceridos').value);
    let alertaSonido = document.getElementById("alertaSonido");

    if (isNaN(colTotal) || isNaN(colHDL) || isNaN(colLDL) || isNaN(trigliceridos) || colHDL === 0) {
        alert("Por favor, ingrese todos los valores correctamente.");
        return;
    }

    let ratioColTotal = (colTotal / colHDL).toFixed(2);
    let ratioTrigliceridos = (trigliceridos / colHDL).toFixed(2);
    let ratioLDL = (colLDL / colHDL).toFixed(2);

    let resultadosHTML = '';

    function evaluarRatio(valor, limite, nombre) {
        let enRango = valor <= limite;
        if (!enRango) alertaSonido.play();
        return `<div class="result-box ${enRango ? 'bg-safe' : 'bg-danger'}">
            <span>${nombre}:</span> <span>${valor}</span>
        </div>`;
    }

    resultadosHTML += evaluarRatio(ratioColTotal, 5, "Colesterol Total / HDL");
    resultadosHTML += evaluarRatio(ratioTrigliceridos, 2, "Triglicéridos / HDL");
    resultadosHTML += evaluarRatio(ratioLDL, 4.3, "LDL / HDL");

    document.getElementById('resultados').innerHTML = resultadosHTML;
}

function limpiarCampos() {
    document.getElementById('colTotal').value = '';
    document.getElementById('colHDL').value = '';
    document.getElementById('colLDL').value = '';
    document.getElementById('trigliceridos').value = '';
    document.getElementById('resultados').innerHTML = '';
}
