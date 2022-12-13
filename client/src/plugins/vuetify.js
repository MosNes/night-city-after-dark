/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'afterDarkTheme',
    themes: {
      afterDarkTheme: {
        dark: true,
        colors: {
          primary: '#F21B2D',
          secondary: '#731A32',
          tertiary: '#1C588C',
          info: '#2175BF',
          background: '#262626',
       }
      }
    },
  },
})
