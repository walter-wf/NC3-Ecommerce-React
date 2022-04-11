(this["webpackJsonpe-commerce"]=this["webpackJsonpe-commerce"]||[]).push([[0],{33:function(e,t,a){e.exports=a(63)},38:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(29),s=a.n(c),l=(a(38),a(15)),i=a(7),o=a.n(i),m=a(14),u=a(8),d=a(9),p=a(11),h=a(10),v=a(5),E=a(1),b=a(12),g=a.n(b),f=a(30),N=a(6),x=n.a.createContext({}),C=function(e){return function(t){return n.a.createElement(x.Consumer,null,(function(a){return n.a.createElement(e,Object.assign({},t,{context:a}))}))}},y={name:"",price:"",stock:"",shortDesc:"",description:""},k=C(function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(e){var r;return Object(u.a)(this,a),(r=t.call(this,e)).save=function(){var e=Object(m.a)(o.a.mark((function e(t){var a,n,c,s,l,i,m;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),a=r.state,n=a.name,c=a.price,s=a.stock,l=a.shortDesc,i=a.description,!n||!c){e.next=10;break}return m=Math.random().toString(36).substring(2)+Date.now().toString(36),e.next=6,g.a.post("http://localhost:3001/products",{id:m,name:n,price:c,stock:s,shortDesc:l,description:i});case 6:r.props.context.addProduct({name:n,price:c,shortDesc:l,description:i,stock:s||0},(function(){return r.setState(y)})),r.setState({flash:{status:"is-success",msg:"Product created successfully"}}),e.next=11;break;case 10:r.setState({flash:{status:"is-danger",msg:"Please enter name and price"}});case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),r.handleChange=function(e){var t;return r.setState((t={},Object(N.a)(t,e.target.name,e.target.value),Object(N.a)(t,"error",""),t))},r.state=y,r}return Object(d.a)(a,[{key:"render",value:function(){var e=this.state,t=e.name,a=e.price,r=e.stock,c=e.shortDesc,s=e.description,l=this.props.context.user;return l&&l.accessLevel<1?n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"hero is-primary "},n.a.createElement("div",{className:"hero-body container"},n.a.createElement("h4",{className:"title"},"Agregar Producto"))),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("form",{onSubmit:this.save},n.a.createElement("div",{className:"columns is-mobile is-centered"},n.a.createElement("div",{className:"column is-one-third"},n.a.createElement("div",{className:"field"},n.a.createElement("label",{className:"label"},"Nombre del Producto: "),n.a.createElement("input",{className:"input",type:"text",name:"name",value:t,onChange:this.handleChange,required:!0})),n.a.createElement("div",{className:"field"},n.a.createElement("label",{className:"label"},"Precio: "),n.a.createElement("input",{className:"input",type:"number",name:"price",value:a,onChange:this.handleChange,required:!0})),n.a.createElement("div",{className:"field"},n.a.createElement("label",{className:"label"},"Disponible en Stock: "),n.a.createElement("input",{className:"input",type:"number",name:"stock",value:r,onChange:this.handleChange})),n.a.createElement("div",{className:"field"},n.a.createElement("label",{className:"label"},"Short Descripcion: "),n.a.createElement("input",{className:"input",type:"text",name:"shortDesc",value:c,onChange:this.handleChange})),n.a.createElement("div",{className:"field"},n.a.createElement("label",{className:"label"},"Descripcion: "),n.a.createElement("textarea",{className:"textarea",type:"text",rows:"2",style:{resize:"none"},name:"description",value:s,onChange:this.handleChange})),this.state.flash&&n.a.createElement("div",{className:"notification ".concat(this.state.flash.status)},this.state.flash.msg),n.a.createElement("div",{className:"field is-clearfix"},n.a.createElement("button",{className:"button is-primary is-outlined is-pulled-right",type:"submit",onClick:this.save},"Enviar")))))):n.a.createElement(E.a,{to:"/"})}}]),a}(r.Component)),S=function(e){var t=e.cartItem,a=e.cartKey,r=t.product,c=t.amount;return n.a.createElement("div",{className:" column is-half"},n.a.createElement("div",{className:"box"},n.a.createElement("div",{className:"media"},n.a.createElement("div",{className:"media-left"},n.a.createElement("figure",{className:"image is-64x64"},n.a.createElement("img",{src:"https://bulma.io/images/placeholders/128x128.png",alt:r.shortDesc}))),n.a.createElement("div",{className:"media-content"},n.a.createElement("b",{style:{textTransform:"capitalize"}},r.name," ",n.a.createElement("span",{className:"tag is-primary"},"$",r.price)),n.a.createElement("div",null,r.shortDesc),n.a.createElement("small",null,"".concat(c," in cart"))),n.a.createElement("div",{className:"media-right",onClick:function(){return e.removeFromCart(a)}},n.a.createElement("span",{className:"delete is-large"})))))},O=C((function(e){var t=e.context.cart,a=Object.keys(t||{});return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"hero is-primary"},n.a.createElement("div",{className:"hero-body container"},n.a.createElement("h4",{className:"title"},"Mi carro de compras"))),n.a.createElement("br",null),n.a.createElement("div",{className:"container"},a.length?n.a.createElement("div",{className:"column columns is-multiline"},a.map((function(a){return n.a.createElement(S,{cartKey:a,key:a,cartItem:t[a],removeFromCart:e.context.removeFromCart})})),n.a.createElement("div",{className:"column is-12 is-clearfix"},n.a.createElement("br",null),n.a.createElement("div",{className:"is-pulled-right"},n.a.createElement("button",{onClick:e.context.clearCart,className:"button is-warning "},"Vaciar el Carrito")," ",n.a.createElement("button",{className:"button is-success",onClick:e.context.checkout},"Checkout")))):n.a.createElement("div",{className:"column"},n.a.createElement("div",{className:"title has-text-grey-light"},"No tienes articulos en el carro de compras"))))})),j=C(function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(e){var r;return Object(u.a)(this,a),(r=t.call(this,e)).handleChange=function(e){var t;return r.setState((t={},Object(N.a)(t,e.target.name,e.target.value),Object(N.a)(t,"error",""),t))},r.login=function(e){e.preventDefault();var t=r.state,a=t.username,n=t.password;if(!a||!n)return r.setState({error:"Fill all fields!"});r.props.context.login(a,n).then((function(e){e||r.setState({error:"Invalid Credentails"})}))},r.state={username:"",password:""},r}return Object(d.a)(a,[{key:"render",value:function(){return this.props.context.user?n.a.createElement(E.a,{to:"/products"}):n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"hero is-primary "},n.a.createElement("div",{className:"hero-body container"},n.a.createElement("h4",{className:"title"},"Ingreso"))),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("form",{onSubmit:this.login},n.a.createElement("div",{className:"columns is-mobile is-centered"},n.a.createElement("div",{className:"column is-one-third"},n.a.createElement("div",{className:"field"},n.a.createElement("label",{className:"label"},"Email: "),n.a.createElement("input",{className:"input",type:"email",name:"username",onChange:this.handleChange})),n.a.createElement("div",{className:"field"},n.a.createElement("label",{className:"label"},"Password: "),n.a.createElement("input",{className:"input",type:"password",name:"password",onChange:this.handleChange})),this.state.error&&n.a.createElement("div",{className:"has-text-danger"},this.state.error),n.a.createElement("div",{className:"field is-clearfix"},n.a.createElement("button",{className:"button is-primary is-outlined is-pulled-right"},"Enviar"))))))}}]),a}(r.Component)),w=function(e){var t=e.product;return n.a.createElement("div",{className:" column is-half"},n.a.createElement("div",{className:"box"},n.a.createElement("div",{className:"media"},n.a.createElement("div",{className:"media-left"},n.a.createElement("figure",{className:"image is-64x64"},n.a.createElement("img",{src:"https://bulma.io/images/placeholders/128x128.png",alt:t.shortDesc}))),n.a.createElement("div",{className:"media-content"},n.a.createElement("b",{style:{textTransform:"capitalize"}},t.name," ",n.a.createElement("span",{className:"tag is-primary"},"$",t.price)),n.a.createElement("div",null,t.shortDesc),t.stock>0?n.a.createElement("small",null,t.stock+" Available"):n.a.createElement("small",{className:"has-text-danger"},"Out Of Stock"),n.a.createElement("div",{className:"is-clearfix"},n.a.createElement("button",{className:"button is-small is-outlined is-primary   is-pulled-right",onClick:function(){return e.addToCart({id:t.name,product:t,amount:1})}},"Agregar al carro de compras"))))))},D=C((function(e){var t=e.context.products;return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"hero is-primary"},n.a.createElement("div",{className:"hero-body container"},n.a.createElement("h4",{className:"title"},"Aca va el carrousel de imagenes"))),n.a.createElement("br",null),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"column columns is-multiline"},t&&t.length?t.map((function(t,a){return n.a.createElement(w,{product:t,key:a,addToCart:e.context.addToCart})})):n.a.createElement("div",{className:"column"},n.a.createElement("span",{className:"title has-text-grey-light"},"No se encontraron productos")))))})),I=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(e){var r;return Object(u.a)(this,a),(r=t.call(this,e)).login=function(){var e=Object(m.a)(o.a.mark((function e(t,a){var n,c,s,l;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.post("http://localhost:3001/login",{email:t,password:a}).catch((function(e){return{status:401,message:"Unauthorized"}}));case 2:if(200!==(n=e.sent).status){e.next=11;break}return c=Object(f.a)(n.data.accessToken),s=c.email,l={email:s,token:n.data.accessToken,accessLevel:"admin@example.com"===s?0:1},r.setState({user:l}),localStorage.setItem("user",JSON.stringify(l)),e.abrupt("return",!0);case 11:return e.abrupt("return",!1);case 12:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),r.logout=function(e){e.preventDefault(),r.setState({user:null}),localStorage.removeItem("user")},r.addProduct=function(e,t){var a=r.state.products.slice();a.push(e),r.setState({products:a},(function(){return t&&t()}))},r.addToCart=function(e){var t=r.state.cart;t[e.id]?t[e.id].amount+=e.amount:t[e.id]=e,t[e.id].amount>t[e.id].product.stock&&(t[e.id].amount=t[e.id].product.stock),localStorage.setItem("cart",JSON.stringify(t)),r.setState({cart:t})},r.removeFromCart=function(e){var t=r.state.cart;delete t[e],localStorage.setItem("cart",JSON.stringify(t)),r.setState({cart:t})},r.clearCart=function(){localStorage.removeItem("cart"),r.setState({cart:{}})},r.checkout=function(){if(r.state.user){var e=r.state.cart,t=r.state.products.map((function(t){return e[t.name]&&(t.stock=t.stock-e[t.name].amount,g.a.put("http://localhost:3001/products/".concat(t.id),Object(l.a)({},t))),t}));r.setState({products:t}),r.clearCart()}else r.routerRef.current.history.push("/login")},r.state={user:null,cart:{},products:[]},r.routerRef=n.a.createRef(),r}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(m.a)(o.a.mark((function e(){var t,a,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=localStorage.getItem("user"),a=localStorage.getItem("cart"),e.next=4,g.a.get("http://localhost:3001/products");case 4:r=e.sent,t=t?JSON.parse(t):null,a=a?JSON.parse(a):{},this.setState({user:t,products:r.data,cart:a});case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return n.a.createElement(x.Provider,{value:Object(l.a)(Object(l.a)({},this.state),{},{removeFromCart:this.removeFromCart,addToCart:this.addToCart,login:this.login,addProduct:this.addProduct,clearCart:this.clearCart,checkout:this.checkout})},n.a.createElement(v.a,{ref:this.routerRef},n.a.createElement("div",{className:"App"},n.a.createElement("nav",{className:"navbar container",role:"navigation","aria-label":"main navigation"},n.a.createElement("div",{className:"navbar-brand"},n.a.createElement("b",{className:"navbar-item is-size-4 "},"S1-09-M"),n.a.createElement("label",{role:"button",class:"navbar-burger burger","aria-label":"menu","aria-expanded":"false","data-target":"navbarBasicExample",onClick:function(t){t.preventDefault(),e.setState({showMenu:!e.state.showMenu})}},n.a.createElement("span",{"aria-hidden":"true"}),n.a.createElement("span",{"aria-hidden":"true"}),n.a.createElement("span",{"aria-hidden":"true"}))),n.a.createElement("div",{className:"navbar-menu ".concat(this.state.showMenu?"is-active":"")},n.a.createElement(v.b,{to:"/products",className:"navbar-item"},"Productos"),this.state.user&&this.state.user.accessLevel<1&&n.a.createElement(v.b,{to:"/add-product",className:"navbar-item"},"Agregar Producto"),n.a.createElement(v.b,{to:"/cart",className:"navbar-item"},"Carrito de Compras",n.a.createElement("span",{className:"tag is-primary",style:{marginLeft:"5px"}},Object.keys(this.state.cart).length)),this.state.user?n.a.createElement(v.b,{to:"/",onClick:this.logout,className:"navbar-item"},"Logout"):n.a.createElement(v.b,{to:"/login",className:"navbar-item"},"Ingresar"))),n.a.createElement(E.d,null,n.a.createElement(E.b,{exact:!0,path:"/",component:D}),n.a.createElement(E.b,{exact:!0,path:"/login",component:j}),n.a.createElement(E.b,{exact:!0,path:"/cart",component:O}),n.a.createElement(E.b,{exact:!0,path:"/add-product",component:k}),n.a.createElement(E.b,{exact:!0,path:"/products",component:D})))))}}]),a}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(62);s.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[33,1,2]]]);
//# sourceMappingURL=main.6c61a544.chunk.js.map