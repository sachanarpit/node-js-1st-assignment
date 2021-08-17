const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

// rl.question("What do you think of Node.js? \n ", (answer) => {
//   // TODO: Log the answer in a database
//   console.log(`Thank you for your valuable feedback \n: ${answer}`);

//   rl.close();
// });

rl.setPrompt(
  "Please select an option: 1 - Show all books, 2 - Add a new book, 3 - Quit\n"
);
rl.prompt();

var book = ["rich-dad-poor-dad", "the-power-of-habits"];

rl.on("line", (num) => {
  if (num == 1) {
    console.log(book);
  } else if (num == 2) {
    rl.question("add the name of the book \n", (answer) => {
      book.push(answer);
      console.log("Book is added succesfully \n");
      rl.prompt;
    });
  } else if (num == 3) {
    rl.question(
      `Are you sure you want to quit - press Y to quit \n`,
      (answer) => {
        if (answer == "y" || answer == "Y") {
          rl.close();
        } else {
          rl.prompt;
        }
      }
    );
  } else {
    console.log(
      `You have selected an invalid entry so please press 1, 2 or 3 \n`
    );
  }
  rl.prompt();
});

rl.on("close", () => {
  console.log(`Bye Bye \n`);
});
