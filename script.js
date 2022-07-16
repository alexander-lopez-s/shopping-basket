//INCREASING VALUES//

function increaseValue() {
  let value = parseInt(document.getElementById('number').value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById('number').value = value;
}

//DECREASING VALUES//

function decreaseValue() {
  let value = parseInt(document.getElementById('number').value, 10);
  value = isNaN(value) ? 0 : value;
  value < 1 ? (value = 1) : '';
  value--;
  document.getElementById('number').value = value;
}

/* SUBTOTAL AND TOTAL FUNCTION */

function calcSubtotal() {
  let item1 = 20.99;
  let subtotal = document.getElementById('number').value;
  subtotal = subtotal * item1;
  document.getElementById('subtotalText').innerHTML =
    'Subtotaal: ' + '€' + subtotal.toFixed(2); //toFixed shows 2 decimals
    document.getElementById('total').innerHTML =
    'Totaal: ' + '€' + subtotal.toFixed(2);
}
calcSubtotal();

/* DELETING ITEMS */

function deletingItems() {
  const itemToDelete = document.getElementById('itemOne');
  itemToDelete.remove();
}




