class Barrage {
    constructor(props) {
        this.el = props.el;
        this.color = props.color;
        this.time = props.time;
    }

    create(value) {
        // 创建弹幕元素
        const div = document.createElement('div');
        const el = this.el;
        const time = this.time - this.random(5, this.time) || 20;

        div.className = 'barrage';
        div.innerHTML = value;
        this.el.appendChild(div);

        // 弹幕文字随机颜色
        const color = this.color;
        div.style.color = color[this.ranomColor(color)];

        // 随机弹幕元素初始定位
        const top = this.random(div.offsetHeight, el.clientHeight);
        div.style.top = top + 'px';

        // 创建弹幕css动画
        const bulletStyle = document.createElement('style');
        document.head.appendChild(bulletStyle);
        const keyframesFrom = 'from { transform: translate3d(' + el.offsetWidth + 'px, 0, 0); }';
        const keyframesTo = 'to { transform: translate3d(-100%, 0, 0); }';
        bulletStyle.sheet.insertRule('@keyframes right-to-left { ' + keyframesFrom + keyframesTo + ' }', 0);


        // 设置动画
        div.style['display'] = 'inline-block';
        div.style['visibility'] = 'visible';
        div.style['animationIterationCount'] = 1;
        div.style['animationDelay'] = 0;
        div.style['animationDirection'] = 'normal';
        div.style['animationTimingFunction'] = 'linear';
        div.style['willChange'] = 'transform'; // 性能优化
        div.style['animationName'] = 'right-to-left';
        div.style['animationDuration'] = time + 's'

        // 开始动画
        div.style['animationPlayState'] = 'running'

        this.stop({ div, time })
    }

    stop({ div, time }) {
        return setInterval(() => {
            clearInterval(this.stop);
            div.remove();
        }, time * 1000)
    }

    random(m, n) {
        return Math.round(Math.random() * (n - m));
    }

    ranomColor(array) {
        return Math.floor(Math.random() * (array.length));
    }
}