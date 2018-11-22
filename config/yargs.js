import yargs from 'yargs'

const baseOption = {
    description: {
        demand: true,
        alias: 'd'
    }
}

const argv = yargs
    .command('create', 'Create new Todo Task', baseOption)
    .command('update', 'Update existing Todo Task', {
        ...baseOption,
        completed: {
            alias: 'c',
            default: true,
            type: 'boolean',
        }
    })
    .command('list', 'Show all existing Todos Tasks')
    .command('delete', 'Delete selected task.', baseOption)
    .help()
    .argv

export default argv