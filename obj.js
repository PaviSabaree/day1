// var book = new  Object();
// book.author = "Pavi";
// book.content ="js";
// document.write("Book name is : " + book.content + "<br>");
// document.write("Book author is : " + book.author + "<br>");


// var obj= new Object();
// var obj2={};


var user1= new Object;
user1.name = "pavi";
user1.profession = "developer";
user1.sayHi = function(){
    console.log('Hello, '+this.name);
}
user1.sayHi();

var user2={
    name :"Hari",
    profession:"Enterpreneur",
    sayHi:function(){
        console.log("hello, "+this.name);
    }
}
user2.sayHi();

var user3=user2;
user2=null;
user3.sayHi();
console.log(user3);

// Defining Methods for an Object
function addPrice(amount){
    this.price=amount;
}

function book(title,author){
    this.title=title;
    this.author=author;
   //Assign that Method
    this.addPrice= addPrice;
}
var myBook= new book("maths", "xxx");

myBook.addPrice(350);

document.write("Book title:"+myBook.title+ "<br>");
document.write("Book author:"+myBook.author+"<br>");
document.write("Book price:"+myBook.price+"<br>");



