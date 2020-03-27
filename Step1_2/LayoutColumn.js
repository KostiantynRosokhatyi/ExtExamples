Ext.ns('App.layoutColumnWindow');

App.layoutColumnWindow.createLayoutColumn = function () {

    var  itemsColumn = {
        percentage : [{
            title: 'Id',
            width: 100
        }, {
            title: 'Name',

            Width: 80
        }]
    };

    var formPanel = new Ext.form.FormPanel({
       layout: 'form',
       items: [{
           xtype: 'fieldset',
           title: 'It`s fieldset',
           layout: 'column',
           items: itemsColumn.percentage
       }, {
           xtype: 'panel',
           title: 'Panel it`s',
           items: itemsColumn.percentage
       }]
    });

    var win = new Ext.Window({
        title: 'Column Window',
        modal: true,
        layout: 'form',
        border: false,
        frame: true,
        autoHeight: true,
        width: 500,
        items: formPanel,
        buttons: [{
            text: 'Okay',
            handler: function () {
                win.close();
            }
        }]
    })
    return win;
}