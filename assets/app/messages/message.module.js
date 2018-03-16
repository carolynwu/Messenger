import { NgModule } from "@angular/core";
import { MessageComponent } from "./message.component";
import { MessageListComponent } from "./message-list.component";
import { MessagesComponent } from "./messages.component";
import { MessageInputComponent } from "./message-input.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { MessageService } from "./message.service";
var MessageModule = /** @class */ (function () {
    function MessageModule() {
    }
    MessageModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        MessageComponent,
                        MessageListComponent,
                        MessagesComponent,
                        MessageInputComponent
                    ],
                    imports: [
                        CommonModule,
                        FormsModule
                    ],
                    providers: [MessageService]
                },] },
    ];
    /** @nocollapse */
    MessageModule.ctorParameters = function () { return []; };
    return MessageModule;
}());
export { MessageModule };
