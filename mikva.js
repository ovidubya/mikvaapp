function getHefekTahraMikvaDates(date, nusach) {
    var i;
    var hefsek = Date.parse(date)
    var mikvaNight = Date.parse(date);
    if(nusach == "Vuz-Vuz") {

        if(toggleSwitch == 0) {
            hefsek.addDays(4);
            mikvaNight.addDays(11);
            document.getElementById('placeholder1').value = hefsek.toLocaleString().split(",")[0];
            document.getElementById('placeholder2').value = mikvaNight.toLocaleString().split(",")[0];
        }
        else {
            mikvaNight.addDays(7);
            document.getElementById('placeholder4').value = mikvaNight.toLocaleString().split(',')[0];
        }
    }
    else if(nusach == "Shfartsa") {
        if(toggleSwitch == 0) {
            hefsek.addDays(3);
            mikvaNight.addDays(10);
            document.getElementById('placeholder1').value = hefsek.toLocaleString().split(",")[0];
            document.getElementById('placeholder2').value = mikvaNight.toLocaleString().split(",")[0];
        }
        else {
            mikvaNight.addDays(7);
            document.getElementById('placeholder4').value = mikvaNight.toLocaleString().split(',')[0];
        }

    }

} 

function calculate() {
    if(toggleSwitch == 0) {
        getHefekTahraMikvaDates(document.getElementById('datepicker').value, document.getElementById('jewtype').value);
    }
    else {
        getHefekTahraMikvaDates(document.getElementById('datepicker2').value, document.getElementById('jewtype2').value);
    }
}