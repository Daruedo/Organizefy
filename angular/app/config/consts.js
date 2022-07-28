angular.module('firstApp').constant('consts', {
    appName: 'Organizefy - First App',
    version: '1.0',
    owner: 'Daruedo',
    year: '2022',
    site: 'https://github.com/Daruedo/Organizefy',
    apiUrl: 'http://localhost:3003/api',
    oapiUrl: 'http://localhost:3003/oapi',
    userKey: '_first_app_user'
}).run(['$rootScope', 'consts', function ($rootScope, consts) {
    $rootScope.consts = consts
}])