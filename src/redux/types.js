const keyMirror = (obj) =>
{
    let ret = {};
    let key;
    if (!(obj instanceof Object && !Array.isArray(obj)))
    {
        throw new Error('keyMirror(...): Argument must be an object.');
    }
    for (key in obj)
    {
        if (obj.hasOwnProperty(key))
        {
            ret[key] = key;
            if (key.includes('GET'))
            {
                ret[key + "_SUCCESS"] = key + "_SUCCESS";
                ret[key + "_FAIL"] = key + "_FAIL";
            }
        }
    }
    return ret;
};

export default keyMirror({
    GET_DECK_ID: null,
});
