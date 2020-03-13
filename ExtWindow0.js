// Ext.Window
function createWindow0(){
    var win = new Ext.Window({
        modal: true,
        layout: 'fit',
        border: false,
        frame: true,  //?
        height: 200,
        width: 300,
        items: [{
            xtype: 'panel',
            html: "<p style='text-align:center'>Ext.Window 0. Resize the window</p>"
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