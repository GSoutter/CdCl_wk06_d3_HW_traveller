const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.map(journey => journey.startLocation)
};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map(journey => journey.endLocation)

};

Traveller.prototype.getJourneysByTransport = function (transport) {
  const result = this.journeys.filter(journey=> journey.transport === transport )
  return result

};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter(journey=> journey.distance > minDistance)
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  return this.journeys.reduce((total, journey) => {return total + journey.distance},0)
};

Traveller.prototype.getUniqueModesOfTransport = function () {

let modes = this.journeys.map(journey=> journey.transport)
return Array.from(new Set(modes))
};


module.exports = Traveller;
