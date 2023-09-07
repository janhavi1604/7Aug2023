import events from "events"
import fs from 'fs'
var eventEmitter=new events.EventEmitter()
eventEmitter.addListener("write-to-console",()=>{
console.log("Hi There")
})
eventEmitter.addListener("write-to-file",()=>{
fs.writeFile('data.txt','Hello World',()=>{
})
})
setTimeout(()=>{
    eventEmitter.emit("write-to-console")
},2000)