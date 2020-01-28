// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
// 示例 1:
// 输入: "()"
// 输出: true
// 示例 2:
// 输入: "()[]{}"
// 输出: true
// 示例 3:
// 输入: "(]"
// 输出: false
// 示例 4:
// 输入: "([)]"
// 输出: false
// 示例 5:
// 输入: "{[]}"

var isValid = function(s) {
  if (s%2 === 1) {
    return false
  }
  let mapping = new Map()
  mapping.set(')', '(')
  mapping.set('}', '{')
  mapping.set(']', '[')
  let stack = []
  for (const item of s) {
    if (mapping.has(item)) {
      let topElement = '#'
      if (stack.length) {
        topElement = stack.pop()
        if (topElement !== mapping.get(item)) {
          return false
        }
      }
    } else {
      stack.push(item)
    }
  }
  return !stack.length
}