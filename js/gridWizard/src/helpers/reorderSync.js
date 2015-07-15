function reorderSync(evt, dataSource)
{
  var item;

  console.log(evt);
  console.log(dataSource);

  if (evt.newIndex != evt.oldIndex) {
    console.log(evt.oldIndex);
    //dataSource.splice(evt.newIndex, 0, dataSource[evt.oldIndex]);
    item = dataSource[evt.oldIndex];
    dataSource.splice(evt.oldIndex, 1);
    dataSource.splice(evt.newIndex, 0, 'test');
  };
  //dataSource.splice(evt.newIndex - 1, 0, dataSource.splice(evt.newIndex - 1, 1)[0]);
  console.log(dataSource, item);

  return dataSource;
}