javascript: !function(){if(window.colorerApp=function(){if("white"==(r=document.getElementsByTagName("*"))[0].style.color)var e="grey";else e="grey"==r[0].style.color?"green":"green"==r[0].style.color?"royalblue":"royalblue"==r[0].style.color?"black":"black"==r[0].style.color?"yellow":"yellow"==r[0].style.color?"aqua":"aqua"==r[0].style.color?"fuchsia":"fuchsia"==r[0].style.color?"orangered":"white";if("white"==r[0].style.backgroundColor)var t="black";else t="black"==r[0].style.backgroundColor?"grey":"grey"==r[0].style.backgroundColor?"royalblue":"royalblue"==r[0].style.backgroundColor?"navy":"navy"==r[0].style.backgroundColor?"silver":"silver"==r[0].style.backgroundColor?"maroon":"maroon"==r[0].style.backgroundColor?"darkgreen":"white";for(var n=0,o=r.length;n<o;n++)r[n].style&&(r[n].style.backgroundColor=t);var r;for(n=0,o=(r=document.getElementsByTagName("*")).length;n<o;n++)r[n].style&&(r[n].style.color=e)},window.googApp=function(){for(var e=document.getElementsByTagName("*"),t=0;t<e.length;t++)e[t].id.split("goog").length>1&&(console.log(e[t]),e[t].remove());for(delete e,e=document.getElementsByTagName("*"),t=0;t<e.length;t++)e[t].id.split("ads").length>1&&(console.log(e[t]),e[t].remove());delete e},window.googRepeaterApp=function(){window.currentInterval3&&clearInterval(window.currentInterval3),window.currentInterval3=setInterval(function(){console.log("Running repeaterGoogler");for(var e=document.getElementsByTagName("*"),t=0;t<e.length;t++)e[t].id.split("goog").length>1?(console.log(e[t]),e[t].remove()):e[t].id.split("ads").length>1?(console.log(e[t]),e[t].remove()):e[t].id.split("iframe").length>1&&(console.log(e[t]),e[t].remove());for(delete e,e=document.getElementsByTagName("iframe"),t=0;t<e.length;t++)console.log(e[t]),e[t].remove();delete e},6e3)},window.iframeApp=function(){for(var e=document.getElementsByTagName("iframe"),t=0;t<e.length;t++)console.log(e[t]),e[t].remove();for(delete e,e=document.getElementsByTagName("*"),t=0;t<e.length;t++)e[t].id.split("iframe").length>1&&(console.log(e[t]),e[t].remove());delete e},window.scrollerApp=function(){function e(){var e="red";counters1>0?(e="blue",Scrollupdown=-1):(Scrollupdown=1,e="red");var t='<div id="small_load"><table id="small_1" width="130px" height="250px" align="left" style="padding-right: 0px;padding-left: 0px;float: left; position: fixed; z-index:99999; bottom: 200px; left: 450px;"><tr height="180px" valign="top" style=";"><td style="color: '+e+';text-align: left;"><div id="load_small" style="font-size: 80pt"><br><b>'+counters1+"</b><br><br></div></td><tr></table></div>",n=document.getElementsByTagName("BODY")[0],o=document.createElement("div");o.id="burn_after_reading_lol",o.innerHTML=t,n.insertBefore(o,null),window.opaValue=1,window.timeoutClears?window.clearTimeout(timeoutClears):window.timeoutClears=setTimeout(function(){window.opaInt=setInterval(function(){opaValue-=.1,document.getElementById("burn_after_reading_lol")&&opaValue>=0?(document.getElementById("burn_after_reading_lol").style.opacity=opaValue,opaValue<=0&&(document.getElementById("burn_after_reading_lol").parentElement.removeChild(document.getElementById("burn_after_reading_lol")),window.clearInterval(opaInt))):window.clearInterval(opaInt)},150)},1e3)}function t(){var e='<div id="small_load2"><table id="small_1" width="130px" height="250px" align="left" style="padding-right: 0px;padding-left: 0px;float: left; position: fixed; z-index:99999; bottom: 500px; left: 450px;"><tr height="180px" valign="top" style=";"><td style="color:lightGreen;text-align: left;"><div id="load_small2" style="font-size: 80pt"><br><b>'+countersTime+"</b><br><br></div></td><tr></table></div>",t=document.getElementsByTagName("BODY")[0],n=document.createElement("div");n.id="burn_after_reading_lol2",n.innerHTML=e,t.insertBefore(n,null),window.opaValue2=1,window.timeoutClears2?window.clearTimeout(timeoutClears2):window.timeoutClears2=setTimeout(function(){window.opaInt2=setInterval(function(){opaValue2-=.1,document.getElementById("burn_after_reading_lol2")&&opaValue2>=0?(document.getElementById("burn_after_reading_lol2").style.opacity=opaValue2,opaValue2<=0&&(document.getElementById("burn_after_reading_lol2").parentElement.removeChild(document.getElementById("burn_after_reading_lol2")),window.clearInterval(opaInt2))):window.clearInterval(opaInt2)},150)},1e3)}window.counters1=0,window.countersTime=0,window.Scrollupdown=1,window.scrollingInterval=null,window.timingInterval=null,window.scrollInt=function(){window.scrollBy(0,Scrollupdown)},window.timeInt=function(){counters1<0?window.scrollTo(0,0):counters1>0&&window.scrollTo(0,1e11)},window.clearScroller=function(){window.timeoutClears&&(window.clearTimeout(timeoutClears),window.timeoutClears=null),window.scrollingInterval&&(window.clearInterval(scrollingInterval),window.scrollingInterval=null),document.getElementById("burn_after_reading_lol")&&document.getElementById("burn_after_reading_lol").parentElement.removeChild(document.getElementById("burn_after_reading_lol")),document.getElementById("burn_after_reading_lol2")&&document.getElementById("burn_after_reading_lol2").parentElement.removeChild(document.getElementById("burn_after_reading_lol2"))},window.clearTimer=function(){window.timeoutClears2&&(window.clearTimeout(timeoutClears2),window.timeoutClears2=null),window.timingInterval&&(window.clearInterval(timingInterval),window.timingInterval=null),document.getElementById("burn_after_reading_lol")&&document.getElementById("burn_after_reading_lol").parentElement.removeChild(document.getElementById("burn_after_reading_lol")),document.getElementById("burn_after_reading_lol2")&&document.getElementById("burn_after_reading_lol2").parentElement.removeChild(document.getElementById("burn_after_reading_lol2"))},document.onkeydown=function(n){window.countersOpp=Math.abs(window.counters1)-98,counters1<=100&&counters1>=-100&&(n.ctrlKey?"38"==n.keyCode?(clearScroller(),counters1<99?(counters1++,0!=counters1&&(window.scrollingInterval=setInterval(scrollInt,Math.abs(countersOpp)))):(counters1=98,window.scrollingInterval=setInterval(scrollInt,Math.abs(countersOpp))),e()):"40"==n.keyCode?(clearScroller(),counters1>-99?(counters1--,0!=counters1&&(window.scrollingInterval=setInterval(scrollInt,Math.abs(countersOpp)))):(counters1=-98,window.scrollingInterval=setInterval(scrollInt,Math.abs(countersOpp))),e()):"37"==n.keyCode?(clearTimer(),countersTime-=10,countersTime<0&&(countersTime=0),countersTime>0&&(window.timingInterval=setInterval(timeInt,Math.abs(1e3*countersTime))),t()):"39"==n.keyCode&&(clearTimer(),countersTime+=10,0!=countersTime&&(window.timingInterval=setInterval(timeInt,Math.abs(1e3*countersTime))),t()):"27"==n.keyCode?(console.log("Cancelling"),clearScroller(),clearTimer()):"120"==n.keyCode&&(console.log("Starting"),clearScroller(),clearTimer(),scrollingInterval||timingInterval||0!=counters1&&(window.scrollingInterval=setInterval(scrollInt,Math.abs(countersOpp)),window.timingInterval=setInterval(timeInt,Math.abs(1e3*countersTime))),e(),t()))}},window.formaterApp=function(){var e=document.getElementsByTagName("*");if("Georgia, serif"==e[0].style.fontFamily)var t="Arial, Helvetica, sans-serif";else t="Arial, Helvetica, sans-serif"==e[0].style.fontFamily?'"Times New Roman", Times, serif':'"Times New Roman", Times, serif'==e[0].style.fontFamily?"Verdana, Geneva, sans-serif":"Verdana, Geneva, sans-serif"==e[0].style.fontFamily?'"Lucida Console", Monaco, monospace':"Georgia, serif";if("12px"==e[0].style.fontSize)var n="14px";else n="14px"==e[0].style.fontSize?"17px":"17px"==e[0].style.fontSize?"19px":"19px"==e[0].style.fontSize?"22px":"22px"==e[0].style.fontSize?"25px":"12px";for(var o=0,r=e.length;o<r;o++)e[o].style&&(e[o].style.fontSize=n,e[o].style.fontFamily=t,e[o].style.lineHeight="1.3")},window.deleterApp=function(){function e(e){e.stopPropagation(),e.preventDefault(),e.shiftKey&&e.ctrlKey&&("fixed"==e.srcElement.style.position&&"0px"==e.srcElement.style.top?e.srcElement.style.position="":(console.log(e),console.log(e.srcElement),e.srcElement.style.position="fixed",e.srcElement.style.right="",e.srcElement.style.bottom="",e.srcElement.style.left="0",e.srcElement.style.top="0",e.srcElement.style.zIndex="99999",e.srcElement.style.border="thin dashed")),e.shiftKey&&e.altKey&&(e.stopPropagation(),e.preventDefault(),"fixed"==e.srcElement.style.position&&"0px"==e.srcElement.style.bottom?e.srcElement.style.position="":(console.log(e),console.log(e.srcElement),e.srcElement.style.left="",e.srcElement.style.top="",e.srcElement.style.position="fixed",e.srcElement.style.right="0",e.srcElement.style.bottom="0",e.srcElement.style.border="thin dashed",e.srcElement.style.zIndex="99999")),e.srcElement.parentElement&&e.ctrlKey&&!e.shiftKey&&(console.log(e),e.stopPropagation(),e.preventDefault(),console.log(e.srcElement),e.srcElement.parentElement.removeChild(e.srcElement)),e.altKey&&!e.shiftKey&&(e.stopPropagation(),e.preventDefault(),window.widthUsing?97==window.widthUsing?window.widthUsing=127:127==window.widthUsing?window.widthUsing=147:window.widthUsing=175:window.widthUsing=97,e.srcElement.style.width=window.widthUsing+"%",e.srcElement.style.wordWrap="normal",e.srcElement.parentElement&&(e.srcElement.parentElement.style.width=window.widthUsing+"%",e.srcElement.parentElement.style.wordWrap="normal"),e.srcElement.parentElement.parentElement&&(e.srcElement.parentElement.parentElement.style.width=window.widthUsing+"%",e.srcElement.parentElement.parentElement.style.wordWrap="normal"),setTimeout(function(){window.widthUsing=0},2e3))}!function(){for(var t=document.getElementsByTagName("*"),n=0,o=t.length;n<o;n++)t[n]&&(t[n].onclick=e)}()},window.callMainInt=function(){window.readytoRun=1,document.getElementById("curMessage")&&(document.getElementById("curMessage").style.color="lightgreen",document.getElementById("curMessage").innerText="You can now Run "+window.currentApp+" for "+window.counterForTimer+" seconds."),window.currentInterval=setInterval(function(){if(console.log("Main Int"+counterForTimer),window.counterForTimer>=1){if(window.currentMessage="You can now Run "+window.currentApp+" for "+window.counterForTimer+" seconds.",document.getElementById("curMessage"))document.getElementById("curMessage").innerText=currentMessage;else{var e=document.createElement("div");e.style.position="fixed",e.style.top=200,e.style.left=0,e.style.color="lightgreen",e.style.backgroundColor="black",e.style.fontSize="25px",e.style.zIndex=99999,e.id="curMessage",e.innerText=currentMessage,document.getElementsByTagName("body")[0].prepend(e)}window.counterForTimer--}else clearInterval(window.currentInterval),document.getElementById("curMessage")&&document.getElementById("curMessage").parentElement.removeChild(document.getElementById("curMessage")),window.readytoRun=0},1e3)},window.readytoRun){if(window.counterForTimer=2,window.currentMessage="You can now Run "+window.currentApp+" for "+window.counterForTimer+" seconds.",document.getElementById("curMessage")&&(document.getElementById("curMessage").style.color="lightgreen",document.getElementById("curMessage").innerText=currentMessage),window.counterForTimer>=1)switch(window.currentApp){case"colorer":console.log("running colorer"),window.colorerApp(),window.counterForTimer=2;break;case"formater":console.log("running formater"),window.formaterApp(),window.counterForTimer=2;break;case"googler":console.log("running Googler"),window.googApp(),window.counterForTimer=2;break;case"iframer":console.log("running Iframer"),window.iframeApp(),window.counterForTimer=2;break;case"googRepeater":console.log("running Google Repeater THIS WILL RUN EVERY 5 SECONDS and slow things down potentially but should keep the page relatively clean...refresh the page to stop this"),window.googRepeaterApp(),window.counterForTimer=2;break;case"scroller":console.log("running Scroller"),window.scrollerApp(),window.readytoRun=0,window.currentInterval&&clearInterval(window.currentInterval),document.getElementById("curMessage")&&(document.getElementById("curMessage").innerText="RUNNING SCROLLER; This message will dissapear in 5 seconds; No need to run SCROLLER again; ctrl up-down to scroll the page automatically and change speeds, escape to stop. Ctrl left right to set a timer to reset the page to the top/bottom of the window...essentially repeating the scrolling from the top or bottom again"),setTimeout(function(){document.getElementById("curMessage")&&document.getElementById("curMessage").parentElement.removeChild(document.getElementById("curMessage"))},5e3);break;case"deleter":console.log("running Deleter"),window.deleterApp(),window.readytoRun=0,window.currentInterval&&clearInterval(window.currentInterval),document.getElementById("curMessage")&&(document.getElementById("curMessage").innerText="RUNNING DELETER; This message will dissapear in 5 seconds; No need to run deleter again; ctrl click to delete, alt click to expand, ctrl-shift-slick to stick top left, alt-shift-click to stick bottom right...same sticky clicks puts back in place"),setTimeout(function(){document.getElementById("curMessage")&&document.getElementById("curMessage").parentElement.removeChild(document.getElementById("curMessage"))},5e3);break;default:console.log("Nothing")}}else{if("colorer"==window.currentApp?window.currentApp="formater":"formater"==window.currentApp?window.currentApp="deleter":"deleter"==window.currentApp?window.currentApp="googler":"googler"==window.currentApp?window.currentApp="iframer":"iframer"==window.currentApp?window.currentApp="googRepeater":"googRepeater"==window.currentApp?window.currentApp="scroller":window.currentApp="colorer",window.counterForTimer=1,window.currentMessage="Choosing "+window.currentApp+" in exactly "+window.counterForTimer+" seconds.",document.getElementById("curMessage"))document.getElementById("curMessage").style.color="red",document.getElementById("curMessage").innerText=currentMessage;else{var e=document.createElement("div");e.style.position="fixed",e.style.top=200,e.style.left=0,e.style.color="red",e.style.fontSize="25px",e.style.backgroundColor="black",e.style.zIndex=99999,e.id="curMessage",e.innerText=currentMessage,document.getElementsByTagName("body")[0].prepend(e)}window.ChosenApp?(window.currentInterval&&clearInterval(window.currentInterval),window.counterForTimer=2,window.callMainInt()):(window.counterForTimer=1,window.currentInterval2&&clearInterval(window.currentInterval2),window.currentInterval2=setInterval(function(){if(console.log("Little First Int"+window.counterForTimer),window.counterForTimer>=1){if(window.currentMessage="Choosing "+window.currentApp+" in exactly "+window.counterForTimer+" seconds.",document.getElementById("curMessage"))document.getElementById("curMessage").style.color="red",document.getElementById("curMessage").innerText=currentMessage;else{var e=document.createElement("div");e.style.position="fixed",e.style.top=200,e.style.left=0,e.style.color="red",e.style.fontSize="25px",e.style.backgroundColor="black",e.style.zIndex=99999,e.id="curMessage",e.innerText=currentMessage,document.getElementsByTagName("body")[0].prepend(e)}counterForTimer--}else clearInterval(window.currentInterval2),window.chosenApp=1,window.readytoRun=0,window.counterForTimer=2,window.currentInterval&&clearInterval(window.currentInterval),window.callMainInt()},1e3))}}();
