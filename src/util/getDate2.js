const getDate2 = () => {
    const date = new Date();
    return date.toLocaleDateString().replace(/\//g, "-") + " " + date.toTimeString().substr(0, 8)
}
export default getDate2