(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{111:function(e,t,n){"use strict";n.r(t);var o=n(2),r=n(0),c=n.n(r),i=n(12),a=n.n(i),s=(n(96),n(37)),l=n(22),d=n(145),u=n(141),f=n(10),j=n(143),b=n(8),p=n(114),O=n(152),x=n(149),m=n(7),h=n.n(m),v=function(e){var t=n(31);return e.push({id:t(),name:"New Folder",disableInput:!0}),localStorage.setItem("arrFolders",JSON.stringify(e)),e},I=function(e,t,n){var o=h.a.filter(e,(function(e){return e.id!==n})),r=h.a.filter(t,(function(e){return e.folderId!==n}));return localStorage.setItem("arrFolders",JSON.stringify(o)),localStorage.setItem("arrNotes",JSON.stringify(r)),o},g=function(e,t,n,o,r){var c=t.map((function(t){return t.id===n?{id:t.id,name:"renameFolder"===e?r:t.name,disableInput:o}:t}));return localStorage.setItem("arrFolders",JSON.stringify(c)),c},N=n(79),L=n(144),y="SET_FOLDER",D="SET_FOLDER_ID",C={foldersList:JSON.parse(localStorage.getItem("arrFolders"))||[],folderId:0};function S(e){return{type:"SET_FOLDER",payload:e}}function k(e){return{type:"SET_FOLDER_ID",payload:e}}var A={mouseX:null,mouseY:null};var F=Object(b.b)((function(e){var t=e.folder;return{foldersList:t.foldersList,folderId:t.folderId,notesList:e.notes.notesList}}),(function(e){return{setFolderAction:function(t){return e(S(t))},setFolderIdAction:function(t){return e(k(t))}}}))((function(e){var t=e.setFolderAction,n=e.foldersList,r=e.setFolderIdAction,c=e.folderId,i=e.posContextMenu,a=e.setPosContextMenu,s=e.notesList,l=i.mouseX,d=i.mouseY,u=function(){a(A)};return Object(o.jsx)("div",{style:{cursor:"context-menu"},children:Object(o.jsxs)(N.a,{keepMounted:!0,open:null!==d,onClose:u,anchorReference:"anchorPosition",anchorPosition:null!==d&&null!==l?{top:d,left:l}:void 0,children:[Object(o.jsx)(L.a,{onClick:function(){var e=h.a.cloneDeep(n);t(v(e)),u()},children:"Add folder"}),Object(o.jsx)(L.a,{onClick:function(e){u();var o=h.a.cloneDeep(n);t(g("changeStatus",o,c,!1))},children:"Rename folder"}),Object(o.jsx)(L.a,{onClick:function(){var e=h.a.cloneDeep(n),o=h.a.cloneDeep(s);t(I(e,o,c)),r(0),u()},children:"Delete folder"})]})})})),w="SET_NOTE",T="SET_NOTE_ID",E={notesList:JSON.parse(localStorage.getItem("arrNotes"))||[],noteId:0};function R(e){return{type:"SET_NOTE",payload:e}}function M(e){return{type:"SET_NOTE_ID",payload:e}}var P=n(20),_={year:"numeric",month:"long",day:"numeric",weekday:"long",hour:"numeric",minute:"numeric"},J=function(e,t){var o=n(31),r=new Date;return e.push({id:o(),folderId:t,name:"New Note",disableInput:!0,date:r.toLocaleDateString(),dateNote:r.toLocaleString("en-US",_)}),localStorage.setItem("arrNotes",JSON.stringify(e)),e},X=function(e,t){var n=h.a.filter(e,(function(e){return e.id!==t}));return localStorage.setItem("arrNotes",JSON.stringify(n)),n},Y=function(e,t,n,o,r){var c=t.map((function(t){return t.id===n?{id:t.id,folderId:"changeFolderId"===e?r:t.folderId,name:"renameNote"===e?r:t.name,disableInput:o,noteValue:"changeNoteValue"===e?r:t.noteValue||"",date:t.date,dateNote:t.dateNote}:t}));return localStorage.setItem("arrNotes",JSON.stringify(c)),c},B={mouseX:null,mouseY:null};var V=Object(b.b)((function(e){var t=e.notes;return{notesList:t.notesList,noteId:t.noteId,folderId:e.folder.folderId}}),(function(e){return{setNotesAction:function(t){return e(R(t))},setNoteIdAction:function(t){return e(M(t))}}}))((function(e){var t=e.setNotesAction,n=e.notesList,r=e.setNoteIdAction,c=e.noteId,i=e.posContextMenu,a=e.setPosContextMenu,s=e.folderId,l=i.mouseX,d=i.mouseY,u=function(){a(B)};return Object(o.jsx)("div",{style:{cursor:"context-menu"},children:Object(o.jsxs)(N.a,{keepMounted:!0,open:null!==d,onClose:u,anchorReference:"anchorPosition",anchorPosition:null!==d&&null!==l?{top:d,left:l}:void 0,children:[Object(o.jsx)(L.a,{onClick:function(){var e=h.a.cloneDeep(n);t(J(e,s)),u()},children:"Add Note"}),Object(o.jsx)(L.a,{onClick:function(e){u();var o=h.a.cloneDeep(n);t(Y("changeStatus",o,c,!1))},children:"Rename Note"}),Object(o.jsx)(L.a,{onClick:function(){var e=h.a.cloneDeep(n);t(X(e,c)),r(0),u()},children:"Delete Note"})]})})})),U=n(150),z=Object(d.a)((function(){return{timeStyle:{display:"flex",justifyContent:"center",color:"#bababa",marginTop:"20px"}}}));function q(e){var t=z(),n=e.itemTime;return Object(o.jsx)("div",{className:t.timeStyle,children:n})}var H=Object(d.a)((function(e){return{textAreaStyle:{width:"99%",border:"0px",height:"85vh",resize:"none",outline:"none",backgroundColor:"#f7f6f7",marginTop:"20px"}}}));var K=Object(b.b)((function(e){var t=e.notes;return{noteId:t.noteId,notesList:t.notesList}}),(function(e){return{setNoteIdAction:function(t){return e(M(t))},setNotesAction:function(t){return e(R(t))}}}))((function(e){var t=H(),n=e.noteId,r=e.notesList,c=e.setNotesAction,i=e.defaultValue;return Object(o.jsx)("div",{children:Object(o.jsx)("textarea",{className:t.textAreaStyle,defaultValue:i,onBlur:function(e){var t=h.a.cloneDeep(r);c(Y("changeNoteValue",t,n,!0,e.target.value))}})})})),W=Object(d.a)((function(e){return{root:{display:"flex",flexDirection:"column","& > *":{display:"flex",height:"95vh",flexDirection:"column",backgroundColor:"#f7f6f7"}}}}));var G=Object(b.b)((function(e){var t=e.notes;return{noteId:t.noteId,notesList:t.notesList}}))((function(e){var t=W(),r=e.noteId,c=e.notesList,i=n(31),a=h.a.filter(c,(function(e){return e.id===r}));return Object(o.jsx)("div",{className:t.root,children:Object(o.jsx)(u.a,{variant:"outlined",square:!0,children:a.map((function(e){return Object(o.jsxs)("div",{children:[Object(o.jsx)(q,{itemTime:e.dateNote}),Object(o.jsx)(K,{defaultValue:e.noteValue})]},i())}))})})})),Q=n(146),Z=Object(d.a)((function(e){return{root:{position:"absolute",width:"100%",height:"100%",backgroundColor:"#f7f6f7",overflow:"auto"},button:{width:"100%",height:"40px"}}}));function $(e){var t=Z(),n=e.setOpen,r=e.open;return Object(o.jsx)("div",{children:Object(o.jsx)(U.a,{open:r,onClose:n,children:Object(o.jsxs)("div",{className:t.root,children:[Object(o.jsx)(G,{}),Object(o.jsx)(Q.a,{className:t.button,onClick:function(){n(!1)},children:"Save and Close"})]})})})}var ee=n(147),te=n(56),ne=n.n(te),oe=n(30),re=n.n(oe);var ce=Object(b.b)((function(e){var t=e.notes;return{noteId:t.noteId,notesList:t.notesList}}),(function(e){return{setNotesAction:function(t){return e(R(t))},setNoteIdAction:function(t){return e(M(t))}}}))((function(e){var t=e.notesList,n=e.currId,r=e.setNotesAction,i=e.setNoteIdAction,a=function(e){var o=h.a.cloneDeep(t);r(Y("changeStatus",o,n,!1))},s=function(){var e=h.a.cloneDeep(t);r(X(e,n)),i(0)};return Object(o.jsx)(re.a,{variant:"popover",popupId:"demo-popup-menu",children:function(e){return Object(o.jsxs)(c.a.Fragment,{children:[Object(o.jsx)(ee.a,Object(f.a)(Object(f.a)({"aria-label":"menu"},Object(oe.bindTrigger)(e)),{},{children:Object(o.jsx)(ne.a,{})})),Object(o.jsxs)(N.a,Object(f.a)(Object(f.a)({},Object(oe.bindMenu)(e)),{},{children:[Object(o.jsx)(L.a,{onClick:a,children:"Rename Note"}),Object(o.jsx)(L.a,{onClick:s,children:"Remove Note"})]}))]})}})})),ie=n(151),ae=n(148),se=Object(d.a)((function(e){return{root:{display:"flex","& .Mui-selected":Object(l.a)({backgroundColor:"#fde46e"},e.breakpoints.down("sm"),{backgroundColor:"transparent"}),"& .MuiListItemText-root":{width:"100%"},"& .MuiListItem-root":Object(l.a)({paddingLeft:"20px",paddingRight:"20px"},e.breakpoints.down("sm"),{paddingLeft:"16px",paddingRight:"16px"})},rootInput:{display:"flex","& .Mui-focused":{backgroundColor:"#f7f6f7"},"& .Mui-disabled":{color:"black"}},leftParth:{display:"flex",flexDirection:"column",alignItems:"flex-start",width:"100%"}}})),le={mouseX:null,mouseY:null};var de=Object(b.b)((function(e){var t=e.notes;return{notesList:t.notesList,noteId:t.noteId}}),(function(e){return{setNotesAction:function(t){return e(R(t))},setNoteIdAction:function(t){return e(M(t))}}}))((function(e,t){var c,i=se(),a=n(31),l=e.notesList,d=e.noteId,u=e.setNoteIdAction,f=e.setNotesAction,j=e.itemId,b=e.itemName,m=e.itemStatus,v=e.itemDate,I=Object(r.useRef)(null),g=Object(r.useState)(le),N=Object(s.a)(g,2),L=N[0],y=N[1],D=Object(r.useState)(!1),C=Object(s.a)(D,2),S=C[0],k=C[1],A=Object(P.a)(),F=Object(ae.a)(A.breakpoints.up("md"));return!1===m&&(c=I,Object(r.useEffect)((function(){function e(e){if(c.current&&!c.current.contains(e.target)){var t=h.a.cloneDeep(l);f(Y("renameNote",t,d,!0,b))}}return document.addEventListener("mousedown",e),function(){document.removeEventListener("mousedown",e)}}),[c])),Object(o.jsxs)("div",{ref:I,className:i.root,children:[Object(o.jsxs)(p.a,{button:!0,onDoubleClick:F?function(e){e.preventDefault(),y({mouseX:e.clientX-2,mouseY:e.clientY-4})}:function(){return k(!S)},selected:d===j,onClick:function(e){return t=j,void(d!==j&&u(t));var t},children:[Object(o.jsxs)("div",{className:i.leftParth,children:[Object(o.jsx)(O.a,{primary:Object(o.jsx)(x.a,{id:a(),className:i.rootInput,value:b,onChange:function(e){var t=h.a.cloneDeep(l);f(Y("renameNote",t,d,m,e.target.value))},InputProps:{disableUnderline:!0,disabled:m,autoFocus:!0}})}),Object(o.jsx)("div",{children:v})]}),Object(o.jsx)(ie.a,{mdUp:!0,children:Object(o.jsx)(ce,{currId:j})})]}),Object(o.jsx)($,{open:S,setOpen:k}),Object(o.jsx)(V,{posContextMenu:L,setPosContextMenu:y})]})})),ue=Object(d.a)((function(e){return{root:{overflow:"auto",backgroundColor:"none","& > *":{padding:"0px",width:"100%"}}}}));var fe=Object(b.b)((function(e){return{notesList:e.notes.notesList,folderId:e.folder.folderId}}))((function(e){var t=ue(),r=e.notesList,c=e.currFolderId,i=n(31),a=h.a.filter(r,(function(e){return e.folderId===c}));return Object(o.jsx)("div",{className:t.root,children:Object(o.jsx)(j.a,{component:"nav","aria-label":"main mailbox folders",children:a.map((function(e,t){return Object(o.jsx)(de,{itemId:e.id,itemName:e.name,itemStatus:e.disableInput,itemDate:e.date},i())}))})})}));var je=Object(b.b)((function(e){var t=e.notes,n=t.noteId,o=t.notesList,r=e.folder;return{noteId:n,folderId:r.folderId,notesList:o,foldersList:r.foldersList}}),(function(e){return{setNotesAction:function(t){return e(R(t))},setNoteIdAction:function(t){return e(M(t))},setFolderAction:function(t){return e(S(t))},setFolderIdAction:function(t){return e(k(t))}}}))((function(e){var t=e.notesList,n=e.currId,r=e.setNotesAction,i=e.foldersList,a=e.setFolderAction,s=e.setFolderIdAction,l=function(e){var t=h.a.cloneDeep(i);a(g("changeStatus",t,n,!1))},d=function(){var e=h.a.cloneDeep(t);0!==n&&r(J(e,n))},u=function(){var e=h.a.cloneDeep(i),o=h.a.cloneDeep(t);a(I(e,o,n)),s(0)};return Object(o.jsx)(re.a,{variant:"popover",popupId:"demo-popup-menu",children:function(e){return Object(o.jsxs)(c.a.Fragment,{children:[Object(o.jsx)(ee.a,Object(f.a)(Object(f.a)({},Object(oe.bindTrigger)(e)),{},{children:Object(o.jsx)(ne.a,{})})),Object(o.jsxs)(N.a,Object(f.a)(Object(f.a)({},Object(oe.bindMenu)(e)),{},{children:[Object(o.jsx)(L.a,{onClick:d,children:"Add Note"}),Object(o.jsx)(L.a,{onClick:l,children:"Rename Folder"}),Object(o.jsx)(L.a,{onClick:u,children:"Remove Folder"})]}))]})}})})),be=Object(d.a)((function(e){return{root:{"& .MuiListItem-root":Object(l.a)({height:"40px"},e.breakpoints.down("sm"),{backgroundColor:"#cccccc",height:"60px"})},rootInput:{display:"flex","& .Mui-focused":{backgroundColor:"#f7f6f7"},"& .Mui-disabled":{color:"black"}}}})),pe={mouseX:null,mouseY:null};var Oe=Object(b.b)((function(e){var t=e.folder;return{foldersList:t.foldersList,folderId:t.folderId,noteId:e.notes.noteId}}),(function(e){return{setFolderAction:function(t){return e(S(t))},setFolderIdAction:function(t){return e(k(t))},setNoteIdAction:function(t){return e(M(t))}}}))((function(e,t){var n,c=be(),i=e.foldersList,a=e.folderId,l=e.setFolderIdAction,d=e.setFolderAction,u=e.itemId,f=e.itemName,j=e.itemStatus,b=e.setNoteIdAction,m=e.noteId,v=Object(r.useRef)(null),I=Object(r.useState)(pe),N=Object(s.a)(I,2),L=N[0],y=N[1];return!1===j&&(n=v,Object(r.useEffect)((function(){function e(e){if(n.current&&!n.current.contains(e.target)){var t=h.a.cloneDeep(i);d(g("renameFolder",t,a,!0,f))}}return document.addEventListener("mousedown",e),function(){document.removeEventListener("mousedown",e)}}),[n])),Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:c.root,ref:v,children:Object(o.jsxs)(p.a,{button:!0,onDoubleClick:function(e){e.preventDefault(),y({mouseX:e.clientX-2,mouseY:e.clientY-4})},selected:a===u,onClick:function(e){return t=u,a!==u&&l(t),void(0!==m&&b(0));var t},children:[Object(o.jsx)(O.a,{primary:Object(o.jsx)(x.a,{id:u,className:c.rootInput,defaultValue:f,onChange:function(e){var t=h.a.cloneDeep(i);d(g("renameFolder",t,a,j,e.target.value))},InputProps:{disableUnderline:!0,disabled:j,autoFocus:!0}})}),Object(o.jsx)(ie.a,{mdUp:!0,children:Object(o.jsx)(je,{currId:u})})]})}),Object(o.jsx)(ie.a,{mdUp:!0,children:Object(o.jsx)(fe,{currFolderId:u})}),Object(o.jsx)(F,{posContextMenu:L,setPosContextMenu:y})]})})),xe=n(29),me=Object(d.a)((function(e){return{root:{overflow:"auto",backgroundColor:"none"}}}));var he=Object(b.b)((function(e){return{foldersList:e.folder.foldersList}}))((function(e){var t=me(),r=e.foldersList,c=n(31);return Object(o.jsx)("div",{className:t.root,children:Object(o.jsx)(xe.c,{droppableId:"droppableFolder",isCombineEnabled:!0,children:function(e){return Object(o.jsxs)(j.a,Object(f.a)(Object(f.a)({className:"characters",component:"nav","aria-label":"main mailbox folders"},e.droppableProps),{},{ref:e.innerRef,children:[r.map((function(e,t){return Object(o.jsx)(xe.b,{index:t,draggableId:e.id,type:"TASK",children:function(t,n){return Object(o.jsx)("div",Object(f.a)(Object(f.a)({ref:t.innerRef},t.dragHandleProps),{},{children:Object(o.jsx)(Oe,{itemId:e.id,itemName:e.name,itemStatus:e.disableInput},c())}))}},e.id)})),e.placeholder]}))}})})})),ve=n(74),Ie=n.n(ve),ge=Object(d.a)((function(){return{root:{textTransform:"none",fontWeight:"bold",width:"100%",display:"  flex",justifyContent:"flex-start",paddingLeft:"15px"}}}));var Ne=Object(b.b)((function(e){return{foldersList:e.folder.foldersList}}),(function(e){return{setFolderAction:function(t){return e(S(t))}}}))((function(e){var t=ge(),n=e.foldersList,r=e.setFolderAction,c=h.a.cloneDeep(n);return Object(o.jsx)("div",{className:t.buttonStyle,children:Object(o.jsx)(Q.a,{className:t.root,startIcon:Object(o.jsx)(Ie.a,{}),onClick:function(){r(v(c))},children:"New Folder"})})})),Le=Object(d.a)((function(e){return{root:{display:"flex",flexDirection:"column","& > *":Object(l.a)({display:"flex",height:"95vh",flexDirection:"column",justifyContent:"space-between",backgroundColor:"#f7f6f7"},e.breakpoints.down("sm"),{height:"100vh"})}}}));function ye(){var e=Le();return Object(o.jsx)("div",{className:e.root,children:Object(o.jsxs)(u.a,{variant:"outlined",square:!0,children:[Object(o.jsx)(he,{}),Object(o.jsx)(Ne,{})]})})}var De=Object(d.a)((function(e){return{root:{overflow:"auto",backgroundColor:"none","& > *":{padding:"0px",width:"100%"}}}}));var Ce=Object(b.b)((function(e){return{notesList:e.notes.notesList,folderId:e.folder.folderId}}))((function(e){var t=De(),r=e.notesList,c=e.folderId,i=n(31),a=h.a.filter(r,(function(e){return e.folderId===c}));return Object(o.jsx)("div",{className:t.root,children:Object(o.jsx)(xe.c,{droppableId:"droppable",children:function(e){return Object(o.jsxs)(j.a,Object(f.a)(Object(f.a)({className:"characters",component:"nav","aria-label":"main mailbox folders"},e.droppableProps),{},{ref:e.innerRef,children:[a.map((function(e,t){return Object(o.jsx)(xe.b,{index:t,draggableId:e.id,type:"TASK",children:function(t,n){return Object(o.jsx)("div",Object(f.a)(Object(f.a)(Object(f.a)({ref:t.innerRef},t.draggableProps),t.dragHandleProps),{},{children:Object(o.jsx)(de,{itemId:e.id,itemName:e.name,itemStatus:e.disableInput,itemDate:e.date},i())}))}},e.id)})),e.placeholder]}))}})})})),Se=Object(d.a)((function(e){return{root:{display:"flex",flexDirection:"column","& > *":{display:"flex",height:"95vh",flexDirection:"column",backgroundColor:"#f7f6f7"}}}}));function ke(){var e=Se();return Object(o.jsx)("div",{className:e.root,children:Object(o.jsx)(u.a,{variant:"outlined",square:!0,children:Object(o.jsx)(Ce,{})})})}var Ae=Object(d.a)((function(e){return{root:{display:"flex","& > *":{height:"10px",width:"10px",borderRadius:"10px",margin:"7px 0px 0px 5px"}},redButton:{backgroundColor:"#fd5a52"},yellowButton:{backgroundColor:"#fdbb3f"},greenButton:{backgroundColor:"#31c747"}}}));function Fe(){var e=Ae();return Object(o.jsxs)("div",{className:e.root,children:[Object(o.jsx)("div",{className:e.redButton}),Object(o.jsx)("div",{className:e.yellowButton}),Object(o.jsx)("div",{className:e.greenButton})]})}var we=n(75),Te=n.n(we),Ee=n(76),Re=n.n(Ee),Me=n(77),Pe=n.n(Me),_e=Object(d.a)((function(e){return{root:{display:"flex",marginLeft:"30%","& > *":{marginLeft:"15px",marginTop:"5px",padding:"0px",width:"40px",height:"20px",borderRadius:"3px",backgroundColor:"#f5f5f5",boxShadow:"0 5px 4px -4px rgba(0, 0, 0, .2) "}}}}));var Je=Object(b.b)((function(e){var t=e.notes,n=t.noteId,o=t.notesList,r=e.folder;return{noteId:n,folderId:r.folderId,notesList:o,foldersList:r.foldersList}}),(function(e){return{setNotesAction:function(t){return e(R(t))},setNoteIdAction:function(t){return e(M(t))},setFolderAction:function(t){return e(S(t))},setFolderIdAction:function(t){return e(k(t))}}}))((function(e){var t=_e(),n=e.folderListDisplay,r=e.setFolderListDisplay,c=e.notesList,i=e.folderId,a=e.setNotesAction,s=e.setNoteIdAction,l=e.noteId,d=e.foldersList,u=e.setFolderAction,f=e.setFolderIdAction;return Object(o.jsxs)("div",{className:t.root,children:[Object(o.jsx)(ee.a,{"aria-label":"Close/Open folder list",onClick:function(){return r("block"===n?"none":"block")},children:Object(o.jsx)(Te.a,{fontSize:"small"})}),Object(o.jsx)(ee.a,{"aria-label":"Delete current element",onClick:function(){var e=h.a.cloneDeep(d),t=h.a.cloneDeep(c);0===l?(u(I(e,t,i)),f(0)):(a(X(t,l)),s(0))},children:Object(o.jsx)(Re.a,{fontSize:"small"})}),Object(o.jsx)(ee.a,{"aria-label":"Add note",onClick:function(){if(0!==i){var e=h.a.cloneDeep(c);a(J(e,i))}},children:Object(o.jsx)(Pe.a,{fontSize:"small"})})]})})),Xe=Object(d.a)((function(e){return{root:{width:"100%",height:"30px",backgroundColor:"#e1dee1",borderTopLeftRadius:"5px",borderTopRightRadius:"5px",boxShadow:"0 0 5px white inset",display:"flex"}}}));function Ye(e){var t=Xe(),n=e.folderListDisplay,r=e.setFolderListDisplay;return Object(o.jsxs)("div",{className:t.root,children:[Object(o.jsx)(Fe,{}),Object(o.jsx)(Je,{folderListDisplay:n,setFolderListDisplay:r})]})}var Be=Object(d.a)((function(e){return{root:{display:"flex",flexDirection:"column"},topMenu:{margin:"1px 1px 0px 1px",display:"flex"},main:{display:"flex",height:"95vh"},left:Object(l.a)({flex:"0 25%"},e.breakpoints.down("sm"),{flex:"0 100%"}),center:{flex:"0 25%"},right:{flex:"1 50%"}}}));var Ve=Object(b.b)((function(e){var t=e.notes;return{notesList:t.notesList,noteId:t.noteId,folderId:e.folder.folderId}}),(function(e){return{setNotesAction:function(t){return e(R(t))},setNoteIdAction:function(t){return e(M(t))}}}))((function(e){var t=Object(r.useState)("block"),n=Object(s.a)(t,2),c=n[0],i=n[1],a=e.setNotesAction,l=e.notesList,d=e.setNoteIdAction,u=Be();return Object(o.jsx)(xe.a,{onDragEnd:function(e){var t=e.combine,n=e.draggableId;if(t){var o=h.a.cloneDeep(l);a(Y("changeFolderId",o,n,!0,t.draggableId)),d(0)}},children:Object(o.jsxs)("div",{className:u.root,children:[Object(o.jsx)(ie.a,{smDown:!0,children:Object(o.jsx)("div",{className:u.topMenu,children:Object(o.jsx)(Ye,{folderListDisplay:c,setFolderListDisplay:i})})}),Object(o.jsxs)("div",{className:u.main,children:[Object(o.jsx)("div",{className:u.left,style:{display:c},children:Object(o.jsx)(ye,{})}),Object(o.jsxs)(ie.a,{smDown:!0,children:[Object(o.jsx)("div",{className:u.center,children:Object(o.jsx)(ke,{})}),Object(o.jsx)("div",{className:u.right,children:Object(o.jsx)(G,{})})]})]})]})})})),Ue=(n(110),function(e){e&&e instanceof Function&&"web-vitals".then((function(t){var n=t.getCLS,o=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),o(e),r(e),c(e),i(e)}))}),ze=n(18),qe=Object(ze.combineReducers)({folder:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return Object(f.a)(Object(f.a)({},e),{},{foldersList:t.payload});case D:return Object(f.a)(Object(f.a)({},e),{},{folderId:t.payload});default:return e}},notes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return Object(f.a)(Object(f.a)({},e),{},{notesList:t.payload});case T:return Object(f.a)(Object(f.a)({},e),{},{noteId:t.payload});default:return e}}}),He=n(78),Ke=Object(ze.createStore)(qe,Object(He.devToolsEnhancer)());a.a.render(Object(o.jsx)(b.a,{store:Ke,children:Object(o.jsx)(Ve,{})}),document.getElementById("root")),Ue()},96:function(e,t,n){}},[[111,1,2]]]);
//# sourceMappingURL=main.cf1ccf54.chunk.js.map