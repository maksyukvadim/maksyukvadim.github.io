(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{86:function(n,e,t){"use strict";var r=t(20),a=t(1),o=t.n(a),i=t(21);function c(){var n=Object(r.a)(["\n  color: #999;\n  font-size: 18px;\n  font-weight: normal;\n  position: absolute;\n  pointer-events: none;\n  left: 5px;\n  top: 10px;\n  transition: 0.2s ease all;\n  -moz-transition: 0.2s ease all;\n  -webkit-transition: 0.2s ease all;\n"]);return c=function(){return n},n}function u(){var n=Object(r.a)(["\n  position: absolute;\n  height: 60%;\n  width: 100px;\n  top: 25%;\n  left: 0;\n  pointer-events: none;\n  opacity: 0.5;\n"]);return u=function(){return n},n}function l(){var n=Object(r.a)(["\n  position: relative;\n  margin-bottom: 45px;\n"]);return l=function(){return n},n}function s(){var n=Object(r.a)(["\n  position: relative;\n  display: block;\n  width: ",";\n  &:before,\n  &:after {\n    content: '';\n    height: 2px;\n    width: 0;\n    bottom: 1px;\n    position: absolute;\n    background: #5264ae;\n    transition: 0.2s ease all;\n    -moz-transition: 0.2s ease all;\n    -webkit-transition: 0.2s ease all;\n  }\n  &:before {\n    left: 50%;\n  }\n  &:after {\n    right: 50%;\n  }\n"]);return s=function(){return n},n}function m(){var n=Object(r.a)(["\n  font-size: 18px;\n  padding: 10px 10px 10px 5px;\n  display: block;\n  width: ",";\n  border: none;\n  border-bottom: 1px solid #757575;\n  padding: 10px 0;\n\n  &:focus {\n    outline: none;\n  }\n  &:focus ~ label,\n  &:valid ~ label {\n    top: -20px;\n    font-size: 14px;\n    color: #5264ae;\n  }\n\n  &:focus ~ .bar:before,\n  &:focus ~ .bar:after {\n    width: 50%;\n  }\n\n  &:focus ~ .highlight {\n    -webkit-animation: inputHighlighter 0.3s ease;\n    -moz-animation: inputHighlighter 0.3s ease;\n    animation: inputHighlighter 0.3s ease;\n  }\n\n  @-webkit-keyframes inputHighlighter {\n    from {\n      background: #5264ae;\n    }\n    to {\n      width: 0;\n      background: transparent;\n    }\n  }\n  @-moz-keyframes inputHighlighter {\n    from {\n      background: #5264ae;\n    }\n    to {\n      width: 0;\n      background: transparent;\n    }\n  }\n  @keyframes inputHighlighter {\n    from {\n      background: #5264ae;\n    }\n    to {\n      width: 0;\n      background: transparent;\n    }\n  }\n"]);return m=function(){return n},n}var b=i.a.input(m(),function(n){return n.width}),f=i.a.span(s(),function(n){return n.width}),d=i.a.div(l()),p=i.a.span(u()),g=i.a.label(c());e.a=function(n){var e=n.propInp,t=n.label,r=void 0===t?"Label":t,a=n.width,i=void 0===a?"500px":a;return o.a.createElement(d,null,o.a.createElement(b,Object.assign({},e,{width:i})),o.a.createElement(p,{className:"highlight"}),o.a.createElement(f,{className:"bar",width:i}),o.a.createElement(g,null,r))}},91:function(n,e,t){"use strict";t.r(e);var r=t(9),a=t(1),o=t.n(a),i=t(35),c=t(85),u=t(6),l=t(40);function s(n){return function(n){if(Array.isArray(n)){for(var e=0,t=new Array(n.length);e<n.length;e++)t[e]=n[e];return t}}(n)||function(n){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n))return Array.from(n)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var m=t(20),b=t(21);function f(){var n=Object(m.a)(["\n  position: absolute;\n  right: 10px;\n  top: 5px;\n  color: blue;\n"]);return f=function(){return n},n}function d(){var n=Object(m.a)([""]);return d=function(){return n},n}function p(){var n=Object(m.a)(["\n  font-weight: bold;\n"]);return p=function(){return n},n}function g(){var n=Object(m.a)(["\n  &: first-letter {\n    text-transform: uppercase;\n  }\n"]);return g=function(){return n},n}function v(){var n=Object(m.a)(["\n  background: #fff9f9;\n  position: relative;\n  padding: 10px;\n  margin: 10px 0;\n"]);return v=function(){return n},n}var h=b.a.div(v()),w=b.a.div(g()),j=Object(b.a)(w)(p()),O=Object(b.a)(w)(d()),x=b.a.div(f()),k=function(n){var e=n.body,t=n.email,r=n.name;return o.a.createElement(h,null,o.a.createElement(j,null,r),o.a.createElement(O,null,e),o.a.createElement(x,null,t))},y=t(86);function E(){var n=Object(m.a)(["\n  text-align: center;\n"]);return E=function(){return n},n}function C(){var n=Object(m.a)([""]);return C=function(){return n},n}var N=b.a.div(C()),z=b.a.h3(E()),D=function(n){var e=n.onChangeName,t=n.onChangeBody,a=n.onChangeEmail,i=n.children,c=n.newComment,u={type:"text",required:!0};return o.a.createElement(N,null,o.a.createElement(z,null,"Add comment"),o.a.createElement(y.a,{propInp:Object(r.a)({},u,{onChange:e,value:c.name}),label:"Name",width:"100%"}),o.a.createElement(y.a,{propInp:Object(r.a)({},u,{onChange:t,value:c.body}),label:"Description",width:"100%"}),o.a.createElement(y.a,{propInp:Object(r.a)({},u,{onChange:a,value:c.email}),label:"Email",width:"100%"}),i)};function L(){var n=Object(m.a)(["\n  & {\n    position: relative;\n\n    display: block;\n    margin: 30px auto;\n    padding: 0;\n\n    overflow: hidden;\n\n    border-width: 0;\n    outline: none;\n    border-radius: 2px;\n    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.6);\n\n    background-color: #2ecc71;\n    color: #ecf0f1;\n\n    transition: background-color 0.3s;\n    cursor: pointer;\n  }\n\n  &:hover,\n  &:focus {\n    background-color: #27ae60;\n  }\n\n  & > * {\n    position: relative;\n  }\n\n  & span {\n    display: block;\n    padding: 12px 24px;\n    font-weight: bold;\n  }\n\n  &:before {\n    content: '';\n\n    position: absolute;\n    top: 50%;\n    left: 50%;\n\n    display: block;\n    width: 0;\n    padding-top: 0;\n\n    border-radius: 100%;\n\n    background-color: rgba(236, 240, 241, 0.3);\n\n    -webkit-transform: translate(-50%, -50%);\n    -moz-transform: translate(-50%, -50%);\n    -ms-transform: translate(-50%, -50%);\n    -o-transform: translate(-50%, -50%);\n    transform: translate(-50%, -50%);\n  }\n\n  &:active:before {\n    width: 120%;\n    padding-top: 120%;\n\n    transition: width 0.2s ease-out, padding-top 0.2s ease-out;\n  }\n\n  & > *,\n  *:before,\n  *:after {\n    box-sizing: border-box;\n  }\n\n  &.orange {\n    background-color: #e67e22;\n  }\n\n  &.orange:hover,\n  .btn.orange:focus {\n    background-color: #d35400;\n  }\n\n  &.red {\n    background-color: #e74c3c;\n  }\n\n  &.red:hover,\n  &.red:focus {\n    background-color: #c0392b;\n  }\n\n  &.blue {\n    background-color: #03a9f4;\n  }\n\n  &.blue:hover,\n  &.blue:focus {\n    background-color: #359bca;\n  }\n"]);return L=function(){return n},n}var A=b.a.button(L()),I=function(n){var e=n.children,t=n.click,r=n.color,a=void 0===r?"red":r;return o.a.createElement(A,{onClick:t,className:a,type:"button"},o.a.createElement("span",null,e))},S=t(4),H=Object(c.a)(Object(i.b)(function(n){var e=n.postDetail;return Object(r.a)({},e)},function(n){return{onSetNewComment:function(e,t){return n(Object(u.l)(e,t))}}}),Object(c.d)(function(n){return Object(r.a)({},n,{comments:n.comments[0]?s(n.comments).concat(s(n.myComments[n.comments[0].postId]||[])):n.comments})}),Object(c.e)("newComment","setNewComment",Object(r.a)({},S.j)),Object(c.c)({onChange:function(n){var e=n.setNewComment,t=n.newComment;return function(n){return function(a){return e(Object(r.a)({},t,Object(l.a)({},n,a.target.value)))}}},clearNewComment:function(n){var e=n.setNewComment;return function(){e(Object(r.a)({},S.j))}},onSaveComment:function(n){var e=n.newComment,t=n.comments,a=n.onSetNewComment;return function(n){a(Object(r.a)({},e,{id:+new Date}),t[0].postId)}}}))(function(n){var e=n.comments,t=n.onChange,r=n.onSaveComment,a=n.clearNewComment,i=n.newComment,c=t("name"),u=t("email"),l=t("body");return o.a.createElement(o.a.Fragment,null,e.map(function(n){return o.a.createElement(k,Object.assign({key:n.id},n))}),o.a.createElement(D,{newComment:i,onChangeName:c,onChangeEmail:u,onChangeBody:l},o.a.createElement(I,{click:function(){r(),a()},color:"blue"},"Add Comment")))});function P(){var n=Object(m.a)(["\n  padding-left: 25px;\n"]);return P=function(){return n},n}function M(){var n=Object(m.a)(["\n  text-align: center;\n"]);return M=function(){return n},n}function B(){var n=Object(m.a)([""]);return B=function(){return n},n}var F=b.a.div(B()),J=b.a.h2(M()),q=b.a.div(P()),T=function(n){var e=n.detail;return o.a.createElement(F,null,o.a.createElement(J,null,e.title),o.a.createElement(q,null,e.body))};function U(){var n=Object(m.a)(["\n"]);return U=function(){return n},n}function G(){var n=Object(m.a)(["\n    display: flex;\n    justify-content: space-around;\n    padding: 30px;\n    margin-top: 15px;\n    background: #f5f5f5;\n"]);return G=function(){return n},n}var K=b.a.div(G()),Q=b.a.div(U()),R=function(n){var e=n.user;return o.a.createElement(K,null,o.a.createElement(Q,null,"Author : ",e.username),o.a.createElement(Q,null,"Name : ",e.name),o.a.createElement(Q,null,"Company : ",e.company.name))},V=t(88);var W=t(30);var X=function(n){return function(e){var t=e.isLoading,r=function(n,e){if(null==n)return{};var t,r,a=Object(V.a)(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}(e,["isLoading"]);return t?o.a.createElement(W.a,null):o.a.createElement(n,r)}},Y=X(R),Z=X(H),$=X(T),_=Object(c.a)(Object(i.b)(function(n){var e=n.postDetail;return Object(r.a)({},e)},function(n){return{getPostsDetail:function(e){return n(Object(u.g)(e))},initMyComments:function(){return n(Object(u.h)())}}}),Object(c.b)({componentDidMount:function(){var n=this.props.match;this.props.getPostsDetail(n.params.id),this.props.initMyComments()}}));e.default=_(function(n){var e=n.postDetail,t=n.user,r=(n.comments,n.isLoadingComments),a=n.isLoadingUser,i=n.isLoadingPostDetail;return o.a.createElement(o.a.Fragment,null,o.a.createElement($,{detail:e,isLoading:i}),o.a.createElement(Y,{isLoading:a||!t,user:t}),o.a.createElement(Z,{isLoading:r}))})}}]);
//# sourceMappingURL=3.7d04b7cc.chunk.js.map