import type { Config } from '@nuxtjs/tailwindcss'
import colors from 'tailwindcss/colors'

export default <Partial<Config>>{
    theme: {
    extend: {
      colors: {
        primary: '#6222ff'
      }
    }
  }
}
