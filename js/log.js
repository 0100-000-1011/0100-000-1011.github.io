var list = [
    {
        name: "搭建博客",
        content: "Hello World!",
        date: {
            year: 2022,
            month: 12,
            day: 03,
        },
    },
    {
        name: "设置主题：next",
        content: "整上分类、标签、归档......",
        date: {
            year: 2022,
            month: 12,
            day: 04,
        },
    },
    {
        name: "新增日志",
        content: "然鹅很难看",
        date: {
            year: 2022,
            month: 12,
            day: 10,
        },
    },
    {
        name: "新增评论区",
        content: "芜湖！",
        date: {
            year: 2022,
            month: 12,
            day: 18,
        },
    },
    {
        name: "新增音乐播放器",
        content: "甚至为此把 pjax 适配了",
        date: {
            year: 2023,
            month: 1,
            day: 4,
        },
    },
    {
        name: "设置夜间模式",
        content: "很鸡肋，似乎并没有什么卵用",
        date: {
            year: 2023,
            month: 1,
            day: 9,
        },
    },
];

list.sort (
    function (x, y) {
        var dx = x.date, dy = y.date;

        if (dx.year != dy.year)
            return dx.year - dy.year;
        if (dx.month != dy.month)
            return dx.month - dy.month;
        if (dx.day != dy.day)
            return dx.day - dy.day;
    
        return 0;
    }
);

list.reverse ();

var year = 0x3f3f3f3f;
var element = document.getElementById ("content");

for (rec of list) {
    if (rec.date.year != year) {
        year = rec.date.year;
        
        var chcontent = document.createTextNode (year);
        
        var cheader = document.createElement ("span");
        cheader.className = "collection-header";
        cheader.style = "opacity: 1; display: inline-block; transform: translateX(0px);";
        cheader.appendChild (chcontent);
        
        var cyear = document.createElement ("div");
        cyear.className = "collection-year";
        cyear.appendChild (cheader);
        
        element.appendChild (cyear);
    }
    
    var adcontent = document.createTextNode (rec.date.month + "-" + rec.date.day);
    
    var adtitle = document.createTextNode (rec.name);
    
    var adsubtitle = document.createTextNode (rec.content);
    
    var time = document.createElement ("time");
    time.itemprop = "dateCreated";
    time.content = rec.date.year + "-" + rec.date.month + "-" + rec.date.day;
    time.datetime = time.content + "T00:00:00+08:00";
    time.appendChild (adcontent);
    
    var adname = document.createElement ("span");
    adname.itemprop = "name";
    adname.appendChild (adtitle);
    
    var adcontent = document.createElement ("span");
    adcontent.itemprop = "content";
    adcontent.appendChild (adsubtitle);
    
    var meta = document.createElement ("div");
    meta.className = "post-meta";
    meta.appendChild (time);
    
    var title = document.createElement ("div");
    title.className = "post-title";
    title.style = "color: black; font-size: 20px";
    title.appendChild (adname);
    
    var subtitle = document.createElement ("div");
    subtitle.className = "post-subtitle";
    subtitle.style = "color: grey; font-size: 10px";
    subtitle.appendChild (adcontent);
    
    var titles = document.createElement ("div");
    titles.appendChild (title);
    titles.appendChild (subtitle);
    
    var aheader = document.createElement ("header");
    aheader.className = "post-header";
    aheader.style = "opacity: 1; display: block; transform: translateY(0px);";
    aheader.appendChild (meta);
    aheader.appendChild (titles);
    
    var article = document.createElement ("article");
    article.itemscope = "";
    article.itemtype = "http://schema.org/Article";
    article.appendChild (aheader);
    
    element.appendChild (article);
}