import type { AppProps } from "next/app"

import "../styles/academy.css"
import "../styles/global.css"
import "@xplato/hydra/dist/hydra.css"

const App = ({ Component, pageProps }: AppProps) => {
	return (
			<Component {...pageProps} />
	)
}

export default App
