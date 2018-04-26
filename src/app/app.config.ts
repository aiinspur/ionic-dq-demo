
// 这是全局通用的配置参数，比如调用后台接口统一的域名地址
export class AppConfig {

    public static tenantId = "120";

    public static success = "0";

    //服务器地址
    public static api = 'http://localhost:8089/api/';
    //资源服务器地址
    public static resource_api = 'http://localhost/files/';


    public static user_regist_api = AppConfig.api+"m/regist";

    public static user_login_api = AppConfig.api+"m/login";

    public static user_info_api = AppConfig.api+"m/user";

    public static user_saveorupdate_api = AppConfig.api+"m/saveOrUpdate";

    //修改密码
    public static user_change_pwd_api = AppConfig.api+"m/changePwd";

    //文章列表
    public static article_page_api = AppConfig.api+"articles/pagelist";

    public static article_list_api = AppConfig.api+"articles/list";

    public static article_details_api = AppConfig.api+"articles/details";




}