import { NgModule } from "@angular/core";
import { DarkOnHoverDirective } from "./darken-on-hover.directive";

@NgModule({
    declarations: [DarkOnHoverDirective],
    exports : [ DarkOnHoverDirective ]
})
export class DarkenOnHoverModule
{}