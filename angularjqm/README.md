#jqm angular extension - Files

The archieves are angular.js and angular-route.js original files with some modifications. that works with jqm-1.4.2

The modifications are listed here:

**angular.js to angular-jqm.js modifications**

- lines 1 to 19: options for basic compatibility, disable some options of jqm
- line 5555: ```javascript $('body').trigger('create'); ``` , That render any element in body when angular compiles anything

**angular-route.js to angular-route-jqm.js modifications**

- lines 918 to 1036: jqmPageView directive are the ngView directive with some modifications for render jqm page