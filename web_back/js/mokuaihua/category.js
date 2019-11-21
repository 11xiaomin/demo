var baseUrl = 'http://localhost:8000/';
var category = {
    Show: function (callback) {
        // 获取数据
        //    alert('tnchuang');
        $.get(baseUrl + 'admin/category_search',
            function (res) {
                callback(res)
            })
    }
}