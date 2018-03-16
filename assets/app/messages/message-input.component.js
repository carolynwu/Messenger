import { Component } from "@angular/core";
import { MessageService } from "./message.service";
import { Message } from "./message.model";
var MessageInputComponent = /** @class */ (function () {
    function MessageInputComponent(messageService) {
        this.messageService = messageService;
    }
    //updating existing message
    //updating existing message
    MessageInputComponent.prototype.onSubmit = 
    //updating existing message
    function (form) {
        //console.log(form);
        if (this.message) {
            //edit
            this.message.content = form.value.content;
            this.messageService.updateMessage(this.message)
                .subscribe(function (result) { return console.log(result); });
            this.message = null;
        }
        else {
            //create
            var message = new Message(form.value.content, "carolyn");
            this.messageService.addMessage(message)
                .subscribe(function (data) { return console.log(data); }, function (error) { return console.error(error); });
        }
        form.resetForm();
    };
    MessageInputComponent.prototype.onClear = function (form) {
        this.message = null;
        form.resetForm();
    };
    //input component gets informed when clicked edit button
    //input component gets informed when clicked edit button
    MessageInputComponent.prototype.ngOnInit = 
    //input component gets informed when clicked edit button
    function () {
        var _this = this;
        this.messageService.messageIsEdit.subscribe(function (message) { return _this.message = message; });
    };
    MessageInputComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-message-input',
                    templateUrl: './message-input.component.html',
                },] },
    ];
    /** @nocollapse */
    MessageInputComponent.ctorParameters = function () { return [
        { type: MessageService, },
    ]; };
    return MessageInputComponent;
}());
export { MessageInputComponent };
