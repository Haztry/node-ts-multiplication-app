import { CreatTable } from "../domain/use-cases/create-table.use-case";
import { SaveFile } from "../domain/use-cases/save-file.use-case";

interface RunOptions{
    base:number,
    limit:number,
    showTable:boolean,
    filedestination:string,
    fileName: string,
}



export class ServerApp{


    static run({base, limit, showTable, filedestination, fileName}: RunOptions){
        console.log("Server running...");
        
        const table = new CreatTable().execute({base,limit})
        const wasCreated = new SaveFile()
        .execute({
            fileContent: table,
            filedestination,
            fileName: fileName
        })

        if(showTable) console.log(table);

        (wasCreated)
        ? console.log('File Created')
        : console.log('File not created');
    }
}