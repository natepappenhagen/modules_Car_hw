
console.log("Car.js is alive");


const car = {
	color: "red",
	convertible: true,
	speed: 0,
	accelerate(speed) {
		this.speed += speed;
		console.log("The car is accelerating.")
		return console.log(`speed was: ${this.speed -= speed}, speed is now: ${this.speed += speed}`)
	},
	decelerate(speed) {
		this.speed -= speed;
		console.log("The car is decelerating.")
		return console.log(`speed was: ${this.speed += speed}, speed is now: ${this.speed -= speed}`)
	}
}

car.accelerate(20);

car.decelerate(5);

module.exports = car;

