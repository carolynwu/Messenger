import {Component,OnInit} from "@angular/core";
import {MessageService} from "./message.service";
import {Message} from "./message.model";
import {NgForm} from "@angular/forms";

@Component({
    selector:'app-message-input',
    templateUrl: './message-input.component.html',
})
//pass input to console
export class MessageInputComponent implements OnInit{
    message:Message;

    constructor(private messageService: MessageService){}


    onSubmit(form:NgForm){
     //console.log(form);
        if(this.message){
            //edit
            this.message.content=form.value.content;
            this.message=null;
        }
        else {
            //create
            const message = new Message(form.value.content, "carolyn");
            this.messageService.addMessage(message)
                .subscribe(
                    data => console.log(data),
                    error => console.error(error)
                );
        }
        form.resetForm();

    }
    onClear(form:NgForm){
        this.message=null;
        form.resetForm();
    }

    //input component gets informed when clicked edit button
    ngOnInit(){
        this.messageService.messageIsEdit.subscribe(
            (message:Message)=>this.message=message
        );
    }
}