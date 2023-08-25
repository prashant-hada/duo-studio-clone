function loco(){
    gsap.registerPlugin(ScrollTrigger);
const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();
}
loco();
var crsr= document.querySelector(".cursor")
var crdiv= document.querySelector(".crsr-div")
var main=document.querySelector("#main")
var nav=document.querySelector("#nav")
var boxes= document.querySelectorAll(".box")
var mag=document.querySelector(".magnet")
var mag_a=document.querySelector(".magnet a")
nav.addEventListener("mousemove",function(dets){
  crsr.style.left= dets.x + 3+"px"
  crsr.style.top=dets.y + 3+"px"
});

main.addEventListener("mousemove",function(dets){
    crsr.style.left= dets.x + 5 + "px"
    crsr.style.top=dets.y + 5+ "px"

    crdiv.style.top=dets.y + 5+ "px"
    crdiv.style.left= dets.x + 5+ "px"
    main.style.cursor="none"
});
var tl1=gsap.timeline({
    scrollTrigger:{
        trigger:".page1 h1:nth-child(1)",
        scroller:"#main",
        markers:false,
        start: "top -0.1%",
        end:"top -30%",
        scrub:4
      }
});
gsap.from(".page1 h1",{
  y:50,
  rotate:5,
  opacity:0,
  delay:0.25,
  duration:0.85
});

gsap.from(".page1 p",{
  y:0,
  opacity:0,
  delay:0.8,
  duration:0.6
});
tl1.to(".page1 h1:nth-child(1)",{
  x:-100,
 },'anim');
 tl1.to(".page1 h1:nth-child(2)",{
     x:200,
    },'anim');
 tl1.to(".page1 video",{
     width:"90%",
    },'anim');
 
var tl2=gsap.timeline({
    scrollTrigger:{
        trigger:".page2",
        scroller:"#main",
        markers:false,
        start: "top 35%",
        end:"top 35%",
        scrub:3
      }
});
tl2.to("#main",{
  background:"#fff"
});

var tl3=gsap.timeline({
  scrollTrigger:{
      trigger:".page2",
      scroller:"#main",
      toggleActions:"play none none none",
      markers:false,
      start: "top 20%",
      end:"top 15%",
      scrub:2
    }
});

tl3.from(".page2 h1",{
  y:50,
  rotate:5,
  opacity:0,
  duration:1.5
});

tl3.from(".page2 h2,.page2 p",{
  y:50,
  opacity:0,
});
tl3.from(".page2 button",{
  y:15,
  opacity:0,
});

var tl4=gsap.timeline({
  scrollTrigger:{
      trigger:".page3",
      scroller:"#main",
      toggleActions:"play none none none",
      markers:false,
      start: "top 10%",
      end:"top 20%",
      scrub:8
    }
});

tl4.from(".page3 h1",{
  y:30,
  rotate:5,
  opacity:0,
  duration:1
});
tl4.from(".page3-work .part2",{
  y:60,
  opacity:0
});
tl4.from(".page3-work .part1",{
  y:60,
  opacity:0
});

tl4.from(".page3-work .part4",{
  y:60,
  opacity:0
});
tl4.from(".page3-work .part3",{
  y:60,
  opacity:0
});

var tl5=gsap.timeline({
  scrollTrigger:{
      trigger:".page4",
      scroller:"#main",
      toggleActions:"play none none none",
      markers:false,
      start: "top 30%",
      end:"top 40%",
      scrub:2
    }
});

tl5.to("#main",{
  background:"#0F0D0D"
});

boxes.forEach(function(box){
    box.addEventListener("mouseenter", function(){
      var att=box.getAttribute("data-image")
      crdiv.style.width="22vw"
      crdiv.style.height="18vw"
      crdiv.style.backgroundImage=`url(${att})`
    })
    box.addEventListener("mouseleave", function(){
      crdiv.style.width="5vw"
      crdiv.style.height="5vw"
      crdiv.style.backgroundImage=`none`
    })
})

mag.addEventListener("mousemove", function(e){
  crsr.style.backgroundColor="transparent";
  mag.style.backgroundColor="#0F0D0D";
  mag_a.style.color="#fff";
  const position= mag.getBoundingClientRect();
  const x= e.pageX - position.left - position.width/2;
  const y= e.pageY - position.top - position.height/2;
  mag.style.transform = "translate(" + x * 0.75 +"px, " + y * 0.75 + "px)";
})

mag.addEventListener("mouseout", function(e){
  mag.style.transform = "translate(0px, 0px)";
  crsr.style.backgroundColor="#d0a8de";
  mag.style.backgroundColor="#fff";
  mag_a.style.color="#0F0D0D";
})
