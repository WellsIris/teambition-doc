define(['jquery','underscore','backbone','docModel'], function ($,_,Backbone,docModel){
    var DocView = Backbone.View.extend({
        el      : $('#left'),
        tagName : 'section',
        initialize:function(docModel){
            // console.log(docModel);
        },
        events: {
            "click #create_doc"      : "createDoc"
        },
        createDoc: function(){
            console.log('Click doc.btn_createDoc');            
        }
    });
    return DocView;
});