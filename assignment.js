//https://github.com/sabbiralex/javascricpt.git

//Problem-1: kilometerToMeter

function kilometerToMeter(m){
    
    const meter = m*1000;//1 kilometer = 1000 Meter
    return meter; 
}

var savarTotalMeter = kilometerToMeter(7);//Input 7; Distance from my home.
console.log(savarTotalMeter);
var dhakaTotalMeter = kilometerToMeter(16);//Input 16; Distance from my home.
console.log(dhakaTotalMeter);


//Problem-2: budgetCalculator 

function budgetCalculator(watch,mobile,laptop){
    
    var iteamOne = (watch * 50);
    var iteamTwo = (mobile * 100);
    var iteamThree = (laptop * 500);

    var totalPrice = iteamOne + iteamTwo + iteamThree;//Sum of three product.

    return totalPrice; 
}

console.log(budgetCalculator(4,7,5));


//Problem-3: hotelCost

function hotelCost(day){
    if(day<=10){
       const totalCost = day*100;
    }
    else if(day<=20){
       const first = 10*100;
       var firstDiscount = (day-10)*80;//First Discount.
       var totalCost = first + firstDiscount;
    }
    else{
       const first = 10*100;
       var firstDiscount = 10*80;
       var secondDiscount = (day-20)*50;//Second Discount.
       var totalCost = first + firstDiscount + secondDiscount;
    }
      return totalCost;

}

console.log(hotelCost(33));//input 33; Total days stay in hotel.


//Problem-4: megaFriend

function megaFriend(list) {
    var word = 0;
    var longestWord;
    
    for (var i = 0; i < list.length; i++) {
      if (list[i].length > word) {
        word = list[i].length;
        longestWord = list[i];
      }
    }
      return longestWord;
    }
    var friend = megaFriend(["Arif","Faysal","Rakib Alif", "Parvez Khan", "Jahid Mia"]);
    console.log(friend);