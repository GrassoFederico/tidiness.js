import {
    isArray,
    isBoolean,
    isNull,
    isObject,
    isUndefined
} from "lodash"

Object.values(document.querySelectorAll('*[colorize]')).map((jsonElement) => {
    let jsonObject = JSON.parse(jsonElement.innerHTML)
    let text = document.createElement('code')

    text.style.fontSize = '0.7rem'
    text.style.lineHeight = '1rem'

    const spanGenerator = (key, value, indent) => {

        if( isArray(value) ) {
            value = jsonNode(Object.entries(value), (indent + 1))

            value = `[${value}<span style="text-indent:${indent}rem; display: block;">],</span>`
        }
        else if (isObject(value)) {
            value = jsonNode(Object.entries(value), (indent + 1))

            value = `{${value}<span style="text-indent:${indent}rem; display: block;">},</span>`
        } 
        else if (isNaN(value))
            value = `<span style="color: #F43F5E">"${value}"</span>,`
        else if (isBoolean(value) || isUndefined(value) || isNull(value))
            value = `<span style="color: #EC4899; font-weight: bold">${value}</span>,`
        else
            value = `<span style="color: #78716C">${value}</span>,`

        if( isNaN( key ) )
            return `<span style="text-indent:${indent}rem; display: block; white-space: nowrap;">
                        <span style="color: #0EA5E9">"${key}":</span> ${value}
                    </span>`
        else
            return `<span style="text-indent:${indent}rem; display: block; white-space: nowrap;">
                        ${value}
                    </span>`
    }

    const jsonNode = (array, indentDepth = 1) => {

        return array.map((value) => {

            return spanGenerator(value[0], value[1], indentDepth)
        }).join('')
    }

    text.innerHTML = `{${jsonNode(Object.entries(jsonObject))}}`

    jsonElement.replaceChildren( text )
})