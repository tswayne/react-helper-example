const fishDatabase = [
  {id: 1, name: 'Chiselmouth'},
  {id: 2, name: 'Goldfish'},
  {id: 3, name: 'Lake chub'},
  {id: 4, name: 'Grass carp'},
  {id: 5, name: 'Common carp'},
  {id: 6, name: 'Tui chub'},
  {id: 7, name: 'Peamouth'},
  {id: 8, name: 'Golden shiner'},
  {id: 9, name: 'Fathead minnow'},
  {id: 10, name: 'Northern pikeminnow'},
  {id: 11, name: 'Longnose dace'},
  {id: 12, name: 'Nooksack dace'},
  {id: 13, name: 'Redside shiner'},
]



module.exports.find = () => {
  return fishDatabase;
}
