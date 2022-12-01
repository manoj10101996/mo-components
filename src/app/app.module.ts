import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { MoService } from "./mo-btn.service";
import { AppComponent } from "./app.component";
import { MoAlertDirective } from "./directves/mo-alert.directive";
import { MoBtnDirective } from "./directves/mo-btn.directive";
import { MoCardDirective } from "./directves/mo-card.directive";
import { MoCheckboxDirective } from "./directves/mo-checkbox.directive";
import { MoInputDirective } from "./directves/mo-input.directive";
import { MoListDirective } from "./directves/mo-list.directive";
import { MoRadioDirective } from "./directves/mo-radio.directive";

@NgModule({
  declarations: [
    AppComponent,
    MoBtnDirective,
    MoInputDirective,
    MoCheckboxDirective,
    MoRadioDirective,
    MoCardDirective,
    MoAlertDirective,
    MoListDirective
  ],
  imports: [BrowserModule],
  providers: [MoService],
  bootstrap: [AppComponent]
})
export class AppModule {}
