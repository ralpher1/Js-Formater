(function(){!function(){if(window.setDivInterval=function(e,t){window.DivInterval=setInterval(function(){setElementDiv(e),null!==rElement&&void 0!==lastEl&&divUpdate(window),null!==rElement&&(lastEl=rElement),e.location.reload()},refreshAmount)},window.setElementDiv=function(e){isBody?rElement=e.document.getElementsByTagName("BODY")[0]:rElement=e.document.getElementById(divNameTrimmed)},window.divUpdate=function(e){var t;counter1=1,t=isBody?e.document.getElementsByTagName("BODY")[0]:e.document.getElementById(divNameTrimmed),rElement.innerHTML==lastEl.innerHTML?setBlue(e,t):setRed(e,t)},window.setBlue=function(e,t){t.style.border=blueColor,t.style.borderRadius=blueSize},window.setRed=function(e,t){t.style.border=redColor,t.style.borderRadius=redSize;var n=window.document.getElementById("test1"),o=window.document.getElementById("scrollOff");t.innerHTML=rElement.innerHTML,isBody&&(window.document.body.prepend(o),window.document.body.prepend(n)),findWords()},window.runClock=function(e,t,n){var o;null!==t.testInterval&&t.clearInterval(testInterval),(o=t.document.createElement("div")).setAttribute("style","background-color:blue;height:40px;font-size:30px;font-weight:bold;position: fixed;top: 0em;right:0em;left:0em; z-index:999;"),o.setAttribute("ondblclick","window.document.getElementById('test1').style.visibility = 'hidden';"),o.setAttribute("id","test1"),o.innerHTML="<table style='width:100%'><tr><th></th><th></th></tr><tr><td><div style='text-align:left;'><div id='secondsClock' style='color:#00ff00'>"+(initialAm-counter1)+" Second UNTIL Refresh</div></div></td><td><div style='text-align:right;'><button id='cShrink' onclick='counterShrink();'>Click to SHRINK Counter</button><button id='cRefresh' onclick='counter1=1;"+n.nameValue+".location.reload();setElementDiv("+e.nameValue+");divUpdate("+t.nameValue+");'>Click to Refresh</button></div></td></tr></table>",t.document.body.prepend(o),testInterval=setInterval(function(){counter1+=1,t.document.getElementById("secondsClock").innerText=initialAm-counter1+" Second UNTIL Refresh",window.document.title=initialAm-counter1+" seconds UNTIL REFRESH - "},1e3)},window.counterShrink=function(){window.document.getElementById(test2).setAttribute("style","background-color:blue;height:10px;font-size:12px;font-weight:bold;position: fixed;top: 0em;left:0em;right:0em; z-index:999;opacity:0.4;"),window.document.getElementById("cShrink").setAttribute("style","height:18px;font-size:8px;"),window.document.getElementById("cRefresh").setAttribute("style","height:18px;font-size:8px;"),window.document.getElementById("secondsClock").setAttribute("style","height:10px;font-size:12px;color:#00ff00;")},window.startScroll=function(){counter99=0,null!==window.DivInterval&&window.clearInterval(window.DivInterval),null!==window.scrollInterval&&window.clearInterval(window.scrollInterval),window.document.getElementById("scrollOff").innerHTML="<table style='width:100%'><tr><th></th><th></th></tr><tr><td><div style='text-align:right;'></div></td><td><button id='stopScroll' onclick='stopScroll();'>Stop</button></div></td></tr></table>";var e=startOverTime/scrollSpeed;"y"==scrollPlusRefresh||"Y"==scrollPlusRefresh||"yes"==scrollPlusRefresh?(isPopout?setElementDiv(window.opener):setElementDiv(redditwin),null!==rElement&&void 0!==lastEl&&divUpdate(window),null!==rElement&&(lastEl=rElement),isPopout?window.opener.location.reload():redditwin.location.reload(),window.scrollInterval=setInterval(function(){window.scrollBy(0,scrollAmount),counter99>=e&&(counter99=0,window.scrollTo(0,0),null!==window.DivInterval&&window.clearInterval(window.DivInterval),window.DivInterval=setInterval(function(){isPopout?setElementDiv(window.opener):setElementDiv(redditwin),null!==rElement&&void 0!==lastEl&&divUpdate(window),null!==rElement&&(lastEl=rElement),isPopout?window.opener.location.reload():redditwin.location.reload()},refreshAmount)),counter99+=1},1e3*scrollSpeed)):window.scrollInterval=setInterval(function(){window.scrollBy(0,scrollAmount),counter99>=e&&(counter99=0,window.scrollTo(0,0)),counter99+=1},1e3*scrollSpeed)},window.stopScroll=function(){window.document.getElementById("scrollOff").innerHTML="<table style='width:100%'><tr><th></th><th></th></tr><tr><td><div style='text-align:right;'></div></td><td><button id='stopScroll' onclick='startScroll();'>Start</button></div></td></tr></table>",window.document.getElementById("scrollOff").setAttribute("style","background-color:red;height:45px;width:130px;font-size:10px;font-weight:bold;position: fixed;top: 0em;left:0em; z-index:1000;opacity:0.6;"),window.clearInterval(window.scrollInterval)},window.findWords=function(){if("NONE"!==highlightValue){var e=new Array;for(var t in highlightValue=highlightValue.trim(),e=highlightValue.split(",")){console.log("looping words arrays");for(var n=document.getElementsByTagName("*"),o=new Array,l=0;l<n.length;l++)o.push(n[l].innerText);var r=o.length;for(l=0;l<r;l++)try{if(o[l].split(e[t]).length>1){var i=n[l].innerHTML.split(e[t]).join('<span style="background-color:#ffff00;font-variant: small-caps;font-size:20px;font-weight:bold;color:#ff0000"><u>'+e[t]+"</u></span>");n[l].innerHTML=i}}catch(e){console.log("error")}}}},window.colorerApp=function(){if("white"==(l=document.getElementsByTagName("*"))[0].style.color)var e="grey";else e="grey"==l[0].style.color?"green":"green"==l[0].style.color?"royalblue":"royalblue"==l[0].style.color?"black":"black"==l[0].style.color?"yellow":"yellow"==l[0].style.color?"aqua":"aqua"==l[0].style.color?"fuchsia":"fuchsia"==l[0].style.color?"orangered":"white";if("white"==l[0].style.backgroundColor)var t="black";else t="black"==l[0].style.backgroundColor?"grey":"grey"==l[0].style.backgroundColor?"royalblue":"royalblue"==l[0].style.backgroundColor?"navy":"navy"==l[0].style.backgroundColor?"silver":"silver"==l[0].style.backgroundColor?"maroon":"maroon"==l[0].style.backgroundColor?"darkgreen":"white";for(var n=0,o=l.length;n<o;n++)l[n].style&&(l[n].style.backgroundColor=t);var l;for(n=0,o=(l=document.getElementsByTagName("*")).length;n<o;n++)l[n].style&&(l[n].style.color=e)},window.googApp=function(){for(var e=document.getElementsByTagName("*"),t=0;t<e.length;t++)e[t].id.split("goog").length>1&&(console.log(e[t]),e[t].remove());for(delete e,e=document.getElementsByTagName("*"),t=0;t<e.length;t++)e[t].id.split("ads").length>1&&(console.log(e[t]),e[t].remove());delete e},window.googRepeaterApp=function(){window.currentInterval3&&clearInterval(window.currentInterval3),window.currentInterval3=setInterval(function(){console.log("Running repeaterGoogler");for(var e=document.getElementsByTagName("*"),t=0;t<e.length;t++)e[t].id.split("goog").length>1?(console.log(e[t]),e[t].remove()):e[t].id.split("ads").length>1?(console.log(e[t]),e[t].remove()):e[t].id.split("iframe").length>1&&(console.log(e[t]),e[t].remove());for(delete e,e=document.getElementsByTagName("iframe"),t=0;t<e.length;t++)console.log(e[t]),e[t].remove();delete e},6e3)},window.iframeApp=function(){for(var e=document.getElementsByTagName("iframe"),t=0;t<e.length;t++)console.log(e[t]),e[t].remove();for(delete e,e=document.getElementsByTagName("*"),t=0;t<e.length;t++)e[t].id.split("iframe").length>1&&(console.log(e[t]),e[t].remove());delete e},window.scrollerApp=function(){function e(){var e="red";counters1>0?(e="blue",Scrollupdown=-1):(Scrollupdown=1,e="red");var t='<div id="small_load"><table id="small_1" width="130px" height="250px" align="left" style="padding-right: 0px;padding-left: 0px;float: left; position: fixed; z-index:99999; bottom: 200px; left: 450px;"><tr height="180px" valign="top" style=";"><td style="color: '+e+';text-align: left;"><div id="load_small" style="font-size: 80pt"><br><b>'+counters1+"</b><br><br></div></td><tr></table></div>",n=document.getElementsByTagName("BODY")[0],o=document.createElement("div");o.id="burn_after_reading_lol",o.innerHTML=t,n.insertBefore(o,null),window.opaValue=1,window.timeoutClears?window.clearTimeout(timeoutClears):window.timeoutClears=setTimeout(function(){window.opaInt=setInterval(function(){opaValue-=.1,document.getElementById("burn_after_reading_lol")&&opaValue>=0?(document.getElementById("burn_after_reading_lol").style.opacity=opaValue,opaValue<=0&&(document.getElementById("burn_after_reading_lol").parentElement.removeChild(document.getElementById("burn_after_reading_lol")),window.clearInterval(opaInt))):window.clearInterval(opaInt)},150)},1e3)}function t(){var e='<div id="small_load2"><table id="small_1" width="130px" height="250px" align="left" style="padding-right: 0px;padding-left: 0px;float: left; position: fixed; z-index:99999; bottom: 500px; left: 450px;"><tr height="180px" valign="top" style=";"><td style="color:lightGreen;text-align: left;"><div id="load_small2" style="font-size: 80pt"><br><b>'+countersTime+"</b><br><br></div></td><tr></table></div>",t=document.getElementsByTagName("BODY")[0],n=document.createElement("div");n.id="burn_after_reading_lol2",n.innerHTML=e,t.insertBefore(n,null),window.opaValue2=1,window.timeoutClears2?window.clearTimeout(timeoutClears2):window.timeoutClears2=setTimeout(function(){window.opaInt2=setInterval(function(){opaValue2-=.1,document.getElementById("burn_after_reading_lol2")&&opaValue2>=0?(document.getElementById("burn_after_reading_lol2").style.opacity=opaValue2,opaValue2<=0&&(document.getElementById("burn_after_reading_lol2").parentElement.removeChild(document.getElementById("burn_after_reading_lol2")),window.clearInterval(opaInt2))):window.clearInterval(opaInt2)},150)},1e3)}window.counters1=0,window.countersTime=0,window.Scrollupdown=1,window.scrollingInterval=null,window.timingInterval=null,window.scrollInt=function(){window.scrollBy(0,Scrollupdown)},window.timeInt=function(){counters1<0?window.scrollTo(document.documentElement.scrollLeft,0):counters1>0&&window.scrollTo(document.documentElement.scrollLeft,1e11)},window.clearScroller=function(){window.timeoutClears&&(window.clearTimeout(timeoutClears),window.timeoutClears=null),window.scrollingInterval&&(window.clearInterval(scrollingInterval),window.scrollingInterval=null),document.getElementById("burn_after_reading_lol")&&document.getElementById("burn_after_reading_lol").parentElement.removeChild(document.getElementById("burn_after_reading_lol")),document.getElementById("burn_after_reading_lol2")&&document.getElementById("burn_after_reading_lol2").parentElement.removeChild(document.getElementById("burn_after_reading_lol2"))},window.clearTimer=function(){window.timeoutClears2&&(window.clearTimeout(timeoutClears2),window.timeoutClears2=null),window.timingInterval&&(window.clearInterval(timingInterval),window.timingInterval=null),document.getElementById("burn_after_reading_lol")&&document.getElementById("burn_after_reading_lol").parentElement.removeChild(document.getElementById("burn_after_reading_lol")),document.getElementById("burn_after_reading_lol2")&&document.getElementById("burn_after_reading_lol2").parentElement.removeChild(document.getElementById("burn_after_reading_lol2"))},document.onkeydown=function(n){window.countersOpp=Math.abs(window.counters1)-98,counters1<=100&&counters1>=-100&&(n.ctrlKey?"38"==n.keyCode?(clearScroller(),counters1<99?(counters1++,0!=counters1&&(window.scrollingInterval=setInterval(scrollInt,Math.abs(countersOpp)))):(counters1=98,window.scrollingInterval=setInterval(scrollInt,Math.abs(countersOpp))),e()):"40"==n.keyCode?(clearScroller(),counters1>-99?(counters1--,0!=counters1&&(window.scrollingInterval=setInterval(scrollInt,Math.abs(countersOpp)))):(counters1=-98,window.scrollingInterval=setInterval(scrollInt,Math.abs(countersOpp))),e()):"37"==n.keyCode?(clearTimer(),countersTime-=10,countersTime<0&&(countersTime=0),countersTime>0&&(window.timingInterval=setInterval(timeInt,Math.abs(1e3*countersTime))),t()):"39"==n.keyCode&&(clearTimer(),countersTime+=10,0!=countersTime&&(window.timingInterval=setInterval(timeInt,Math.abs(1e3*countersTime))),t()):"27"==n.keyCode?(console.log("Cancelling"),clearScroller(),clearTimer()):"120"==n.keyCode&&(console.log("Starting"),clearScroller(),clearTimer(),scrollingInterval||timingInterval||0!=counters1&&(window.scrollingInterval=setInterval(scrollInt,Math.abs(countersOpp)),window.timingInterval=setInterval(timeInt,Math.abs(1e3*countersTime))),e(),t()))}},window.formaterApp=function(){var e=document.getElementsByTagName("*");if("Georgia, serif"==e[0].style.fontFamily)var t="Arial, Helvetica, sans-serif";else t="Arial, Helvetica, sans-serif"==e[0].style.fontFamily?'"Times New Roman", Times, serif':'"Times New Roman", Times, serif'==e[0].style.fontFamily?"Verdana, Geneva, sans-serif":"Verdana, Geneva, sans-serif"==e[0].style.fontFamily?'"Lucida Console", Monaco, monospace':"Georgia, serif";if("12px"==e[0].style.fontSize)var n="14px";else n="14px"==e[0].style.fontSize?"17px":"17px"==e[0].style.fontSize?"19px":"19px"==e[0].style.fontSize?"22px":"22px"==e[0].style.fontSize?"25px":"12px";for(var o=0,l=e.length;o<l;o++)e[o].style&&(e[o].style.fontSize=n,e[o].style.fontFamily=t,e[o].style.lineHeight="1.3")},window.refresherApp=function(){window.divName=prompt("WELCOME TO REFRESHER: \n\n DIV UPDATE: \n -Type in a value here to update a specific Div (Or type 'body')\n -This option will update a specific div section and have a bluebox timer at top (Doube click to remove)\n\n\n Whole Page:\n -You can leave this blank, and it will update the ENTIRE PAGE in a new tab or popout\n --This option will provide a timer in the original window tab title to track refreshing updates\n\n\n Examples: \n reddit: 'siteTable'\n work: 'xx'\n -----I will add more examples later\n\n **WARNING** DO NOT CLOSE EITHER (single) OF THE WINDOWS used by refresher (Original tab or new tab). Please close BOTH tabs when you are done or face unexpected behavior","body"),window.scrollSpeed0=prompt("On a scale of 1-250, how fast would you like the page to scroll? (1 Being the fastest, Result may be unreliable on slower machines and result in a race conditon and the refresh wont work) You can stop scrolling As soon as the page loads. Simply click the stop button. ",20),window.scrollSpeed1=.004*scrollSpeed0,scrollSpeed1<.004&&(scrollSpeed1="0.004"),window.scrollPlusRefresh="y",window.varNone="NONE",window.scrollAmount=1,window.scrollSpeed=parseFloat(scrollSpeed1),console.log(scrollSpeed),window.counter99=0,window.BETAjs=prompt("BE CAUTIOUS - THIS COULD HAVE UNINTENDED CONSEQUENCES - USE WITH CAUTION - (Leave as 'NONE' (No Quotes) to skip this. DO NOT LEAVE BLANK. \n\n -Thoughts-My own little tamper-app I guess, but but will not load on each page like a content script just the one i created or use here - Can add more later or have it work like a content script or have this WHOLE app work like that in the background of page loads passing cookies/storage between each page to keep continous and allow you to control flow and content of the seeminlgly same app between pages....but can do this on any app-\n\n\n Input JS below to be injected AFTER the new page has loaded, (ITS LAYERS DEEP so if you use popout you have to use double quotes with \\ 3escapes but could interfer with other JS and processing so beware...and do not use single quotes unless inside a string and escaped properly - if you dont know what any of this means, dont touch this -lol-, but it will be loaded in the context of the page you end up on, not the page refreshing.","NONE"),window.popout0="n",null===divName&&""===divName||(popout0=prompt("\n Do you want to POPOUT content to NEW WINDOW (or keep in tabs)? y/n \n\n\n\n NOTE:\n -Please use 'y/Y/yes' \n -Any other value will result in no\n\n\n\n\n\n\n <PLEASE ENABLE POPUPS ON PAGE THIS PAGE AS WELL>","y")),window.initialAm=prompt("Refresh Amount - Make LOWER than the startover value","60"),window.refreshAmount=1e3*parseInt(initialAm),window.isPopout=!1,"y"!=popout0&&"Y"!=popout0&&"yes"!=popout0||(isPopout=!0),window.redditwin,window.popout1,window.isBody=!1,"body"!=divName&&"Body"!=divName&&"BODY"!=divName||(isBody=!0),BETAjs!==varNone&&0==isPopout&&(window.newElBETA,newElBETA=window.document.createElement("script"),newElBETA.type="text/javascript",newElBETA.text=BETAjs,window.document.getElementsByTagName("BODY")[0].append(newElBETA)),window.startOverTime0=prompt("How often would you like to start the page over again (Scroll to top) - MUST BE higher than refresh to avoid race conditions?",61),window.startOverTime=parseFloat(startOverTime0),window.highlightValue=prompt("Please type in the word(s) you want to highlight, Leave NONE to ignore, but do not leave this value blank, and seperate values by commas no spaces. (Case Sensitive)?","NONE"),console.log(highlightValue),window.justScroll=prompt("JUST SCROLL? - No Refreshing - \n\n(Anything but 'y' will be treated as a no)","n"),"y"!=justScroll&&"Y"!=justScroll&&"yes"!=justScroll||(scrollPlusRefresh="n"),window.scrollOff=window.document.createElement("div"),scrollOff.setAttribute("style","background-color:red;height:45px;width:130px;font-size:10px;font-weight:bold;position: fixed;top: 0em;left:0em;right:0em; z-index:1000;opacity:0.4;"),scrollOff.setAttribute("ondblclick","window.document.getElementById('scrollOff').style.visibility = 'hidden';"),scrollOff.setAttribute("id","scrollOff"),scrollOff.innerHTML="<table style='width:100%'><tr><th></th><th></th></tr><tr><td><div style='text-align:right;'></div></td><td><button id='stopScroll' onclick='startScroll();'>Start</button></div></td></tr></table>",window.document.body.prepend(scrollOff),window.document.getElementById("scrollOff").style.fontSize="small",window.document.getElementById("scrollOff").style.color="#f7df1e","y"==scrollPlusRefresh||"Y"==scrollPlusRefresh||"yes"==scrollPlusRefresh?(isPopout?redditwin=window.open("/testSiteNothing","_blank","top=500,left=500,width=700,height=700"):redditwin=window.open("/testSiteNothing"),isPopout?popout1=window:popout1=redditwin,redditwin.location.href=location.href,window.nameValue="window",redditwin.nameValue="redditwin",window.hidden2="hidden",window.opacity2="0.5",window.test2="test1",window.divNameTrimmed,window.rElement,window.counter1=1,window.testInterval,window.lastEl='"test"',window.newBody,window.newHeader,window.redColor="thick solid #FF0000",window.redSize="100px",window.blueColor="thick solid #0000FF",window.blueSize="35px",redditwin.onload=function(){if(console.log(highlightValue),redditwin.document.title="-REFRESHER PAGE-"+redditwin.document.title,window.document.title=initialAm+" seconds - TO REFRESH - "+window.document.title,null!==window.DivInterval&&window.clearInterval(window.DivInterval),null==divName?divNameTrimmed="":(divNameTrimmed=divName.trim(),setElementDiv(popout1)),""==divNameTrimmed)window.DivInterval=setInterval(function(){counter1=1,redditwin.location.reload(),null!==testInterval&&window.clearInterval(testInterval),testInterval=window.setInterval(function(){counter1+=1,window.document.title=initialAm-counter1+" seconds UNTIL REFRESH - "},1e3)},refreshAmount);else if(isPopout){console.log("POPOUT");var e=redditwin.document.getElementsByTagName("div");for(var t of e)t.innerText=" ";redditwin.document.body.innerText=" ",newHeader=document.createElement("script"),newHeader.innerHTML="var scrollAmount = 1;var scrollSpeed="+scrollSpeed+";var startOverTime="+startOverTime+";var scrollPlusRefresh='"+scrollPlusRefresh+"';var highlightValue='"+highlightValue+"';var counter99 = 0;var realStart=(startOverTime/scrollSpeed);var varNone='"+varNone+"'; var BETAjs='"+BETAjs+'\';if (BETAjs !==varNone){var newElBETA;newElBETA = window.document.createElement("script");newElBETA.type="text/javascript";newElBETA.text=BETAjs;window.document.getElementsByTagName("BODY")[0].append(newElBETA);};var refreshAmount='+refreshAmount+';function startScroll() { counter99 = 0;if (window.DivInterval !== null) { window.clearInterval(window.DivInterval); }; if (window.scrollInterval !== null) { window.clearInterval(window.scrollInterval); }; window.document.getElementById("scrollOff").innerHTML = "<table style=\\"width:100%\\"><tr><th></th><th></th></tr><tr><td><div style=\\"text-align:right;\\"></div></td><td><button id=\\"stopScroll\\" onclick=\\"stopScroll();\\">Stop</button></div></td></tr></table>"; var realStart = (startOverTime / scrollSpeed); if (scrollPlusRefresh == "y" || scrollPlusRefresh == "Y" || scrollPlusRefresh == "yes") { if (isPopout) { setElementDiv(window.opener); } else { setElementDiv(redditwin); }; if (rElement !== null && lastEl !== undefined) { divUpdate(window); }; if (rElement !== null) { lastEl = rElement; }; if (isPopout) { window.opener.location.reload(); } else { redditwin.location.reload(); }; window.scrollInterval = setInterval(function () { window.scrollBy(0, scrollAmount); if (counter99 >= realStart) { counter99 = 0; window.scrollTo(0, 0); if (window.DivInterval !== null) { window.clearInterval(window.DivInterval); }; console.log(321);window.DivInterval = setInterval(function () { console.log(123);if (isPopout) { setElementDiv(window.opener); } else { setElementDiv(redditwin); }; if (rElement !== null && lastEl !== undefined) { divUpdate(window); }; if (rElement !== null) { lastEl = rElement; }; if (isPopout) { window.opener.location.reload(); } else { redditwin.location.reload(); }; }, refreshAmount); }; counter99 += 1; }, (scrollSpeed * 1000)); } else { window.scrollInterval = setInterval(function () { window.scrollBy(0, scrollAmount); if (counter99 >= realStart) { counter99 = 0; window.scrollTo(0, 0); }; counter99 += 1; }, (scrollSpeed * 1000)); };};function stopScroll(){window.document.getElementById("scrollOff").innerHTML = "<table style=\\"width:100%\\"><tr><th></th><th></th></tr><tr><td><div style=\\"text-align:right;\\"></div></td><td><button id=\\"startScroll\\" onclick=\\"startScroll();\\">Start</button></div></td></tr></table>";;window.document.getElementById("scrollOff").setAttribute("style","background-color:red;height:45px;width:130px;font-size:10px;font-weight:bold;position: fixed;top: 0em;left:0em; z-index:1000;opacity:0.6;");window.clearInterval(window.scrollInterval);};function findWords(){if(highlightValue!=="NONE"){var highlightArray=new Array();highlightValue=highlightValue.trim();highlightArray=highlightValue.split(",");for(var words in highlightArray){var allTagsO=document.getElementsByTagName("*");var allTags=new Array;for(var i=0;i<allTagsO.length;i++){allTags.push(allTagsO[i].innerText);};var maxlen=allTags.length;for(var i=0;i<maxlen;i++){try{if(allTags[i].split(highlightArray[words]).length>1){var innerTag=allTagsO[i].innerHTML;var changingTag=innerTag.split(highlightArray[words]).join("<span style=\\"background-color:#ffff00;font-variant: small-caps;font-size:20px;font-weight:bold;color:#ff0000\\"><u>"+highlightArray[words]+"</u></span>");allTagsO[i].innerHTML=changingTag;}}catch(e){console.log("error");}}}};};var scrollOff = window.document.createElement("div");scrollOff.setAttribute("style", "background-color:blue;height:45px;width:130px;font-size:10px;font-weight:bold;position: fixed;top: 0em;left:0em;right:0em; z-index:1000;opacity:0.4;");scrollOff.setAttribute("ondblclick", "window.document.getElementById(\'scrollOff\').style.visibility = \'hidden\';");scrollOff.setAttribute("id", "scrollOff");scrollOff.innerHTML = "<table style=\\"width:100%\\"><tr><th></th><th></th></tr><tr><td><div style=\\"text-align:right;\\"></div></td><td><button id=\\"stopScroll\\" onclick=\\"startScroll();\\">Start</button></div></td></tr></table>";window.document.body.prepend(scrollOff);window.document.getElementById("scrollOff").style.fontSize = "small";window.document.getElementById("scrollOff").style.color = "#f7df1e";var hidden2=\'hidden\';var opacity2=\'0.5\';var test2=\'test1\';var initialAm='+initialAm+";runClock('window.opener','window','window.opener');var counter1=1;var isPopout="+isPopout+";var redColor='thick solid #FF0000';var redSize='100px';var blueColor='thick solid #0000FF';var blueSize='35px';var isBody="+isBody+";var divNameTrimmed='"+divNameTrimmed+"';if(window.DivInterval!==null){window.clearInterval(window.DivInterval);};var rElement;var lastEl="+lastEl+";window.DivInterval=setInterval(function(){window.document.title='-REFRESHING PAGE-';setElementDiv(window.opener);if(rElement!==null&&lastEl!==undefined){divUpdate(window);};lastEl=rElement;window.opener.location.reload();},"+refreshAmount+");function setElementDiv(toSet){if(isBody){rElement=toSet.document.getElementsByTagName('BODY')[0];}else{rElement=toSet.document.getElementById(divNameTrimmed);}};function divUpdate(toSet){counter1=1;var divElement;if(isBody){divElement=toSet.document.getElementsByTagName('BODY')[0];}else{divElement=toSet.document.getElementById(divNameTrimmed);};console.log(divElement);if(rElement.innerHTML==lastEl.innerHTML){setBlue(toSet,divElement);}else{setRed(toSet,divElement);}};function setBlue(toSet,divElement){divElement.style.border=blueColor;divElement.style.borderRadius=blueSize;};function setRed(toSet,divElement){divElement.style.border=redColor;divElement.style.borderRadius=redSize;var scrollOffEl = window.document.getElementById(\"scrollOff\");var test1 = window.document.getElementById(\"test1\"); divElement.innerHTML = rElement.innerHTML; if (isBody) { window.document.body.prepend(scrollOffEl);window.document.body.prepend(test1); };findWords };function runClock(toSet,toUpdate,toLoad){if(window.testInterval!==null){window.clearInterval(testInterval);};var test1;var testInterval;counter1=1;test1=window.document.createElement('div');test1.setAttribute('style', 'background-color:blue;height:40px;font-size:30px;font-weight:bold;position: fixed;top: 0em;right:0em;left:0em; z-index:999;'); test1.setAttribute('ondblclick', 'window.document.getElementById(test2).style.visibility = hidden2;'); test1.setAttribute('id', 'test1'); test1.innerHTML = \"<table style='width:100%'><tr><th></th><th></th></tr><tr><td><div style='text-align:left;'><div id='secondsClock' style='color:#00ff00'>\" + (initialAm - counter1) + \" Second UNTIL Refresh</div></div></td><td><div style='text-align:right;'><button id='cShrink' onclick='counterShrink();'>Click to SHRINK Counter</button><button id='cRefresh' onclick='counter1=1;\" + toLoad + \".location.reload();setElementDiv(\" + toSet + \");divUpdate(\" + toUpdate + \");'>Click to Refresh</button></div></td></tr></table>\";function changeClock(){counter1+=1;window.document.getElementById(\"secondsClock\").innerText=(initialAm-counter1)+\" Second UNTIL Refresh \";window.document.title = (initialAm - counter1) + \" seconds UNTIL REFRESH - \";};window.document.body.prepend(test1);testInterval=setInterval(changeClock,1000);}; function counterShrink() { window.document.getElementById(test2).setAttribute('style', 'background-color:blue;height:10px;font-size:15px;font-weight:bold;position: fixed;top: 0em;right:0em;left:0em; z-index:999;opacity:0.4;'); window.document.getElementById('cShrink').setAttribute('style', 'height:18px;font-size:8px;'); window.document.getElementById('cRefresh').setAttribute('style', 'height:18px;font-size:8px;'); window.document.getElementById('secondsClock').setAttribute('style', 'height:10px;font-size:12px;color:#00ff00;');};",isBody?(newBody=document.createElement("body"),redditwin.document.getElementsByTagName("BODY")[0]=newBody,redditwin.document.head.appendChild(newHeader)):(newBody=document.createElement("div"),newBody.id=divNameTrimmed,redditwin.document.body.appendChild(newBody),redditwin.document.head.appendChild(newHeader))}else alert("SUMMARY:\n- You chose NOT to use popups\n - You chose to update '"+divNameTrimmed+"' DIV,\n\n\n ACTION:\n--We have navigated you back to the original window\n\n\n\n\n ******WARNING******\nPlease DO NOT close this window or the new tab labled 'REFERSHER PAGE' as both are needed to maintain refreshing. Please Close Both windows when done"),window.scrollBy(0,-1e4),window.scrollBy(0,scrollAmount),runClock(redditwin,window,redditwin),setDivInterval(redditwin,divNameTrimmed),setElementDiv(redditwin)}):findWords()},window.deleterApp=function(){function e(e){e.stopPropagation(),e.preventDefault(),e.shiftKey&&e.ctrlKey&&("fixed"==e.srcElement.style.position&&"0px"==e.srcElement.style.top?e.srcElement.style.position="":(console.log(e),console.log(e.srcElement),e.srcElement.style.position="fixed",e.srcElement.style.right="",e.srcElement.style.bottom="",e.srcElement.style.left="0",e.srcElement.style.top="0",e.srcElement.style.zIndex="99999",e.srcElement.style.border="thin dashed")),e.shiftKey&&e.altKey&&(e.stopPropagation(),e.preventDefault(),"fixed"==e.srcElement.style.position&&"0px"==e.srcElement.style.bottom?e.srcElement.style.position="":(console.log(e),console.log(e.srcElement),e.srcElement.style.left="",e.srcElement.style.top="",e.srcElement.style.position="fixed",e.srcElement.style.right="0",e.srcElement.style.bottom="0",e.srcElement.style.border="thin dashed",e.srcElement.style.zIndex="99999")),e.srcElement.parentElement&&e.ctrlKey&&!e.shiftKey&&(console.log(e),e.stopPropagation(),e.preventDefault(),console.log(e.srcElement),e.srcElement.parentElement.removeChild(e.srcElement)),e.altKey&&!e.shiftKey&&(e.stopPropagation(),e.preventDefault(),window.widthUsing?97==window.widthUsing?window.widthUsing=127:127==window.widthUsing?window.widthUsing=147:147==window.widthUsing?window.widthUsing=175:window.widthUsing=235:window.widthUsing=97,e.srcElement.style.width=window.widthUsing+"%",e.srcElement.style.wordWrap="normal",e.srcElement.parentElement&&(e.srcElement.parentElement.style.width=window.widthUsing+"%",e.srcElement.parentElement.style.wordWrap="normal"),e.srcElement.parentElement.parentElement&&(e.srcElement.parentElement.parentElement.style.width=window.widthUsing+"%",e.srcElement.parentElement.parentElement.style.wordWrap="normal"),setTimeout(function(){window.widthUsing=0},2e3))}!function(){for(var t=document.getElementsByTagName("*"),n=0,o=t.length;n<o;n++)t[n]&&(t[n].onclick=e)}()},window.callMainInt=function(){window.readytoRun=1,document.getElementById("curMessage")&&(document.getElementById("curMessage").style.color="lightgreen",document.getElementById("curMessage").innerText="You can now Run "+window.currentApp+" for "+window.counterForTimer+" seconds."),window.currentInterval=setInterval(function(){if(console.log("Main Int"+counterForTimer),window.counterForTimer>=1){if(window.currentMessage="You can now Run "+window.currentApp+" for "+window.counterForTimer+" seconds.",document.getElementById("curMessage"))document.getElementById("curMessage").innerText=currentMessage;else{var e=document.createElement("div");e.style.position="fixed",e.style.top=200,e.style.left=0,e.style.color="lightgreen",e.style.backgroundColor="black",e.style.fontSize="25px",e.style.zIndex=99999,e.id="curMessage",e.innerText=currentMessage,document.getElementsByTagName("body")[0].prepend(e)}window.counterForTimer--}else clearInterval(window.currentInterval),document.getElementById("curMessage")&&document.getElementById("curMessage").parentElement.removeChild(document.getElementById("curMessage")),window.readytoRun=0},1e3)},window.readytoRun){if(window.counterForTimer=3,window.currentMessage="You can now Run "+window.currentApp+" for "+window.counterForTimer+" seconds.",document.getElementById("curMessage")&&(document.getElementById("curMessage").style.color="lightgreen",document.getElementById("curMessage").innerText=currentMessage),window.counterForTimer>=1)switch(window.currentApp){case"colorer":console.log("running colorer"),window.colorerApp(),window.counterForTimer=3;break;case"formater":console.log("running formater"),window.formaterApp(),window.counterForTimer=3;break;case"googler":console.log("running Googler"),window.googApp(),window.counterForTimer=3;break;case"iframer":console.log("running Iframer"),window.iframeApp(),window.counterForTimer=3;break;case"googRepeater":console.log("DO NOT RUN THIS MULTIPLE TIMES JUST CLICK ONCE - running Google Repeater THIS WILL RUN EVERY 5 SECONDS and slow things down potentially but should keep the page relatively clean...refresh the page to stop this"),window.googRepeaterApp(),window.counterForTimer=3;break;case"scroller":console.log("running Scroller"),window.scrollerApp(),window.readytoRun=0,window.currentInterval&&clearInterval(window.currentInterval),document.getElementById("curMessage")&&(document.getElementById("curMessage").innerText="RUNNING SCROLLER; This message will dissapear in 5 seconds; No need to run SCROLLER again; ctrl up-down to scroll the page automatically and change speeds, escape to stop. Ctrl left right to set a timer to reset the page to the top/bottom of the window...essentially repeating the scrolling from the top or bottom again"),setTimeout(function(){document.getElementById("curMessage")&&document.getElementById("curMessage").parentElement.removeChild(document.getElementById("curMessage"))},5e3);break;case"deleter":console.log("running Deleter"),window.deleterApp(),window.readytoRun=0,window.currentInterval&&clearInterval(window.currentInterval),document.getElementById("curMessage")&&(document.getElementById("curMessage").innerText="RUNNING DELETER; This message will dissapear in 5 seconds; No need to run deleter again; ctrl click to delete, alt click to expand, ctrl-shift-slick to stick top left, alt-shift-click to stick bottom right...same sticky clicks puts back in place"),setTimeout(function(){document.getElementById("curMessage")&&document.getElementById("curMessage").parentElement.removeChild(document.getElementById("curMessage"))},5e3);break;case"refresher":console.log("running refresher"),window.currentInterval&&clearInterval(window.currentInterval),document.getElementById("curMessage")&&(document.getElementById("curMessage").innerText="RUNNING REFRESHER - There will be a series of prompts shortly in a few seconds"),setTimeout(function(){document.getElementById("curMessage")&&document.getElementById("curMessage").parentElement.removeChild(document.getElementById("curMessage")),window.readytoRun=0,setTimeout(function(){window.refresherApp()},1e3)},3e3);break;default:console.log("Nothing")}}else{if("colorer"==window.currentApp?window.currentApp="formater":"formater"==window.currentApp?window.currentApp="deleter":"deleter"==window.currentApp?window.currentApp="refresher":"refresher"==window.currentApp?window.currentApp="googler":"googler"==window.currentApp?window.currentApp="iframer":"iframer"==window.currentApp?window.currentApp="googRepeater":"googRepeater"==window.currentApp?window.currentApp="scroller":window.currentApp="colorer",window.counterForTimer=1,window.currentMessage="Choosing "+window.currentApp+" in exactly "+window.counterForTimer+" seconds.",document.getElementById("curMessage"))document.getElementById("curMessage").style.color="red",document.getElementById("curMessage").innerText=currentMessage;else{var e=document.createElement("div");e.style.position="fixed",e.style.top=200,e.style.left=0,e.style.color="red",e.style.fontSize="25px",e.style.backgroundColor="black",e.style.zIndex=99999,e.id="curMessage",e.innerText=currentMessage,document.getElementsByTagName("body")[0].prepend(e)}window.ChosenApp?(window.currentInterval&&clearInterval(window.currentInterval),window.counterForTimer=2,window.callMainInt()):(window.counterForTimer=1,window.currentInterval2&&clearInterval(window.currentInterval2),window.currentInterval2=setInterval(function(){if(console.log("Little First Int"+window.counterForTimer),window.counterForTimer>=1){if(window.currentMessage="Choosing "+window.currentApp+" in exactly "+window.counterForTimer+" seconds.",document.getElementById("curMessage"))document.getElementById("curMessage").style.color="red",document.getElementById("curMessage").innerText=currentMessage;else{var e=document.createElement("div");e.style.position="fixed",e.style.top=200,e.style.left=0,e.style.color="red",e.style.fontSize="25px",e.style.backgroundColor="black",e.style.zIndex=99999,e.id="curMessage",e.innerText=currentMessage,document.getElementsByTagName("body")[0].prepend(e)}counterForTimer--}else clearInterval(window.currentInterval2),window.chosenApp=1,window.readytoRun=0,window.counterForTimer=2,window.currentInterval&&clearInterval(window.currentInterval),window.callMainInt()},1e3))}}();})();
