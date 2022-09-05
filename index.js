const PAGE = {
    data: {
        barrage: null
    },
    init() {
        this.bind()
        this.newBarrage()
    },
    newBarrage() {
        this.data.barrage = new Barrage({
            el: $('#container'),
            color: ['#0099cc', '#ffffff', '#009966', '#9933ff', '#ffff99', '#ccccff', '#cc9933', '#ffff66'],
            time: 20
        })
    },
    bind() {
        let btn = $('.send-wrap');
        onEventLister(btn, 'click', 'submit', this.submit);
    },
    submit() {
        let value = $('#input').value;
        PAGE.data.barrage.create(value)

        setTimeout(() => {
            PAGE.submit()
        }, 1000)
    }
}

PAGE.init();