window.dom = {
    find(selector, scope) {
        return (scope || document).querySelectorAll(selector)
    },
    style(node, name, value) {
        if (arguments.length === 3) { node.style[name] = value }
        else if (arguments.length === 2) {
            if (typeof name === String) {
                return node.style[name]
            }
        }
        else if (name instanceof Object) {
            node.style[key] = name[key]
        }
    },
    each(a, fn) {
        for (let i = 0; i < a.length; i++) {
            fn.call(null, divList[i])
        }
    }
}

const div = dom.find('#test>.red')[0] // 获取对应的元素
console.log(div)
dom.style(div, 'color', 'red') // 设置 div.style.color
const divList = dom.find('.red') // 获取多个 div.red 元素
console.log(divList)
dom.each(divList, (n) => console.log(n)) // 遍历 divList 里的所有元素