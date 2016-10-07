'use strict';

var Drone = require('../../node_modules/rolling-spider/');
var temporal = require('../../node_modules/temporal/');

var d = new Drone(process.env.UUID);


var takeOffStayLand = function (command) {

    console.log("Inside Command takeOffStayLand");

    d.connect(function () {
        d.setup(function () {
            d.flatTrim();
            d.startPing();
            d.flatTrim();
            console.log('Connected to drone', d.name);

            temporal.queue([
                {
                    delay: 5000,
                    task: function () {
                        console.log('Getting ready for takeOff!');
                        d.takeOff();
                        d.flatTrim();
                    }
                },
                {
                    delay: 5000,
                    task: function () {
                        console.log('Time to land');
                        d.land();
                    }
                },
                {
                    delay: 5000,
                    task: function () {
                        console.log('disconnect and clearing temporal');
                        temporal.clear();
                        d.disconnect();

                        //process.exit(0);
                    }
                }
            ]);
        });
    });

}

var takeOffUpDownLand = function (command) {

    console.log("Inside Command takeOffUpDownLand");

    d.connect(function () {
        d.setup(function () {
            d.flatTrim();
            d.startPing();
            d.flatTrim();
            console.log('Connected to drone', d.name);

            temporal.queue([
                {
                    delay: 5000,
                    task: function () {
                        console.log('Getting ready for takeOff!');
                        d.takeOff();
                        d.flatTrim();
                    }
                },
                {
                    delay: 4500,
                    task: function () {
                        console.log('Going up');
                        d.up({ steps: 20 });
                    }
                },
                {
                    delay: 4500,
                    task: function () {
                        console.log('Going down');
                        d.down({ steps: 20 });
                    }
                },
                {
                    delay: 5000,
                    task: function () {
                        console.log('Time to land');
                        d.land();
                    }
                },
                {
                    delay: 5000,
                    task: function () {
                        console.log('disconnect and clearing temporal');
                        temporal.clear();
                        d.disconnect();

                        //process.exit(0);
                    }
                }
            ]);
        });
    });

}

var takeOffLeftRightLand = function (command) {

    console.log("Inside Command takeOffLeftRightLand");

    d.connect(function () {
        d.setup(function () {
            d.flatTrim();
            d.startPing();
            d.flatTrim();
            console.log('Connected to drone', d.name);

            temporal.queue([
                {
                    delay: 5000,
                    task: function () {
                        console.log('Getting ready for takeOff!');
                        d.takeOff();
                        d.flatTrim();
                    }
                },
                {
                    delay: 4500,
                    task: function () {
                        console.log('Going left');
                        d.tiltLeft({ steps: 12, speed: 100 });
                    }
                },
                {
                    delay: 4500,
                    task: function () {
                        console.log('Going right');
                        d.tiltRight({ steps: 12, speed: 100 });
                    }
                },
                {
                    delay: 5000,
                    task: function () {
                        console.log('Time to land');
                        d.land();
                    }
                },
                {
                    delay: 5000,
                    task: function () {
                        console.log('disconnect and clearing temporal');
                        temporal.clear();
                        d.disconnect();

                        //process.exit(0);
                    }
                }
            ]);
        });
    });

}

var takeOffForwardBackwardLand = function (command) {

    console.log("Inside Command takeOffForwardBackwardLand");

    d.connect(function () {
        d.setup(function () {
            d.flatTrim();
            d.startPing();
            d.flatTrim();
            console.log('Connected to drone', d.name);

            temporal.queue([
                {
                    delay: 5000,
                    task: function () {
                        console.log('Getting ready for takeOff!');
                        d.takeOff();
                        d.flatTrim();
                    }
                },
                {
                    delay: 4500,
                    task: function () {
                        console.log('Going forward');
                        d.forward({ steps: 20 });
                    }
                },
                {
                    delay: 4500,
                    task: function () {
                        console.log('Going backward');
                        d.backward({ steps: 20 });
                    }
                },
                {
                    delay: 5000,
                    task: function () {
                        console.log('Time to land');
                        d.land();
                    }
                },
                {
                    delay: 5000,
                    task: function () {
                        console.log('disconnect and clearing temporal');
                        temporal.clear();
                        d.disconnect();

                        //process.exit(0);
                    }
                }
            ]);
        });
    });

}

var takeOffFlipLand = function (command) {

    console.log("Inside Command takeOffFlipLand");

    d.connect(function () {
        d.setup(function () {
            d.flatTrim();
            d.startPing();
            d.flatTrim();
            console.log('Connected to drone', d.name);

            temporal.queue([
                {
                    delay: 5000,
                    task: function () {
                        console.log('Getting ready for takeOff!');
                        d.takeOff();
                        d.flatTrim();
                    }
                },
                {
                    delay: 5000,
                    task: function () {
                        console.log('OMG Flip!');
                        d.frontFlip();
                    }
                },
                {
                    delay: 5000,
                    task: function () {
                        console.log('Time to land');
                        d.land();
                    }
                },
                {
                    delay: 5000,
                    task: function () {
                        console.log('disconnect and clearing temporal');
                        temporal.clear();
                        d.disconnect();

                        //process.exit(0);
                    }
                }
            ]);
        });
    });

}

function commander(command) {

    if (command.toUpperCase() === "TAKEOFF-STAY-LAND") {

        console.log("Command Parrot to Takeoff, Stay and Land");
        takeOffStayLand();

    } else if (command.toUpperCase() === "TAKEOFF-UP-DOWN-LAND") {

        console.log("Command Parrot to Takeoff, go up, go down and Land");
        takeOffUpDownLand();

    } else if (command.toUpperCase() === "TAKEOFF-LEFT-RIGHT-LAND") {

        console.log("Command Parrot to Takeoff, go left, go right and Land");
        takeOffLeftRightLand();

    } else if (command.toUpperCase() === "TAKEOFF-FORWARD-BACKWARD-LAND") {

        console.log("Command Parrot to Takeoff, go forward, go backward and Land");
        takeOffForwardBackwardLand();

    } else if (command.toUpperCase() === "TAKEOFF-FLIP-LAND") {

        console.log("Command Parrot to Takeoff, Flip and Land");
        takeOffFlipLand();

    }
}

module.exports = commander;