define([
    'jquery',
    'underscore',
    'backbone'
], function ($, _, Backbone){
        var Doc = Backbone.View.extend({
        el: $('#left'),
        initialize:function(){
            console.log('docjs initialize is invoke');
        },
        events: {
            "click #create_doc" : "createDoc",
            "click #left_toggle"     : "toggle"
        },
        createDoc: function(){
            console.log('Click doc.btn_createDoc');
        },
        toggle: function(){
            console.log('tiggle is invoke');
        }
    });
    return Doc;
});

