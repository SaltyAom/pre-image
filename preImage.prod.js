async function p(){if("undefined"==typeof window)return!1;if(void 0===arguments[0])return!1;let e=arguments,t=arguments[arguments.length-1],n=t.delay?t.delay:0,o=!!t.cors;if(!(!t.preferWebP||!supportWebP())&&t.preferWebP){let t=Object.values(e);for(let e of t){let n=e.split(/(.*)\.[^.]+$/)[1],o=e.split(".");"webp"!==o[o.length-1].toLowerCase()&&t.includes(`${n}.webp`)&&t.splice(t.indexOf(e),1)}}let i=[],r=new Promise(e=>{this.loadComplete=(()=>{e(!0)})});setTimeout(function(){for(let t of e){if("string"!=typeof t)return!1;let e=new Image;o&&(e.crossOrigin="Anonymous"),e.src=t,i.push(t),e.onload=async function(){l(t,i)}}},n,i);let l=(e,t)=>{t.splice(t.indexOf(e),1),void 0===t[0]&&this.loadComplete()};return await r,r}function supportWebP(){let e=document.createElement("canvas");return!(!e.getContext||!e.getContext("2d"))&&0==e.toDataURL("image/webp").indexOf("data:image/webp")}module.exports=p;