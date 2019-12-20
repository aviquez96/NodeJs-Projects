const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');

yargs.version('1.1.0')

yargs.command({
    command: 'add',
    description: 'Add a new note',
    handler: function() {
        console.log("adding a new note");
    }
})

yargs.command({
    command: 'remove',
    description: "Removes a note",
    handler: function() {
        console.log("removing the note")
    }
})

yargs.command({
    command: 'list',
    description: "Listing all the notes",
    handler: function() {
        console.log("listing the notes")
    }
})

yargs.command({
    command: 'read',
    description: "Reading the notes",
    handler: function() {
        console.log("reading the notes")
    }
})

console.log(yargs.argv);





