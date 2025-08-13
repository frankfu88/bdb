// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/data/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', 'ui-sans-serif', 'system-ui', 'Noto Sans TC', 'sans-serif'],
        serif: ['var(--font-serif)', 'ui-serif', 'Times New Roman', 'Noto Serif TC', 'serif'],
      },
    },
  },
  plugins: [],
};
export default config;
