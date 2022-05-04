// eslint-disable-next-line no-undef
export default defineAppConfig({
    pages: [
        // 'pages/deviceList/index',
        'pages/index/index',
        'pages/my/index',
        'pages/login/index',
        'pages/signIn/index',
        'pages/leave/index',
        'pages/deviceList/index',
        'pages/deviceApply/index',
    ],
    permission: {
        'scope.userLocation': {
            desc: '你的位置信息将用于小程序上下班打卡',
        },
    },
    window: {
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#fff',
        navigationBarTitleText: 'WeChat',
        navigationBarTextStyle: 'black',
    },
    tabBar: {
        list: [
            {
                pagePath: 'pages/index/index',
                iconPath: 'assets/tabbar/ic_pre_home.png',
                selectedIconPath: 'assets/tabbar/ic_home.png',
                text: '服务台',
            },
            {
                pagePath: 'pages/my/index',
                iconPath: 'assets/tabbar/ic_pre_mine.png',
                selectedIconPath: 'assets/tabbar/ic_mine.png',
                text: '个人中心',
            },
        ],
    },
})
