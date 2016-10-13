(function() {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:graphCtrl
	* @description
	* # graphCtrl
	* Controller of the app
	*/

  	angular
		.module('contact')
		.controller('ContactCtrl', Contact);

		Contact.$inject = [];

		/*
		* recommend
		* Using function declarations
		* and bindable members up top.
		*/

		function Contact() {
			/*jshint validthis: true */
			var vm = this;

			vm.labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
  			vm.data = [300, 500, 100];

		}

})();
