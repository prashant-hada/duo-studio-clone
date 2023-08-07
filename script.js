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
var main=document.querySelector("#main")
var nav=document.querySelector("#nav")
nav.addEventListener("mousemove",function(dets){
  crsr.style.left= dets.x+"px"
  crsr.style.top=dets.y+"px"
});

main.addEventListener("mousemove",function(dets){
    crsr.style.left= dets.x+"px"
    crsr.style.top=dets.y+"px"
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