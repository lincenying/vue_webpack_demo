module.exports = {
    el: 'body',
    data: {
        user: {
            background: "background: url(http://dev.zdimg.com/background/20151218/d60c99edf7bd4176905ae4c4e8afb754.jpg)",
            avatar: "http://dev.zdimg.com/user/avatar/20151221/c7df1662a6a76bafc149130095dc2d0a.jpeg@1e_50w_50h_1c_0i_0o_100Q_2x.jpeg",
            name: "林岑影",
            signature: "这家伙很懒, 什么都没留下",
            isFollow: false,
            level: 1
        },
        intro: {
            title: "成就",
            content: "Flexbox真正的发光是在HTML5 Web应用上。大多数Web Apps 由一系列模块化、可重用的组件组成。你可以使用Flexbox来为那些令你头痛的和依赖于脆弱的CSS hack 的地方布局。好的方法是使用Flexbox对小模块的地方进行布局，然后用float和其它工具来布局更广泛的地方。"
        },
        myway: {
            page: 0,
            total: 0,
            list: []
        },
        mylife: '我正在做的Web应用程序上使用了很多的Flexbox，我非常喜欢它处理布局和盒子的智能计算。我想要分享一些关于盒模型的例子，<img src="images/test1.png" alt="">如果有什么反馈我将感激不尽',
        myinfo: {
            naitang: "http://www.baidu.com",
            weibo: "http://www.weibo.com"
        }
    },
    ready: function() {
        this.loadMore();
    },
    methods: {
        openapp: function(event) {
            console.log(event.target.tagName);
        },
        loadMore: function() {
            var self = this;
            self.myway.page++;
            self.$http.get('./src/test.json', {}, {
                headers: {
                    "X-Requested-With": "XMLHttpRequest"
                },
                emulateJSON: true
            }).then(function(response) {
                var data = response.data;
                var items = data.items,
                    newData = [];
                for (var i = 0; i < items.length; i++) {
                    newData.push({
                        "title": items[i].title,
                        "content": items[i].tags,
                    });
                }
                self.myway.total = newData.length;
                self.myway.list = self.myway.list.concat(newData);
            }, function(response) {
                // handle error
            });
        },
        test: function() {
            this.$set('intro.title', "哈哈哈哈");
        }
    }
};
