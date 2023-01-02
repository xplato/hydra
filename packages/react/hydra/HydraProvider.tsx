import React, { createContext } from "react"

import { defaultConfig } from "./default"
import { HydraConfig, THydraContext } from "./types"
import { Children } from "../types"

export const HydraContext = createContext<THydraContext>({
	...defaultConfig,
})

interface HydraProviderProps extends Children {
	config?: HydraConfig
}

export const HydraProvider = ({
	config = defaultConfig,
	children,
}: HydraProviderProps) => {
	const value: THydraContext = {
		...defaultConfig,
		...config,
	}

	return (
		<HydraContext.Provider value={value}>{children}</HydraContext.Provider>
	)
}
