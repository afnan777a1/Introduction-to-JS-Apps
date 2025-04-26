var choice = prompt(
  "Welcome to Perimeter Calculator. \nPlease Enter your Choice:\n1. Perimeter of Circle\n2. Perimeter of Rectangle\n3. Perimeter of Triangle\n4. Perimeter of Square"
);

if (choice == "1") {
  var r = prompt("Enter the Radius--");
  var result = 2 * 3.14 * Number(r);
  alert("Perimeter of Circle is " + result);
}

if (choice == "2") {
  var length = prompt("Enter the Length --");
  var breadth = prompt("Enter the Breadth --");
  var result = 2 * (Number(length) + Number(breadth));
  alert("Perimeter of Rectangle is " + result);
}

if (choice == "3") {
  var side1 = prompt("Enter the 1st Side --");
  var side2 = prompt("Enter the 2nd Side --");
  var side3 = prompt("Enter the 3rd Side --");
  var result = Number(side1) + Number(side2) + Number(side3);
  alert("Perimeter of Triangle is " + result);
}

if (choice == "4") {
  var side = prompt("Enter the Side of the Square --");
  var result = Number(side) * 4;
  alert("Perimeter of Square is " + result);
}
