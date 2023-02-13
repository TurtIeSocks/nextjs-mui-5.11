import createTheme from '@mui/material/styles/createTheme'
import responsiveFontSizes from '@mui/material/styles/responsiveFontSizes'

export const theme = responsiveFontSizes(
  createTheme({
    components: {
      MuiButton: {
        defaultProps: {
          disableFocusRipple: true,
          disableRipple: true,
          disableTouchRipple: true,
        },
      },
    },
  }),
)
