import {
    isArray,
    isBoolean,
    isNull,
    isObject,
    isUndefined,
    isString
} from "lodash"

Object.values(document.querySelectorAll('*[tidy-up]')).map((jsonElement) => {
    let jsonObject = JSON.parse(jsonElement.innerHTML)
    let text = document.createElement('code')

    text.style.fontSize = '0.7rem'
    text.style.lineHeight = '1rem'

    const spanGenerator = (key, value, indent) => {

        if( isArray(value) ) {
            value = jsonNode(Object.entries(value), (indent + 1))

            value = `[${value.substring( 0, (value.length - 1) )}]`
        }
        else if (isObject(value)) {
            value = jsonNode(Object.entries(value), (indent + 1))
            
            value = `{${value.substring( 0, (value.length - ( '</span>'.length + 1 )) )}</span><span style="text-indent:${indent}ch; display: inline-block">}</span>`
        } 
        else if (isString(value))
            value = `<span style="color: #F43F5E">${JSON.stringify(value)}</span>`
        else if (isBoolean(value) || isUndefined(value) || isNull(value))
            value = `<span style="color: #EC4899; font-weight: bold">${value}</span>`
        else
            value = `<span style="color: #78716C">${value}</span>`

        if( isNaN( key ) )
            return `<span style="text-indent:${indent}ch; display: block; white-space: nowrap;"><span style="color: #0EA5E9">"${key}":</span> ${value},</span>`
        else
            return `${value},`
    }

    const jsonNode = (array, indentDepth = 1) => {

        return array.map((value) => {

            return spanGenerator(value[0], value[1], indentDepth)
        }).join('')
    }

    let content = jsonNode(Object.entries(jsonObject))
    text.innerHTML = `{${ content.substring( 0, (content.length - ('</span>'.length + 1)) ) }</span>}`

    jsonElement.replaceChildren( text )
})