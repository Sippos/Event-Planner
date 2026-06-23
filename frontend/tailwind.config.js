/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "surface-container-high": "#302733",
        "secondary": "#d3fbff",
        "on-tertiary-fixed": "#00210e",
        "tertiary-fixed-dim": "#00e383",
        "on-error-container": "#ffdad6",
        "on-secondary": "#00363a",
        "on-tertiary-container": "#ffffff",
        "on-secondary-fixed": "#002022",
        "error": "#ffb4ab",
        "secondary-fixed-dim": "#00dbe9",
        "primary": "#ecb2ff",
        "surface-container-low": "#211824",
        "surface": "#19101c",
        "secondary-container": "#00eefc",
        "on-background": "#eeddee",
        "tertiary-fixed": "#5bffa1",
        "on-primary-fixed": "#320047",
        "on-error": "#690005",
        "primary-fixed": "#f8d8ff",
        "on-primary-container": "#ffffff",
        "on-surface": "#eeddee",
        "surface-tint": "#ecb2ff",
        "inverse-primary": "#9900cf",
        "on-primary-fixed-variant": "#74009f",
        "inverse-on-surface": "#372d3a",
        "primary-fixed-dim": "#ecb2ff",
        "on-tertiary-fixed-variant": "#00522c",
        "on-secondary-fixed-variant": "#004f54",
        "on-primary": "#520071",
        "surface-variant": "#3c313e",
        "primary-container": "#bd00ff",
        "surface-container-lowest": "#130b16",
        "tertiary": "#00e383",
        "surface-container": "#261c28",
        "on-surface-variant": "#d4c0d7",
        "inverse-surface": "#eeddee",
        "secondary-fixed": "#7df4ff",
        "surface-dim": "#19101c",
        "error-container": "#93000a",
        "outline": "#9d8ba0",
        "background": "#19101c",
        "on-secondary-container": "#00686f",
        "outline-variant": "#514255",
        "on-tertiary": "#00391d",
        "surface-container-highest": "#3c313e",
        "tertiary-container": "#00884c",
        "surface-bright": "#403643"
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
      spacing: {
        "gutter": "24px",
        "container-max": "1280px",
        "margin-desktop": "40px",
        "unit": "8px",
        "margin-mobile": "16px"
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Montserrat', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        "body-lg": ["Inter"],
        "label-sm": ["JetBrains Mono"],
        "headline-lg": ["Montserrat"],
        "headline-lg-mobile": ["Montserrat"],
        "display-lg": ["Montserrat"],
        "body-md": ["Inter"]
      },
      fontSize: {
        "body-lg": ["18px", { "lineHeight": "1.6", "fontWeight": "400" }],
        "label-sm": ["12px", { "lineHeight": "1", "letterSpacing": "0.05em", "fontWeight": "500" }],
        "headline-lg": ["32px", { "lineHeight": "1.2", "fontWeight": "700" }],
        "headline-lg-mobile": ["24px", { "lineHeight": "1.2", "fontWeight": "700" }],
        "display-lg": ["48px", { "lineHeight": "1.1", "letterSpacing": "-0.02em", "fontWeight": "800" }],
        "body-md": ["16px", { "lineHeight": "1.5", "fontWeight": "400" }]
      },
      boxShadow: {
        'glow-primary': '0 0 10px 0 rgba(236, 178, 255, 0.5)',
        'glow-secondary': '0 0 10px 0 rgba(211, 251, 255, 0.5)',
      }
    },
  },
  plugins: [],
}

