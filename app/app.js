var app = angular.module('stuffNThings', [
    'ui.bootstrap'
]);

app.controller('MainController', function($scope){
    $scope.pics = [{
        title: 'Umm Yeah, Thats Awesome!!!',
        url: 'http://i.imgur.com/9BPP1xU.jpg'
    },{
        title: 'Panda',
        url: 'http://static.fjcdn.com/pictures/Coolest_2dc07d_1647720.jpg'
    },{
        title: 'Nightmare on your back',
        url: 'http://img.photobucket.com/albums/v468/etrigan69/71958988.jpg'
    },{
        title: 'High Five',
        url: 'http://twistedsifter.files.wordpress.com/2013/03/diver-whale-high-five-perfect-timing.jpg?w=605&h=800'
    }]
})