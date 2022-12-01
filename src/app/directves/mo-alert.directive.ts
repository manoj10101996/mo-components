import { AfterViewInit, Directive, ElementRef, Input } from "@angular/core";
import { MoService } from "../mo-btn.service";

@Directive({
  selector: "[MoAlert]"
})
export class MoAlertDirective implements AfterViewInit {
  @Input() theme: string = "dark";
  @Input() outline: boolean = false;
  @Input() invite: boolean = false;
  @Input() round: boolean = false;
  @Input() square: boolean = false;
  @Input() position: string = "left";
  @Input() fill: boolean = false;

  constructor(private el: ElementRef, private moService: MoService) {}

  ngAfterViewInit(): void {
    this.setTheme();
  }

  public setTheme = () => {
    this.moService.applyThemes();
    this.el.nativeElement.classList.add("mo-alert");
    if (this.theme && !this.outline && !this.invite && !this.fill) {
      this.el.nativeElement.classList.add("mo-alert-bg-" + this.theme);
    }
    if (this.outline && !this.fill) {
      this.el.nativeElement.classList.add("mo-alert-outline-bg-" + this.theme);
    }
    if (this.invite && !this.fill) {
      this.el.nativeElement.classList.add(
        "mo-alert-invite-" + this.theme + "-" + this.position
      );
    }
    if (this.fill) {
      this.el.nativeElement.classList.add("mo-alert-fill-" + this.theme);
    }
    if (this.round) {
      this.el.nativeElement.classList.add("mo-alert-rounded");
    } else if (this.square) {
      this.el.nativeElement.classList.add("mo-alert-squared");
    }
  };
}
