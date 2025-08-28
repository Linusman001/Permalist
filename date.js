export function getDate() {
    const today = new Date()

    const options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    }
    
    return today.toLocaleDateString("en-US", options)

}

export function getDay() {
    const today = new Date()

    const options = {
        weekday: "long"
    }

    return today.toLocaleDateString("en-US", options)

}

export function getYear() {
    const year = new Date()
    return year.getFullYear()
}

export default { getDate, getDay, getYear };

