(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&d(r)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function d(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();function u(){const t=new Date,n=String(t.getHours()).padStart(2,"0"),s=String(t.getMinutes()).padStart(2,"0"),d=String(t.getSeconds()).padStart(2,"0");function e(){const a=Math.round(new Date().getMilliseconds()/100);return a===10?0:a}const o=String(e()),r=`${n}:${s}:${d},${o}`;document.getElementById("time").textContent=r}u();setInterval(u,50);const l=document.getElementById("cursor-dot"),i=document.getElementById("cursor-outline"),c=document.getElementById("cursor-ball");window.addEventListener("mousemove",function(t){const n=t.clientX,s=t.clientY;l.style.left=`${n}px`,l.style.top=`${s}px`,i.animate({left:`${n}px`,top:`${s}px`},{duration:500,fill:"forwards"}),c.animate({left:`${n}px`,top:`${s}px`},{duration:250,fill:"forwards"})});window.addEventListener("mousedown",function(t){t.button===0&&(i.classList.add("clicked-outline"),c.classList.add("clicked-ball"))});window.addEventListener("mouseup",function(){i.classList.remove("clicked-outline"),c.classList.remove("clicked-ball")});const m=document.querySelectorAll("button, a, label, input");m.forEach(t=>{t.addEventListener("mouseenter",()=>{l.classList.add("hovered-dot")}),t.addEventListener("mouseleave",()=>{l.classList.remove("hovered-dot")}),t.addEventListener("mouseenter",()=>{c.classList.add("hovered-ball")}),t.addEventListener("mouseleave",()=>{c.classList.remove("hovered-ball")}),t.addEventListener("mouseenter",()=>{i.classList.add("hovered-outline")}),t.addEventListener("mouseleave",()=>{i.classList.remove("hovered-outline")})});var f=document.getElementById("switchtheme");f.onclick=function(){document.body.classList.toggle("lighttheme")};
