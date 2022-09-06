const fs = require("fs");
const readline = require("readline");

// percobaan membuat sebuah file dengan module fs writeFileSync
fs.writeFileSync("text2.txt", "ini adalah percobaan module fs writeFileSync");

// percobaan membaca sebuah file dengan module fs readFile
fs.readFile("text2.txt", "utf-8", (err, data) => {
    if (err) throw err;
    console.log(data);
});

// membuat interface cli sehingga dapat melakukan input/output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// menambahkan pertanyaan kedalam cli
rl.question("Siapa nama anda? ", (name) => {
    rl.question("Berapa nomor telepon anda? ", (number) => {
        rl.question("Apa alamat email anda? ", (email) => {
            console.log(`Hallo ${name}, nomor teleponmu adalah ${number}, dan alamat emailmu adalah ${email}`);
            rl.close();
        });
    });
});
