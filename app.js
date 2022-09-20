// gsap.from(".anim1",2,{opacity : 0, y : -50 , duration : 1})
// gsap.from("img",{opacity : 0,right : 30,delay : 1.2,duration : 1})
// gsap.from("aside",{opacity : 0,duration : 1,delay : 1.9,backgroundPosition : "200px 0",})
var rule = CSSRulePlugin.getRule("span:after")
let t1 = gsap.timeline()
t1.from(".anim1",{opacity : 0, y : -50 , duration : 1,stager : 0.6})
    .to(rule,{cssRule : {scaleY:0},duration : 1})
    .from("img",{opacity : 0,y:50,duration : 1},"-=0.6")
    .from("aside",{opacity : 0,duration : 1,backgroundPosition : "200px 0"},"-=1.3")


document.getElementById("cta").addEventListener('click',()=>{
    t1.reversed() ? play : t1.reverse()
})    