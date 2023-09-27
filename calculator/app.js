const user_input = document.getElementById('user_input');
var exep = '';

function press(num) {
     exep += num;
     user_input.value = exep;
}

function equal() {
    user_input.value = eval(exep);
    exep = '';
}

function erase() {
    exep = ''
    user_input.value = exep;
}