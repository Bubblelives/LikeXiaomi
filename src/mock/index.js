import Mock from 'mockjs';

Mock.mock("/test/header-nav", 'get', {
    "retCode": 200,
    "retObj": [
        {
            "id": 1,
            "name": "小米手机",
            newList: [{
                name: "小米11",
                version: [{
                    color: '黑色',
                    size: [{
                        name: "4G + 128G",
                        price: "3999"
                    }]
                }],
                icon: "../assets/xiaomi11.png"
            }, {
                name: '小米10至尊版',
                version: [{
                    color: '黑色',
                    size: [{
                        name: "4G + 64G",
                        price: "1999"
                    }]
                }],
                icon: "../assets/xiaomi10zhizun.png"
            }, {
                name: '小米10',
                version: [{
                    color: '黑色',
                    size: [{
                        name: "4G + 64G",
                        price: "2999"
                    }]
                }],
                icon: "../assets/xiaomi10.png"
            }, {
                name: '小米10青春版 5G',
                version: [{
                    color: '黑色',
                    size: [{
                        name: "4G + 64G",
                        price: "2299"
                    }]
                }],
                icon: "../assets/xiaomi10lite.png"
            }, {
                name: '小米MIX Alpha',
                version: [{
                    color: '黑色',
                    size: [{
                        name: "4G + 64G",
                        price: "19999"
                    }]
                }],
                icon: "../assets/xiaomiMixAlpha.png"
            }]
        }, {
            "id": 2,
            "name": "红米手机",
            newList: [{
                name: "K40 Pro系列",
                version: [{
                    color: '黑色',
                    size: [{
                        price: "2799"
                    }]
                }],
                icon: ""
            }, {
                name: 'Redmi K30 系列',
                version: [{
                    color: '黑色',
                    size: [{
                        name: "4G + 64G",
                        price: "1999"
                    }]
                }],
                icon: ""
            }, {
                name: 'Redmi K30 Pro',
                version: [{
                    color: '黑色',
                    size: [{
                        name: "4G + 64G",
                        price: "2999"
                    }]
                }]
            }, {
                name: 'Redmi K30 至尊纪念版',
                version: [{
                    color: '黑色',
                    size: [{
                        name: "4G + 64G",
                        price: "2299"
                    }]
                }]
            }]
        }, {
            "id": 3,
            "name": "电视",
            newList: [{
                name: "Redme MAX 86\"超大屏电视",
                version: [{
                    size: [{
                        price: "7999"
                    }]
                }]
            }]
        }, {
            "id": 4,
            "name": "笔记本"
        }, {
            "id": 5,
            "name": "家电"
        }, {
            "id": 6,
            "name": "路由器"
        }
    ]
})
