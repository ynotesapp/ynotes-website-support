(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{256:function(t,e,n){"use strict";n.r(e);n(116),n(25);var r=n(5),o={head:function(){return{title:"CATEGORY",meta:[{hid:"description",name:"description",content:"DESCRIPTION"}]}},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var r,o,content,l,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,o=t.params,content=n(174),l=content.categories.find((function(t){return t.folder==o.category})),e.next=4,r({deep:!0}).where({dir:{$eq:"/"+l.folder}}).fetch();case 4:return c=e.sent,e.abrupt("return",{category:l,articles:c});case 6:case"end":return e.stop()}}),e)})))()}},l=n(8),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Container",{staticClass:"py-12"},[n("nuxt-link",{staticClass:"inline-flex items-center px-3 py-1 mb-5 text-base font-semibold text-white transition duration-150 ease-in-out rounded-md focus:outline-none bg-space-400 hover:bg-space-300",attrs:{to:"/"}},[n("svg",{staticClass:"w-4 h-4 mr-2",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M10 19l-7-7m0 0l7-7m-7 7h18"}})]),t._v("\n    Retour\n  ")]),t._v(" "),n("div",{staticClass:"text-center mb-10"},[n("h1",{staticClass:"text-5xl leading-8 font-extrabold tracking-tight text-gray-900 lg:text-6xl mb-4"},[t._v(t._s(t.category.name))]),t._v(" "),n("p",{staticClass:"max-w-3xl text-xl text-gray-500 lg:mx-auto"},[t._v(t._s(t.category.description))])]),t._v(" "),n("div",{staticClass:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2"},t._l(t.articles,(function(e,r){return n("div",{key:r},[n("nuxt-link",{staticClass:"block p-4 transition-all transform bg-white shadow rounded-2xl hover:shadow-xl hover:-translate-y-1 h-full",attrs:{to:e.path}},[n("div",{staticClass:"text-2xl font-semibold text-gray-800 mb-3"},[t._v("\n          "+t._s(e.title)+"\n        ")]),t._v(" "),n("div",{staticClass:"text-lg text-justify"},[t._v(t._s(e.description))])])],1)})),0)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Container:n(117).default})}}]);