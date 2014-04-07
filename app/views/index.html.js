'use strict';

define(['app', 'async!//maps.google.com/maps/api/js?v=3.exp&sensor=false'],  function(app) {

     app.controller('HomePageController', ['$scope', '$rootScope', '$http', '$timeout', '$q', function ($scope, $rootScope, $http, $timeout, $q) {
        
		$scope.controller = "HomePageController";
		$rootScope.isExpanded = true; // full page 
        
    }]);

    //==================================================
    //
    //
    //==================================================
    app.directive('csMap', ['$window',function($window) {
        var map;
        var markers=[];

        function init(elem) {

          map = new $window.google.maps.Map(elem, {
            zoom:       2,
            center:     new $window.google.maps.LatLng(13.6036603, -101.313101),
            mapTypeId:  $window.google.maps.MapTypeId.TERRAIN,
          });
        }

        // function loadMarkers(docs) {

        //     var createMarker = function (item){
                    
        //         var lat = parseFloat(item.doc.notes_s.split(',')[0]) || 0;
        //         var lng = parseFloat(item.doc.notes_s.split(',')[1]) || 0;

        //         var marker = new $window.google.maps.Marker({
        //             map: map,
        //             position: new $window.google.maps.LatLng(lat, lng),
        //             title: item.title
        //         });
                
        //         marker.content = '<div class="infoWindowContent">' + item.doc.summary_EN_t + '</div>';
        //         var infoWindow = new $window.google.maps.InfoWindow({ maxWidth: 400 }); 
        //         var link = 'https://chm.cbd.int/database/record?documentID=' + item.doc.identifier_s 

        //         $window.google.maps.event.addListener(marker, 'click', function(){
        //             infoWindow.setContent('<h3 class="firstHeading"><a href=\''+link+'\'>' + marker.title + '</a></h3>' + marker.content);
        //             infoWindow.open(map, marker);
        //         });
                
        //         markers.push(marker);
        //     }

        //     for (var i = 0; i < docs.length; i++) {
        //         createMarker(docs[i]);
        //     }            
        // }

        // function clearMarkers() {
        //     while(markers.length){
        //         markers.pop().setMap(null);
        //     }
        // }

        return {
          restrict: 'EAC',
          template: '<div id="map-canvas" class="collapse in"></div>',
          replace: true,
          // scope: { docs: '=' },
          link: function(scope, element, attrs, ctrl) {
            
            init(element.get(0));

            // scope.$watch('docs', function(currDocs) {
            //     if(currDocs){
            //         clearMarkers();
            //         loadMarkers(currDocs);
            //     }
            // });
          }
        };
    }]); 

    return false;
});