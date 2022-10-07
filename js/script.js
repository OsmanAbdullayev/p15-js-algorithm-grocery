try {
	let time = 1;
	const wage = 3;
	const _3dollar = ["çorək", "yağ", "çay"];
	const _6dollar = ["yağ", "ət"];
	const _9dollar = ["qarpız", "pendir", "ət"];
	const _18dollar = ["dondurma", "un", "toyuq"];
	const _24dollar = ["ət", "mərci", "portağal", "süd"];
	const _millionDollar = "Lamborghini";

	for (let time = 1; time <= 333334; time++) {
		let income = time * wage;

		if (income == 3) {
			console.log("Mən " + income + " dollar qazansam");
			console.log(`${_3dollar.join(", ")} ala bilərəm.`);
			console.log("");
		} else if (income == 6) {
			console.log("Mən " + income + " dollar qazansam");
			console.log(`${_6dollar.join(", ")} ala bilərəm.`);
			console.log("");
		} else if (income == 9) {
			console.log("Mən " + income + " dollar qazansam");
			console.log(`${_9dollar.join(", ")} ala bilərəm.`);
			console.log("");
		} else if (income == 18) {
			console.log("Mən " + income + " dollar qazansam");
			console.log(`${_18dollar.join(", ")} ala bilərəm.`);
			console.log("");
		} else if (income == 24) {
			console.log("Mən " + income + " dollar qazansam");
			console.log(`${_24dollar.join(", ")} ala bilərəm.`);
			console.log("");
		} else if (income == 1000002) {
			console.log("Mən " + [income - 2] + " dollar qazansam, özümə");
			console.log(`${_millionDollar} alacam =D.`);
			console.log("");
		}
	}
} catch {
	console.log("Xəta baş verdi.");
} finally {
	console.log("Proqram xətasız icra edildi.");
}
