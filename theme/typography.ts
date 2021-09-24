import tokens from '@contentful/forma-36-tokens'

export const Typography = {
  fontWeight: {
    normal: tokens.fontWeightNormal,
    medium: tokens.fontWeightMedium,
    semibold: tokens.fontWeightDemiBold,
  },
  fontFamily: {
    sans: tokens.fontStackPrimary,
    primary: tokens.fontStackPrimary,
    mono: tokens.fontStackMonospace,
  },
  fontSize: {
    'xs': '.5rem',
    'sm': tokens.fontSizeS,
    'tiny': '.875rem',
    'base': '16px',
    'm': tokens.fontSizeM,
    'lg': tokens.fontSizeL,
    'xl': tokens.fontSizeXl,
    '2xl': tokens.fontSize2Xl,
    '3xl': tokens.fontSize3Xl,
    '4xl': tokens.fontSize4Xl,
    '5xl': '4rem',
    '6xl': '5rem',
    '7xl': '6rem',
  },
  letterSpacing: {
    wide: tokens.letterSpacingWide,
  },
  lineHeight: {
    'normal': tokens.lineHeightDefault,
    'condensed': tokens.lineHeightCondensed,
    'sm': tokens.lineHeightS,
    'md': tokens.lineHeightM,
    'lg': tokens.lineHeightL,
    'xl': tokens.lineHeightXl,
    '2xl': tokens.lineHeight2Xl,
    '3xl': tokens.lineHeight3Xl,
    '4xl': tokens.lineHeight4Xl,
  },
}
