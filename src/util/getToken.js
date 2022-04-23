import Taro from '@tarojs/taro'
const getToken = () => {
    return Taro.getStorage({ key: 'token', }).then(res => res.data).catch(res => res.data)
}
export default getToken