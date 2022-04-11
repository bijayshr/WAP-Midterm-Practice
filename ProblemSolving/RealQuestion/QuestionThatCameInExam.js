let studentAnswers = [{qid:1, answer:'a'}, {qid:2, answer:'a'}, {qid:3, answer:'c'}]
let correctAnswers = [{qid:1, answer:'a'}, {qid:2, answer:'a'}, {qid:3, answer:'a'}]


function checkAnswer(studentAnswers, correctAnswers){
    let count = 0;
    for(let i=0; i<studentAnswers.length; i++){
        for(let j=0; j<correctAnswers.length; j++){
            if(studentAnswers[i].qid === correctAnswers[j].qid){
                if(studentAnswers[i].answer === correctAnswers[j].answer){
                    count++;
                }
                break;
            }
        }
    }
    return count;
}

console.log(checkAnswer(studentAnswers, correctAnswers));