import { AfterViewInit, Directive, ElementRef, Input } from "@angular/core";
import { MoService } from "../mo-btn.service";

@Directive({
  selector: "[MoInput]"
})
export class MoInputDirective implements AfterViewInit {
  @Input() theme: string = "dark";
  @Input() size: string = "medium";
  @Input() round: boolean = false;
  @Input() square: boolean = false;

  constructor(private el: ElementRef, private moService: MoService) {}

  ngAfterViewInit(): void {
    this.setTheme();
  }

  public setTheme = () => {
    this.moService.applyThemes();
    if (this.theme) {
      this.el.nativeElement.classList.add("mo-input-bg-" + this.theme);
    }
    this.el.nativeElement.classList.add("mo-input");
    this.el.nativeElement.classList.add("mo-input-" + this.size);
    if (this.round) {
      this.el.nativeElement.classList.add("mo-input-rounded");
    } else if (this.square) {
      this.el.nativeElement.classList.add("mo-input-squared");
    }
  };
}
