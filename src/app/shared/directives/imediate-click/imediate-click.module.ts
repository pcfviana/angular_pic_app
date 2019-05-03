import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ImediateClickDirective } from "./imediate-click.directive";

@NgModule({
    declarations: [ ImediateClickDirective ],
    exports: [ImediateClickDirective],
    imports:[ CommonModule]
})
export class ImediateClickDirectiveModule {}