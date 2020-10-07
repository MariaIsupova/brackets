module.exports = function check(s, bracketsConfig) {
    const brackets = {
        ')': '(',
        ']': '[',
        '}': '{'
    };
    let flag = true
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        console.log('s_i',s[i])
        if (s[i] === '|') {
            if (flag) {
                stack.push(s[i]);
                flag = false
                // console.log('push stack', stack)
            } else {
                // console.log('stack ', stack, [s[i]])
                if (s[i] !== stack.pop()) {
                    return false;
                }
                flag=true
            }
        } 
        else {
            if (isClosedBracket(s[i])) {
                console.log('stack ', stack, brackets[s[i]])
                if (brackets[s[i]] !== stack.pop()) {
                    return false;
                }
            } else {
                stack.push(s[i]);
                console.log('push stack', stack)
            }
        }
    }
    return stack.length === 0
}

function isClosedBracket(ch) {
    return [')', ']', '}','2','4','6'].indexOf(ch) > -1;
}
