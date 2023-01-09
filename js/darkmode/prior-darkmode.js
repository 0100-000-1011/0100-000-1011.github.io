{
    let dark;

    function recoverDark () { setTimeout (() => {
        if (window.needDark) return;
        if (dark != darkmode.isActivated()) darkmode.switch ();
        document.querySelector (".darkmode-toggle").style.display = '';
        window.removeEventListener('pjax:success', recoverDark);
    }, 10); }

    function switchDark () {
        if (typeof (darkmode) == "undefined") {
            setTimeout (switchDark, 1000); return;
        }
        
        if (DEBUG ()) console.log ("prior darkmode");

        window.needDark = true;
        document.querySelector (".darkmode-toggle").style.display = 'none';
        dark = darkmode.isActivated ();
        if (!dark) darkmode.switch ();
        window.addEventListener ('pjax:success', recoverDark);
        setTimeout (() => window.needDark = false, 30);
    }

    switchDark ();
}