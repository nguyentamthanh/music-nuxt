import { defineConfig } from '@windicss/plugin-utils'

export default defineConfig({
  /**
   * Write windi classes in html attributes.
   * @see https://windicss.org/features/attributify.html
   */
  attributify: true,
  theme: {
    extend: {
      animation: {
        'spin-slow': 'wiggle 5s linear infinite',
      },
      keyframes: {
        wiggle: {
          '0%': {
            transform: 'rotate(0deg)',
          },
          '100%': {
            transform: 'rotate(360deg)',
          },
        },
      },
    },
  },
})
