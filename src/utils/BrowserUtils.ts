
export function onMobile(){
    let userAgent = navigator.userAgent;
    let width = window.innerWidth;
    console.log(`IsMobile () : userAgent : ${userAgent} , `);
    return (userAgent.match(/iPhone/i)   || userAgent.match(/iPad/i)  || userAgent.match(/Android/i)|| width<=640) ;
}
