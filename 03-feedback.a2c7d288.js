var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,o=/^0o[0-7]+$/i,a=parseInt,u="object"==typeof e&&e&&e.Object===Object&&e,f="object"==typeof self&&self&&self.Object===Object&&self,l=u||f||Function("return this")(),c=Object.prototype.toString,s=Math.max,m=Math.min,d=function(){return l.Date.now()};function g(e,t,n){var i,r,o,a,u,f,l=0,c=!1,g=!1,y=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=i,o=r;return i=r=void 0,l=t,a=e.apply(o,n)}function j(e){return l=e,u=setTimeout(S,t),c?b(e):a}function w(e){var n=e-f;return void 0===f||n>=t||n<0||g&&e-l>=o}function S(){var e=d();if(w(e))return h(e);u=setTimeout(S,function(e){var n=t-(e-f);return g?m(n,o-(e-l)):n}(e))}function h(e){return u=void 0,y&&i?b(e):(i=r=void 0,a)}function I(){var e=d(),n=w(e);if(i=arguments,r=this,f=e,n){if(void 0===u)return j(f);if(g)return u=setTimeout(S,t),b(f)}return void 0===u&&(u=setTimeout(S,t)),a}return t=v(t)||0,p(n)&&(c=!!n.leading,o=(g="maxWait"in n)?s(v(n.maxWait)||0,t):o,y="trailing"in n?!!n.trailing:y),I.cancel=function(){void 0!==u&&clearTimeout(u),l=0,i=f=r=u=void 0},I.flush=function(){return void 0===u?a:h(d())},I}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function v(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==c.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var u=r.test(e);return u||o.test(e)?a(e.slice(2),u?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var i=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),g(e,t,{leading:i,maxWait:t,trailing:r})};const y={form:document.querySelector(".js-form"),emailInput:document.querySelector(".js-form-email"),messageInput:document.querySelector(".js-form-message")},b=JSON.parse(localStorage.getItem("feedback-form-state"))||{email:"",message:""},j=t((e=>{"email"===e.target.name&&(b.email=e.target.value),"message"===e.target.name&&(b.message=e.target.value);const t=JSON.stringify(b);localStorage.setItem("feedback-form-state",t)}),500);window.addEventListener("load",(({email:e,message:t})=>{y.emailInput.value=e,y.messageInput.value=t})(b)),y.form.addEventListener("input",j),y.form.addEventListener("submit",(e=>{e.preventDefault(),console.log(b),localStorage.clear(),y.emailInput.value="",y.messageInput.value=""}));
//# sourceMappingURL=03-feedback.a2c7d288.js.map
