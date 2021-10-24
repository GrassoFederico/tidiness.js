import { isBoolean, isInteger, isNull, isNumber, isObject, isUndefined } from "lodash"

let json = Object.values(document.querySelectorAll('*[colorize]')).map((jsonElement) => {
    return JSON.parse(jsonElement.innerHTML)
})

let text = '<code style="font-size: 0.7rem; line-height: 1rem">'

const spanGenerator = (key, value, indent) => {

    if (isObject(value)) {
        value = jsonNode(Object.entries(value), (indent + 1))

        if (value.length)
            value = `{${value}<span style="text-indent:${indent}rem; display: block;">}</span>`
        else
            value = `{${value}}`
    } else if (isNaN(value))
        value = `<span style="color: #F43F5E">"${value}"</span>,`
    else if (isBoolean(value) || isUndefined(value) || isNull(value))
        value = `<span style="color: #EC4899; font-weight: bold">${value}</span>,`
    else
        value = `<span style="color: #78716C">${value}</span>,`

    return `<span style="text-indent:${indent}rem; display: block; white-space: nowrap;">
                            <span style="color: #0EA5E9">"${key}":</span> ${value}
                        </span>`
}

const jsonNode = (array, indentDepth = 1) => {

    return array.map((value) => {

        return spanGenerator(value[0], value[1], indentDepth)
    }).join('')
}

text += jsonNode(Object.entries(json))

text += '</code>'

Object.values(document.querySelectorAll('*[colorize]')).map((jsonElement) => {
    jsonElement.innerHTML = text
})