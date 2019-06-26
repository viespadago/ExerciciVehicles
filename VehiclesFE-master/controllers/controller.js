"use strict";
function ocultar() {
    document.getElementById('carInfo').style.display = 'none';
    document.getElementById('wheelInfo').style.display = 'block';
}
function createCar() {
    var plate = document.getElementById("matricula").value;
    if (plate.length != 7) {
        alert("La matrícula ha de contener 4 números y 3 letras.");
        return false;
    }
    var i = 0;
    while (i < 4) {
        if (isNaN(plate[i])) {
            alert("La matrícula ha de contener 4 números al principio.");
            return false;
        }
        i++;
    }
    while (i < 7) {
        if (isNaN(plate[i]) == false) {
            alert("La matrícula ha de contener 3 letras al final.");
            return false;
        }
        i++;
    }
    var brand = document.getElementById("marca").value;
    var color = document.getElementById("culor").value;
    var car = new Car(plate, color, brand);
    document.getElementById('carHead').innerHTML = 'Car: ';
    document.getElementById('plate').innerHTML = 'Plate: ' + car.plate;
    document.getElementById('brand').innerHTML = 'Brand: ' + car.brand;
    document.getElementById('color').innerHTML = 'Color: ' + car.color;
    document.getElementById('wheelHead').innerHTML = 'Wheels: ';
    var i = 1;
    while (i < 5) {
        var marcarueda = 'rueda' + i;
        var brandWheel = document.getElementById(marcarueda).value;
        var diametro = 'diameter' + i;
        var diameter = document.getElementById(diametro).value;
        if (diameter < 0.4 || diameter > 2) {
            alert("El diámetro de la rueda " + i + " ha de ser de 0.4 a 2.");
            return false;
        }
        car.addWheel(new Wheel(diameter, brandWheel));
        var escriberueda = 'wheel' + i;
        document.getElementById(escriberueda).innerHTML = 'Wheel ' + i + ': Brand: ' + car.wheels[i - 1].brand + ' Diameter: ' + car.wheels[i - 1].diameter;
        ++i;
    }
}
