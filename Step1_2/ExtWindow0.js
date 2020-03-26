// Ext.Window
Ext.ns('App');
Ext.ns('App.Componets');
Ext.ns('App.Helper');
Ext.ns('App.Layouts');
Ext.ns('App.window');
App.window.createWindow0 = function(){
    var win = new Ext.Window({
        modal: true,
        layout: 'fit',
        border: false,
        frame: true,  //?
        height: 200,
        width: 300,
        items: [{
            xtype: 'panel',
            html: "<p style='text-align:center'>Resize the window</p>"
        }],
        buttons: [{
            text: 'Back to standard size',
            handler: function () {
                win.restore();
            },
        }, {
            text: 'Maximize',
            handler: function () {
                win.maximize();
            }

        }],

    });
    return win;
};