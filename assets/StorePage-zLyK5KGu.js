import{r as s,u as F,j as e}from"./index-iwDV7NXa.js";import{s as l,D as o,_ as g}from"./App-wgBMLSo5.js";const K="/Keroumi-fitness/assets/protein-product-3by-OSD6.jpg",M="/Keroumi-fitness/assets/debardeeur-part-3NEwMxwf.jpg",G=({onload:d})=>{s.useEffect(()=>{(async()=>{d&&d()})()},[]);let j=F(),[i,u]=s.useState({filteritemgrid:"grid-cols-2",filteritemproperty:"w-[350px] items-center pl-0",productgrid:"product:grid-cols-2 store:grid-cols-3",productproperty:"w-[330px]"}),{card:b}=s.useContext(l),{setcard:w}=s.useContext(l),{setselecteditem:v}=s.useContext(l),[a,n]=s.useState({sys:1,filter:null}),[N,p]=s.useState(o),x=null,m=null,y=o.filter(function(t){if(t.protein)return x++,t}),_=o.filter(function(t){if(!t.protein)return m++,t});function f(t){v(t),j("/Keroumi-fitness/Store/Product-details"),window.scrollTo({top:450,behavior:"smooth"}),window.localStorage.setItem("currentproduct",t)}let{setcardtot:T}=s.useContext(l),{setpromocode:S}=s.useContext(l);function C(t){let r=localStorage.getItem("arr"),z=+localStorage.getItem("total"),I=r.includes(t-1),E=o[t-1].price;if(I){g.error("Product Already exist");return}else{let h=[...b,t-1];g.success("Added to Card"),window.localStorage.setItem("arr",JSON.stringify(h)),w(h);let c=z+E;window.localStorage.setItem("total",c),T(c),S(c)}}let k=N.map(function(t){return e.jsxs("nav",{id:t.id,className:`group cursor-pointer transition-all duration-500 hover:scale-95 product_color flex flex-col items-center pt-4 gap-3 rounded-md ${i.productproperty} h-[470px] relative`,children:[e.jsxs("div",{className:"w-[250px] flex-col group-hover:opacity-55 transition-all duration-500 bg-gray-400 h-[250px] rounded-md flex justify-center items-center relative",children:[e.jsx("img",{src:t.pic,className:"rounded-md w-4/5 h-4/5",alt:"product"}),t.fake_price?e.jsx("p",{className:"bg-orange-500 absolute top-0 right-0 w-14 h-14 rounded-full flex justify-center items-center text-white text-sm",children:"Promo!"}):e.jsx(e.Fragment,{})]}),e.jsxs("div",{className:"flex flex-col items-center gap-3 relative h-1/2",children:[e.jsx("h1",{className:"text-white font-bold uppercase text-center w-[90%] transition-colors duration-500 cursor-pointer hover:text-orange-500",onClick:()=>f(t.id),children:t.tittle}),e.jsxs("div",{className:"flex gap-1 items-center",children:[e.jsx("i",{className:"bi bi-star-fill text-blue-400"}),e.jsx("i",{className:"bi bi-star-fill text-blue-400"}),e.jsx("i",{className:"bi bi-star-fill text-blue-400"}),e.jsx("i",{className:"bi bi-star-fill text-blue-400"}),e.jsx("i",{className:"bi bi-star-fill text-blue-400"})]}),e.jsxs("div",{className:"flex gap-4 items-center",children:[e.jsxs("p",{className:"text-zinc-500 test-sm",children:[t.price," MAD"]}),t.fake_price?e.jsxs("p",{className:"text-zinc-500 line-through test-sm",children:[t.fake_price," MAD"]}):e.jsx(e.Fragment,{})]}),t.available?e.jsx("button",{className:"text-white font-bold w-[150px] h-10 rounded-xl bg-orange-500 transition-all duration-500 hover:scale-105 hover:bg-white sh hover:text-orange-500 absolute bottom-3",onClick:()=>C(t.id),children:" Ajouter au panier"}):e.jsx("button",{className:"text-white font-bold w-[150px] h-10 rounded-xl bg-orange-500 transition-all sh duration-500 hover:scale-105 hover:bg-white hover:text-orange-500 absolute bottom-3",onClick:()=>f(t.id),children:"lire la suite"})]})]},t.id)});const D=t=>{p(y),n(r=>({...r,filter:t})),window.innerWidth>900?window.scrollTo({top:i.filteritemgrid==="grid-cols-2"?1e3:1500,behavior:"smooth"}):window.scrollTo({top:1500,behavior:"smooth"})},$=t=>{p(_),n(r=>({...r,filter:t})),window.innerWidth>900?window.scrollTo({top:i.filteritemgrid==="grid-cols-2"?1e3:1500,behavior:"smooth"}):window.scrollTo({top:1500,behavior:"smooth"})};function P(t){n(r=>({...r,sys:t})),u(r=>({...r,filteritemgrid:"grid-cols-1",filteritemproperty:"w-full items-start pl-7"}))}function A(t){n(r=>({...r,sys:t})),u(r=>({...r,filteritemgrid:"grid-cols-2",filteritemproperty:"w-[350px] items-center pl-0",productgrid:"product:grid-cols-2 store:grid-cols-3",productproperty:"w-[330px]"}))}return e.jsx(e.Fragment,{children:e.jsxs("article",{className:"w-full h-auto gap-10 pt-24 flex flex-col storecolor relative top-[422px]",children:[e.jsx("section",{className:" h-28 flex items-center justify-center",children:e.jsxs("nav",{className:"w-[90%] flex items-center flex-col md:flex-row justify-between bg-zinc-800 rounded-md h-full pl-3 pr-3 pb-2",children:[e.jsxs("div",{className:"hidden md:flex gap-5 ",children:[e.jsx("i",{className:`bi bi-grid-fill ${a.sys===1?"text-orange-500":"text-slate-200"} text-[27px] transition-colors duration-500 hover:text-orange-500 cursor-pointer`,onClick:()=>A(1)}),e.jsx("i",{className:`bi bi-list-ul ${a.sys===2?"text-orange-500":"text-slate-200"} text-[27px] transition-colors duration-500 hover:text-orange-500 cursor-pointer`,onClick:()=>P(2)})]}),e.jsxs("p",{className:"text-zinc-300 text-xl",children:[o.length," résultats affichés"]}),e.jsxs("select",{name:"",id:"",className:"h-10 rounded-md storecolor pl-3 text-zinc-200",children:[e.jsx("option",{value:"Tri par popularité",children:"Tri par popularité"}),e.jsx("option",{value:"Tri par notes moyennes",children:"Tri par notes moyennes"}),e.jsx("option",{value:"Tri par plus récent au plus ancien",children:"Tri par plus récent au plus ancien"}),e.jsx("option",{value:"Tri par tarif croissant",children:"Tri par tarif croissant"}),e.jsx("option",{value:"Tri par tarif decroissant",children:"Tri par tarif decroissant"})]})]})}),e.jsx("section",{className:" h-[90%] flex justify-center items-center",children:e.jsxs("nav",{className:"w-[90%]  h-full rounded-md flex flex-col gap-16",children:[e.jsxs("div",{className:`w-full auto  grid-cols-1 small_tablet:${i.filteritemgrid} grid place-items-center gap-5`,children:[e.jsxs("div",{className:`h-96 product_color ${i.filteritemproperty} flex flex-col justify-center gap-5 rounded-md cursor-pointer transition-all duration-500 hover:scale-105 ${a.filter===1?"filter":""}`,onClick:()=>D(1),children:[e.jsx("img",{src:K,alt:"protein",className:"rounded-md"}),e.jsxs("h1",{className:"font-bold text-white ",children:["Proteines & Produits (",x,")"]})]}),e.jsxs("div",{className:`h-96 product_color ${i.filteritemproperty} flex flex-col justify-center gap-5 rounded-md cursor-pointer transition-all duration-500 hover:scale-105 ${a.filter===2?"filter":""}`,onClick:()=>$(2),children:[e.jsx("img",{src:M,alt:"protein",className:"rounded-md"}),e.jsxs("h1",{className:"font-bold text-white ",children:["T-shirt & Vêtements (",m,")"]})]})]}),e.jsx("section",{className:`w-full grid grid-cols-1 ${i.productgrid} gap-2 place-items-center pb-4`,children:k})]})})]})})};export{G as default};
