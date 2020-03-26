//createWindow1().show();
Ext.ns('App.window1');

App.window1.createWindow1 = function(){
/*/!*    var cp = new Ext.ColorPalette({value:'993300'});  // initial selected color
    cp.ren*!/der('panelExt');*/

    var formPanel = new Ext.form.FormPanel({
        frame : true,
        autoHeight : true,
        items : [{
            xtype : 'textfield',
            fieldLabel : 'Name',
            name : 'Name'

        }, {
            xtype : 'textfield',
            fieldLabel : 'Last Name',
            name : 'Last Name',

        }, {
            xtype : 'datefield',
            fieldLabel : 'Date of birthday',
            name : 'datefield',
            value: '01/01/2020'
        }, {
            xtype : 'numberfield',
            fieldLabel : 'Children',
            name : 'numberfield',
        }, {
            xtype : 'textarea',
            fieldLabel : 'Where get the passport',
            name : 'textarea',
            height : 70,

        },{
            xtype: 'radiogroup',
            fieldLabel: 'Gender',
            columns: 2,
            items: [
                {boxLabel: 'Male', name: 'rb'},
                {boxLabel: 'Female', name: 'rb'},
            ]

        }, {

            xtype : 'displayfield',
            fieldLabel : 'Some inf.',
            name : 'displayfield',
            value : 'Look at this text'
        }]
    });

    var  win = new Ext.Window({
        title : 'Registration for listener',
        modal : true,
        layout : 'fit',
        border : false,
        frame : true,
        autoHeight : true,
        width : 300,
        items : [ formPanel ],
        buttons : [ {
            text : 'Ok',
            handler : function() {
                win.close();
            }
        } ]
    });

    return win;
};
