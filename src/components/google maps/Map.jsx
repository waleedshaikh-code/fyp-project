import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import ReactMapGL, { Marker, Popup, GeolocateControl, NavigationControl } from 'react-map-gl';
import VanSvg from '../../assets/van.png';


const styles = (theme) => ({
    btn: {
        background: 'none',
        cursor: 'pointer',
        border: 'none',
    },
    svg: {
        width: 30,
        height: 30,
    },
    popup: {
        marginLeft: 15,
    },
});

const API_ACCESS_TOKEN = 'pk.eyJ1IjoidW1lcnNoYWlraDk3IiwiYSI6ImNrM2c0NHV6djAwa2UzY21uMHl0bTMzcGwifQ.FuFZIFDUvc7mGUWlx6nt7Q';

const Map = (props) => {
    const { classes, viewport, setViewPort, vanData } = props;
    const [selectedVan, setSelectedVan] = useState(null);

    useEffect(() => {
        const listener = e => {
            if (e.key === "Escape") {
                setSelectedVan(null);
            }
        };
        window.addEventListener("keydown", listener);

        return () => {
            window.removeEventListener("keydown", listener);
        };
    }, []);


    return (
        <ReactMapGL
            {...viewport}
            mapStyle="mapbox://styles/mapbox/dark-v9" // dark mode
            mapboxApiAccessToken={API_ACCESS_TOKEN}
            onViewportChange={(viewport) => { setViewPort(viewport) }}
        >
            <GeolocateControl
                style={{ position: 'absolute', top: 0, left: 0, margin: 10 }}
                positionOptions={{ enableHighAccuracy: true }}
                trackUserLocation={true}
            />
            {
                vanData.map((van, index) => (
                    <Marker
                        key={index}
                        longitude={van.coordinates[0]}
                        latitude={van.coordinates[1]}
                    >
                        <button className={classes.btn}
                            onClick={(e) => {
                                e.preventDefault();
                                setSelectedVan(van)
                            }}>
                            <img src={VanSvg} alt="VAN_ICON" className={classes.svg} />
                        </button>
                    </Marker>))
            }
            <div style={{ position: 'absolute', right: 0, margin: 10 }}>
                <NavigationControl />
            </div>
            {selectedVan ? (
                <Popup
                    longitude={selectedVan.coordinates[0]}
                    latitude={selectedVan.coordinates[1]}
                    className={classes.popup}
                    onClose={() => { setSelectedVan(null) }}
                >
                    <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <p style={{ fontWeight: 'bold' }}>Driver Name: </p>
                        <p style={{ paddingLeft: '6px' }}>{selectedVan.driverName}</p>
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <p style={{ fontWeight: 'bold', }}>Van Reg#: </p>
                        <p style={{ paddingLeft: '6px', }}>{selectedVan.vanNumber}</p>
                    </span>
                </Popup>)
                :
                null
            }

        </ReactMapGL >


    )
}

const mapStateToProps = (state) => {
    return {
        //loginError: state.authReducer.loginError,
        //role: state.authReducer.role,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        //updateAdminData: (...args) => dispatch(updateAdminData(...args))
        // login: (...args) => dispatch(login(...args)),
        // logout: (...args) => dispatch(logout(...args)),
        // clearAuthReducer: (...args) => dispatch(clearAuthReducer(...args))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Map));