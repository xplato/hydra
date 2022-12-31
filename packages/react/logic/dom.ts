import { kebabize } from "./string"

interface Mods {
	[key: string]: any
}

/**
 *
 * @param {Mods} mods
 * @returns {string[]}
 * @note This is assumed to be placed into a call to classNames.
 *
 */
export const generateMods = (mods: Mods) => {
	const keys = Object.keys(mods)

	if (keys.length === 0) {
		return ""
	}

	return keys.map(key => {
		const value = mods[key]

		if (value === true) {
			return kebabize(key)
		}

		if (!value) {
			return ""
		}

		return `${kebabize(key)}-${
			typeof value === "number" ? value : kebabize(value)
		}`
	})
}

export const smoothScrollTo = (elementId: string) => {
	const element = document.getElementById(elementId)
	if (element) {
		element.scrollIntoView({ behavior: "smooth" })
	}
}
