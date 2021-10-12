const chalk = require('chalk');
var readlineSync = require('readline-sync');

var userName = readlineSync.question("Enter Your Name: ");
console.log("---------------------------------------------------------------------------")

console.log(chalk.blue("Welcome " + userName + " to Youtuber's quiz"));
console.log("                                                    ")
console.log(chalk.red("So here are some basic instructions for the quiz: "));
console.log("1.Three options will be given to you, and you have to select the correct option.")
console.log("2. You will be awarded one point for each correct answer ")
console.log("3. There will be no negative scoring as you are not giving JEE exams")
console.log( )

var questions = [
  {
    question: 'Who is the biggest individual youtuber of India?', A: 'Carrryminati',
    B: 'Bhuvan Bam',
    C: 'Ashish Chanchlani',
    answer: "A"    
  },{
    question: 'Which channel has the most number of subscibers in the world?',
    A: 'T-series',
    B: 'Pewdiepie',
    C: 'Mr. beast',
    answer: "A"
    },{
      question: 'Which Indian youtuber produced the song "rahguzar"? ',
      A: 'Samay Raina',
      B: 'Bhuvan Bam',
      C: 'Mumbiker Nikhil',
      answer: 'B'
    },{
      question: 'Which Indian youtuber organised a chess league called "chess super league"?',
      A: 'Gaurav Taneja',
      B: 'Beastats',
      C: 'Samay Raina',
      answer: 'C'
    }
];
var score = 0;

for(var i=0; i<questions.length; i++){
  console.log(chalk.inverse(questions[i].question));
  console.log(chalk.cyan("A: " +questions[i].A));
  console.log(chalk.cyan("B: " +questions[i].B));
  console.log(chalk.cyan("C: " +questions[i].C));

  var userAnswer = readlineSync.question("Answer: ");

  if(userAnswer.toLowerCase() === questions[i].answer.toLowerCase()){
    console.log(chalk.bgGreen("You were right!"));
    score +=1;
    console.log("Current Score: " + score);
  }
  else{
    console.log(chalk.bgRed("You were wrong!"));
  }
    console.log("Current Score: " + score);
}
console.log(chalk.yellow("You scored: "+score))
