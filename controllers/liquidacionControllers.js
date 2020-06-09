exports.forumlarioDatos = () => {
    res.render("datos", {
        nombrePagina: "Datos",
        tagline: "Ingresa los datos para calcular la liquidación"
    })
};

exports.calcularLiquidacion  = (req, res) => {
    const bodyMonto = req.body.monto;
    const bodyInteres = req.body.interes;
    const bodyTiempo = req.body.tiempo;

    const respuesta = {
        0: {
            monto: bodyMonto
        }
    }

    for (i = 1; i <= bodyTiempo; i++) {
        montoActual = respuesta.i.monto;
        interes = bodyInteres/100;
        cuota = montoActual*(interes/(1-Math.pow((1+interes), -(bodyTiempo))));

        capital = cuota - (bodyMonto/interes);

        interesTabla = (bodyMonto/interes);

        deudaPendiente = montoActual - capital;

        respuesta.push(
            {
                mes: i,
                capital: capital,
                interes: interesTabla,
                deudaPendiente: deudaPendiente
            }
        )
    }

    res.render(respuesta);

}