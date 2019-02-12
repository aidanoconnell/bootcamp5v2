angular.module('listings', []).factory('Listings', function($http) {
  var methods = {
    getAll: function() {
      return $http.get('https://obscure-chamber-50066.herokuapp.com/api/listings');
    },

	create: function(listing) {
	  return $http.post('https://obscure-chamber-50066.herokuapp.com/api/listings', listing);
    },

    delete: function(_id) {
	   /**TODO
        return result of HTTP delete method
       */
    return $http.delete('https://obscure-chamber-50066.herokuapp.com/api/listings/' +  _id);

    }
  };

  return methods;
});
