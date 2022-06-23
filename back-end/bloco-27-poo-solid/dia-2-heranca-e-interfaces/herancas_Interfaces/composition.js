"use strict";
class ConsoleLogger {
    log(text) {
        console.log('ConsoleLogger', text);
    }
}
class ConsoleLogger2 {
    log(text) {
        console.log('ConsoleLogger2', text);
    }
}
class ExampleDatabase {
    constructor(logger = new ConsoleLogger()) {
        this.logger = logger;
    }
    save(key, value) {
        this.logger.log(`${key}, ${value}`);
    }
}
const log1 = new ConsoleLogger();
const log2 = new ConsoleLogger2();
const ex1 = new ExampleDatabase(log1);
const ex2 = new ExampleDatabase(log2);
const ex3 = new ExampleDatabase();
ex1.save('chave 1', 'valor 1');
ex2.save('chave 2', 'valor 2');
ex3.save('chave 3', 'valor 3');
