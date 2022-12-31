import { ThemeProvider } from "next-themes"

import type { AppProps } from "next/app"

import "../styles/seam.css"
import "../styles/global.css"
import "@xplato/hydra/dist/hydra.css"

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<ThemeProvider attribute="class" defaultTheme="system">
			<Component {...pageProps} />
		</ThemeProvider>
	)
}

export default App
