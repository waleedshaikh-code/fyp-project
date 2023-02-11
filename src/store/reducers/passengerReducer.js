const initialState = {
    data: [
        { name: 'Umer Shaikh', email: 'umershaikh@vanon.com', phone: '0348-9097792', cnic: '42101-452250053-5', pick: "abc stop", status: 1 },
        { name: 'Hussain Feroz', email: 'hussainferoz@vanon.com', phone: '0343-3096792', cnic: '42361-432250054-5', pick: "abc stop", status: 1 },
        { name: 'Fatima Kaleem', email: 'fatimakaleem@vanon.com', phone: '0333-9027792', cnic: '42101-43250053-2', pick: "abc stop", status: 1 },
        { name: 'Muhammad Bilal', email: 'muhammadbilal@vanon.com', phone: '0322-9097792', cnic: '42101-422750053-9', pick: "abc stop", status: 2 },
        { name: 'Syeda Tooba', email: 'tooba@vanon.com', phone: '0348-7093752', cnic: '45681-652250053-3', pick: "abc stop", status: 1 },
        { name: 'Anusha', email: 'anusha@vanon.com', phone: '0338-9097792', cnic: '42251-454256053-5', pick: "abc stop", status: 1 },
        { name: 'Muhammad Umer', email: 'muhammadumer@vanon.com', phone: '0332-4067792', cnic: '22401-452250053-6', pick: "abc stop", status: 2 },
        { name: 'Kumail', email: 'kumail@vanon.com', phone: '0344-9097792', cnic: '45171-455350053-5', pick: "abc stop", status: 1 },
        { name: 'Umayma Javed', email: 'umayma@vanon.com', phone: '0331-9037792', cnic: '42251-252250053-5', pick: "abc stop", status: 1 },
    ]
}

const passengerReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_PASSENGER_DATA':
            return state;
        default:
            return state;
    }
}

export default passengerReducer;