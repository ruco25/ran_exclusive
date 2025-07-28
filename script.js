const productos={novedades:[{nombre:"Remera Fresh",precio:1000,img:"https://via.placeholder.com/250",color:["Negro","Blanco","Azul"],talle:["S","M","L","XL"]},{nombre:"Short Pro",precio:850,img:"https://via.placeholder.com/250",color:["Rojo","Negro","Gris"],talle:["S","M","L","XL"]},{nombre:"Musculosa Drop",precio:900,img:"https://via.placeholder.com/250",color:["Verde","Negro","Blanco"],talle:["S","M","L"]},{nombre:"Medias RAN",precio:400,img:"https://via.placeholder.com/250",color:["Blanco","Negro"],talle:["Único"]}],exclusive:[{nombre:"Campera Elite",precio:2500,img:"https://via.placeholder.com/250",color:["Negro","Gris","Rojo"],talle:["S","M","L","XL"]},{nombre:"Pantalón Lux",precio:2300,img:"https://via.placeholder.com/250",color:["Gris","Negro"],talle:["S","M","L"]},{nombre:"Hoodie Neon",precio:2000,img:"https://via.placeholder.com/250",color:["Negro","Verde"],talle:["S","M","L","XL"]},{nombre:"Chaleco Wind",precio:1800,img:"https://via.placeholder.com/250",color:["Negro","Blanco"],talle:["S","M","L"]}],drop:[{nombre:"Remera Limitada",precio:1500,img:"https://via.placeholder.com/250",color:["Negro","Blanco"],talle:["S","M","L","XL"]},{nombre:"Short edición Drop",precio:1200,img:"https://via.placeholder.com/250",color:["Negro","Rojo"],talle:["S","M","L"]},{nombre:"Campera Glow",precio:2700,img:"https://via.placeholder.com/250",color:["Negro","Lila"],talle:["M","L","XL"]},{nombre:"Musculosa Sport",precio:1000,img:"https://via.placeholder.com/250",color:["Azul","Negro"],talle:["S","M","L"]}]};
function mostrarSeccion(e){document.querySelectorAll(".seccion").forEach(e=>e.style.display="none");const t=document.getElementById(e);if(t.style.display="block",!t.innerHTML.trim()){let n='<div class="productos">';productos[e].forEach((o,r)=>{n+=`
      <div class="producto">
        <img src="${o.img}" alt="${o.nombre}" />
        <h3>${o.nombre}</h3>
        <p>$${o.precio}</p>
        <select id="${e}_color_${r}">${o.color.map(e=>`<option>${e}</option>`).join("")}</select>
        <select id="${e}_talle_${r}">${o.talle.map(e=>`<option>${e}</option>`).join("")}</select>
        <input type="number" id="${e}_cant_${r}" value="1" min="1" />
        <select id="${e}_pago_${r}"><option>Efectivo</option><option>Transferencia</option><option>MercadoPago</option></select>
        <button class="add-btn" onclick="agregarAlCarrito('${e}', ${r})">Agregar</button>
      </div>`}),n+="</div>",t.innerHTML=n}}
let carrito=[];
function agregarAlCarrito(e,t){const n=productos[e][t],o=document.getElementById(`${e}_color_${t}`).value,r=document.getElementById(`${e}_talle_${t}`).value,a=document.getElementById(`${e}_cant_${t}`).value,c=document.getElementById(`${e}_pago_${t}`).value;carrito.push({nombre:n.nombre,color:o,talle:r,cant:a,pago:c}),alert("Producto agregado al carrito.")}
function mostrarCarrito(){const e=document.getElementById("cart");e.style.display="block"===e.style.display?"none":"block";const t=document.getElementById("cartItems");t.innerHTML=carrito.map(e=>`<p>${e.cant}x ${e.nombre} - ${e.color} - ${e.talle} - ${e.pago}</p>`).join("")}
function finalizarCompra(){if(0===carrito.length)return alert("Tu carrito está vacío.");const e=encodeURIComponent("Hola, quiero comprar:
"+carrito.map(e=>`${e.cant}x ${e.nombre} - ${e.color} - ${e.talle} - ${e.pago}`).join("
"));window.open("https://wa.me/598091290479?text="+e,"_blank")}