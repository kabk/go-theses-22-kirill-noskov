function replaceItemAtIndex<T>(arr: T, index: number, newValue: any) {
    if (arr instanceof Array) {
        return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
    } else return arr
}


export default replaceItemAtIndex;
