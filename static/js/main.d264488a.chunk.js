(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{88:function(e,t,n){},97:function(e,t,n){"use strict";n.r(t);var o=n(2),r=n(0),i=n(11),c=n.n(i),a=(n(88),n(42)),s=n(25),l=n(135),d=n(131),u=n(13),f=n(133),b=n(8),j=n(99),p=n(140),x=n(138),m=n(7),O=n.n(m),v=function(e){var t=n(30);return e.push({id:t(),name:"New Folder",disableInput:!0}),localStorage.setItem("arrFolders",JSON.stringify(e)),e},h=function(e,t,n){var o=O.a.filter(e,(function(e){return e.id!==n})),r=O.a.filter(t,(function(e){return e.folderId!==n}));return localStorage.setItem("arrFolders",JSON.stringify(o)),localStorage.setItem("arrNotes",JSON.stringify(r)),o},I=function(e,t,n,o,r){var i=t.map((function(t){return t.id===n?{id:t.id,name:"renameFolder"===e?r:t.name,disableInput:o}:t}));return localStorage.setItem("arrFolders",JSON.stringify(i)),i},g=n(73),N=n(134),L="SET_FOLDER",y="SET_FOLDER_ID",D={foldersList:JSON.parse(localStorage.getItem("arrFolders"))||[],folderId:0};function C(e){return{type:"SET_FOLDER",payload:e}}function S(e){return{type:"SET_FOLDER_ID",payload:e}}var A={mouseX:null,mouseY:null};var k=Object(b.b)((function(e){var t=e.folder;return{foldersList:t.foldersList,folderId:t.folderId,notesList:e.notes.notesList}}),(function(e){return{setFolderAction:function(t){return e(C(t))},setFolderIdAction:function(t){return e(S(t))}}}))((function(e){var t=e.setFolderAction,n=e.foldersList,r=e.setFolderIdAction,i=e.folderId,c=e.posContextMenu,a=e.setPosContextMenu,s=e.notesList,l=c.mouseX,d=c.mouseY,u=function(){a(A)};return Object(o.jsx)("div",{style:{cursor:"context-menu"},children:Object(o.jsxs)(g.a,{keepMounted:!0,open:null!==d,onClose:u,anchorReference:"anchorPosition",anchorPosition:null!==d&&null!==l?{top:d,left:l}:void 0,children:[Object(o.jsx)(N.a,{onClick:function(){var e=O.a.cloneDeep(n);t(v(e)),u()},children:"Add folder"}),Object(o.jsx)(N.a,{onClick:function(e){u();var o=O.a.cloneDeep(n);t(I("changeStatus",o,i,!1))},children:"Rename folder"}),Object(o.jsx)(N.a,{onClick:function(){var e=O.a.cloneDeep(n),o=O.a.cloneDeep(s);t(h(e,o,i)),r(0),u()},children:"Delete folder"})]})})})),F="SET_NOTE",w="SET_NOTE_ID",T={notesList:JSON.parse(localStorage.getItem("arrNotes"))||[],noteId:0};function E(e){return{type:"SET_NOTE",payload:e}}function R(e){return{type:"SET_NOTE_ID",payload:e}}var M={year:"numeric",month:"long",day:"numeric",weekday:"long",hour:"numeric",minute:"numeric"},P=function(e,t){var o=n(30),r=new Date;return e.push({id:o(),folderId:t,name:"New Note",disableInput:!0,date:r.toLocaleDateString(),dateNote:r.toLocaleString("en-US",M)}),localStorage.setItem("arrNotes",JSON.stringify(e)),e},_=function(e,t){var n=O.a.filter(e,(function(e){return e.id!==t}));return localStorage.setItem("arrNotes",JSON.stringify(n)),n},J=function(e,t,n,o,r){var i=t.map((function(t){return t.id===n?{id:t.id,folderId:"changeFolderId"===e?r:t.folderId,name:"renameNote"===e?r:t.name,disableInput:o,noteValue:"changeNoteValue"===e?r:t.noteValue||"",date:t.date,dateNote:t.dateNote}:t}));return localStorage.setItem("arrNotes",JSON.stringify(i)),i},X={mouseX:null,mouseY:null};var Y=Object(b.b)((function(e){var t=e.notes;return{notesList:t.notesList,noteId:t.noteId,folderId:e.folder.folderId}}),(function(e){return{setNotesAction:function(t){return e(E(t))},setNoteIdAction:function(t){return e(R(t))}}}))((function(e){var t=e.setNotesAction,n=e.notesList,r=e.setNoteIdAction,i=e.noteId,c=e.posContextMenu,a=e.setPosContextMenu,s=e.folderId,l=c.mouseX,d=c.mouseY,u=function(){a(X)};return Object(o.jsx)("div",{style:{cursor:"context-menu"},children:Object(o.jsxs)(g.a,{keepMounted:!0,open:null!==d,onClose:u,anchorReference:"anchorPosition",anchorPosition:null!==d&&null!==l?{top:d,left:l}:void 0,children:[Object(o.jsx)(N.a,{onClick:function(){var e=O.a.cloneDeep(n);t(P(e,s)),u()},children:"Add Note"}),Object(o.jsx)(N.a,{onClick:function(e){u();var o=O.a.cloneDeep(n);t(J("changeStatus",o,i,!1))},children:"Rename Note"}),Object(o.jsx)(N.a,{onClick:function(){var e=O.a.cloneDeep(n);t(_(e,i)),r(0),u()},children:"Delete Note"})]})})})),B=n(136),V=n(54),U=n.n(V),z=n(53),q=n.n(z),H=Object(l.a)((function(e){return{root:{display:"flex",marginRight:"20px","& > *":{marginLeft:"5px",marginTop:"30px",padding:"0px",width:"40px",height:"20px"}}}}));var K=Object(b.b)((function(e){var t=e.notes;return{noteId:t.noteId,notesList:t.notesList}}),(function(e){return{setNotesAction:function(t){return e(E(t))},setNoteIdAction:function(t){return e(R(t))}}}))((function(e){var t=H(),n=e.notesList,r=e.currId,i=e.setNotesAction,c=e.setNoteIdAction;return Object(o.jsxs)("div",{className:t.root,children:[Object(o.jsx)(B.a,{"aria-label":"Rename Folder",onClick:function(e){var t=O.a.cloneDeep(n);i(J("changeStatus",t,r,!1))},children:Object(o.jsx)(q.a,{})}),Object(o.jsx)(B.a,{"aria-label":"Delete folder",onClick:function(){var e=O.a.cloneDeep(n);i(_(e,r)),c(0)},children:Object(o.jsx)(U.a,{})})]})})),W=n(139),G=Object(l.a)((function(){return{root:{display:"flex","& .Mui-selected":{backgroundColor:"#fde46e"},"& .MuiListItemText-root":{flex:"0"},"& .MuiListItem-root":{display:"flex",flexDirection:"column",alignItems:"flex-start",paddingLeft:"40px"}},rootInput:{"& .Mui-focused":{backgroundColor:"#75c1ff"},"& .Mui-disabled":{color:"black",backgroundColor:"none"}}}})),Q={mouseX:null,mouseY:null};var Z=Object(b.b)((function(e){var t=e.notes;return{notesList:t.notesList,noteId:t.noteId}}),(function(e){return{setNotesAction:function(t){return e(E(t))},setNoteIdAction:function(t){return e(R(t))}}}))((function(e,t){var i,c=G(),s=e.notesList,l=e.noteId,d=e.setNoteIdAction,u=e.setNotesAction,f=e.itemId,b=e.itemName,m=e.itemStatus,v=e.itemDate,h=Object(r.useRef)(null),I=Object(r.useState)(Q),g=Object(a.a)(I,2),N=g[0],L=g[1],y=n(30);return!1===m&&(i=h,Object(r.useEffect)((function(){function e(e){if(i.current&&!i.current.contains(e.target)){var t=O.a.cloneDeep(s);u(J("renameNote",t,l,!0,b))}}return document.addEventListener("mousedown",e),function(){document.removeEventListener("mousedown",e)}}),[i])),Object(o.jsxs)("div",{ref:h,className:c.root,children:[Object(o.jsxs)(j.a,{button:!0,onDoubleClick:f?function(e){e.preventDefault(),L({mouseX:e.clientX-2,mouseY:e.clientY-4})}:console.log("lulz"),selected:l===f,onClick:function(e){return t=f,void(l!==f&&d(t));var t},children:[Object(o.jsx)(p.a,{primary:Object(o.jsx)(x.a,{id:y(),className:c.rootInput,value:b,onChange:function(e){var t=O.a.cloneDeep(s);u(J("renameNote",t,l,m,e.target.value))},InputProps:{disableUnderline:!0,disabled:m,autoFocus:!0}})}),Object(o.jsx)("div",{children:v})]}),Object(o.jsx)(W.a,{mdUp:!0,children:Object(o.jsx)(K,{currId:f})}),Object(o.jsx)(Y,{posContextMenu:N,setPosContextMenu:L})]})})),$=Object(l.a)((function(e){return{root:{overflow:"auto",backgroundColor:"none","& > *":{padding:"0px",width:"100%"}}}}));var ee=Object(b.b)((function(e){return{notesList:e.notes.notesList,folderId:e.folder.folderId}}))((function(e){var t=$(),r=e.notesList,i=e.currFolderId,c=n(30),a=O.a.filter(r,(function(e){return e.folderId===i}));return Object(o.jsx)("div",{className:t.root,children:Object(o.jsx)(f.a,{component:"nav","aria-label":"main mailbox folders",children:a.map((function(e,t){return Object(o.jsx)(Z,{itemId:e.id,itemName:e.name,itemStatus:e.disableInput,itemDate:e.date},c())}))})})})),te=n(55),ne=n.n(te),oe=Object(l.a)((function(e){return{root:{display:"flex",marginRight:"20px","& > *":{marginLeft:"5px",marginTop:"5px",padding:"0px",width:"40px",height:"20px"}}}}));var re=Object(b.b)((function(e){var t=e.notes,n=t.noteId,o=t.notesList,r=e.folder;return{noteId:n,folderId:r.folderId,notesList:o,foldersList:r.foldersList}}),(function(e){return{setNotesAction:function(t){return e(E(t))},setNoteIdAction:function(t){return e(R(t))},setFolderAction:function(t){return e(C(t))},setFolderIdAction:function(t){return e(S(t))}}}))((function(e){var t=oe(),n=e.notesList,r=e.currId,i=e.setNotesAction,c=e.foldersList,a=e.setFolderAction,s=e.setFolderIdAction;return Object(o.jsxs)("div",{className:t.root,children:[Object(o.jsx)(B.a,{"aria-label":"Rename Folder",onClick:function(e){var t=O.a.cloneDeep(c);a(I("changeStatus",t,r,!1))},children:Object(o.jsx)(q.a,{})}),Object(o.jsx)(B.a,{"aria-label":"Add note",onClick:function(){if(0!==r){var e=O.a.cloneDeep(n);i(P(e,r))}},children:Object(o.jsx)(ne.a,{})}),Object(o.jsx)(B.a,{"aria-label":"Delete folder",onClick:function(){var e=O.a.cloneDeep(c),t=O.a.cloneDeep(n);a(h(e,t,r)),s(0)},children:Object(o.jsx)(U.a,{})})]})})),ie=Object(l.a)((function(e){return{root:{"& .MuiListItem-root":Object(s.a)({height:"20px",padding:"15px 0px 15px 15px"},e.breakpoints.down("sm"),{backgroundColor:"#cccccc",height:"60px"})},rootInput:{"& .Mui-focused":{backgroundColor:"#75c1ff"},"& .Mui-disabled":{color:"black",backgroundColor:"none"}}}})),ce={mouseX:null,mouseY:null};var ae=Object(b.b)((function(e){var t=e.folder;return{foldersList:t.foldersList,folderId:t.folderId,noteId:e.notes.noteId}}),(function(e){return{setFolderAction:function(t){return e(C(t))},setFolderIdAction:function(t){return e(S(t))},setNoteIdAction:function(t){return e(R(t))}}}))((function(e,t){var n,i=ie(),c=e.foldersList,s=e.folderId,l=e.setFolderIdAction,d=e.setFolderAction,u=e.itemId,f=e.itemName,b=e.itemStatus,m=e.setNoteIdAction,v=e.noteId,h=Object(r.useRef)(null),g=Object(r.useState)(ce),N=Object(a.a)(g,2),L=N[0],y=N[1];return!1===b&&(n=h,Object(r.useEffect)((function(){function e(e){if(n.current&&!n.current.contains(e.target)){var t=O.a.cloneDeep(c);d(I("renameFolder",t,s,!0,f))}}return document.addEventListener("mousedown",e),function(){document.removeEventListener("mousedown",e)}}),[n])),Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:i.root,ref:h,children:Object(o.jsxs)(j.a,{button:!0,onDoubleClick:function(e){e.preventDefault(),y({mouseX:e.clientX-2,mouseY:e.clientY-4})},selected:s===u,onClick:function(e){return t=u,s!==u&&l(t),void(0!==v&&m(0));var t},children:[Object(o.jsx)(p.a,{primary:Object(o.jsx)(x.a,{id:u,className:i.rootInput,defaultValue:f,onChange:function(e){var t=O.a.cloneDeep(c);d(I("renameFolder",t,s,b,e.target.value))},InputProps:{disableUnderline:!0,disabled:b,autoFocus:!0}})}),Object(o.jsx)(W.a,{mdUp:!0,children:Object(o.jsx)(re,{currId:u})})]})}),Object(o.jsx)(W.a,{mdUp:!0,children:Object(o.jsx)(ee,{currFolderId:u})}),Object(o.jsx)(k,{posContextMenu:L,setPosContextMenu:y})]})})),se=n(29),le=Object(l.a)((function(e){return{root:{overflow:"auto",backgroundColor:"none"}}}));var de=Object(b.b)((function(e){return{foldersList:e.folder.foldersList}}))((function(e){var t=le(),r=e.foldersList,i=n(30);return Object(o.jsx)("div",{className:t.root,children:Object(o.jsx)(se.c,{droppableId:"droppableFolder",isCombineEnabled:!0,children:function(e){return Object(o.jsxs)(f.a,Object(u.a)(Object(u.a)({className:"characters",component:"nav","aria-label":"main mailbox folders"},e.droppableProps),{},{ref:e.innerRef,children:[r.map((function(e,t){return Object(o.jsx)(se.b,{index:t,draggableId:e.id,type:"TASK",children:function(t,n){return Object(o.jsx)("div",Object(u.a)(Object(u.a)({ref:t.innerRef},t.dragHandleProps),{},{children:Object(o.jsx)(ae,{itemId:e.id,itemName:e.name,itemStatus:e.disableInput},i())}))}},e.id)})),e.placeholder]}))}})})})),ue=n(137),fe=n(69),be=n.n(fe),je=Object(l.a)((function(){return{root:{textTransform:"none",fontWeight:"bold",width:"100%",display:"  flex",justifyContent:"flex-start",paddingLeft:"15px"}}}));var pe=Object(b.b)((function(e){return{foldersList:e.folder.foldersList}}),(function(e){return{setFolderAction:function(t){return e(C(t))}}}))((function(e){var t=je(),n=e.foldersList,r=e.setFolderAction,i=O.a.cloneDeep(n);return Object(o.jsx)("div",{className:t.buttonStyle,children:Object(o.jsx)(ue.a,{className:t.root,startIcon:Object(o.jsx)(be.a,{}),onClick:function(){r(v(i))},children:"New Folder"})})})),xe=Object(l.a)((function(e){return{root:{display:"flex",flexDirection:"column","& > *":Object(s.a)({display:"flex",height:"95vh",flexDirection:"column",justifyContent:"space-between",backgroundColor:"#f7f6f7"},e.breakpoints.down("sm"),{height:"100vh"})}}}));function me(){var e=xe();return Object(o.jsx)("div",{className:e.root,children:Object(o.jsxs)(d.a,{variant:"outlined",square:!0,children:[Object(o.jsx)(de,{}),Object(o.jsx)(pe,{})]})})}var Oe=Object(l.a)((function(e){return{root:{overflow:"auto",backgroundColor:"none","& > *":{padding:"0px",width:"100%"}}}}));var ve=Object(b.b)((function(e){return{notesList:e.notes.notesList,folderId:e.folder.folderId}}))((function(e){var t=Oe(),r=e.notesList,i=e.folderId,c=n(30),a=O.a.filter(r,(function(e){return e.folderId===i}));return Object(o.jsx)("div",{className:t.root,children:Object(o.jsx)(se.c,{droppableId:"droppable",children:function(e){return Object(o.jsxs)(f.a,Object(u.a)(Object(u.a)({className:"characters",component:"nav","aria-label":"main mailbox folders"},e.droppableProps),{},{ref:e.innerRef,children:[a.map((function(e,t){return Object(o.jsx)(se.b,{index:t,draggableId:e.id,type:"TASK",children:function(t,n){return Object(o.jsx)("div",Object(u.a)(Object(u.a)(Object(u.a)({ref:t.innerRef},t.draggableProps),t.dragHandleProps),{},{children:Object(o.jsx)(Z,{itemId:e.id,itemName:e.name,itemStatus:e.disableInput,itemDate:e.date},c())}))}},e.id)})),e.placeholder]}))}})})})),he=Object(l.a)((function(e){return{root:{display:"flex",flexDirection:"column","& > *":{display:"flex",height:"95vh",flexDirection:"column",justifyContent:"space-between",backgroundColor:"#f7f6f7"}}}}));function Ie(){var e=he();return Object(o.jsx)("div",{className:e.root,children:Object(o.jsx)(d.a,{variant:"outlined",square:!0,children:Object(o.jsx)(ve,{})})})}var ge=Object(l.a)((function(){return{timeStyle:{display:"flex",justifyContent:"center",color:"#bababa",marginTop:"20px"}}}));function Ne(e){var t=ge(),n=e.itemTime;return Object(o.jsx)("div",{className:t.timeStyle,children:n})}var Le=Object(l.a)((function(e){return{textAreaStyle:{width:"99%",border:"0px",height:"85vh",resize:"none",outline:"none",backgroundColor:"#f7f6f7",marginTop:"20px"}}}));var ye=Object(b.b)((function(e){var t=e.notes;return{noteId:t.noteId,notesList:t.notesList}}),(function(e){return{setNoteIdAction:function(t){return e(R(t))},setNotesAction:function(t){return e(E(t))}}}))((function(e){var t=Le(),n=e.noteId,r=e.notesList,i=e.setNotesAction,c=e.defaultValue;return Object(o.jsx)("div",{children:Object(o.jsx)("textarea",{className:t.textAreaStyle,defaultValue:c,onBlur:function(e){var t=O.a.cloneDeep(r);i(J("changeNoteValue",t,n,!0,e.target.value))}})})})),De=Object(l.a)((function(e){return{root:{display:"flex",flexDirection:"column","& > *":{display:"flex",height:"95vh",flexDirection:"column",backgroundColor:"#f7f6f7"}}}}));var Ce=Object(b.b)((function(e){var t=e.notes;return{noteId:t.noteId,notesList:t.notesList}}))((function(e){var t=De(),r=e.noteId,i=e.notesList,c=n(30),a=O.a.filter(i,(function(e){return e.id===r}));return Object(o.jsx)("div",{className:t.root,children:Object(o.jsx)(d.a,{variant:"outlined",square:!0,children:a.map((function(e){return Object(o.jsxs)("div",{children:[Object(o.jsx)(Ne,{itemTime:e.dateNote}),Object(o.jsx)(ye,{defaultValue:e.noteValue})]},c())}))})})})),Se=Object(l.a)((function(e){return{root:{display:"flex","& > *":{height:"10px",width:"10px",borderRadius:"10px",margin:"7px 0px 0px 5px"}},redButton:{backgroundColor:"#fd5a52"},yellowButton:{backgroundColor:"#fdbb3f"},greenButton:{backgroundColor:"#31c747"}}}));function Ae(){var e=Se();return Object(o.jsxs)("div",{className:e.root,children:[Object(o.jsx)("div",{className:e.redButton}),Object(o.jsx)("div",{className:e.yellowButton}),Object(o.jsx)("div",{className:e.greenButton})]})}var ke=n(70),Fe=n.n(ke),we=n(71),Te=n.n(we),Ee=Object(l.a)((function(e){return{root:{display:"flex",marginLeft:"30%","& > *":{marginLeft:"15px",marginTop:"5px",padding:"0px",width:"40px",height:"20px",borderRadius:"3px",backgroundColor:"#f5f5f5",boxShadow:"0 5px 4px -4px rgba(0, 0, 0, .2) "}}}}));var Re=Object(b.b)((function(e){var t=e.notes,n=t.noteId,o=t.notesList,r=e.folder;return{noteId:n,folderId:r.folderId,notesList:o,foldersList:r.foldersList}}),(function(e){return{setNotesAction:function(t){return e(E(t))},setNoteIdAction:function(t){return e(R(t))},setFolderAction:function(t){return e(C(t))},setFolderIdAction:function(t){return e(S(t))}}}))((function(e){var t=Ee(),n=e.folderListDisplay,r=e.setFolderListDisplay,i=e.notesList,c=e.folderId,a=e.setNotesAction,s=e.setNoteIdAction,l=e.noteId,d=e.foldersList,u=e.setFolderAction,f=e.setFolderIdAction;return Object(o.jsxs)("div",{className:t.root,children:[Object(o.jsx)(B.a,{"aria-label":"Close/Open folder list",onClick:function(){return r("block"===n?"none":"block")},children:Object(o.jsx)(Fe.a,{fontSize:"small"})}),Object(o.jsx)(B.a,{"aria-label":"Delete current element",onClick:function(){var e=O.a.cloneDeep(d),t=O.a.cloneDeep(i);0===l?(u(h(e,t,c)),f(0)):(a(_(t,l)),s(0))},children:Object(o.jsx)(Te.a,{fontSize:"small"})}),Object(o.jsx)(B.a,{"aria-label":"Add note",onClick:function(){if(0!==c){var e=O.a.cloneDeep(i);a(P(e,c))}},children:Object(o.jsx)(ne.a,{fontSize:"small"})})]})})),Me=Object(l.a)((function(e){return{root:{width:"100%",height:"30px",backgroundColor:"#e1dee1",borderTopLeftRadius:"5px",borderTopRightRadius:"5px",boxShadow:"0 0 5px white inset",display:"flex"}}}));function Pe(e){var t=Me(),n=e.folderListDisplay,r=e.setFolderListDisplay;return Object(o.jsxs)("div",{className:t.root,children:[Object(o.jsx)(Ae,{}),Object(o.jsx)(Re,{folderListDisplay:n,setFolderListDisplay:r})]})}var _e=Object(l.a)((function(e){return{root:{display:"flex",flexDirection:"column"},topMenu:{margin:"1px 1px 0px 1px",display:"flex"},main:{display:"flex",height:"95vh"},left:Object(s.a)({flex:"0 25%"},e.breakpoints.down("sm"),{flex:"0 100%"}),center:{flex:"0 25%"},right:{flex:"1 50%"}}}));var Je=Object(b.b)((function(e){var t=e.notes;return{notesList:t.notesList,noteId:t.noteId,folderId:e.folder.folderId}}),(function(e){return{setNotesAction:function(t){return e(E(t))},setNoteIdAction:function(t){return e(R(t))}}}))((function(e){var t=Object(r.useState)("block"),n=Object(a.a)(t,2),i=n[0],c=n[1],s=e.setNotesAction,l=e.notesList,d=e.setNoteIdAction,u=_e();return Object(o.jsx)(se.a,{onDragEnd:function(e){var t=e.combine,n=e.draggableId;if(t){var o=O.a.cloneDeep(l);s(J("changeFolderId",o,n,!0,t.draggableId)),d(0)}},children:Object(o.jsxs)("div",{className:u.root,children:[Object(o.jsx)(W.a,{smDown:!0,children:Object(o.jsx)("div",{className:u.topMenu,children:Object(o.jsx)(Pe,{folderListDisplay:i,setFolderListDisplay:c})})}),Object(o.jsxs)("div",{className:u.main,children:[Object(o.jsx)("div",{className:u.left,style:{display:i},children:Object(o.jsx)(me,{})}),Object(o.jsxs)(W.a,{smDown:!0,children:[Object(o.jsx)("div",{className:u.center,children:Object(o.jsx)(Ie,{})}),Object(o.jsx)("div",{className:u.right,children:Object(o.jsx)(Ce,{})})]})]})]})})})),Xe=(n(96),function(e){e&&e instanceof Function&&"web-vitals".then((function(t){var n=t.getCLS,o=t.getFID,r=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),o(e),r(e),i(e),c(e)}))}),Ye=n(18),Be=Object(Ye.combineReducers)({folder:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case L:return Object(u.a)(Object(u.a)({},e),{},{foldersList:t.payload});case y:return Object(u.a)(Object(u.a)({},e),{},{folderId:t.payload});default:return e}},notes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case F:return Object(u.a)(Object(u.a)({},e),{},{notesList:t.payload});case w:return Object(u.a)(Object(u.a)({},e),{},{noteId:t.payload});default:return e}}}),Ve=n(72),Ue=Object(Ye.createStore)(Be,Object(Ve.devToolsEnhancer)());c.a.render(Object(o.jsx)(b.a,{store:Ue,children:Object(o.jsx)(Je,{})}),document.getElementById("root")),Xe()}},[[97,1,2]]]);
//# sourceMappingURL=main.d264488a.chunk.js.map