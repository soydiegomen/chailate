(function() {
	'use strict';

	angular.module('chaiApp.dev').run(appRun);

	function appRun(routehelper){
		routehelper.configureRoutes(getRoutes());
	}

	function getRoutes(){
		return [
			{
				url: '/desarrollo-web',
				config: {
					templateUrl: 'js/app/dev/dev.html',
			        controller: 'DevCtrl',
			        controllerAs: 'devCtrl'
				}
			}
		];
	}
})();