const initialState = {
    data: [
        {
            email: "badamovicz0@amazon.co.jp",
            firstName: "Biddie",
            lastName: "Adamovicz",
            password: "5oCcxhh",
            phoneNumber: "03409009795",
            cnicId: "42311-7199985-0"
        },
        {
            email: "abuckel1@go.com",
            firstName: "Ashely",
            lastName: "Buckel",
            password: "1ovfL8WF",
            phoneNumber: "03422965318",
            cnicId: "42311-2522615-6"
        },
        {
            email: "gpinnigar2@gmpg.org",
            firstName: "Graham",
            lastName: "Pinnigar",
            password: "8MUMXBOj94T",
            phoneNumber: "03495722220",
            cnicId: "42311-4141623-4"
        },
        {
            email: "hbesnardeau3@sciencedaily.com",
            firstName: "Hewe",
            lastName: "Besnardeau",
            password: "PklwGjSTjL",
            phoneNumber: "03401910876",
            cnicId: "42311-9853920-9"
        },
        {
            email: "lbail4@dot.gov",
            firstName: "Laney",
            lastName: "Bail",
            password: "NG9HAzj",
            phoneNumber: "03410873076",
            cnicId: "42311-0124527-0"
        }
    ]
}

const vendorReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_VENDOR_DATA':
            return state;
        default:
            return state;
    }
}

export default vendorReducer;