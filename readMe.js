
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


 // function addExpenses(expenseObject) {
 //     for(let Key:[value] in expenseObject) {
 //         return value += value
 //     }
 // }

 function schedule(classTimings){
    return classTimings.filter(value => value.endsWith("PM"))
 }
 module.exports = {filterScores, increaseScore, squareEachNumber,schedule, distributeBook};