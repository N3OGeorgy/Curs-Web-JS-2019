var car = {
  make: 'Audi',
  color: 'black',
  wheels: 4,
  speed: 50,
  topSpeed: 160,
  topReverseSpeed: -50,
  isTrunkOpen: false,
  areLightsOn: false,

  accelerate: function(){
    this.speed++;
  },
  decelerate: function(){
    this.speed--;
  },
  stop: function(){
    this.speed = 0;
  },
  setSpeed: function(speed){
    if(speed >= this.topSpeed){
      this.speed = this.topSpeed;
    }
    if(speed <= this.topReverseSpeed) {
      this.speed = this.topReverseSpeed;
    }
    this.speed = speed;
  },
  openTrunk: function(){
    this.isTrunkOpen = true;
  },
  closeTrunk: function(){
    this.isTrunkOpen = false;
  },
  turnLightsOn: function(){
    this.areLightsOn = true;
    console.log('LightsOn');
  },
  turnLightsOff: function(){
    this.areLightsOn = false;
    console.log('LightsOff');
  },
  flashLights: function(){
    var self = this;
    self.turnLightsOn();
    window.setTimeout(
      function(){
        self.turnLightsOff();
      }, 3000
    );
  },
  toggleLights: function(){
    this.areLightsOn = !this.areLightsOn;
  }
};
