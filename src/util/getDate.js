const getDate = () => {
    const date = new Date();
    let nowYear = date.getFullYear() // 获取当前年份
    let nowMonth = date.getMonth() + 1;    // 获取当前月份
    let nowDate = date.getDate();    // 获取当前是几号
    // 对月份进行处理，1-9月在前面添加一个“0”
    if (nowMonth >= 1 && nowMonth <= 9) {
        nowMonth = "0" + nowMonth;
    }
    // 对日数进行处理，1-9号在前面添加一个“0”
    if (nowDate >= 0 && nowDate <= 9) {
        nowDate = "0" + nowDate;
    }
    return `${nowYear}-${nowMonth}-${nowDate}`
}
export default getDate