import React from 'react'
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps'
import {Link} from 'react-router-dom'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actions from '../actions/actions'

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
  let author = props.authors.filter(author => author.id == props.match.params.id)
  let Author = author[0]
  console.log('author props', props)
    return (
      <div>
      <div className="card bg-light mb-3"
           style={{
             marginLeft: '30%',
             maxWidth: "40%"}}>
      <div className="card-header">About the Author:</div>
      <div className="card-body">
      <p className="card-text">Name: {Author.name}</p>
      <p className="card-text">Username: {Author.username}</p>
      <div className="card-text">Website: <a href={'http://www.' + Author.website}>{Author.website}</a></div>
      <p className="card-text">Email: {Author.email}</p>
      <p className="card-text">Phone: {Author.phone}</p>
      <p className="card-text">Company: {Author.company.name}</p>
      <p className="card-text">Company Catchphrase: {Author.company.catchPhrase}</p>
    <p className="card-text">Company bs: {Author.company.bs}</p>
      </div>
    </div>
    <Link to="/"><button type="button" style={{marginLeft: '47%', marginBottom: '10px'}} className="btn btn-outline-secondary btn-sm">Home</button></Link>
    <div
      style={{
        width: '50%',
        marginLeft: '25%'}}>
    <MapWithAMarker
          lat={Author.address.geo.lat}
          lng={Author.address.geo.lng}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
    </div>
  </div>
    )
}
function mapStateToProps(state) {
  return {authors: state.Authors}
}
function mapDispatchToProps(dispatch) {
  return {
    Actions: bindActionCreators(Actions, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Author);
