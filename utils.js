/**
 * 公用封装函数
 */


// 获取指定id元素
function $(id) {
    return document.querySelector(id)
}

// 委托绑定函数
function onEventLister(parentNode, action, childClassName, callback) {
    parentNode.addEventListener(action, function (e) {
        e.target.className.indexOf(childClassName) >= 0 && callback(e);
    })
}