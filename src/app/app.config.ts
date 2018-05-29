
// 这是全局通用的配置参数
export class AppConfig {

    //通用
    public static tenantId = "120";     //租户id
    public static success = "0";        //接口成功标识

    //服务器地址 http://localhost:8089/api/
    public static api = 'http://47.104.13.7:8089/api/';
    public static resource_api = 'http://47.104.13.7/files/';     //资源服务器地址

    //附件上传
    public static attachment_upload_one = 'http://47.104.13.7:8089/api/attachment/upload/one';

    //用户
    public static user_regist_api = AppConfig.api + "m/regist";   //注册
    public static user_login_api = AppConfig.api + "m/login";     //登录
    public static user_info_api = AppConfig.api + "m/user";       //查询用户信息
    public static user_saveorupdate_api = AppConfig.api + "m/saveOrUpdate";   //新建/修改用户细腻
    public static user_change_pwd_api = AppConfig.api + "m/changePwd";    //修改密码

    //文章
    public static article_page_api = AppConfig.api + "articles/pagelist";
    public static article_list_api = AppConfig.api + "articles/list";
    public static article_details_api = AppConfig.api + "articles/details";

    //帖子
    public static post_page_api = AppConfig.api + "post/pagelist";      //分页列表
    public static post_create_api = AppConfig.api + "post";         //创建post




}