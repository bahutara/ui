import { globalCss } from "./stitches.config";

// import darkTheme from "./themes/dark";
// import lightTheme from "./themes/light";
import { palette } from "./tokens/colors";
import { grid } from "./tokens/layout";

const global = {
  "*": {
    "box-sizing": "border-box",
  },
  "*:before": {
    "box-sizing": "border-box",
  },
  "*:after": {
    "box-sizing": "border-box",
  },
};

export const globalStyles = globalCss({
  ":root": {
    ...palette,
    ...grid,
  },
  ...global,
//  ...lightTheme,
//  ...darkTheme,
});
