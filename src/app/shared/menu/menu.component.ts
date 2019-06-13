import { Component } from "@angular/core";

@Component({
    selector : 'ap-menu',
    template: './menu.component.html'
})
export class MenuComponent {

    isShown = false;

    toggle(){        
        this.isShown = !this.isShown;
    }
}