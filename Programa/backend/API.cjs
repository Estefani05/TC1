const express = require('express')
//import {express} from 'express'
const questionDB = require('./questionDB.cjs')
const myQuestions = new questionDB();

const app = express()
const PORT = process.env.PORT ?? 1234

function setFortmat(){

    allQuestions = myQuestions.getAllQuestions();

    newFormat = []
    responses = []


    allQuestions.forEach(element => {
        newFormat.push({questionText:element.question,
            name: `${element.name}-name`,
            options:[
                {choice:element.op1, radioValue: `${element.name}-a`,selected: false},
                {choice:element.op2, radioValue: `${element.name}-b`,selected: false},
                {choice:element.op3, radioValue: `${element.name}-c`,selected: false},
            ]
        })
        responses.push(`${element.name}-${element.opC}`)

        
    });



    return {Questions: newFormat , Responces:responses};

}

function getRandomQuestions(){
    //const originalList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const originalList = setFortmat()

    
    
    const n=10
    const arr = originalList.Questions;
    const arr2 = originalList.Responces;
        // Step 1: Shuffle the array
        let shuffledR = arr2.slice(); 
        let shuffled = arr.slice(); // Make a copy of the original array
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledR[i], shuffledR[j]] = [shuffledR[j], shuffledR[i]];
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
    
        // Step 2: Return the first n elements
        return {Questions: shuffled.slice(0, n),Responces: shuffledR.slice(0, n)};
    
    
    // Example usage
    
    // Get a random sublist of 3 elements
 

}

function getHistory(){

    return myQuestions.getHistory();
}

function saveDB(name,points){

    myQuestions.setPoints({name:name,points:points});

}

app.get('/*',(req,res)=>{



    if(req.url === '/Questions'){res.send(getRandomQuestions())

    }else if(req.url === '/History'){res.send(getHistory())

    }else{res.send('<h1>Hola mi gente</h1>')}

})

app.post('/Save',(req,res)=>{

    let bodyStr = ''
    req.on('data',chunk => {bodyStr += chunk.toString() })
    req.on('end', () => {
             const data = JSON.parse(bodyStr)
             req.body = data
             
             saveDB(data.name,data.points);
             req.body = data;
             console.log(`${req.body}`)
             res.send(JSON.stringify(req.body));
    })

  
    
  //  saveDB(data.name,data.points);
  //  res.status(201).json(req.body);


    
    
 //   res.send({ "name" : "Tefy" })


}

)





app.listen(PORT,()=>{

    console.log(`SERVER LISTENIN ON PORT http://localhost:${PORT}`)
}


)