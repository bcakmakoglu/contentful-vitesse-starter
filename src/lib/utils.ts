export function isObject(o: unknown) { return typeof o === 'object' && o !== null && !Array.isArray(o) }
export function isFunction(f: any) { return f && {}.toString.call(f) === '[object Function]' }
