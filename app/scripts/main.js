/*global require*/
'use strict';
require.config({

    baseUrl: 'scripts',
    paths: {
		'jquery': '../../bower_components/jquery/dist/jquery',
		'underscore': '../../bower_components/underscore/underscore',
		'backbone': '../../bower_components/backbone/backbone'
    },
    shim: {
		'jquery': {
            deps: [],
            exports: '$'
        },
        'underscore': {
            deps: [],
            exports: '_'
        },
        'backbone': {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        },
    }
});
 
require(['jquery', 'underscore', 'backbone', 'Zombie.js','module/Module.js'], function($, _, Backbone, Zombie, Module){
    // now you can do what you always done with $
    $('body').remove();
    // now you have the Zombie variable available in this context
    new Zombie();
    new Module();

});