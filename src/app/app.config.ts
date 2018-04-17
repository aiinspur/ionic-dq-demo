
// 这是全局通用的配置参数，比如调用后台接口统一的域名地址
export class AppConfig {

    public static tenantId = "12";

    public static success = "0";

    //服务器地址
    public static api = 'http://localhost:8089/api/';


    public static user_regist_api = AppConfig.api+"m/regist";


}