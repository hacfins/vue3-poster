import dtime from 'time-formater'
import useClipboard from 'vue-clipboard3'
const { toClipboard } = useClipboard();

export const copy = async (str,fn) => {
    try {
        await toClipboard(str)

        fn && fn()

    } catch (e) {
        console.error(e)
    }
}


export const randomBgColor = function (user_name) {
    var result = 0
    for(var i = 0; i < user_name.length; i++){
        result+=user_name.charCodeAt(i)
    }

    var default_color_arr = ['#36D9D9','#3DBAF9','#FFA351','#3A80F7'];
    var randomIndex = result % default_color_arr.length;
    return default_color_arr[randomIndex]
}


export const timeCustomFormat = function (time,format_str,isnottoday) {
    if (typeof time != "string") {
        return;
    }
    var newstr   = time.replace(/-/g, '/');
    var curY = new Date().getFullYear();
    var today_date = dtime(new Date()).format('YYYY-MM-DD')
    var tomorrow_date = dtime(new Date().getTime() + 86400000).format('YYYY-MM-DD');

    var start_date = dtime(newstr).format('YYYY-MM-DD')


    var paramsY = new Date(newstr).getFullYear();
    var formatStr = 'YYYY-MM-DD HH:mm'
    if(format_str){
        formatStr = format_str
    }
    if(isnottoday){
        if(curY == paramsY){
            formatStr = formatStr.replace('YYYY-','')
        }
    }else{
        if(start_date == today_date){
            formatStr = formatStr.replace('YYYY-MM-DD','今天 ')
        }else if(start_date == tomorrow_date){
            formatStr = formatStr.replace('YYYY-MM-DD','明天 ')
        }else if(curY == paramsY){
            formatStr = formatStr.replace('YYYY-','')
        }
    }

    return  dtime(newstr).format(formatStr)

}


