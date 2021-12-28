export const requiredField = value => {
    if (value) return undefined
    return "Field is required"
}

export const maxLength = (maxlength) => (value) => {
    if (value.length > maxlength) return `Max length is ${maxlength} symbols`;
    return undefined
}