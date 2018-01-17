// viewModel object
var vm = {
	firstName : ko.observable(),
	lastName : ko.observable(),
	fullName : ko.computed(function(){
		return firstName() + " " + lastName();
	}, this)
};


// Activates knockout.js
ko.applyBindings(vm);
