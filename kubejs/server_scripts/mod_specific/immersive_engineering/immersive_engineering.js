onEvent('recipes', event => {
event.remove({id: 'immersiveengineering:crusher/nether_wart'})
event.remove({id: 'immersiveengineering:crafting/concrete2'})
event.remove({id: 'immersiveengineering:cloche'})
event.shaped('immersiveengineering:cloche', ['GEG', 'G G', 'TRT'], {
    G: '#forge:glass',
    E: 'immersiveengineering:electron_tube',
    T: '#forge:treated_wood',
    R: 'immersiveengineering:logic_unit'
  })
})
