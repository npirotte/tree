(function(w)
{
  var sample = [
    {
      NodeId : generateUUID(),
      NodeType : INodeTypes.Master,
      Nodes : [
        {
          NodeId : generateUUID(),
          NodeType : INodeTypes.Container,
          Nodes : [
            {
              NodeId : generateUUID(),
              NodeType : INodeTypes.Row,
              Nodes : [
                {
                  NodeId : generateUUID(),
                  NodeType : INodeTypes.Col,
                  Config : {
                            WidthMd : 6
                          },
                  Nodes : [
                    {
                      NodeId : generateUUID(),
                      NodeType : INodeTypes.Row,
                      Nodes : [
                        {
                          NodeId : generateUUID(),
                          NodeType : INodeTypes.Col,
                          Order : 1,
                          Config : {
                            WidthMd : 6
                          },
                          Nodes : [
                          {
                            NodeId : generateUUID(),
                            NodeType : INodeTypes.SimpleText,
                            Content: 'Ceci est un super texte !'
                          },
                          {
                            NodeId : generateUUID(),
                            NodeType : INodeTypes.Separator,
                          },
                          {
                            NodeId : generateUUID(),
                            NodeType : INodeTypes.SimpleText,
                            Content: 'Ceci est un autre texte qui est encore plus super !'
                          }
                        ]
                        },
                        {
                          NodeId : generateUUID(),
                          NodeType : INodeTypes.Col,
                          Order : 2,
                          Config : {
                            WidthMd : 6
                          },
                          Nodes : [
                          {
                            NodeId : generateUUID(),
                            NodeType : INodeTypes.SimpleText,
                            Content: 'Ceci est un super texte !'
                          },
                          {
                            NodeId : generateUUID(),
                            NodeType : INodeTypes.Separator,
                          },
                          {
                            NodeId : generateUUID(),
                            NodeType : INodeTypes.SimpleText,
                            Content: 'Ceci est un autre texte qui est encore plus super !'
                          }
                        ]
                        }
                      ]
                    }
                  ]
                },
                {
                  NodeId : generateUUID(),
                  NodeType : INodeTypes.Col,
                  Config : {
                    WidthMd : 6
                  },
                  Nodes : [
                    {
                      NodeId : generateUUID(),
                      NodeType : INodeTypes.SimpleText,
                      Content: 'Ceci est un super texte !'
                    },
                    {
                      NodeId : generateUUID(),
                      NodeType : INodeTypes.Separator,
                    },
                    {
                      NodeId : generateUUID(),
                      NodeType : INodeTypes.SimpleText,
                      Content: 'Ceci est un autre texte qui est encore plus super !'
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
  var _gridWizardRepository = function() {};

  _gridWizardRepository.prototype.Get = function()
  {
    console.log(sample);
    return sample;
  };

  w.GridWizardRepository = _gridWizardRepository;
})(window);

function generateUUID(){
    var d = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (d + Math.random()*16)%16 | 0;
        d = Math.floor(d/16);
        return (c=='x' ? r : (r&0x3|0x8)).toString(16);
    });
    return uuid;
};