const chalk = require('chalk');
const yargs = require('yargs');
const notes = require("./notes")

yargs.version('1.1.0')

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: "Title of the note",
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: "Body of the note",
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        notes.addNote(argv.title, argv.body);
    }
})

yargs.command({
    command: 'remove',
    describe: "Removes a note",
    builder: {
        title: {
            describe: "Title of note removed",
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        notes.removeNote(argv.title);
    }
})

yargs.command({
    command: 'list',
    describe: "Listing all the notes",
    handler: function() {
        console.log("listing the notes")
    }
})

yargs.command({
    command: 'read',
    describe: "Reading the notes",
    handler: function() {
        console.log("reading the notes")
    }
})

yargs.parse();





