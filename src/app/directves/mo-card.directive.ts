import { AfterViewInit, Directive, ElementRef, Input } from "@angular/core";
import { MoService } from "../mo-btn.service";

@Directive({
  selector: "[MoCard]"
})
export class MoCardDirective implements AfterViewInit {
  @Input() theme: string = "dark";
  @Input() size: string = "medium";
  @Input() round: boolean = false;
  @Input() square: boolean = false;
  @Input() header: boolean = false;
  @Input() invite: boolean = false;
  @Input() position: string = "top";

  constructor(private el: ElementRef, private moService: MoService) {}

  ngAfterViewInit(): void {
    this.setTheme();
  }

  public setTheme = () => {
    this.moService.applyThemes();
    this.el.nativeElement.classList.add("mo-card");

    if (this.header) {
      this.el.nativeElement.classList.add("mo-card-header-" + this.theme);
    }
    if (this.invite) {
      this.header = false;
      this.el.nativeElement.classList.add(
        "mo-card-invite-" + this.theme + "-" + this.position
      );
    }
    if (this.round) {
      this.el.nativeElement.classList.add("mo-card-rounded");
    }
    if (this.square) {
      this.el.nativeElement.classList.add("mo-card-squared");
    }
    this.el.nativeElement.classList.add("mo-border-" + this.theme);
  };
}
