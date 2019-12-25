const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) => {
    let notes = loadNotes();
    const duplicateNote = notes.find((note) => note.title === title)

    //When you add this, you have to say "node inspect ..." to get debugger going and access its contents in chrome//debugger; essentially a breakpoint
    // debugger

    if(!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes);
        console.log(chalk.green.inverse("New note added!"));
    } else {
        console.log(chalk.red.inverse("Note title taken!"))
    }
}

const removeNote = (title) => {
    let notes = loadNotes();
    const notesToKeep = notes.filter((note) => note.title !== title)

     if (notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse("Note removed!"))
        saveNotes(notesToKeep);
     } else {
        console.log(chalk.red.inverse("No note found!"))
     }
}

const listNotes = () => {
    let notes = loadNotes();

    console.log(chalk.green.inverse("Your notes: "))

    notes.forEach(element => {
        console.log(element.title);
    });
}

const readNote = (title) => {
    let notes = loadNotes();

    const foundNote = notes.find((note) => note.title === title);

    if (foundNote) {
        console.log(chalk.green.inverse(foundNote.title) + " " + foundNote.body)
    } else {
        console.log(chalk.red.inverse("Note not found"))
    }

}

const saveNotes = (notes) => {
    fs.writeFileSync('notes.json', JSON.stringify(notes));
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}