import { useContext } from 'react'

import { HydraContext } from './HydraProvider'

export const useHydra = () => {
	const context = useContext(HydraContext)

  return context
}
