import {Message} from "./message.model";
import {Http,Response,Headers} from "@angular/http";
import"rxjs/Rx";
import {Injectable,EventEmitter} from "@angular/core";
import {Observable} from "rxjs";

@Injectable()

export class MessageService{
    private messages:Message[]=[];
    messageIsEdit =new EventEmitter<Message>();

    constructor(private http:Http){}

    addMessage(message:Message){
        const body=JSON.stringify(message);
        const headers=new Headers({'Content-Type': 'application/json'});
        const token=localStorage.getItem("token")
            ? "?token=" +localStorage.getItem("token")
            :"";
        return this.http.post("http://localhost:3000/message"+token,body,{headers:headers})//observable
              .map((response:Response)=>{
                 const result =response.json();
                 const message=new Message(result.obj.content, "carolyn", result.obj._id,null);
                 this.messages.push(message);
                 return message;
              })
            .catch((error:Response)=> Observable.throw(error.json()));

    }
//override
    getMessage(){
        return this.http.get("http://localhost:3000/message")
            .map((response:Response)=>{
                const messages=response.json().obj;
                let transformedMessages:Message[]=[];
                for(let message of messages){
                    transformedMessages.push(new Message(message.content,"carolyn", message._id,null));
                }
                this.messages=transformedMessages;
                return transformedMessages;
        })
            .catch((error:Response)=>Observable.throw(error.json()));
    }

    // the service as a middle man between MessageComponent and input component
    editMessage(message:Message){
        this.messageIsEdit.emit(message);
    }

    updateMessage(message:Message){
        const body=JSON.stringify(message);
        const headers=new Headers({'Content-Type': 'application/json'});
        const token=localStorage.getItem("token")
            ? "?token=" +localStorage.getItem("token")
            :"";
        return this.http.patch("http://localhost:3000/message/"+message.messageId+token,body,{headers:headers})//observable
            .map((response:Response)=>response.json())
            .catch((error:Response)=> Observable.throw(error.json()));
    }

    deleteMessage(message:Message){
        this.messages.splice(this.messages.indexOf(message),1);
        const token=localStorage.getItem("token")
            ? "?token=" +localStorage.getItem("token")
            :"";
        return this.http.delete("http://localhost:3000/message/"+message.messageId +token)//observable
            .map((response:Response)=>response.json())
            .catch((error:Response)=> Observable.throw(error.json()));
    }
}