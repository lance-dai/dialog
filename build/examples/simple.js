webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(2);


/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */

	__webpack_require__(6);
	var React = __webpack_require__(4);
	var Dialog = __webpack_require__(5);

	function close() {
	  console.log('close');
	}

	function show() {
	  console.log('show');
	}

	React.render(React.createElement("div", null, React.createElement("h1", null, "render"), 
	  React.createElement("p", null, "does not support render visible on server!"), 
	  React.createElement(Dialog, {
	    title: "第一个弹框", 
	    width: "500", 
	    zIndex: 100, 
	    visible: true, 
	    onClose: close, 
	    onShow: show
	  }, 
	    React.createElement("p", null, "第一个dialog")
	  )

	),document.getElementById('__react-content'));


/***/ }
]);