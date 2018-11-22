import argv from './config/yargs'
import {
    Create,
    List,
    Update,
    Delete
} from './src/todo'

import colors from 'colors'

let command = argv._[0]

switch (command) {
    case 'create':
        console.log('Create Command 👩‍🎨'.green)

        let todo = Create(argv.description)

        console.log(`Added todo: ${JSON.stringify(todo).yellow}`)
        break
    case 'list':
        console.log('List Command 😎'.green)
        let list = List()
        for (let task of list) {
            console.log('======TODO======'.green);
            console.log(task.description);
            console.log(`status: ${ task.completed ? 'Done' : 'Pending'}`);
            console.log('================'.green);
        }
        break

    case 'update':
        console.log('Update Command 💁‍♀️'.green)

        let updated = Update(argv.description, argv.completed)

        if (updated)
            console.log('Todo updated succesfully! 🙆🏻‍♂️')
        else
            console.log('Could not update Todo')
        break

    case 'delete':
        console.log('Delete Command ☹️'.green)

        let deleted = Delete(argv.description)

        if (deleted)
            console.log('Todo deleted succesfully! 🙆🏻‍♂️')
        else
            console.log('Could not delete Todo')
        break

    default:
        console.log('Command not found!'.red)
        break;
}