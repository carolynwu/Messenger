import {Message} from "./message.model";
import {Http,Response} from "@angular/http";
import"rxjs/Rx";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
@Injectable()

export class MessageService{
    private messages:Message[]=[];

    constructor(private http:Http){}

    addMessage(message:Message){
        this.messages.push(message);
        const body=JSON.stringify(message);
        const headers=new Headers({'Content-Type': 'application/json'});
        return this.http.post("http://localhost:3000/message",body,{headers:headers})//observable
              .map((response:Response)=>response.json())
            .catch((error:Response)=> Observable.throw(error.json()));
    }

    getMessage(){
        return this.messages;
    }

    deleteMessage(message:Message){
        this.messages.splice(this.messages.indexOf(message),1);
    }
}