const apiKey = "d5009621-497e-404f-b93c-6c9309f60247";


function getLocationId(location) {
    return fetch(`https://api.resrobot.se/v2.1/location.name?input=${location}&format=json&accessId=${apiKey}`)
        .then((response) => {return response.json()});
    
}

function getDepartingTrains(from, to) {
    return fetch(`https://api.resrobot.se/v2.1/trip?format=json&originId=${from}&destId=${to}&passlist=true&showPassingPoints=true&accessId=${apiKey}`)
        .then((response) => {return response.json()});
}


export default function getTrainData(from, to, callback) {
    
    let tripData = {};

    getLocationId(from).then( (data) => {

        tripData.fromName = data.stopLocationOrCoordLocation[0].StopLocation.name;
        tripData.fromId = data.stopLocationOrCoordLocation[0].StopLocation.extId;

        return getLocationId(to);

    }).then( (data) => {
        
        tripData.toName = data.stopLocationOrCoordLocation[0].StopLocation.name;
        tripData.toId = data.stopLocationOrCoordLocation[0].StopLocation.extId;
        
        return getDepartingTrains(tripData.fromId, tripData.toId);

    }).then( (data) => {

        console.log(data.Trip)
        
        let trips = []

        for (let i = 0; i < data.Trip.length; i++) {
            const byte = data.Trip[i];
            
            let trip = {
                stops: []
            }
            console.log(byte)

            byte.LegList.Leg.forEach(element => {
                
                trip["index"] = i;
                trip.stops.push({
                    departureLocation: element.Origin.name,
                    arrivalLocation: element.Destination.name,
                    arrivalTime: element.Destination.time.substring(0, element.Destination.time.length - 3),
                    departureTime: element.Origin.time.substring(0, element.Origin.time.length - 3),
                    tripId: element.number
                })
            })

            trips.push(trip)
        }

        callback(trips);
    })

}