//import dbLocal from "db-local";
//import dbLocal from 'db-local'
const dbLocal = require("db-local");
const {Schema} = new dbLocal({path: './db'})
const questions = Schema('questions',{

    _id:{type: String, required: true},
    name:{type: String, required: true},
    question:{type: String, required: true},
    op1: {type: String, required: true},
    op2: {type: String, required: true},
    op3: {type: String, required: true},
    opC: {type: String, required: true}


})


const History = Schema('History',{

    _id:{type: String, required: true},
    name:{type: String, required: true},
    points: {type: String, required: true},
})


module.exports = class questionDB{

    constructor(){}

    createQuestion({id,name,question,op1,op2,op3,opC}){
        questions.create({
            _id:id,
            name,
            question,
            op1,
            op2,
            op3,
            opC

        }).save()
    }

    setPoints({name,points}){
        History.create({name,points}).save()
    }
    getHistory(){

        return History.find()
    }

    getAllQuestions(){
        
        return questions.find()
    }



}