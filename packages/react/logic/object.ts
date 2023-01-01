export const omitFields = <T, Fields extends keyof T>(
	object: T,
	fields: Array<Fields>
): Omit<T, Fields> => {
	return Object.assign(
		{},
		object,
		Object.assign({}, ...fields.map(key => ({ [key]: undefined })))
	)
}
