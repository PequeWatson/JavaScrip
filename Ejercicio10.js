

// Crea una clase Transaccion con propiedades descripción y fecha.

class Transaccion{
    constructor(descripcion, fecha) {
        this.descripcion = descripcion;
        this.fecha = fecha;
    }
}

// Crea una clase Gasto que herede de Transaccion y añada la propiedad monto.

class Gasto extends Transaccion{
    constructor(descripcion, fecha, monto) {
        super(descripcion, fecha);
        this.monto = monto;
    }
}

//Implementa un menú para añadir gastos, mostrar todos los gastos y calcular el total de gastos en un período determinado.
class Menu {

    gastos = [];


   //Agregar gasto
    addGastos() {

        let descripcion = prompt("Describe el gasto");
        let fecha = new Date(prompt("Introduzca la fecha (YYYY, MM, DD)"));
        let monto = prompt("Introduzca el monto");
        monto = Number(monto);

        let gasto = new Gasto(descripcion, fecha, monto);
        this.gastos.push(gasto);
    }

    // Mostrar gastos
    mostrarGastos() {
        console.log("Gastos:");
        this.gastos.forEach(gasto => {
            console.log(gasto.descripcion + ": " + gasto.monto);
        });
    }

    // Calcular total
    totalPorPeriodo(start, end) {
        let total = 0;
        this.gastos.forEach(gasto => {
            if(gasto.fecha >= start && gasto.fecha <= end) {
                total += parseFloat(gasto.monto);
            }
        });
        return total;
    }
    
    mostrarMenu() {
        let opcion;
        do {
            console.log("\nMenu:");
            console.log("1. Agregar Gasto");
            console.log("2. Ver Gastos");
            console.log("3. Calcular el Total de gastos por Periodo");
            console.log("4. Salir");

            opcion = prompt("Introduzca una opción:");

            if(opcion == 1) {
                console.log("\nAgregando gastos...");
                this.addGastos();
            } else if(opcion == 2) {
                console.log("\nMostrando gastos...");
                this.mostrarGastos();
            } else if(opcion == 3) {
                let start = prompt("Fecha de inicio:");
                let end = prompt("Fecha final:");
                console.log("\nCalculando el total del periodo...");
                console.log("Total: " + this.totalPorPeriodo(start, end));
            }
        } while(opcion != 4);
    }

}


let menus = new Menu();
menus.mostrarMenu();