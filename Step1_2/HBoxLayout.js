Ext.ns('App.HBoxLayoutWindow');

App.HBoxLayoutWindow.createHBoxLayoutWindow = function () {

    var formPanel = new Ext.form.FormPanel({
        layout: 'form',
        frame: true,
        autoHeight: true,
        height: 100,
        autoScroll: true,
        items: new Ext.Container({
            height: 40,
            layout: {
                type: 'hbox',
                align: 'middle',
                pack: 'end',
            },
            items: [{
                xtype: 'textfield',
                value: 'Trash',
                width: 150,
                fieldLabel: 'Fignia',
            },{
                xtype: 'button',
                text: 'Search',
                width: 50,
            }]
        })
    })


    var formPanel2 = new Ext.form.FormPanel({

    });


    var win = new Ext.Window({
        title: 'HBox form',
        items: formPanel,
        layout: 'fit',
        modal: false,
        frame: true,
        width: 500,
        height: 300,
        autoScroll: true

    });
    return win;
}