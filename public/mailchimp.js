
(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='NAME';ftypes[1]='text';fnames[2]='COMPANY';ftypes[2]='text';fnames[3]='INDUSTRY';ftypes[3]='text';fnames[4]='PRODUCT';ftypes[4]='text';fnames[5]='SPECS';ftypes[5]='text';fnames[6]='COUNTRY';ftypes[6]='text';fnames[7]='PHONE';ftypes[7]='number';fnames[8]='MESSAGE';ftypes[8]='text';}(jQuery));var $mcj = jQuery.noConflict(true);


var target = document.getElementById('mce-success-response');

// create an observer instance
var observer = new MutationObserver(function(mutations) {
mutations.forEach(function(mutation) {
if (target.innerHTML === "Thank you for subscribing!") {
target.innerHTML = "Thank you for your inquiry!";
}
});
});

// configuration of the observer:
var config = { attributes: true, childList: true, characterData: true };

// pass in the target node, as well as the observer options
observer.observe(target, config);

