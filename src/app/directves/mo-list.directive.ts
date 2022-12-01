import { AfterViewInit, Directive, ElementRef, Input } from "@angular/core";
import { MoService } from "../mo-btn.service";

@Directive({
  selector: "[MoList]"
})
export class MoListDirective implements AfterViewInit {
  @Input() theme: string = "dark";
  @Input() outline: boolean = false;
  @Input() invite: boolean = false;
  @Input() fill: boolean = false;
  @Input() hover: boolean = false;
  @Input() round: boolean = false;
  @Input() square: boolean = false;
  @Input() position: string = "left";

  constructor(private el: ElementRef, private moService: MoService) {}

  ngAfterViewInit(): void {
    this.setTheme();
  }

  public setTheme = () => {
    this.moService.applyThemes();
    this.el.nativeElement.classList.add("mo-list");
    this.el.nativeElement.style.listStyleType = "none";
    if (this.theme && this.fill) {
      this.el.nativeElement.classList.add("mo-list-bg-" + this.theme);
    }
    if (this.theme && this.hover && this.outline && !this.fill) {
      this.el.nativeElement.classList.add("mo-list-hover-" + this.theme);
    }
    if (!this.outline) {
      this.el.nativeElement.classList.add("mo-list-border-none");
    }
    if (this.invite) {
      this.el.nativeElement.classList.add(
        "mo-list-invite-" + this.theme + "-" + this.position
      );
    }
    if (this.round) {
      this.el.nativeElement.classList.add("mo-list-rounded");
    } else if (this.square) {
      this.el.nativeElement.classList.add("mo-list-squared");
    }
  };
}
