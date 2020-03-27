Ext.ns('App.layoutAbsolute');

App.layoutAbsolute.createLayoutAbsolute = function(){
    var AbsoluteForm  = new Ext.form.FormPanel({
        baseCls: 'x-plain',
        layout: 'absolute',
        defaultType: 'textfield',
        url: 'save-form.php',

        items: [{
            x: 0,
            y: 5,
            xtype: 'label',
            text: 'Email',
        },{
            x: 60,
            y: 0,
            name: 'toEmail',
            anchor: '100%',
        },{
            x: 0,
            y: 35,
            xtype: "label",
            text: 'Themes',
        }, {
            x: 60,
            y: 30,
            name: 'themes',
            anchor: '100%',
        }, {
            x: 0,
            y: 60,
            xtype: 'textarea',
            name: 'msg',
            anchor: '100% 100%'
        }]
    });

    var win = new Ext.Window({
        xtype: 'window',
        title: 'Send email using Absolute Layout',
        width: 300,
        height: 300,
        layout: 'fit',
        items: AbsoluteForm,

        buttons: [{
            text: 'Send message',
            handler: function () {
                form.getForm().submit();
            }
        }, {
            text: 'Cancel',
            handler: function () {
                close();
            }
        }]
    });
    return win;
};
