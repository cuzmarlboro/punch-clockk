
// import request from 'service/request'
import request from "../service/request"

const getUser = () => {
    return request('user/get/userInfo', {}, 'GET').then((res) => {
        if (res.code === 200) {
            return res.data
        }
    })
}
export default getUser