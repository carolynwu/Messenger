import {Component} from "@angular/core";

import{ Message} from "./message.model";

@Component({
    selector: 'app-message-list',
    template:`
        <div class="col-md-8 col-md-offset-2">
            <!--dynamically add messages using ng !-->
            <app-message
                    [message]="message"
                    (editClicked)="message.content=$event"
             *ngFor="let message of messages"> </app-message>
        </div> 
    `
})
export class MessageListComponent{
    messages: Message[]=[
        new Message('Some message','carolyn'),
        new Message('Something else', 'carolyn'),
        new Message('lalala', 'carolyn')
    ];

}