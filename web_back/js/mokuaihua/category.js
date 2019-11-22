var category = {
    Show: function (callback) {
        // 获取数据
        //    alert('tnchuang');
        $.get(APIURLS.category_Show,
            function (res) {
                callback(res)
            })
    },
    Del: function (id, callback) {
        $.post(APIURLS.category_Del,
            { id: id },
            function (res) {
                callback(res)
            })
    },
    Add: function (name, slug, callback) {
        $.post(APIURLS.category_Add,
            {
                name: name,
                slug: slug
            },
            function (res) {
                callback(res);
            }
        )
    },
    Edit: function (id, name, slug, callback) {
        $.post(APIURLS.category_Edit,
            {
                id: id,
                name: name,
                slug: slug
            },
            function (res) {
                callback(res);
            })
    }
}