
Particles.
init
({

// normal options
  selector:
'.background'
,
  maxParticles:
60
,

// options for breakpoints

  responsive: [
    {
      breakpoint: 5000,
      options: {
        
        maxParticles: 80,
        color: '#FFFFFF',
        connectParticles: true,
        minDistance: 120,
        speed: .25
      }
    },
    {
      breakpoint: 1800,
      options: {
        maxParticles: 60,
        color: '#FFFFFF',
        connectParticles: true,
        minDistance: 100,
        speed: .2
      }
    },
      {
        breakpoint: 768,
        options: {
          maxParticles: 30,
          color: '#FFFFFF',
          connectParticles: false,
          minDistance: 50,
          speed: .15
        }
    }, {
      breakpoint: 425,
      options: {
        maxParticles: 0,
        connectParticles: true,
        speed: .15
      }
    }, {
      breakpoint: 320,
      options: {
        maxParticles: 0

// disables particles.js
      }
    }
  ]
});
