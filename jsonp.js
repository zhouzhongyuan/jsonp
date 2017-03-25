(function (global) {
    var headDom = document.getElementsByTagName('head')[0];
    function JSONP(url, descriptor) {
        var script = document.createElement('script');
        var cbName = `jsoncb${JSONP.count++}`;
        JSONP[cbName] = function (d) {
            try{
                descriptor.callback(d);

            }finally {
                delete JSONP[cbName]
                headDom.removeChild(script)
            }
        }
        var cb = descriptor.callback;
        var query = obj2query(descriptor.data);

        var url = `${url}?${query}&jsoncallback=JSONP.${cbName}`;
        script.src = url;
        headDom.appendChild(script);
    }
    function obj2query(obj) {
        var query = [];
        for(var key in obj){
            if(obj.hasOwnProperty(key)){
                query.push(`${key}=${obj[key]}`);
            }
        }
        query = query.join('&');
        return query;
    }
    JSONP.count = 0;

    global.JSONP = JSONP;
})(window)