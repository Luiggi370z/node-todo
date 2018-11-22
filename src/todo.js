import fs from "fs"

let todoList = []

const saveDB = _ => {
    let data = JSON.stringify(todoList)

    fs.writeFile('./db/data.json', data, (err) => {
        if (err) throw new Error(`Error during file: ${err}`)
    })
}

const loadDB = _ => {
    try {
        todoList = require('../db/data.json')
    } catch (err) {
        todoList = []
    }
}

export const Create = (description) => {
    loadDB()

    let todo = {
        description,
        completed: false
    }

    todoList.push(todo)

    saveDB()

    return todo
}

export const List = () => {
    loadDB()
    return todoList
}

export const Update = (description, completed = true) => {
    loadDB()

    let index = todoList.findIndex(task => task.description === description)

    if (index > 0) {
        todoList[index].completed = completed
        saveDB()
        return true
    }

    return false
}

export const Delete = (description) => {
    loadDB()

    let newArray = todoList.filter(task => task.description !== description)

    if (todoList.length === newArray.length) {
        return false
    }

    todoList = newArray
    saveDB()
    return true
};