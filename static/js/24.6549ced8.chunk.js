(this["webpackJsonpinventario-maquinas"]=this["webpackJsonpinventario-maquinas"]||[]).push([[24],{629:function(e,t,o){"use strict";var a=o(8),n=o(16),r=(o(0),o(628)),s=o(630),l=o(3),c=["borderColor","backgroundColor","pointHoverBackgroundColor","dataPoints","label","pointed"],i=function(e){var t=e.borderColor,o=e.backgroundColor,i=e.pointHoverBackgroundColor,d=e.dataPoints,b=e.label,j=e.pointed,h=Object(n.a)(e,c),p=i||("transparent"!==o?o:t),x=[{data:d,borderColor:Object(r.getColor)(t),backgroundColor:Object(r.getColor)(o),pointBackgroundColor:Object(r.getColor)(p),pointHoverBackgroundColor:Object(r.getColor)(p),label:b}],O={scales:{xAxes:[{offset:!0,gridLines:{color:"transparent",zeroLineColor:"transparent"},ticks:{fontSize:2,fontColor:"transparent"}}],yAxes:[{display:!1,ticks:{display:!1,min:Math.min.apply(Math,d)-5,max:Math.max.apply(Math,d)+5}}]},elements:{line:{borderWidth:1},point:{radius:4,hitRadius:10,hoverRadius:4}}},m={scales:{xAxes:[{display:!1}],yAxes:[{display:!1}]},elements:{line:{borderWidth:2},point:{radius:0,hitRadius:10,hoverRadius:4}}},g=function(){var e=j?O:m;return Object.assign({},e,{maintainAspectRatio:!1,legend:{display:!1}})}(),u=Object(r.deepObjectsMerge)(x,h.datasets||{}),C=Object(r.deepObjectsMerge)(g,h.options||{});return Object(l.jsx)(s.c,Object(a.a)(Object(a.a)({},h),{},{datasets:u,options:C,labels:b}))};i.defaultProps={borderColor:"rgba(255,255,255,.55)",backgroundColor:"transparent",dataPoints:[10,22,34,46,58,70,46,23,45,78,34,12],label:"Sales"},t.a=i},633:function(e,t,o){"use strict";var a=o(8),n=o(16),r=(o(0),o(628)),s=o(630),l=o(3),c=["backgroundColor","pointHoverBackgroundColor","dataPoints","label","pointed"],i=function(e){var t=e.backgroundColor,o=e.pointHoverBackgroundColor,i=e.dataPoints,d=e.label,b=(e.pointed,Object(n.a)(e,c)),j=[{data:i,backgroundColor:Object(r.getColor)(t),pointHoverBackgroundColor:Object(r.getColor)(o),label:d,barPercentage:.5,categoryPercentage:1}],h={maintainAspectRatio:!1,legend:{display:!1},scales:{xAxes:[{display:!1}],yAxes:[{display:!1}]}};return Object(l.jsx)(s.a,Object(a.a)(Object(a.a)({},b),{},{datasets:j,options:h,labels:d}))};i.defaultProps={backgroundColor:"rgba(0,0,0,.2)",dataPoints:[10,22,34,46,58,70,46,23,45,78,34,12],label:"Sales"},t.a=i},642:function(e,t,o){"use strict";o.r(t);o(0);var a=o(622),n=o(627),r=o(629),s=o(633),l=o(3);t.default=function(){return Object(l.jsxs)(a.ub,{children:[Object(l.jsx)(a.u,{sm:"6",lg:"3",children:Object(l.jsx)(a.Sb,{color:"gradient-primary",header:"9.823",text:"Members online",footerSlot:Object(l.jsx)(r.a,{pointed:!0,className:"c-chart-wrapper mt-3 mx-3",style:{height:"70px"},dataPoints:[65,59,84,84,51,55,40],pointHoverBackgroundColor:"primary",label:"Members",labels:"months"}),children:Object(l.jsxs)(a.z,{children:[Object(l.jsx)(a.E,{color:"transparent",children:Object(l.jsx)(n.a,{name:"cil-settings"})}),Object(l.jsxs)(a.D,{className:"pt-0",placement:"bottom-end",children:[Object(l.jsx)(a.C,{children:"Action"}),Object(l.jsx)(a.C,{children:"Another action"}),Object(l.jsx)(a.C,{children:"Something else here..."}),Object(l.jsx)(a.C,{disabled:!0,children:"Disabled action"})]})]})})}),Object(l.jsx)(a.u,{sm:"6",lg:"3",children:Object(l.jsx)(a.Sb,{color:"gradient-info",header:"9.823",text:"Members online",footerSlot:Object(l.jsx)(r.a,{pointed:!0,className:"mt-3 mx-3",style:{height:"70px"},dataPoints:[1,18,9,17,34,22,11],pointHoverBackgroundColor:"info",options:{elements:{line:{tension:1e-5}}},label:"Members",labels:"months"}),children:Object(l.jsxs)(a.z,{children:[Object(l.jsx)(a.E,{caret:!1,color:"transparent",children:Object(l.jsx)(n.a,{name:"cil-location-pin"})}),Object(l.jsxs)(a.D,{className:"pt-0",placement:"bottom-end",children:[Object(l.jsx)(a.C,{children:"Action"}),Object(l.jsx)(a.C,{children:"Another action"}),Object(l.jsx)(a.C,{children:"Something else here..."}),Object(l.jsx)(a.C,{disabled:!0,children:"Disabled action"})]})]})})}),Object(l.jsx)(a.u,{sm:"6",lg:"3",children:Object(l.jsx)(a.Sb,{color:"gradient-warning",header:"9.823",text:"Members online",footerSlot:Object(l.jsx)(r.a,{className:"mt-3",style:{height:"70px"},backgroundColor:"rgba(255,255,255,.2)",dataPoints:[78,81,80,45,34,12,40],options:{elements:{line:{borderWidth:2.5}}},pointHoverBackgroundColor:"warning",label:"Members",labels:"months"}),children:Object(l.jsxs)(a.z,{children:[Object(l.jsx)(a.E,{color:"transparent",children:Object(l.jsx)(n.a,{name:"cil-settings"})}),Object(l.jsxs)(a.D,{className:"pt-0",placement:"bottom-end",children:[Object(l.jsx)(a.C,{children:"Action"}),Object(l.jsx)(a.C,{children:"Another action"}),Object(l.jsx)(a.C,{children:"Something else here..."}),Object(l.jsx)(a.C,{disabled:!0,children:"Disabled action"})]})]})})}),Object(l.jsx)(a.u,{sm:"6",lg:"3",children:Object(l.jsx)(a.Sb,{color:"gradient-danger",header:"9.823",text:"Members online",footerSlot:Object(l.jsx)(s.a,{className:"mt-3 mx-3",style:{height:"70px"},backgroundColor:"rgb(250, 152, 152)",label:"Members",labels:"months"}),children:Object(l.jsxs)(a.z,{children:[Object(l.jsx)(a.E,{caret:!0,className:"text-white",color:"transparent",children:Object(l.jsx)(n.a,{name:"cil-settings"})}),Object(l.jsxs)(a.D,{className:"pt-0",placement:"bottom-end",children:[Object(l.jsx)(a.C,{children:"Action"}),Object(l.jsx)(a.C,{children:"Another action"}),Object(l.jsx)(a.C,{children:"Something else here..."}),Object(l.jsx)(a.C,{disabled:!0,children:"Disabled action"})]})]})})})]})}}}]);
//# sourceMappingURL=24.6549ced8.chunk.js.map