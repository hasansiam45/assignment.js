// https://github.com/hasansiam45/assignment.js


//1. kiloMeterToMeter function
function kilometerToMeter(kilometer) {
    return kilometer * 1000;
}



//2. budgetCalculator function
function budgetCalculator(watch, phone, laptop) {
    var watchPrice = watch * 50;
    var phonePrice = phone * 100;
    var laptopPrice = laptop * 500;
    var total = watchPrice + phonePrice + laptopPrice;
    return total;
}


// 3. hotelCost function
function hotelCost(day) {
    var totalCost = 0;
    if (day <= 10) {
        totalCost = day * 100;
    } else if (day <= 20) {
        var firstPartCost = 10 * 100;
        var remaining = day - 10;
        var secondPartCost = remaining * 80;
        totalCost = firstPartCost + secondPartCost;
    } else {
        var firstPartCost = 10 * 100;
        var secondPartCost = 10 * 80;
        var remaining = day - 20;
        var thirdPartCost = remaining * 50;
        totalCost = firstPartCost + secondPartCost + thirdPartCost;
    }
    return totalCost;
}


// 4. megaFriend function
function megaFriend(arr) {

    var longestWord = "";
    for (var i = 0; i < arr.length; i++) {
        if (longestWord.length < arr[i].length) {
            longestWord = arr[i];
        }
    }
    return longestWord;
}