let {filterScores, increaseScore, squareEachNumber, schedule, distributeBook} = require("./readMe.js");

test("filter Students Scores ", ()=> {
    let testScores = [10, 50, 77, 91, 55, 89, 40 ];
    let result = [77, 91, 89]
    expect(filterScores(testScores)).toEqual(result);

})

test("Add  5 Students Scores ", ()=> {
    let testScores = [85,92,78,88,95];
    let result = [90, 97, 83, 93, 100]
    expect(increaseScore(testScores)).toEqual(result);

})


test("square each number ", ()=> {
    let numbers = [5,2,7,8,3];
    let result = [25, 4, 49, 64, 9]
    expect(squareEachNumber(numbers)).toEqual(result);

})

test("distribute each book to member ", ()=> {

    let memberList = ["Emily","Jack","Sophia","Daniel"];
    let bookList =  ["Bible","Java book","Python","Go"];
    let result = {"Emily": "Bible", "Jack": "Java book", "Sophia": "Python", "Daniel": "Go" }
    expect(distributeBook(memberList, bookList)).toEqual(result);

})


// test("expenses addition ", () => {
//     let expenses = {
//         "groceries": 150,
//         "dinning out":100,
//         "transportation": 50,
//         "entertainment": 80};
//     let result = 380
//
//     expect(addExpenses(expenses)).toEqual(result);
// });


test("Student Class Timing at noon ", () => {
    let class_timings = ["9:00AM", "11:00AM", "1:00PM", "3:00PM", "5:00PM"];
    let result = ["1:00PM", "3:00PM", "5:00PM"];
    expect(schedule(class_timings)).toEqual(result);
});
