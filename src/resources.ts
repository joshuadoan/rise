import { ImageSource } from "excalibur";
import sword from "./images/sword.png";
import rougeLikeImageSrc from "./images/kenney_simple-space/Tilesheet/simpleSpace_tilesheet@2.png";

let Resources = {
  Sword: new ImageSource(sword),
  Tile: new ImageSource(rougeLikeImageSrc),
};

export { Resources };
