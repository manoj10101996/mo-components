import { AfterViewInit, Directive, ElementRef, Input } from "@angular/core";
import { MoService } from "../mo-btn.service";

@Directive({
  selector: "[MoRadio]"
})
export class MoRadioDirective implements AfterViewInit {
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
    this.el.nativeElement.classList.add("mo-radio");
    this.el.nativeElement.classList.add("mo-radio-checked-" + this.theme);
  };
}
