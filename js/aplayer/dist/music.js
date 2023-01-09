const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: false,
    mini: true,
    autoplay: false,
    theme: '#b7daff',
    loop: 'all', // all, one, none
    order: 'list', // list, random
    volume: 0.7,
    mutex: true,
    lrcType: 3,
    listFolded: true,
    listMaxHeight: 60,
    audio: [
        // {
        //     name: 'name',
        //     artist: 'artist',
        //     url: 'url.mp3',
        //     cover: 'cover.jpg',
        //     lrc: 'lrc.lrc',
        //     theme: 'theme',
        // },
        {
            name: '最伟大的作品',
            artist: 'Jay Chou',
            url: '/Music/最伟大的作品.mp3',
            cover: '/Music/cover/最伟大的作品.webp',
            lrc: '/Music/lrc/最伟大的作品.lrc',
        }
    ]
});