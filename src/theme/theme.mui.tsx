import { createTheme } from '@mui/material';
import { ptBR } from '@mui/material/locale';
import { IconAlertCircle } from '@tabler/icons-react';

import { ThemeProvider } from './theme.provider';

export const MuiTheme = createTheme(
  {
    spacing: ThemeProvider.spacing,
    breakpoints: {
      values: ThemeProvider.breakpoints,
    },
    palette: {
      mode: 'light',
      primary: {
        main: ThemeProvider.palette.primary[40],
        light: ThemeProvider.palette.primary[30],
        dark: ThemeProvider.palette.primary[50],
        contrastText: ThemeProvider.palette.common.white,
        '50': ThemeProvider.palette.primary[0],
        '100': ThemeProvider.palette.primary[5],
        '200': ThemeProvider.palette.primary[10],
        '300': ThemeProvider.palette.primary[20],
        '400': ThemeProvider.palette.primary[30],
        '500': ThemeProvider.palette.primary[40],
        '600': ThemeProvider.palette.primary[50],
        '700': ThemeProvider.palette.primary[60],
        '800': ThemeProvider.palette.primary[70],
        '900': ThemeProvider.palette.primary[80],
        A100: ThemeProvider.palette.primary[90],
        A200: ThemeProvider.palette.primary[100],
      },
      secondary: {
        main: ThemeProvider.palette.secondary[40],
        light: ThemeProvider.palette.secondary[30],
        dark: ThemeProvider.palette.secondary[50],
        contrastText: ThemeProvider.palette.common.white,
        '50': ThemeProvider.palette.secondary[0],
        '100': ThemeProvider.palette.secondary[5],
        '200': ThemeProvider.palette.secondary[10],
        '300': ThemeProvider.palette.secondary[20],
        '400': ThemeProvider.palette.secondary[30],
        '500': ThemeProvider.palette.secondary[40],
        '600': ThemeProvider.palette.secondary[50],
        '700': ThemeProvider.palette.secondary[60],
        '800': ThemeProvider.palette.secondary[70],
        '900': ThemeProvider.palette.secondary[80],
        A100: ThemeProvider.palette.secondary[90],
        A200: ThemeProvider.palette.secondary[100],
      },
      grey: {
        '50': ThemeProvider.palette.gray[0],
        '100': ThemeProvider.palette.gray[5],
        '200': ThemeProvider.palette.gray[10],
        '300': ThemeProvider.palette.gray[20],
        '400': ThemeProvider.palette.gray[30],
        '500': ThemeProvider.palette.gray[40],
        '600': ThemeProvider.palette.gray[50],
        '700': ThemeProvider.palette.gray[60],
        '800': ThemeProvider.palette.gray[70],
        '900': ThemeProvider.palette.gray[80],
        A100: ThemeProvider.palette.gray[90],
        A200: ThemeProvider.palette.gray[100],
      },
      background: {
        default: ThemeProvider.palette.background.default,
        paper: ThemeProvider.palette.background.paper,
      },
      text: {
        primary: ThemeProvider.palette.text[20],
        secondary: ThemeProvider.palette.text[0],
        disabled: ThemeProvider.palette.text[5],
      },
      common: ThemeProvider.palette.common,
      info: {
        main: ThemeProvider.palette.info.pure,
        light: ThemeProvider.palette.info.light,
      },
      warning: {
        main: ThemeProvider.palette.warning.pure,
        light: ThemeProvider.palette.warning.light,
      },
      success: {
        main: ThemeProvider.palette.success.pure,
        light: ThemeProvider.palette.success.light,
      },
      error: {
        main: ThemeProvider.palette.error.pure,
        light: ThemeProvider.palette.error.light,
      },
    },
    typography: {
      fontFamily: [ThemeProvider.typography.family, 'sans-serif'].join(','),
      h1: ThemeProvider.typography.h1,
      h2: ThemeProvider.typography.h2,
      h3: ThemeProvider.typography.h3,
      h4: ThemeProvider.typography.h4,
      h5: ThemeProvider.typography.h5,
      h6: ThemeProvider.typography.h6,
      body1: ThemeProvider.typography.body1,
      body2: ThemeProvider.typography.body2,
      subtitle1: ThemeProvider.typography.body3,
      subtitle2: ThemeProvider.typography.body4,
      button: {
        ...ThemeProvider.typography.button,
        textTransform: 'initial',
      },
      caption: ThemeProvider.typography.caption,
    },
    shape: {
      borderRadius: ThemeProvider.spacing[2],
    },
    components: {
      MuiButton: {
        defaultProps: {
          variant: 'contained',
          color: 'secondary',
          size: 'medium',
        },
        styleOverrides: {
          root: ({ ownerState }) => ({
            borderRadius: ThemeProvider.spacing[1],
            boxShadow: ThemeProvider.shadows.none,

            minWidth: ThemeProvider.spacing[14],
            padding: `${ThemeProvider.spacing[2]}px ${ThemeProvider.spacing[6]}px`,

            ...(ownerState.size === 'small' && {
              height: ThemeProvider.spacing[8],
              minHeight: ThemeProvider.spacing[8],
            }),
            ...(ownerState.size === 'medium' && {
              height: ThemeProvider.spacing[10],
              minHeight: ThemeProvider.spacing[10],
            }),
            ...(ownerState.size === 'large' && {
              height: ThemeProvider.spacing[11],
              minHeight: ThemeProvider.spacing[11],
            }),

            ...(ownerState.variant === 'outlined' && {
              color: ThemeProvider.palette.primary[50],
              borderColor: ThemeProvider.palette.primary[50],
              borderWidth: '2px',
              '&:hover': {
                borderWidth: '2px',
              },
              '&:disabled': {
                borderWidth: '2px',
              },
            }),

            ...(ownerState.variant === 'text' && {
              color: ThemeProvider.palette.primary[60],
            }),

            ...(ownerState.disabled && {
              color: ThemeProvider.palette.text[5],

              ...(ownerState.variant === 'contained' && {
                backgroundColor: ThemeProvider.palette.gray[20] + '!important',
              }),
            }),

            ...(ownerState.color === 'error' && {
              color: ThemeProvider.palette.error.pure,
            }),
          }),
        },
      },
      MuiChip: {
        defaultProps: {
          variant: 'outlined',
          size: 'small',
        },
        styleOverrides: {
          root: ({ ownerState, theme }) => ({
            borderRadius: ThemeProvider.spacing[1],
            ...(ownerState.variant === 'outlined' && {
              backgroundColor:
                theme.palette[
                  ownerState.color === 'default' || !ownerState.color
                    ? 'primary'
                    : ownerState.color
                ].light,
            }),
          }),
        },
      },
      MuiSnackbar: {
        defaultProps: {
          autoHideDuration: 3500,
          transitionDuration: 1000,
          anchorOrigin: { vertical: 'top', horizontal: 'right' },
        },
      },
      MuiAlert: {
        defaultProps: {
          iconMapping: {
            warning: <IconAlertCircle />,
          },
        },
        styleOverrides: {
          root: ({ ownerState }) => ({
            ...(ownerState.severity === 'success' && {
              border: '1px solid',
              borderColor: ThemeProvider.palette.success.pure,
              backgroundColor: ThemeProvider.palette.success.light,

              '& .MuiAlert-icon': {
                color: ThemeProvider.palette.success.pure,
              },
            }),

            ...(ownerState.severity === 'error' && {
              border: '1px solid',
              borderColor: ThemeProvider.palette.error.pure,
              backgroundColor: ThemeProvider.palette.error.light,

              '& .MuiAlert-icon': {
                color: ThemeProvider.palette.error.pure,
              },
            }),

            ...(ownerState.severity === 'warning' &&
              ownerState.variant === 'standard' && {
                backgroundColor: ThemeProvider.palette.warning.light,

                '& .MuiAlert-icon, & .MuiTypography-root': {
                  color: ThemeProvider.palette.warning.pure,
                },
              }),
          }),
          icon: {
            alignItems: 'center',
          },
        },
      },
      MuiTooltip: {
        defaultProps: {
          placement: 'top-start',
        },
        styleOverrides: {
          tooltip: {
            backgroundColor: ThemeProvider.palette.gray[100],
            padding: `${ThemeProvider.spacing[2]}px ${ThemeProvider.spacing[3]}px`,
            ...ThemeProvider.typography.body2,
            color: ThemeProvider.palette.common.white,
          },
        },
      },
      MuiTypography: {
        styleOverrides: {
          root: {
            wordWrap: 'break-word',
          },
        },
      },
      MuiDivider: {
        styleOverrides: {
          root: {
            borderColor: ThemeProvider.palette.gray[10],
          },
        },
      },
      MuiTextField: {
        defaultProps: {
          variant: 'standard',
          helperText: ' ',
        },
      },
      MuiInputBase: {
        styleOverrides: {
          root: {
            ...ThemeProvider.typography.body3,
            lineHeight: 1,
            color: ThemeProvider.palette.text[5],
          },
          input: {
            padding: `${ThemeProvider.spacing[3]}px`,
            height: 'unset',
          },
        },
      },
      MuiButtonBase: {
        styleOverrides: {
            root: {
                backgroundColor: '#FF2700',
            }
        }
      },
      MuiFormHelperText: {
        styleOverrides: {
          root: {
            ...ThemeProvider.typography.body4,
            lineHeight: 1.25,
            color: ThemeProvider.palette.text[5],
          },
        },
      },
      MuiInputLabel: {
        styleOverrides: {
          root: {
            ...ThemeProvider.typography.body3,
            color: ThemeProvider.palette.text[20],
          },
        },
      },
      MuiAutocomplete: {
        styleOverrides: {
          endAdornment: {
            top: 'unset',
          },
          paper: {
            ...ThemeProvider.typography.body3,
          },
          root: {
            '& .MuiInput-root': {
              paddingBottom: 0,

              '& .MuiInput-input': {
                padding: `${ThemeProvider.spacing[3]}px`,
              },
            },
          },
        },
      },
      MuiLinearProgress: {
        styleOverrides: {
          root: {
            height: '6px',
            borderRadius: 4,
          },
        },
      },
      MuiAccordion: {
        styleOverrides: {
          root: {
            boxShadow: 'none',

            '&.Mui-expanded': {
              margin: 0,
              '&:before': {
                opacity: 1,
              },
            },
          },
        },
      },
      MuiTab: {
        styleOverrides: {
          root: {
            borderBottom: '1px solid',
            borderColor: ThemeProvider.palette.gray[20],
            ...ThemeProvider.typography.body3,

            '&.Mui-selected': {
              color: ThemeProvider.palette.text[20],
              fontWeight: 600,

              border: 0,
            },
          },
        },
      },
    },
  },
  ptBR
);

MuiTheme.shadows[1] = ThemeProvider.shadows[1];
MuiTheme.shadows[2] = ThemeProvider.shadows[2];
