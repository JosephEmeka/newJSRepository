
 function filterScores(number) {
     return number.filter(num => num >= 70);
 }

 function increaseScore(score){
     return score.map(value => value + 5)
 }

 function squareEachNumber(score){
     return score.map(value => value * value)
 }

function distributeBook(memberList, bookList) {
 const distribution = {};
    for (const [index , member] of memberList.entries()) {
       distribution[member] = bookList[index];
    }
 return distribution;
}


 function addExpenses(expenseObject) {
    let totalExpense = 0;
     for(let expense in expenseObject) {
         totalExpense += expenseObject[expense];
     }

     return totalExpense;
}

 function schedule(classTimings){
    return classTimings.filter(value => value.endsWith("PM"))
 }

 function modeOfArray(arr) {
     let modeOfNumber;
     let modeMap;
     let max;
     for (const num of arr) {
         modeMap[num] = (modeMap[num] || 0) + 1;
         if (modeMap[num] > max) {
             max = modeMap[num];
             modeOfNumber = num;
         }

     }
     return { number: modeOfNumber, count: max };
 }

 module.exports = {filterScores, increaseScore, squareEachNumber,schedule, distributeBook, addExpenses, modeOfArray};