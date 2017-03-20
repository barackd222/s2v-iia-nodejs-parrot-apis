
var parrot = require("../core/parrotCore");


var routes = function (app, queue) {
  app.post('/parrot/takeoff/:action1/:action2', function (req, res) {

		try {

			var action1 = req.params.action1;
			var action2 = req.params.action2;

			console.log("API + [" + req.url + "]");

			if (action1 === "stay" && action2 === "land") {

				// Let's make some shapes with colors:
				queue.push(function () { parrot("takeoff-stay-land") });

			} else if (action1 === "up-down" && action2 === "land") {

				// Let's make some shapes with colors:
				queue.push(function () { parrot("takeoff-up-down-land") });

			} else if (action1 === "left-right" && action2 === "land") {

				// Let's make some shapes with colors:
				queue.push(function () { parrot("takeoff-left-right-land") });

			} else if (action1 === "forward-backward" && action2 === "land") {

				// Let's make some shapes with colors:
				queue.push(function () { parrot("takeoff-forward-backward-land") });

			} else if (action1 === "flip" && action2 === "land") {

				// Let's make some shapes with colors:
				queue.push(function () { parrot("takeoff-flip-land") });

			} else {

				console.log("Unknown API commands + [" + req.url + "]");
			}




		} catch (ex) {
			res.status(500).json({ error: "Something went wrong!", details: ex });
			return;
		}

    res.status(202).end();
  });


  app.get('/parrot/takeoff/:action1/:action2', function (req, res) {

		try {

			var action1 = req.params.action1;
			var action2 = req.params.action2;

			console.log("API + [" + req.url + "]");

			if (action1 === "stay" && action2 === "land") {

				// Let's make some shapes with colors:
				queue.push(function () { parrot("takeoff-stay-land") });

			} else if (action1 === "up-down" && action2 === "land") {

				// Let's make some shapes with colors:
				queue.push(function () { parrot("takeoff-up-down-land") });

			} else if (action1 === "left-right" && action2 === "land") {

				// Let's make some shapes with colors:
				queue.push(function () { parrot("takeoff-left-right-land") });

			} else if (action1 === "forward-backward" && action2 === "land") {

				// Let's make some shapes with colors:
				queue.push(function () { parrot("takeoff-forward-backward-land") });

			} else if (action1 === "flip" && action2 === "land") {

				// Let's make some shapes with colors:
				queue.push(function () { parrot("takeoff-flip-land") });

			} else {

				console.log("Unknown API commands + [" + req.url + "]");
			}




		} catch (ex) {
			res.status(500).json({ error: "Something went wrong!", details: ex });
			return;
		}

    res.status(202).end();
  });


};

module.exports = routes;  