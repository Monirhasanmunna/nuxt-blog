import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Playfair Display', ...defaultTheme.fontFamily.sans]
      },
      colors: {

      }
    }
  }
}