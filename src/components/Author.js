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
  let author = props.authors.filter(author => author.id == props.match.params.id)[0]
  console.log('author props', author)
    return (
      <div>
    { author ?
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
    : 'loading'}
    <Link to="/"><button type="button" style={{marginLeft: '47%', marginBottom: '10px'}} className="btn btn-outline-secondary btn-sm">Home</button></Link>
{ author ?
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
    : 'loading'}
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
