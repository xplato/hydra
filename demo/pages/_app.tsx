import { HydraProvider } from "@xplato/hydra"
import { ThemeProvider } from "next-themes"

import { hydraConfig } from '../logic/config'

import type { AppProps } from "next/app"

import "../styles/seam.css"
import "../styles/global.css"
import "@xplato/hydra/dist/hydra.css"

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<HydraProvider config={hydraConfig}>
			<ThemeProvider attribute="class" defaultTheme="system">
				<Component {...pageProps} />
			</ThemeProvider>
		</HydraProvider>
	)
}

export default App
