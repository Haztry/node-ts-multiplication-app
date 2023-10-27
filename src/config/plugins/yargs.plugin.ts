
import yargs, { options } from 'yargs'
import {hideBin} from 'yargs/helpers'


export const yarg = yargs(hideBin(process.argv))

    .option('b',{
        alias: 'base',
        type: 'number',
        demandOption: true,
        descripe: 'Multiplicatión Table Base'
    })
    .option('l',{
        alias: 'limit',
        type: 'number',
        default: 10,
        descripe: 'Multiplicatión Table Limit'
    })
    .option('s',{
        alias: 'show',
        type: 'boolean',
        default: false,
        descripe: 'Show multiplication table'
    })
    .option('n',{
        alias: 'name',
        type: 'string',
        default: 'multiplication-table',
        descripe: 'File Name'
    })
    .option('d',{
        alias: 'destination',
        type: 'string',
        default: 'outputs',
        descripe: 'File Destinationd'
    })



    .check((argv, options) => {

        if (argv.b < 1) throw 'Error: Base must be grater than 0'

        return true
    })
    .parseSync()