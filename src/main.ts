import {
  Color,
  DisplayMode,
  Engine,
  ImageSource,
  Loader,
  SpriteSheet,
  TileMap,
} from "excalibur";
import { Player } from "./player";
import { Resources } from "./resources";
import { COLORS } from "./consts/colors";
import rougeLikeImageSrc from "./images/kenney_simple-space/Tilesheet/simpleSpace_tilesheet@2.png";
const kennyRougeLikePack = new ImageSource(rougeLikeImageSrc);

// Create a sprite sheet

class Game extends Engine {
  constructor() {
    super({
      width: 800,
      height: 600,
      displayMode: DisplayMode.FitScreen,
      backgroundColor: Color.fromHex(COLORS.BLACK),
    });
  }
  initialize() {
    const player = new Player();
    this.add(player);

    const loader = new Loader([Resources.Sword, Resources.Tile]);

    const rougeLikeSpriteSheet = SpriteSheet.fromImageSource({
      image: Resources.Tile,
      grid: {
        rows: 5,
        columns: 5,
        spriteHeight: 16,
        spriteWidth: 16,
      },
      spacing: {
        margin: {
          x: 1,
          y: 1,
        },
      },
    });

    // Create a tilemap
    const tilemap = new TileMap({
      rows: 10,
      columns: 10,
      tileWidth: 16,
      tileHeight: 16,
    });

    // loop through tilemap cells
    for (let cell of tilemap.tiles) {
      const sprite = rougeLikeSpriteSheet.getSprite(0, 0);
      if (sprite) {
        console.log("DUDE", sprite);
        cell.addGraphic(sprite);
      }
    }

    this.add(tilemap);
    this.start(loader);
  }
}

export const game = new Game();
game.initialize();
