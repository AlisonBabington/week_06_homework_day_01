const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let dino1;
  let dino2;
  let dino3;
  let dino4;

  beforeEach(function () {
    dino1 = new Dinosaur('t-rex', 'carnivore', 70);
    dino2 = new Dinosaur('Velociraptor', 'omnivore', 65);
    dino3 = new Dinosaur('Stegosaurous', 'herbivore', 40);
    dino4 = new Dinosaur('Stegosaurous', 'herbivore', 40);
    park = new Park({name: "Jurassic Park", ticketPrice: 100,
     dinosaurs: [dino1, dino2]});
  });

  it('should have a name', function() {
    const actual = park.name;
    assert.strictEqual(actual, "Jurassic Park");
  });

  it('should have a ticket price', function() {
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 100)
  });

  it('should have a collection of dinosaurs', function () {
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual,[dino1, dino2]);
  });

  it('should be able to add a dinosaur to its collection', function () {
    park.addDino(dino3);
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual,[dino1, dino2, dino3]);
  });

  it('should be able to remove a dinosaur from its collection', function () {
    park.addDino(dino3);
    park.removeDino(dino2);
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual,[dino1,dino3])
  });

  it('should be able to find the dinosaur that attracts the most visitors', function() {
    const actual = park.checkMostPopDino();
    assert.strictEqual(actual, dino1 )
  });

  it('should be able to find all dinosaurs of a particular species', function () {
    park.addDino(dino3);
    park.addDino(dino4);
    const actual = park.findAllSpecies("Stegosaurous");
    assert.deepStrictEqual(actual, [dino3, dino4]);
  });

  it('should be able to remove all dinosaurs of a particular species', function () {
    park.removeAllBySpecies("Velociraptor");
    found_dinos = park.findAllSpecies("Velociraptor");
    const actual = found_dinos.length;
    assert.strictEqual(actual, 0)
  });

});
