export const Mapper = <T, K>(object: T, response: K): K => {
    const commom = findCommonKeys<T, K>(object, response)
    const newObj = {} as K

    commom.forEach(e => {
        if (typeof object[e] === 'object') {

            if (Array.isArray(object[e])) {
                if (object[e].length > 0)
                    (newObj as any)[e] = object[e].map((_e, i) => {
                        if (typeof object[e][i] === 'object')
                            return Mapper(object[e][i], response[e][0]);
                        else
                            return object[e][i]
                    });
                    
                else {
                    (newObj as any)[e] = []
                }
            } else {
                const e1 = object[e]
                const e2 = object[e]

                const objField = Mapper<typeof e1, typeof e2>(object[e], response[e])
                newObj[e] = objField
            }


        } else {
            newObj[e] = object[e]
        }
    })


    if (Object.values(newObj).length == 0) return null
    return newObj;
}

function findCommonKeys<T, U>(obj1: T, obj2: U) {
    if (!obj1 || !obj2) return []

    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);


    return keys1.filter(key => keys2.includes(key));
}