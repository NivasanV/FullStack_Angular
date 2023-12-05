import { Component } from "@angular/core";

@Component({
    templateUrl:'./header.component.html',
    styleUrl:'./header.component.css',
    selector:'app-header',
    standalone: true
})
export class HeaderComponent{
    message:string ="Student Management App";
    
    sayHello():string {
        return "Method works";
    }
}
