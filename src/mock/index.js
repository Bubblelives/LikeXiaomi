import Mock from 'mockjs';

Mock.mock("/test/header-nav", 'get', {
    "retCode": 200,
    "retObj": [{
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
    }]
})

Mock.mock("/test/getCategoryList", "get", {
    retCode: 200,
    retObj: [{
        id: 1,
        name: "手机 电话卡"
    }, {
        id: 2,
        name: "电视 盒子"
    }, {
        id: 3,
        name: "笔记本 显示器"
    }, {
        id: 4,
        name: "家电 插线板"
    }, {
        id: 5,
        name: "出行 穿戴"
    }, {
        id: 6,
        name: "智能 路由器"
    }, {
        id: 7,
        name: "电源 配件"
    }, {
        id: 8,
        name: "健康 儿童"
    }, {
        id: 9,
        name: "耳机 音响"
    }, {
        id: 10,
        name: "生活 箱包"
    }]
})

Mock.mock("/test/getProductsList", "post", function() {


    return {
        retCode: 200,
        retObj: [{
            id: 1,
            name: "小米11 Ultra",
            img: "../assets/xiaomi11.png"
        }, {
            id: 2,
            name: "小米11 pro"
        }, {
            id: 3,
            name: "小米11"
        }, {
            id: 4,
            name: "小米11 青春版"
        }, {
            id: 5,
            name: "小米10 Ultra"
        }, {
            id: 6,
            name: "小米10 pro"
        }, {
            id: 7,
            name: "小米10"
        }, {
            id: 8,
            name: "小米10S"
        }, {
            id: 9,
            name: "小米10青春版"
        }, {
            id: 10,
            name: "K40 Pro系列"
        }, {
            id: 11,
            name: "Redmi K40"
        }, {
            id: 12,
            name: "Redmi K30至尊纪念版"
        }, {
            id: 13,
            name: "Redmi 10X 5G"
        }, {
            id: 14,
            name: "Redmi Note 9 Pro"
        }, {
            id: 15,
            name: "Redmi Note 9 5G"
        }, {
            id: 16,
            name: "Redmi Note 9 4G"
        }, {
            id: 17,
            name: "Redmi Note 8 Pro"
        }, {
            id: 18,
            name: "Redmi 9A"
        }, {
            id: 19,
            name: "Redmi 9"
        }, {
            id: 20,
            name: "Redmi 8A"
        }, {
            id: 21,
            name: "Redmi 8"
        }, {
            id: 22,
            name: "黑鲨4"
        }, {
            id: 23,
            name: "黑鲨4 Pro"
        }]
    }
})