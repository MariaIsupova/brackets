module.exports = function check(s, bracketsConfig) {
    let brackets = {}
    s = s.split('')
    bracketsConfig.forEach(element => {
        if (element[0] === element[1]) {
            let f = true
            for (k = 0; k < s.length; k++) {
                if (s[k] === element[0]) {
                    if (f) f = false
                    else {
                        s[k] += '*'
                        f = true
                    }
                }
            }
            brackets[element[1] + '*'] = element[0]
        } else {
            brackets[element[1]] = element[0]
        }
    });

    let flag = true
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        if (isClosedBracket(s[i])) {
            // console.log('stack ', stack, brackets[s[i]])
            if (brackets[s[i]] !== stack.pop()) {
                return false;
            }
        } else {
            stack.push(s[i]);
            // console.log('push stack', stack)
        }
    }
    return stack.length === 0
}

function isClosedBracket(ch) {
    return [')', ']', '}', '2','4','6','|*', '8*', '7*'].indexOf(ch) > -1;
}
