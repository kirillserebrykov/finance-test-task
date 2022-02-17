export const saveColor = (prevValue, setValue, setColor, value) => {
    if (prevValue > value || prevValue === "") setColor("success.main")
    else if (prevValue < value) setColor("error.main")
    else return
    setValue(value)
}