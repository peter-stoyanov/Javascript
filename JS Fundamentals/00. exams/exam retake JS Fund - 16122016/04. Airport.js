function Airport(input) {
    let onland = new Map();
    let register = new Map();
    let id, town, num, action;

    for (let data of input) {
        let inputarr = data.split(' ');
        id = inputarr[0]; town = inputarr[1]; num = inputarr[2]; action = inputarr[3];
        //is valid ? ...
        if (action == 'land') {
            if (!onland.has(id)) {
                onland.set(id, 0);
            } else {
                continue;
            }
            if (!register.has(town)) {
                register.set(town, {
                    arrivals: Number(num),
                    departures: 0,
                    planes: [id]
                });
            } else {
                register.get(town).arrivals += Number(num);
                if(register.get(town).planes.filter((item) => (item === id)).length === 0) {
                    register.get(town).planes.push(id);
                }
            }
        }
        if (action == 'depart') {
            if (onland.has(id)) {
                onland.delete(id);
            } else { continue;
            }
            if (!register.has(town)) {
                register.set(town, {
                    arrivals: 0,
                    departures: Number(num),
                    planes: [id]
                });
            } else {
                register.get(town).departures += Number(num);
                if(register.get(town).planes.filter((item) => (item === id)).length === 0) {
                    register.get(town).planes.push(id);
                }
            }
        }

    }


    //sort onland
    let onlandSorted = new Map([...onland.entries()].sort(function(firstEntry, secondEntry) {
        let nameA = firstEntry[0];
        let nameB = secondEntry[0];

        if (nameA < nameB) { //sort string ascending
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        return 0;
    }));

    //sort register
    let registerSorted = new Map([...register.entries()].sort(function(firstEntry, secondEntry) {
        let firstEntryTown = firstEntry[0];
        let firstEntryArrivals = firstEntry[1].arrivals;

        let secondEntryTown = secondEntry[0];
        let secondEntryArrivals = secondEntry[1].arrivals;

        let result = secondEntryArrivals - firstEntryArrivals;

        if(result == 0) {
            let nameA = firstEntryTown;
            let nameB = secondEntryTown;

            if (nameA < nameB) { //sort string ascending
                result = -1;
            }
            if (nameA > nameB) {
                result = 1;
            }
            //result = 0;
        }

        return result;
    }));


    //format output
    console.log('Planes left:');
    for (let id of onlandSorted.keys()){
        console.log('- ' + id);
    }
    for (let town of registerSorted.keys()){
        console.log(town);
        console.log('Arrivals: ' + registerSorted.get(town).arrivals);
        console.log('Departures: ' + registerSorted.get(town).departures);
        console.log('Planes:');
        let planes = registerSorted.get(town).planes;
        planes = planes.sort(function(firstEntry, secondEntry) {
            let nameA = firstEntry[0];
            let nameB = secondEntry[0];

            if (nameA < nameB) { //sort string ascending
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            return 0;
        });
        for (let plane of planes){
            console.log('-- ' + plane);
        }
    }

}

// Airport(
//     [ "Boeing474 Madrid 300 land",
//         "AirForceOne WashingtonDC 178 land",
//         "Airbus London 265 depart",
//         "ATR72 WashingtonDC 272 land",
//         "ATR72 Madrid 135 depart"
//     ]
// );

Airport(
    [
        "Airbus Paris 356 land",
        "Boeing London 356 land"

    ]
);