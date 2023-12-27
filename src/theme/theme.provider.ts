import {
    orange,
    sand,
    gray,
    white,
    black,
    indigo,
    red,
    green,
    amber,
    fontFamily,
    fontSize,
    lineHeight,
    functional01Weight,
    shadow,
  } from '@lds/themes';
  
  export const ThemeProvider = {
    //        0  1  2  3   4   5   6   7   8   9   10  11  12  13  14  15  16  17
    spacing: [0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 56, 64, 72, 80, 88],
    breakpoints: {
      xs: 0,
      sm: 600,
      md: 1000,
      lg: 1280,
      xl: 1920,
    },
    palette: {
      primary: {
        '0': orange['0'], // #FFE5C7
        '5': orange['5'], // #FFDEBD
        '10': orange['10'], // #FFD1A3
        '20': orange['20'], // #FFB777
        '30': orange['30'], // #FF9E3D
        '40': orange['40'], // #FC8422
        '50': orange['50'], // #D46A0C
        '60': orange['60'], // #B7590D
        '70': orange['70'], // #9C490C
        '80': orange['80'], // #7C3E09
        '90': orange['90'], // #61330F
        '100': orange['100'], // #49250E
      },
      secondary: {
        '0': sand['0'], // #F3F1E2
        '5': sand['5'], // #EAE7CD
        '10': sand['10'], // #E1DDC1
        '20': sand['20'], // #D5D2AF
        '30': sand['30'], // #C7C294
        '40': sand['40'], // #AAA46D
        '50': sand['50'], // #8D875F
        '60': sand['60'], // #79724D
        '70': sand['70'], // #67613F
        '80': sand['80'], // #534E32
        '90': sand['90'], // #47422A
        '100': sand['100'], // #3E3719
      },
      gray: {
        '0': gray['0'], // #F2F2F2
        '5': gray['5'], // #E6E6E6
        '10': gray['10'], // #D6D6D6
        '20': gray['20'], // #C2C2C2
        '30': gray['30'], // #ABABAB
        '40': gray['40'], // #919191
        '50': gray['50'], // #808080
        '60': gray['60'], // #6E6E6E
        '70': gray['70'], // #5E5E5E
        '80': gray['80'], // #4A4A4A
        '90': gray['90'], // #383838
        '100': gray['100'], // #262626
      },
      text: {
        white: white, // #FFFFFF
        '0': gray['60'], // #6E6E6E
        '5': gray['80'], // #4A4A4A
        '10': gray['90'], // #383838
        '20': gray['100'], // #262626
        black: black, // #000000
      },
      common: {
        white: white, // #FFFFFF
        black: black, // #000000
      },
      background: {
        default: gray['0'], // #F2F2F2
        paper: white, // #FFFFFF
        sidebar: gray['90'], // #383838
      },
      info: {
        pure: indigo['70'], // #0E58EC
        light: indigo['0'], // #DFE8FC
      },
      error: {
        pure: red['60'], // #c61616
        light: red['0'], // #ffe4e4
      },
      success: {
        pure: green['70'], // #09732E
        light: green['0'], // #cefdaf
      },
      warning: {
        pure: amber['70'], // #795d00
        light: amber['0'], // #fdf3d3
      },
    },
    typography: {
      family: fontFamily['font-functional-01'],
      h1: {
        color: gray['100'], // #262626
        fontSize: fontSize['font-size-48'], // 48px
        fontWeight: functional01Weight['functional-01-weight-700'], // 700
        lineHeight: lineHeight['font-lineheight-120'], // 120%
      },
      h2: {
        color: gray['100'], // #262626
        fontSize: fontSize['font-size-40'], // 40px
        fontWeight: functional01Weight['functional-01-weight-600'], // 600
        lineHeight: lineHeight['font-lineheight-120'], // 120%
      },
      h3: {
        color: gray['100'], // #262626
        fontSize: fontSize['font-size-32'], // 32px
        fontWeight: functional01Weight['functional-01-weight-600'], // 600
        lineHeight: lineHeight['font-lineheight-120'], // 120%
      },
      h4: {
        color: gray['100'], // #262626
        fontSize: fontSize['font-size-24'], // 24px
        fontWeight: functional01Weight['functional-01-weight-700'], // 700
        lineHeight: lineHeight['font-lineheight-120'], // 120%
      },
      h5: {
        color: gray['100'], // #262626
        fontSize: fontSize['font-size-20'], // 20px
        fontWeight: functional01Weight['functional-01-weight-600'], // 600
        lineHeight: lineHeight['font-lineheight-120'], // 120%
      },
      h6: {
        color: gray['100'], // #262626
        fontSize: fontSize['font-size-16'], // 16px
        fontWeight: functional01Weight['functional-01-weight-600'], // 600
        lineHeight: lineHeight['font-lineheight-120'], // 120%
      },
      body1: {
        color: gray['90'], // #383838
        fontSize: fontSize['font-size-20'], // 20px
        fontWeight: functional01Weight['functional-01-weight-600'], // 600
        lineHeight: lineHeight['font-lineheight-150'], // 150%
      },
      body2: {
        color: gray['100'], // #262626
        fontSize: fontSize['font-size-16'], // 16px
        fontWeight: functional01Weight['functional-01-weight-400'], // 400
        lineHeight: lineHeight['font-lineheight-150'], // 150%
      },
      body3: {
        color: gray['60'], // #6E6E6E
        fontSize: fontSize['font-size-14'], // 14px
        fontWeight: functional01Weight['functional-01-weight-400'], // 400
        lineHeight: lineHeight['font-lineheight-150'], // 150%
      },
      body4: {
        color: gray['100'], // #262626
        fontSize: fontSize['font-size-12'], // 12px
        fontWeight: functional01Weight['functional-01-weight-400'], // 400
        lineHeight: lineHeight['font-lineheight-120'], // 120%
      },
      button: {
        fontSize: fontSize['font-size-16'], // 16px
        fontWeight: functional01Weight['functional-01-weight-500'], // 500
        lineHeight: lineHeight['font-lineheight-150'], // 150%
      },
      caption: {
        color: gray['90'], // #383838
        fontSize: fontSize['font-size-12'], // 12px
        fontWeight: functional01Weight['functional-01-weight-500'], // 500
        lineHeight: lineHeight['font-lineheight-150'], // 150%
      },
    },
    shadows: {
      none: shadow.none,
      1: shadow['down-level-1'],
      2: shadow['down-level-2'],
      3: shadow['down-level-3'],
      4: shadow['down-level-4'],
    },
  };