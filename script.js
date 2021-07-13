var Number = window.prompt("Add one number")
function newButton() {
    for (let k = 1; k <= Number; ++k) {
        $('#buttons').append(`<button type="button" class="btn btn-primary btn-lg" id="` + k + `" onclick="return addButton(this.id);">`+ k + `</button>`);
    }
}
function addButton(idButton) {
    var random = Math.floor(Math.random() * parseInt(Number) + 1);
    if (idButton == random) {
        alert("Congratulations!");
    } else {
        alert("Try again, the winning button is " + random);
    }
}
 