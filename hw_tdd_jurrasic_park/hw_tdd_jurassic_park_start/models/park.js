const Park = function (options) {
  this.name = options.name;
  this.ticketPrice = options.ticketPrice;
  this.dinosaurs = options.dinosaurs;
};

Park.prototype.addDino = function (dino) {
  this.dinosaurs.push(dino)
};

Park.prototype.removeDino = function (dino) {
  delete_dino = this.dinosaurs.indexOf(dino);
  this.dinosaurs.splice(delete_dino, 1);
};


Park.prototype.checkMostPopDino = function () {
  this.dinosaurs.sort(function (obj1, obj2) {
       return obj2.guestsAttractedPerDay - obj1.guestsAttractedPerDay
  });
  return this.dinosaurs[0];
};

Park.prototype.findAllSpecies = function (species) {
  let foundDino = []
  for (dinosaur of this.dinosaurs) {
    console.log(dinosaur);
    (dinosaur.species === species)? foundDino.push(dinosaur): null;
  };
  return foundDino;
 };


module.exports = Park;