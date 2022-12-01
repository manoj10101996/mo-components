import { Injectable } from "@angular/core";
import { THEME, THEMES } from "./sources/THEME";

@Injectable({
  providedIn: "root"
})
export class MoService {
  public themes: { [key: string]: THEME } = THEMES;
  public convertHex(hexCode: string, opacity = 1) {
    var hex = hexCode.replace("#", "");

    if (hex.length === 3) {
      hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }

    var r = parseInt(hex.substring(0, 2), 16),
      g = parseInt(hex.substring(2, 4), 16),
      b = parseInt(hex.substring(4, 6), 16);

    /* Backward compatibility for whole number based opacity values. */
    if (opacity > 1 && opacity <= 100) {
      opacity = opacity / 100;
    }

    return "rgba(" + r + "," + g + "," + b + "," + opacity + ")";
  }

  public applyThemes = () => {
    for (const key in this.themes) {
      if (Object.prototype.hasOwnProperty.call(this.themes, key)) {
        const theme = this.themes[key];
        document.body.style.setProperty("--mo-bg-" + key, theme.color);
      }
    }
  };
}
