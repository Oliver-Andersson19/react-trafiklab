import React from 'react'

function TrainTable(props) {
  return (
    <table className="table">
      
      {props.trips.map((trip) => {
        return <React.Fragment key={trip.index}>
          
            <thead>
              <tr>
                <th>Avgång</th>
                <th className='italic'>Nr.</th>
                <th>Från</th>
                <th>Till</th>
                <th>Ankomst</th>
              </tr>
            </thead>

          {trip.stops.map((stop) => {
            return (
              <tbody>
                <tr>
                  <td>{stop.departureTime}</td>
                  <td className="bold">{stop.tripId}</td>
                  <td>{stop.departureLocation}</td>
                  <td>{stop.arrivalLocation}</td>
                  <td>{stop.arrivalTime}</td>
                </tr>
              </tbody>
            )
        })}
          </React.Fragment>
      })}

      
      
    </table>
  )
}

export default TrainTable