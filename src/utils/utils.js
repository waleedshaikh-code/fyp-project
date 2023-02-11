export function checkKeyInObject(obj, key, returnType = 'value') {
    if (obj && Object.keys(obj).length > 0) {
        if (returnType === 'value') {
            return obj[key];
        } else if (returnType === 'bool' && Object.keys(obj).find(objKey => `${objKey}` === `${key}`)) {
            return true;
        }
    }
}
export function checkArrayLength(value) {
    return value && Array.isArray(value) && value.length > 0
}

export function checkObject(obj) {
    return obj && Object.keys(obj).length > 0
}