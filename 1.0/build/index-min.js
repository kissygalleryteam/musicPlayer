/*! musicPlayer - v1.0 - 2013-09-23 7:36:11 PM
* Copyright (c) 2013 韩升; Licensed  */
KISSY.add("gallery/musicPlayer/1.0/index",function(a,b,c,d){function e(a){f=this,this._init(a);var b=this;e.superclass.constructor.call(b,a)}var f,g;a.namespace("MusicPlayer"),a.mix(a.MusicPlayer,{error:function(a){f.fire("error",a)},status:function(a){f.fire("status",a)},progress:function(a){f.fire("progress",a)},_mode:{ORDER:"order",RANDOM:"random",SINGLE:"single"},_event:{LOADING:"loading",RENDER:"render",STATU:"status",ERROR:"error"},_status:{PLAY:"play",PAUSE:"pause",STOP:"stop",LOADING:"loading",RENDER:"render"}});var h={nplay:null,nstop:null,npause:null,npre:null,nnext:null,musicList:null,mode:"order",auto:!1,volume:.25,buffer:1e3,contain:"body"};return a.extend(e,c,{_bindEvent:function(){a.all(h.nstop)&&a.all(h.nstop).on("click",function(){g.callSWF("onStop")}),a.all(h.nplay)&&a.all(h.nplay).on("click",function(){g.callSWF("onPlay")}),a.all(h.npause)&&a.all(h.npause).on("click",function(){g.callSWF("onPause")}),a.all(h.npre)&&a.all(h.npre).on("click",function(){g.callSWF("onPre")}),a.all(h.nnext)&&a.all(h.nnext).on("click",function(){g.callSWF("onNext")})},_createSWF:function(){g=new d({src:"http://gtms03.alicdn.com/tps/i3/T1Qem6FatXXXXtxVjX.swf",attrs:{width:1,height:1},params:{flashVars:{mp3list:h.musicList,auto:h.auto,mode:h.mode,volume:h.volume,buffer:h.buffer},allowscriptaccess:"always",quality:"low"},render:h.contain});var a=setInterval(function(){switch(g.get("status")){case d.Status.SUCCESS:f.fire("status",{status:"render",swfid:g.get("el").id}),setTimeout(function(){g.callSWF("setSWFID",[g.get("el").id])},100),clearInterval(a);break;case d.Status.NOT_INSTALLED:f.fire("error",{type:2e3,msg:d.Status.NOT_INSTALLED}),clearInterval(a);break;case d.Status.TOO_LOW:f.fire("error",{type:2e3,msg:d.Status.TOO_LOW}),clearInterval(a)}},10)},_init:function(b){a.mix(h,b),this._createSWF(),this._bindEvent()},play:function(a){null==a&&(a=-1),g.callSWF("onPlay",[a])},stop:function(){g.callSWF("onStop")},pause:function(){g.callSWF("onPause")},pre:function(){g.callSWF("onPre")},next:function(){g.callSWF("onNext")},setList:function(a){null==a&&(a={}),g.callSWF("setMP3List",[a])}},{ATTRS:{mode:{value:h.mode,setter:function(a){return g.callSWF("setMode",[a]),a}},buffer:{value:h.buffer,setter:function(a){return g.callSWF("setBuffer",[a]),a}},volume:{value:h.volume,setter:function(a){return g.callSWF("setVolume",[a]),a}},progress:{value:0,setter:function(a){return g.callSWF("setProgress",[a]),a}}}}),e},{requires:["node","base","swf"]});