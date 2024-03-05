
export function mapSearch(search) {
    const params = {}
    for (const key in search) {
        if (search[key]) {
            params[key] = search[key]
        }
    }
    return params
}