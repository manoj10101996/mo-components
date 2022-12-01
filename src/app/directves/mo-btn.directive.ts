import { AfterViewInit, Directive, ElementRef, Input } from "@angular/core";
import { MoService } from "../mo-btn.service";

@Directive({
  selector: "[MoBtn]"
})
export class MoBtnDirective implements AfterViewInit {
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
    this.el.nativeElement.classList.add("mo-btn");
    this.el.nativeElement.classList.add("mo-btn-" + this.size);
    if (this.theme) {
      this.el.nativeElement.classList.add("mo-btn-bg-" + this.theme);
    }
    if (this.round) {
      this.el.nativeElement.classList.add("mo-btn-rounded");
    } else if (this.square) {
      this.el.nativeElement.classList.add("mo-btn-squared");
    }
  };
}
