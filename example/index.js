function cb(data) {
    console.log(data);
}

var url = 'http://api.flickr.com/services/feeds/photos_public.gne';
var data = {
    tags: 'cat',
    tagmode: 'any',
    format: 'json',
};
var dataDog = {
    tags: 'dog',
    tagmode: 'any',
    format: 'json',
};

JSONP(url,
    {
        data: data,
        callback: function (data) {
            console.log('这是cat', data);
        }
    })

JSONP(url,
    {
        data: dataDog,
        callback: function (data) {
            console.log('这是dog', data);
        }
    })