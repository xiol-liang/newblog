(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{524:function(t,e,n){},569:function(t,e,n){"use strict";var i=n(3),s=n(2),r=n(64),o=s([].reverse),a=[1,2];i({target:"Array",proto:!0,forced:String(a)===String(a.reverse())},{reverse:function(){return r(this)&&(this.length=this.length),o(this)}})},570:function(t,e,n){"use strict";n(524)},578:function(t,e,n){"use strict";n.r(e);var i=n(63),s=(n(83),n(23),n(62),n(66),n(8),n(67),n(259),n(260),n(569),{name:"",data:function(){return{strs:["发现光","跟随光","靠近光","成为光","散发光",{title:"我的眼里是星辰大海,还有前端",stop:[5,10,12]},{title:"愿你我都能,明确的爱",stop:6},"真诚的喜欢","直接的厌恶","站在太阳下的坦荡","还有被坚定的选择!",{title:"有一份热，发一份光",stop:5},{title:"就如萤火一般"},{title:"也可以在黑暗里发一点光"},{title:"不必等候炬火"},{title:"此后如竟没有炬火"},{title:"我便是唯一的光"},{title:"愿与所有中国青年共勉"}],currentIndex:0,spans:null,el:null}},mounted:function(){var t=this;if(this.el=document.querySelector(".hero .description"),this.el)this.init();else var e=this,n=setInterval((function(){t.el&&(n&&clearInterval(n),e.init()),t.el=document.querySelector(".hero .description")}),100)},methods:{init:function(){this.currentIndex==this.strs.length&&(this.currentIndex=0);var t=this.strs[this.currentIndex];this.el.innerHTML=t instanceof Object?t.title:t,this.el.innerHTML=this.el.textContent.replace(/\S/g,"<span>$&</span>");var e=0;this.spans=Object(i.a)(document.querySelectorAll(".hero .description span")),this.spans.forEach((function(n,i){e+=.1,t.hasOwnProperty("stop")&&(t.stop instanceof Array?t.stop.includes(i)&&(e+=.3):t.stop==i&&(e+=.3)),n.style.setProperty("--delay","".concat(e,"s"))})),this.el.addEventListener("animationend",this.lastEnd)},lastEnd:function(t){var e=this;t.target==document.querySelector(".hero .description span:last-child")&&(this.el.classList.add("ended"),setTimeout((function(){e.el.removeEventListener("animationend",e.lastEnd);var t=0;e.spans.reverse().forEach((function(n,i){e.el.classList.remove("ended"),n.style.width="2ch",n.style.animation="0.1s text-out ease-in-out forwards",t+=.05,n.style.animationDelay="".concat(t,"s")})),e.el.addEventListener("animationend",e.firstEnd)}),1500))},firstEnd:function(t){t.target==document.querySelector(".hero .description span:first-child")&&(this.spans.forEach((function(t){t.remove()})),this.el.removeEventListener("animationend",this.firstEnd),this.currentIndex++,this.init())}}}),r=(n(570),n(11)),o=Object(r.a)(s,(function(){var t=this.$createElement;return(this._self._c||t)("div")}),[],!1,null,null,null);e.default=o.exports}}]);