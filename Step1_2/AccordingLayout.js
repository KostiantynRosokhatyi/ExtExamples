Ext.ns('App.AccordionLayout');

App.AccordionLayout.createAccordingLayout = function(){

    var win = new Ext.create ({
        /*title: 'According Layout',*/
        xtype: 'window',
        modal: true,
        layout: 'fit',
        border: false,
        frame: true,
        autoHeight: false,
        height: 600,
        width: 800,
        autoScroll: true,
        items: [{
            xtype: 'panel',
            title: 'According Layout',
            layout: 'accordion',
            defaults: {
                bodyStyle: 'padding:15px'
            },
            layoutConfig: {
                titleCollapse: false,
                animate: true
            },
            items: [{
                title: "Panel one",
                html: 'Content one'
            }, {
                title: 'Panel two',
                html: 'content two'

            }, {
                title: 'Panel three',
                html: 'Content 3'
            }]
        }],
        buttons: [{
            text: 'Okay',
            handler: function(){
                win.close();
            }
        }]
    });
    return win;
};