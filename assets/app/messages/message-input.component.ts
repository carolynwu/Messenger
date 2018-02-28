import {Component} from "@angular/core";
import {MessageService} from "./message.service";
import {Message} from "./message.model";
import {NgForm} from "@angular/forms";

@Component({
    selector:'app-message-input',
    templateUrl: './message-input.component.html',
})
//pass input to console
export class MessageInputComponent{
    constructor(private messageService: MessageService){}


    onSubmit(form:NgForm){
     //console.log(form);
        const message=new Message(form.value.content, "carolyn");
        this.messageService.addMessage(message);
        form.resetForm();

    }
}