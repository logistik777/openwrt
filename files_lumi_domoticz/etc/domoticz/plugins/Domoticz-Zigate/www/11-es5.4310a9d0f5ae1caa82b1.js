function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(e,t):void 0}}function _iterableToArray(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _createSuper(e){var t=_isNativeReflectConstruct();return function(){var n,r=_getPrototypeOf(e);if(t){var c=_getPrototypeOf(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return _possibleConstructorReturn(this,n)}}function _possibleConstructorReturn(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{J4zT:function(e,t,n){"use strict";n.r(t),n.d(t,"GroupModule",(function(){return G}));var r=n("3Pt+"),c=n("M0ag"),o=n("tyNb"),a=n("ey9i"),i=n("H+bZ"),s=n("D0Ju"),u=n("ntpF"),l=n("QDJC"),b=n("fXoL"),d=n("1kSV"),p=n("sYmb"),f=n("5eHb"),m=n("lDzL"),h=n("ZOsW"),O=n("oZhZ"),v=["table"],y=["content"];function g(e,t){if(1&e){var n=b.Xb();b.Oc(0,"\n                "),b.Wb(1,"i",22),b.ic("click",(function(){b.Fc(n);var e=t.row;return b.mc().delete(e)})),b.nc(2,"translate"),b.Vb(),b.Oc(3,"\n              ")}2&e&&(b.Cb(1),b.tc("title",b.oc(2,1,"group.create.delete.button")))}function w(e,t){1&e&&b.Oc(0),2&e&&b.Qc("\n                ",t.row._GroupId,"\n              ")}function _(e,t){if(1&e){var n=b.Xb();b.Oc(0,"\n                "),b.Wb(1,"input",23),b.ic("change",(function(e){b.Fc(n);var r=t.row;return b.mc().updateValue(e,r._GroupId)})),b.Vb(),b.Oc(2,"\n              ")}if(2&e){var r=t.row;b.Cb(1),b.sc("value",r.GroupName)}}function C(e,t){if(1&e&&(b.Oc(0,"\n                    "),b.Wb(1,"span",26),b.Oc(2,"\n                      "),b.Wb(3,"b"),b.Oc(4,"Widget"),b.Vb(),b.Oc(5),b.Wb(6,"b"),b.Oc(7,"IEEE"),b.Vb(),b.Oc(8),b.Wb(9,"b"),b.Oc(10,"Ep"),b.Vb(),b.Oc(11),b.Wb(12,"b"),b.Oc(13,"Id"),b.Vb(),b.Oc(14),b.Wb(15,"b"),b.Oc(16),b.Vb(),b.Oc(17,"\n                    "),b.Vb(),b.Oc(18,"\n                  ")),2&e){var n=t.item,r=t.searchTerm;b.Cb(1),b.sc("ngOptionHighlight",r),b.Cb(4),b.Qc(" : ",n.Name," - "),b.Cb(3),b.Qc(" : ",n.IEEE," - "),b.Cb(3),b.Qc(" : ",n.Ep," -\n                      "),b.Cb(3),b.Qc(" : ",n._ID," -\n                      "),b.Cb(2),b.Pc(n.ZDeviceName)}}function k(e,t){if(1&e){var n=b.Xb();b.Oc(0,"\n                "),b.Wb(1,"ng-select",24),b.ic("ngModelChange",(function(e){return b.Fc(n),t.row.devicesSelected=e}))("change",(function(){return b.Fc(n),b.mc().isFormValid()})),b.Oc(2,"\n                  "),b.Mc(3,C,19,6,"ng-template",25),b.Oc(4,"\n                "),b.Vb(),b.Oc(5,"\n              ")}if(2&e){var r=t.row,c=b.mc();b.Cb(1),b.sc("items",c.devices)("multiple",!0)("closeOnSelect",!1)("searchable",!0)("ngModel",r.devicesSelected)}}function W(e,t){if(1&e){var n=b.Xb();b.Oc(0,"\n                "),b.Wb(1,"div",27),b.Oc(2,"\n                  "),b.Wb(3,"input",28),b.ic("click",(function(e){b.Fc(n);var r=t.row;return b.mc().updateCoordinator(e,r)})),b.Vb(),b.Oc(4,"\n                "),b.Vb(),b.Oc(5,"\n              ")}if(2&e){var r=t.row;b.Cb(3),b.sc("checked",r.coordinatorInside)}}function V(e,t){1&e&&(b.Oc(0,"\n  "),b.Wb(1,"div",29),b.Oc(2,"\n    "),b.Rb(3,"h4",30),b.Oc(4,"\n    "),b.Wb(5,"button",31),b.ic("click",(function(){return t.$implicit.dismiss("Cross click")})),b.Oc(6,"\n      "),b.Wb(7,"span",32),b.Oc(8,"\xd7"),b.Vb(),b.Oc(9,"\n    "),b.Vb(),b.Oc(10,"\n  "),b.Vb(),b.Oc(11,"\n  "),b.Rb(12,"div",33),b.Oc(13,"\n  "),b.Wb(14,"div",34),b.Oc(15,"\n    "),b.Wb(16,"button",35),b.ic("click",(function(){return t.$implicit.dismiss("cancel")})),b.Vb(),b.Oc(17,"\n  "),b.Vb(),b.Oc(18,"\n"))}var I,E,S,N=new a.c("GroupComponent"),x=[{path:"",component:(I=function(e){_inherits(n,e);var t=_createSuper(n);function n(e,r,c,o,a,i){var s;return _classCallCheck(this,n),(s=t.call(this)).modalService=e,s.apiService=r,s.formBuilder=c,s.translate=o,s.toastr=a,s.headerService=i,s.rows=[],s.rowsTemp=[],s.temp=[],s.hasEditing=!1,s.waiting=!1,s}return _createClass(n,[{key:"ngOnInit",value:function(){var e=this;this.apiService.getZGroupDevicesAvalaible().subscribe((function(t){var n=[];t&&t.length>0&&(t.forEach((function(e){e.WidgetList.forEach((function(t){if("0000"!==e._NwkId){var r=new s.a;r.Ep=t.Ep,r.IEEE=t.IEEE,r.Name=t.Name,r.ZDeviceName=t.ZDeviceName,r._ID=t._ID,r._NwkId=e._NwkId,n.push(r)}}))})),e.devices=[].concat(n),e.getGroups())}))}},{key:"updateValue",value:function(e,t){this.hasEditing=!0,this.rows.find((function(e){return e._GroupId===t})).GroupName=e.target.value}},{key:"updateFilter",value:function(e){var t=e.target.value.toLowerCase(),n=this.temp.filter((function(e){var n=!1;return e._GroupId&&(n=-1!==e._GroupId.toLowerCase().indexOf(t)),!n&&e.GroupName&&(n=-1!==e.GroupName.toLowerCase().indexOf(t)),n||!t}));this.rows=n,this.table.offset=0}},{key:"updateDevices",value:function(){var e=this;this.rows.forEach((function(e){e.coordinatorInside&&(e.devicesSelected||(e.devicesSelected=[]),e.devicesSelected.push({Ep:"01",_NwkId:"0000"}))})),this.isFormValid&&this.apiService.putZGroups(this.rows).subscribe((function(t){N.debug(e.rows),e.hasEditing=!1,e.toastr.success(e.translate.instant("api.global.succes.update.title")),e.apiService.getRestartNeeded().subscribe((function(t){t.RestartNeeded&&(e.headerService.setRestart(!0),e.open(e.content))})),e.waiting=!0,setTimeout((function(){e.getGroups(),e.waiting=!1}),1e3)}))}},{key:"delete",value:function(e){var t=this.rows.indexOf(e,0);t>-1&&(this.rows.splice(t,1),this.rows=_toConsumableArray(this.rows),this.temp=_toConsumableArray(this.rows))}},{key:"add",value:function(){var e=new s.b;e.GroupName="",e.coordinatorInside=!1,this.rows.push(e),this.rows=_toConsumableArray(this.rows),this.temp=_toConsumableArray(this.rows)}},{key:"updateCoordinator",value:function(e,t){t.coordinatorInside=e.currentTarget.checked}},{key:"open",value:function(e){this.modalService.open(e,{ariaLabelledBy:"modal-basic-title"}).result.then((function(e){}),(function(e){}))}},{key:"isFormValid",value:function(){var e=!0;return this.rows.forEach((function(t){t.GroupName&&(t.coordinatorInside||t.devicesSelected&&0!==t.devicesSelected.length)||(e=!1)})),!this.waiting&&e}},{key:"getGroups",value:function(){var e=this;this.apiService.getZGroups().subscribe((function(t){t&&t.length>0&&(t.forEach((function(t){var n=[];t.coordinatorInside=!1,t.Devices.forEach((function(r){if("0000"===r._NwkId)t.coordinatorInside=!0;else{var c=e.devices.find((function(e){return e._NwkId===r._NwkId&&e.Ep===r.Ep}));null!=c&&n.push(c)}})),t.devicesSelected=n})),e.rows=_toConsumableArray(t),e.temp=_toConsumableArray(t))}))}}]),n}(l.a),I.\u0275fac=function(e){return new(e||I)(b.Qb(d.e),b.Qb(i.a),b.Qb(r.e),b.Qb(p.d),b.Qb(f.b),b.Qb(u.a))},I.\u0275cmp=b.Kb({type:I,selectors:[["app-group"]],viewQuery:function(e,t){var n;1&e&&(b.Uc(v,!0),b.Uc(y,!0)),2&e&&(b.Bc(n=b.jc())&&(t.table=n.first),b.Bc(n=b.jc())&&(t.content=n.first))},features:[b.zb],decls:74,vars:30,consts:[[1,"row"],[1,"col-sm-11"],[1,"card"],["translate","group.create.header",1,"card-header"],[1,"card-body"],["translate","group.create.subtitle",1,"card-title"],[1,"card-text"],[1,"col-sm"],["type","text",3,"placeholder","keyup"],[1,"col-sm-2"],["translate","group.create.add.button",1,"w-100","btn","btn-primary",3,"click"],[1,"bootstrap",3,"rows","columnMode","headerHeight","summaryRow","summaryPosition","footerHeight","limit","rowHeight"],["table",""],[3,"maxWidth"],["ngx-datatable-cell-template",""],["prop","_GroupId",3,"maxWidth","name"],["prop","GroupName",3,"maxWidth","name"],[3,"name","sortable"],[3,"maxWidth","name","sortable"],[1,"col-sm-1"],["translate","group.create.validate.button",1,"w-100","btn","btn-primary",3,"disabled","click"],["content",""],[1,"fa","fa-trash",2,"cursor","pointer",3,"title","click"],["autofocus","","type","text",3,"value","change"],["bindLabel","Name","placeholder","Choose device","appendTo","body",3,"items","multiple","closeOnSelect","searchable","ngModel","ngModelChange","change"],["ng-option-tmp",""],[3,"ngOptionHighlight"],[1,"form-check"],["type","checkbox",1,"form-check-input",3,"checked","click"],[1,"modal-header"],["id","modal-basic-title","translate","group.reloadplugin.alert.title",1,"modal-title"],["type","button","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],["translate","group.reloadplugin.alert.subject",1,"modal-body"],[1,"modal-footer"],["type","button","translate","group.reloadplugin.alert.cancel",1,"btn","btn-outline-dark",3,"click"]],template:function(e,t){1&e&&(b.Wb(0,"div",0),b.Oc(1,"\n  "),b.Wb(2,"div",1),b.Oc(3,"\n    "),b.Wb(4,"div",2),b.Oc(5,"\n      "),b.Rb(6,"div",3),b.Oc(7,"\n      "),b.Wb(8,"div",4),b.Oc(9,"\n        "),b.Rb(10,"h5",5),b.Oc(11,"\n        "),b.Wb(12,"div",6),b.Oc(13,"\n          "),b.Wb(14,"div",0),b.Oc(15,"\n            "),b.Wb(16,"div",7),b.Oc(17,"\n              "),b.Wb(18,"input",8),b.ic("keyup",(function(e){return t.updateFilter(e)})),b.nc(19,"translate"),b.Vb(),b.Oc(20,"\n            "),b.Vb(),b.Oc(21,"\n            "),b.Wb(22,"div",9),b.Oc(23,"\n              "),b.Wb(24,"button",10),b.ic("click",(function(){return t.add()})),b.Vb(),b.Oc(25,"\n            "),b.Vb(),b.Oc(26,"\n          "),b.Vb(),b.Oc(27,"\n          "),b.Wb(28,"ngx-datatable",11,12),b.Oc(30,"\n            "),b.Wb(31,"ngx-datatable-column",13),b.Oc(32,"\n              "),b.Mc(33,g,4,3,"ng-template",14),b.Oc(34,"\n            "),b.Vb(),b.Oc(35,"\n\n            "),b.Wb(36,"ngx-datatable-column",15),b.nc(37,"translate"),b.Oc(38,"\n              "),b.Mc(39,w,1,1,"ng-template",14),b.Oc(40,"\n            "),b.Vb(),b.Oc(41,"\n            "),b.Wb(42,"ngx-datatable-column",16),b.nc(43,"translate"),b.Oc(44,"\n              "),b.Mc(45,_,3,1,"ng-template",14),b.Oc(46,"\n            "),b.Vb(),b.Oc(47,"\n            "),b.Wb(48,"ngx-datatable-column",17),b.nc(49,"translate"),b.Oc(50,"\n              "),b.Mc(51,k,6,5,"ng-template",14),b.Oc(52,"\n            "),b.Vb(),b.Oc(53,"\n            "),b.Wb(54,"ngx-datatable-column",18),b.nc(55,"translate"),b.Oc(56,"\n              "),b.Mc(57,W,6,1,"ng-template",14),b.Oc(58,"\n            "),b.Vb(),b.Oc(59,"\n          "),b.Vb(),b.Oc(60,"\n        "),b.Vb(),b.Oc(61,"\n      "),b.Vb(),b.Oc(62,"\n    "),b.Vb(),b.Oc(63,"\n  "),b.Vb(),b.Oc(64,"\n  "),b.Wb(65,"div",19),b.Oc(66,"\n    "),b.Wb(67,"button",20),b.ic("click",(function(){return t.updateDevices()})),b.Vb(),b.Oc(68,"\n  "),b.Vb(),b.Oc(69,"\n"),b.Vb(),b.Oc(70,"\n\n"),b.Mc(71,V,19,0,"ng-template",null,21,b.Nc),b.Oc(73,"\n")),2&e&&(b.Cb(18),b.tc("placeholder",b.oc(19,20,"group.create.placeholder")),b.Cb(10),b.sc("rows",t.rows)("columnMode","force")("headerHeight",40)("summaryRow",!0)("summaryPosition","bottom")("footerHeight",40)("limit",10)("rowHeight","auto"),b.Cb(3),b.sc("maxWidth",100),b.Cb(5),b.tc("name",b.oc(37,22,"group.create.shortid.column")),b.sc("maxWidth",100),b.Cb(6),b.tc("name",b.oc(43,24,"group.create.groupname.column")),b.sc("maxWidth",200),b.Cb(6),b.tc("name",b.oc(49,26,"group.create.devices.column")),b.sc("sortable",!1),b.Cb(6),b.tc("name",b.oc(55,28,"group.create.coordinator.column")),b.sc("maxWidth",150)("sortable",!1),b.Cb(13),b.sc("disabled",!t.isFormValid()))},directives:[p.a,m.c,m.b,m.a,h.a,r.n,r.p,h.c,O.d],pipes:[p.c],styles:[""]}),I),data:{title:Object(a.d)("group")}}],A=((S=function e(){_classCallCheck(this,e)}).\u0275mod=b.Ob({type:S}),S.\u0275inj=b.Nb({factory:function(e){return new(e||S)},providers:[],imports:[[o.i.forChild(x)],o.i]}),S),G=((E=function e(){_classCallCheck(this,e)}).\u0275mod=b.Ob({type:E}),E.\u0275inj=b.Nb({factory:function(e){return new(e||E)},imports:[[A,c.a,r.k]]}),E)}}]);