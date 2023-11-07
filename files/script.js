let fs = require('fs');

fs.writeFile('test.txt', 'Hello World', (error) => {
    if (error) throw error;

    console.log('201: File created with success');
});

fs.appendFile('test.txt', ' - New Hello World', (error) => {
    if (error) throw error;

    console.log('200: File updated with success');
});

fs.rename('test.txt', 'Test.txt', (error) => {
    if (error) throw error;

    console.log('200: File renamed with success');
});

fs.readFile('Test.txt', 'UTF8', (error, data) => {
    if (error) throw error;

    console.log(data);
});

fs.unlink('Test.txt', (error) => {
    if (error) throw error;

    console.log('200: File deleted with success');
});
