(function(w) {
  gridWizardComponents.Row = Ractive.extend({
      //isolated : true,
      template : '<div id="{{node.NodeId}}" class="row"><div class="content-control row-control control"></div>{{#node.Nodes}}{{ >node }}{{/node.Nodes}}</div>',
      onrender : function()
      {
        var element = document.getElementById(this.data.node.NodeId),
            selector = ".sortable",
            _this = this;

        Sortable.create(element, {
          animation: 150,
          draggable: selector,
          handle: ".col-control",
          group: 'rows',
          onStart: function(evt)
          {
            console.log('start');
            console.log(evt);
          },
          onSort: function (evt){
            console.log('sort');
          },
          onEnd : function(evt)
          {
            console.log('end');
            //reorderSync(evt, _this.data.node.Nodes.slice());
            //_this.set('node', '');
          },
          onUpdate : function(evt)
          {
            console.log('update');
          }
        }); // That's all.
      }
    });
})(window);