// 接口的基地地址
var baseUrl = 'http://localhost:8000/';

var APIURLS = {
    user_login: baseUrl + 'admin/login',
    user_logout: baseUrl + 'admin/logout',
    user_getInfo: baseUrl + 'admin/getuser',


    category_Show: baseUrl + 'admin/category_search',
    category_Del: baseUrl + 'admin/category_delete',
    category_Add: baseUrl + 'admin/category_add',
    category_Edit: baseUrl + 'admin/category_edit',

    // 文章搜索
    article_Show: baseUrl + 'admin/search'

}
