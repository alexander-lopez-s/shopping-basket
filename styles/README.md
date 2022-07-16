* {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

.main-container {
  background-image: url("bubbles.png");
  background-size: 1000px 1000px;
  display: flex;
  flex-direction: column;
  height: 1400px;
  width: 850px;
  margin: 0px auto;
  padding-top: 10px;
  border: 3px solid black;
  border-radius: 25px;
  align-items: center;
  text-align: center;
  background-color: white;
}

.header {
  display: flex;
  flex-direction: column;
  width: 800px;
  height: auto;
}

.logo {
  display: flex;
  align-items: left;
}

.title h1 {
  font-weight: bolder;
  font-size: 50px;
  color: rgb(38, 60, 65);
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.nav-bar {
  width: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-bottom: 20px;
}

.nav-bar a {
  text-decoration: none;
  font-size: 20px;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
    'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  color: white;
  border: 5px solid rgb(20, 5, 224);
  background-color: rgb(5, 27, 224);
  border-radius: 5px;
}

.nav-bar a:hover {
  background-color: rgb(35, 175, 22);
  border: 5px solid rgb(35, 175, 22);

}

.shopping-items {
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: left;
  text-align: left;
  align-items: left;
  height: 910px;
  width: 780px;
  margin-left: 10px;
  border-radius: 10px;
}

.itemOne,
.itemTwo,
.itemThree {
  display: flex;
  flex-direction: row;
  margin: 20px;
  font-size: 20px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.encapsulated-info {
  display: flex;
  flex-direction: column;
  margin-left: 20px;
}

.item-title p {
  text-transform: uppercase;
  color: rgb(199, 11, 174);
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-weight: bold;
}

.price p {
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}

/*** Form ***/

.value-button {
  display: inline-block;
  border: 1px solid #ddd;
  margin: 0px;
  width: 40px;
  height: 20px;
  text-align: center;
  vertical-align: middle;
  padding: 11px 0;
  background: #eee;
  font-size: 19px;
}

.value-button:hover {
  cursor: pointer;
}

form #decrease {
  margin-right: -4px;
  border-radius: 8px 0 0 8px;
  font-size: 19px;
}

form #increase {
  margin-left: -4px;
  border-radius: 0 8px 8px 0;
  font-size: 19px;
}

form #input-wrap {
  margin: 0px;
  padding: 0px;
}

input#number {
  text-align: center;
  border: none;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  margin: 0px;
  width: 40px;
  height: 40px;
  font-size: 19px;
}

input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/********* End of the form *********/

.trash-icon {
  margin-top: 10px;
  font-size: 30px;
  cursor: pointer;
}

.trash-icon a {
  text-decoration: none;
}

.icon-subtotal {
  display: flex;
  flex-direction: row;
  justify-content: start;
}

.subtotal {
  margin-left: 40px;
  margin-top: 20px;
}

.subtotal p {
  margin-top: 15px;
  margin-left: 70px;
  font-size: 20px;
}

.payment-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.total {
  font-size: 25px;
  font-family: Georgia, 'Times New Roman', Times, serif;
  color: forestgreen;
  font-weight: bold;
}

.payment-section button {
  font-size: 25px;
  background-color: rgb(2, 91, 224);
  color: white;
  padding: 7px;
  font-family:Georgia, 'Times New Roman', Times, serif;
  cursor: pointer;
  border-radius: 10px;
}

.payment-section button:hover {
  background-color: green;
  color: white;
}
