import { createStitches, CSS as StitchesCSS } from "@stitches/react";

import { radii } from "./tokens/radii";
import { spaces as space } from "./tokens/spaces";
import {
  fonts,
  fontSizes,
  fontWeights,
  letterSpacings,
  lineHeights,
} from "./tokens/typography";
import { media } from "./tokens/media";
import { sizes } from "./tokens/sizes";
import { utils } from "./tokens/utils";
import { zIndices } from "./tokens/zIndices";
import { Prefixed } from "@stitches/react/types/util";

const { config, css, getCssText, globalCss, keyframes, styled, theme } =
  createStitches({
    theme: {
      fonts,
      space,
      sizes,
      fontSizes,
      lineHeights,
      letterSpacings,
      fontWeights,
      radii,
      zIndices,
    },
    media,
    utils,
  });

export type CSS = StitchesCSS<typeof config>;
export type { VariantProps } from "@stitches/react";

const getVariant = <
  K extends keyof typeof config.theme,
  T extends keyof typeof config.theme[K],
  P extends Prefixed<"$", T>,
  R extends Record<T, CSS>
>(
  prop: K,
  map: (tokenValue: P) => CSS
): R => {
  const values = Object.keys(config.theme[prop]) as T[];
  return values.reduce<R>(
    (acc, tokenValue) => ({
      ...acc,
      [tokenValue]: map(`$${String(tokenValue)}` as P),
    }),
    {} as R
  );
};

export { getVariant };

export { Shadows } from "./tokens/shadows";
export { config, css, getCssText, globalCss, keyframes, styled, theme };
