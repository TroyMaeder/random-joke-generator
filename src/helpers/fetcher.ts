const checkStatus = (response: any) => {
    if (response.ok) {
        return response
    } else {
        const error = new Error(response.statusText)
        throw error
    }
}

const parseJSON = (res: any) => res.json()

const Fetcher = {
    get: (path: string, params?: {}) =>
        fetch(path, params)
        .then(checkStatus)
        .then(parseJSON)

    //TODO: add for post....
}

export default Fetcher