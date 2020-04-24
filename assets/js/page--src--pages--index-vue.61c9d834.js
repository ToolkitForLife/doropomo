(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{160:function(t,e,s){},161:function(t,e,s){"use strict";var n=s(160);s.n(n).a},162:function(t,e,s){"use strict";var n={name:"Nav"},i=(s(161),s(29)),a=Object(i.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex-inline"},[e("h1",[e("g-link",{attrs:{to:"/"}},[e("g-image",{attrs:{src:"/logo.svg",width:"140"}})],1)],1)])}),[],!1,null,null,null);e.a=a.exports},163:function(t,e,s){},164:function(t,e,s){},165:function(t,e,s){},166:function(t,e,s){},167:function(t,e,s){},168:function(t,e,s){var n=s(12),i=Date.prototype,a=i.toString,o=i.getTime;new Date(NaN)+""!="Invalid Date"&&n(i,"toString",(function(){var t=o.call(this);return t==t?a.call(this):"Invalid Date"}))},169:function(t,e,s){"use strict";var n=s(163);s.n(n).a},170:function(t,e,s){"use strict";var n=s(164);s.n(n).a},171:function(t,e,s){"use strict";var n=s(165);s.n(n).a},172:function(t,e,s){"use strict";var n=s(166);s.n(n).a},173:function(t,e,s){"use strict";var n=s(167);s.n(n).a},174:function(t,e,s){"use strict";s.r(e);var n,i=s(162);s(30),s(168),s(121),s(25),s(69),s(122);n=new Audio("kichen-timer.mp3");var a=function(t){return t<10?"0".concat(t):t},o={name:"Timer",props:{phases:{type:Object},autoStart:{type:Boolean,default:!1},longWorkInterval:{type:Number,default:4}},data:function(){return{isRunning:!1,timerInterval:null,timeRunned:0,phase:this.phases.DOROPOMO}},mounted:function(){this.autoStart&&this.start()},destroyed:function(){this.clearInterval()},computed:{btnLabel:function(){return this.isRunning?"Stop":"Start"},timeLeft:function(){return 60*this.phase.minutes-this.timeRunned},now:function(){var t=a(Math.floor(this.timeLeft/60)),e=a(Math.floor(this.timeLeft%60));return"".concat(t,":").concat(e)},isDoropomo:function(){return this.phase===this.phases.DOROPOMO},isShortWork:function(){return this.phase===this.phases.SHORT_WORK},isLongWork:function(){return this.phase===this.phases.LONG_WORK}},methods:{clearInterval:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(){this.timerInterval&&(clearInterval(this.timerInterval),this.timerInterval=null)})),start:function(){var t=this;this.clearInterval(),this.timerInterval=setInterval((function(){return t.tick()}),1e3),this.isRunning=!0,this.$emit("started")},stop:function(){this.clearInterval(),this.isRunning=!1,this.$emit("stopped")},tick:function(){this.timeRunned<this.phase.minutes?(this.timeRunned++,this.$emit("tick",this.timeRunned),this.updateTitle()):this.end()},end:function(){this.timeRunned=0,this.stop(),this.$emit("ended",{phase:this.phase}),this.handleEnded()},reset:function(){this.stop(),this.timeRunned=0,this.updateTitle()},updateTitle:function(){document.title="".concat(this.now," - ").concat(this.phase.phrase)},playSound:function(){try{n.play()}catch(t){console.error(t)}},setPhaseDoropomo:function(){this.phase=this.phases.DOROPOMO,this.reset()},setPhaseShort:function(){this.phase=this.phases.SHORT_WORK,this.reset()},setPhaseLong:function(){this.phase=this.phases.LONG_WORK,this.reset()},selectNextPhase:function(){this.phase===this.phases.DOROPOMO?this.phase.countRuns%(this.longWorkInterval+1)==0?this.phase=this.phases.LONG_WORK:this.phase=this.phases.SHORT_WORK:this.phase=this.phases.DOROPOMO,this.updateTitle()},handleEnded:function(){this.phase.countRuns++;var t=this.phase,e=t.label,s=t.minutes,n=t.countRuns;console.info("1 Doro finished | ".concat(e," | Minutes ").concat(s," | Total runs: ").concat(n)),this.playSound(),this.selectNextPhase(),this.autoStart&&this.start()},handleClick:function(){this.isRunning?this.stop():this.start()},formatMinutes:function(t){return"".concat(a(t),":00")}}},r=(s(169),s(29)),l=Object(r.a)(o,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"timer"},[s("h2",{staticClass:"timer-phrase"},[t._v(t._s(t.phase.phrase))]),s("div",{staticClass:"timer-container"},[s("div",{staticClass:"timer-item",class:{active:t.isDoropomo},staticStyle:{"background-color":"var(--primary)"},on:{click:t.setPhaseDoropomo}},[s("div",{staticClass:"timer-label"},[t._v(t._s(t.phases.DOROPOMO.label))]),s("div",{staticClass:"timer-number"},[t._v("\n                "+t._s(t.isDoropomo?t.now:t.formatMinutes(t.phases.DOROPOMO.minutes))+"\n            ")]),s("button",{staticClass:"start-stop",attrs:{type:"button"},on:{click:function(e){return e.stopPropagation(),t.handleClick(e)}}},[t._v("\n                "+t._s(t.btnLabel)+"\n            ")])]),s("div",{staticClass:"timer-item",class:{active:t.isShortWork},staticStyle:{"background-color":"var(--secondary)"},on:{click:t.setPhaseShort}},[s("div",{staticClass:"timer-label"},[t._v(t._s(t.phases.SHORT_WORK.label))]),s("div",{staticClass:"timer-number"},[t._v("\n                "+t._s(t.isShortWork?t.now:t.formatMinutes(t.phases.SHORT_WORK.minutes))+"\n            ")]),s("button",{staticClass:"start-stop",attrs:{type:"button"},on:{click:function(e){return e.stopPropagation(),t.handleClick(e)}}},[t._v("\n                "+t._s(t.btnLabel)+"\n            ")])]),s("div",{staticClass:"timer-item",class:{active:t.isLongWork},staticStyle:{"background-color":"var(--tertiary)"},on:{click:t.setPhaseLong}},[s("div",{staticClass:"timer-label"},[t._v(t._s(t.phases.LONG_WORK.label))]),s("div",{staticClass:"timer-number"},[t._v("\n                "+t._s(t.isLongWork?t.now:t.formatMinutes(t.phases.LONG_WORK.minutes))+"\n            ")]),s("button",{staticClass:"start-stop",attrs:{type:"button"},on:{click:function(e){return e.stopPropagation(),t.handleClick(e)}}},[t._v("\n                "+t._s(t.btnLabel)+"\n            ")])])])])}),[],!1,null,null,null).exports,u={name:"Modal",props:{isActive:{type:Boolean,default:!1}}},c=(s(170),Object(r.a)(u,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"modal",class:{active:t.isActive}},[s("button",{staticClass:"modal-background",attrs:{type:"button"},on:{click:function(e){return t.$emit("close")}}}),s("div",{staticClass:"modal-content"},[t._t("default")],2)])}),[],!1,null,null,null).exports),h={DOROPOMO:{label:"Doropomo",phrase:"Time to work",countRuns:0,minutes:25},SHORT_WORK:{label:"Short break",phrase:"Time to rest...",countRuns:0,minutes:5},LONG_WORK:{label:"Long break",phrase:"Time to relax!",countRuns:0,minutes:15}},m={name:"TimerManager",components:{Modal:c,Timer:l},props:{},data:function(){return{isSettingsVisible:!1,autoStart:!1,longWorkInterval:4,phases:h}},methods:{showSettings:function(){this.isSettingsVisible=!0},hideSettings:function(){this.isSettingsVisible=!1}}},p=(s(171),Object(r.a)(m,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"timer-manager"},[s("Timer",{attrs:{phases:t.phases,"auto-start":t.autoStart,"long-work-interval":t.longWorkInterval}}),s("Modal",{attrs:{isActive:t.isSettingsVisible},on:{close:t.hideSettings}},[s("div",{staticClass:"timer-settings"},[s("div",[s("h2",[t._v("Settings")]),s("label",{attrs:{for:"doropomo-minutes"}},[s("input",{directives:[{name:"model",rawName:"v-model.number",value:t.phases.DOROPOMO.minutes,expression:"phases.DOROPOMO.minutes",modifiers:{number:!0}}],attrs:{id:"doropomo-minutes",type:"number",min:"1",max:"60"},domProps:{value:t.phases.DOROPOMO.minutes},on:{input:function(e){e.target.composing||t.$set(t.phases.DOROPOMO,"minutes",t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}}),t._v("\n                    Doropomo\n                ")]),s("label",{attrs:{for:"short-minutes"}},[s("input",{directives:[{name:"model",rawName:"v-model.number",value:t.phases.SHORT_WORK.minutes,expression:"phases.SHORT_WORK.minutes",modifiers:{number:!0}}],attrs:{id:"short-minutes",type:"number",min:"1",max:"60"},domProps:{value:t.phases.SHORT_WORK.minutes},on:{input:function(e){e.target.composing||t.$set(t.phases.SHORT_WORK,"minutes",t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}}),t._v("\n                    Short Work\n                ")]),s("label",{attrs:{for:"long-minutes"}},[s("input",{directives:[{name:"model",rawName:"v-model.number",value:t.phases.LONG_WORK.minutes,expression:"phases.LONG_WORK.minutes",modifiers:{number:!0}}],attrs:{id:"long-minutes",type:"number",min:"1",max:"60"},domProps:{value:t.phases.LONG_WORK.minutes},on:{input:function(e){e.target.composing||t.$set(t.phases.LONG_WORK,"minutes",t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}}),t._v("\n                    Long Work\n                ")])]),s("div",[s("h2",[t._v("Auto start next round?")]),s("label",{attrs:{for:"auto-start"}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.autoStart,expression:"autoStart"}],attrs:{id:"auto-start",type:"checkbox"},domProps:{checked:Array.isArray(t.autoStart)?t._i(t.autoStart,null)>-1:t.autoStart},on:{change:function(e){var s=t.autoStart,n=e.target,i=!!n.checked;if(Array.isArray(s)){var a=t._i(s,null);n.checked?a<0&&(t.autoStart=s.concat([null])):a>-1&&(t.autoStart=s.slice(0,a).concat(s.slice(a+1)))}else t.autoStart=i}}}),t._v("\n                    Auto start\n                ")])]),s("div",[s("h2",[t._v("Long Work Intervals")]),s("label",{attrs:{for:"long-work-intervals"}},[s("input",{directives:[{name:"model",rawName:"v-model.number",value:t.longWorkInterval,expression:"longWorkInterval",modifiers:{number:!0}}],attrs:{id:"long-work-intervals",type:"number",min:"1"},domProps:{value:t.longWorkInterval},on:{input:function(e){e.target.composing||(t.longWorkInterval=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}}),t._v("\n                    Long work intervals\n                ")])])])])],1)}),[],!1,null,null,null).exports),d={name:"Explaining"},v=(s(172),Object(r.a)(d,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"explain"},[s("div",{staticClass:"explain-item"},[s("h2",[t._v("Why Doropomo?")]),s("div",{staticClass:"content"},[s("p",[t._v("We created Domopomo as a criticism of the high productivity in most people’s lives. We are not saying that Pomodoro Technique doesn’t work and it’s a great time management method. Our desire was to show a different approach to manage your time and work. We really believe in a work/life balance and you can do it using Doropomo.")])])]),s("div",{staticClass:"explain-item"},[s("h2",[t._v("How to use Doropomo?")]),s("div",{staticClass:"content colunas"},[s("div",{staticClass:"content-item"},[s("h3",[s("span",{staticClass:"number"},[t._v("1")]),t._v(" Work")]),s("p",[t._v("The working period should be shorter than the sum of breaks.")])]),s("div",{staticClass:"content-item"},[s("h3",[s("span",{staticClass:"number"},[t._v("2")]),t._v(" Rest")]),s("p",[t._v("Do something you like for a while and prepare to go back relaxed.")])]),s("div",{staticClass:"content-item"},[s("h3",[s("span",{staticClass:"number"},[t._v("3")]),t._v(" Relax")]),s("p",[t._v("Do a long break and enjoy your time with nothing but "),s("strong",[t._v("yourself")]),t._v(".")])])])]),s("div",{staticClass:"explain-item"},[s("h2",[t._v("Does it work?")]),s("div",{staticClass:"content"},[s("p",[t._v("We believe that a 5 minutes break isn't long enough to do something you like, or to truly relax. The main idea is to have a longer break time than work time. So we “inverted” the Pomodoro timer and called it Doropomo, that is a 5 minutes work followed by a 25 minutes break time. Of course that 5 minutes is too short to have anything done, but we want to question the quality of the time you spend working and also during the breaks.")])])]),s("div",{staticClass:"explain-item"},[s("h2",[t._v("What is Pomodoro Technique?")]),s("div",{staticClass:"content"},[s("p",[t._v("Pomodoro is a method created by Francesco Cirillo that uses a timer to break down work into intervals, traditionally 25 minutes long, separated by short breaks. Each interval is known as a pomodoro, from the Italian word for 'tomato', after the tomato-shaped kitchen timer that Cirillo used as a university student. - Wikipedia")])])])])}],!1,null,null,null).exports),f={name:"Testimonial"},g=(s(173),Object(r.a)(f,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"testimonial"},[s("div",{staticClass:"testimonial-item"},[s("h2",[t._v("This reverse-pomodoro can be used to slow down...")]),s("p",{staticClass:"who"},[s("strong",[t._v("Leonardo Merlin,")]),t._v(" co-founder of garagethinking")]),s("a",{staticClass:"link",attrs:{href:"https://www.garagethinking.com/",target:"_blank"}},[t._v("https://www.garagethinking.com/")])]),s("div",{staticClass:"testimonial-item"},[s("h2",[t._v("Don’t be productive!")]),s("p",{staticClass:"who"},[s("strong",[t._v("Felipe Dário,")]),t._v(" creator of Doropomo")]),s("a",{staticClass:"link",attrs:{href:"http://www.doropomo.com",target:"_blank"}},[t._v("http://www.doropomo.com")])]),s("div",{staticClass:"testimonial-item"},[s("h2",[t._v("Now “productivity” is a dirty word")]),s("p",{staticClass:"who"},[s("strong",[t._v("Jake Knapp,")]),t._v("  creator of design sprints")]),s("a",{staticClass:"link",attrs:{href:"https://www.invisionapp.com/inside-design/jake-knapp-make-time-design-sprints-productivity/",target:"_blank"}},[t._v("https://www.invisionapp.com/inside-design/jake-knapp-make-time-design-sprints-productivity/")])])])}],!1,null,null,null).exports),_={metaInfo:{title:"Doropomo"},components:{Nav:i.a,TimerManager:p,Explaining:v,Testimonial:g}},b=Object(r.a)(_,(function(){var t=this.$createElement,e=this._self._c||t;return e("Layout",[e("div",{staticClass:"time-break"},[e("header",{staticClass:"container"},[e("Nav")],1),e("section",{staticClass:"container"},[e("TimerManager")],1),e("section",{staticClass:"container"},[e("Explaining")],1),e("section",{staticClass:"bg-testimonial"},[e("div",{staticClass:"container"},[e("Testimonial")],1)])])])}),[],!1,null,null,null);e.default=b.exports}}]);