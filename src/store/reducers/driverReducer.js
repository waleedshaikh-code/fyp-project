const initialState = {
    data: [
        {
            firstName: "Tracey",
            lastName: "Barczewski",
            email: "tbarczewski0@statcounter.com",
            password: "Jpca0BPQm",
            phoneNumber: "03171351146",
            cnicId: "42321-7021462-3",
            vanNumber: "OXV-3344",
            licenseNumber: "553-49-7402",
            area: "johar"
        },
        {
            firstName: "Sela",
            lastName: "Woolway",
            email: "swoolway1@deviantart.com",
            password: "QlKU3veLl",
            phoneNumber: "03139286665",
            cnicId: "42321-0998174-4",
            vanNumber: "UVU-3947",
            licenseNumber: "886-52-2227",
            area: "gulshan"
        },
        {
            firstName: "Cristine",
            lastName: "Trolley",
            email: "ctrolley2@eepurl.com",
            password: "sQhpMVLxsBIg",
            phoneNumber: "03153712919",
            cnicId: "42321-9072265-7",
            vanNumber: "KET-4389",
            licenseNumber: "765-07-0127",
            area: "saddar"
        },
        {
            firstName: "Mikkel",
            lastName: "Sallenger",
            email: "msallenger3@people.com.cn",
            password: "0ElKqB2S",
            phoneNumber: "03113041289",
            cnicId: "42321-9145456-1",
            vanNumber: "JPU-0753",
            licenseNumber: "528-97-3903",
            area: "clifton"
        },
        {
            firstName: "Giraud",
            lastName: "Lamboll",
            email: "glamboll4@fda.gov",
            password: "bikZuSaf2hZ",
            phoneNumber: "03117734842",
            cnicId: "42321-7122523-7",
            vanNumber: "ITU-9465",
            licenseNumber: "634-72-3478",
            area: "clifton"
        },
        {
            firstName: "Midge",
            lastName: "Zealander",
            email: "mzealander5@blogtalkradio.com",
            password: "mycQBJkj5Gg",
            phoneNumber: "03110563223",
            cnicId: "42321-7321062-0",
            vanNumber: "PXD-8086",
            licenseNumber: "425-04-6881",
            area: "clifton"
        },
        {
            firstName: "Sukey",
            lastName: "Hollows",
            email: "shollows6@buzzfeed.com",
            password: "b23HY7d",
            phoneNumber: "03148230855",
            cnicId: "42321-5115987-5",
            vanNumber: "CFP-1137",
            licenseNumber: "758-69-5559",
            area: "clifton"
        },
        {
            firstName: "Amelia",
            lastName: "Goldspink",
            email: "agoldspink7@yale.edu",
            password: "LQMdKRu",
            phoneNumber: "03161205545",
            cnicId: "42321-4617386-0",
            vanNumber: "BBB-5085",
            licenseNumber: "601-48-6894",
            area: "gulshan"
        },
        {
            firstName: "Taylor",
            lastName: "Bambery",
            email: "tbambery8@mashable.com",
            password: "UwNnf1ZOm",
            phoneNumber: "03103144892",
            cnicId: "42321-3089968-1",
            vanNumber: "CWS-7302",
            licenseNumber: "379-65-9635",
            area: "gulshan"
        },
        {
            firstName: "Guthrey",
            lastName: "Ben-Aharon",
            email: "gbenaharon9@fc2.com",
            password: "lYeVuZOhA2",
            phoneNumber: "03182238369",
            cnicId: "42321-5118160-1",
            vanNumber: "VSW-9615",
            licenseNumber: "148-59-6031",
            area: "gulshan"
        }
    ]
}

const driverReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_DRIVER_DATA':
            return state;
        default:
            return state;
    }
}

export default driverReducer;