export const validatePhone = (number) => {
    const stringNumber = number.toString()
    return !!stringNumber.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im)
}