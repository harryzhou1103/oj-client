var problems = [
    {
        id: 1,
        name: "two sum",
        desc: "a leetcode problem called 2 sum",
        difficulty: "easy",
    },
    {
        id: 2,
        name: "3 sum",
        desc: "a leetcode problem called 3 sum",
        difficulty: "medium",
    }
];


var ProblemMOdel = require("../models/problemModel");

var getProblems = function() {
    return new Promise((resolve, reject) => {
        ProblemMOdel.find({}, function(err, problems) {
            if (err) {
                reject(err);
            }
            else {
                resolve(problems);
            }
        });
    });
}

var getProblem = function(id) {
    return new Promise((resolve, reject) => {
        ProblemMOdel.findOne({id: id}, function(err, problem) {
            if (err) {
                reject(err);
            }
            else {
                resolve(problem);
            }
        });
    });
}

var addProblem = function(newProblem) {
    return new Promise((resolve, reject) => {
        ProblemMOdel.findOne({name: newProblem.name}, function(err, problem) {
            if (problem) {
                reject("Problem name already exists!");
            }
            else {
                ProblemMOdel.count({}, function(err, num) {
                    if (err) {
                        reject(err);
                    }
                    else {
                        problem.id = num + 1;
                        var addProblem = new ProblemMOdel(newProblem);
                        addProblem.save();
                        resolve(newProblem);
                    }
                });
            }
        });
    });
}

module.exports = {
    getProblems: getProblems,
    getProblem: getProblem,
    addProblem: addProblem,
}