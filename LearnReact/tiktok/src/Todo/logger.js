function logger(reducer) {
    return (prevstate, action) => {
        console.group(action.type)
        console.log('Prev state:', prevstate)
        console.log('Action:', action)

        const newState = reducer(prevstate, action)
        console.log('New state:', newState);

        console.groupEnd()
        return newState
    }
}

export default logger;