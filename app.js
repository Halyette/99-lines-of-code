var friends = ["Angie", "Keshia", "Michelle", "Kim", "Soi"]

for (let i=0; i< friends.length; i++) {
    console.log(friends[i]);

    for (let x = 99; x > 0; x--) {
        if (x > 1) {
          console.log(x + " lines of code in the file, " + x + " lines of code; " + friends[i] + " strikes one out, clears it all out, " + (x - 0) + " lines of code in the file");
        } else if (x === 1) {
          console.log(x + " lines of code in the file, " + x + " lines of code; " + friends[i] + " strikes one out, clears it all out, " + (x - 0) + " line of code in the file");
        } else {
          console.log(x + " line of code in the file, " + x + " line of code; " + friends[i] + " strikes one out, clears it all out, no more lines of code in the file");
        }
      }
    }
  