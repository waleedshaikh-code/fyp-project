const initialState = {
    data: [
        {
            email: "umershaikh@vanon.com",
            firstName: "Umer",
            lastName: "Shaikh",
            password: "123456",
            phoneNumber: "03489097792",
            cnicId: "42101-4225256-5"
        },
        {
            email: "spepperill0@de.vu",
            firstName: "Shela",
            lastName: "Pepperill",
            password: "w0vVjxodtII",
            phoneNumber: "03347741320",
            cnicId: "42301-5560256-6"
        },
        {
            email: "hrosthorn1@networkadvertising.org",
            firstName: "Hunter",
            lastName: "Rosthorn",
            password: "JIrgsKmWcbEP",
            phoneNumber: "03316832660",
            cnicId: "42301-5293663-5"
        },
        {
            email: "mpidgeley2@live.com",
            firstName: "Moises",
            lastName: "Pidgeley",
            password: "lyaXUjMz",
            phoneNumber: "03301238523",
            cnicId: "42301-8070462-2"
        }
    ],
}

const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_ADMIN_DATA':
            let temp = action.payload.data;
            return { ...state, data: temp };
        default:
            return state;
    }
}

export default adminReducer;