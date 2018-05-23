import React from 'react'
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps'

const MapWithAMarker = withGoogleMap(({lat, lng}) =>
  <GoogleMap
    defaultZoom={2}
    defaultCenter={{ lat: parseInt(lat), lng: parseInt(lng) }}
  >
    <Marker
      position={{ lat: parseInt(lat), lng: parseInt(lng)}}
    />
  </GoogleMap>
)
const Author = (props) =>{
  let author = props.location.author[0]
  console.log('author', author)
    return (
      <div>
      <div className="card bg-light mb-3"
           style={{
             marginLeft: '30%',
             maxWidth: "40%"}}>
      <div className="card-header">About the Author:</div>
      <div className="card-body">
      <p className="card-text">Name: {author.name}</p>
      <p className="card-text">Username: {author.username}</p>
      <div className="card-text">Website: <a href={'http://www.' + author.website}>{author.website}</a></div>
      <p className="card-text">Email: {author.email}</p>
      <p className="card-text">Phone: {author.phone}</p>
      <p className="card-text">Company: {author.company.name}</p>
      <p className="card-text">Company Catchphrase: {author.company.catchPhrase}</p>
    <p className="card-text">Company bs: {author.company.bs}</p>
      </div>
    </div>
    <div
      style={{
        width: '50%',
        marginLeft: '25%'}}>
    <MapWithAMarker
          lat={author.address.geo.lat}
          lng={author.address.geo.lng}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
    </div>
  </div>
    )
}
export default Author;
