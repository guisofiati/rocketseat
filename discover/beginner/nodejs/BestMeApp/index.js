const questions = [
    "What did you learn today?",
    "What do you need to learn today?",
    "What do you need to improve?"
]

const ask = (index = 0) => {
    process.stdout.write("\n" + questions[index] + " > ");
}

ask()

const answers = [];
process.stdin.on("data", data => {
    answers.push(data.toString().trim());
    if (answers.length < questions.length) {
        ask(answers.length);
    }
    else {
        process.exit();
    }
});

process.on('exit', () => {
    console.log('\n' + 'Wow! Thanks for answer the questions' + '\n'); 
    for (let i=0; i<questions.length; i++) {
        console.log(`Question: ${questions[i]}` + "\n" + `Answer: ${answers[i]}` + "\n");
    }
});