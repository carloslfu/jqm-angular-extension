#jqm angular extension - Files

The archieves are angular.js and angular-route.js original files with some modifications. That works with jqm v1.4.2 and angular v1.2.9.

The modifications are listed here:

**angular.js to angular-jqm.js modifications**

- lines 1 to 19: options for basic compatibility, disable some options of jqm.
- line 5555: ``` $('body').trigger('create'); ``` , That render any element in body when angular compiles anything.

**angular-route.js to angular-route-jqm.js modifications**

- lines 918 to 1036: jqmPageView directive are the ngView directive with some modifications for render jqm page.