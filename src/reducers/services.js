const servicesDataSet = [
  {
    id: 'xsg22huhixn',
    name: 'Haircut',
    price: 20,
    durationInMinutes: 40,
    providers: ['9guo2jlub', 'uh12u9gu', 'u12768f71']
  },
  {
    id: 'kjhi20hn',
    name: 'Nails',
    price: 15,
    durationInMinutes: 45,
    providers: ['bu9u0iu1', '120hjio']
  },
  {
    id: '98g68ouj8g',
    name: 'Spa',
    price: 35,
    durationInMinutes: 90,
    providers: ['uh12u9gu', '9guo2jlub']
  },
  {
    id: '89gfo9uli',
    name: 'Makeup',
    price: 50,
    durationInMinutes: 120,
    providers: ['uh12u9gu']
  }
];

function selectService(state = servicesDataSet, action) {
  return state;
}