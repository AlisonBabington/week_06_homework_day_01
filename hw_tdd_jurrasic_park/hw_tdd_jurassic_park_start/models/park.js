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
  let foundDino = [];
  for (dinosaur of this.dinosaurs) {
    (dinosaur.species === species)? foundDino.push(dinosaur): null;
  };
  return foundDino;
 };

 Park.prototype.removeAllBySpecies = function (species) {
   let dinosDelete = this.findAllSpecies(species);
   for (let i = 0; i < dinosDelete.length; i++) {
   dino = this.dinosaurs.indexOf(dinosDelete[i]);
    this.dinosaurs.splice(dino, 1);
  }
 };

 Park.prototype.countVisitors = function () {
   let visitors = 0;
   for (dinosaur of this.dinosaurs) {
     visitors += dinosaur.guestsAttractedPerDay;
   };
   return visitors;
 };

 Park.prototype.countYearVisitors = function () {
   const daily = this.countVisitors();
   let yearly = daily * 365;
   return yearly;
 };

 Park.prototype.yearlyTicketRevenue = function () {
   const visitors = this.countYearVisitors();
   let yearPrice = visitors * this.ticketPrice;
   return yearPrice;
 };


module.exports = Park;
