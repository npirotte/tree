
(function(w)
{
  var iNodeTypes = {
    Master : 'master',
    Container : 'container',
    Row : 'row',
    Col : 'col',
    SimpleText : 'simpleText',
    Separator : 'separator'
  },
  ui = function()
  {
    return {
      Master: document.getElementById('grid-wizard')
    }
  }

  var _gridWizard = function()
  {
    var _ui = ui();
    this.Repository = new GridWizardRepository();

    // get grid
    this.Data = this.Repository.Get();

    // set ui
    this.Master = gridWizardComponents.MasterComponent(_ui.Master);


    // set the data
    this.Master.set('nodes', this.Data);

    // à remplacer par du ractive
    Sortable.create(document.getElementById('content-widgets'), {
      animation: 150,
      handle: ".content-control",
      group: { name: "content", pull: ['clone'], put: [false] },
      onUpdate: function (evt){
        var order = 0;
        console.log(evt);
        //reorderSync(evt, _this.data.node.Nodes);
      }
    });
  }

  _gridWizard.Components = {};

  // export
  w.GridWizard = _gridWizard;
  w.INodeTypes = iNodeTypes;
})(window);