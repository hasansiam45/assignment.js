// https://github.com/hasansiam45/assignment.js


//1. kilometerToMeter function
function kilometerToMeter(kilometer) {
    if (kilometer <= 0 || typeof kilometer == "string" || typeof kilometer == "boolean" || typeof kilometer == "object") {
        return "Expected a positive value" //throwing an error
    } else {
        return kilometer * 1000;
    }

}




//2. budgetCalculator function
function budgetCalculator(watch, phone, laptop) {
    if (typeof watch == "string" || typeof phone == "string" || typeof laptop == "string" || watch < 0 || phone < 0 || laptop < 0) {
        return "Expected a positive value" //throwing an error
    } else {
        var watchPrice = watch * 50;
        var phonePrice = phone * 100;
        var laptopPrice = laptop * 500;
        var total = watchPrice + phonePrice + laptopPrice;
        return total;
    }
}




// 3. hotelCost function
function hotelCost(day) {
    var totalCost = 0;
    if (day < 0 || typeof day == "string" || typeof day == "boolean" || typeof day == "object") {
        return "please Enter a valid amount of day"; //throwing an error
    } else if (day <= 10) {
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
        if (typeof arr[i] !== "string") {
            return "This array can only contain strings" //throwing an error
        }
    }
    for (var i = 0; i < arr.length; i++) {
        if (longestWord.length < arr[i].length) {
            longestWord = arr[i];
        }
    }
    return longestWord;

}