!function(){var c={"cc-command":"Cross-Chain Command",ccm:"Cross-Chain Message",ccu:"Cross-Chain Update",ipc:"Inter-Process Communication",lip:"Lisk Improvement Proposal",lisk32:"Human-readable representation of an account address",lsk:"Abbreviation for the Lisk token",nft:"Non-Fungible Token",p2p:"Peer to Peer",poa:"Proof of Authority",pos:"Proof of Stake",pow:"Proof of Work",rpc:"Remote Procedure Call",ws:"WebSocket"};!function(){"use strict";console.log(c.key);const e=new Mark(document.querySelector("article.doc"));for(var t in c)c.hasOwnProperty(t)&&e.mark(t,{element:"span",className:"highlighttt",accuracy:{value:"exactly",limiters:[",","."]},exclude:["h1","h2","h3","h4"],filter:function(e,t,o,n){return!(1<=n)}});const o=document.getElementsByClassName("highlighttt");var n=o.length;for(let e=0;e<n;e++){const a=document.createElement("p");a.setAttribute("class","tooltip");var r=o[e].textContent.toLowerCase();c.hasOwnProperty(r)&&(r=document.createTextNode(c[r]),a.appendChild(r),o[e].appendChild(a))}}()}();