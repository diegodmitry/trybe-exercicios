const fs = require('fs').promises;

const readManyFiles = async () => {
    const strings = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];
    const result = strings.map(async (el, i) => {
        // return `File${i+1}.txt`
        fs.writeFile(`./file${i + 1}.txt`, el);
        // console.log(result.json());
    });

    // Read files
    const fileNames = [
        'file1.txt',
        'file2.txt',
        'file3.txt',
        'file4.txt',
        'file5.txt',
    ];
    const fileContents = await Promise.all(
        fileNames.map((fileName) => fs.readFile(fileName, 'utf-8'))
    );
    
    const newFileContent = fileContents.join(' ');

    await fs.writeFile('./fileAll.txt', newFileContent);

};
readManyFiles();