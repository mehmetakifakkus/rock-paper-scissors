import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'barlow': ['Barlow Semi Condensed', 'sans-serif'],
      },
      colors: {
        'scissors-start': 'hsl(39, 89%, 49%)',
        'scissors-end': 'hsl(40, 84%, 53%)',
        'paper-start': 'hsl(230, 89%, 62%)',
        'paper-end': 'hsl(230, 89%, 65%)',
        'rock-start': 'hsl(349, 71%, 52%)',
        'rock-end': 'hsl(349, 70%, 56%)',
        'lizard-start': 'hsl(261, 73%, 60%)',
        'lizard-end': 'hsl(261, 72%, 63%)',
        'cyan': 'hsl(189, 59%, 53%)',
        'dark-text': 'hsl(229, 25%, 31%)',
        'score-text': 'hsl(229, 64%, 46%)',
        'header-outline': 'hsl(217, 16%, 45%)',
        'gradient-radial-start': 'hsl(214, 47%, 23%)',
        'gradient-radial-end': 'hsl(237, 49%, 15%)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle at top, var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
