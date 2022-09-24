mui.init({swipeBack: false
,gestureConfig: {tap:true,doubletap:true,longtap:true,hold:true,release:true}});

var 顶部标题 = new 标签("顶部标题",顶部标题_被单击);
var 自由面板1 = new 自由面板("自由面板1","138px");
var 图片框1 = new 图片框("图片框1",null);
var 名称 = new 标签("名称",null);
var 系统工具 = new 标签("系统工具",null);
var 安装包大小 = new 标签("安装包大小",null);
var 安卓版本 = new 标签("安卓版本",null);
var 下载按钮 = new 按钮("下载按钮",null,null,null);
if(mui.os.plus){
    mui.plusReady(function() {
        主窗口_创建完毕();
        
    });
}else{
    window.onload=function(){ 
        主窗口_创建完毕();
        
    }
}
//****************************************************************************************************
function 主窗口_创建完毕(){
	窗口操作.置组件宽度("按钮1","95%");
	图片框1.置图片("https://img.yituyu.com/gallery/2013/08_qKIyMZQw.jpg");
}

function 顶部标题_被单击(){
	窗口操作.打开指定网址("",2);}
//****************************************************************************************************