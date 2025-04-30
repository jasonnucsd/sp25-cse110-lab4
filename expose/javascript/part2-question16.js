const statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
  };
  
  for (let p in statistics) {
    let v= statistics[p];
    if (p.startsWith('r') || v % 2 === 1) {
      console.log(v);
    }
  }
  