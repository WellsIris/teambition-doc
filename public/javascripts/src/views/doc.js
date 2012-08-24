define([
    'jquery',
    'underscore',
    'backbone'
], function ($, _, Backbone){
        var DocView = Backbone.View.extend({
        el: $('#left'),
        tagName:"div",
        initialize:function(model){
            console.log(model);
        },
        events: {
            "click #create_doc"      : "createDoc",
            "click #left_toggle"     : "toggle"
        },
        createDoc: function(){
            console.log('Click doc.btn_createDoc');
            
        },
        toggle: function(){
            console.log('tiggle is invoke');
        }
    });
    return DocView;
});

