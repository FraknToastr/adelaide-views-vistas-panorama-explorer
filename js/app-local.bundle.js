(()=>{function al(i=document){let e=i.defaultView,t=i.createElement("div");t.id="vistas-tooltip",t.className="accessible-tooltip",t.setAttribute("role","tooltip"),t.hidden=!0;let n=null,s=null,r=null,o=null,a=null,l=new e.AbortController,c={capture:!0,signal:l.signal};function h(d){let b=[...d.matches?.("[title]")?[d]:[],...d.querySelectorAll?.("[title]")||[]];for(let v of b){let x=v.getAttribute("title");x&&(v.dataset.tooltip=x,v.matches('button,a,input,[role="button"]')&&!v.hasAttribute("aria-label")&&!v.hasAttribute("aria-labelledby")&&!v.textContent.trim()&&v.setAttribute("aria-label",x)),v.removeAttribute("title")}}function u(d){return d?.closest?.("[data-tooltip]")}function f(){if(n){let d=(n.getAttribute("aria-describedby")||"").split(/\s+/).filter(b=>b&&b!==t.id);d.length?n.setAttribute("aria-describedby",d.join(" ")):n.removeAttribute("aria-describedby")}n=null,t.hidden=!0}function p(){if(!n)return;let d=(n.closest(".choose-file")||n).getBoundingClientRect(),b=10,v=t.offsetWidth,x=t.offsetHeight,C=s===n&&o?o.x:d.left+d.width/2,E=s===n&&o?o.y:d.bottom,R=s===n&&o?40:12,D=C+20,S=E+R;D+v>e.innerWidth-b&&(D=C-v-20),S+x>e.innerHeight-b&&(S=(s===n&&o?o.y:d.top)-x-R),t.style.left=Math.max(b,Math.min(D,e.innerWidth-v-b))+"px",t.style.top=Math.max(b,Math.min(S,e.innerHeight-x-b))+"px"}function g(d){if(!d||d===a||d.disabled||!d.isConnected||!d.getClientRects().length){f();return}if(n!==d){f(),n=d;let v=new Set((d.getAttribute("aria-describedby")||"").split(/\s+/).filter(Boolean));v.add(t.id),d.setAttribute("aria-describedby",[...v].join(" "))}let b=d.closest("dialog[open]")||i.fullscreenElement||i.body;t.parentNode!==b&&b.append(t),t.textContent!==d.dataset.tooltip&&(t.textContent=d.dataset.tooltip),t.hidden=!1,p()}h(i);let _=new e.MutationObserver(d=>{for(let b of d)if(b.type==="childList")for(let v of b.addedNodes)v.nodeType===1&&v!==t&&h(v);else b.attributeName==="title"&&h(b.target);n&&(!n.isConnected||n.disabled||!n.getClientRects().length?f():t.textContent!==n.dataset.tooltip&&g(n))});_.observe(i.documentElement,{subtree:!0,childList:!0,attributes:!0,attributeFilter:["title","data-tooltip","disabled","hidden"]}),i.addEventListener("pointerover",d=>{if(d.pointerType==="touch"||t.contains(d.target))return;let b=u(d.target);b!==s&&(s=b,a=null,o={x:d.clientX,y:d.clientY},g(s||r))},c),i.addEventListener("pointerout",d=>{s&&!s.contains(d.relatedTarget)&&!t.contains(d.relatedTarget)&&(s=null,o=null,a=null,g(r)),d.target===t&&!t.contains(d.relatedTarget)&&!n?.contains(d.relatedTarget)&&f()},c),i.addEventListener("focusin",d=>{let b=u(d.target);b&&d.target.matches(":focus-visible")&&(r=b,a=null,g(b))},c),i.addEventListener("focusout",()=>{r=null,g(s)},c),i.addEventListener("keydown",d=>{d.key==="Escape"&&n&&(a=n,f(),d.preventDefault(),d.stopPropagation())},c),i.addEventListener("pointerdown",()=>{a=n,r=null,f()},c);let m=()=>{s=null,r=null,o=null,f()};return i.addEventListener("scroll",m,c),i.addEventListener("fullscreenchange",m,c),i.addEventListener("visibilitychange",m,c),e.addEventListener("blur",m,{signal:l.signal}),e.addEventListener("resize",m,{signal:l.signal}),()=>{m(),_.disconnect(),l.abort(),t.remove()}}var Nl=0,$a=1,Fl=2;var Ka=1,Ol=2,ln=3,Qt=0,Ct=1,Vt=2,An=0,ei=1,Qa=2,ec=3,tc=4,Bl=5,Bn=100,zl=101,kl=102,Vl=103,Hl=104,Gl=200,Wl=201,Xl=202,ql=203,Pr=204,Lr=205,Yl=206,jl=207,Zl=208,Jl=209,$l=210,Kl=211,Ql=212,eh=213,th=214,no=0,io=1,so=2,ti=3,ro=4,oo=5,ao=6,co=7,lo=0,nh=1,ih=2,Cn=0,sh=1,rh=2,oh=3,ah=4,ch=5,lh=6,hh=7;var nc=300,li=301,hi=302,ho=303,uo=304,Fs=306,Dr=1e3,On=1001,Ur=1002,qt=1003,uh=1004;var Os=1005;var en=1006,fo=1007;var Gn=1008;var hn=1009,ic=1010,sc=1011,Xi=1012,po=1013,Wn=1014,un=1015,qi=1016,mo=1017,go=1018,Yi=1020,rc=35902,oc=35899,ac=1021,cc=1022,Yt=1023,Oi=1026,ji=1027,lc=1028,_o=1029,hc=1030,xo=1031;var yo=1033,Bs=33776,zs=33777,ks=33778,Vs=33779,vo=35840,Mo=35841,bo=35842,So=35843,wo=36196,Eo=37492,To=37496,Ao=37808,Co=37809,Ro=37810,Io=37811,Po=37812,Lo=37813,Do=37814,Uo=37815,No=37816,Fo=37817,Oo=37818,Bo=37819,zo=37820,ko=37821,Vo=36492,Ho=36494,Go=36495,Wo=36283,Xo=36284,qo=36285,Yo=36286;var ps=2300,Nr=2301,Ir=2302,za=2400,ka=2401,Va=2402;var dh=3200,fh=3201;var uc=0,ph=1,Rn="",xt="srgb",ni="srgb-linear",ms="linear",Ze="srgb";var Qn=7680;var Ha=519,mh=512,gh=513,_h=514,dc=515,xh=516,yh=517,vh=518,Mh=519,Ga=35044;var fc="300 es",Kt=2e3,gs=2001;var wn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},vt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],cl=1234567,Ni=Math.PI/180,Bi=180/Math.PI;function Zi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(vt[i&255]+vt[i>>8&255]+vt[i>>16&255]+vt[i>>24&255]+"-"+vt[e&255]+vt[e>>8&255]+"-"+vt[e>>16&15|64]+vt[e>>24&255]+"-"+vt[t&63|128]+vt[t>>8&255]+"-"+vt[t>>16&255]+vt[t>>24&255]+vt[n&255]+vt[n>>8&255]+vt[n>>16&255]+vt[n>>24&255]).toLowerCase()}function He(i,e,t){return Math.max(e,Math.min(t,i))}function pc(i,e){return(i%e+e)%e}function pd(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function md(i,e,t){return i!==e?(t-i)/(e-i):0}function fs(i,e,t){return(1-t)*i+t*e}function gd(i,e,t,n){return fs(i,e,1-Math.exp(-t*n))}function _d(i,e=1){return e-Math.abs(pc(i,e*2)-e)}function xd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function yd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function vd(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Md(i,e){return i+Math.random()*(e-i)}function bd(i){return i*(.5-Math.random())}function Sd(i){i!==void 0&&(cl=i);let e=cl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function wd(i){return i*Ni}function Ed(i){return i*Bi}function Td(i){return(i&i-1)===0&&i!==0}function Ad(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Cd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Rd(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),f=o((e-n)/2),p=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*h,l*u,l*f,a*c);break;case"YZY":i.set(l*f,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*f,a*h,a*c);break;case"XZX":i.set(a*h,l*g,l*p,a*c);break;case"YXY":i.set(l*p,a*h,l*g,a*c);break;case"ZYZ":i.set(l*g,l*p,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ui(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Et(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Ji={DEG2RAD:Ni,RAD2DEG:Bi,generateUUID:Zi,clamp:He,euclideanModulo:pc,mapLinear:pd,inverseLerp:md,lerp:fs,damp:gd,pingpong:_d,smoothstep:xd,smootherstep:yd,randInt:vd,randFloat:Md,randFloatSpread:bd,seededRandom:Sd,degToRad:wd,radToDeg:Ed,isPowerOfTwo:Td,ceilPowerOfTwo:Ad,floorPowerOfTwo:Cd,setQuaternionFromProperEuler:Rd,normalize:Et,denormalize:Ui},We=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=He(this.x,e.x,t.x),this.y=He(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=He(this.x,e,t),this.y=He(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(He(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(He(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},En=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],f=r[o+0],p=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(u!==_||l!==f||c!==p||h!==g){let m=1-a,d=l*f+c*p+h*g+u*_,b=d>=0?1:-1,v=1-d*d;if(v>Number.EPSILON){let C=Math.sqrt(v),E=Math.atan2(C,d*b);m=Math.sin(m*E)/C,a=Math.sin(a*E)/C}let x=a*b;if(l=l*m+f*x,c=c*m+p*x,h=h*m+g*x,u=u*m+_*x,m===1-a){let C=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=C,c*=C,h*=C,u*=C}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],f=r[o+1],p=r[o+2],g=r[o+3];return e[t]=a*g+h*u+l*p-c*f,e[t+1]=l*g+h*f+c*u-a*p,e[t+2]=c*g+h*p+a*f-l*u,e[t+3]=h*g-a*u-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),f=l(n/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u-f*p*g;break;case"YXZ":this._x=f*h*u+c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u+f*p*g;break;case"ZXY":this._x=f*h*u-c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u-f*p*g;break;case"ZYX":this._x=f*h*u-c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u+f*p*g;break;case"YZX":this._x=f*h*u+c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u-f*p*g;break;case"XZY":this._x=f*h*u-c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=n+a+u;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(n>a&&n>u){let p=2*Math.sqrt(1+n-a-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>u){let p=2*Math.sqrt(1+a-n-u);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-n-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(He(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},F=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ll.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ll.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=He(this.x,e.x,t.x),this.y=He(this.y,e.y,t.y),this.z=He(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=He(this.x,e,t),this.y=He(this.y,e,t),this.z=He(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(He(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ga.copy(this).projectOnVector(e),this.sub(ga)}reflect(e){return this.sub(ga.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(He(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ga=new F,ll=new En,Fe=class i{constructor(e,t,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],p=n[5],g=n[8],_=s[0],m=s[3],d=s[6],b=s[1],v=s[4],x=s[7],C=s[2],E=s[5],R=s[8];return r[0]=o*_+a*b+l*C,r[3]=o*m+a*v+l*E,r[6]=o*d+a*x+l*R,r[1]=c*_+h*b+u*C,r[4]=c*m+h*v+u*E,r[7]=c*d+h*x+u*R,r[2]=f*_+p*b+g*C,r[5]=f*m+p*v+g*E,r[8]=f*d+p*x+g*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,f=a*l-h*r,p=c*r-o*l,g=t*u+n*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return e[0]=u*_,e[1]=(s*c-h*n)*_,e[2]=(a*n-s*o)*_,e[3]=f*_,e[4]=(h*t-s*l)*_,e[5]=(s*r-a*t)*_,e[6]=p*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(_a.makeScale(e,t)),this}rotate(e){return this.premultiply(_a.makeRotation(-e)),this}translate(e,t){return this.premultiply(_a.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},_a=new Fe;function mc(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function _s(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function bh(){let i=_s("canvas");return i.style.display="block",i}var hl={};function zi(i){i in hl||(hl[i]=!0,console.warn(i))}function Sh(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var ul=new Fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),dl=new Fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Id(){let i={enabled:!0,workingColorSpace:ni,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Ze&&(s.r=Sn(s.r),s.g=Sn(s.g),s.b=Sn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Ze&&(s.r=Fi(s.r),s.g=Fi(s.g),s.b=Fi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Rn?ms:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return zi("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return zi("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ni]:{primaries:e,whitePoint:n,transfer:ms,toXYZ:ul,fromXYZ:dl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:xt},outputColorSpaceConfig:{drawingBufferColorSpace:xt}},[xt]:{primaries:e,whitePoint:n,transfer:Ze,toXYZ:ul,fromXYZ:dl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:xt}}}),i}var Xe=Id();function Sn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Fi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var bi,Fr=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{bi===void 0&&(bi=_s("canvas")),bi.width=e.width,bi.height=e.height;let s=bi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=bi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=_s("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Sn(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Sn(t[n]/255)*255):t[n]=Sn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Pd=0,ki=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Pd++}),this.uuid=Zi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(xa(s[o].image)):r.push(xa(s[o]))}else r=xa(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function xa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Fr.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Ld=0,ya=new F,Tt=class i extends wn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=On,s=On,r=en,o=Gn,a=Yt,l=hn,c=i.DEFAULT_ANISOTROPY,h=Rn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ld++}),this.uuid=Zi(),this.name="",this.source=new ki(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new We(0,0),this.repeat=new We(1,1),this.center=new We(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ya).x}get height(){return this.source.getSize(ya).y}get depth(){return this.source.getSize(ya).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==nc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Dr:e.x=e.x-Math.floor(e.x);break;case On:e.x=e.x<0?0:1;break;case Ur:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Dr:e.y=e.y-Math.floor(e.y);break;case On:e.y=e.y<0?0:1;break;case Ur:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Tt.DEFAULT_IMAGE=null;Tt.DEFAULT_MAPPING=nc;Tt.DEFAULT_ANISOTROPY=1;var ht=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],p=l[5],g=l[9],_=l[2],m=l[6],d=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(c+1)/2,x=(p+1)/2,C=(d+1)/2,E=(h+f)/4,R=(u+_)/4,D=(g+m)/4;return v>x&&v>C?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=E/n,r=R/n):x>C?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=E/s,r=D/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=R/r,s=D/r),this.set(n,s,r,t),this}let b=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(u-_)/b,this.z=(f-h)/b,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=He(this.x,e.x,t.x),this.y=He(this.y,e.y,t.y),this.z=He(this.z,e.z,t.z),this.w=He(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=He(this.x,e,t),this.y=He(this.y,e,t),this.z=He(this.z,e,t),this.w=He(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(He(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Or=class extends wn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:en,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ht(0,0,e,t),this.scissorTest=!1,this.viewport=new ht(0,0,e,t);let s={width:e,height:t,depth:n.depth},r=new Tt(s);this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:en,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new ki(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},cn=class extends Or{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},xs=class extends Tt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=qt,this.minFilter=qt,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Br=class extends Tt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=qt,this.minFilter=qt,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ot=class{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Zt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Zt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Zt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Zt):Zt.fromBufferAttribute(r,o),Zt.applyMatrix4(e.matrixWorld),this.expandByPoint(Zt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ir.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ir.copy(n.boundingBox)),ir.applyMatrix4(e.matrixWorld),this.union(ir)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Zt),Zt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(as),sr.subVectors(this.max,as),Si.subVectors(e.a,as),wi.subVectors(e.b,as),Ei.subVectors(e.c,as),Pn.subVectors(wi,Si),Ln.subVectors(Ei,wi),Zn.subVectors(Si,Ei);let t=[0,-Pn.z,Pn.y,0,-Ln.z,Ln.y,0,-Zn.z,Zn.y,Pn.z,0,-Pn.x,Ln.z,0,-Ln.x,Zn.z,0,-Zn.x,-Pn.y,Pn.x,0,-Ln.y,Ln.x,0,-Zn.y,Zn.x,0];return!va(t,Si,wi,Ei,sr)||(t=[1,0,0,0,1,0,0,0,1],!va(t,Si,wi,Ei,sr))?!1:(rr.crossVectors(Pn,Ln),t=[rr.x,rr.y,rr.z],va(t,Si,wi,Ei,sr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Zt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Zt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(gn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},gn=[new F,new F,new F,new F,new F,new F,new F,new F],Zt=new F,ir=new Ot,Si=new F,wi=new F,Ei=new F,Pn=new F,Ln=new F,Zn=new F,as=new F,sr=new F,rr=new F,Jn=new F;function va(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Jn.fromArray(i,r);let a=s.x*Math.abs(Jn.x)+s.y*Math.abs(Jn.y)+s.z*Math.abs(Jn.z),l=e.dot(Jn),c=t.dot(Jn),h=n.dot(Jn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Dd=new Ot,cs=new F,Ma=new F,zn=class{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Dd.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;cs.subVectors(e,this.center);let t=cs.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(cs,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ma.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(cs.copy(e.center).add(Ma)),this.expandByPoint(cs.copy(e.center).sub(Ma))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},_n=new F,ba=new F,or=new F,Dn=new F,Sa=new F,ar=new F,wa=new F,Vi=class{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,_n)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=_n.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(_n.copy(this.origin).addScaledVector(this.direction,t),_n.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){ba.copy(e).add(t).multiplyScalar(.5),or.copy(t).sub(e).normalize(),Dn.copy(this.origin).sub(ba);let r=e.distanceTo(t)*.5,o=-this.direction.dot(or),a=Dn.dot(this.direction),l=-Dn.dot(or),c=Dn.lengthSq(),h=Math.abs(1-o*o),u,f,p,g;if(h>0)if(u=o*l-a,f=o*a-l,g=r*h,u>=0)if(f>=-g)if(f<=g){let _=1/h;u*=_,f*=_,p=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(ba).addScaledVector(or,f),p}intersectSphere(e,t){_n.subVectors(e.center,this.origin);let n=_n.dot(this.direction),s=_n.dot(_n)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,_n)!==null}intersectTriangle(e,t,n,s,r){Sa.subVectors(t,e),ar.subVectors(n,e),wa.crossVectors(Sa,ar);let o=this.direction.dot(wa),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Dn.subVectors(this.origin,e);let l=a*this.direction.dot(ar.crossVectors(Dn,ar));if(l<0)return null;let c=a*this.direction.dot(Sa.cross(Dn));if(c<0||l+c>o)return null;let h=-a*Dn.dot(wa);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},nt=class i{constructor(e,t,n,s,r,o,a,l,c,h,u,f,p,g,_,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,h,u,f,p,g,_,m)}set(e,t,n,s,r,o,a,l,c,h,u,f,p,g,_,m){let d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=h,d[10]=u,d[14]=f,d[3]=p,d[7]=g,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/Ti.setFromMatrixColumn(e,0).length(),r=1/Ti.setFromMatrixColumn(e,1).length(),o=1/Ti.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=o*h,p=o*u,g=a*h,_=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+g*c,t[5]=f-_*c,t[9]=-a*l,t[2]=_-f*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*h,p=l*u,g=c*h,_=c*u;t[0]=f+_*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=p*a-g,t[6]=_+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*h,p=l*u,g=c*h,_=c*u;t[0]=f-_*a,t[4]=-o*u,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*h,t[9]=_-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*h,p=o*u,g=a*h,_=a*u;t[0]=l*h,t[4]=g*c-p,t[8]=f*c+_,t[1]=l*u,t[5]=_*c+f,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,p=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=_-f*u,t[8]=g*u+p,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=p*u+g,t[10]=f-_*u}else if(e.order==="XZY"){let f=o*l,p=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+_,t[5]=o*h,t[9]=p*u-g,t[2]=g*u-p,t[6]=a*h,t[10]=_*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ud,e,Nd)}lookAt(e,t,n){let s=this.elements;return Ut.subVectors(e,t),Ut.lengthSq()===0&&(Ut.z=1),Ut.normalize(),Un.crossVectors(n,Ut),Un.lengthSq()===0&&(Math.abs(n.z)===1?Ut.x+=1e-4:Ut.z+=1e-4,Ut.normalize(),Un.crossVectors(n,Ut)),Un.normalize(),cr.crossVectors(Ut,Un),s[0]=Un.x,s[4]=cr.x,s[8]=Ut.x,s[1]=Un.y,s[5]=cr.y,s[9]=Ut.y,s[2]=Un.z,s[6]=cr.z,s[10]=Ut.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],p=n[13],g=n[2],_=n[6],m=n[10],d=n[14],b=n[3],v=n[7],x=n[11],C=n[15],E=s[0],R=s[4],D=s[8],S=s[12],w=s[1],P=s[5],B=s[9],G=s[13],q=s[2],j=s[6],H=s[10],Q=s[14],V=s[3],ne=s[7],ae=s[11],de=s[15];return r[0]=o*E+a*w+l*q+c*V,r[4]=o*R+a*P+l*j+c*ne,r[8]=o*D+a*B+l*H+c*ae,r[12]=o*S+a*G+l*Q+c*de,r[1]=h*E+u*w+f*q+p*V,r[5]=h*R+u*P+f*j+p*ne,r[9]=h*D+u*B+f*H+p*ae,r[13]=h*S+u*G+f*Q+p*de,r[2]=g*E+_*w+m*q+d*V,r[6]=g*R+_*P+m*j+d*ne,r[10]=g*D+_*B+m*H+d*ae,r[14]=g*S+_*G+m*Q+d*de,r[3]=b*E+v*w+x*q+C*V,r[7]=b*R+v*P+x*j+C*ne,r[11]=b*D+v*B+x*H+C*ae,r[15]=b*S+v*G+x*Q+C*de,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],p=e[14],g=e[3],_=e[7],m=e[11],d=e[15];return g*(+r*l*u-s*c*u-r*a*f+n*c*f+s*a*p-n*l*p)+_*(+t*l*p-t*c*f+r*o*f-s*o*p+s*c*h-r*l*h)+m*(+t*c*u-t*a*p-r*o*u+n*o*p+r*a*h-n*c*h)+d*(-s*a*h-t*l*u+t*a*f+s*o*u-n*o*f+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],p=e[11],g=e[12],_=e[13],m=e[14],d=e[15],b=u*m*c-_*f*c+_*l*p-a*m*p-u*l*d+a*f*d,v=g*f*c-h*m*c-g*l*p+o*m*p+h*l*d-o*f*d,x=h*_*c-g*u*c+g*a*p-o*_*p-h*a*d+o*u*d,C=g*u*l-h*_*l-g*a*f+o*_*f+h*a*m-o*u*m,E=t*b+n*v+s*x+r*C;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/E;return e[0]=b*R,e[1]=(_*f*r-u*m*r-_*s*p+n*m*p+u*s*d-n*f*d)*R,e[2]=(a*m*r-_*l*r+_*s*c-n*m*c-a*s*d+n*l*d)*R,e[3]=(u*l*r-a*f*r-u*s*c+n*f*c+a*s*p-n*l*p)*R,e[4]=v*R,e[5]=(h*m*r-g*f*r+g*s*p-t*m*p-h*s*d+t*f*d)*R,e[6]=(g*l*r-o*m*r-g*s*c+t*m*c+o*s*d-t*l*d)*R,e[7]=(o*f*r-h*l*r+h*s*c-t*f*c-o*s*p+t*l*p)*R,e[8]=x*R,e[9]=(g*u*r-h*_*r-g*n*p+t*_*p+h*n*d-t*u*d)*R,e[10]=(o*_*r-g*a*r+g*n*c-t*_*c-o*n*d+t*a*d)*R,e[11]=(h*a*r-o*u*r-h*n*c+t*u*c+o*n*p-t*a*p)*R,e[12]=C*R,e[13]=(h*_*s-g*u*s+g*n*f-t*_*f-h*n*m+t*u*m)*R,e[14]=(g*a*s-o*_*s-g*n*l+t*_*l+o*n*m-t*a*m)*R,e[15]=(o*u*s-h*a*s+h*n*l-t*u*l-o*n*f+t*a*f)*R,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,f=r*c,p=r*h,g=r*u,_=o*h,m=o*u,d=a*u,b=l*c,v=l*h,x=l*u,C=n.x,E=n.y,R=n.z;return s[0]=(1-(_+d))*C,s[1]=(p+x)*C,s[2]=(g-v)*C,s[3]=0,s[4]=(p-x)*E,s[5]=(1-(f+d))*E,s[6]=(m+b)*E,s[7]=0,s[8]=(g+v)*R,s[9]=(m-b)*R,s[10]=(1-(f+_))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=Ti.set(s[0],s[1],s[2]).length(),o=Ti.set(s[4],s[5],s[6]).length(),a=Ti.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Jt.copy(this);let c=1/r,h=1/o,u=1/a;return Jt.elements[0]*=c,Jt.elements[1]*=c,Jt.elements[2]*=c,Jt.elements[4]*=h,Jt.elements[5]*=h,Jt.elements[6]*=h,Jt.elements[8]*=u,Jt.elements[9]*=u,Jt.elements[10]*=u,t.setFromRotationMatrix(Jt),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=Kt,l=!1){let c=this.elements,h=2*r/(t-e),u=2*r/(n-s),f=(t+e)/(t-e),p=(n+s)/(n-s),g,_;if(l)g=r/(o-r),_=o*r/(o-r);else if(a===Kt)g=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===gs)g=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Kt,l=!1){let c=this.elements,h=2/(t-e),u=2/(n-s),f=-(t+e)/(t-e),p=-(n+s)/(n-s),g,_;if(l)g=1/(o-r),_=o/(o-r);else if(a===Kt)g=-2/(o-r),_=-(o+r)/(o-r);else if(a===gs)g=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Ti=new F,Jt=new nt,Ud=new F(0,0,0),Nd=new F(1,1,1),Un=new F,cr=new F,Ut=new F,fl=new nt,pl=new En,tn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(He(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-He(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(He(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-He(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(He(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-He(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return fl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(fl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return pl.setFromEuler(this),this.setFromQuaternion(pl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};tn.DEFAULT_ORDER="XYZ";var ys=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Fd=0,ml=new F,Ai=new En,xn=new nt,lr=new F,ls=new F,Od=new F,Bd=new En,gl=new F(1,0,0),_l=new F(0,1,0),xl=new F(0,0,1),yl={type:"added"},zd={type:"removed"},Ci={type:"childadded",child:null},Ea={type:"childremoved",child:null},Pt=class i extends wn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Fd++}),this.uuid=Zi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new F,t=new tn,n=new En,s=new F(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new nt},normalMatrix:{value:new Fe}}),this.matrix=new nt,this.matrixWorld=new nt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ys,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ai.setFromAxisAngle(e,t),this.quaternion.multiply(Ai),this}rotateOnWorldAxis(e,t){return Ai.setFromAxisAngle(e,t),this.quaternion.premultiply(Ai),this}rotateX(e){return this.rotateOnAxis(gl,e)}rotateY(e){return this.rotateOnAxis(_l,e)}rotateZ(e){return this.rotateOnAxis(xl,e)}translateOnAxis(e,t){return ml.copy(e).applyQuaternion(this.quaternion),this.position.add(ml.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(gl,e)}translateY(e){return this.translateOnAxis(_l,e)}translateZ(e){return this.translateOnAxis(xl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(xn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?lr.copy(e):lr.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ls.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xn.lookAt(ls,lr,this.up):xn.lookAt(lr,ls,this.up),this.quaternion.setFromRotationMatrix(xn),s&&(xn.extractRotation(s.matrixWorld),Ai.setFromRotationMatrix(xn),this.quaternion.premultiply(Ai.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(yl),Ci.child=e,this.dispatchEvent(Ci),Ci.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(zd),Ea.child=e,this.dispatchEvent(Ea),Ea.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),xn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),xn.multiply(e.parent.matrixWorld)),e.applyMatrix4(xn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(yl),Ci.child=e,this.dispatchEvent(Ci),Ci.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ls,e,Od),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ls,Bd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Pt.DEFAULT_UP=new F(0,1,0);Pt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var $t=new F,yn=new F,Ta=new F,vn=new F,Ri=new F,Ii=new F,vl=new F,Aa=new F,Ca=new F,Ra=new F,Ia=new ht,Pa=new ht,La=new ht,bn=class i{constructor(e=new F,t=new F,n=new F){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),$t.subVectors(e,t),s.cross($t);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){$t.subVectors(s,t),yn.subVectors(n,t),Ta.subVectors(e,t);let o=$t.dot($t),a=$t.dot(yn),l=$t.dot(Ta),c=yn.dot(yn),h=yn.dot(Ta),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,p=(c*l-a*h)*f,g=(o*h-a*l)*f;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,vn)===null?!1:vn.x>=0&&vn.y>=0&&vn.x+vn.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,vn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,vn.x),l.addScaledVector(o,vn.y),l.addScaledVector(a,vn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return Ia.setScalar(0),Pa.setScalar(0),La.setScalar(0),Ia.fromBufferAttribute(e,t),Pa.fromBufferAttribute(e,n),La.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Ia,r.x),o.addScaledVector(Pa,r.y),o.addScaledVector(La,r.z),o}static isFrontFacing(e,t,n,s){return $t.subVectors(n,t),yn.subVectors(e,t),$t.cross(yn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $t.subVectors(this.c,this.b),yn.subVectors(this.a,this.b),$t.cross(yn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;Ri.subVectors(s,n),Ii.subVectors(r,n),Aa.subVectors(e,n);let l=Ri.dot(Aa),c=Ii.dot(Aa);if(l<=0&&c<=0)return t.copy(n);Ca.subVectors(e,s);let h=Ri.dot(Ca),u=Ii.dot(Ca);if(h>=0&&u<=h)return t.copy(s);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(Ri,o);Ra.subVectors(e,r);let p=Ri.dot(Ra),g=Ii.dot(Ra);if(g>=0&&p<=g)return t.copy(r);let _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Ii,a);let m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return vl.subVectors(r,s),a=(u-h)/(u-h+(p-g)),t.copy(s).addScaledVector(vl,a);let d=1/(m+_+f);return o=_*d,a=f*d,t.copy(n).addScaledVector(Ri,o).addScaledVector(Ii,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},wh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Nn={h:0,s:0,l:0},hr={h:0,s:0,l:0};function Da(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var ke=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=xt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Xe.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Xe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Xe.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Xe.workingColorSpace){if(e=pc(e,1),t=He(t,0,1),n=He(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Da(o,r,e+1/3),this.g=Da(o,r,e),this.b=Da(o,r,e-1/3)}return Xe.colorSpaceToWorking(this,s),this}setStyle(e,t=xt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=xt){let n=wh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Sn(e.r),this.g=Sn(e.g),this.b=Sn(e.b),this}copyLinearToSRGB(e){return this.r=Fi(e.r),this.g=Fi(e.g),this.b=Fi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=xt){return Xe.workingToColorSpace(Mt.copy(this),e),Math.round(He(Mt.r*255,0,255))*65536+Math.round(He(Mt.g*255,0,255))*256+Math.round(He(Mt.b*255,0,255))}getHexString(e=xt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Xe.workingColorSpace){Xe.workingToColorSpace(Mt.copy(this),t);let n=Mt.r,s=Mt.g,r=Mt.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Xe.workingColorSpace){return Xe.workingToColorSpace(Mt.copy(this),t),e.r=Mt.r,e.g=Mt.g,e.b=Mt.b,e}getStyle(e=xt){Xe.workingToColorSpace(Mt.copy(this),e);let t=Mt.r,n=Mt.g,s=Mt.b;return e!==xt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Nn),this.setHSL(Nn.h+e,Nn.s+t,Nn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Nn),e.getHSL(hr);let n=fs(Nn.h,hr.h,t),s=fs(Nn.s,hr.s,t),r=fs(Nn.l,hr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Mt=new ke;ke.NAMES=wh;var kd=0,Bt=class extends wn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:kd++}),this.uuid=Zi(),this.name="",this.type="Material",this.blending=ei,this.side=Qt,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Pr,this.blendDst=Lr,this.blendEquation=Bn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ke(0,0,0),this.blendAlpha=0,this.depthFunc=ti,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ha,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qn,this.stencilZFail=Qn,this.stencilZPass=Qn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ei&&(n.blending=this.blending),this.side!==Qt&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Pr&&(n.blendSrc=this.blendSrc),this.blendDst!==Lr&&(n.blendDst=this.blendDst),this.blendEquation!==Bn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ti&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ha&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Qn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Qn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Tn=class extends Bt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new tn,this.combine=lo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var dt=new F,ur=new We,Vd=0,Ft=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Vd++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ga,this.updateRanges=[],this.gpuType=un,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ur.fromBufferAttribute(this,t),ur.applyMatrix3(e),this.setXY(t,ur.x,ur.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)dt.fromBufferAttribute(this,t),dt.applyMatrix3(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)dt.fromBufferAttribute(this,t),dt.applyMatrix4(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)dt.fromBufferAttribute(this,t),dt.applyNormalMatrix(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)dt.fromBufferAttribute(this,t),dt.transformDirection(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ui(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Et(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ui(t,this.array)),t}setX(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ui(t,this.array)),t}setY(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ui(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ui(t,this.array)),t}setW(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array),s=Et(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array),s=Et(s,this.array),r=Et(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ga&&(e.usage=this.usage),e}};var vs=class extends Ft{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Ms=class extends Ft{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var ct=class extends Ft{constructor(e,t,n){super(new Float32Array(e),t,n)}},Hd=0,Wt=new nt,Ua=new Pt,Pi=new F,Nt=new Ot,hs=new Ot,_t=new F,At=class i extends wn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hd++}),this.uuid=Zi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(mc(e)?Ms:vs)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Fe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Wt.makeRotationFromQuaternion(e),this.applyMatrix4(Wt),this}rotateX(e){return Wt.makeRotationX(e),this.applyMatrix4(Wt),this}rotateY(e){return Wt.makeRotationY(e),this.applyMatrix4(Wt),this}rotateZ(e){return Wt.makeRotationZ(e),this.applyMatrix4(Wt),this}translate(e,t,n){return Wt.makeTranslation(e,t,n),this.applyMatrix4(Wt),this}scale(e,t,n){return Wt.makeScale(e,t,n),this.applyMatrix4(Wt),this}lookAt(e){return Ua.lookAt(e),Ua.updateMatrix(),this.applyMatrix4(Ua.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Pi).negate(),this.translate(Pi.x,Pi.y,Pi.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ct(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ot);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Nt.setFromBufferAttribute(r),this.morphTargetsRelative?(_t.addVectors(this.boundingBox.min,Nt.min),this.boundingBox.expandByPoint(_t),_t.addVectors(this.boundingBox.max,Nt.max),this.boundingBox.expandByPoint(_t)):(this.boundingBox.expandByPoint(Nt.min),this.boundingBox.expandByPoint(Nt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){let n=this.boundingSphere.center;if(Nt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];hs.setFromBufferAttribute(a),this.morphTargetsRelative?(_t.addVectors(Nt.min,hs.min),Nt.expandByPoint(_t),_t.addVectors(Nt.max,hs.max),Nt.expandByPoint(_t)):(Nt.expandByPoint(hs.min),Nt.expandByPoint(hs.max))}Nt.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)_t.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(_t));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)_t.fromBufferAttribute(a,c),l&&(Pi.fromBufferAttribute(e,c),_t.add(Pi)),s=Math.max(s,n.distanceToSquared(_t))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ft(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let D=0;D<n.count;D++)a[D]=new F,l[D]=new F;let c=new F,h=new F,u=new F,f=new We,p=new We,g=new We,_=new F,m=new F;function d(D,S,w){c.fromBufferAttribute(n,D),h.fromBufferAttribute(n,S),u.fromBufferAttribute(n,w),f.fromBufferAttribute(r,D),p.fromBufferAttribute(r,S),g.fromBufferAttribute(r,w),h.sub(c),u.sub(c),p.sub(f),g.sub(f);let P=1/(p.x*g.y-g.x*p.y);isFinite(P)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(P),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(P),a[D].add(_),a[S].add(_),a[w].add(_),l[D].add(m),l[S].add(m),l[w].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let D=0,S=b.length;D<S;++D){let w=b[D],P=w.start,B=w.count;for(let G=P,q=P+B;G<q;G+=3)d(e.getX(G+0),e.getX(G+1),e.getX(G+2))}let v=new F,x=new F,C=new F,E=new F;function R(D){C.fromBufferAttribute(s,D),E.copy(C);let S=a[D];v.copy(S),v.sub(C.multiplyScalar(C.dot(S))).normalize(),x.crossVectors(E,S);let P=x.dot(l[D])<0?-1:1;o.setXYZW(D,v.x,v.y,v.z,P)}for(let D=0,S=b.length;D<S;++D){let w=b[D],P=w.start,B=w.count;for(let G=P,q=P+B;G<q;G+=3)R(e.getX(G+0)),R(e.getX(G+1)),R(e.getX(G+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ft(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let s=new F,r=new F,o=new F,a=new F,l=new F,c=new F,h=new F,u=new F;if(e)for(let f=0,p=e.count;f<p;f+=3){let g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)_t.fromBufferAttribute(e,t),_t.normalize(),e.setXYZ(t,_t.x,_t.y,_t.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),p=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*h;for(let d=0;d<h;d++)f[g++]=c[p++]}return new Ft(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],p=e(f,n);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ml=new nt,$n=new Vi,dr=new zn,bl=new F,fr=new F,pr=new F,mr=new F,Na=new F,gr=new F,Sl=new F,_r=new F,ft=class extends Pt{constructor(e=new At,t=new Tn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){gr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(Na.fromBufferAttribute(u,e),o?gr.addScaledVector(Na,h):gr.addScaledVector(Na.sub(t),h))}t.add(gr)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),dr.copy(n.boundingSphere),dr.applyMatrix4(r),$n.copy(e.ray).recast(e.near),!(dr.containsPoint($n.origin)===!1&&($n.intersectSphere(dr,bl)===null||$n.origin.distanceToSquared(bl)>(e.far-e.near)**2))&&(Ml.copy(r).invert(),$n.copy(e.ray).applyMatrix4(Ml),!(n.boundingBox!==null&&$n.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,$n)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){let m=f[g],d=o[m.materialIndex],b=Math.max(m.start,p.start),v=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let x=b,C=v;x<C;x+=3){let E=a.getX(x),R=a.getX(x+1),D=a.getX(x+2);s=xr(this,d,e,n,c,h,u,E,R,D),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){let b=a.getX(m),v=a.getX(m+1),x=a.getX(m+2);s=xr(this,o,e,n,c,h,u,b,v,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){let m=f[g],d=o[m.materialIndex],b=Math.max(m.start,p.start),v=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=b,C=v;x<C;x+=3){let E=x,R=x+1,D=x+2;s=xr(this,d,e,n,c,h,u,E,R,D),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){let b=m,v=m+1,x=m+2;s=xr(this,o,e,n,c,h,u,b,v,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Gd(i,e,t,n,s,r,o,a){let l;if(e.side===Ct?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===Qt,a),l===null)return null;_r.copy(a),_r.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(_r);return c<t.near||c>t.far?null:{distance:c,point:_r.clone(),object:i}}function xr(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,fr),i.getVertexPosition(l,pr),i.getVertexPosition(c,mr);let h=Gd(i,e,t,n,fr,pr,mr,Sl);if(h){let u=new F;bn.getBarycoord(Sl,fr,pr,mr,u),s&&(h.uv=bn.getInterpolatedAttribute(s,a,l,c,u,new We)),r&&(h.uv1=bn.getInterpolatedAttribute(r,a,l,c,u,new We)),o&&(h.normal=bn.getInterpolatedAttribute(o,a,l,c,u,new F),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new F,materialIndex:0};bn.getNormal(fr,pr,mr,f.normal),h.face=f,h.barycoord=u}return h}var Hi=class i extends At{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,p=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ct(c,3)),this.setAttribute("normal",new ct(h,3)),this.setAttribute("uv",new ct(u,2));function g(_,m,d,b,v,x,C,E,R,D,S){let w=x/R,P=C/D,B=x/2,G=C/2,q=E/2,j=R+1,H=D+1,Q=0,V=0,ne=new F;for(let ae=0;ae<H;ae++){let de=ae*P-G;for(let De=0;De<j;De++){let je=De*w-B;ne[_]=je*b,ne[m]=de*v,ne[d]=q,c.push(ne.x,ne.y,ne.z),ne[_]=0,ne[m]=0,ne[d]=E>0?1:-1,h.push(ne.x,ne.y,ne.z),u.push(De/R),u.push(1-ae/D),Q+=1}}for(let ae=0;ae<D;ae++)for(let de=0;de<R;de++){let De=f+de+j*ae,je=f+de+j*(ae+1),$e=f+(de+1)+j*(ae+1),Me=f+(de+1)+j*ae;l.push(De,je,Me),l.push(je,$e,Me),V+=6}a.addGroup(p,V,S),p+=V,f+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function ui(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function St(i){let e={};for(let t=0;t<i.length;t++){let n=ui(i[t]);for(let s in n)e[s]=n[s]}return e}function Wd(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function gc(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Xe.workingColorSpace}var Eh={clone:ui,merge:St},Xd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,zt=class extends Bt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Xd,this.fragmentShader=qd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ui(e.uniforms),this.uniformsGroups=Wd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},ii=class extends Pt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new nt,this.projectionMatrix=new nt,this.projectionMatrixInverse=new nt,this.coordinateSystem=Kt,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Fn=new F,wl=new We,El=new We,bt=class extends ii{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Bi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ni*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Bi*2*Math.atan(Math.tan(Ni*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Fn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Fn.x,Fn.y).multiplyScalar(-e/Fn.z),Fn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Fn.x,Fn.y).multiplyScalar(-e/Fn.z)}getViewSize(e,t){return this.getViewBounds(e,wl,El),t.subVectors(El,wl)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ni*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Li=-90,Di=1,zr=class extends Pt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new bt(Li,Di,e,t);s.layers=this.layers,this.add(s);let r=new bt(Li,Di,e,t);r.layers=this.layers,this.add(r);let o=new bt(Li,Di,e,t);o.layers=this.layers,this.add(o);let a=new bt(Li,Di,e,t);a.layers=this.layers,this.add(a);let l=new bt(Li,Di,e,t);l.layers=this.layers,this.add(l);let c=new bt(Li,Di,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===Kt)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===gs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,f,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},bs=class extends Tt{constructor(e=[],t=li,n,s,r,o,a,l,c,h){super(e,t,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},kr=class extends cn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new bs(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Hi(5,5,5),r=new zt({name:"CubemapFromEquirect",uniforms:ui(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ct,blending:An});r.uniforms.tEquirect.value=t;let o=new ft(s,r),a=t.minFilter;return t.minFilter===Gn&&(t.minFilter=en),new zr(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},Xt=class extends Pt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Yd={type:"move"},Gi=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let _ of e.hand.values()){let m=t.getJointPose(_,n),d=this._getHandJoint(c,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Yd)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Xt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var si=class extends Pt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new tn,this.environmentIntensity=1,this.environmentRotation=new tn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var Fa=new F,jd=new F,Zd=new Fe,an=class{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Fa.subVectors(n,t).cross(jd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Fa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Zd.getNormalMatrix(e),s=this.coplanarPoint(Fa).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Kn=new zn,Jd=new We(.5,.5),yr=new F,Ss=class{constructor(e=new an,t=new an,n=new an,s=new an,r=new an,o=new an){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Kt,n=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],f=r[6],p=r[7],g=r[8],_=r[9],m=r[10],d=r[11],b=r[12],v=r[13],x=r[14],C=r[15];if(s[0].setComponents(c-o,p-h,d-g,C-b).normalize(),s[1].setComponents(c+o,p+h,d+g,C+b).normalize(),s[2].setComponents(c+a,p+u,d+_,C+v).normalize(),s[3].setComponents(c-a,p-u,d-_,C-v).normalize(),n)s[4].setComponents(l,f,m,x).normalize(),s[5].setComponents(c-l,p-f,d-m,C-x).normalize();else if(s[4].setComponents(c-l,p-f,d-m,C-x).normalize(),t===Kt)s[5].setComponents(c+l,p+f,d+m,C+x).normalize();else if(t===gs)s[5].setComponents(l,f,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Kn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Kn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Kn)}intersectsSprite(e){Kn.center.set(0,0,0);let t=Jd.distanceTo(e.center);return Kn.radius=.7071067811865476+t,Kn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Kn)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(yr.x=s.normal.x>0?e.max.x:e.min.x,yr.y=s.normal.y>0?e.max.y:e.min.y,yr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(yr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var nn=class extends Bt{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ke(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Vr=new F,Hr=new F,Tl=new nt,us=new Vi,vr=new zn,Oa=new F,Al=new F,Gr=class extends Pt{constructor(e=new At,t=new nn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Vr.fromBufferAttribute(t,s-1),Hr.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Vr.distanceTo(Hr);e.setAttribute("lineDistance",new ct(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),vr.copy(n.boundingSphere),vr.applyMatrix4(s),vr.radius+=r,e.ray.intersectsSphere(vr)===!1)return;Tl.copy(s).invert(),us.copy(e.ray).applyMatrix4(Tl);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let p=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=c){let d=h.getX(_),b=h.getX(_+1),v=Mr(this,e,us,l,d,b,_);v&&t.push(v)}if(this.isLineLoop){let _=h.getX(g-1),m=h.getX(p),d=Mr(this,e,us,l,_,m,g-1);d&&t.push(d)}}else{let p=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=c){let d=Mr(this,e,us,l,_,_+1,_);d&&t.push(d)}if(this.isLineLoop){let _=Mr(this,e,us,l,g-1,p,g-1);_&&t.push(_)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Mr(i,e,t,n,s,r,o){let a=i.geometry.attributes.position;if(Vr.fromBufferAttribute(a,s),Hr.fromBufferAttribute(a,r),t.distanceSqToSegment(Vr,Hr,Oa,Al)>n)return;Oa.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Oa);if(!(c<e.near||c>e.far))return{distance:c,point:Al.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var Cl=new F,Rl=new F,kn=class extends Gr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Cl.fromBufferAttribute(t,s),Rl.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Cl.distanceTo(Rl);e.setAttribute("lineDistance",new ct(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var sn=class extends Bt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ke(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Il=new nt,Wa=new Vi,br=new zn,Sr=new F,ri=class extends Pt{constructor(e=new At,t=new sn){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),br.copy(n.boundingSphere),br.applyMatrix4(s),br.radius+=r,e.ray.intersectsSphere(br)===!1)return;Il.copy(s).invert(),Wa.copy(e.ray).applyMatrix4(Il);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=f,_=p;g<_;g++){let m=c.getX(g);Sr.fromBufferAttribute(u,m),Pl(Sr,m,l,s,e,t,this)}}else{let f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let g=f,_=p;g<_;g++)Sr.fromBufferAttribute(u,g),Pl(Sr,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Pl(i,e,t,n,s,r,o){let a=Wa.distanceSqToPoint(i);if(a<t){let l=new F;Wa.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var ws=class extends Tt{constructor(e,t,n=Wn,s,r,o,a=qt,l=qt,c,h=Oi,u=1){if(h!==Oi&&h!==ji)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:u};super(f,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ki(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Es=class extends Tt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};var wr=new F,Er=new F,Ba=new F,Tr=new bn,Ts=class extends At{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let s=Math.pow(10,4),r=Math.cos(Ni*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),f={},p=[];for(let g=0;g<l;g+=3){o?(c[0]=o.getX(g),c[1]=o.getX(g+1),c[2]=o.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);let{a:_,b:m,c:d}=Tr;if(_.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),d.fromBufferAttribute(a,c[2]),Tr.getNormal(Ba),u[0]=`${Math.round(_.x*s)},${Math.round(_.y*s)},${Math.round(_.z*s)}`,u[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,u[2]=`${Math.round(d.x*s)},${Math.round(d.y*s)},${Math.round(d.z*s)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let b=0;b<3;b++){let v=(b+1)%3,x=u[b],C=u[v],E=Tr[h[b]],R=Tr[h[v]],D=`${x}_${C}`,S=`${C}_${x}`;S in f&&f[S]?(Ba.dot(f[S].normal)<=r&&(p.push(E.x,E.y,E.z),p.push(R.x,R.y,R.z)),f[S]=null):D in f||(f[D]={index0:c[b],index1:c[v],normal:Ba.clone()})}}for(let g in f)if(f[g]){let{index0:_,index1:m}=f[g];wr.fromBufferAttribute(a,_),Er.fromBufferAttribute(a,m),p.push(wr.x,wr.y,wr.z),p.push(Er.x,Er.y,Er.z)}this.setAttribute("position",new ct(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function $d(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Th(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=nf(i,e,r,t)),i.length>80*t){a=1/0,l=1/0;let h=-1/0,u=-1/0;for(let f=t;f<s;f+=t){let p=i[f],g=i[f+1];p<a&&(a=p),g<l&&(l=g),p>h&&(h=p),g>u&&(u=g)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return As(r,o,t,a,l,c,0),o}function Th(i,e,t,n,s){let r;if(s===pf(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=Ll(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=Ll(o/n|0,i[o],i[o+1],r);return r&&Wi(r,r.next)&&(Rs(r),r=r.next),r}function oi(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Wi(t,t.next)||at(t.prev,t,t.next)===0)){if(Rs(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function As(i,e,t,n,s,r,o){if(!i)return;!o&&r&&cf(i,n,s,r);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?Qd(i,n,s,r):Kd(i)){e.push(l.i,i.i,c.i),Rs(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=ef(oi(i),e),As(i,e,t,n,s,r,2)):o===2&&tf(i,e,t,n,s,r):As(oi(i),e,t,n,s,r,1);break}}}function Kd(i){let e=i.prev,t=i,n=i.next;if(at(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=Math.min(s,r,o),u=Math.min(a,l,c),f=Math.max(s,r,o),p=Math.max(a,l,c),g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=p&&ds(s,a,r,l,o,c,g.x,g.y)&&at(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Qd(i,e,t,n){let s=i.prev,r=i,o=i.next;if(at(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,f=o.y,p=Math.min(a,l,c),g=Math.min(h,u,f),_=Math.max(a,l,c),m=Math.max(h,u,f),d=Xa(p,g,e,t,n),b=Xa(_,m,e,t,n),v=i.prevZ,x=i.nextZ;for(;v&&v.z>=d&&x&&x.z<=b;){if(v.x>=p&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&ds(a,h,l,u,c,f,v.x,v.y)&&at(v.prev,v,v.next)>=0||(v=v.prevZ,x.x>=p&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&ds(a,h,l,u,c,f,x.x,x.y)&&at(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;v&&v.z>=d;){if(v.x>=p&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&ds(a,h,l,u,c,f,v.x,v.y)&&at(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;x&&x.z<=b;){if(x.x>=p&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&ds(a,h,l,u,c,f,x.x,x.y)&&at(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function ef(i,e){let t=i;do{let n=t.prev,s=t.next.next;!Wi(n,s)&&Ch(n,t,t.next,s)&&Cs(n,s)&&Cs(s,n)&&(e.push(n.i,t.i,s.i),Rs(t),Rs(t.next),t=i=s),t=t.next}while(t!==i);return oi(t)}function tf(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&uf(o,a)){let l=Rh(o,a);o=oi(o,o.next),l=oi(l,l.next),As(o,e,t,n,s,r,0),As(l,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function nf(i,e,t,n){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*n,l=r<o-1?e[r+1]*n:i.length,c=Th(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(hf(c))}s.sort(sf);for(let r=0;r<s.length;r++)t=rf(s[r],t);return t}function sf(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function rf(i,e){let t=of(i,e);if(!t)return e;let n=Rh(t,i);return oi(n,n.next),oi(t,t.next)}function of(i,e){let t=e,n=i.x,s=i.y,r=-1/0,o;if(Wi(i,t))return t;do{if(Wi(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>r&&(r=u,o=t.x<t.next.x?t:t.next,u===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Ah(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){let u=Math.abs(s-t.y)/(n-t.x);Cs(t,i)&&(u<h||u===h&&(t.x>o.x||t.x===o.x&&af(o,t)))&&(o=t,h=u)}t=t.next}while(t!==a);return o}function af(i,e){return at(i.prev,i,e.prev)<0&&at(e.next,i,i.next)<0}function cf(i,e,t,n){let s=i;do s.z===0&&(s.z=Xa(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,lf(s)}function lf(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function Xa(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function hf(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Ah(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function ds(i,e,t,n,s,r,o,a){return!(i===o&&e===a)&&Ah(i,e,t,n,s,r,o,a)}function uf(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!df(i,e)&&(Cs(i,e)&&Cs(e,i)&&ff(i,e)&&(at(i.prev,i,e.prev)||at(i,e.prev,e))||Wi(i,e)&&at(i.prev,i,i.next)>0&&at(e.prev,e,e.next)>0)}function at(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Wi(i,e){return i.x===e.x&&i.y===e.y}function Ch(i,e,t,n){let s=Cr(at(i,e,t)),r=Cr(at(i,e,n)),o=Cr(at(t,n,i)),a=Cr(at(t,n,e));return!!(s!==r&&o!==a||s===0&&Ar(i,t,e)||r===0&&Ar(i,n,e)||o===0&&Ar(t,i,n)||a===0&&Ar(t,e,n))}function Ar(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Cr(i){return i>0?1:i<0?-1:0}function df(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Ch(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Cs(i,e){return at(i.prev,i,i.next)<0?at(i,e,i.next)>=0&&at(i,i.prev,e)>=0:at(i,e,i.prev)<0||at(i,i.next,e)<0}function ff(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Rh(i,e){let t=qa(i.i,i.x,i.y),n=qa(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Ll(i,e,t,n){let s=qa(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Rs(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function qa(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function pf(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Ya=class{static triangulate(e,t,n=2){return $d(e,t,n)}},Is=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Dl(e),Ul(n,e);let o=e.length;t.forEach(Dl);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,Ul(n,t[l]);let a=Ya.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Dl(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Ul(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Ps=class i extends At{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=e/a,f=t/l,p=[],g=[],_=[],m=[];for(let d=0;d<h;d++){let b=d*f-o;for(let v=0;v<c;v++){let x=v*u-r;g.push(x,-b,0),_.push(0,0,1),m.push(v/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let b=0;b<a;b++){let v=b+c*d,x=b+c*(d+1),C=b+1+c*(d+1),E=b+1+c*d;p.push(v,x,E),p.push(x,C,E)}this.setIndex(p),this.setAttribute("position",new ct(g,3)),this.setAttribute("normal",new ct(_,3)),this.setAttribute("uv",new ct(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var Ls=class i extends At{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new F,f=new F,p=[],g=[],_=[],m=[];for(let d=0;d<=n;d++){let b=[],v=d/n,x=0;d===0&&o===0?x=.5/t:d===n&&l===Math.PI&&(x=-.5/t);for(let C=0;C<=t;C++){let E=C/t;u.x=-e*Math.cos(s+E*r)*Math.sin(o+v*a),u.y=e*Math.cos(o+v*a),u.z=e*Math.sin(s+E*r)*Math.sin(o+v*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),m.push(E+x,1-v),b.push(c++)}h.push(b)}for(let d=0;d<n;d++)for(let b=0;b<t;b++){let v=h[d][b+1],x=h[d][b],C=h[d+1][b],E=h[d+1][b+1];(d!==0||o>0)&&p.push(v,x,E),(d!==n-1||l<Math.PI)&&p.push(x,C,E)}this.setIndex(p),this.setAttribute("position",new ct(g,3)),this.setAttribute("normal",new ct(_,3)),this.setAttribute("uv",new ct(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Ds=class extends Bt{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new ke(16777215),this.specular=new ke(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=uc,this.normalScale=new We(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new tn,this.combine=lo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Wr=class extends Bt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=dh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Xr=class extends Bt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Rr(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function mf(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var ai=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},qr=class extends ai{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:za,endingEnd:za}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case ka:r=e,a=2*t-n;break;case Va:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case ka:o=e,l=2*n-t;break;case Va:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(n-t)/(s-t),_=g*g,m=_*g,d=-f*m+2*f*_-f*g,b=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*g+1,v=(-1-p)*m+(1.5+p)*_+.5*g,x=p*m-p*_;for(let C=0;C!==a;++C)r[C]=d*o[h+C]+b*o[c+C]+v*o[l+C]+x*o[u+C];return r}},Yr=class extends ai{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(s-t),u=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*u+o[l+f]*h;return r}},jr=class extends ai{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},kt=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Rr(t,this.TimeBufferType),this.values=Rr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Rr(e.times,Array),values:Rr(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new jr(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Yr(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new qr(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ps:t=this.InterpolantFactoryMethodDiscrete;break;case Nr:t=this.InterpolantFactoryMethodLinear;break;case Ir:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ps;case this.InterpolantFactoryMethodLinear:return Nr;case this.InterpolantFactoryMethodSmooth:return Ir}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&mf(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ir,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let u=a*n,f=u-n,p=u+n;for(let g=0;g!==n;++g){let _=t[u+g];if(_!==t[f+g]||_!==t[p+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*n,f=o*n;for(let p=0;p!==n;++p)t[f+p]=t[u+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};kt.prototype.ValueTypeName="";kt.prototype.TimeBufferType=Float32Array;kt.prototype.ValueBufferType=Float32Array;kt.prototype.DefaultInterpolation=Nr;var Vn=class extends kt{constructor(e,t,n){super(e,t,n)}};Vn.prototype.ValueTypeName="bool";Vn.prototype.ValueBufferType=Array;Vn.prototype.DefaultInterpolation=ps;Vn.prototype.InterpolantFactoryMethodLinear=void 0;Vn.prototype.InterpolantFactoryMethodSmooth=void 0;var Zr=class extends kt{constructor(e,t,n,s){super(e,t,n,s)}};Zr.prototype.ValueTypeName="color";var Jr=class extends kt{constructor(e,t,n,s){super(e,t,n,s)}};Jr.prototype.ValueTypeName="number";var $r=class extends ai{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)En.slerpFlat(r,0,o,c-a,o,c,l);return r}},Us=class extends kt{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new $r(this.times,this.values,this.getValueSize(),e)}};Us.prototype.ValueTypeName="quaternion";Us.prototype.InterpolantFactoryMethodSmooth=void 0;var Hn=class extends kt{constructor(e,t,n){super(e,t,n)}};Hn.prototype.ValueTypeName="string";Hn.prototype.ValueBufferType=Array;Hn.prototype.DefaultInterpolation=ps;Hn.prototype.InterpolantFactoryMethodLinear=void 0;Hn.prototype.InterpolantFactoryMethodSmooth=void 0;var Kr=class extends kt{constructor(e,t,n,s){super(e,t,n,s)}};Kr.prototype.ValueTypeName="vector";var ja={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},Qr=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let p=c[u],g=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},Ih=new Qr,ci=class{constructor(e){this.manager=e!==void 0?e:Ih,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};ci.DEFAULT_MATERIAL_NAME="__DEFAULT";var Mn={},Za=class extends Error{constructor(e,t){super(e),this.response=t}},Ns=class extends ci{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=ja.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Mn[e]!==void 0){Mn[e].push({onLoad:t,onProgress:n,onError:s});return}Mn[e]=[],Mn[e].push({onLoad:t,onProgress:n,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=Mn[e],u=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=f?parseInt(f):0,g=p!==0,_=0,m=new ReadableStream({start(d){b();function b(){u.read().then(({done:v,value:x})=>{if(v)d.close();else{_+=x.byteLength;let C=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:p});for(let E=0,R=h.length;E<R;E++){let D=h[E];D.onProgress&&D.onProgress(C)}d.enqueue(x),b()}},v=>{d.error(v)})}}});return new Response(m)}else throw new Za(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a==="")return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),f=u&&u[1]?u[1].toLowerCase():void 0,p=new TextDecoder(f);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{ja.add(`file:${e}`,c);let h=Mn[e];delete Mn[e];for(let u=0,f=h.length;u<f;u++){let p=h[u];p.onLoad&&p.onLoad(c)}}).catch(c=>{let h=Mn[e];if(h===void 0)throw this.manager.itemError(e),c;delete Mn[e];for(let u=0,f=h.length;u<f;u++){let p=h[u];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var eo=class extends ii{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};var to=class extends bt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var _c="\\[\\]\\.:\\/",gf=new RegExp("["+_c+"]","g"),xc="[^"+_c+"]",_f="[^"+_c.replace("\\.","")+"]",xf=/((?:WC+[\/:])*)/.source.replace("WC",xc),yf=/(WCOD+)?/.source.replace("WCOD",_f),vf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",xc),Mf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",xc),bf=new RegExp("^"+xf+yf+vf+Mf+"$"),Sf=["material","materials","bones","map"],Ja=class{constructor(e,t,n){let s=n||tt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},tt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(gf,"")}static parseTrackName(e){let t=bf.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Sf.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};tt.Composite=Ja;tt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};tt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};tt.prototype.GetterByBindingType=[tt.prototype._getValue_direct,tt.prototype._getValue_array,tt.prototype._getValue_arrayElement,tt.prototype._getValue_toArray];tt.prototype.SetterByBindingTypeAndVersioning=[[tt.prototype._setValue_direct,tt.prototype._setValue_direct_setNeedsUpdate,tt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[tt.prototype._setValue_array,tt.prototype._setValue_array_setNeedsUpdate,tt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[tt.prototype._setValue_arrayElement,tt.prototype._setValue_arrayElement_setNeedsUpdate,tt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[tt.prototype._setValue_fromArray,tt.prototype._setValue_fromArray_setNeedsUpdate,tt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var I0=new Float32Array(1);function yc(i,e,t,n){let s=wf(n);switch(t){case ac:return i*e;case lc:return i*e/s.components*s.byteLength;case _o:return i*e/s.components*s.byteLength;case hc:return i*e*2/s.components*s.byteLength;case xo:return i*e*2/s.components*s.byteLength;case cc:return i*e*3/s.components*s.byteLength;case Yt:return i*e*4/s.components*s.byteLength;case yo:return i*e*4/s.components*s.byteLength;case Bs:case zs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ks:case Vs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Mo:case So:return Math.max(i,16)*Math.max(e,8)/4;case vo:case bo:return Math.max(i,8)*Math.max(e,8)/2;case wo:case Eo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case To:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ao:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Co:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Ro:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Io:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Po:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Lo:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Do:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Uo:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case No:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Fo:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Oo:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Bo:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case zo:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case ko:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Vo:case Ho:case Go:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Wo:case Xo:return Math.ceil(i/4)*Math.ceil(e/4)*8;case qo:case Yo:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function wf(i){switch(i){case hn:case ic:return{byteLength:1,components:1};case Xi:case sc:case qi:return{byteLength:2,components:1};case mo:case go:return{byteLength:2,components:4};case Wn:case po:case un:return{byteLength:4,components:1};case rc:case oc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function eu(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Tf(i){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<u.length;p++){let g=u[f],_=u[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,u[f]=_)}u.length=f+1;for(let p=0,g=u.length;p<g;p++){let _=u[p];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Af=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Cf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Rf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,If=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Pf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Lf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Df=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Uf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Nf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Ff=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Of=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Bf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,kf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Vf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Hf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Gf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Wf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Xf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Yf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,jf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Zf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Jf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,$f=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Kf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Qf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ep=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,tp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,np=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ip="gl_FragColor = linearToOutputTexel( gl_FragColor );",sp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,rp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,op=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ap=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,cp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,lp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,hp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,up=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,dp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,mp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_p=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,yp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,vp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Mp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,bp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Sp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,wp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Ep=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Tp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ap=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Cp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Rp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ip=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Dp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Up=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Np=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Fp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Op=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Bp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,kp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Vp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Gp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Xp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,qp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Zp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Jp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$p=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Kp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Qp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,em=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,tm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,nm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,im=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,rm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,om=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,am=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,lm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,hm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,um=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,dm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,fm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,pm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,mm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,gm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_m=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ym=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,vm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Mm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,bm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Sm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,wm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Em=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Tm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Am=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Im=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Dm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Um=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Nm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Fm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Om=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,zm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,km=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Vm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Gm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Xm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Ym=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,jm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,$m=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Km=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,tg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ng=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ig=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,sg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,rg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ze={alphahash_fragment:Af,alphahash_pars_fragment:Cf,alphamap_fragment:Rf,alphamap_pars_fragment:If,alphatest_fragment:Pf,alphatest_pars_fragment:Lf,aomap_fragment:Df,aomap_pars_fragment:Uf,batching_pars_vertex:Nf,batching_vertex:Ff,begin_vertex:Of,beginnormal_vertex:Bf,bsdfs:zf,iridescence_fragment:kf,bumpmap_pars_fragment:Vf,clipping_planes_fragment:Hf,clipping_planes_pars_fragment:Gf,clipping_planes_pars_vertex:Wf,clipping_planes_vertex:Xf,color_fragment:qf,color_pars_fragment:Yf,color_pars_vertex:jf,color_vertex:Zf,common:Jf,cube_uv_reflection_fragment:$f,defaultnormal_vertex:Kf,displacementmap_pars_vertex:Qf,displacementmap_vertex:ep,emissivemap_fragment:tp,emissivemap_pars_fragment:np,colorspace_fragment:ip,colorspace_pars_fragment:sp,envmap_fragment:rp,envmap_common_pars_fragment:op,envmap_pars_fragment:ap,envmap_pars_vertex:cp,envmap_physical_pars_fragment:yp,envmap_vertex:lp,fog_vertex:hp,fog_pars_vertex:up,fog_fragment:dp,fog_pars_fragment:fp,gradientmap_pars_fragment:pp,lightmap_pars_fragment:mp,lights_lambert_fragment:gp,lights_lambert_pars_fragment:_p,lights_pars_begin:xp,lights_toon_fragment:vp,lights_toon_pars_fragment:Mp,lights_phong_fragment:bp,lights_phong_pars_fragment:Sp,lights_physical_fragment:wp,lights_physical_pars_fragment:Ep,lights_fragment_begin:Tp,lights_fragment_maps:Ap,lights_fragment_end:Cp,logdepthbuf_fragment:Rp,logdepthbuf_pars_fragment:Ip,logdepthbuf_pars_vertex:Pp,logdepthbuf_vertex:Lp,map_fragment:Dp,map_pars_fragment:Up,map_particle_fragment:Np,map_particle_pars_fragment:Fp,metalnessmap_fragment:Op,metalnessmap_pars_fragment:Bp,morphinstance_vertex:zp,morphcolor_vertex:kp,morphnormal_vertex:Vp,morphtarget_pars_vertex:Hp,morphtarget_vertex:Gp,normal_fragment_begin:Wp,normal_fragment_maps:Xp,normal_pars_fragment:qp,normal_pars_vertex:Yp,normal_vertex:jp,normalmap_pars_fragment:Zp,clearcoat_normal_fragment_begin:Jp,clearcoat_normal_fragment_maps:$p,clearcoat_pars_fragment:Kp,iridescence_pars_fragment:Qp,opaque_fragment:em,packing:tm,premultiplied_alpha_fragment:nm,project_vertex:im,dithering_fragment:sm,dithering_pars_fragment:rm,roughnessmap_fragment:om,roughnessmap_pars_fragment:am,shadowmap_pars_fragment:cm,shadowmap_pars_vertex:lm,shadowmap_vertex:hm,shadowmask_pars_fragment:um,skinbase_vertex:dm,skinning_pars_vertex:fm,skinning_vertex:pm,skinnormal_vertex:mm,specularmap_fragment:gm,specularmap_pars_fragment:_m,tonemapping_fragment:xm,tonemapping_pars_fragment:ym,transmission_fragment:vm,transmission_pars_fragment:Mm,uv_pars_fragment:bm,uv_pars_vertex:Sm,uv_vertex:wm,worldpos_vertex:Em,background_vert:Tm,background_frag:Am,backgroundCube_vert:Cm,backgroundCube_frag:Rm,cube_vert:Im,cube_frag:Pm,depth_vert:Lm,depth_frag:Dm,distanceRGBA_vert:Um,distanceRGBA_frag:Nm,equirect_vert:Fm,equirect_frag:Om,linedashed_vert:Bm,linedashed_frag:zm,meshbasic_vert:km,meshbasic_frag:Vm,meshlambert_vert:Hm,meshlambert_frag:Gm,meshmatcap_vert:Wm,meshmatcap_frag:Xm,meshnormal_vert:qm,meshnormal_frag:Ym,meshphong_vert:jm,meshphong_frag:Zm,meshphysical_vert:Jm,meshphysical_frag:$m,meshtoon_vert:Km,meshtoon_frag:Qm,points_vert:eg,points_frag:tg,shadow_vert:ng,shadow_frag:ig,sprite_vert:sg,sprite_frag:rg},ce={common:{diffuse:{value:new ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new We(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new ke(16777215)},opacity:{value:1},center:{value:new We(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},dn={basic:{uniforms:St([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:St([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new ke(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:St([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new ke(0)},specular:{value:new ke(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:St([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:St([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new ke(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:St([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:St([ce.points,ce.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:St([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:St([ce.common,ce.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:St([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:St([ce.sprite,ce.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:St([ce.common,ce.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:St([ce.lights,ce.fog,{color:{value:new ke(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};dn.physical={uniforms:St([dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new We(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new We},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new ke(0)},specularColor:{value:new ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new We},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};var jo={r:0,b:0,g:0},di=new tn,og=new nt;function ag(i,e,t,n,s,r,o){let a=new ke(0),l=r===!0?0:1,c,h,u=null,f=0,p=null;function g(v){let x=v.isScene===!0?v.background:null;return x&&x.isTexture&&(x=(v.backgroundBlurriness>0?t:e).get(x)),x}function _(v){let x=!1,C=g(v);C===null?d(a,l):C&&C.isColor&&(d(C,1),x=!0);let E=i.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(v,x){let C=g(x);C&&(C.isCubeTexture||C.mapping===Fs)?(h===void 0&&(h=new ft(new Hi(1,1,1),new zt({name:"BackgroundCubeMaterial",uniforms:ui(dn.backgroundCube.uniforms),vertexShader:dn.backgroundCube.vertexShader,fragmentShader:dn.backgroundCube.fragmentShader,side:Ct,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,R,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),di.copy(x.backgroundRotation),di.x*=-1,di.y*=-1,di.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(di.y*=-1,di.z*=-1),h.material.uniforms.envMap.value=C,h.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(og.makeRotationFromEuler(di)),h.material.toneMapped=Xe.getTransfer(C.colorSpace)!==Ze,(u!==C||f!==C.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=C,f=C.version,p=i.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):C&&C.isTexture&&(c===void 0&&(c=new ft(new Ps(2,2),new zt({name:"BackgroundMaterial",uniforms:ui(dn.background.uniforms),vertexShader:dn.background.vertexShader,fragmentShader:dn.background.fragmentShader,side:Qt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=C,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=Xe.getTransfer(C.colorSpace)!==Ze,C.matrixAutoUpdate===!0&&C.updateMatrix(),c.material.uniforms.uvTransform.value.copy(C.matrix),(u!==C||f!==C.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,u=C,f=C.version,p=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function d(v,x){v.getRGB(jo,gc(i)),n.buffers.color.setClear(jo.r,jo.g,jo.b,x,o)}function b(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,x=1){a.set(v),l=x,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,d(a,l)},render:_,addToRenderList:m,dispose:b}}function cg(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,o=!1;function a(w,P,B,G,q){let j=!1,H=u(G,B,P);r!==H&&(r=H,c(r.object)),j=p(w,G,B,q),j&&g(w,G,B,q),q!==null&&e.update(q,i.ELEMENT_ARRAY_BUFFER),(j||o)&&(o=!1,x(w,P,B,G),q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function l(){return i.createVertexArray()}function c(w){return i.bindVertexArray(w)}function h(w){return i.deleteVertexArray(w)}function u(w,P,B){let G=B.wireframe===!0,q=n[w.id];q===void 0&&(q={},n[w.id]=q);let j=q[P.id];j===void 0&&(j={},q[P.id]=j);let H=j[G];return H===void 0&&(H=f(l()),j[G]=H),H}function f(w){let P=[],B=[],G=[];for(let q=0;q<t;q++)P[q]=0,B[q]=0,G[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:B,attributeDivisors:G,object:w,attributes:{},index:null}}function p(w,P,B,G){let q=r.attributes,j=P.attributes,H=0,Q=B.getAttributes();for(let V in Q)if(Q[V].location>=0){let ae=q[V],de=j[V];if(de===void 0&&(V==="instanceMatrix"&&w.instanceMatrix&&(de=w.instanceMatrix),V==="instanceColor"&&w.instanceColor&&(de=w.instanceColor)),ae===void 0||ae.attribute!==de||de&&ae.data!==de.data)return!0;H++}return r.attributesNum!==H||r.index!==G}function g(w,P,B,G){let q={},j=P.attributes,H=0,Q=B.getAttributes();for(let V in Q)if(Q[V].location>=0){let ae=j[V];ae===void 0&&(V==="instanceMatrix"&&w.instanceMatrix&&(ae=w.instanceMatrix),V==="instanceColor"&&w.instanceColor&&(ae=w.instanceColor));let de={};de.attribute=ae,ae&&ae.data&&(de.data=ae.data),q[V]=de,H++}r.attributes=q,r.attributesNum=H,r.index=G}function _(){let w=r.newAttributes;for(let P=0,B=w.length;P<B;P++)w[P]=0}function m(w){d(w,0)}function d(w,P){let B=r.newAttributes,G=r.enabledAttributes,q=r.attributeDivisors;B[w]=1,G[w]===0&&(i.enableVertexAttribArray(w),G[w]=1),q[w]!==P&&(i.vertexAttribDivisor(w,P),q[w]=P)}function b(){let w=r.newAttributes,P=r.enabledAttributes;for(let B=0,G=P.length;B<G;B++)P[B]!==w[B]&&(i.disableVertexAttribArray(B),P[B]=0)}function v(w,P,B,G,q,j,H){H===!0?i.vertexAttribIPointer(w,P,B,q,j):i.vertexAttribPointer(w,P,B,G,q,j)}function x(w,P,B,G){_();let q=G.attributes,j=B.getAttributes(),H=P.defaultAttributeValues;for(let Q in j){let V=j[Q];if(V.location>=0){let ne=q[Q];if(ne===void 0&&(Q==="instanceMatrix"&&w.instanceMatrix&&(ne=w.instanceMatrix),Q==="instanceColor"&&w.instanceColor&&(ne=w.instanceColor)),ne!==void 0){let ae=ne.normalized,de=ne.itemSize,De=e.get(ne);if(De===void 0)continue;let je=De.buffer,$e=De.type,Me=De.bytesPerElement,W=$e===i.INT||$e===i.UNSIGNED_INT||ne.gpuType===po;if(ne.isInterleavedBufferAttribute){let $=ne.data,me=$.stride,Le=ne.offset;if($.isInstancedInterleavedBuffer){for(let Ee=0;Ee<V.locationSize;Ee++)d(V.location+Ee,$.meshPerAttribute);w.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let Ee=0;Ee<V.locationSize;Ee++)m(V.location+Ee);i.bindBuffer(i.ARRAY_BUFFER,je);for(let Ee=0;Ee<V.locationSize;Ee++)v(V.location+Ee,de/V.locationSize,$e,ae,me*Me,(Le+de/V.locationSize*Ee)*Me,W)}else{if(ne.isInstancedBufferAttribute){for(let $=0;$<V.locationSize;$++)d(V.location+$,ne.meshPerAttribute);w.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let $=0;$<V.locationSize;$++)m(V.location+$);i.bindBuffer(i.ARRAY_BUFFER,je);for(let $=0;$<V.locationSize;$++)v(V.location+$,de/V.locationSize,$e,ae,de*Me,de/V.locationSize*$*Me,W)}}else if(H!==void 0){let ae=H[Q];if(ae!==void 0)switch(ae.length){case 2:i.vertexAttrib2fv(V.location,ae);break;case 3:i.vertexAttrib3fv(V.location,ae);break;case 4:i.vertexAttrib4fv(V.location,ae);break;default:i.vertexAttrib1fv(V.location,ae)}}}}b()}function C(){D();for(let w in n){let P=n[w];for(let B in P){let G=P[B];for(let q in G)h(G[q].object),delete G[q];delete P[B]}delete n[w]}}function E(w){if(n[w.id]===void 0)return;let P=n[w.id];for(let B in P){let G=P[B];for(let q in G)h(G[q].object),delete G[q];delete P[B]}delete n[w.id]}function R(w){for(let P in n){let B=n[P];if(B[w.id]===void 0)continue;let G=B[w.id];for(let q in G)h(G[q].object),delete G[q];delete B[w.id]}}function D(){S(),o=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:D,resetDefaultState:S,dispose:C,releaseStatesOfGeometry:E,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:m,disableUnusedAttributes:b}}function lg(i,e,t){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];t.update(p,n,1)}function l(c,h,u,f){if(u===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],h[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*f[_];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function hg(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let R=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==Yt&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){let D=R===qi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==hn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==un&&!D)}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:b,maxVaryings:v,maxFragmentUniforms:x,vertexTextures:C,maxSamples:E}}function ug(i){let e=this,t=null,n=0,s=!1,r=!1,o=new an,a=new Fe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let p=u.length!==0||f||n!==0||s;return s=f,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,p){let g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,d=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let b=r?0:n,v=b*4,x=d.clippingState||null;l.value=x,x=h(g,f,v,p);for(let C=0;C!==v;++C)x[C]=t[C];d.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,p,g){let _=u!==null?u.length:0,m=null;if(_!==0){if(m=l.value,g!==!0||m===null){let d=p+_*4,b=f.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<d)&&(m=new Float32Array(d));for(let v=0,x=p;v!==_;++v,x+=4)o.copy(u[v]).applyMatrix4(b,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function dg(i){let e=new WeakMap;function t(o,a){return a===ho?o.mapping=li:a===uo&&(o.mapping=hi),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===ho||a===uo)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new kr(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Ki=4,Ph=[.125,.215,.35,.446,.526,.582],mi=20,vc=new eo,Lh=new ke,Mc=null,bc=0,Sc=0,wc=!1,pi=(1+Math.sqrt(5))/2,$i=1/pi,Dh=[new F(-pi,$i,0),new F(pi,$i,0),new F(-$i,0,pi),new F($i,0,pi),new F(0,pi,-$i),new F(0,pi,$i),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)],fg=new F,$o=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:a=fg}=r;Mc=this._renderer.getRenderTarget(),bc=this._renderer.getActiveCubeFace(),Sc=this._renderer.getActiveMipmapLevel(),wc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Nh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Mc,bc,Sc),this._renderer.xr.enabled=wc,e.scissorTest=!1,Zo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===li||e.mapping===hi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Mc=this._renderer.getRenderTarget(),bc=this._renderer.getActiveCubeFace(),Sc=this._renderer.getActiveMipmapLevel(),wc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:en,minFilter:en,generateMipmaps:!1,type:qi,format:Yt,colorSpace:ni,depthBuffer:!1},s=Uh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Uh(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=pg(r)),this._blurMaterial=mg(r,e,t)}return s}_compileMaterial(e){let t=new ft(this._lodPlanes[0],e);this._renderer.compile(t,vc)}_sceneToCubeUV(e,t,n,s,r){let l=new bt(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,p=u.toneMapping;u.getClearColor(Lh),u.toneMapping=Cn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));let _=new Tn({name:"PMREM.Background",side:Ct,depthWrite:!1,depthTest:!1}),m=new ft(new Hi,_),d=!1,b=e.background;b?b.isColor&&(_.color.copy(b),e.background=null,d=!0):(_.color.copy(Lh),d=!0);for(let v=0;v<6;v++){let x=v%3;x===0?(l.up.set(0,c[v],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[v],r.y,r.z)):x===1?(l.up.set(0,0,c[v]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[v],r.z)):(l.up.set(0,c[v],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[v]));let C=this._cubeSize;Zo(s,x*C,v>2?C:0,C,C),u.setRenderTarget(s),d&&u.render(m,l),u.render(e,l)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=p,u.autoClear=f,e.background=b}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===li||e.mapping===hi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Nh());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new ft(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;Zo(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,vc)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Dh[(s-r-1)%Dh.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new ft(this._lodPlanes[s],c),f=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*mi-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):mi;m>mi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${mi}`);let d=[],b=0;for(let R=0;R<mi;++R){let D=R/_,S=Math.exp(-D*D/2);d.push(S),R===0?b+=S:R<m&&(b+=2*S)}for(let R=0;R<d.length;R++)d[R]=d[R]/b;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:v}=this;f.dTheta.value=g,f.mipInt.value=v-n;let x=this._sizeLods[s],C=3*x*(s>v-Ki?s-v+Ki:0),E=4*(this._cubeSize-x);Zo(t,C,E,3*x,2*x),l.setRenderTarget(t),l.render(u,vc)}};function pg(i){let e=[],t=[],n=[],s=i,r=i-Ki+1+Ph.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>i-Ki?l=Ph[o-i+Ki-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,_=3,m=2,d=1,b=new Float32Array(_*g*p),v=new Float32Array(m*g*p),x=new Float32Array(d*g*p);for(let E=0;E<p;E++){let R=E%3*2/3-1,D=E>2?0:-1,S=[R,D,0,R+2/3,D,0,R+2/3,D+1,0,R,D,0,R+2/3,D+1,0,R,D+1,0];b.set(S,_*g*E),v.set(f,m*g*E);let w=[E,E,E,E,E,E];x.set(w,d*g*E)}let C=new At;C.setAttribute("position",new Ft(b,_)),C.setAttribute("uv",new Ft(v,m)),C.setAttribute("faceIndex",new Ft(x,d)),e.push(C),s>Ki&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Uh(i,e,t){let n=new cn(i,e,t);return n.texture.mapping=Fs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Zo(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function mg(i,e,t){let n=new Float32Array(mi),s=new F(0,1,0);return new zt({name:"SphericalGaussianBlur",defines:{n:mi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Uc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:An,depthTest:!1,depthWrite:!1})}function Nh(){return new zt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Uc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:An,depthTest:!1,depthWrite:!1})}function Fh(){return new zt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Uc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:An,depthTest:!1,depthWrite:!1})}function Uc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function gg(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===ho||l===uo,h=l===li||l===hi;if(c||h){let u=e.get(a),f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new $o(i)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{let p=a.image;return c&&p&&p.height>0||h&&p&&s(p)?(t===null&&(t=new $o(i)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function _g(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&zi("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function xg(i,e,t,n){let s={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete s[f.id];let p=r.get(f);p&&(e.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(u){let f=u.attributes;for(let p in f)e.update(f[p],i.ARRAY_BUFFER)}function c(u){let f=[],p=u.index,g=u.attributes.position,_=0;if(p!==null){let b=p.array;_=p.version;for(let v=0,x=b.length;v<x;v+=3){let C=b[v+0],E=b[v+1],R=b[v+2];f.push(C,E,E,R,R,C)}}else if(g!==void 0){let b=g.array;_=g.version;for(let v=0,x=b.length/3-1;v<x;v+=3){let C=v+0,E=v+1,R=v+2;f.push(C,E,E,R,R,C)}}else return;let m=new(mc(f)?Ms:vs)(f,1);m.version=_;let d=r.get(u);d&&e.remove(d),r.set(u,m)}function h(u){let f=r.get(u);if(f){let p=u.index;p!==null&&f.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function yg(i,e,t){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,p){i.drawElements(n,p,r,f*o),t.update(p,n,1)}function c(f,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,f*o,g),t.update(p,n,g))}function h(f,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];t.update(m,n,1)}function u(f,p,g,_){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)c(f[d]/o,p[d],_[d]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,_,0,g);let d=0;for(let b=0;b<g;b++)d+=p[b]*_[b];t.update(d,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function vg(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Mg(i,e,t){let n=new WeakMap,s=new ht;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==u){let S=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",S)};f!==void 0&&f.texture.dispose();let p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],b=a.morphAttributes.color||[],v=0;p===!0&&(v=1),g===!0&&(v=2),_===!0&&(v=3);let x=a.attributes.position.count*v,C=1;x>e.maxTextureSize&&(C=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);let E=new Float32Array(x*C*4*u),R=new xs(E,x,C,u);R.type=un,R.needsUpdate=!0;let D=v*4;for(let w=0;w<u;w++){let P=m[w],B=d[w],G=b[w],q=x*C*4*w;for(let j=0;j<P.count;j++){let H=j*D;p===!0&&(s.fromBufferAttribute(P,j),E[q+H+0]=s.x,E[q+H+1]=s.y,E[q+H+2]=s.z,E[q+H+3]=0),g===!0&&(s.fromBufferAttribute(B,j),E[q+H+4]=s.x,E[q+H+5]=s.y,E[q+H+6]=s.z,E[q+H+7]=0),_===!0&&(s.fromBufferAttribute(G,j),E[q+H+8]=s.x,E[q+H+9]=s.y,E[q+H+10]=s.z,E[q+H+11]=G.itemSize===4?s.w:1)}}f={count:u,texture:R,size:new We(x,C)},n.set(a,f),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let p=0;for(let _=0;_<c.length;_++)p+=c[_];let g=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function bg(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var tu=new Tt,Oh=new ws(1,1),nu=new xs,iu=new Br,su=new bs,Bh=[],zh=[],kh=new Float32Array(16),Vh=new Float32Array(9),Hh=new Float32Array(4);function ts(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Bh[s];if(r===void 0&&(r=new Float32Array(s),Bh[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function pt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function mt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ko(i,e){let t=zh[e];t===void 0&&(t=new Int32Array(e),zh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Sg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function wg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;i.uniform2fv(this.addr,e),mt(t,e)}}function Eg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(pt(t,e))return;i.uniform3fv(this.addr,e),mt(t,e)}}function Tg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;i.uniform4fv(this.addr,e),mt(t,e)}}function Ag(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(pt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,n))return;Hh.set(n),i.uniformMatrix2fv(this.addr,!1,Hh),mt(t,n)}}function Cg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(pt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,n))return;Vh.set(n),i.uniformMatrix3fv(this.addr,!1,Vh),mt(t,n)}}function Rg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(pt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,n))return;kh.set(n),i.uniformMatrix4fv(this.addr,!1,kh),mt(t,n)}}function Ig(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Pg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;i.uniform2iv(this.addr,e),mt(t,e)}}function Lg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pt(t,e))return;i.uniform3iv(this.addr,e),mt(t,e)}}function Dg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;i.uniform4iv(this.addr,e),mt(t,e)}}function Ug(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Ng(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;i.uniform2uiv(this.addr,e),mt(t,e)}}function Fg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pt(t,e))return;i.uniform3uiv(this.addr,e),mt(t,e)}}function Og(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;i.uniform4uiv(this.addr,e),mt(t,e)}}function Bg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Oh.compareFunction=dc,r=Oh):r=tu,t.setTexture2D(e||r,s)}function zg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||iu,s)}function kg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||su,s)}function Vg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||nu,s)}function Hg(i){switch(i){case 5126:return Sg;case 35664:return wg;case 35665:return Eg;case 35666:return Tg;case 35674:return Ag;case 35675:return Cg;case 35676:return Rg;case 5124:case 35670:return Ig;case 35667:case 35671:return Pg;case 35668:case 35672:return Lg;case 35669:case 35673:return Dg;case 5125:return Ug;case 36294:return Ng;case 36295:return Fg;case 36296:return Og;case 35678:case 36198:case 36298:case 36306:case 35682:return Bg;case 35679:case 36299:case 36307:return zg;case 35680:case 36300:case 36308:case 36293:return kg;case 36289:case 36303:case 36311:case 36292:return Vg}}function Gg(i,e){i.uniform1fv(this.addr,e)}function Wg(i,e){let t=ts(e,this.size,2);i.uniform2fv(this.addr,t)}function Xg(i,e){let t=ts(e,this.size,3);i.uniform3fv(this.addr,t)}function qg(i,e){let t=ts(e,this.size,4);i.uniform4fv(this.addr,t)}function Yg(i,e){let t=ts(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function jg(i,e){let t=ts(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Zg(i,e){let t=ts(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Jg(i,e){i.uniform1iv(this.addr,e)}function $g(i,e){i.uniform2iv(this.addr,e)}function Kg(i,e){i.uniform3iv(this.addr,e)}function Qg(i,e){i.uniform4iv(this.addr,e)}function e_(i,e){i.uniform1uiv(this.addr,e)}function t_(i,e){i.uniform2uiv(this.addr,e)}function n_(i,e){i.uniform3uiv(this.addr,e)}function i_(i,e){i.uniform4uiv(this.addr,e)}function s_(i,e,t){let n=this.cache,s=e.length,r=Ko(t,s);pt(n,r)||(i.uniform1iv(this.addr,r),mt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||tu,r[o])}function r_(i,e,t){let n=this.cache,s=e.length,r=Ko(t,s);pt(n,r)||(i.uniform1iv(this.addr,r),mt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||iu,r[o])}function o_(i,e,t){let n=this.cache,s=e.length,r=Ko(t,s);pt(n,r)||(i.uniform1iv(this.addr,r),mt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||su,r[o])}function a_(i,e,t){let n=this.cache,s=e.length,r=Ko(t,s);pt(n,r)||(i.uniform1iv(this.addr,r),mt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||nu,r[o])}function c_(i){switch(i){case 5126:return Gg;case 35664:return Wg;case 35665:return Xg;case 35666:return qg;case 35674:return Yg;case 35675:return jg;case 35676:return Zg;case 5124:case 35670:return Jg;case 35667:case 35671:return $g;case 35668:case 35672:return Kg;case 35669:case 35673:return Qg;case 5125:return e_;case 36294:return t_;case 36295:return n_;case 36296:return i_;case 35678:case 36198:case 36298:case 36306:case 35682:return s_;case 35679:case 36299:case 36307:return r_;case 35680:case 36300:case 36308:case 36293:return o_;case 36289:case 36303:case 36311:case 36292:return a_}}var Tc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Hg(t.type)}},Ac=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=c_(t.type)}},Cc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},Ec=/(\w+)(\])?(\[|\.)?/g;function Gh(i,e){i.seq.push(e),i.map[e.id]=e}function l_(i,e,t){let n=i.name,s=n.length;for(Ec.lastIndex=0;;){let r=Ec.exec(n),o=Ec.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Gh(t,c===void 0?new Tc(a,i,e):new Ac(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new Cc(a),Gh(t,u)),t=u}}}var Qi=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);l_(r,o,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function Wh(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var h_=37297,u_=0;function d_(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var Xh=new Fe;function f_(i){Xe._getMatrix(Xh,Xe.workingColorSpace,i);let e=`mat3( ${Xh.elements.map(t=>t.toFixed(4))} )`;switch(Xe.getTransfer(i)){case ms:return[e,"LinearTransferOETF"];case Ze:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function qh(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+d_(i.getShaderSource(e),a)}else return r}function p_(i,e){let t=f_(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function m_(i,e){let t;switch(e){case sh:t="Linear";break;case rh:t="Reinhard";break;case oh:t="Cineon";break;case ah:t="ACESFilmic";break;case lh:t="AgX";break;case hh:t="Neutral";break;case ch:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Jo=new F;function g_(){Xe.getLuminanceCoefficients(Jo);let i=Jo.x.toFixed(4),e=Jo.y.toFixed(4),t=Jo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function __(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Hs).join(`
`)}function x_(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function y_(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Hs(i){return i!==""}function Yh(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function jh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var v_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rc(i){return i.replace(v_,b_)}var M_=new Map;function b_(i,e){let t=ze[e];if(t===void 0){let n=M_.get(e);if(n!==void 0)t=ze[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Rc(t)}var S_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zh(i){return i.replace(S_,w_)}function w_(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Jh(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function E_(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ka?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ol?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ln&&(e="SHADOWMAP_TYPE_VSM"),e}function T_(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case li:case hi:e="ENVMAP_TYPE_CUBE";break;case Fs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function A_(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case hi:e="ENVMAP_MODE_REFRACTION";break}return e}function C_(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case lo:e="ENVMAP_BLENDING_MULTIPLY";break;case nh:e="ENVMAP_BLENDING_MIX";break;case ih:e="ENVMAP_BLENDING_ADD";break}return e}function R_(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function I_(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=E_(t),c=T_(t),h=A_(t),u=C_(t),f=R_(t),p=__(t),g=x_(r),_=s.createProgram(),m,d,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Hs).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Hs).join(`
`),d.length>0&&(d+=`
`)):(m=[Jh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Hs).join(`
`),d=[Jh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Cn?"#define TONE_MAPPING":"",t.toneMapping!==Cn?ze.tonemapping_pars_fragment:"",t.toneMapping!==Cn?m_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,p_("linearToOutputTexel",t.outputColorSpace),g_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Hs).join(`
`)),o=Rc(o),o=Yh(o,t),o=jh(o,t),a=Rc(a),a=Yh(a,t),a=jh(a,t),o=Zh(o),a=Zh(a),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===fc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===fc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let v=b+m+o,x=b+d+a,C=Wh(s,s.VERTEX_SHADER,v),E=Wh(s,s.FRAGMENT_SHADER,x);s.attachShader(_,C),s.attachShader(_,E),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function R(P){if(i.debug.checkShaderErrors){let B=s.getProgramInfoLog(_)||"",G=s.getShaderInfoLog(C)||"",q=s.getShaderInfoLog(E)||"",j=B.trim(),H=G.trim(),Q=q.trim(),V=!0,ne=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,C,E);else{let ae=qh(s,C,"vertex"),de=qh(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+j+`
`+ae+`
`+de)}else j!==""?console.warn("THREE.WebGLProgram: Program Info Log:",j):(H===""||Q==="")&&(ne=!1);ne&&(P.diagnostics={runnable:V,programLog:j,vertexShader:{log:H,prefix:m},fragmentShader:{log:Q,prefix:d}})}s.deleteShader(C),s.deleteShader(E),D=new Qi(s,_),S=y_(s,_)}let D;this.getUniforms=function(){return D===void 0&&R(this),D};let S;this.getAttributes=function(){return S===void 0&&R(this),S};let w=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=s.getProgramParameter(_,h_)),w},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=u_++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=E,this}var P_=0,Ic=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Pc(e),t.set(e,n)),n}},Pc=class{constructor(e){this.id=P_++,this.code=e,this.usedTimes=0}};function L_(i,e,t,n,s,r,o){let a=new ys,l=new Ic,c=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,w,P,B,G){let q=B.fog,j=G.geometry,H=S.isMeshStandardMaterial?B.environment:null,Q=(S.isMeshStandardMaterial?t:e).get(S.envMap||H),V=Q&&Q.mapping===Fs?Q.image.height:null,ne=g[S.type];S.precision!==null&&(p=s.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));let ae=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,de=ae!==void 0?ae.length:0,De=0;j.morphAttributes.position!==void 0&&(De=1),j.morphAttributes.normal!==void 0&&(De=2),j.morphAttributes.color!==void 0&&(De=3);let je,$e,Me,W;if(ne){let Ye=dn[ne];je=Ye.vertexShader,$e=Ye.fragmentShader}else je=S.vertexShader,$e=S.fragmentShader,l.update(S),Me=l.getVertexShaderID(S),W=l.getFragmentShaderID(S);let $=i.getRenderTarget(),me=i.state.buffers.depth.getReversed(),Le=G.isInstancedMesh===!0,Ee=G.isBatchedMesh===!0,Ge=!!S.map,yt=!!S.matcap,I=!!Q,it=!!S.aoMap,Ne=!!S.lightMap,Ie=!!S.bumpMap,xe=!!S.normalMap,st=!!S.displacementMap,ye=!!S.emissiveMap,Be=!!S.metalnessMap,gt=!!S.roughnessMap,ut=S.anisotropy>0,A=S.clearcoat>0,y=S.dispersion>0,O=S.iridescence>0,Y=S.sheen>0,K=S.transmission>0,X=ut&&!!S.anisotropyMap,we=A&&!!S.clearcoatMap,re=A&&!!S.clearcoatNormalMap,ve=A&&!!S.clearcoatRoughnessMap,be=O&&!!S.iridescenceMap,ie=O&&!!S.iridescenceThicknessMap,ue=Y&&!!S.sheenColorMap,Re=Y&&!!S.sheenRoughnessMap,Se=!!S.specularMap,le=!!S.specularColorMap,Oe=!!S.specularIntensityMap,L=K&&!!S.transmissionMap,se=K&&!!S.thicknessMap,oe=!!S.gradientMap,pe=!!S.alphaMap,ee=S.alphaTest>0,Z=!!S.alphaHash,_e=!!S.extensions,Ue=Cn;S.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(Ue=i.toneMapping);let Qe={shaderID:ne,shaderType:S.type,shaderName:S.name,vertexShader:je,fragmentShader:$e,defines:S.defines,customVertexShaderID:Me,customFragmentShaderID:W,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:Ee,batchingColor:Ee&&G._colorsTexture!==null,instancing:Le,instancingColor:Le&&G.instanceColor!==null,instancingMorph:Le&&G.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:$===null?i.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:ni,alphaToCoverage:!!S.alphaToCoverage,map:Ge,matcap:yt,envMap:I,envMapMode:I&&Q.mapping,envMapCubeUVHeight:V,aoMap:it,lightMap:Ne,bumpMap:Ie,normalMap:xe,displacementMap:f&&st,emissiveMap:ye,normalMapObjectSpace:xe&&S.normalMapType===ph,normalMapTangentSpace:xe&&S.normalMapType===uc,metalnessMap:Be,roughnessMap:gt,anisotropy:ut,anisotropyMap:X,clearcoat:A,clearcoatMap:we,clearcoatNormalMap:re,clearcoatRoughnessMap:ve,dispersion:y,iridescence:O,iridescenceMap:be,iridescenceThicknessMap:ie,sheen:Y,sheenColorMap:ue,sheenRoughnessMap:Re,specularMap:Se,specularColorMap:le,specularIntensityMap:Oe,transmission:K,transmissionMap:L,thicknessMap:se,gradientMap:oe,opaque:S.transparent===!1&&S.blending===ei&&S.alphaToCoverage===!1,alphaMap:pe,alphaTest:ee,alphaHash:Z,combine:S.combine,mapUv:Ge&&_(S.map.channel),aoMapUv:it&&_(S.aoMap.channel),lightMapUv:Ne&&_(S.lightMap.channel),bumpMapUv:Ie&&_(S.bumpMap.channel),normalMapUv:xe&&_(S.normalMap.channel),displacementMapUv:st&&_(S.displacementMap.channel),emissiveMapUv:ye&&_(S.emissiveMap.channel),metalnessMapUv:Be&&_(S.metalnessMap.channel),roughnessMapUv:gt&&_(S.roughnessMap.channel),anisotropyMapUv:X&&_(S.anisotropyMap.channel),clearcoatMapUv:we&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:re&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ve&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:be&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:ie&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:ue&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:Re&&_(S.sheenRoughnessMap.channel),specularMapUv:Se&&_(S.specularMap.channel),specularColorMapUv:le&&_(S.specularColorMap.channel),specularIntensityMapUv:Oe&&_(S.specularIntensityMap.channel),transmissionMapUv:L&&_(S.transmissionMap.channel),thicknessMapUv:se&&_(S.thicknessMap.channel),alphaMapUv:pe&&_(S.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(xe||ut),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!j.attributes.uv&&(Ge||pe),fog:!!q,useFog:S.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:me,skinning:G.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:de,morphTextureStride:De,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ue,decodeVideoTexture:Ge&&S.map.isVideoTexture===!0&&Xe.getTransfer(S.map.colorSpace)===Ze,decodeVideoTextureEmissive:ye&&S.emissiveMap.isVideoTexture===!0&&Xe.getTransfer(S.emissiveMap.colorSpace)===Ze,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Vt,flipSided:S.side===Ct,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:_e&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_e&&S.extensions.multiDraw===!0||Ee)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Qe.vertexUv1s=c.has(1),Qe.vertexUv2s=c.has(2),Qe.vertexUv3s=c.has(3),c.clear(),Qe}function d(S){let w=[];if(S.shaderID?w.push(S.shaderID):(w.push(S.customVertexShaderID),w.push(S.customFragmentShaderID)),S.defines!==void 0)for(let P in S.defines)w.push(P),w.push(S.defines[P]);return S.isRawShaderMaterial===!1&&(b(w,S),v(w,S),w.push(i.outputColorSpace)),w.push(S.customProgramCacheKey),w.join()}function b(S,w){S.push(w.precision),S.push(w.outputColorSpace),S.push(w.envMapMode),S.push(w.envMapCubeUVHeight),S.push(w.mapUv),S.push(w.alphaMapUv),S.push(w.lightMapUv),S.push(w.aoMapUv),S.push(w.bumpMapUv),S.push(w.normalMapUv),S.push(w.displacementMapUv),S.push(w.emissiveMapUv),S.push(w.metalnessMapUv),S.push(w.roughnessMapUv),S.push(w.anisotropyMapUv),S.push(w.clearcoatMapUv),S.push(w.clearcoatNormalMapUv),S.push(w.clearcoatRoughnessMapUv),S.push(w.iridescenceMapUv),S.push(w.iridescenceThicknessMapUv),S.push(w.sheenColorMapUv),S.push(w.sheenRoughnessMapUv),S.push(w.specularMapUv),S.push(w.specularColorMapUv),S.push(w.specularIntensityMapUv),S.push(w.transmissionMapUv),S.push(w.thicknessMapUv),S.push(w.combine),S.push(w.fogExp2),S.push(w.sizeAttenuation),S.push(w.morphTargetsCount),S.push(w.morphAttributeCount),S.push(w.numDirLights),S.push(w.numPointLights),S.push(w.numSpotLights),S.push(w.numSpotLightMaps),S.push(w.numHemiLights),S.push(w.numRectAreaLights),S.push(w.numDirLightShadows),S.push(w.numPointLightShadows),S.push(w.numSpotLightShadows),S.push(w.numSpotLightShadowsWithMaps),S.push(w.numLightProbes),S.push(w.shadowMapType),S.push(w.toneMapping),S.push(w.numClippingPlanes),S.push(w.numClipIntersection),S.push(w.depthPacking)}function v(S,w){a.disableAll(),w.supportsVertexTextures&&a.enable(0),w.instancing&&a.enable(1),w.instancingColor&&a.enable(2),w.instancingMorph&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),w.dispersion&&a.enable(20),w.batchingColor&&a.enable(21),w.gradientMap&&a.enable(22),S.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),S.push(a.mask)}function x(S){let w=g[S.type],P;if(w){let B=dn[w];P=Eh.clone(B.uniforms)}else P=S.uniforms;return P}function C(S,w){let P;for(let B=0,G=h.length;B<G;B++){let q=h[B];if(q.cacheKey===w){P=q,++P.usedTimes;break}}return P===void 0&&(P=new I_(i,w,S,r),h.push(P)),P}function E(S){if(--S.usedTimes===0){let w=h.indexOf(S);h[w]=h[h.length-1],h.pop(),S.destroy()}}function R(S){l.remove(S)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:x,acquireProgram:C,releaseProgram:E,releaseShaderCache:R,programs:h,dispose:D}}function D_(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function U_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function $h(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Kh(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u,f,p,g,_,m){let d=i[e];return d===void 0?(d={id:u.id,object:u,geometry:f,material:p,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},i[e]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=u.renderOrder,d.z=_,d.group=m),e++,d}function a(u,f,p,g,_,m){let d=o(u,f,p,g,_,m);p.transmission>0?n.push(d):p.transparent===!0?s.push(d):t.push(d)}function l(u,f,p,g,_,m){let d=o(u,f,p,g,_,m);p.transmission>0?n.unshift(d):p.transparent===!0?s.unshift(d):t.unshift(d)}function c(u,f){t.length>1&&t.sort(u||U_),n.length>1&&n.sort(f||$h),s.length>1&&s.sort(f||$h)}function h(){for(let u=e,f=i.length;u<f;u++){let p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function N_(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new Kh,i.set(n,[o])):s>=r.length?(o=new Kh,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function F_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new ke};break;case"SpotLight":t={position:new F,direction:new F,color:new ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new ke,groundColor:new ke};break;case"RectAreaLight":t={color:new ke,position:new F,halfWidth:new F,halfHeight:new F};break}return i[e.id]=t,t}}}function O_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var B_=0;function z_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function k_(i){let e=new F_,t=O_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new F);let s=new F,r=new nt,o=new nt;function a(c){let h=0,u=0,f=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let p=0,g=0,_=0,m=0,d=0,b=0,v=0,x=0,C=0,E=0,R=0;c.sort(z_);for(let S=0,w=c.length;S<w;S++){let P=c[S],B=P.color,G=P.intensity,q=P.distance,j=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=B.r*G,u+=B.g*G,f+=B.b*G;else if(P.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(P.sh.coefficients[H],G);R++}else if(P.isDirectionalLight){let H=e.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let Q=P.shadow,V=t.get(P);V.shadowIntensity=Q.intensity,V.shadowBias=Q.bias,V.shadowNormalBias=Q.normalBias,V.shadowRadius=Q.radius,V.shadowMapSize=Q.mapSize,n.directionalShadow[p]=V,n.directionalShadowMap[p]=j,n.directionalShadowMatrix[p]=P.shadow.matrix,b++}n.directional[p]=H,p++}else if(P.isSpotLight){let H=e.get(P);H.position.setFromMatrixPosition(P.matrixWorld),H.color.copy(B).multiplyScalar(G),H.distance=q,H.coneCos=Math.cos(P.angle),H.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),H.decay=P.decay,n.spot[_]=H;let Q=P.shadow;if(P.map&&(n.spotLightMap[C]=P.map,C++,Q.updateMatrices(P),P.castShadow&&E++),n.spotLightMatrix[_]=Q.matrix,P.castShadow){let V=t.get(P);V.shadowIntensity=Q.intensity,V.shadowBias=Q.bias,V.shadowNormalBias=Q.normalBias,V.shadowRadius=Q.radius,V.shadowMapSize=Q.mapSize,n.spotShadow[_]=V,n.spotShadowMap[_]=j,x++}_++}else if(P.isRectAreaLight){let H=e.get(P);H.color.copy(B).multiplyScalar(G),H.halfWidth.set(P.width*.5,0,0),H.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=H,m++}else if(P.isPointLight){let H=e.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),H.distance=P.distance,H.decay=P.decay,P.castShadow){let Q=P.shadow,V=t.get(P);V.shadowIntensity=Q.intensity,V.shadowBias=Q.bias,V.shadowNormalBias=Q.normalBias,V.shadowRadius=Q.radius,V.shadowMapSize=Q.mapSize,V.shadowCameraNear=Q.camera.near,V.shadowCameraFar=Q.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=j,n.pointShadowMatrix[g]=P.shadow.matrix,v++}n.point[g]=H,g++}else if(P.isHemisphereLight){let H=e.get(P);H.skyColor.copy(P.color).multiplyScalar(G),H.groundColor.copy(P.groundColor).multiplyScalar(G),n.hemi[d]=H,d++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ce.LTC_FLOAT_1,n.rectAreaLTC2=ce.LTC_FLOAT_2):(n.rectAreaLTC1=ce.LTC_HALF_1,n.rectAreaLTC2=ce.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let D=n.hash;(D.directionalLength!==p||D.pointLength!==g||D.spotLength!==_||D.rectAreaLength!==m||D.hemiLength!==d||D.numDirectionalShadows!==b||D.numPointShadows!==v||D.numSpotShadows!==x||D.numSpotMaps!==C||D.numLightProbes!==R)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=d,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=x+C-E,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=R,D.directionalLength=p,D.pointLength=g,D.spotLength=_,D.rectAreaLength=m,D.hemiLength=d,D.numDirectionalShadows=b,D.numPointShadows=v,D.numSpotShadows=x,D.numSpotMaps=C,D.numLightProbes=R,n.version=B_++)}function l(c,h){let u=0,f=0,p=0,g=0,_=0,m=h.matrixWorldInverse;for(let d=0,b=c.length;d<b;d++){let v=c[d];if(v.isDirectionalLight){let x=n.directional[u];x.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),u++}else if(v.isSpotLight){let x=n.spot[p];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),p++}else if(v.isRectAreaLight){let x=n.rectArea[g];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(v.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(v.width*.5,0,0),x.halfHeight.set(0,v.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){let x=n.point[f];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),f++}else if(v.isHemisphereLight){let x=n.hemi[_];x.direction.setFromMatrixPosition(v.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function Qh(i){let e=new k_(i),t=[],n=[];function s(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function V_(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Qh(i),e.set(s,[a])):r>=o.length?(a=new Qh(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var H_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,G_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function W_(i,e,t){let n=new Ss,s=new We,r=new We,o=new ht,a=new Wr({depthPacking:fh}),l=new Xr,c={},h=t.maxTextureSize,u={[Qt]:Ct,[Ct]:Qt,[Vt]:Vt},f=new zt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new We},radius:{value:4}},vertexShader:H_,fragmentShader:G_}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let g=new At;g.setAttribute("position",new Ft(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new ft(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ka;let d=this.type;this.render=function(E,R,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;let S=i.getRenderTarget(),w=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),B=i.state;B.setBlending(An),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let G=d!==ln&&this.type===ln,q=d===ln&&this.type!==ln;for(let j=0,H=E.length;j<H;j++){let Q=E[j],V=Q.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let ne=V.getFrameExtents();if(s.multiply(ne),r.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ne.x),s.x=r.x*ne.x,V.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ne.y),s.y=r.y*ne.y,V.mapSize.y=r.y)),V.map===null||G===!0||q===!0){let de=this.type!==ln?{minFilter:qt,magFilter:qt}:{};V.map!==null&&V.map.dispose(),V.map=new cn(s.x,s.y,de),V.map.texture.name=Q.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();let ae=V.getViewportCount();for(let de=0;de<ae;de++){let De=V.getViewport(de);o.set(r.x*De.x,r.y*De.y,r.x*De.z,r.y*De.w),B.viewport(o),V.updateMatrices(Q,de),n=V.getFrustum(),x(R,D,V.camera,Q,this.type)}V.isPointLightShadow!==!0&&this.type===ln&&b(V,D),V.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(S,w,P)};function b(E,R){let D=e.update(_);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new cn(s.x,s.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(R,null,D,f,_,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(R,null,D,p,_,null)}function v(E,R,D,S){let w=null,P=D.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(P!==void 0)w=P;else if(w=D.isPointLight===!0?l:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let B=w.uuid,G=R.uuid,q=c[B];q===void 0&&(q={},c[B]=q);let j=q[G];j===void 0&&(j=w.clone(),q[G]=j,R.addEventListener("dispose",C)),w=j}if(w.visible=R.visible,w.wireframe=R.wireframe,S===ln?w.side=R.shadowSide!==null?R.shadowSide:R.side:w.side=R.shadowSide!==null?R.shadowSide:u[R.side],w.alphaMap=R.alphaMap,w.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,w.map=R.map,w.clipShadows=R.clipShadows,w.clippingPlanes=R.clippingPlanes,w.clipIntersection=R.clipIntersection,w.displacementMap=R.displacementMap,w.displacementScale=R.displacementScale,w.displacementBias=R.displacementBias,w.wireframeLinewidth=R.wireframeLinewidth,w.linewidth=R.linewidth,D.isPointLight===!0&&w.isMeshDistanceMaterial===!0){let B=i.properties.get(w);B.light=D}return w}function x(E,R,D,S,w){if(E.visible===!1)return;if(E.layers.test(R.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&w===ln)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,E.matrixWorld);let G=e.update(E),q=E.material;if(Array.isArray(q)){let j=G.groups;for(let H=0,Q=j.length;H<Q;H++){let V=j[H],ne=q[V.materialIndex];if(ne&&ne.visible){let ae=v(E,ne,S,w);E.onBeforeShadow(i,E,R,D,G,ae,V),i.renderBufferDirect(D,null,G,ae,E,V),E.onAfterShadow(i,E,R,D,G,ae,V)}}}else if(q.visible){let j=v(E,q,S,w);E.onBeforeShadow(i,E,R,D,G,j,null),i.renderBufferDirect(D,null,G,j,E,null),E.onAfterShadow(i,E,R,D,G,j,null)}}let B=E.children;for(let G=0,q=B.length;G<q;G++)x(B[G],R,D,S,w)}function C(E){E.target.removeEventListener("dispose",C);for(let D in c){let S=c[D],w=E.target.uuid;w in S&&(S[w].dispose(),delete S[w])}}}var X_={[no]:io,[so]:ao,[ro]:co,[ti]:oo,[io]:no,[ao]:so,[co]:ro,[oo]:ti};function q_(i,e){function t(){let L=!1,se=new ht,oe=null,pe=new ht(0,0,0,0);return{setMask:function(ee){oe!==ee&&!L&&(i.colorMask(ee,ee,ee,ee),oe=ee)},setLocked:function(ee){L=ee},setClear:function(ee,Z,_e,Ue,Qe){Qe===!0&&(ee*=Ue,Z*=Ue,_e*=Ue),se.set(ee,Z,_e,Ue),pe.equals(se)===!1&&(i.clearColor(ee,Z,_e,Ue),pe.copy(se))},reset:function(){L=!1,oe=null,pe.set(-1,0,0,0)}}}function n(){let L=!1,se=!1,oe=null,pe=null,ee=null;return{setReversed:function(Z){if(se!==Z){let _e=e.get("EXT_clip_control");Z?_e.clipControlEXT(_e.LOWER_LEFT_EXT,_e.ZERO_TO_ONE_EXT):_e.clipControlEXT(_e.LOWER_LEFT_EXT,_e.NEGATIVE_ONE_TO_ONE_EXT),se=Z;let Ue=ee;ee=null,this.setClear(Ue)}},getReversed:function(){return se},setTest:function(Z){Z?$(i.DEPTH_TEST):me(i.DEPTH_TEST)},setMask:function(Z){oe!==Z&&!L&&(i.depthMask(Z),oe=Z)},setFunc:function(Z){if(se&&(Z=X_[Z]),pe!==Z){switch(Z){case no:i.depthFunc(i.NEVER);break;case io:i.depthFunc(i.ALWAYS);break;case so:i.depthFunc(i.LESS);break;case ti:i.depthFunc(i.LEQUAL);break;case ro:i.depthFunc(i.EQUAL);break;case oo:i.depthFunc(i.GEQUAL);break;case ao:i.depthFunc(i.GREATER);break;case co:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}pe=Z}},setLocked:function(Z){L=Z},setClear:function(Z){ee!==Z&&(se&&(Z=1-Z),i.clearDepth(Z),ee=Z)},reset:function(){L=!1,oe=null,pe=null,ee=null,se=!1}}}function s(){let L=!1,se=null,oe=null,pe=null,ee=null,Z=null,_e=null,Ue=null,Qe=null;return{setTest:function(Ye){L||(Ye?$(i.STENCIL_TEST):me(i.STENCIL_TEST))},setMask:function(Ye){se!==Ye&&!L&&(i.stencilMask(Ye),se=Ye)},setFunc:function(Ye,mn,on){(oe!==Ye||pe!==mn||ee!==on)&&(i.stencilFunc(Ye,mn,on),oe=Ye,pe=mn,ee=on)},setOp:function(Ye,mn,on){(Z!==Ye||_e!==mn||Ue!==on)&&(i.stencilOp(Ye,mn,on),Z=Ye,_e=mn,Ue=on)},setLocked:function(Ye){L=Ye},setClear:function(Ye){Qe!==Ye&&(i.clearStencil(Ye),Qe=Ye)},reset:function(){L=!1,se=null,oe=null,pe=null,ee=null,Z=null,_e=null,Ue=null,Qe=null}}}let r=new t,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},u={},f=new WeakMap,p=[],g=null,_=!1,m=null,d=null,b=null,v=null,x=null,C=null,E=null,R=new ke(0,0,0),D=0,S=!1,w=null,P=null,B=null,G=null,q=null,j=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,Q=0,V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(V)[1]),H=Q>=1):V.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),H=Q>=2);let ne=null,ae={},de=i.getParameter(i.SCISSOR_BOX),De=i.getParameter(i.VIEWPORT),je=new ht().fromArray(de),$e=new ht().fromArray(De);function Me(L,se,oe,pe){let ee=new Uint8Array(4),Z=i.createTexture();i.bindTexture(L,Z),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let _e=0;_e<oe;_e++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(se,0,i.RGBA,1,1,pe,0,i.RGBA,i.UNSIGNED_BYTE,ee):i.texImage2D(se+_e,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ee);return Z}let W={};W[i.TEXTURE_2D]=Me(i.TEXTURE_2D,i.TEXTURE_2D,1),W[i.TEXTURE_CUBE_MAP]=Me(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),W[i.TEXTURE_2D_ARRAY]=Me(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),W[i.TEXTURE_3D]=Me(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),$(i.DEPTH_TEST),o.setFunc(ti),Ie(!1),xe($a),$(i.CULL_FACE),it(An);function $(L){h[L]!==!0&&(i.enable(L),h[L]=!0)}function me(L){h[L]!==!1&&(i.disable(L),h[L]=!1)}function Le(L,se){return u[L]!==se?(i.bindFramebuffer(L,se),u[L]=se,L===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=se),L===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=se),!0):!1}function Ee(L,se){let oe=p,pe=!1;if(L){oe=f.get(se),oe===void 0&&(oe=[],f.set(se,oe));let ee=L.textures;if(oe.length!==ee.length||oe[0]!==i.COLOR_ATTACHMENT0){for(let Z=0,_e=ee.length;Z<_e;Z++)oe[Z]=i.COLOR_ATTACHMENT0+Z;oe.length=ee.length,pe=!0}}else oe[0]!==i.BACK&&(oe[0]=i.BACK,pe=!0);pe&&i.drawBuffers(oe)}function Ge(L){return g!==L?(i.useProgram(L),g=L,!0):!1}let yt={[Bn]:i.FUNC_ADD,[zl]:i.FUNC_SUBTRACT,[kl]:i.FUNC_REVERSE_SUBTRACT};yt[Vl]=i.MIN,yt[Hl]=i.MAX;let I={[Gl]:i.ZERO,[Wl]:i.ONE,[Xl]:i.SRC_COLOR,[Pr]:i.SRC_ALPHA,[$l]:i.SRC_ALPHA_SATURATE,[Zl]:i.DST_COLOR,[Yl]:i.DST_ALPHA,[ql]:i.ONE_MINUS_SRC_COLOR,[Lr]:i.ONE_MINUS_SRC_ALPHA,[Jl]:i.ONE_MINUS_DST_COLOR,[jl]:i.ONE_MINUS_DST_ALPHA,[Kl]:i.CONSTANT_COLOR,[Ql]:i.ONE_MINUS_CONSTANT_COLOR,[eh]:i.CONSTANT_ALPHA,[th]:i.ONE_MINUS_CONSTANT_ALPHA};function it(L,se,oe,pe,ee,Z,_e,Ue,Qe,Ye){if(L===An){_===!0&&(me(i.BLEND),_=!1);return}if(_===!1&&($(i.BLEND),_=!0),L!==Bl){if(L!==m||Ye!==S){if((d!==Bn||x!==Bn)&&(i.blendEquation(i.FUNC_ADD),d=Bn,x=Bn),Ye)switch(L){case ei:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Qa:i.blendFunc(i.ONE,i.ONE);break;case ec:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case tc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case ei:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Qa:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case ec:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case tc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}b=null,v=null,C=null,E=null,R.set(0,0,0),D=0,m=L,S=Ye}return}ee=ee||se,Z=Z||oe,_e=_e||pe,(se!==d||ee!==x)&&(i.blendEquationSeparate(yt[se],yt[ee]),d=se,x=ee),(oe!==b||pe!==v||Z!==C||_e!==E)&&(i.blendFuncSeparate(I[oe],I[pe],I[Z],I[_e]),b=oe,v=pe,C=Z,E=_e),(Ue.equals(R)===!1||Qe!==D)&&(i.blendColor(Ue.r,Ue.g,Ue.b,Qe),R.copy(Ue),D=Qe),m=L,S=!1}function Ne(L,se){L.side===Vt?me(i.CULL_FACE):$(i.CULL_FACE);let oe=L.side===Ct;se&&(oe=!oe),Ie(oe),L.blending===ei&&L.transparent===!1?it(An):it(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),r.setMask(L.colorWrite);let pe=L.stencilWrite;a.setTest(pe),pe&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),ye(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?$(i.SAMPLE_ALPHA_TO_COVERAGE):me(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ie(L){w!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),w=L)}function xe(L){L!==Nl?($(i.CULL_FACE),L!==P&&(L===$a?i.cullFace(i.BACK):L===Fl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):me(i.CULL_FACE),P=L}function st(L){L!==B&&(H&&i.lineWidth(L),B=L)}function ye(L,se,oe){L?($(i.POLYGON_OFFSET_FILL),(G!==se||q!==oe)&&(i.polygonOffset(se,oe),G=se,q=oe)):me(i.POLYGON_OFFSET_FILL)}function Be(L){L?$(i.SCISSOR_TEST):me(i.SCISSOR_TEST)}function gt(L){L===void 0&&(L=i.TEXTURE0+j-1),ne!==L&&(i.activeTexture(L),ne=L)}function ut(L,se,oe){oe===void 0&&(ne===null?oe=i.TEXTURE0+j-1:oe=ne);let pe=ae[oe];pe===void 0&&(pe={type:void 0,texture:void 0},ae[oe]=pe),(pe.type!==L||pe.texture!==se)&&(ne!==oe&&(i.activeTexture(oe),ne=oe),i.bindTexture(L,se||W[L]),pe.type=L,pe.texture=se)}function A(){let L=ae[ne];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function y(){try{i.compressedTexImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function O(){try{i.compressedTexImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Y(){try{i.texSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function K(){try{i.texSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function X(){try{i.compressedTexSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function we(){try{i.compressedTexSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function re(){try{i.texStorage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ve(){try{i.texStorage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function be(){try{i.texImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ie(){try{i.texImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ue(L){je.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),je.copy(L))}function Re(L){$e.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),$e.copy(L))}function Se(L,se){let oe=c.get(se);oe===void 0&&(oe=new WeakMap,c.set(se,oe));let pe=oe.get(L);pe===void 0&&(pe=i.getUniformBlockIndex(se,L.name),oe.set(L,pe))}function le(L,se){let pe=c.get(se).get(L);l.get(se)!==pe&&(i.uniformBlockBinding(se,pe,L.__bindingPointIndex),l.set(se,pe))}function Oe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ne=null,ae={},u={},f=new WeakMap,p=[],g=null,_=!1,m=null,d=null,b=null,v=null,x=null,C=null,E=null,R=new ke(0,0,0),D=0,S=!1,w=null,P=null,B=null,G=null,q=null,je.set(0,0,i.canvas.width,i.canvas.height),$e.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:$,disable:me,bindFramebuffer:Le,drawBuffers:Ee,useProgram:Ge,setBlending:it,setMaterial:Ne,setFlipSided:Ie,setCullFace:xe,setLineWidth:st,setPolygonOffset:ye,setScissorTest:Be,activeTexture:gt,bindTexture:ut,unbindTexture:A,compressedTexImage2D:y,compressedTexImage3D:O,texImage2D:be,texImage3D:ie,updateUBOMapping:Se,uniformBlockBinding:le,texStorage2D:re,texStorage3D:ve,texSubImage2D:Y,texSubImage3D:K,compressedTexSubImage2D:X,compressedTexSubImage3D:we,scissor:ue,viewport:Re,reset:Oe}}function Y_(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new We,h=new WeakMap,u,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,y){return p?new OffscreenCanvas(A,y):_s("canvas")}function _(A,y,O){let Y=1,K=ut(A);if((K.width>O||K.height>O)&&(Y=O/Math.max(K.width,K.height)),Y<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let X=Math.floor(Y*K.width),we=Math.floor(Y*K.height);u===void 0&&(u=g(X,we));let re=y?g(X,we):u;return re.width=X,re.height=we,re.getContext("2d").drawImage(A,0,0,X,we),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+X+"x"+we+")."),re}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),A;return A}function m(A){return A.generateMipmaps}function d(A){i.generateMipmap(A)}function b(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(A,y,O,Y,K=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let X=y;if(y===i.RED&&(O===i.FLOAT&&(X=i.R32F),O===i.HALF_FLOAT&&(X=i.R16F),O===i.UNSIGNED_BYTE&&(X=i.R8)),y===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(X=i.R8UI),O===i.UNSIGNED_SHORT&&(X=i.R16UI),O===i.UNSIGNED_INT&&(X=i.R32UI),O===i.BYTE&&(X=i.R8I),O===i.SHORT&&(X=i.R16I),O===i.INT&&(X=i.R32I)),y===i.RG&&(O===i.FLOAT&&(X=i.RG32F),O===i.HALF_FLOAT&&(X=i.RG16F),O===i.UNSIGNED_BYTE&&(X=i.RG8)),y===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(X=i.RG8UI),O===i.UNSIGNED_SHORT&&(X=i.RG16UI),O===i.UNSIGNED_INT&&(X=i.RG32UI),O===i.BYTE&&(X=i.RG8I),O===i.SHORT&&(X=i.RG16I),O===i.INT&&(X=i.RG32I)),y===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(X=i.RGB8UI),O===i.UNSIGNED_SHORT&&(X=i.RGB16UI),O===i.UNSIGNED_INT&&(X=i.RGB32UI),O===i.BYTE&&(X=i.RGB8I),O===i.SHORT&&(X=i.RGB16I),O===i.INT&&(X=i.RGB32I)),y===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(X=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(X=i.RGBA16UI),O===i.UNSIGNED_INT&&(X=i.RGBA32UI),O===i.BYTE&&(X=i.RGBA8I),O===i.SHORT&&(X=i.RGBA16I),O===i.INT&&(X=i.RGBA32I)),y===i.RGB&&(O===i.UNSIGNED_INT_5_9_9_9_REV&&(X=i.RGB9_E5),O===i.UNSIGNED_INT_10F_11F_11F_REV&&(X=i.R11F_G11F_B10F)),y===i.RGBA){let we=K?ms:Xe.getTransfer(Y);O===i.FLOAT&&(X=i.RGBA32F),O===i.HALF_FLOAT&&(X=i.RGBA16F),O===i.UNSIGNED_BYTE&&(X=we===Ze?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(X=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(X=i.RGB5_A1)}return(X===i.R16F||X===i.R32F||X===i.RG16F||X===i.RG32F||X===i.RGBA16F||X===i.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function x(A,y){let O;return A?y===null||y===Wn||y===Yi?O=i.DEPTH24_STENCIL8:y===un?O=i.DEPTH32F_STENCIL8:y===Xi&&(O=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Wn||y===Yi?O=i.DEPTH_COMPONENT24:y===un?O=i.DEPTH_COMPONENT32F:y===Xi&&(O=i.DEPTH_COMPONENT16),O}function C(A,y){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==qt&&A.minFilter!==en?Math.log2(Math.max(y.width,y.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?y.mipmaps.length:1}function E(A){let y=A.target;y.removeEventListener("dispose",E),D(y),y.isVideoTexture&&h.delete(y)}function R(A){let y=A.target;y.removeEventListener("dispose",R),w(y)}function D(A){let y=n.get(A);if(y.__webglInit===void 0)return;let O=A.source,Y=f.get(O);if(Y){let K=Y[y.__cacheKey];K.usedTimes--,K.usedTimes===0&&S(A),Object.keys(Y).length===0&&f.delete(O)}n.remove(A)}function S(A){let y=n.get(A);i.deleteTexture(y.__webglTexture);let O=A.source,Y=f.get(O);delete Y[y.__cacheKey],o.memory.textures--}function w(A){let y=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(y.__webglFramebuffer[Y]))for(let K=0;K<y.__webglFramebuffer[Y].length;K++)i.deleteFramebuffer(y.__webglFramebuffer[Y][K]);else i.deleteFramebuffer(y.__webglFramebuffer[Y]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[Y])}else{if(Array.isArray(y.__webglFramebuffer))for(let Y=0;Y<y.__webglFramebuffer.length;Y++)i.deleteFramebuffer(y.__webglFramebuffer[Y]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let Y=0;Y<y.__webglColorRenderbuffer.length;Y++)y.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[Y]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let O=A.textures;for(let Y=0,K=O.length;Y<K;Y++){let X=n.get(O[Y]);X.__webglTexture&&(i.deleteTexture(X.__webglTexture),o.memory.textures--),n.remove(O[Y])}n.remove(A)}let P=0;function B(){P=0}function G(){let A=P;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),P+=1,A}function q(A){let y=[];return y.push(A.wrapS),y.push(A.wrapT),y.push(A.wrapR||0),y.push(A.magFilter),y.push(A.minFilter),y.push(A.anisotropy),y.push(A.internalFormat),y.push(A.format),y.push(A.type),y.push(A.generateMipmaps),y.push(A.premultiplyAlpha),y.push(A.flipY),y.push(A.unpackAlignment),y.push(A.colorSpace),y.join()}function j(A,y){let O=n.get(A);if(A.isVideoTexture&&Be(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&O.__version!==A.version){let Y=A.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{W(O,A,y);return}}else A.isExternalTexture&&(O.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+y)}function H(A,y){let O=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){W(O,A,y);return}t.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+y)}function Q(A,y){let O=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){W(O,A,y);return}t.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+y)}function V(A,y){let O=n.get(A);if(A.version>0&&O.__version!==A.version){$(O,A,y);return}t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+y)}let ne={[Dr]:i.REPEAT,[On]:i.CLAMP_TO_EDGE,[Ur]:i.MIRRORED_REPEAT},ae={[qt]:i.NEAREST,[uh]:i.NEAREST_MIPMAP_NEAREST,[Os]:i.NEAREST_MIPMAP_LINEAR,[en]:i.LINEAR,[fo]:i.LINEAR_MIPMAP_NEAREST,[Gn]:i.LINEAR_MIPMAP_LINEAR},de={[mh]:i.NEVER,[Mh]:i.ALWAYS,[gh]:i.LESS,[dc]:i.LEQUAL,[_h]:i.EQUAL,[vh]:i.GEQUAL,[xh]:i.GREATER,[yh]:i.NOTEQUAL};function De(A,y){if(y.type===un&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===en||y.magFilter===fo||y.magFilter===Os||y.magFilter===Gn||y.minFilter===en||y.minFilter===fo||y.minFilter===Os||y.minFilter===Gn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,ne[y.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,ne[y.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,ne[y.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,ae[y.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,ae[y.minFilter]),y.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,de[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===qt||y.minFilter!==Os&&y.minFilter!==Gn||y.type===un&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){let O=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function je(A,y){let O=!1;A.__webglInit===void 0&&(A.__webglInit=!0,y.addEventListener("dispose",E));let Y=y.source,K=f.get(Y);K===void 0&&(K={},f.set(Y,K));let X=q(y);if(X!==A.__cacheKey){K[X]===void 0&&(K[X]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,O=!0),K[X].usedTimes++;let we=K[A.__cacheKey];we!==void 0&&(K[A.__cacheKey].usedTimes--,we.usedTimes===0&&S(y)),A.__cacheKey=X,A.__webglTexture=K[X].texture}return O}function $e(A,y,O){return Math.floor(Math.floor(A/O)/y)}function Me(A,y,O,Y){let X=A.updateRanges;if(X.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,y.width,y.height,O,Y,y.data);else{X.sort((ie,ue)=>ie.start-ue.start);let we=0;for(let ie=1;ie<X.length;ie++){let ue=X[we],Re=X[ie],Se=ue.start+ue.count,le=$e(Re.start,y.width,4),Oe=$e(ue.start,y.width,4);Re.start<=Se+1&&le===Oe&&$e(Re.start+Re.count-1,y.width,4)===le?ue.count=Math.max(ue.count,Re.start+Re.count-ue.start):(++we,X[we]=Re)}X.length=we+1;let re=i.getParameter(i.UNPACK_ROW_LENGTH),ve=i.getParameter(i.UNPACK_SKIP_PIXELS),be=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,y.width);for(let ie=0,ue=X.length;ie<ue;ie++){let Re=X[ie],Se=Math.floor(Re.start/4),le=Math.ceil(Re.count/4),Oe=Se%y.width,L=Math.floor(Se/y.width),se=le,oe=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Oe),i.pixelStorei(i.UNPACK_SKIP_ROWS,L),t.texSubImage2D(i.TEXTURE_2D,0,Oe,L,se,oe,O,Y,y.data)}A.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,re),i.pixelStorei(i.UNPACK_SKIP_PIXELS,ve),i.pixelStorei(i.UNPACK_SKIP_ROWS,be)}}function W(A,y,O){let Y=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(Y=i.TEXTURE_3D);let K=je(A,y),X=y.source;t.bindTexture(Y,A.__webglTexture,i.TEXTURE0+O);let we=n.get(X);if(X.version!==we.__version||K===!0){t.activeTexture(i.TEXTURE0+O);let re=Xe.getPrimaries(Xe.workingColorSpace),ve=y.colorSpace===Rn?null:Xe.getPrimaries(y.colorSpace),be=y.colorSpace===Rn||re===ve?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);let ie=_(y.image,!1,s.maxTextureSize);ie=gt(y,ie);let ue=r.convert(y.format,y.colorSpace),Re=r.convert(y.type),Se=v(y.internalFormat,ue,Re,y.colorSpace,y.isVideoTexture);De(Y,y);let le,Oe=y.mipmaps,L=y.isVideoTexture!==!0,se=we.__version===void 0||K===!0,oe=X.dataReady,pe=C(y,ie);if(y.isDepthTexture)Se=x(y.format===ji,y.type),se&&(L?t.texStorage2D(i.TEXTURE_2D,1,Se,ie.width,ie.height):t.texImage2D(i.TEXTURE_2D,0,Se,ie.width,ie.height,0,ue,Re,null));else if(y.isDataTexture)if(Oe.length>0){L&&se&&t.texStorage2D(i.TEXTURE_2D,pe,Se,Oe[0].width,Oe[0].height);for(let ee=0,Z=Oe.length;ee<Z;ee++)le=Oe[ee],L?oe&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,le.width,le.height,ue,Re,le.data):t.texImage2D(i.TEXTURE_2D,ee,Se,le.width,le.height,0,ue,Re,le.data);y.generateMipmaps=!1}else L?(se&&t.texStorage2D(i.TEXTURE_2D,pe,Se,ie.width,ie.height),oe&&Me(y,ie,ue,Re)):t.texImage2D(i.TEXTURE_2D,0,Se,ie.width,ie.height,0,ue,Re,ie.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){L&&se&&t.texStorage3D(i.TEXTURE_2D_ARRAY,pe,Se,Oe[0].width,Oe[0].height,ie.depth);for(let ee=0,Z=Oe.length;ee<Z;ee++)if(le=Oe[ee],y.format!==Yt)if(ue!==null)if(L){if(oe)if(y.layerUpdates.size>0){let _e=yc(le.width,le.height,y.format,y.type);for(let Ue of y.layerUpdates){let Qe=le.data.subarray(Ue*_e/le.data.BYTES_PER_ELEMENT,(Ue+1)*_e/le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,Ue,le.width,le.height,1,ue,Qe)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,0,le.width,le.height,ie.depth,ue,le.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ee,Se,le.width,le.height,ie.depth,0,le.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?oe&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,0,le.width,le.height,ie.depth,ue,Re,le.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ee,Se,le.width,le.height,ie.depth,0,ue,Re,le.data)}else{L&&se&&t.texStorage2D(i.TEXTURE_2D,pe,Se,Oe[0].width,Oe[0].height);for(let ee=0,Z=Oe.length;ee<Z;ee++)le=Oe[ee],y.format!==Yt?ue!==null?L?oe&&t.compressedTexSubImage2D(i.TEXTURE_2D,ee,0,0,le.width,le.height,ue,le.data):t.compressedTexImage2D(i.TEXTURE_2D,ee,Se,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?oe&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,le.width,le.height,ue,Re,le.data):t.texImage2D(i.TEXTURE_2D,ee,Se,le.width,le.height,0,ue,Re,le.data)}else if(y.isDataArrayTexture)if(L){if(se&&t.texStorage3D(i.TEXTURE_2D_ARRAY,pe,Se,ie.width,ie.height,ie.depth),oe)if(y.layerUpdates.size>0){let ee=yc(ie.width,ie.height,y.format,y.type);for(let Z of y.layerUpdates){let _e=ie.data.subarray(Z*ee/ie.data.BYTES_PER_ELEMENT,(Z+1)*ee/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Z,ie.width,ie.height,1,ue,Re,_e)}y.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,ue,Re,ie.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Se,ie.width,ie.height,ie.depth,0,ue,Re,ie.data);else if(y.isData3DTexture)L?(se&&t.texStorage3D(i.TEXTURE_3D,pe,Se,ie.width,ie.height,ie.depth),oe&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,ue,Re,ie.data)):t.texImage3D(i.TEXTURE_3D,0,Se,ie.width,ie.height,ie.depth,0,ue,Re,ie.data);else if(y.isFramebufferTexture){if(se)if(L)t.texStorage2D(i.TEXTURE_2D,pe,Se,ie.width,ie.height);else{let ee=ie.width,Z=ie.height;for(let _e=0;_e<pe;_e++)t.texImage2D(i.TEXTURE_2D,_e,Se,ee,Z,0,ue,Re,null),ee>>=1,Z>>=1}}else if(Oe.length>0){if(L&&se){let ee=ut(Oe[0]);t.texStorage2D(i.TEXTURE_2D,pe,Se,ee.width,ee.height)}for(let ee=0,Z=Oe.length;ee<Z;ee++)le=Oe[ee],L?oe&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,ue,Re,le):t.texImage2D(i.TEXTURE_2D,ee,Se,ue,Re,le);y.generateMipmaps=!1}else if(L){if(se){let ee=ut(ie);t.texStorage2D(i.TEXTURE_2D,pe,Se,ee.width,ee.height)}oe&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ue,Re,ie)}else t.texImage2D(i.TEXTURE_2D,0,Se,ue,Re,ie);m(y)&&d(Y),we.__version=X.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function $(A,y,O){if(y.image.length!==6)return;let Y=je(A,y),K=y.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+O);let X=n.get(K);if(K.version!==X.__version||Y===!0){t.activeTexture(i.TEXTURE0+O);let we=Xe.getPrimaries(Xe.workingColorSpace),re=y.colorSpace===Rn?null:Xe.getPrimaries(y.colorSpace),ve=y.colorSpace===Rn||we===re?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);let be=y.isCompressedTexture||y.image[0].isCompressedTexture,ie=y.image[0]&&y.image[0].isDataTexture,ue=[];for(let Z=0;Z<6;Z++)!be&&!ie?ue[Z]=_(y.image[Z],!0,s.maxCubemapSize):ue[Z]=ie?y.image[Z].image:y.image[Z],ue[Z]=gt(y,ue[Z]);let Re=ue[0],Se=r.convert(y.format,y.colorSpace),le=r.convert(y.type),Oe=v(y.internalFormat,Se,le,y.colorSpace),L=y.isVideoTexture!==!0,se=X.__version===void 0||Y===!0,oe=K.dataReady,pe=C(y,Re);De(i.TEXTURE_CUBE_MAP,y);let ee;if(be){L&&se&&t.texStorage2D(i.TEXTURE_CUBE_MAP,pe,Oe,Re.width,Re.height);for(let Z=0;Z<6;Z++){ee=ue[Z].mipmaps;for(let _e=0;_e<ee.length;_e++){let Ue=ee[_e];y.format!==Yt?Se!==null?L?oe&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,_e,0,0,Ue.width,Ue.height,Se,Ue.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,_e,Oe,Ue.width,Ue.height,0,Ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,_e,0,0,Ue.width,Ue.height,Se,le,Ue.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,_e,Oe,Ue.width,Ue.height,0,Se,le,Ue.data)}}}else{if(ee=y.mipmaps,L&&se){ee.length>0&&pe++;let Z=ut(ue[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,pe,Oe,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(ie){L?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,ue[Z].width,ue[Z].height,Se,le,ue[Z].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Oe,ue[Z].width,ue[Z].height,0,Se,le,ue[Z].data);for(let _e=0;_e<ee.length;_e++){let Qe=ee[_e].image[Z].image;L?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,_e+1,0,0,Qe.width,Qe.height,Se,le,Qe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,_e+1,Oe,Qe.width,Qe.height,0,Se,le,Qe.data)}}else{L?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Se,le,ue[Z]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Oe,Se,le,ue[Z]);for(let _e=0;_e<ee.length;_e++){let Ue=ee[_e];L?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,_e+1,0,0,Se,le,Ue.image[Z]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,_e+1,Oe,Se,le,Ue.image[Z])}}}m(y)&&d(i.TEXTURE_CUBE_MAP),X.__version=K.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function me(A,y,O,Y,K,X){let we=r.convert(O.format,O.colorSpace),re=r.convert(O.type),ve=v(O.internalFormat,we,re,O.colorSpace),be=n.get(y),ie=n.get(O);if(ie.__renderTarget=y,!be.__hasExternalTextures){let ue=Math.max(1,y.width>>X),Re=Math.max(1,y.height>>X);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?t.texImage3D(K,X,ve,ue,Re,y.depth,0,we,re,null):t.texImage2D(K,X,ve,ue,Re,0,we,re,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),ye(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,K,ie.__webglTexture,0,st(y)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,K,ie.__webglTexture,X),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Le(A,y,O){if(i.bindRenderbuffer(i.RENDERBUFFER,A),y.depthBuffer){let Y=y.depthTexture,K=Y&&Y.isDepthTexture?Y.type:null,X=x(y.stencilBuffer,K),we=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,re=st(y);ye(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,re,X,y.width,y.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,re,X,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,X,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,we,i.RENDERBUFFER,A)}else{let Y=y.textures;for(let K=0;K<Y.length;K++){let X=Y[K],we=r.convert(X.format,X.colorSpace),re=r.convert(X.type),ve=v(X.internalFormat,we,re,X.colorSpace),be=st(y);O&&ye(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,be,ve,y.width,y.height):ye(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,be,ve,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,ve,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ee(A,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Y=n.get(y.depthTexture);Y.__renderTarget=y,(!Y.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),j(y.depthTexture,0);let K=Y.__webglTexture,X=st(y);if(y.depthTexture.format===Oi)ye(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0);else if(y.depthTexture.format===ji)ye(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function Ge(A){let y=n.get(A),O=A.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==A.depthTexture){let Y=A.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),Y){let K=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,Y.removeEventListener("dispose",K)};Y.addEventListener("dispose",K),y.__depthDisposeCallback=K}y.__boundDepthTexture=Y}if(A.depthTexture&&!y.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");let Y=A.texture.mipmaps;Y&&Y.length>0?Ee(y.__webglFramebuffer[0],A):Ee(y.__webglFramebuffer,A)}else if(O){y.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[Y]),y.__webglDepthbuffer[Y]===void 0)y.__webglDepthbuffer[Y]=i.createRenderbuffer(),Le(y.__webglDepthbuffer[Y],A,!1);else{let K=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=y.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,X)}}else{let Y=A.texture.mipmaps;if(Y&&Y.length>0?t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),Le(y.__webglDepthbuffer,A,!1);else{let K=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,X)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function yt(A,y,O){let Y=n.get(A);y!==void 0&&me(Y.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&Ge(A)}function I(A){let y=A.texture,O=n.get(A),Y=n.get(y);A.addEventListener("dispose",R);let K=A.textures,X=A.isWebGLCubeRenderTarget===!0,we=K.length>1;if(we||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=y.version,o.memory.textures++),X){O.__webglFramebuffer=[];for(let re=0;re<6;re++)if(y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer[re]=[];for(let ve=0;ve<y.mipmaps.length;ve++)O.__webglFramebuffer[re][ve]=i.createFramebuffer()}else O.__webglFramebuffer[re]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer=[];for(let re=0;re<y.mipmaps.length;re++)O.__webglFramebuffer[re]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(we)for(let re=0,ve=K.length;re<ve;re++){let be=n.get(K[re]);be.__webglTexture===void 0&&(be.__webglTexture=i.createTexture(),o.memory.textures++)}if(A.samples>0&&ye(A)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let re=0;re<K.length;re++){let ve=K[re];O.__webglColorRenderbuffer[re]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[re]);let be=r.convert(ve.format,ve.colorSpace),ie=r.convert(ve.type),ue=v(ve.internalFormat,be,ie,ve.colorSpace,A.isXRRenderTarget===!0),Re=st(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Re,ue,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+re,i.RENDERBUFFER,O.__webglColorRenderbuffer[re])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),Le(O.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(X){t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),De(i.TEXTURE_CUBE_MAP,y);for(let re=0;re<6;re++)if(y.mipmaps&&y.mipmaps.length>0)for(let ve=0;ve<y.mipmaps.length;ve++)me(O.__webglFramebuffer[re][ve],A,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+re,ve);else me(O.__webglFramebuffer[re],A,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);m(y)&&d(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(we){for(let re=0,ve=K.length;re<ve;re++){let be=K[re],ie=n.get(be),ue=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ue=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ue,ie.__webglTexture),De(ue,be),me(O.__webglFramebuffer,A,be,i.COLOR_ATTACHMENT0+re,ue,0),m(be)&&d(ue)}t.unbindTexture()}else{let re=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(re=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(re,Y.__webglTexture),De(re,y),y.mipmaps&&y.mipmaps.length>0)for(let ve=0;ve<y.mipmaps.length;ve++)me(O.__webglFramebuffer[ve],A,y,i.COLOR_ATTACHMENT0,re,ve);else me(O.__webglFramebuffer,A,y,i.COLOR_ATTACHMENT0,re,0);m(y)&&d(re),t.unbindTexture()}A.depthBuffer&&Ge(A)}function it(A){let y=A.textures;for(let O=0,Y=y.length;O<Y;O++){let K=y[O];if(m(K)){let X=b(A),we=n.get(K).__webglTexture;t.bindTexture(X,we),d(X),t.unbindTexture()}}}let Ne=[],Ie=[];function xe(A){if(A.samples>0){if(ye(A)===!1){let y=A.textures,O=A.width,Y=A.height,K=i.COLOR_BUFFER_BIT,X=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,we=n.get(A),re=y.length>1;if(re)for(let be=0;be<y.length;be++)t.bindFramebuffer(i.FRAMEBUFFER,we.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,we.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer);let ve=A.texture.mipmaps;ve&&ve.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,we.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let be=0;be<y.length;be++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),re){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,we.__webglColorRenderbuffer[be]);let ie=n.get(y[be]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ie,0)}i.blitFramebuffer(0,0,O,Y,0,0,O,Y,K,i.NEAREST),l===!0&&(Ne.length=0,Ie.length=0,Ne.push(i.COLOR_ATTACHMENT0+be),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Ne.push(X),Ie.push(X),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ie)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ne))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),re)for(let be=0;be<y.length;be++){t.bindFramebuffer(i.FRAMEBUFFER,we.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.RENDERBUFFER,we.__webglColorRenderbuffer[be]);let ie=n.get(y[be]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,we.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.TEXTURE_2D,ie,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){let y=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function st(A){return Math.min(s.maxSamples,A.samples)}function ye(A){let y=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Be(A){let y=o.render.frame;h.get(A)!==y&&(h.set(A,y),A.update())}function gt(A,y){let O=A.colorSpace,Y=A.format,K=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||O!==ni&&O!==Rn&&(Xe.getTransfer(O)===Ze?(Y!==Yt||K!==hn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),y}function ut(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=B,this.setTexture2D=j,this.setTexture2DArray=H,this.setTexture3D=Q,this.setTextureCube=V,this.rebindTextures=yt,this.setupRenderTarget=I,this.updateRenderTargetMipmap=it,this.updateMultisampleRenderTarget=xe,this.setupDepthRenderbuffer=Ge,this.setupFrameBufferTexture=me,this.useMultisampledRTT=ye}function j_(i,e){function t(n,s=Rn){let r,o=Xe.getTransfer(s);if(n===hn)return i.UNSIGNED_BYTE;if(n===mo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===go)return i.UNSIGNED_SHORT_5_5_5_1;if(n===rc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===oc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===ic)return i.BYTE;if(n===sc)return i.SHORT;if(n===Xi)return i.UNSIGNED_SHORT;if(n===po)return i.INT;if(n===Wn)return i.UNSIGNED_INT;if(n===un)return i.FLOAT;if(n===qi)return i.HALF_FLOAT;if(n===ac)return i.ALPHA;if(n===cc)return i.RGB;if(n===Yt)return i.RGBA;if(n===Oi)return i.DEPTH_COMPONENT;if(n===ji)return i.DEPTH_STENCIL;if(n===lc)return i.RED;if(n===_o)return i.RED_INTEGER;if(n===hc)return i.RG;if(n===xo)return i.RG_INTEGER;if(n===yo)return i.RGBA_INTEGER;if(n===Bs||n===zs||n===ks||n===Vs)if(o===Ze)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Bs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===zs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ks)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Vs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Bs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===zs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ks)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Vs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===vo||n===Mo||n===bo||n===So)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===vo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Mo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===bo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===So)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===wo||n===Eo||n===To)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===wo||n===Eo)return o===Ze?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===To)return o===Ze?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ao||n===Co||n===Ro||n===Io||n===Po||n===Lo||n===Do||n===Uo||n===No||n===Fo||n===Oo||n===Bo||n===zo||n===ko)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ao)return o===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Co)return o===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ro)return o===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Io)return o===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Po)return o===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Lo)return o===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Do)return o===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Uo)return o===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===No)return o===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Fo)return o===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Oo)return o===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Bo)return o===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===zo)return o===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ko)return o===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Vo||n===Ho||n===Go)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Vo)return o===Ze?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ho)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Go)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Wo||n===Xo||n===qo||n===Yo)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Wo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Xo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===qo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Yo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Yi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Z_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,J_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Lc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Es(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new zt({vertexShader:Z_,fragmentShader:J_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ft(new Ps(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Dc=class extends wn{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,p=null,g=null,_=typeof XRWebGLBinding<"u",m=new Lc,d={},b=t.getContextAttributes(),v=null,x=null,C=[],E=[],R=new We,D=null,S=new bt;S.viewport=new ht;let w=new bt;w.viewport=new ht;let P=[S,w],B=new to,G=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let $=C[W];return $===void 0&&($=new Gi,C[W]=$),$.getTargetRaySpace()},this.getControllerGrip=function(W){let $=C[W];return $===void 0&&($=new Gi,C[W]=$),$.getGripSpace()},this.getHand=function(W){let $=C[W];return $===void 0&&($=new Gi,C[W]=$),$.getHandSpace()};function j(W){let $=E.indexOf(W.inputSource);if($===-1)return;let me=C[$];me!==void 0&&(me.update(W.inputSource,W.frame,c||o),me.dispatchEvent({type:W.type,data:W.inputSource}))}function H(){s.removeEventListener("select",j),s.removeEventListener("selectstart",j),s.removeEventListener("selectend",j),s.removeEventListener("squeeze",j),s.removeEventListener("squeezestart",j),s.removeEventListener("squeezeend",j),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",Q);for(let W=0;W<C.length;W++){let $=E[W];$!==null&&(E[W]=null,C[W].disconnect($))}G=null,q=null,m.reset();for(let W in d)delete d[W];e.setRenderTarget(v),p=null,f=null,u=null,s=null,x=null,Me.stop(),n.isPresenting=!1,e.setPixelRatio(D),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(W){if(s=W,s!==null){if(v=e.getRenderTarget(),s.addEventListener("select",j),s.addEventListener("selectstart",j),s.addEventListener("selectend",j),s.addEventListener("squeeze",j),s.addEventListener("squeezestart",j),s.addEventListener("squeezeend",j),s.addEventListener("end",H),s.addEventListener("inputsourceschange",Q),b.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(R),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let me=null,Le=null,Ee=null;b.depth&&(Ee=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,me=b.stencil?ji:Oi,Le=b.stencil?Yi:Wn);let Ge={colorFormat:t.RGBA8,depthFormat:Ee,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(Ge),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),x=new cn(f.textureWidth,f.textureHeight,{format:Yt,type:hn,depthTexture:new ws(f.textureWidth,f.textureHeight,Le,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let me={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,me),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new cn(p.framebufferWidth,p.framebufferHeight,{format:Yt,type:hn,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Me.setContext(s),Me.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Q(W){for(let $=0;$<W.removed.length;$++){let me=W.removed[$],Le=E.indexOf(me);Le>=0&&(E[Le]=null,C[Le].disconnect(me))}for(let $=0;$<W.added.length;$++){let me=W.added[$],Le=E.indexOf(me);if(Le===-1){for(let Ge=0;Ge<C.length;Ge++)if(Ge>=E.length){E.push(me),Le=Ge;break}else if(E[Ge]===null){E[Ge]=me,Le=Ge;break}if(Le===-1)break}let Ee=C[Le];Ee&&Ee.connect(me)}}let V=new F,ne=new F;function ae(W,$,me){V.setFromMatrixPosition($.matrixWorld),ne.setFromMatrixPosition(me.matrixWorld);let Le=V.distanceTo(ne),Ee=$.projectionMatrix.elements,Ge=me.projectionMatrix.elements,yt=Ee[14]/(Ee[10]-1),I=Ee[14]/(Ee[10]+1),it=(Ee[9]+1)/Ee[5],Ne=(Ee[9]-1)/Ee[5],Ie=(Ee[8]-1)/Ee[0],xe=(Ge[8]+1)/Ge[0],st=yt*Ie,ye=yt*xe,Be=Le/(-Ie+xe),gt=Be*-Ie;if($.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(gt),W.translateZ(Be),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),Ee[10]===-1)W.projectionMatrix.copy($.projectionMatrix),W.projectionMatrixInverse.copy($.projectionMatrixInverse);else{let ut=yt+Be,A=I+Be,y=st-gt,O=ye+(Le-gt),Y=it*I/A*ut,K=Ne*I/A*ut;W.projectionMatrix.makePerspective(y,O,Y,K,ut,A),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function de(W,$){$===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices($.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(s===null)return;let $=W.near,me=W.far;m.texture!==null&&(m.depthNear>0&&($=m.depthNear),m.depthFar>0&&(me=m.depthFar)),B.near=w.near=S.near=$,B.far=w.far=S.far=me,(G!==B.near||q!==B.far)&&(s.updateRenderState({depthNear:B.near,depthFar:B.far}),G=B.near,q=B.far),B.layers.mask=W.layers.mask|6,S.layers.mask=B.layers.mask&3,w.layers.mask=B.layers.mask&5;let Le=W.parent,Ee=B.cameras;de(B,Le);for(let Ge=0;Ge<Ee.length;Ge++)de(Ee[Ge],Le);Ee.length===2?ae(B,S,w):B.projectionMatrix.copy(S.projectionMatrix),De(W,B,Le)};function De(W,$,me){me===null?W.matrix.copy($.matrixWorld):(W.matrix.copy(me.matrixWorld),W.matrix.invert(),W.matrix.multiply($.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy($.projectionMatrix),W.projectionMatrixInverse.copy($.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Bi*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(W){l=W,f!==null&&(f.fixedFoveation=W),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=W)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(B)},this.getCameraTexture=function(W){return d[W]};let je=null;function $e(W,$){if(h=$.getViewerPose(c||o),g=$,h!==null){let me=h.views;p!==null&&(e.setRenderTargetFramebuffer(x,p.framebuffer),e.setRenderTarget(x));let Le=!1;me.length!==B.cameras.length&&(B.cameras.length=0,Le=!0);for(let I=0;I<me.length;I++){let it=me[I],Ne=null;if(p!==null)Ne=p.getViewport(it);else{let xe=u.getViewSubImage(f,it);Ne=xe.viewport,I===0&&(e.setRenderTargetTextures(x,xe.colorTexture,xe.depthStencilTexture),e.setRenderTarget(x))}let Ie=P[I];Ie===void 0&&(Ie=new bt,Ie.layers.enable(I),Ie.viewport=new ht,P[I]=Ie),Ie.matrix.fromArray(it.transform.matrix),Ie.matrix.decompose(Ie.position,Ie.quaternion,Ie.scale),Ie.projectionMatrix.fromArray(it.projectionMatrix),Ie.projectionMatrixInverse.copy(Ie.projectionMatrix).invert(),Ie.viewport.set(Ne.x,Ne.y,Ne.width,Ne.height),I===0&&(B.matrix.copy(Ie.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Le===!0&&B.cameras.push(Ie)}let Ee=s.enabledFeatures;if(Ee&&Ee.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){u=n.getBinding();let I=u.getDepthInformation(me[0]);I&&I.isValid&&I.texture&&m.init(I,s.renderState)}if(Ee&&Ee.includes("camera-access")&&_){e.state.unbindTexture(),u=n.getBinding();for(let I=0;I<me.length;I++){let it=me[I].camera;if(it){let Ne=d[it];Ne||(Ne=new Es,d[it]=Ne);let Ie=u.getCameraImage(it);Ne.sourceTexture=Ie}}}}for(let me=0;me<C.length;me++){let Le=E[me],Ee=C[me];Le!==null&&Ee!==void 0&&Ee.update(Le,$,c||o)}je&&je(W,$),$.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:$}),g=null}let Me=new eu;Me.setAnimationLoop($e),this.setAnimationLoop=function(W){je=W},this.dispose=function(){}}},fi=new tn,$_=new nt;function K_(i,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,gc(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,b,v,x){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),u(m,d)):d.isMeshPhongMaterial?(r(m,d),h(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,x)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),_(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,b,v):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Ct&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Ct&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let b=e.get(d),v=b.envMap,x=b.envMapRotation;v&&(m.envMap.value=v,fi.copy(x),fi.x*=-1,fi.y*=-1,fi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(fi.y*=-1,fi.z*=-1),m.envMapRotation.value.setFromMatrix4($_.makeRotationFromEuler(fi)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,b,v){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*b,m.scale.value=v*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,b){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Ct&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){let b=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Q_(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,v){let x=v.program;n.uniformBlockBinding(b,x)}function c(b,v){let x=s[b.id];x===void 0&&(g(b),x=h(b),s[b.id]=x,b.addEventListener("dispose",m));let C=v.program;n.updateUBOMapping(b,C);let E=e.render.frame;r[b.id]!==E&&(f(b),r[b.id]=E)}function h(b){let v=u();b.__bindingPointIndex=v;let x=i.createBuffer(),C=b.__size,E=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,C,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,x),x}function u(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){let v=s[b.id],x=b.uniforms,C=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let E=0,R=x.length;E<R;E++){let D=Array.isArray(x[E])?x[E]:[x[E]];for(let S=0,w=D.length;S<w;S++){let P=D[S];if(p(P,E,S,C)===!0){let B=P.__offset,G=Array.isArray(P.value)?P.value:[P.value],q=0;for(let j=0;j<G.length;j++){let H=G[j],Q=_(H);typeof H=="number"||typeof H=="boolean"?(P.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,B+q,P.__data)):H.isMatrix3?(P.__data[0]=H.elements[0],P.__data[1]=H.elements[1],P.__data[2]=H.elements[2],P.__data[3]=0,P.__data[4]=H.elements[3],P.__data[5]=H.elements[4],P.__data[6]=H.elements[5],P.__data[7]=0,P.__data[8]=H.elements[6],P.__data[9]=H.elements[7],P.__data[10]=H.elements[8],P.__data[11]=0):(H.toArray(P.__data,q),q+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,B,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(b,v,x,C){let E=b.value,R=v+"_"+x;if(C[R]===void 0)return typeof E=="number"||typeof E=="boolean"?C[R]=E:C[R]=E.clone(),!0;{let D=C[R];if(typeof E=="number"||typeof E=="boolean"){if(D!==E)return C[R]=E,!0}else if(D.equals(E)===!1)return D.copy(E),!0}return!1}function g(b){let v=b.uniforms,x=0,C=16;for(let R=0,D=v.length;R<D;R++){let S=Array.isArray(v[R])?v[R]:[v[R]];for(let w=0,P=S.length;w<P;w++){let B=S[w],G=Array.isArray(B.value)?B.value:[B.value];for(let q=0,j=G.length;q<j;q++){let H=G[q],Q=_(H),V=x%C,ne=V%Q.boundary,ae=V+ne;x+=ne,ae!==0&&C-ae<Q.storage&&(x+=C-ae),B.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=x,x+=Q.storage}}}let E=x%C;return E>0&&(x+=C-E),b.__size=x,b.__cache={},this}function _(b){let v={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(v.boundary=4,v.storage=4):b.isVector2?(v.boundary=8,v.storage=8):b.isVector3||b.isColor?(v.boundary=16,v.storage=12):b.isVector4?(v.boundary=16,v.storage=16):b.isMatrix3?(v.boundary=48,v.storage=48):b.isMatrix4?(v.boundary=64,v.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),v}function m(b){let v=b.target;v.removeEventListener("dispose",m);let x=o.indexOf(v.__bindingPointIndex);o.splice(x,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function d(){for(let b in s)i.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:l,update:c,dispose:d}}var es=class{constructor(e={}){let{canvas:t=bh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let g=new Uint32Array(4),_=new Int32Array(4),m=null,d=null,b=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Cn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let x=this,C=!1;this._outputColorSpace=xt;let E=0,R=0,D=null,S=-1,w=null,P=new ht,B=new ht,G=null,q=new ke(0),j=0,H=t.width,Q=t.height,V=1,ne=null,ae=null,de=new ht(0,0,H,Q),De=new ht(0,0,H,Q),je=!1,$e=new Ss,Me=!1,W=!1,$=new nt,me=new F,Le=new ht,Ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ge=!1;function yt(){return D===null?V:1}let I=n;function it(M,U){return t.getContext(M,U)}try{let M={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",oe,!1),t.addEventListener("webglcontextrestored",pe,!1),t.addEventListener("webglcontextcreationerror",ee,!1),I===null){let U="webgl2";if(I=it(U,M),I===null)throw it(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Ne,Ie,xe,st,ye,Be,gt,ut,A,y,O,Y,K,X,we,re,ve,be,ie,ue,Re,Se,le,Oe;function L(){Ne=new _g(I),Ne.init(),Se=new j_(I,Ne),Ie=new hg(I,Ne,e,Se),xe=new q_(I,Ne),Ie.reversedDepthBuffer&&f&&xe.buffers.depth.setReversed(!0),st=new vg(I),ye=new D_,Be=new Y_(I,Ne,xe,ye,Ie,Se,st),gt=new dg(x),ut=new gg(x),A=new Tf(I),le=new cg(I,A),y=new xg(I,A,st,le),O=new bg(I,y,A,st),ie=new Mg(I,Ie,Be),re=new ug(ye),Y=new L_(x,gt,ut,Ne,Ie,le,re),K=new K_(x,ye),X=new N_,we=new V_(Ne),be=new ag(x,gt,ut,xe,O,p,l),ve=new W_(x,O,Ie),Oe=new Q_(I,st,Ie,xe),ue=new lg(I,Ne,st),Re=new yg(I,Ne,st),st.programs=Y.programs,x.capabilities=Ie,x.extensions=Ne,x.properties=ye,x.renderLists=X,x.shadowMap=ve,x.state=xe,x.info=st}L();let se=new Dc(x,I);this.xr=se,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let M=Ne.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=Ne.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(M){M!==void 0&&(V=M,this.setSize(H,Q,!1))},this.getSize=function(M){return M.set(H,Q)},this.setSize=function(M,U,z=!0){if(se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=M,Q=U,t.width=Math.floor(M*V),t.height=Math.floor(U*V),z===!0&&(t.style.width=M+"px",t.style.height=U+"px"),this.setViewport(0,0,M,U)},this.getDrawingBufferSize=function(M){return M.set(H*V,Q*V).floor()},this.setDrawingBufferSize=function(M,U,z){H=M,Q=U,V=z,t.width=Math.floor(M*z),t.height=Math.floor(U*z),this.setViewport(0,0,M,U)},this.getCurrentViewport=function(M){return M.copy(P)},this.getViewport=function(M){return M.copy(de)},this.setViewport=function(M,U,z,k){M.isVector4?de.set(M.x,M.y,M.z,M.w):de.set(M,U,z,k),xe.viewport(P.copy(de).multiplyScalar(V).round())},this.getScissor=function(M){return M.copy(De)},this.setScissor=function(M,U,z,k){M.isVector4?De.set(M.x,M.y,M.z,M.w):De.set(M,U,z,k),xe.scissor(B.copy(De).multiplyScalar(V).round())},this.getScissorTest=function(){return je},this.setScissorTest=function(M){xe.setScissorTest(je=M)},this.setOpaqueSort=function(M){ne=M},this.setTransparentSort=function(M){ae=M},this.getClearColor=function(M){return M.copy(be.getClearColor())},this.setClearColor=function(){be.setClearColor(...arguments)},this.getClearAlpha=function(){return be.getClearAlpha()},this.setClearAlpha=function(){be.setClearAlpha(...arguments)},this.clear=function(M=!0,U=!0,z=!0){let k=0;if(M){let N=!1;if(D!==null){let te=D.texture.format;N=te===yo||te===xo||te===_o}if(N){let te=D.texture.type,he=te===hn||te===Wn||te===Xi||te===Yi||te===mo||te===go,ge=be.getClearColor(),fe=be.getClearAlpha(),Ce=ge.r,Pe=ge.g,Te=ge.b;he?(g[0]=Ce,g[1]=Pe,g[2]=Te,g[3]=fe,I.clearBufferuiv(I.COLOR,0,g)):(_[0]=Ce,_[1]=Pe,_[2]=Te,_[3]=fe,I.clearBufferiv(I.COLOR,0,_))}else k|=I.COLOR_BUFFER_BIT}U&&(k|=I.DEPTH_BUFFER_BIT),z&&(k|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",oe,!1),t.removeEventListener("webglcontextrestored",pe,!1),t.removeEventListener("webglcontextcreationerror",ee,!1),be.dispose(),X.dispose(),we.dispose(),ye.dispose(),gt.dispose(),ut.dispose(),O.dispose(),le.dispose(),Oe.dispose(),Y.dispose(),se.dispose(),se.removeEventListener("sessionstart",on),se.removeEventListener("sessionend",tl),Yn.stop()};function oe(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function pe(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;let M=st.autoReset,U=ve.enabled,z=ve.autoUpdate,k=ve.needsUpdate,N=ve.type;L(),st.autoReset=M,ve.enabled=U,ve.autoUpdate=z,ve.needsUpdate=k,ve.type=N}function ee(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Z(M){let U=M.target;U.removeEventListener("dispose",Z),_e(U)}function _e(M){Ue(M),ye.remove(M)}function Ue(M){let U=ye.get(M).programs;U!==void 0&&(U.forEach(function(z){Y.releaseProgram(z)}),M.isShaderMaterial&&Y.releaseShaderCache(M))}this.renderBufferDirect=function(M,U,z,k,N,te){U===null&&(U=Ee);let he=N.isMesh&&N.matrixWorld.determinant()<0,ge=cd(M,U,z,k,N);xe.setMaterial(k,he);let fe=z.index,Ce=1;if(k.wireframe===!0){if(fe=y.getWireframeAttribute(z),fe===void 0)return;Ce=2}let Pe=z.drawRange,Te=z.attributes.position,Ve=Pe.start*Ce,Je=(Pe.start+Pe.count)*Ce;te!==null&&(Ve=Math.max(Ve,te.start*Ce),Je=Math.min(Je,(te.start+te.count)*Ce)),fe!==null?(Ve=Math.max(Ve,0),Je=Math.min(Je,fe.count)):Te!=null&&(Ve=Math.max(Ve,0),Je=Math.min(Je,Te.count));let lt=Je-Ve;if(lt<0||lt===1/0)return;le.setup(N,k,ge,z,fe);let et,Ke=ue;if(fe!==null&&(et=A.get(fe),Ke=Re,Ke.setIndex(et)),N.isMesh)k.wireframe===!0?(xe.setLineWidth(k.wireframeLinewidth*yt()),Ke.setMode(I.LINES)):Ke.setMode(I.TRIANGLES);else if(N.isLine){let Ae=k.linewidth;Ae===void 0&&(Ae=1),xe.setLineWidth(Ae*yt()),N.isLineSegments?Ke.setMode(I.LINES):N.isLineLoop?Ke.setMode(I.LINE_LOOP):Ke.setMode(I.LINE_STRIP)}else N.isPoints?Ke.setMode(I.POINTS):N.isSprite&&Ke.setMode(I.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)zi("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ke.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Ne.get("WEBGL_multi_draw"))Ke.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{let Ae=N._multiDrawStarts,rt=N._multiDrawCounts,qe=N._multiDrawCount,Lt=fe?A.get(fe).bytesPerElement:1,Mi=ye.get(k).currentProgram.getUniforms();for(let Dt=0;Dt<qe;Dt++)Mi.setValue(I,"_gl_DrawID",Dt),Ke.render(Ae[Dt]/Lt,rt[Dt])}else if(N.isInstancedMesh)Ke.renderInstances(Ve,lt,N.count);else if(z.isInstancedBufferGeometry){let Ae=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,rt=Math.min(z.instanceCount,Ae);Ke.renderInstances(Ve,lt,rt)}else Ke.render(Ve,lt)};function Qe(M,U,z){M.transparent===!0&&M.side===Vt&&M.forceSinglePass===!1?(M.side=Ct,M.needsUpdate=!0,nr(M,U,z),M.side=Qt,M.needsUpdate=!0,nr(M,U,z),M.side=Vt):nr(M,U,z)}this.compile=function(M,U,z=null){z===null&&(z=M),d=we.get(z),d.init(U),v.push(d),z.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(d.pushLight(N),N.castShadow&&d.pushShadow(N))}),M!==z&&M.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(d.pushLight(N),N.castShadow&&d.pushShadow(N))}),d.setupLights();let k=new Set;return M.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;let te=N.material;if(te)if(Array.isArray(te))for(let he=0;he<te.length;he++){let ge=te[he];Qe(ge,z,N),k.add(ge)}else Qe(te,z,N),k.add(te)}),d=v.pop(),k},this.compileAsync=function(M,U,z=null){let k=this.compile(M,U,z);return new Promise(N=>{function te(){if(k.forEach(function(he){ye.get(he).currentProgram.isReady()&&k.delete(he)}),k.size===0){N(M);return}setTimeout(te,10)}Ne.get("KHR_parallel_shader_compile")!==null?te():setTimeout(te,10)})};let Ye=null;function mn(M){Ye&&Ye(M)}function on(){Yn.stop()}function tl(){Yn.start()}let Yn=new eu;Yn.setAnimationLoop(mn),typeof self<"u"&&Yn.setContext(self),this.setAnimationLoop=function(M){Ye=M,se.setAnimationLoop(M),M===null?Yn.stop():Yn.start()},se.addEventListener("sessionstart",on),se.addEventListener("sessionend",tl),this.render=function(M,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(se.cameraAutoUpdate===!0&&se.updateCamera(U),U=se.getCamera()),M.isScene===!0&&M.onBeforeRender(x,M,U,D),d=we.get(M,v.length),d.init(U),v.push(d),$.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),$e.setFromProjectionMatrix($,Kt,U.reversedDepth),W=this.localClippingEnabled,Me=re.init(this.clippingPlanes,W),m=X.get(M,b.length),m.init(),b.push(m),se.enabled===!0&&se.isPresenting===!0){let te=x.xr.getDepthSensingMesh();te!==null&&pa(te,U,-1/0,x.sortObjects)}pa(M,U,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(ne,ae),Ge=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,Ge&&be.addToRenderList(m,M),this.info.render.frame++,Me===!0&&re.beginShadows();let z=d.state.shadowsArray;ve.render(z,M,U),Me===!0&&re.endShadows(),this.info.autoReset===!0&&this.info.reset();let k=m.opaque,N=m.transmissive;if(d.setupLights(),U.isArrayCamera){let te=U.cameras;if(N.length>0)for(let he=0,ge=te.length;he<ge;he++){let fe=te[he];il(k,N,M,fe)}Ge&&be.render(M);for(let he=0,ge=te.length;he<ge;he++){let fe=te[he];nl(m,M,fe,fe.viewport)}}else N.length>0&&il(k,N,M,U),Ge&&be.render(M),nl(m,M,U);D!==null&&R===0&&(Be.updateMultisampleRenderTarget(D),Be.updateRenderTargetMipmap(D)),M.isScene===!0&&M.onAfterRender(x,M,U),le.resetDefaultState(),S=-1,w=null,v.pop(),v.length>0?(d=v[v.length-1],Me===!0&&re.setGlobalState(x.clippingPlanes,d.state.camera)):d=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function pa(M,U,z,k){if(M.visible===!1)return;if(M.layers.test(U.layers)){if(M.isGroup)z=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(U);else if(M.isLight)d.pushLight(M),M.castShadow&&d.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||$e.intersectsSprite(M)){k&&Le.setFromMatrixPosition(M.matrixWorld).applyMatrix4($);let he=O.update(M),ge=M.material;ge.visible&&m.push(M,he,ge,z,Le.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||$e.intersectsObject(M))){let he=O.update(M),ge=M.material;if(k&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Le.copy(M.boundingSphere.center)):(he.boundingSphere===null&&he.computeBoundingSphere(),Le.copy(he.boundingSphere.center)),Le.applyMatrix4(M.matrixWorld).applyMatrix4($)),Array.isArray(ge)){let fe=he.groups;for(let Ce=0,Pe=fe.length;Ce<Pe;Ce++){let Te=fe[Ce],Ve=ge[Te.materialIndex];Ve&&Ve.visible&&m.push(M,he,Ve,z,Le.z,Te)}}else ge.visible&&m.push(M,he,ge,z,Le.z,null)}}let te=M.children;for(let he=0,ge=te.length;he<ge;he++)pa(te[he],U,z,k)}function nl(M,U,z,k){let N=M.opaque,te=M.transmissive,he=M.transparent;d.setupLightsView(z),Me===!0&&re.setGlobalState(x.clippingPlanes,z),k&&xe.viewport(P.copy(k)),N.length>0&&tr(N,U,z),te.length>0&&tr(te,U,z),he.length>0&&tr(he,U,z),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function il(M,U,z,k){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[k.id]===void 0&&(d.state.transmissionRenderTarget[k.id]=new cn(1,1,{generateMipmaps:!0,type:Ne.has("EXT_color_buffer_half_float")||Ne.has("EXT_color_buffer_float")?qi:hn,minFilter:Gn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Xe.workingColorSpace}));let te=d.state.transmissionRenderTarget[k.id],he=k.viewport||P;te.setSize(he.z*x.transmissionResolutionScale,he.w*x.transmissionResolutionScale);let ge=x.getRenderTarget(),fe=x.getActiveCubeFace(),Ce=x.getActiveMipmapLevel();x.setRenderTarget(te),x.getClearColor(q),j=x.getClearAlpha(),j<1&&x.setClearColor(16777215,.5),x.clear(),Ge&&be.render(z);let Pe=x.toneMapping;x.toneMapping=Cn;let Te=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),d.setupLightsView(k),Me===!0&&re.setGlobalState(x.clippingPlanes,k),tr(M,z,k),Be.updateMultisampleRenderTarget(te),Be.updateRenderTargetMipmap(te),Ne.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let Je=0,lt=U.length;Je<lt;Je++){let et=U[Je],Ke=et.object,Ae=et.geometry,rt=et.material,qe=et.group;if(rt.side===Vt&&Ke.layers.test(k.layers)){let Lt=rt.side;rt.side=Ct,rt.needsUpdate=!0,sl(Ke,z,k,Ae,rt,qe),rt.side=Lt,rt.needsUpdate=!0,Ve=!0}}Ve===!0&&(Be.updateMultisampleRenderTarget(te),Be.updateRenderTargetMipmap(te))}x.setRenderTarget(ge,fe,Ce),x.setClearColor(q,j),Te!==void 0&&(k.viewport=Te),x.toneMapping=Pe}function tr(M,U,z){let k=U.isScene===!0?U.overrideMaterial:null;for(let N=0,te=M.length;N<te;N++){let he=M[N],ge=he.object,fe=he.geometry,Ce=he.group,Pe=he.material;Pe.allowOverride===!0&&k!==null&&(Pe=k),ge.layers.test(z.layers)&&sl(ge,U,z,fe,Pe,Ce)}}function sl(M,U,z,k,N,te){M.onBeforeRender(x,U,z,k,N,te),M.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),N.onBeforeRender(x,U,z,k,M,te),N.transparent===!0&&N.side===Vt&&N.forceSinglePass===!1?(N.side=Ct,N.needsUpdate=!0,x.renderBufferDirect(z,U,k,N,M,te),N.side=Qt,N.needsUpdate=!0,x.renderBufferDirect(z,U,k,N,M,te),N.side=Vt):x.renderBufferDirect(z,U,k,N,M,te),M.onAfterRender(x,U,z,k,N,te)}function nr(M,U,z){U.isScene!==!0&&(U=Ee);let k=ye.get(M),N=d.state.lights,te=d.state.shadowsArray,he=N.state.version,ge=Y.getParameters(M,N.state,te,U,z),fe=Y.getProgramCacheKey(ge),Ce=k.programs;k.environment=M.isMeshStandardMaterial?U.environment:null,k.fog=U.fog,k.envMap=(M.isMeshStandardMaterial?ut:gt).get(M.envMap||k.environment),k.envMapRotation=k.environment!==null&&M.envMap===null?U.environmentRotation:M.envMapRotation,Ce===void 0&&(M.addEventListener("dispose",Z),Ce=new Map,k.programs=Ce);let Pe=Ce.get(fe);if(Pe!==void 0){if(k.currentProgram===Pe&&k.lightsStateVersion===he)return ol(M,ge),Pe}else ge.uniforms=Y.getUniforms(M),M.onBeforeCompile(ge,x),Pe=Y.acquireProgram(ge,fe),Ce.set(fe,Pe),k.uniforms=ge.uniforms;let Te=k.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Te.clippingPlanes=re.uniform),ol(M,ge),k.needsLights=hd(M),k.lightsStateVersion=he,k.needsLights&&(Te.ambientLightColor.value=N.state.ambient,Te.lightProbe.value=N.state.probe,Te.directionalLights.value=N.state.directional,Te.directionalLightShadows.value=N.state.directionalShadow,Te.spotLights.value=N.state.spot,Te.spotLightShadows.value=N.state.spotShadow,Te.rectAreaLights.value=N.state.rectArea,Te.ltc_1.value=N.state.rectAreaLTC1,Te.ltc_2.value=N.state.rectAreaLTC2,Te.pointLights.value=N.state.point,Te.pointLightShadows.value=N.state.pointShadow,Te.hemisphereLights.value=N.state.hemi,Te.directionalShadowMap.value=N.state.directionalShadowMap,Te.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Te.spotShadowMap.value=N.state.spotShadowMap,Te.spotLightMatrix.value=N.state.spotLightMatrix,Te.spotLightMap.value=N.state.spotLightMap,Te.pointShadowMap.value=N.state.pointShadowMap,Te.pointShadowMatrix.value=N.state.pointShadowMatrix),k.currentProgram=Pe,k.uniformsList=null,Pe}function rl(M){if(M.uniformsList===null){let U=M.currentProgram.getUniforms();M.uniformsList=Qi.seqWithValue(U.seq,M.uniforms)}return M.uniformsList}function ol(M,U){let z=ye.get(M);z.outputColorSpace=U.outputColorSpace,z.batching=U.batching,z.batchingColor=U.batchingColor,z.instancing=U.instancing,z.instancingColor=U.instancingColor,z.instancingMorph=U.instancingMorph,z.skinning=U.skinning,z.morphTargets=U.morphTargets,z.morphNormals=U.morphNormals,z.morphColors=U.morphColors,z.morphTargetsCount=U.morphTargetsCount,z.numClippingPlanes=U.numClippingPlanes,z.numIntersection=U.numClipIntersection,z.vertexAlphas=U.vertexAlphas,z.vertexTangents=U.vertexTangents,z.toneMapping=U.toneMapping}function cd(M,U,z,k,N){U.isScene!==!0&&(U=Ee),Be.resetTextureUnits();let te=U.fog,he=k.isMeshStandardMaterial?U.environment:null,ge=D===null?x.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:ni,fe=(k.isMeshStandardMaterial?ut:gt).get(k.envMap||he),Ce=k.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Pe=!!z.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Te=!!z.morphAttributes.position,Ve=!!z.morphAttributes.normal,Je=!!z.morphAttributes.color,lt=Cn;k.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(lt=x.toneMapping);let et=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Ke=et!==void 0?et.length:0,Ae=ye.get(k),rt=d.state.lights;if(Me===!0&&(W===!0||M!==w)){let wt=M===w&&k.id===S;re.setState(k,M,wt)}let qe=!1;k.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==rt.state.version||Ae.outputColorSpace!==ge||N.isBatchedMesh&&Ae.batching===!1||!N.isBatchedMesh&&Ae.batching===!0||N.isBatchedMesh&&Ae.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Ae.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Ae.instancing===!1||!N.isInstancedMesh&&Ae.instancing===!0||N.isSkinnedMesh&&Ae.skinning===!1||!N.isSkinnedMesh&&Ae.skinning===!0||N.isInstancedMesh&&Ae.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Ae.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Ae.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Ae.instancingMorph===!1&&N.morphTexture!==null||Ae.envMap!==fe||k.fog===!0&&Ae.fog!==te||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==re.numPlanes||Ae.numIntersection!==re.numIntersection)||Ae.vertexAlphas!==Ce||Ae.vertexTangents!==Pe||Ae.morphTargets!==Te||Ae.morphNormals!==Ve||Ae.morphColors!==Je||Ae.toneMapping!==lt||Ae.morphTargetsCount!==Ke)&&(qe=!0):(qe=!0,Ae.__version=k.version);let Lt=Ae.currentProgram;qe===!0&&(Lt=nr(k,U,N));let Mi=!1,Dt=!1,os=!1,ot=Lt.getUniforms(),Ht=Ae.uniforms;if(xe.useProgram(Lt.program)&&(Mi=!0,Dt=!0,os=!0),k.id!==S&&(S=k.id,Dt=!0),Mi||w!==M){xe.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),ot.setValue(I,"projectionMatrix",M.projectionMatrix),ot.setValue(I,"viewMatrix",M.matrixWorldInverse);let It=ot.map.cameraPosition;It!==void 0&&It.setValue(I,me.setFromMatrixPosition(M.matrixWorld)),Ie.logarithmicDepthBuffer&&ot.setValue(I,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&ot.setValue(I,"isOrthographic",M.isOrthographicCamera===!0),w!==M&&(w=M,Dt=!0,os=!0)}if(N.isSkinnedMesh){ot.setOptional(I,N,"bindMatrix"),ot.setOptional(I,N,"bindMatrixInverse");let wt=N.skeleton;wt&&(wt.boneTexture===null&&wt.computeBoneTexture(),ot.setValue(I,"boneTexture",wt.boneTexture,Be))}N.isBatchedMesh&&(ot.setOptional(I,N,"batchingTexture"),ot.setValue(I,"batchingTexture",N._matricesTexture,Be),ot.setOptional(I,N,"batchingIdTexture"),ot.setValue(I,"batchingIdTexture",N._indirectTexture,Be),ot.setOptional(I,N,"batchingColorTexture"),N._colorsTexture!==null&&ot.setValue(I,"batchingColorTexture",N._colorsTexture,Be));let Gt=z.morphAttributes;if((Gt.position!==void 0||Gt.normal!==void 0||Gt.color!==void 0)&&ie.update(N,z,Lt),(Dt||Ae.receiveShadow!==N.receiveShadow)&&(Ae.receiveShadow=N.receiveShadow,ot.setValue(I,"receiveShadow",N.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(Ht.envMap.value=fe,Ht.flipEnvMap.value=fe.isCubeTexture&&fe.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&U.environment!==null&&(Ht.envMapIntensity.value=U.environmentIntensity),Dt&&(ot.setValue(I,"toneMappingExposure",x.toneMappingExposure),Ae.needsLights&&ld(Ht,os),te&&k.fog===!0&&K.refreshFogUniforms(Ht,te),K.refreshMaterialUniforms(Ht,k,V,Q,d.state.transmissionRenderTarget[M.id]),Qi.upload(I,rl(Ae),Ht,Be)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Qi.upload(I,rl(Ae),Ht,Be),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&ot.setValue(I,"center",N.center),ot.setValue(I,"modelViewMatrix",N.modelViewMatrix),ot.setValue(I,"normalMatrix",N.normalMatrix),ot.setValue(I,"modelMatrix",N.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){let wt=k.uniformsGroups;for(let It=0,ma=wt.length;It<ma;It++){let jn=wt[It];Oe.update(jn,Lt),Oe.bind(jn,Lt)}}return Lt}function ld(M,U){M.ambientLightColor.needsUpdate=U,M.lightProbe.needsUpdate=U,M.directionalLights.needsUpdate=U,M.directionalLightShadows.needsUpdate=U,M.pointLights.needsUpdate=U,M.pointLightShadows.needsUpdate=U,M.spotLights.needsUpdate=U,M.spotLightShadows.needsUpdate=U,M.rectAreaLights.needsUpdate=U,M.hemisphereLights.needsUpdate=U}function hd(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(M,U,z){let k=ye.get(M);k.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),ye.get(M.texture).__webglTexture=U,ye.get(M.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:z,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,U){let z=ye.get(M);z.__webglFramebuffer=U,z.__useDefaultFramebuffer=U===void 0};let ud=I.createFramebuffer();this.setRenderTarget=function(M,U=0,z=0){D=M,E=U,R=z;let k=!0,N=null,te=!1,he=!1;if(M){let fe=ye.get(M);if(fe.__useDefaultFramebuffer!==void 0)xe.bindFramebuffer(I.FRAMEBUFFER,null),k=!1;else if(fe.__webglFramebuffer===void 0)Be.setupRenderTarget(M);else if(fe.__hasExternalTextures)Be.rebindTextures(M,ye.get(M.texture).__webglTexture,ye.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let Te=M.depthTexture;if(fe.__boundDepthTexture!==Te){if(Te!==null&&ye.has(Te)&&(M.width!==Te.image.width||M.height!==Te.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Be.setupDepthRenderbuffer(M)}}let Ce=M.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture||Ce.isCompressedArrayTexture)&&(he=!0);let Pe=ye.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Pe[U])?N=Pe[U][z]:N=Pe[U],te=!0):M.samples>0&&Be.useMultisampledRTT(M)===!1?N=ye.get(M).__webglMultisampledFramebuffer:Array.isArray(Pe)?N=Pe[z]:N=Pe,P.copy(M.viewport),B.copy(M.scissor),G=M.scissorTest}else P.copy(de).multiplyScalar(V).floor(),B.copy(De).multiplyScalar(V).floor(),G=je;if(z!==0&&(N=ud),xe.bindFramebuffer(I.FRAMEBUFFER,N)&&k&&xe.drawBuffers(M,N),xe.viewport(P),xe.scissor(B),xe.setScissorTest(G),te){let fe=ye.get(M.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+U,fe.__webglTexture,z)}else if(he){let fe=U;for(let Ce=0;Ce<M.textures.length;Ce++){let Pe=ye.get(M.textures[Ce]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Ce,Pe.__webglTexture,z,fe)}}else if(M!==null&&z!==0){let fe=ye.get(M.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,fe.__webglTexture,z)}S=-1},this.readRenderTargetPixels=function(M,U,z,k,N,te,he,ge=0){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let fe=ye.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&he!==void 0&&(fe=fe[he]),fe){xe.bindFramebuffer(I.FRAMEBUFFER,fe);try{let Ce=M.textures[ge],Pe=Ce.format,Te=Ce.type;if(!Ie.textureFormatReadable(Pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ie.textureTypeReadable(Te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=M.width-k&&z>=0&&z<=M.height-N&&(M.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+ge),I.readPixels(U,z,k,N,Se.convert(Pe),Se.convert(Te),te))}finally{let Ce=D!==null?ye.get(D).__webglFramebuffer:null;xe.bindFramebuffer(I.FRAMEBUFFER,Ce)}}},this.readRenderTargetPixelsAsync=async function(M,U,z,k,N,te,he,ge=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let fe=ye.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&he!==void 0&&(fe=fe[he]),fe)if(U>=0&&U<=M.width-k&&z>=0&&z<=M.height-N){xe.bindFramebuffer(I.FRAMEBUFFER,fe);let Ce=M.textures[ge],Pe=Ce.format,Te=Ce.type;if(!Ie.textureFormatReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ie.textureTypeReadable(Te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ve=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Ve),I.bufferData(I.PIXEL_PACK_BUFFER,te.byteLength,I.STREAM_READ),M.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+ge),I.readPixels(U,z,k,N,Se.convert(Pe),Se.convert(Te),0);let Je=D!==null?ye.get(D).__webglFramebuffer:null;xe.bindFramebuffer(I.FRAMEBUFFER,Je);let lt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Sh(I,lt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Ve),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,te),I.deleteBuffer(Ve),I.deleteSync(lt),te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,U=null,z=0){let k=Math.pow(2,-z),N=Math.floor(M.image.width*k),te=Math.floor(M.image.height*k),he=U!==null?U.x:0,ge=U!==null?U.y:0;Be.setTexture2D(M,0),I.copyTexSubImage2D(I.TEXTURE_2D,z,0,0,he,ge,N,te),xe.unbindTexture()};let dd=I.createFramebuffer(),fd=I.createFramebuffer();this.copyTextureToTexture=function(M,U,z=null,k=null,N=0,te=null){te===null&&(N!==0?(zi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),te=N,N=0):te=0);let he,ge,fe,Ce,Pe,Te,Ve,Je,lt,et=M.isCompressedTexture?M.mipmaps[te]:M.image;if(z!==null)he=z.max.x-z.min.x,ge=z.max.y-z.min.y,fe=z.isBox3?z.max.z-z.min.z:1,Ce=z.min.x,Pe=z.min.y,Te=z.isBox3?z.min.z:0;else{let Gt=Math.pow(2,-N);he=Math.floor(et.width*Gt),ge=Math.floor(et.height*Gt),M.isDataArrayTexture?fe=et.depth:M.isData3DTexture?fe=Math.floor(et.depth*Gt):fe=1,Ce=0,Pe=0,Te=0}k!==null?(Ve=k.x,Je=k.y,lt=k.z):(Ve=0,Je=0,lt=0);let Ke=Se.convert(U.format),Ae=Se.convert(U.type),rt;U.isData3DTexture?(Be.setTexture3D(U,0),rt=I.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Be.setTexture2DArray(U,0),rt=I.TEXTURE_2D_ARRAY):(Be.setTexture2D(U,0),rt=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,U.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,U.unpackAlignment);let qe=I.getParameter(I.UNPACK_ROW_LENGTH),Lt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Mi=I.getParameter(I.UNPACK_SKIP_PIXELS),Dt=I.getParameter(I.UNPACK_SKIP_ROWS),os=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,et.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,et.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ce),I.pixelStorei(I.UNPACK_SKIP_ROWS,Pe),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Te);let ot=M.isDataArrayTexture||M.isData3DTexture,Ht=U.isDataArrayTexture||U.isData3DTexture;if(M.isDepthTexture){let Gt=ye.get(M),wt=ye.get(U),It=ye.get(Gt.__renderTarget),ma=ye.get(wt.__renderTarget);xe.bindFramebuffer(I.READ_FRAMEBUFFER,It.__webglFramebuffer),xe.bindFramebuffer(I.DRAW_FRAMEBUFFER,ma.__webglFramebuffer);for(let jn=0;jn<fe;jn++)ot&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,ye.get(M).__webglTexture,N,Te+jn),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,ye.get(U).__webglTexture,te,lt+jn)),I.blitFramebuffer(Ce,Pe,he,ge,Ve,Je,he,ge,I.DEPTH_BUFFER_BIT,I.NEAREST);xe.bindFramebuffer(I.READ_FRAMEBUFFER,null),xe.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(N!==0||M.isRenderTargetTexture||ye.has(M)){let Gt=ye.get(M),wt=ye.get(U);xe.bindFramebuffer(I.READ_FRAMEBUFFER,dd),xe.bindFramebuffer(I.DRAW_FRAMEBUFFER,fd);for(let It=0;It<fe;It++)ot?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Gt.__webglTexture,N,Te+It):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Gt.__webglTexture,N),Ht?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,wt.__webglTexture,te,lt+It):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,wt.__webglTexture,te),N!==0?I.blitFramebuffer(Ce,Pe,he,ge,Ve,Je,he,ge,I.COLOR_BUFFER_BIT,I.NEAREST):Ht?I.copyTexSubImage3D(rt,te,Ve,Je,lt+It,Ce,Pe,he,ge):I.copyTexSubImage2D(rt,te,Ve,Je,Ce,Pe,he,ge);xe.bindFramebuffer(I.READ_FRAMEBUFFER,null),xe.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else Ht?M.isDataTexture||M.isData3DTexture?I.texSubImage3D(rt,te,Ve,Je,lt,he,ge,fe,Ke,Ae,et.data):U.isCompressedArrayTexture?I.compressedTexSubImage3D(rt,te,Ve,Je,lt,he,ge,fe,Ke,et.data):I.texSubImage3D(rt,te,Ve,Je,lt,he,ge,fe,Ke,Ae,et):M.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,te,Ve,Je,he,ge,Ke,Ae,et.data):M.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,te,Ve,Je,et.width,et.height,Ke,et.data):I.texSubImage2D(I.TEXTURE_2D,te,Ve,Je,he,ge,Ke,Ae,et);I.pixelStorei(I.UNPACK_ROW_LENGTH,qe),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Lt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Mi),I.pixelStorei(I.UNPACK_SKIP_ROWS,Dt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,os),te===0&&U.generateMipmaps&&I.generateMipmap(rt),xe.unbindTexture()},this.initRenderTarget=function(M){ye.get(M).__webglFramebuffer===void 0&&Be.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?Be.setTextureCube(M,0):M.isData3DTexture?Be.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?Be.setTexture2DArray(M,0):Be.setTexture2D(M,0),xe.unbindTexture()},this.resetState=function(){E=0,R=0,D=null,xe.reset(),le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Kt}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Xe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Xe._getUnpackColorSpace()}};var gi="EPSG:7854",Fc=[138.5995,-34.9195];function _i(i){return String(i??"").replace(/\\/g,"/").replace(/^\/+/,"").trim().toLowerCase()}function fn(i={}){return String(i.VIEW_ID??i.view_id??i.View_ID??"").trim()}function Oc(i={}){return String(i["360IMG"]??i["360img"]??i["360_IMG"]??"").trim()}function Bc(i={}){return String(i.PARK_NAME??i.park_name??i.Park_Name??"").trim()||"Adelaide Park Lands"}function ru(i=[]){let e=new Map;for(let t of i){let n=fn(t?.properties);if(!n||t?.geometry?.type!=="Point")continue;let s=t.properties,r=Number(s.ALTITUDE_1??0),o=(Oc(s)?4:0)+(Number.isFinite(r)&&r>0?2:0)+(Bc(s)!=="Adelaide Park Lands"?1:0);(!e.has(n)||o>e.get(n).score)&&e.set(n,{feature:t,score:o})}return[...e.values()].map(t=>t.feature).sort((t,n)=>fn(t.properties).localeCompare(fn(n.properties),"en",{numeric:!0}))}function Qo(i){let e=_i(i);return/(?:^|[\/_.-])frustums?(?:\.obj|[\/_.-]|$)/i.test(e)?"Frustums":/(?:^|[\/_.-])viewsheds?(?:\.obj|[\/_.-]|$)/i.test(e)?"Viewsheds":/(?:^|[\/_.-])points?(?:\.obj|[\/_.-]|$)/i.test(e)?"Points":"Other"}function ou(i){let e=String(i).match(/^v\s+(-?\d+(?:\.\d+)?(?:e[+-]?\d+)?)\s+(-?\d+(?:\.\d+)?(?:e[+-]?\d+)?)\s+(-?\d+(?:\.\d+)?(?:e[+-]?\d+)?)/im);if(!e)throw new Error("OBJ file has no vertices.");return e.slice(1,4).map(Number)}function au(i,e){let[t,n]=i;if(t>=1e5&&t<=9e5&&n>=4e6&&n<=9e6)return"RAW_ENH";if(e?.scene_origin&&(e?.lod_source_frame==="SCENE_LOCAL"||e?.obj_coordinates?.toLowerCase().includes("local")))return"SCENE_LOCAL";throw new Error("OBJ vertices are not in MGA Zone 54 metres. Supply export_reference.json if they use scene-local coordinates.")}function zc(i,e,t){if(e==="RAW_ENH")return i;if(e==="SCENE_LOCAL"){let{easting_m:n,northing_m:s,height_m:r}=t.scene_origin;return[i[0]+Number(n),i[1]+Number(s),i[2]+Number(r||0)]}throw new Error("Unsupported OBJ coordinate frame.")}function cu(i,e,t,n){if(typeof n!="function")throw new Error("OBJ map projection is required.");let s=0,r=String(i).split(/\r?\n/).map(o=>{if(/^v\s/.test(o)){let a=o.trim().split(/\s+/);if(a.length<4)return o;let l=a.slice(1,4).map(Number);if(!l.every(Number.isFinite))return o;let[c,h,u]=zc(l,e,t),f=n(c,h,u);if(!f.every(Number.isFinite))throw new Error("Invalid projected OBJ vertex.");return s++,"v "+f.map(p=>p.toFixed(5)).join(" ")}if(/^vn\s/.test(o)){let a=o.trim().split(/\s+/);if(a.length>=4)return`vn ${a[1]} ${a[3]} ${a[2]}`}return o}).join(`
`);if(!s)throw new Error("OBJ contains no valid vertices.");return{text:r,vertexCount:s}}function ea(i,e,t){return Math.max(e,Math.min(t,i))}function ns(i){return(i%360+360)%360}function lu(i){return String(i??"").replace(/[<>]/g,"").slice(0,160)}function hu(){if(!window.proj4)throw new Error("The projection library did not load. Please check your internet connection.");window.proj4.defs(gi,"+proj=utm +zone=54 +south +ellps=GRS80 +units=m +no_defs +type=crs")}function kc(i,e){if(!Number.isFinite(i)||!Number.isFinite(e))throw new Error("Invalid projected coordinates.");return window.proj4(gi,"EPSG:4326",[i,e])}function uu(i){let e=kc(...i),t=window.maplibregl.MercatorCoordinate,n=t.fromLngLat(e,0),s=n.meterInMercatorCoordinateUnits();if(![n.x,n.y,s].every(Number.isFinite)||s<=0)throw new Error("Invalid OBJ map anchor.");function r(o){let a=t.fromLngLat(o,0),l=(a.x-n.x)/s,c=(n.y-a.y)/s;if(![l,c].every(Number.isFinite))throw new Error("Invalid OBJ map coordinates.");return[l,c]}return{anchorLngLat:e,anchor:n,scale:s,fromLngLat:r,project(o,a,l){let[c,h]=r(kc(o,a));return[c,l,h]},toLngLat(o,a){let l=new t(n.x+o*s,n.y-a*s,0).toLngLat();return[l.lng,l.lat]}}}function e0(i){return i?.[0]>=110&&i?.[0]<=160&&i?.[1]>=-47&&i?.[1]<=-5}function du(i){if(!Array.isArray(i))return i;if(typeof i[0]=="number"){if(!Number.isFinite(i[0])||!Number.isFinite(i[1])||e0(i))return i;let[e,t]=kc(i[0],i[1]);return[e,t,...i.slice(2)]}return i.map(du)}function fu(i){let e=Array.isArray(i)?i:[i],t=[];for(let n of e)n?.type==="FeatureCollection"?t.push(...n.features||[]):n?.type==="Feature"&&t.push(n);if(!t.length)throw new Error("No features found in the selected shapefile.");return{type:"FeatureCollection",features:t.filter(n=>n.geometry).map(n=>({type:"Feature",id:n.id,properties:{...n.properties||{}},geometry:{...n.geometry,coordinates:du(n.geometry.coordinates)}}))}}function pu(i){let e=1/0,t=1/0,n=-1/0,s=-1/0;for(let r of i){if(r.geometry?.type!=="Point")continue;let[o,a]=r.geometry.coordinates;!Number.isFinite(o)||!Number.isFinite(a)||(e=Math.min(e,o),n=Math.max(n,o),t=Math.min(t,a),s=Math.max(s,a))}return Number.isFinite(e)?[[e,t],[n,s]]:null}function mu(i,e,t,n=100){let s=t*Math.PI/180,r=6378137,o=Math.PI/180,a=e+Math.cos(s)*n/r/o,l=i+Math.sin(s)*n/(r*Math.cos(e*o))/o;return{type:"Feature",properties:{},geometry:{type:"LineString",coordinates:[[i,e],[l,a]]}}}async function gu(i){if(!i?.length)throw new Error("Select a shapefile ZIP or SHP/DBF/PRJ files.");if(!window.shp)throw new Error("Shapefile parser did not load. Check your internet connection.");let e=Array.from(i),t=[];for(let s of e.filter(r=>/\.zip$/i.test(r.name))){let r=await window.shp(await s.arrayBuffer());t.push(...Array.isArray(r)?r:[r])}let n=new Map;for(let s of e){let r=(s.path||s.webkitRelativePath||s.name).match(/^(.*)\.(shp|dbf|prj|cpg)$/i);if(!r)continue;let o=r[1].toLowerCase();n.has(o)||n.set(o,{}),n.get(o)[r[2].toLowerCase()]=s}for(let[s,r]of n){if(!r.shp)throw new Error(`Missing SHP: ${s}`);if(!r.dbf)throw new Error(`Missing DBF: ${s}`);let o=Object.fromEntries(await Promise.all(Object.entries(r).map(async([a,l])=>[a,/^(prj|cpg)$/.test(a)?await l.text():await l.arrayBuffer()])));t.push(await window.shp(o))}if(!t.length)throw new Error("Choose a shapefile ZIP or matching SHP and DBF files.");return fu(t)}async function _u(i){if(!i?.length)throw new Error("Choose OBJ files or a ZIP archive.");let e=[],t=null,n=Array.from(i).filter(o=>/\.zip$/i.test(o.name));for(let o of Array.from(i))if(/\.zip$/i.test(o.name)){if(!window.JSZip)throw new Error("ZIP library did not load.");let a=await window.JSZip.loadAsync(o),l=e.length,c=null;for(let h of Object.values(a.files))if(!(h.dir||!/\.(obj|json)$/i.test(h.name))&&!h.name.split("/").some(u=>u==="__MACOSX"))if(/export_reference\.json$/i.test(h.name))try{c=JSON.parse(await h.async("string")),t=c}catch{}else/\.obj$/i.test(h.name)&&e.push({name:n.length>1?o.name+"/"+h.name:h.name,readText:()=>h.async("string"),bytes:h._data?.uncompressedSize||0});if(c)for(let h of e.slice(l))h.reference=c}else/\.obj$/i.test(o.name)?e.push({name:o.path||o.webkitRelativePath||o.name,readText:()=>o.text(),bytes:o.size}):/export_reference\.json$/i.test(o.name)&&(t=JSON.parse(await o.text()));if(!e.length)throw new Error("No .obj files were found.");if(e.reduce((o,a)=>o+a.bytes,0)>500*1024*1024)throw new Error("This preview limits OBJ imports to 500 MB. Split the dataset into location groups.");return{entries:[...new Map(e.map(o=>[_i(o.name),o])).values()],reference:t}}function xu(i){return Array.from(i??[]).filter(n=>/\.(jpg|jpeg|png|webp)$/i.test(n.name))}function t0(i,e){return Ji.radToDeg(2*Math.atan(Math.tan(Ji.degToRad(i)/2)*e))}function yu(i,e,t){let n=Math.min(1,t/Math.max(i,e));return[Math.max(1,Math.floor(i*n)),Math.max(1,Math.floor(e*n))]}var ta=class{constructor(e,{onDirection:t=()=>{},onLoading:n=()=>{}}={}){this.host=e,this.onDirection=t,this.onLoading=n,this.yaw=0,this.pitch=0,this.fov=73,this.offset=0,this.active=!1,this.dragging=!1,this.disposed=!1,this.serial=0,this.frame=null,this.pending=null,this.decoding=null,this.texture=null,this.imageSource=null,this.scene=new si,this.camera=new bt(this.fov,1,.1,2e3),this.projectionFov=this.fov,this.projectionAspect=1,this.directionVector=new F,this.renderer=new es({antialias:!0,alpha:!1}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),this.renderer.setClearColor("#243c32"),this.renderer.outputColorSpace=xt,this.renderer.domElement.style.display="none",this.host.appendChild(this.renderer.domElement),this.geometry=new Ls(450,76,48),this.geometry.scale(-1,1,1),this.material=new Tn({side:Qt}),this.mesh=new ft(this.geometry,this.material),this.mesh.visible=!1,this.scene.add(this.mesh),this.events=new AbortController,this._bind(),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(this.host),this.resize()}_bind(){let e=this.renderer.domElement,t=this.events.signal;e.addEventListener("pointerdown",s=>{this.active&&(this.dragging=!0,this.prevX=s.clientX,this.prevY=s.clientY,e.setPointerCapture(s.pointerId))},{signal:t}),e.addEventListener("pointermove",s=>{if(!this.dragging)return;let r=s.clientX-this.prevX,o=s.clientY-this.prevY;this.prevX=s.clientX,this.prevY=s.clientY,this.yaw=ns(this.yaw-r*.16),this.pitch=ea(this.pitch+o*.14,-87,87),this.render()},{signal:t});let n=()=>{this.dragging=!1};e.addEventListener("pointerup",n,{signal:t}),e.addEventListener("pointercancel",n,{signal:t}),e.addEventListener("lostpointercapture",n,{signal:t}),e.addEventListener("wheel",s=>{this.active&&(s.preventDefault(),this.fov=ea(this.fov+Math.sign(s.deltaY)*3,30,105),this.render())},{passive:!1,signal:t}),e.addEventListener("dblclick",()=>this.resetView(),{signal:t})}load(e,t=0){if(this.disposed)return Promise.reject(new Error("The panorama viewer has been disposed."));let n=++this.serial;return this.pending?.resolve(!1),this.decoding?.resolve(!1),this._releaseImage(),this.onLoading(!0),new Promise((s,r)=>{this.pending={file:e,offset:t,serial:n,resolve:s,reject:r},this._drain()})}async _drain(){if(!(this.decoding||this.disposed))for(;this.pending&&!this.disposed;){let e=this.pending;this.pending=null,this.decoding=e;let t=null;try{if(t=await this._decode(e.file,e.serial),!t||e.serial!==this.serial||this.disposed){t?.close(),e.resolve(!1);continue}let n=new Tt(t.image);n.colorSpace=xt,n.flipY=!t.bitmap,n.needsUpdate=!0,this.imageSource=t,this.texture=n,t=null,this.material.map=n,this.material.needsUpdate=!0,this.mesh.visible=!0,this.offset=ns(Number(e.offset)||0),this.yaw=0,this.pitch=0,this.fov=73,this.active=!0,this.renderer.domElement.style.display="block",this.resize(),e.resolve(!0)}catch(n){t?.close(),e.serial===this.serial&&!this.disposed?(this._releaseImage(),e.reject(new Error(`Could not decode ${e.file.name}: ${n.message}`))):e.resolve(!1)}finally{e.serial===this.serial&&!this.disposed&&this.onLoading(!1),this.decoding=null}}}async _decode(e,t){let n=this.renderer.capabilities.maxTextureSize;if(typeof createImageBitmap=="function"){let s;try{s=await createImageBitmap(e,{imageOrientation:"flipY",premultiplyAlpha:"none"})}catch{return t!==this.serial||this.disposed?null:this._decodeImage(e,n,t)}if(t!==this.serial||this.disposed)return s.close(),null;let[r,o]=yu(s.width,s.height,n);if(r!==s.width||o!==s.height)try{let a=await createImageBitmap(s,{resizeWidth:r,resizeHeight:o,resizeQuality:"high",imageOrientation:"none",premultiplyAlpha:"none"});s.close(),s=a}catch(a){throw s.close(),a}return{image:s,bitmap:!0,close:()=>s.close()}}return this._decodeImage(e,n,t)}async _decodeImage(e,t,n){let s=URL.createObjectURL(e),r=new Image;r.decoding="async";try{if(await new Promise((h,u)=>{r.onload=h,r.onerror=()=>u(new Error("Unsupported or damaged image.")),r.src=s}),n!==this.serial||this.disposed)return r.removeAttribute("src"),null;let[o,a]=yu(r.naturalWidth,r.naturalHeight,t);if(o===r.naturalWidth&&a===r.naturalHeight)return{image:r,bitmap:!1,close:()=>r.removeAttribute("src")};let l=document.createElement("canvas");l.width=o,l.height=a;let c=l.getContext("2d");if(!c)throw new Error("Unable to resize this panorama for the graphics device.");return c.imageSmoothingEnabled=!0,c.imageSmoothingQuality="high",c.drawImage(r,0,0,o,a),r.removeAttribute("src"),{image:l,bitmap:!1,close:()=>{l.width=l.height=1}}}catch(o){throw r.removeAttribute("src"),o}finally{r.onload=r.onerror=null,URL.revokeObjectURL(s)}}_releaseImage(){this.active=!1,this.dragging=!1,this.frame!==null&&(cancelAnimationFrame(this.frame),this.frame=null),this.material.map=null,this.material.needsUpdate=!0,this.mesh.visible=!1,this.texture?.dispose(),this.texture=null,this.imageSource?.close(),this.imageSource=null,this.renderer.domElement.style.display="none"}clear(){this.serial++,this.pending?.resolve(!1),this.pending=null,this.decoding?.resolve(!1),this._releaseImage(),this.onLoading(!1)}setViewToNorth(){return this.changeHeading(-this.currentDirection.heading)}changeHeading(e){return this.offset=ns(this.offset+e),this.render(),this.offset}resetView(){this.yaw=0,this.pitch=0,this.fov=73,this.render()}rotate(e,t=0){this.yaw=ns(this.yaw+e),this.pitch=ea(this.pitch+t,-87,87),this.render()}get currentDirection(){return{heading:ns(this.yaw+this.offset),horizontalFov:t0(this.fov,this.camera.aspect),pitch:this.pitch}}resize(){if(this.disposed)return;let e=Math.max(1,this.host.clientWidth),t=Math.max(1,this.host.clientHeight);this.camera.aspect=e/t,this.renderer.setSize(e,t,!1),this.render()}render(){!this.active||this.disposed||this.frame!==null||(this.frame=requestAnimationFrame(()=>{if(this.frame=null,!this.active||this.disposed)return;(this.projectionFov!==this.fov||this.projectionAspect!==this.camera.aspect)&&(this.camera.fov=this.fov,this.camera.updateProjectionMatrix(),this.projectionFov=this.fov,this.projectionAspect=this.camera.aspect);let e=Ji.degToRad(this.yaw),t=Ji.degToRad(this.pitch);this.directionVector.set(Math.sin(e)*Math.cos(t),Math.sin(t),-Math.cos(e)*Math.cos(t)),this.camera.lookAt(this.directionVector),this.renderer.render(this.scene,this.camera),this.onDirection(this.currentDirection)}))}dispose(){this.disposed||(this.clear(),this.disposed=!0,this.events.abort(),this.resizeObserver.disconnect(),this.geometry.dispose(),this.material.dispose(),this.renderer.dispose(),this.renderer.domElement.remove())}};var n0=/^[og]\s*(.+)?/,i0=/^mtllib /,s0=/^usemtl /,r0=/^usemap /,vu=/\s+/,Mu=new F,Vc=new F,bu=new F,Su=new F,jt=new F,na=new ke;function o0(){let i={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,t){if(this.object&&this.object.fromDeclaration===!1){this.object.name=e,this.object.fromDeclaration=t!==!1;return}let n=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:t!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(s,r){let o=this._finalize(!1);o&&(o.inherited||o.groupCount<=0)&&this.materials.splice(o.index,1);let a={index:this.materials.length,name:s||"",mtllib:Array.isArray(r)&&r.length>0?r[r.length-1]:"",smooth:o!==void 0?o.smooth:this.smooth,groupStart:o!==void 0?o.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(l){let c={index:typeof l=="number"?l:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return c.clone=this.clone.bind(c),c}};return this.materials.push(a),a},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(s){let r=this.currentMaterial();if(r&&r.groupEnd===-1&&(r.groupEnd=this.geometry.vertices.length/3,r.groupCount=r.groupEnd-r.groupStart,r.inherited=!1),s&&this.materials.length>1)for(let o=this.materials.length-1;o>=0;o--)this.materials[o].groupCount<=0&&this.materials.splice(o,1);return s&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),r}},n&&n.name&&typeof n.clone=="function"){let s=n.clone(0);s.inherited=!0,this.object.materials.push(s)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(e,t){let n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseNormalIndex:function(e,t){let n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseUVIndex:function(e,t){let n=parseInt(e,10);return(n>=0?n-1:n+t/2)*2},addVertex:function(e,t,n){let s=this.vertices,r=this.object.geometry.vertices;r.push(s[e+0],s[e+1],s[e+2]),r.push(s[t+0],s[t+1],s[t+2]),r.push(s[n+0],s[n+1],s[n+2])},addVertexPoint:function(e){let t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addVertexLine:function(e){let t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addNormal:function(e,t,n){let s=this.normals,r=this.object.geometry.normals;r.push(s[e+0],s[e+1],s[e+2]),r.push(s[t+0],s[t+1],s[t+2]),r.push(s[n+0],s[n+1],s[n+2])},addFaceNormal:function(e,t,n){let s=this.vertices,r=this.object.geometry.normals;Mu.fromArray(s,e),Vc.fromArray(s,t),bu.fromArray(s,n),jt.subVectors(bu,Vc),Su.subVectors(Mu,Vc),jt.cross(Su),jt.normalize(),r.push(jt.x,jt.y,jt.z),r.push(jt.x,jt.y,jt.z),r.push(jt.x,jt.y,jt.z)},addColor:function(e,t,n){let s=this.colors,r=this.object.geometry.colors;s[e]!==void 0&&r.push(s[e+0],s[e+1],s[e+2]),s[t]!==void 0&&r.push(s[t+0],s[t+1],s[t+2]),s[n]!==void 0&&r.push(s[n+0],s[n+1],s[n+2])},addUV:function(e,t,n){let s=this.uvs,r=this.object.geometry.uvs;r.push(s[e+0],s[e+1]),r.push(s[t+0],s[t+1]),r.push(s[n+0],s[n+1])},addDefaultUV:function(){let e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){let t=this.uvs;this.object.geometry.uvs.push(t[e+0],t[e+1])},addFace:function(e,t,n,s,r,o,a,l,c){let h=this.vertices.length,u=this.parseVertexIndex(e,h),f=this.parseVertexIndex(t,h),p=this.parseVertexIndex(n,h);if(this.addVertex(u,f,p),this.addColor(u,f,p),a!==void 0&&a!==""){let g=this.normals.length;u=this.parseNormalIndex(a,g),f=this.parseNormalIndex(l,g),p=this.parseNormalIndex(c,g),this.addNormal(u,f,p)}else this.addFaceNormal(u,f,p);if(s!==void 0&&s!==""){let g=this.uvs.length;u=this.parseUVIndex(s,g),f=this.parseUVIndex(r,g),p=this.parseUVIndex(o,g),this.addUV(u,f,p),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";let t=this.vertices.length;for(let n=0,s=e.length;n<s;n++){let r=this.parseVertexIndex(e[n],t);this.addVertexPoint(r),this.addColor(r)}},addLineGeometry:function(e,t){this.object.geometry.type="Line";let n=this.vertices.length,s=this.uvs.length;for(let r=0,o=e.length;r<o;r++)this.addVertexLine(this.parseVertexIndex(e[r],n));for(let r=0,o=t.length;r<o;r++)this.addUVLine(this.parseUVIndex(t[r],s))}};return i.startObject("",!1),i}var ia=class extends ci{constructor(e){super(e),this.materials=null}load(e,t,n,s){let r=this,o=new Ns(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{t(r.parse(a))}catch(l){s?s(l):console.error(l),r.manager.itemError(e)}},n,s)}setMaterials(e){return this.materials=e,this}parse(e){let t=new o0;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`)),e.indexOf(`\\
`)!==-1&&(e=e.replace(/\\\n/g,""));let n=e.split(`
`),s=[];for(let a=0,l=n.length;a<l;a++){let c=n[a].trimStart();if(c.length===0)continue;let h=c.charAt(0);if(h!=="#")if(h==="v"){let u=c.split(vu);switch(u[0]){case"v":t.vertices.push(parseFloat(u[1]),parseFloat(u[2]),parseFloat(u[3])),u.length>=7?(na.setRGB(parseFloat(u[4]),parseFloat(u[5]),parseFloat(u[6]),xt),t.colors.push(na.r,na.g,na.b)):t.colors.push(void 0,void 0,void 0);break;case"vn":t.normals.push(parseFloat(u[1]),parseFloat(u[2]),parseFloat(u[3]));break;case"vt":t.uvs.push(parseFloat(u[1]),parseFloat(u[2]));break}}else if(h==="f"){let f=c.slice(1).trim().split(vu),p=[];for(let _=0,m=f.length;_<m;_++){let d=f[_];if(d.length>0){let b=d.split("/");p.push(b)}}let g=p[0];for(let _=1,m=p.length-1;_<m;_++){let d=p[_],b=p[_+1];t.addFace(g[0],d[0],b[0],g[1],d[1],b[1],g[2],d[2],b[2])}}else if(h==="l"){let u=c.substring(1).trim().split(" "),f=[],p=[];if(c.indexOf("/")===-1)f=u;else for(let g=0,_=u.length;g<_;g++){let m=u[g].split("/");m[0]!==""&&f.push(m[0]),m[1]!==""&&p.push(m[1])}t.addLineGeometry(f,p)}else if(h==="p"){let f=c.slice(1).trim().split(" ");t.addPointGeometry(f)}else if((s=n0.exec(c))!==null){let u=(" "+s[0].slice(1).trim()).slice(1);t.startObject(u)}else if(s0.test(c))t.object.startMaterial(c.substring(7).trim(),t.materialLibraries);else if(i0.test(c))t.materialLibraries.push(c.substring(7).trim());else if(r0.test(c))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(h==="s"){if(s=c.split(" "),s.length>1){let f=s[1].trim().toLowerCase();t.object.smooth=f!=="0"&&f!=="off"}else t.object.smooth=!0;let u=t.object.currentMaterial();u&&(u.smooth=t.object.smooth)}else{if(c==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+c+'"')}}t.finalize();let r=new Xt;if(r.materialLibraries=[].concat(t.materialLibraries),!(t.objects.length===1&&t.objects[0].geometry.vertices.length===0)===!0)for(let a=0,l=t.objects.length;a<l;a++){let c=t.objects[a],h=c.geometry,u=c.materials,f=h.type==="Line",p=h.type==="Points",g=!1;if(h.vertices.length===0)continue;let _=new At;_.setAttribute("position",new ct(h.vertices,3)),h.normals.length>0&&_.setAttribute("normal",new ct(h.normals,3)),h.colors.length>0&&(g=!0,_.setAttribute("color",new ct(h.colors,3))),h.hasUVIndices===!0&&_.setAttribute("uv",new ct(h.uvs,2));let m=[];for(let b=0,v=u.length;b<v;b++){let x=u[b],C=x.name+"_"+x.smooth+"_"+g,E=t.materials[C];if(this.materials!==null){if(E=this.materials.create(x.name),f&&E&&!(E instanceof nn)){let R=new nn;Bt.prototype.copy.call(R,E),R.color.copy(E.color),E=R}else if(p&&E&&!(E instanceof sn)){let R=new sn({size:10,sizeAttenuation:!1});Bt.prototype.copy.call(R,E),R.color.copy(E.color),R.map=E.map,E=R}}E===void 0&&(f?E=new nn:p?E=new sn({size:1,sizeAttenuation:!1}):E=new Ds,E.name=x.name,E.flatShading=!x.smooth,E.vertexColors=g,t.materials[C]=E),m.push(E)}let d;if(m.length>1){for(let b=0,v=u.length;b<v;b++){let x=u[b];_.addGroup(x.groupStart,x.groupCount,b)}f?d=new kn(_,m):p?d=new ri(_,m):d=new ft(_,m)}else f?d=new kn(_,m[0]):p?d=new ri(_,m[0]):d=new ft(_,m[0]);d.name=c.name,r.add(d)}else if(t.vertices.length>0){let a=new sn({size:1,sizeAttenuation:!1}),l=new At;l.setAttribute("position",new ct(t.vertices,3)),t.colors.length>0&&t.colors[0]!==void 0&&(l.setAttribute("color",new ct(t.colors,3)),a.vertexColors=!0);let c=new ri(l,a);r.add(c)}return r}};var Hc={Points:3435347,Viewsheds:9215330,Frustums:11567676,Other:7175811},sa=32;function wu(i){let e=String(i).replace(/\\/g,"/").split("/").pop().replace(/\.obj$/i,"").split("__");return e.length>1&&/^(?:points?|viewsheds?|frustums?)$/i.test(e.at(-1))?e.at(-2).trim():e.length===2?e[1].trim():""}function a0(i,e){let t=Qo(e);if(t!=="Other"||!wu(e))return[{model:i,type:t,name:e,id:_i(e)}];let n=[];if(i.traverse(r=>{r.geometry&&(r.isMesh||r.isPoints||r.isLine)&&n.push(r)}),!n.some(r=>Qo(r.name)!=="Other"))return[{model:i,type:t,name:e,id:_i(e)}];i.updateMatrixWorld(!0);let s=new Map;for(let r of n){let o=Qo(r.name);s.has(o)||s.set(o,new Xt),s.get(o).attach(r)}return[...s].map(([r,o])=>({model:o,type:r,name:e+" \xB7 "+r,id:_i(e)+"#"+r.toLowerCase()}))}function Gs(i){let e=new Set,t=new Set;i.traverse(n=>{n.geometry&&e.add(n.geometry);for(let s of[n.material].flat())s&&t.add(s)});for(let n of e)n.dispose();for(let n of t)n.dispose()}var Ws=class{constructor(e,t=()=>{}){this.map=e,this.notify=t,this.scene=new si,this.camera=new ii,this.group=new Xt,this.scene.add(this.group),this.loaded=[],this.reference=null,this.anchorEN=null,this.anchorLngLat=null,this.grounded=!0,this.projection=null,this.visibility={Points:!0,Viewsheds:!0,Frustums:!0,Other:!0},this.entryVisibility=new Map,this.visibleCount=0,this.loadSerial=0,this.renderer=null,this.alignment=null,this.alignmentOrigin=null,this.anchorMatrix=new nt,this.scaleMatrix=new nt,this.rotateMatrix=new nt().makeRotationX(Math.PI/2),this.alignmentUniforms={originMap:{value:new We},cameraSector:{value:new F(0,1,1)},sourceCount:{value:0},sourceSectors:{value:Array.from({length:sa},()=>new F)}},this.layer={id:"vistas-3d-models",type:"custom",renderingMode:"3d",onAdd:(n,s)=>{this.renderer=new es({canvas:n.getCanvas(),context:s}),this.renderer.autoClear=!1},onRemove:()=>{for(let n of this.loaded)Gs(n.model);this.renderer?.dispose(),this.renderer=null},render:(n,s)=>{!this.renderer||!this.anchorLngLat||!this.visibleCount||(this.camera.projectionMatrix.fromArray(s).multiply(this.anchorMatrix),this.renderer.resetState(),this.renderer.render(this.scene,this.camera),this.renderer.resetState())}}}_cacheAnchor(){let{anchor:e,scale:t}=this.projection;this.anchorMatrix.makeTranslation(e.x,e.y,e.z),this.scaleMatrix.makeScale(t,t,t),this.anchorMatrix.multiply(this.scaleMatrix).multiply(this.rotateMatrix)}attach(){!this.map.getStyle?.()&&!this.map.isStyleLoaded()||!this.loaded.length||this.map.getLayer(this.layer.id)||this.map.addLayer(this.layer,this.map.getLayer("vistas-points")?"vistas-points":void 0)}_updateVisibility(){this.visibleCount=0;for(let e of this.loaded){e.model.visible=this.entryVisibility.has(e.id)?this.entryVisibility.get(e.id):this.visibility[e.type]!==!1,e.model.visible&&this.visibleCount++;for(let t of e.highlights)t.visible=!!(this.alignment?.active&&e.viewId&&e.viewId===this.alignment.viewId)}}setVisible(e,t){this.visibility[e]=!!t;for(let n of this.loaded)n.type===e&&this.entryVisibility.set(n.id,!!t);this._updateVisibility(),this.map.triggerRepaint()}setEntryVisible(e,t){this.entryVisibility.set(e,!!t),this._updateVisibility(),this.map.triggerRepaint()}applyEntryVisibility(e){for(let[t,n]of e instanceof Map?e:Object.entries(e))this.entryVisibility.set(t,!!n);this._updateVisibility(),this.map.triggerRepaint()}setGrounded(e){this.grounded=!!e,this._applyGrounding(),this.map.triggerRepaint()}setAppearance(e){this.appearance=e;for(let t of this.loaded)this._applyAppearance(t);this.map.triggerRepaint()}_applyAppearance(e){if(!this.appearance)return;let t=new Set(e.highlights);e.model.traverse(n=>{if(!n.material||t.has(n))return;let s=n.isPoints||e.type==="Points"?"point":n.isLine?"line":"fill",r=this.appearance[s];for(let o of[n.material].flat())o.color.set(r.color),o.opacity=1-r.transparency/100,o.transparent=o.opacity<1,o.depthWrite=o.opacity===1,o.needsUpdate=!0})}_applyGrounding(){let e=new Map,t=n=>n.viewId?"location:"+n.viewId:"file:"+n.id;for(let n of this.loaded){let s=t(n);e.set(s,Math.min(e.get(s)??1/0,n.sourceMinHeight))}for(let n of this.loaded)n.groundOffset=this.grounded?-e.get(t(n)):0,n.model.position.y=n.sourcePositionY+n.groundOffset,n.model.updateMatrixWorld(!0)}setAlignment(e){if(this.alignment=null,e?.active&&this.anchorEN&&e.origin?.length===2&&Number.isFinite(e.heading)&&Number.isFinite(e.horizontalFov))try{let t=this.alignmentOrigin,n=t&&t.lng===e.origin[0]&&t.lat===e.origin[1]?t.projected:this.projection.fromLngLat(e.origin),[s,r]=n;if(Number.isFinite(s)&&Number.isFinite(r)){this.alignmentOrigin={lng:e.origin[0],lat:e.origin[1],projected:n};let o=this.alignmentUniforms;o.originMap.value.set(s,r),this._sector(o.cameraSector.value,e.heading,e.horizontalFov);let a=(e.intervals||[]).filter(l=>Number.isFinite(l.heading)&&Number.isFinite(l.horizontalFov)&&l.horizontalFov>0);o.sourceCount.value=a.length<=sa?a.length:0;for(let l=0;l<o.sourceCount.value;l++)this._sector(o.sourceSectors.value[l],a[l].heading,a[l].horizontalFov);this.alignment=e}}catch{}this._updateVisibility(),this.map.triggerRepaint()}_sector(e,t,n){let s=t*Math.PI/180;e.set(Math.sin(s),Math.cos(s),Math.cos(Math.max(0,Math.min(360,n))*Math.PI/360))}_highlightMaterial(){return new zt({uniforms:this.alignmentUniforms,side:Vt,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1,vertexShader:`varying vec2 surfaceMap;
void main(){
  vec4 world=modelMatrix*vec4(position,1.0);
  surfaceMap=world.xz;
  gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);
}`,fragmentShader:`uniform vec2 originMap;
uniform vec3 cameraSector;
uniform int sourceCount;
uniform vec3 sourceSectors[`+sa+`];
varying vec2 surfaceMap;
void main(){
  vec2 delta=surfaceMap-originMap;
  float distanceM=length(delta);
  if(distanceM<0.01)discard;
  vec2 direction=delta/distanceM;
  if(dot(direction,cameraSector.xy)<cameraSector.z)discard;
  bool inside=sourceCount==0;
  for(int i=0;i<`+sa+`;i++){
    if(i>=sourceCount)break;
    if(dot(direction,sourceSectors[i].xy)>=sourceSectors[i].z)inside=true;
  }
  if(!inside)discard;
  gl_FragColor=vec4(0.22,0.48,0.32,0.62);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`})}clear(){this.loadSerial++;for(let e of this.loaded)Gs(e.model);this.group.clear(),this.loaded=[],this.visibleCount=0,this.anchorEN=null,this.anchorLngLat=null,this.projection=null,this.alignment=null,this.alignmentOrigin=null,this.map.triggerRepaint()}async load(e,t,n=()=>{},{append:s=!1,sourceId:r=null,strict:o=!1,attach:a=!0}={}){if(t?.source_crs&&t.source_crs!==gi)throw new Error("OBJ reference CRS "+t.source_crs+" is not supported. Expected "+gi+".");s?this.loadSerial++:this.clear(),this.reference=t||null;let l={anchorEN:this.anchorEN,anchorLngLat:this.anchorLngLat,projection:this.projection},c=[],h=()=>{for(let _ of c)Gs(_.model);u===this.loadSerial&&(Object.assign(this,l),this.projection&&this._cacheAnchor())},u=this.loadSerial,f=new ia,p=0,g=[];for(let[_,m]of e.entries()){let d=null,b=null,v=[],x=[],C=new Set;try{let E=m.reference??this.reference;if(E?.source_crs&&E.source_crs!==gi)throw new Error("Unsupported OBJ reference CRS.");if(n("Parsing "+(_+1)+"/"+e.length),m.bytes>110*1024*1024)throw new Error("Individual OBJ exceeds 110 MB preview limit.");let R=await m.readText();if(u!==this.loadSerial)return h(),{loaded:0,vertices:0,failed:[],cancelled:!0};if(R.length>110*1024*1024)throw new Error("Individual OBJ exceeds 110 MB preview limit.");let D=ou(R),S=au(D,E),[w,P]=zc(D,S,E),B=this.anchorEN||[w,P],G=this.projection||uu(B),q=cu(R,S,E,G.project);d=f.parse(q.text),v.push(d);let j=a0(d,m.name);for(let H of j)H.model!==d&&v.push(H.model);for(let H of j){d=H.model;let Q=H.type,V=Q==="Frustums"||Q==="Viewsheds",ne=V?.24:1,ae=[],de=[],De=[];if(d.traverse(Me=>{if(!Me.geometry||!(Me.isMesh||Me.isPoints||Me.isLine))return;let W=Me.geometry;if(Me.isMesh&&W.computeVertexNormals(),W.computeBoundingBox(),W.computeBoundingSphere(),!Number.isFinite(W.boundingSphere?.radius))throw new Error("OBJ contains invalid geometry.");ae.push(Me)}),!ae.length)throw new Error("OBJ has no renderable geometry.");let je=new Ot().setFromObject(d).min.y;if(!Number.isFinite(je))throw new Error("OBJ contains invalid height bounds.");b=new Tn({color:Hc[Q],side:Vt,transparent:V,opacity:ne,depthWrite:!V});for(let Me of ae){for(let W of[Me.material].flat())W&&C.add(W);Me.isMesh?(Me.material=b,de.push(Me)):Me.isPoints?Me.material=new sn({color:Hc[Q],size:3,sizeAttenuation:!1,transparent:V,opacity:ne,depthWrite:!V}):Me.isLine&&(Me.material=new nn({color:Hc[Q],transparent:V,opacity:ne,depthWrite:!V})),Me.frustumCulled=!0}for(let Me of C)Me.dispose();C.clear(),de.length||b.dispose();for(let Me of de){let W=new kn(new Ts(Me.geometry,25),new nn({color:2113076,depthWrite:!1}));W.renderOrder=1,Me.add(W)}if(Q==="Viewsheds"&&de.length){let Me=this._highlightMaterial();for(let W of de){let $=new ft(W.geometry,Me);$.visible=!1,$.renderOrder=2,W.add($),De.push($)}}let $e={id:r?r+"/"+H.id:H.id,sourceId:r,name:H.name,sourceName:m.name,type:Q,viewId:wu(m.name),model:d,material:b,highlights:De,vertices:ae.reduce((Me,W)=>Me+(W.geometry.attributes?.position?.count||0),0)||q.vertexCount,sourceMinHeight:je,sourcePositionY:d.position.y,groundOffset:0};this._applyAppearance($e),x.push($e)}this.anchorEN||(this.anchorEN=B,this.projection=G,this.anchorLngLat=G.anchorLngLat,this._cacheAnchor()),c.push(...x),p+=q.vertexCount}catch(E){for(let R of C)R.dispose();for(let R of v)Gs(R);v.length||b?.dispose(),g.push(m.name+": "+E.message)}if(_%4===3&&await new Promise(E=>setTimeout(E,0)),u!==this.loadSerial)return h(),{loaded:0,vertices:0,failed:[],cancelled:!0}}if(!c.length||o&&g.length)throw h(),new Error("No OBJ geometry loaded. "+g.slice(0,2).join("; "));if(s&&r){for(let _ of this.loaded.filter(m=>m.sourceId===r))this.group.remove(_.model),Gs(_.model),this.entryVisibility.delete(_.id);this.loaded=this.loaded.filter(_=>_.sourceId!==r)}for(let _ of c)this.loaded.push(_),this.group.add(_.model);return this._applyGrounding(),this._updateVisibility(),a&&this.attach(),this.map.triggerRepaint(),g.length&&this.notify(g.length+" OBJ file(s) skipped. "+g[0],!0),{loaded:this.loaded.length,vertices:p,failed:g}}focus(){this.anchorLngLat&&this.map.flyTo({center:this.anchorLngLat,zoom:17.4,pitch:50,bearing:-15,duration:1100})}dispose(){this.clear(),this.map.getLayer(this.layer.id)?this.map.removeLayer(this.layer.id):(this.renderer?.dispose(),this.renderer=null),this.entryVisibility.clear()}};function Gc(){return{obj:{point:{color:"#ffff00",transparency:0},line:{color:"#203e34",transparency:0},fill:{color:"#8c9d62",transparency:76}},shape:{point:{color:"#ffff00",transparency:0},line:{color:"#f50083",transparency:2},fill:{color:"#ed0c73",transparency:91}}}}var Eu="uos.vistas.appearance.v1";function Tu(){let i=Gc();try{let e=JSON.parse(localStorage.getItem(Eu));for(let t of["obj","shape"])for(let n of["point","line","fill"]){let s=e?.[t]?.[n]??(n==="point"?{transparency:e?.[t]?.fill?.pointTransparency}:null);/^#[0-9a-f]{6}$/i.test(s?.color)&&(i[t][n].color=s.color),Number.isFinite(s?.transparency)&&(i[t][n].transparency=Math.round(Math.max(0,Math.min(100,s.transparency))))}}catch{}return i}function Au(i){try{localStorage.setItem(Eu,JSON.stringify(i))}catch{}}function Cu(i,e){let t=s=>1-e[s].transparency/100,n=(s,r,o)=>{i?.getLayer(s)&&i.setPaintProperty(s,r,o)};n("vistas-cones-fill","fill-color",e.fill.color),n("vistas-cones-fill","fill-opacity",t("fill")),n("vistas-cones-outline","line-color",e.line.color),n("vistas-cones-outline","line-opacity",t("line")),n("vistas-cones-casing","line-opacity",t("line")*.9),n("vistas-points","circle-color",e.point.color),n("vistas-points","circle-opacity",t("point")),n("vistas-points","circle-stroke-color",e.line.color),n("vistas-points","circle-stroke-opacity",t("line"))}var c0={Points:"point",Viewsheds:"viewshed",Frustums:"frustum"};function Ru(i=[],e=[],t=[]){let n=new Map,s=r=>(n.has(r)||n.set(r,{id:r,label:r,pointRecords:[],cones:[],objects:[],layers:[],point:null}),n.get(r));for(let r of i){let o=fn(r.properties);o&&r.geometry?.type==="Point"&&s(o).pointRecords.push(r)}for(let r of e){let o=fn(r.properties);o&&/^(Multi)?Polygon$/.test(r.geometry?.type)&&s(o).cones.push(r)}for(let r of t)s(r.viewId||"__unmatched__").objects.push(r);for(let r of n.values()){let{id:o,layers:a}=r;r.point=ru(r.pointRecords)[0]||null;let l=r.point?.properties||r.cones[0]?.properties;r.label=o==="__unmatched__"?"Other layers":l?Bc(l):o,r.point&&(a.push({id:`point:${o}`,kind:"point",label:"Map point",source:"map"}),a.push({id:`frustum:${o}`,kind:"frustum",label:"Photo / reference frustum",source:"map"})),r.cones.length&&a.push({id:`viewshed:${o}`,kind:"viewshed",label:"Map viewshed",source:"map"});for(let c of r.objects)a.push({id:`obj:${c.id}`,kind:c0[c.type]||"other",label:c.name.split("/").pop(),source:"obj",entryId:c.id})}return new Map([...n].sort(([,r],[,o])=>r.label.localeCompare(o.label,"en",{numeric:!0})||r.id.localeCompare(o.id,"en",{numeric:!0})))}function Wc(i=[]){let e=new Map,t=new Map,n=r=>String(r||"").replace(/\\/g,"/").replace(/^\/+|\/+$/g,"").trim().toLowerCase().replace(/\.(jpg|jpeg|png|webp)$/i,""),s=(r,o,a)=>{r.has(o)?r.get(o)!==a&&r.set(o,null):r.set(o,a)};for(let r of i){let o=n(r.path||r.webkitRelativePath||r.name).split("/");for(let a=0;a<o.length;a++)s(e,o.slice(a).join("/"),r);s(t,n(r.name).split("/").pop(),r)}return{size:i.length,match(r){let o=n(r);return o?e.has(o)?e.get(o):t.get(o.split("/").pop())||null:null}}}var l0=["map","obj"],Xs=["point","viewshed","frustum","other"],qs=class{constructor(e={}){this.locations=new Map(Object.entries(e.locations||{})),this.categories=Object.fromEntries(l0.map(t=>[t,Object.fromEntries(Xs.map(n=>[n,e.categories?.[t]?.[n]!==!1]))]))}location(e){return this.locations.get(e)!==!1}category(e,t){return this.categories[e]?.[t]!==!1}visible(e,t){return this.location(e)&&this.category(t.source,t.kind)}setLocation(e,t){this.locations.set(e,!!t)}setCategory(e,t,n){this.categories[e][t]=!!n}setGroup(e,t){for(let n of Xs)this.setCategory(e,n,t)}snapshot(){return{locations:Object.fromEntries(this.locations),categories:structuredClone(this.categories)}}};var ra="adelaide-views-vistas-workspace";var h0=["spatial","photos","models","reference"],js=()=>globalThis.crypto.randomUUID?.()||Array.from(globalThis.crypto.getRandomValues(new Uint8Array(16)),i=>i.toString(16).padStart(2,"0")).join("");function In(i){return String(i.path||i.webkitRelativePath||i.name).replace(/\\/g,"/")}function Pu(i){let e={path:In(i),size:i.size,lastModified:i.lastModified};return i.workspaceRelativePath&&(e.relativePath=i.workspaceRelativePath),e}function Xc(i){return typeof i=="string"&&i.split("/").every(e=>e&&e!=="."&&e!==".."&&!/[:\\]/.test(e))}var Iu=i=>JSON.stringify(i.map(Pu).sort((e,t)=>e.path.localeCompare(t.path)));function aa(i){if(!i||Array.isArray(i)||typeof i!="object")throw new Error("Invalid reference JSON.");if(i.format===ra)throw new Error("This is a workspace file. Use Open workspace.");if(i.source_crs&&i.source_crs!=="EPSG:7854")throw new Error("Unsupported reference CRS.");let e=t=>(typeof t=="number"||typeof t=="string"&&t.trim()!=="")&&Number.isFinite(Number(t));if(i.scene_origin!==void 0&&(!i.scene_origin||typeof i.scene_origin!="object"||!["easting_m","northing_m"].every(t=>e(i.scene_origin[t]))||i.scene_origin.height_m!==void 0&&!e(i.scene_origin.height_m)))throw new Error("Invalid reference scene origin.");for(let t of["lod_source_frame","obj_coordinates"])if(i[t]!==void 0&&typeof i[t]!="string")throw new Error("Invalid reference coordinate frame.");return i}function Lu(i){aa(i);let e=Object.fromEntries(["source_crs","lod_source_frame","obj_coordinates"].filter(t=>i[t]!==void 0).map(t=>[t,i[t]]));return i.scene_origin&&(e.scene_origin=Object.fromEntries(["easting_m","northing_m","height_m"].filter(t=>i.scene_origin[t]!==void 0).map(t=>[t,i.scene_origin[t]]))),e}var Ys=class{constructor(){this.packs=new Map}async identify(e,t,n=null){for(let s of this.packs.values())if(s.role===e){if(n&&s.access){let r=n.directory?[n.directory]:n.files,o=s.access.directory?[s.access.directory]:s.access.files;if(r.length===o.length&&(await Promise.all(r.map(async a=>{for(let l of o)if(await a.isSameEntry(l))return!0;return!1}))).every(Boolean))return s.id}else if(!n&&!s.access&&Iu(t)===Iu(s.files))return s.id}return js()}put(e){this.packs.set(e.id,e)}conflicts(e,t){let n=t.map(In).sort().join(`
`);return this.values(e).filter(s=>s.files?.length&&s.files.map(In).sort().join(`
`)===n)}values(e){return[...this.packs.values()].filter(t=>!e||t.role===e)}sources(){return this.values().map(e=>e.unavailable?e.manifest:{id:e.id,role:e.role,name:e.name,mode:e.mode,root:e.root||"",files:e.files.map(Pu),referenceId:e.referenceId||null,referenceConfig:e.role==="models"&&e.reference?Lu(e.reference):null})}};function Du(i,e,t){return Zs({format:ra,version:1,id:i,sources:e,state:t})}function Zs(i){let e=()=>{throw new Error("Invalid or unsupported workspace file.")};(!i||i.format!==ra||i.version!==1||typeof i.id!="string"||!i.id||!Array.isArray(i.sources)||!i.state||typeof i.state!="object"||Array.isArray(i.state))&&e(),i.sources.length>1e3&&e();let t=new Set,n=0;for(let a of i.sources){(!a||typeof a.id!="string"||!a.id||t.has(a.id)||!h0.includes(a.role)||!["files","directory"].includes(a.mode)||typeof a.name!="string"||typeof a.root!="string"||!Array.isArray(a.files)||!a.files.length)&&e(),t.add(a.id);let l=new Set;for(let c of a.files)(!c||!Xc(c.path)||c.relativePath!==void 0&&!Xc(c.relativePath)||l.has(c.path)||!Number.isSafeInteger(c.size)||c.size<0||!Number.isFinite(c.lastModified))&&e(),l.add(c.path),++n>1e5&&e()}for(let a of i.sources)a.referenceId&&!i.sources.some(l=>l.id===a.referenceId&&l.role==="reference")&&e();let s=i.state,r=a=>a!==null&&typeof a=="object"&&!Array.isArray(a);if(s.visibility!==void 0){(!r(s.visibility)||s.visibility.locations!==void 0&&!r(s.visibility.locations)||s.visibility.categories!==void 0&&!r(s.visibility.categories))&&e(),Object.values(s.visibility.locations||{}).some(a=>typeof a!="boolean")&&e();for(let a of Object.values(s.visibility.categories||{}))(!r(a)||Object.values(a).some(l=>typeof l!="boolean"))&&e()}s.map&&(!Array.isArray(s.map.center)||s.map.center.length!==2||!s.map.center.every(Number.isFinite)||Math.abs(s.map.center[1])>85.1||![s.map.zoom,s.map.pitch,s.map.bearing].every(Number.isFinite)||s.map.zoom<0||s.map.zoom>24||s.map.pitch<0||s.map.pitch>85)&&e(),s.panorama&&(![s.panorama.yaw,s.panorama.pitch,s.panorama.fov].every(Number.isFinite)||Math.abs(s.panorama.pitch)>87||s.panorama.fov<30||s.panorama.fov>110)&&e(),s.headings!==void 0&&(!r(s.headings)||Object.values(s.headings).some(a=>!Number.isFinite(a)))&&e();for(let a of["labels","grounded","compass"])s[a]!==void 0&&typeof s[a]!="boolean"&&e();if(s.base!==void 0&&!["aerial","topo","metro"].includes(s.base)&&e(),s.selected!==void 0&&s.selected!==null&&typeof s.selected!="string"&&e(),s.appearance)for(let a of["obj","shape"])for(let l of["point","line","fill"]){let c=s.appearance[a]?.[l];(!/^#[0-9a-f]{6}$/i.test(c?.color)||!Number.isFinite(c?.transparency)||c.transparency<0||c.transparency>100)&&e()}s.activeReference!==void 0&&s.activeReference!==null&&!i.sources.some(a=>a.id===s.activeReference&&a.role==="reference")&&e(),s.headingStep!==void 0&&s.headingStep!==1&&s.headingStep!==5&&e();let o=Object.fromEntries(["visibility","map","panorama","headings","labels","grounded","compass","headingStep","base","selected","appearance","activeReference"].filter(a=>s[a]!==void 0).map(a=>[a,s[a]]));return s.map&&(o.map={center:[...s.map.center],zoom:s.map.zoom,pitch:s.map.pitch,bearing:s.map.bearing}),s.panorama&&(o.panorama={yaw:s.panorama.yaw,pitch:s.panorama.pitch,fov:s.panorama.fov}),s.appearance&&(o.appearance=Object.fromEntries(["obj","shape"].map(a=>[a,Object.fromEntries(["point","line","fill"].map(l=>[l,{color:s.appearance[a][l].color,transparency:s.appearance[a][l].transparency}]))]))),{format:ra,version:1,id:i.id,sources:i.sources.map(({id:a,role:l,name:c,mode:h,root:u,files:f,referenceId:p,referenceConfig:g})=>({id:a,role:l,name:c,mode:h,root:u,files:f.map(({path:_,size:m,lastModified:d,relativePath:b})=>b?{path:_,size:m,lastModified:d,relativePath:b}:{path:_,size:m,lastModified:d}),referenceId:p||null,referenceConfig:g?Lu(g):null})),state:o}}var oa=class{async db(){return globalThis.indexedDB?new Promise((e,t)=>{let n=indexedDB.open("vistas-workspace-access",1);n.onupgradeneeded=()=>n.result.createObjectStore("handles"),n.onsuccess=()=>e(n.result),n.onerror=()=>t(n.error)}):null}async get(e){return this.run("readonly",t=>t.get(e))}async put(e,t){return this.run("readwrite",n=>n.put(t,e))}async run(e,t){let n=await this.db();if(!n)return null;try{return await new Promise((s,r)=>{let o=n.transaction("handles",e),a=t(o.objectStore("handles"));o.oncomplete=()=>s(a.result),o.onerror=()=>r(o.error),o.onabort=()=>r(o.error)})}finally{n.close()}}};async function qc(i,{request:e=!1}={}){let t=i.directory?[i.directory]:i.files;for(let r of t){let o=await r.queryPermission({mode:"read"});if(o!=="granted"&&e&&(o=await r.requestPermission({mode:"read"})),o!=="granted")throw new Error("File access needs to be reconnected.")}let n=[];async function s(r,o){for await(let a of r.values())if(a.kind==="directory")await s(a,o+a.name+"/");else{let l=await a.getFile();Object.defineProperty(l,"path",{value:o+l.name,configurable:!0}),n.push(l)}}if(i.directory)await s(i.directory,i.directory.name+"/");else for(let r of i.files)n.push(await r.getFile());return n}function Yc(i,e){let t={photos:/\.(jpg|jpeg|png|webp)$/i,spatial:/\.(zip|shp|dbf|shx|prj|cpg)$/i,models:/(\.(obj|zip|mtl)|export_reference\.json)$/i,reference:/\.json$/i}[i];return Array.from(e).filter(n=>t.test(n.name))}function jc(i,e){let t=new Map,n=o=>i.mode==="directory"?o.split("/").slice(1).join("/"):o;for(let o of e){let a=n(In(o));if(t.has(a))throw new Error("Ambiguous file path: "+a);t.set(a,o)}let s=!1;return{files:i.files.map(o=>{let a=t.get(n(o.path));if(!a)throw new Error("Missing file: "+o.path);return(a.size!==o.size||a.lastModified!==o.lastModified)&&(s=!0),In(a)!==o.path&&Object.defineProperty(a,"path",{value:o.path,configurable:!0}),a}),changed:s}}function Uu(i){let e=new Map,t=new Map;for(let n of i){let s=n.webkitRelativePath?.split("/").slice(1).join("/");Xc(s)&&(e.set(s,n),t.has(n.name)||t.set(n.name,[]),t.get(n.name).push(s))}return{paths:e,names:t}}function Nu(i,{paths:e,names:t}){let n=(l,c)=>c.size===l.size&&c.lastModified===l.lastModified,s=l=>t.get(l.path.split("/").at(-1))||[],r=i.files.map(l=>l.relativePath);if(i.mode==="directory"&&r.every(l=>!l)){let l=i.files[0],h=(e.has(l.path)?[""]:s(l).filter(u=>u.endsWith("/"+l.path)).map(u=>u.slice(0,-l.path.length))).filter(u=>i.files.every(f=>e.has(u+f.path)));if(h.length!==1)throw new Error(h.length?"Multiple folders match "+i.name+".":"Missing source folder: "+i.root);i.files.forEach((u,f)=>{r[f]=h[0]+u.path})}let o=!1;return{files:i.files.map((l,c)=>{let h=r[c]||l.path;if(!e.has(h)&&!r[c]){let p=s(l),g=p.filter(m=>n(l,e.get(m))),_=g.length?g:p;if(_.length>1)throw new Error("Multiple files match "+l.path+".");h=_[0]||h}let u=e.get(h);if(!u)throw new Error("Missing file: "+h);n(l,u)||(o=!0);let f=new File([u],u.name,{type:u.type,lastModified:u.lastModified});return Object.defineProperties(f,{path:{value:l.path,configurable:!0},workspaceRelativePath:{value:h}}),f}),changed:o}}function Ou({registry:i,snapshot:e,restore:t,importFiles:n,notify:s,setBusy:r}){let o=b=>document.getElementById(b),a=new oa,l=!1,c=window.location.protocol!=="file:",h={spatialInput:"spatial",photosInput:"photos",objInput:"models",objFolderInput:"models",referenceInput:"reference"};function u(b){l=b,r(b);for(let v of["saveWorkspace","openWorkspace","openWorkspaceFolder",...Object.keys(h)])o(v).disabled=b}function f(b,v,x){v.textContent=x.message+" ";let C=document.createElement("button");C.type="button",C.className="button secondary",C.textContent="Choose using standard picker",C.onclick=()=>{b.dataset.standardPickerOnce="true",b.click()},v.append(C)}async function p(b,v,x,C=()=>{}){let E={spatial:".zip,.shp,.dbf,.shx,.prj,.cpg",photos:".jpg,.jpeg,.png,.webp",models:".zip,.obj,.json,.mtl",reference:".json"},R=v?{directory:await window.showDirectoryPicker({mode:"read"})}:{files:await window.showOpenFilePicker({multiple:b!=="reference",types:[{description:b==="reference"?"Reference JSON":b,accept:{"application/octet-stream":(x?.accept||E[b]).split(",")}}]})};return C(),{access:R,files:Yc(b,await qc(R))}}async function g(b,v,x=null){if(!l){u(!0);try{let C;if(!x){let R=i().conflicts(b,v);if(R.length&&(C=await _(R),!C))return}let E=await n(b,Yc(b,v),x,{sourceId:C});if(E?.access)try{await a.put(E.id,E.access)}catch{s("Data loaded. File access could not be remembered; reconnect it when opening the workspace.",!1)}else E&&await a.put(E.id,null).catch(()=>{})}catch(C){C.name!=="AbortError"&&s(C.message)}finally{u(!1)}}}function _(b){let v=o("sourceConflict"),x=o("sourceConflictChoices");return x.replaceChildren(),new Promise(C=>{let E=null;for(let[D,S]of b.entries()){let w=document.createElement("button");w.type="button",w.className="button secondary",w.dataset.sourceId=S.id,w.textContent="Update "+S.name+(b.length>1?" (pack "+(D+1)+")":""),w.onclick=()=>{E=S.id,v.close()},x.append(w)}let R=()=>{v.removeEventListener("close",R),C(E)};v.addEventListener("close",R),o("sourceAddNew").onclick=()=>{E=js(),v.close()},o("sourceConflictCancel").onclick=()=>v.close(),v.showModal()})}for(let[b,v]of Object.entries(h)){let x=o(b),C=x.hasAttribute("webkitdirectory");x.onchange=()=>{let E=Array.from(x.files||[]);x.value="",E.length&&g(v,E)},x.addEventListener("click",E=>{if(x.dataset.standardPickerOnce){delete x.dataset.standardPickerOnce;return}let R=C?window.showDirectoryPicker:window.showOpenFilePicker;if(!c||!R||l)return;E.preventDefault();let D={spatial:"spatialFeedback",photos:"photosFeedback",models:"objFeedback",reference:"referenceFeedback"}[v];p(v,C,x,()=>{u(!0),o(D).textContent="Indexing\u2026"}).then(({files:S,access:w})=>(u(!1),g(v,S,w))).catch(S=>{u(!1),S.name!=="AbortError"&&f(x,o(D),S)})})}o("saveWorkspace").onclick=()=>{if(!l)try{let b="views-vistas.vistas-workspace.json",v=new Blob([JSON.stringify(e(),null,2)],{type:"application/json"});if(v.size>10485760)throw new Error("Workspace metadata exceeds the 10 MB limit. Split the data into smaller workspaces.");let x=URL.createObjectURL(v),C=document.createElement("a");C.href=x,C.download=b,document.body.append(C);try{C.click()}finally{C.remove(),setTimeout(()=>URL.revokeObjectURL(x),1e3)}o("workspaceFeedback").textContent="Workspace download requested. Check your browser\u2019s downloads."}catch(b){s(b.message)}};async function m(b,v=null){if(!l){u(!0),o("workspaceFeedback").textContent="Opening workspace\u2026";try{if(b.size>10485760)throw new Error("Workspace JSON exceeds the 10 MB limit.");let x=Zs(JSON.parse(await b.text())),C=new Map,E=[];for(let R of x.sources)try{let D=null,S;if(v)S=Nu(R,v);else{let P=i().packs.get(R.id);D=P?.access||await a.get(R.id);let B=D?await qc(D):P?.files;if(!B?.length)throw new Error("Choose the workspace folder or reconnect this source.");S=jc(R,B)}let w={...R,...S,access:D};S.changed?E.push({source:R,pack:w,message:"Files have changed since this workspace was saved."}):C.set(R.id,w)}catch(D){E.push({source:R,message:D.message})}if(E.length&&!await d(x,E,C)){o("workspaceFeedback").textContent="Workspace opening cancelled.";return}await t(x,C);for(let R of C.values())R.access&&await a.put(R.id,R.access).catch(()=>{});o("workspaceFeedback").textContent=C.size===x.sources.length?"Workspace loaded.":"Workspace loaded with unavailable packs. Reopen it to reconnect them.",o("importModal").open&&o("importModal").close()}catch(x){o("workspaceFeedback").textContent="Workspace was not loaded.",s(x.message)}finally{u(!1)}}}function d(b,v,x){let C=o("workspaceReconnect"),E=o("workspaceSources");return E.replaceChildren(),new Promise(R=>{let D=()=>{o("workspaceLoad").disabled=x.size!==b.sources.length,o("workspacePartial").textContent="Load available data ("+x.size+"/"+b.sources.length+" packs)"};for(let P of v){let V=function(ne){x.set(P.source.id,ne),j.disabled=!0,q.textContent=ne.changed?"Updated files accepted.":"Reconnected.",D()},B=document.createElement("section");B.className="workspace-source";let G=document.createElement("strong");G.textContent=P.source.role+": "+P.source.name;let q=document.createElement("p");q.textContent=P.message;let j=document.createElement("button");j.type="button",j.className="button secondary",j.textContent=P.pack?"Use updated files":"Reconnect";let H=document.createElement("input");H.type="file",H.multiple=P.source.role!=="reference",H.hidden=!0,P.source.mode==="directory"&&(H.setAttribute("webkitdirectory",""),H.setAttribute("directory",""));async function Q(ne,ae){try{let de=jc(P.source,ne),De={...P.source,...de,access:ae};de.changed?(P.pack=De,j.textContent="Use updated files",q.textContent="Files differ from the saved sizes/dates. Choose \u201CUse updated files\u201D to continue."):V(De)}catch(de){q.textContent=de.message}}H.onchange=()=>Q(Array.from(H.files||[]),null),j.onclick=async()=>{if(P.pack){V(P.pack);return}try{let ne=P.source.mode==="directory";if(c&&(ne?window.showDirectoryPicker:window.showOpenFilePicker)){let ae=await p(P.source.role,ne);await Q(ae.files,ae.access)}else H.click()}catch(ne){ne.name!=="AbortError"&&f(H,q,ne)}},B.append(G,q,j,H),E.append(B)}let S=!1,w=()=>{C.removeEventListener("close",w),R(S)};C.addEventListener("close",w),o("workspaceLoad").onclick=()=>{S=!0,C.close()},o("workspacePartial").onclick=()=>{S=!0,C.close()},o("workspaceCancel").onclick=()=>C.close(),D(),C.showModal()})}return o("openWorkspaceFolder").onclick=()=>o("workspaceFolderInput").click(),o("workspaceFolderInput").onchange=()=>{let b=o("workspaceFolderInput"),v=Uu(b.files||[]);if(b.value="",l||!v.paths.size)return;let x=[...v.paths].filter(([R])=>!R.includes("/")&&/\.vistas-workspace(?: \(\d+\))?\.json$/i.test(R));if(!x.length){s("Put the .vistas-workspace.json file at the top of the folder containing your source data, then choose that folder.");return}if(x.length===1){m(x[0][1],v);return}let C=o("chooseWorkspace"),E=o("workspaceChoices");E.replaceChildren();for(let[R,D]of x){let S=document.createElement("button");S.type="button",S.className="button secondary",S.textContent=R,S.onclick=()=>{C.close(),m(D,v)},E.append(S)}C.addEventListener("close",()=>E.replaceChildren(),{once:!0}),C.showModal()},o("openWorkspace").onclick=async()=>{if(!l)try{if(c&&window.showOpenFilePicker){let[b]=await window.showOpenFilePicker({types:[{description:"Views & Vistas workspace",accept:{"application/json":[".json"]}}]});await m(await b.getFile())}else o("workspaceInput").click()}catch(b){b.name!=="AbortError"&&f(o("workspaceInput"),o("workspaceFeedback"),b)}},o("workspaceInput").onchange=()=>{let b=o("workspaceInput").files?.[0];o("workspaceInput").value="",b&&m(b)},{open:m,store:a}}var u0="M4.82816 10.4848L10.485 4.8279C11.6566 3.65633 13.5561 3.65633 14.7277 4.8279C15.8992 5.99947 15.8992 7.89897 14.7277 9.07054L8.01014 15.7881C7.42436 16.3738 6.47461 16.3738 5.88882 15.7881C5.30304 15.2023 5.30304 14.2525 5.88882 13.6667L11.8992 7.65633C12.0945 7.46106 12.0945 7.14448 11.8992 6.94922C11.704 6.75396 11.3874 6.75396 11.1921 6.94922L5.18172 12.9596C4.20541 13.9359 4.20541 15.5189 5.18172 16.4952C6.15803 17.4715 7.74094 17.4715 8.71725 16.4952L15.4348 9.77765C16.9969 8.21555 16.9969 5.68289 15.4348 4.12079C13.8727 2.55869 11.34 2.55869 9.77791 4.12079L4.12106 9.77765C3.92579 9.97291 3.92579 10.2895 4.12106 10.4848C4.31632 10.68 4.6329 10.68 4.82816 10.4848Z",Bu,ca=class{constructor(e){this.map=e,this.cache=new Map,this.sequence=0}image(e,t){let n=JSON.stringify([e,t]),s=this.cache.get(n);if(!s){let r=document.createElement("canvas"),o=2,a=r.getContext("2d");a.font='600 12px "Segoe UI", sans-serif';let l=String(e).slice(0,160);for(;l.length&&a.measureText(l+"\u2026").width>320;)l=l.slice(0,-1);l!==e&&(l+="\u2026");let c=Math.ceil(a.measureText(l).width)+14+(t?19:0),h=25;r.width=c*o,r.height=h*o,a.scale(o,o),a.fillStyle="#fffdf7",a.fillRect(0,0,c,h),a.strokeStyle="#203e34",a.lineWidth=1,a.strokeRect(.5,.5,c-1,h-1),a.font='600 12px "Segoe UI", sans-serif',a.fillStyle="#203e34",a.textBaseline="middle",a.fillText(l,7,h/2),t&&(Bu??=new Path2D(u0),a.save(),a.translate(c-21,(h-16)/2),a.scale(.8,.8),a.fillStyle="#203e34",a.fill(Bu),a.restore()),s={id:"vistas-label-"+ ++this.sequence,data:a.getImageData(0,0,r.width,r.height)},this.cache.set(n,s)}return this.map.hasImage(s.id)||this.map.addImage(s.id,s.data,{pixelRatio:2}),s.id}update(e,t){if(!this.map.getSource("vistas-labels"))return;let n=new Set,s=e.map(({id:r,name:o,photo:a,coordinates:l})=>{let c=this.image(o,a);return n.add(c),{type:"Feature",geometry:{type:"Point",coordinates:l},properties:{VIEW_ID:r,image:c}}});this.map.getSource("vistas-labels").setData({type:"FeatureCollection",features:s}),this.map.getLayer("vistas-labels")&&this.map.setLayoutProperty("vistas-labels","visibility",t?"visible":"none");for(let[r,o]of this.cache)n.has(o.id)||(this.map.hasImage(o.id)&&this.map.removeImage(o.id),this.cache.delete(r))}dispose(){for(let e of this.cache.values())this.map.hasImage(e.id)&&this.map.removeImage(e.id);this.cache.clear()}};var is=Math.PI/180,zu=6378137,ss=1e-8,Vu=i=>i>=0&&i<360?i:(i%360+360)%360,d0=()=>({type:"FeatureCollection",features:[]});function Js(i){if(typeof i=="number")return Number.isFinite(i)?i:null;if(typeof i!="string")return null;let e=i.trim();if(!/^[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?\s*°?$/i.test(e))return null;let t=Number(e.replace(/\s*°$/,""));return Number.isFinite(t)?t:null}function Hu(i=[]){let e=new Map;for(let t of i){let n=t?.properties||t||{};for(let s=1;s<=5;s++){let r=Js(n[`BEARING${s}`]),o=Js(n[`HFOV${s}`]),a=Js(n[`DIST${s}`]);if(r===null||o===null||o<=0||o>360)continue;let l={heading:Vu(r),horizontalFov:o};a!==null&&a>0&&(l.distance=a),e.set(`${l.heading}:${o}:${l.distance??""}`,l)}}return[...e.values()]}function Gu(i){if(!Array.isArray(i)||i.length<2||!i.slice(0,2).every(Number.isFinite)||Math.abs(i[0])>180||Math.abs(i[1])>=90)throw new Error("Invalid viewshed origin.");let e=zu*is*Math.cos(i[1]*is),t=zu*is;return{toLocal:n=>({x:(n[0]-i[0])*e,y:(n[1]-i[1])*t}),toGeographic:n=>[i[0]+n.x/e,i[1]+n.y/t]}}function f0(i,e){if(!Array.isArray(i)||i.some(n=>!Array.isArray(n)||!n.slice(0,2).every(Number.isFinite)||n.length<2))return[];let t=i.map(e);return t.length>1&&t[0].x===t.at(-1).x&&t[0].y===t.at(-1).y&&t.pop(),t}function Wu(i,e,t){if(typeof t!="function")throw new Error("A polygon triangulator is required.");let n=Gu(e),s=[],r=0;for(let o of i||[]){let a=o?.geometry,l=a?.type==="Polygon"?[a.coordinates]:a?.type==="MultiPolygon"?a.coordinates:[];for(let c of l||[]){if(!Array.isArray(c)||!c.length)continue;let h=c.map(p=>f0(p,n.toLocal));if(h.some(p=>p.length<3))continue;let u=h.flat(),f=t(h[0].map(p=>({...p})),h.slice(1).map(p=>p.map(g=>({...g}))));for(let p of f||[]){if(!Array.isArray(p)||p.length!==3||p.some(_=>!Number.isInteger(_)||!u[_]))continue;let g=p.map(_=>u[_]);if(!(Math.abs(Xu(g))<=ss)){s.push(g);for(let _ of g)r=Math.max(r,Math.hypot(_.x,_.y))}}}}return{origin:e.slice(0,2),triangles:s,radius:r,toGeographic:n.toGeographic}}function Xu(i){let e=0;for(let t=0;t<i.length;t++){let n=i[t],s=i[(t+1)%i.length];e+=n.x*s.y-s.x*n.y}return e/2}function ku(i,e,t){if(!i.length)return[];let n=[],s=i.at(-1),r=e*s.x+t*s.y;for(let o of i){let a=e*o.x+t*o.y,l=r>=-ss,c=a>=-ss;if(l!==c){let h=r/(r-a);n.push({x:s.x+(o.x-s.x)*h,y:s.y+(o.y-s.y)*h})}c&&n.push(o),s=o,r=a}return n}function qu(i,e){if(e>=360)return[[0,360]];let t=Vu(i-e/2),n=t+e;return n>360?[[t,360],[0,n-360]]:[[t,n]]}function p0(i){let e=i.flatMap(n=>{let s=Js(n?.heading),r=Js(n?.horizontalFov);return s===null||r===null||r<=0||r>360?[]:qu(s,r)}).sort((n,s)=>n[0]-s[0]),t=[];for(let n of e){let s=t.at(-1);s&&n[0]<=s[1]+ss?s[1]=Math.max(s[1],n[1]):t.push([...n])}return t}function Yu(i,e,t,n=[]){if(!i?.triangles?.length||!Number.isFinite(e)||!Number.isFinite(t)||t<=0||t>=180)return d0();let s=qu(e,t),r=n.length?p0(n):[[0,360]],o=[];for(let l of s)for(let c of r){let h=Math.max(l[0],c[0]),u=Math.min(l[1],c[1]);u-h>ss&&o.push([h,u])}let a=[];for(let[l,c]of o){let h=l*is,u=c*is;for(let f of i.triangles){let p=ku(f,Math.cos(h),-Math.sin(h));if(p=ku(p,-Math.cos(u),Math.sin(u)),p.length<3||Math.abs(Xu(p))<=ss)continue;let g=p.map(i.toGeographic);g.push([...g[0]]),a.push([g])}}return{type:"FeatureCollection",features:a.length?[{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:a}}]:[]}}function Zc(i,e,t,n){if(!Number.isFinite(e)||!Number.isFinite(t)||t<=0||t>360||!Number.isFinite(n)||n<=0)return null;let s=Gu(i),r=Math.max(2,Math.ceil(t/4)),o=[i.slice(0,2)];for(let a=0;a<=r;a++){let l=(e-t/2+t*a/r)*is;o.push(s.toGeographic({x:Math.sin(l)*n,y:Math.cos(l)*n}))}return o.push(i.slice(0,2)),{type:"Feature",properties:{},geometry:{type:"Polygon",coordinates:[o]}}}var J=i=>document.getElementById(i),xi={type:"FeatureCollection",features:[]},ua="uos.vistas.metromap.key.v1",rn=Tu();function $s(){Cu(T.map,rn.shape),T.obj?.setAppearance(rn.obj),Au(rn)}function $c(){let i=J("appearanceControls");i.replaceChildren();for(let[e,t]of[["obj","3D Models"],["shape","Shapefiles"]]){let n="fill",s=Rt("section","appearance-section");s.append(Rt("h2","",t));let r=Rt("div","appearance-row"),o=Rt("div","appearance-pills");o.setAttribute("role","group"),o.setAttribute("aria-label",t+" appearance target");let a=document.createElement("input");a.type="color",a.id=e+"Color";let l=document.createElement("input");l.type="range",l.min=0,l.max=100,l.step=1,l.id=e+"Transparency";let c=Rt("output");c.htmlFor=l.id;let h=()=>{for(let f of o.children)f.setAttribute("aria-pressed",String(f.dataset.part===n));a.value=rn[e][n].color,l.value=rn[e][n].transparency,a.setAttribute("aria-label",t+" "+n+" colour"),l.setAttribute("aria-label",t+" "+n+" transparency"),c.textContent=l.value+"%"};for(let f of["point","line","fill"]){let p=Rt("button","",f[0].toUpperCase()+f.slice(1));p.type="button",p.dataset.part=f,p.onclick=()=>{n=f,h()},o.append(p)}a.oninput=()=>{rn[e][n].color=a.value,$s()},l.oninput=()=>{rn[e][n].transparency=Number(l.value),c.textContent=l.value+"%",$s()},r.append(o,a);let u=Rt("label","appearance-transparency");u.htmlFor=l.id,u.append(Rt("span","","Transparency"),l,c),s.append(r,u),i.append(s),h()}}var T={map:null,obj:null,viewer:null,pointRecords:[],cones:[],locations:new Map,visibility:new Map,gates:new qs,checkboxes:[],groupToggles:[],sources:new Ys,workspaceId:js(),workspaceBusy:!1,headings:new Map,referenceId:null,pendingReferenceId:null,labelsEnabled:!0,labels:null,workspaceRestored:!1,photoIndex:Wc(),photoViews:[],selected:null,pendingSelected:null,direction:null,compassShown:!1,headingStep:5,base:"aerial",metroKey:"",reference:null,loadingObj:!1,selectionSerial:0,spatialSerial:0,pointsData:xi,conesData:xi};function pn(i,e=!0){let t=document.createElement("div");t.className="toast"+(e?" bad":""),t.textContent=i,J("toastRegion").append(t),setTimeout(()=>t.remove(),e?8500:4500)}function vi(i,e,t=!1){let n=J(i);n.textContent=e,n.classList.toggle("error",t)}function Kc(i){i==="metroModal"&&(J("metroKeyInput").value=T.metroKey),J(i).showModal()}function Zu(i){J(i).close()}function fa(){return matchMedia("(prefers-reduced-motion: reduce)").matches}function Ju(i){let e={aerial:{url:"https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",attribution:"Tiles \xA9 Esri, Maxar, Earthstar Geographics, and GIS User Community"},topo:{url:"https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}",attribution:"Tiles \xA9 Esri, HERE, Garmin, OSM contributors and GIS User Community"},metro:{url:"https://api-v3.metromap.com.au/tiles/xyz/Australia_latest/{z}/{y}/{x}.png?key="+encodeURIComponent(T.metroKey),attribution:"Imagery \xA9 MetroMap, Aerometrex"}},t=e[i]||e.aerial;return{version:8,name:i,sources:{base:{type:"raster",tiles:[t.url],tileSize:256,maxzoom:i==="metro"?22:19,attribution:t.attribution}},layers:[{id:"basemap",type:"raster",source:"base"}]}}function da(i){if(i==="metro"&&!T.metroKey){Kc("metroModal");return}if(T.map){T.base=i;for(let e of document.querySelectorAll(".basemap-btn"))e.setAttribute("aria-pressed",String(e.dataset.base===i));T.map.setStyle(Ju(i),{diff:!1})}}function rs(i,e){T.map?.getSource(i)?.setData(e)}function m0(){let i=T.map;if(!i)return;for(let t of["points","cones","heading","frustum","reference","overlap","labels"])i.getSource("vistas-"+t)||i.addSource("vistas-"+t,{type:"geojson",data:xi});let e=[{id:"vistas-cones-fill",type:"fill",source:"vistas-cones",paint:{"fill-color":"#ed0c73","fill-opacity":.09}},{id:"vistas-cones-casing",type:"line",source:"vistas-cones",paint:{"line-color":"#182d3b","line-width":4.1,"line-opacity":.9}},{id:"vistas-cones-outline",type:"line",source:"vistas-cones",paint:{"line-color":"#f50083","line-width":2.35,"line-opacity":.98}},{id:"vistas-reference",type:"line",source:"vistas-reference",paint:{"line-color":"#ffda26","line-width":2.15,"line-dasharray":[3,2],"line-opacity":.98}},{id:"vistas-frustum-fill",type:"fill",source:"vistas-frustum",paint:{"fill-color":"#00e6d0","fill-opacity":.13}},{id:"vistas-frustum-outline",type:"line",source:"vistas-frustum",paint:{"line-color":"#eafffb","line-width":2.1,"line-opacity":.98}},{id:"vistas-overlap",type:"fill",source:"vistas-overlap",paint:{"fill-color":"#00e6a7","fill-opacity":.68}},{id:"vistas-direction",type:"line",source:"vistas-heading",paint:{"line-color":"#fff7d0","line-width":2.8,"line-opacity":1}},{id:"vistas-selected",type:"circle",source:"vistas-points",filter:["==",["get","VIEW_ID"],"___none___"],paint:{"circle-radius":15,"circle-color":"#fff7d0","circle-opacity":.28,"circle-stroke-color":"#f50083","circle-stroke-width":2.6}},{id:"vistas-points",type:"circle",source:"vistas-points",paint:{"circle-radius":["interpolate",["linear"],["zoom"],12,5.2,17,8.1,20,11],"circle-color":"#ffda26","circle-stroke-color":"#182d3b","circle-stroke-width":2.25}}];for(let t of e)i.getLayer(t.id)||i.addLayer(t);i.getLayer("vistas-labels")||i.addLayer({id:"vistas-labels",type:"symbol",source:"vistas-labels",layout:{"icon-image":["get","image"],"icon-anchor":"left","icon-offset":[12,0],"icon-allow-overlap":!1}}),$s(),T.obj?.attach(),Ks(),qn()}function g0(){T.photoViews=[];for(let i of T.locations.values())i.photo=i.point?T.photoIndex.match(Oc(i.point.properties)):null,i.photo&&T.photoViews.push(i)}function $u(){T.locations=Ru(T.pointRecords,T.cones,T.obj?.loaded||[]),g0(),el(),Qs()}function Ks(){if(!T.map?.getSource("vistas-points"))return;let i=[],e=[];for(let n of T.locations.values())n.point&&Xn("point:"+n.id)&&i.push({...n.point,properties:{...n.point.properties,VIEW_ID:n.id,photoReady:n.photo?1:0}}),Xn("viewshed:"+n.id)&&e.push(...n.cones);T.pointsData={type:"FeatureCollection",features:i},T.conesData={type:"FeatureCollection",features:e},rs("vistas-points",T.pointsData),rs("vistas-cones",T.conesData),T.map.getLayer("vistas-selected")&&T.map.setFilter("vistas-selected",["==",["get","VIEW_ID"],T.selected||"___none___"]);let t=[];for(let n of T.locations.values()){let s=n.objects.find(o=>o.type==="Points"&&Xn("obj:"+o.id)),r=n.point?.geometry.coordinates.slice(0,2);if(!r&&s&&T.obj.projection){let o=new Ot().setFromObject(s.model).getCenter(new F);r=T.obj.projection.toLngLat(o.x,o.z)}r&&(Xn("point:"+n.id)&&n.point||s)&&t.push({id:n.id,name:n.label,photo:!!n.photo,coordinates:r})}T.labels?.update(t,T.labelsEnabled)}function Xn(i){return T.visibility.get(i)!==!1}function _0(i,e){let t=n=>n.map(s=>new We(s.x,s.y));return Is.triangulateShape(t(i),e.map(t))}function Qs(){T.visibility.clear();for(let e of T.locations.values())for(let t of e.layers)T.visibility.set(t.id,T.gates.visible(e.id,t));let i=new Map;for(let e of T.locations.values())for(let t of e.layers)t.source==="obj"&&i.set(t.entryId,Xn(t.id));T.obj?.applyEntryVisibility(i),Ks(),qn(),ed()}function FM(i,e){for(let t of T.locations.values())for(let n of t.layers)i.includes(n.id)&&T.gates.setCategory(n.source,n.kind,e);Qs()}function qn(){Ku();let i=T.locations.get(T.selected),e=i?.point?.geometry.coordinates.slice(0,2),t=T.direction,n=!!(e&&t&&T.viewer?.active&&i.photo),s=!!e&&Xn("frustum:"+i.id),r=!!e&&Xn("viewshed:"+i.id),o=xi,a=xi,l=xi,c=xi;if(e){i.prepared||(i.prepared=Wu(i.cones,e,_0)),i.sectors||(i.sectors=Hu(i.pointRecords));let h=i.prepared.radius||Math.max(90,...i.sectors.map(u=>u.distance||0));if(s&&(c={type:"FeatureCollection",features:i.sectors.map(u=>Zc(e,u.heading,u.horizontalFov,u.distance||h)).filter(Boolean)},n)){let u=Zc(e,t.heading,t.horizontalFov,h);o={type:"FeatureCollection",features:u?[u]:[]},Xn("point:"+i.id)&&(l={type:"FeatureCollection",features:[mu(...e,t.heading,Math.min(h,100))]})}n&&r&&(a=Yu(i.prepared,t.heading,t.horizontalFov)),T.obj?.setAlignment({viewId:i.id,origin:e,heading:t?.heading||0,horizontalFov:t?.horizontalFov||0,active:n,intervals:[]})}else T.obj?.setAlignment({active:!1});T.map?.getSource("vistas-overlap")&&(rs("vistas-reference",c),rs("vistas-frustum",o),rs("vistas-overlap",a),rs("vistas-heading",l))}function Ku(){let i=T.direction?.heading;J("setPhotoNorth").disabled=!T.viewer?.active;let e=T.compassShown&&T.viewer?.active&&Number.isFinite(i);if(J("photoCompass").classList.toggle("hidden",!e),e){let t=(Math.round(i)%360+360)%360,n=["N","NE","E","SE","S","SW","W","NW"][Math.round(t/45)%8];J("photoCompassBearing").textContent=n+" \xB7 "+String(t).padStart(3,"0")+"\xB0"}}function Qu(i,e,t){let n=document.createElement("input");return n.type="checkbox",n.setAttribute("aria-label",e),T.checkboxes.push({input:n,layers:i,scope:t}),n.addEventListener("change",()=>{t.locationId?T.gates.setLocation(t.locationId,n.checked):T.gates.setCategory(t.source,t.kind,n.checked),Qs()}),n}function ed(){for(let{input:t,layers:n,scope:s}of T.checkboxes)Object.assign(t,{checked:s.locationId?T.gates.location(s.locationId):T.gates.category(s.source,s.kind),indeterminate:!1,disabled:!n.length});for(let{button:t,source:n,layers:s}of T.groupToggles){let r=Xs.filter(o=>o!=="other"||s.some(a=>a.kind==="other")).every(o=>T.gates.category(n,o));t.disabled=!s.length,t.textContent=r?"Select none":"Select all",t.setAttribute("aria-pressed",String(r))}let i=[...T.locations.values()],e=i.length>0&&i.every(t=>T.gates.location(t.id));J("layerSelectionToggle").disabled=!i.length,J("layerSelectionToggle").textContent=e?"Select none":"Select all",J("layerSelectionToggle").setAttribute("aria-pressed",String(e))}function x0(){let i=J("mapLayerControls");i.replaceChildren(),T.groupToggles=[];let e=[...T.locations.values()].flatMap(t=>t.layers);for(let[t,n]of[["map","Shapefile"],["obj","3D Models"]]){let s=document.createElement("fieldset");s.append(Rt("legend","",n));let r=e.filter(a=>a.source===t),o=Rt("button","text-button");o.type="button",o.dataset.source=t,T.groupToggles.push({button:o,source:t,layers:r}),o.onclick=()=>{let a=Xs.filter(l=>l!=="other"||r.some(c=>c.kind==="other"));T.gates.setGroup(t,!a.every(l=>T.gates.category(t,l))),Qs()},s.append(o);for(let[a,l]of[["point","Points"],["viewshed","Viewsheds"],["frustum","Frustums"]]){let c=Rt("label","map-layer-option"),h=e.filter(f=>f.source===t&&f.kind===a),u=Qu(h,n+" "+l,{source:t,kind:a});u.dataset.source=t,u.dataset.kind=a,c.append(u,document.createTextNode(l)),s.append(c),t==="map"&&a==="frustum"&&(c.dataset.tooltip="Photo/reference frustums derived from shapefile viewpoints")}i.append(s)}}function Jc(i){J("mapLayerPanel").hidden=!i,J("mapLayersBtn").setAttribute("aria-expanded",String(i))}async function ju(i){let e=document.querySelector(i);try{document.fullscreenElement===e?await document.exitFullscreen():(document.fullscreenElement&&await document.exitFullscreen(),await e.requestFullscreen())}catch{pn("Fullscreen unavailable.")}}function Rt(i,e,t){let n=document.createElement(i);return e&&(n.className=e),t!==void 0&&(n.textContent=t),n}function el(){let i=J("layerTree"),e=i.scrollTop;T.checkboxes=[];let t=document.createDocumentFragment(),n=[...T.locations.values()],s=new Map;for(let r of n)s.set(r.label,(s.get(r.label)||0)+1);for(let r of n){let o=Rt("div","location");o.dataset.location=r.id,o.classList.toggle("selected",T.selected===r.id);let a=Rt("div","location-row"),l=Rt("button","location-name",r.label);l.type="button",T.selected===r.id&&l.setAttribute("aria-current","true"),(s.get(r.label)>1||r.label!==r.id)&&l.append(Rt("small","",r.id)),l.setAttribute("aria-label",r.label+(r.photo?", photo available":", no matched photo"));let c=Qu(r.layers,"Location "+r.label+" "+r.id,{locationId:r.id});l.onclick=()=>er(r.id),a.append(c,l),o.append(a),t.append(o)}i.replaceChildren(t),J("zoomToSelection").disabled=!T.locations.has(T.selected),J("groundObjLayers").disabled=!T.obj?.loaded.length,J("groundObjLayers").checked=T.obj?.grounded??!0,x0(),td(),ed(),i.scrollTop=e}function td(){let i=J("locationSearch").value.trim().toLocaleLowerCase();for(let e of J("layerTree").children){let t=T.locations.get(e.dataset.location);e.hidden=i!==""&&!(t.label+" "+t.id).toLocaleLowerCase().includes(i)}}function y0(){for(let i of J("layerTree").children)i.classList.toggle("selected",i.dataset.location===T.selected)}function yi(i){J("workspace").classList.toggle("sidebar-closed",!i),J("layersBtn").setAttribute("aria-expanded",String(i))}function nd(i){if(T.headings.has(i))return T.headings.get(i);try{return Number(localStorage.getItem(T.workspaceRestored?"uos.vistas.heading."+T.workspaceId+"."+i:"uos.vistas.heading."+i))||0}catch{return 0}}function id(i,e){T.headings.set(i,e);try{localStorage.setItem(T.workspaceRestored?"uos.vistas.heading."+T.workspaceId+"."+i:"uos.vistas.heading."+i,String(e))}catch{}}async function er(i,{moveMap:e=!0}={}){let t=T.locations.get(i);if(!t)return;let n=J("layerTree").contains(document.activeElement),s=++T.selectionSerial;T.selected=i,T.pendingSelected=null,T.direction=null,T.viewer?.clear(),el(),y0(),qn();let r=[...J("layerTree").children].find(l=>l.dataset.location===i);if(r&&!r.hidden){let l=J("layerTree"),c=r.getBoundingClientRect(),h=l.getBoundingClientRect();(c.top<h.top||c.bottom>h.bottom)&&(l.scrollTop+=c.top-h.top-24),n&&r.querySelector(".location-name").focus({preventScroll:!0})}let o=t.point?.geometry.coordinates.slice(0,2);if(e&&T.map&&(o?T.map.easeTo({center:o,zoom:Math.max(15.6,T.map.getZoom()),duration:fa()?0:650}):t.objects.length&&T.obj?.focus()),Ks(),matchMedia("(max-width: 900px)").matches&&yi(!1),J("panoTitle").textContent=lu(t.label),J("panoPlace").textContent=i,J("emptyMessage").textContent=t.photo?"Panorama":"No photo",J("panoEmpty").classList.toggle("hidden",!!t.photo),J("panoHeader").classList.toggle("hidden",!t.photo),J("panoFooter").classList.toggle("hidden",!t.photo),!t.photo)return;let a=nd(i);J("headingValue").textContent=Math.round(a)+"\xB0",J("prevView").disabled=J("nextView").disabled=T.photoViews.length<2;try{let l=await T.viewer.load(t.photo,a);if(s!==T.selectionSerial||!l)return;T.direction=T.viewer.currentDirection,qn()}catch(l){if(s!==T.selectionSerial)return;T.direction=null,T.viewer.clear(),qn(),J("panoEmpty").classList.remove("hidden"),J("panoHeader").classList.add("hidden"),J("panoFooter").classList.add("hidden"),J("emptyMessage").textContent="Photo unavailable",pn(l.message)}}function la(i){let e=T.photoViews;if(!e.length)return;let t=e.findIndex(n=>n.id===T.selected);er(e[(t+i+e.length)%e.length].id)}function v0(){if(!T.viewer?.active||!T.selected)return;let i=T.viewer.setViewToNorth();J("headingValue").textContent=Math.round(i)+"\xB0",id(T.selected,i),T.direction=T.viewer.currentDirection,qn()}function ha(i){if(!T.viewer?.active||!T.selected)return;let e=T.viewer.changeHeading(i);J("headingValue").textContent=Math.round(e)+"\xB0",id(T.selected,e)}function M0(){let i=T.locations.get(T.selected);if(!T.map||!i)return;let e=new window.maplibregl.LngLatBounds,t=n=>{if(Array.isArray(n))if(typeof n[0]=="number")n.slice(0,2).length===2&&n.slice(0,2).every(Number.isFinite)&&e.extend(n.slice(0,2));else for(let s of n)t(s)};i.point&&t(i.point.geometry.coordinates);for(let n of i.cones)t(n.geometry.coordinates);if(T.obj?.projection)for(let n of i.objects){let s=new Ot().setFromObject(n.model);s.isEmpty()||(e.extend(T.obj.projection.toLngLat(s.min.x,s.min.z)),e.extend(T.obj.projection.toLngLat(s.max.x,s.max.z)))}e.isEmpty()||(T.map.fitBounds(e,{padding:50,maxZoom:18,duration:fa()?0:650}),matchMedia("(max-width: 900px)").matches&&yi(!1))}function sd(){if(!T.map)return;let i=pu([...T.locations.values()].map(t=>t.point).filter(Boolean)),e=fa()?0:650;if(i){let[t,n]=i;t[0]===n[0]&&t[1]===n[1]?T.map.easeTo({center:t,zoom:17,duration:e}):T.map.fitBounds(i,{padding:60,maxZoom:17,duration:e})}else T.obj?.anchorLngLat?T.obj.focus():T.map.easeTo({center:Fc,zoom:14.3,duration:e})}async function Qc(i,e,t,n=null){if(!e.length)throw new Error("No supported files were selected.");let s={...t,role:i,files:e};if(i==="spatial"){let r=await gu(e);if(s.data={points:r.features.filter(o=>o.geometry?.type==="Point"&&fn(o.properties)),cones:r.features.filter(o=>/^(Multi)?Polygon$/.test(o.geometry?.type)&&fn(o.properties))},!s.data.points.length&&!s.data.cones.length)throw new Error("No named viewpoints or view cones found.")}else if(i==="photos")s.data=xu(e);else if(i==="reference")s.data=aa(JSON.parse(await e[0].text()));else{let r=await _u(e);s.data=r.entries,s.reference=r.reference?aa(r.reference):t.referenceConfig||n,r.reference&&(s.referenceId=null)}return s}function rd(){let i=T.sources;T.pointRecords=i.values("spatial").flatMap(e=>e.data?.points||[]),T.cones=i.values("spatial").flatMap(e=>e.data?.cones||[]),T.photoIndex=Wc(i.values("photos").flatMap(e=>e.data||[]))}function od(i,e){if(i.values("models").filter(n=>n.id!==e.id).flatMap(n=>n.data||[]).concat(e.data||[]).reduce((n,s)=>n+s.bytes,0)>500*1024*1024)throw new Error("Combined OBJ inputs exceed the 500 MB preview limit.")}async function b0(i,e,t=null,n={}){let s={spatial:"spatialFeedback",photos:"photosFeedback",models:"objFeedback",reference:"referenceFeedback"}[i];vi(s,"Loading\u2026");try{let r=n.sourceId||await T.sources.identify(i,e,t),o=!!t?.directory||e.some(h=>In(h).includes("/")),a={id:r,mode:o?"directory":"files",root:o?In(e[0]).split("/")[0]:"",name:t?.directory?.name||(o?In(e[0]).split("/")[0]:e.map(h=>h.name).join(", ")),access:t,referenceId:i==="models"?T.referenceId:null},l=await Qc(i,e,a,T.reference);if(i==="models"){od(T.sources,l),T.loadingObj=!0;try{await T.obj.load(l.data,l.reference,()=>{},{append:!0,sourceId:l.id,strict:!0})}finally{T.loadingObj=!1}}let c=T.locations.get(T.selected)?.photo;return T.sources.put(l),i==="reference"&&(T.reference=l.data,T.referenceId=l.id,T.pendingReferenceId=null),rd(),$u(),i==="spatial"&&!T.selected&&sd(),i==="models"&&T.sources.values("models").length===1&&!T.pointRecords.length&&!T.selected&&T.obj.focus(),vi(s,i==="photos"?"Ready":"Loaded"),T.selected&&!T.locations.has(T.selected)?(++T.selectionSerial,T.selected=null,T.direction=null,T.viewer.clear(),J("panoEmpty").classList.remove("hidden"),J("panoHeader").classList.add("hidden"),J("panoFooter").classList.add("hidden"),J("emptyMessage").textContent="Panorama",Ks(),qn()):T.selected&&(J("panoTitle").textContent=T.locations.get(T.selected).label,T.locations.get(T.selected).photo!==c&&await er(T.selected,{moveMap:!1})),l}catch(r){throw vi(s,r.message,!0),r}}function S0(){let i=T.map,e=T.viewer;return Du(T.workspaceId,T.sources.sources(),{visibility:T.gates.snapshot(),labels:T.labelsEnabled,grounded:T.obj.grounded,appearance:structuredClone(rn),headings:Object.fromEntries(new Map([...T.headings,...[...T.locations.keys()].map(t=>[t,nd(t)])])),selected:T.pendingSelected||T.selected,base:T.base,activeReference:T.pendingReferenceId||T.referenceId,compass:T.compassShown,headingStep:T.headingStep,map:{center:i.getCenter().toArray(),zoom:i.getZoom(),pitch:i.getPitch(),bearing:i.getBearing()},panorama:{yaw:e.yaw,pitch:e.pitch,fov:e.fov}})}async function w0(i,e){i=Zs(i);let t=new Ys,n=new Map,s=i.state,r=new Ws(T.map);r.setGrounded(s.grounded!==!1),r.setAppearance((s.appearance||rn).obj);try{for(let c of i.sources.filter(h=>h.role==="reference")){let h=e.get(c.id);h&&n.set(c.id,await Qc(c.role,h.files,{...c,access:h.access}))}for(let c of i.sources.filter(h=>h.role!=="reference")){let h=e.get(c.id);if(!h||c.referenceId&&!n.has(c.referenceId)&&!c.referenceConfig)continue;let u=await Qc(c.role,h.files,{...c,access:h.access},n.get(c.referenceId)?.data||null);c.role==="models"&&(od(t,u),await r.load(u.data,u.reference,()=>{},{append:!0,sourceId:c.id,strict:!0,attach:!1})),n.set(c.id,u),t.put(u)}for(let c of i.sources)t.put(n.get(c.id)||{...c,files:[],manifest:c,unavailable:!0})}catch(c){throw r.clear(),c}++T.selectionSerial,T.viewer.clear(),T.direction=null,T.selected=null,T.obj.dispose(),T.obj=r,T.sources=t,T.workspaceId=i.id,T.workspaceRestored=!0,T.gates=new qs(s.visibility),T.headings=new Map(Object.entries(s.headings||{})),T.pendingSelected=s.selected||null;let o=n.get(s.activeReference)||[...n.values()].filter(c=>c.role==="reference").at(-1);T.reference=o?.data||null,T.referenceId=o?.id||null,T.pendingReferenceId=s.activeReference&&!n.has(s.activeReference)?s.activeReference:null,s.appearance&&(rn=structuredClone(s.appearance)),T.labelsEnabled=s.labels!==!1,J("mapLabelsBtn").setAttribute("aria-pressed",String(T.labelsEnabled)),T.compassShown=!!s.compass,J("photoCompassToggle").setAttribute("aria-pressed",String(T.compassShown));let a=(T.compassShown?"Hide":"Show")+" centre compass line";J("photoCompassToggle").dataset.tooltip=a,J("photoCompassToggle").setAttribute("aria-label",a),T.headingStep=s.headingStep===1?1:5,ad(),rd(),$u(),$c(),$s(),r.attach();for(let[c,h]of[["spatial","spatialFeedback"],["photos","photosFeedback"],["models","objFeedback"],["reference","referenceFeedback"]]){let u=t.values(c),f=u.filter(p=>!p.unavailable).length;vi(h,f?(c==="photos"?"Ready":"Loaded")+(f>1?" ("+f+" packs)":""):u.length?"Reconnect required":"Not loaded")}let l=s.base==="metro"&&!T.metroKey?"aerial":s.base||"aerial";s.base==="metro"&&!T.metroKey&&pn("Workspace loaded with Aerial. Enter your MetroMap key to use MetroMap.",!1),l!==T.base&&da(l),s.map&&T.map.jumpTo(s.map),J("panoEmpty").classList.remove("hidden"),J("panoHeader").classList.add("hidden"),J("panoFooter").classList.add("hidden"),J("emptyMessage").textContent="Panorama",s.selected&&T.locations.has(s.selected)&&await er(s.selected,{moveMap:!1}),s.panorama&&T.viewer.active&&(Object.assign(T.viewer,s.panorama),T.viewer.render()),t.values().some(c=>c.unavailable)&&pn("Some workspace packs are unavailable. Reopen the workspace to reconnect them.",!1)}function ad(){let i=T.headingStep,e=i===5?1:5,t=i===1?"degree":"degrees";J("headingStepToggle").textContent=i+"\xB0",J("headingStepToggle").dataset.tooltip="Heading step: "+i+"\xB0. Switch to "+e+"\xB0.",J("headingStepToggle").setAttribute("aria-label","Heading step: "+i+" "+t+". Switch to "+e+" "+(e===1?"degree":"degrees")+".");for(let[n,s,r]of[["headingMinus","\u2212","minus"],["headingPlus","+","plus"]])J(n).dataset.tooltip="Calibrate heading "+s+i+"\xB0",J(n).setAttribute("aria-label","Calibrate heading "+r+" "+i+" "+t)}function E0(){let i=J("metroKeyInput").value.trim();if(!i){vi("metroFeedback","Enter an API key.",!0);return}T.metroKey=i;try{J("rememberMetro").checked?localStorage.setItem(ua,i):localStorage.removeItem(ua)}catch{pn("Unable to remember the API key.")}vi("metroFeedback",""),da("metro"),Zu("metroModal")}function T0(){$c(),J("resetAppearance").onclick=()=>{rn=Gc(),$c(),$s()},J("importBtn").onclick=()=>Kc("importModal"),J("metroKeyBtn").onclick=()=>Kc("metroModal");for(let i of document.querySelectorAll("[data-close]"))i.onclick=()=>Zu(i.dataset.close);for(let i of document.querySelectorAll("dialog"))i.addEventListener("click",e=>{if(e.target===i){let t=i.getBoundingClientRect();(e.clientX<t.left||e.clientX>t.right||e.clientY<t.top||e.clientY>t.bottom)&&i.close()}});J("layersBtn").onclick=()=>yi(J("layersBtn").getAttribute("aria-expanded")!=="true"),J("closeLayers").onclick=()=>{yi(!1),J("layersBtn").focus()},J("sidebarScrim").onclick=()=>yi(!1),J("locationSearch").oninput=td,J("zoomToSelection").onclick=M0,J("layerSelectionToggle").onclick=()=>{let i=[...T.locations.values()],e=!i.every(t=>T.gates.location(t.id));for(let t of i)T.gates.setLocation(t.id,e);Qs()},J("groundObjLayers").onchange=i=>T.obj?.setGrounded(i.target.checked);for(let i of document.querySelectorAll(".basemap-btn"))i.onclick=()=>da(i.dataset.base);J("fitBtn").onclick=sd,J("mapFullscreen").onclick=()=>ju(".map-pane"),J("mapLayersBtn").onclick=()=>Jc(J("mapLayerPanel").hidden),document.addEventListener("pointerdown",i=>{i.target.closest(".map-layer-widget")||Jc(!1)}),document.addEventListener("fullscreenchange",()=>{for(let[i,e,t]of[["mapFullscreen",".map-pane","map"],["panoFullscreen",".pano-pane","panorama"]]){let n=document.fullscreenElement===document.querySelector(e),s=J(i);s.setAttribute("aria-pressed",String(n)),s.dataset.tooltip=n?"Exit fullscreen "+t:"Fullscreen "+t,s.setAttribute("aria-label",s.dataset.tooltip)}T.map?.resize(),T.viewer?.resize()}),J("pitchBtn").onclick=()=>{let i=T.map.getPitch()>10?0:56;T.map.easeTo({pitch:i,duration:fa()?0:500})},J("mapLabelsBtn").onclick=()=>{T.labelsEnabled=!T.labelsEnabled,J("mapLabelsBtn").setAttribute("aria-pressed",String(T.labelsEnabled)),Ks()},T.workspaceUI=Ou({registry:()=>T.sources,snapshot:S0,restore:w0,importFiles:b0,notify:pn,setBusy:i=>{T.workspaceBusy=i}}),J("applyMetro").onclick=E0,J("forgetMetro").onclick=()=>{try{localStorage.removeItem(ua)}catch{}T.metroKey="",J("metroKeyInput").value="",J("rememberMetro").checked=!1,vi("metroFeedback",""),T.base==="metro"&&da("aerial")},J("prevView").onclick=()=>la(-1),J("nextView").onclick=()=>la(1),J("setPhotoNorth").onclick=v0,J("headingMinus").onclick=()=>ha(-T.headingStep),J("headingPlus").onclick=()=>ha(T.headingStep),J("headingStepToggle").onclick=()=>{T.headingStep=T.headingStep===5?1:5,ad()},J("resetView").onclick=()=>T.viewer.resetView(),J("photoCompassToggle").onclick=()=>{T.compassShown=!T.compassShown;let i=(T.compassShown?"Hide":"Show")+" centre compass line";J("photoCompassToggle").setAttribute("aria-pressed",String(T.compassShown)),J("photoCompassToggle").setAttribute("aria-label",i),J("photoCompassToggle").dataset.tooltip=i,Ku()},J("panoFullscreen").onclick=()=>ju(".pano-pane"),document.addEventListener("keydown",i=>{if(i.key==="Escape"&&!J("mapLayerPanel").hidden){Jc(!1),J("mapLayersBtn").focus(),i.preventDefault();return}if(document.querySelector("dialog[open]")||i.target.closest("input,textarea,select,[contenteditable=true]"))return;let t={ArrowLeft:()=>T.viewer.rotate(-6),ArrowRight:()=>T.viewer.rotate(6),ArrowUp:()=>T.viewer.rotate(0,5),ArrowDown:()=>T.viewer.rotate(0,-5),Home:()=>T.viewer.resetView(),"[":()=>la(-1),"]":()=>la(1),q:()=>ha(-T.headingStep),e:()=>ha(T.headingStep)}[i.key];t&&(i.preventDefault(),t()),i.key==="Escape"&&yi(!1)})}function A0(){T0(),el(),matchMedia("(max-width: 900px)").matches&&yi(!1);try{T.metroKey=localStorage.getItem(ua)||"",J("rememberMetro").checked=!!T.metroKey}catch{}if(hu(),!window.maplibregl)throw new Error("Map unavailable. Check your connection and reload.");T.map=new window.maplibregl.Map({container:"map",style:Ju("aerial"),center:Fc,zoom:14.2,pitch:0,attributionControl:!0,antialias:!0,maxPitch:75}),T.map.addControl(new window.maplibregl.NavigationControl({showCompass:!0,showZoom:!0}),"bottom-right"),T.obj=new Ws(T.map,pn),T.viewer=new ta(J("panoCanvas"),{onLoading:e=>J("panoLoading").classList.toggle("hidden",!e),onDirection:e=>{T.direction=e,qn()}}),T.labels=new ca(T.map),T.map.on("style.load",m0),T.map.on("click","vistas-points",e=>{let t=e.features?.[0];t&&er(fn(t.properties))}),T.map.on("mouseenter","vistas-points",()=>T.map.getCanvas().style.cursor="pointer"),T.map.on("mouseleave","vistas-points",()=>T.map.getCanvas().style.cursor=""),T.map.on("pitch",()=>{let e=T.map.getPitch()>10,t=J("pitchBtn"),n=e?"3D":"2D",s=e?"2D":"3D";t.textContent=n,t.setAttribute("aria-pressed",String(e)),t.dataset.tooltip="Map view: "+n+". Switch to "+s+".",t.setAttribute("aria-label",t.dataset.tooltip)}),T.map.on("error",e=>{T.base==="metro"&&/401|403/.test(String(e.error?.message||""))&&pn("MetroMap rejected the API key.")});let i=new ResizeObserver(()=>T.map.resize());i.observe(document.querySelector(".map-pane")),window.addEventListener("pagehide",e=>{e.persisted||(T.viewer.dispose(),i.disconnect(),T.labels.dispose(),T.obj.clear(),T.map.remove())}),document.documentElement.dataset.appState="ready"}window.addEventListener("unhandledrejection",i=>pn(i.reason?.message||"Unable to complete the action."));var C0=al();window.addEventListener("pagehide",i=>{i.persisted||C0()});try{A0()}catch(i){document.documentElement.dataset.appState="error",pn(i.message),console.error(i)}})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
