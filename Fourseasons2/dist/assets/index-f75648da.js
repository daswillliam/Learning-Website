(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function l(){const o=new Date,n=String(o.getHours()).padStart(2,"0"),s=String(o.getMinutes()).padStart(2,"0"),i=String(o.getSeconds()).padStart(2,"0");function e(){const d=Math.round(new Date().getMilliseconds()/100);return d===10?0:d}const t=String(e()),r=`${n}:${s}:${i},${t}`;document.getElementById("time").textContent=r}l();setInterval(l,50);const u=document.getElementById("cursor-dot"),c=document.getElementById("cursor-outline");window.addEventListener("mousemove",function(o){const n=o.clientX,s=o.clientY;u.style.left=`${n}px`,u.style.top=`${s}px`,c.animate({left:`${n}px`,top:`${s}px`},{duration:500,fill:"forwards"})});window.addEventListener("mousedown",function(o){o.button===0&&c.classList.add("clicked")});window.addEventListener("mouseup",function(){c.classList.remove("clicked")});const a=document.querySelectorAll("button, a, label, input, span");a.forEach(o=>{o.addEventListener("mouseenter",()=>{c.classList.add("hovered")}),o.addEventListener("mouseleave",()=>{c.classList.remove("hovered")})});var f=document.getElementById("switchtheme");f.onclick=function(){document.body.classList.toggle("lighttheme")};