var ukz = document.getElementById("ukz");
var form_reg = document.getElementById("form_reg");
var clos = document.getElementById("clos");

ukz.onclick = function() {
    if (form_reg.style.display == 'none' || form_reg.style.display == '') {
        form_reg.style.display = "block"
    } else {

    }
};


clos.onclick = function() {
    console.log(form_reg.style.display);
    form_reg.style.display = 'none'
}