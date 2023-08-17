const autos = [
    { modelo: "etios", precio: 6000000 },
    { modelo: "corolla", precio: 10000000 },
    { modelo: "hilux", precio: 15000000 }
];
const colores = {
    blanco: 0,
    negro: 200000,
    rojo: 400000,
    gris: 700000};

const autos_conf = [];

while (true) {
    let curr_auto = null;
    const auto = prompt(`Elija un auto:
      - etios ($6.000.000)
      - corolla ($10.000.000)
      - hilux ($15.000.000)
      (Ingrese '*' para finalizar)`);
    if (auto === '*') {
        break;
    }
    for (let i = 0; i < autos.length; i++) {
        if (auto === autos[i].modelo) {
            curr_auto = autos[i];
            autos_conf.push(curr_auto);
            let color = prompt(`Ahora elija el color de su auto:
            - blanco ($0)
            - negro ($200.000)
            - rojo ($400.000)
            - gris ($700.000)`);
            for (let x = 0; x < colores.length; x++){
                if(color in colores){
                    curr_auto.color = color
                    curr_auto.precio += colores[color]
                }
                else{alert('el color ingresado no existe')
                color = prompt(`Ahora elija el color de su auto:
                - blanco ($0)
                - negro ($200.000)
                - rojo ($400.000)
                - gris ($700.000)`)}
            }
            alert(`Se ha seleccionado el Toyota ${curr_auto.modelo} en el color ${color}`);
            break;
        }
    }
    if (!curr_auto) {
        alert('El auto ingresado no existe.');
    }
}

let valor_total = 0;
for (let i = 0; i < autos_conf.length; i++) {
    valor_total += autos_conf[i].precio;
}

alert(`Usted ha seleccionado ${autos_conf.length} autos por un total de ${valor_total}`)


