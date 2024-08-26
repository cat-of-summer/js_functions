function st_assoc_merge(...ARRAYS) {
    function copy(old_array, new_array) {
        function recursive(field, old_array, new_array) {
            if (typeof old_array[field] == "object")
                for (let content in old_array[field]) {
                    if (!new_array[field]) new_array[field] = {};
                    recursive(content, old_array[field], new_array[field]);
                }
            else
                new_array[field] = old_array[field];
        }
        for (let field in old_array)
            recursive(field, old_array, new_array)
    }
    let result = {};
    for (let array of ARRAYS)
        copy(array, result);
    return result
}