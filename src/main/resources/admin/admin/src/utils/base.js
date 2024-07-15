const base = {
    get() {
        return {
            url : "http://localhost:8080/dianshangpingtai/",
            name: "dianshangpingtai",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/dianshangpingtai/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "电商平台"
        } 
    }
}
export default base
