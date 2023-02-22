const input = process.argv.slice(2);

for (let i = 0; i < input.length; i++) {
  if (input[i] > 0 && !Number.isNaN(input[i])) {
    setTimeout(() => {
      process.stdout.write("\x07");
      console.log(".");
    }, input[i] * 100);
  }
}
