import { ComponentKey, defaultConfig, DefaultProps, useHydra } from "../hydra"

export const useDefaults = <T extends ComponentKey>(key: T): DefaultProps[T] => {
	const { defaultProps } = useHydra()
  return defaultProps[key] || defaultConfig.defaultProps[key]
}
