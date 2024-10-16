function isIE() {
    const ua = window.navigator.userAgent; //Check the userAgent property of the window.navigator object
    const msie = ua.indexOf('MSIE '); // IE 10 or older
    const trident = ua.indexOf('Trident/'); //IE 11

    return (msie > 0 || trident > 0);
}


//function to show alert if it's IE
function ShowIEAlert(){
    if(isIE()){
       $('html').addClass('no-object-fit');
    } else {
        $('html').addClass('object-fit');
    }
}

ShowIEAlert();

var userAgent = window.navigator.userAgent;

if (userAgent.match(/Mac/i)) {

    if (userAgent.match(/iPad/i) || userAgent.match(/iPhone/i)) {
        $('html').addClass('ios');
    } else {
        $('html').addClass('mac');
    }
}