import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {

		scrollBehavior:['smooth'],

	
		fontFamily: {
			josefin: ['Josefin Sans','sans-serif'], // Add fallback font
			lato:['Lato','sans-serif'],
		  },

		  screens:{
			'defualt':{'min':'900px'},
			'min1':{'min':'1678px'},
			'min2':{'min':'1400px'},
			'min5':{'min':'1100px'},
			'max5':{'max':'1100px'},
			'max6':{'max':'1000px'},
			'max7':{'max':'800px'},
			'max8':{'max':'670px'},
			'min3':{'min':'914px'},
			'min7':{'min':'1200px'},
			'min6':{'min':'862px'},
			'lgm':{'min':'800px'},
			'min4':{'min':'742px'},
			'max10':{'max':'540px'},
			'max11':{'max':'590px'},
			'max12':{'max':'420px'},
			'max13':{'max':'460px'},
			'min-w':{min:'420px'},
			'min-w2':{'min':'480px'},
			'min-w3':{'min':'420px'},
			'max-w':{max:'480px'},
			'max-w2':{'max':'380px'},
			
			
		  },
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [
	require("tailwindcss-animate"),
	require('tailwind-scrollbar-hide')


  ],
};
export default config;
