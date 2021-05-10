const ADD_MESSAGE = 'ADD_MESSAGE'


let initialState = {

    usersData: [
        {name: 'Yana Y.', id: '1'},
        {name: 'Pedro T', id: '2'},
        {name: 'Vika M.', id: '3'},
        {name: 'Egor L.', id: '4'},
        {name: 'Nikita G.', id: '5'},
        {name: 'Liza O.', id: '6'},
        {name: 'Olya K.', id: '7'},

    ],
    usersMessages: [
        {name: 'Nikola', id: '', messagePost: 'It test message'},
        {name: 'Nikola', id: '', messagePost: 'It test message'},
        {name: 'Nikola', id: '', messagePost: 'It test message'},
    ]
}

const addMessageReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_MESSAGE: 
            let newMessage = {
                name: 'Nikola',
                id: '1',
                messagePost: action.newMessageBody
            }

            return {
                ...state,
                usersMessages: [...state.usersMessages, newMessage]
            }


        default:
            return state;
    }
}

export default addMessageReducer;
export const addMessage = (newMessageBody) => ({type: ADD_MESSAGE, newMessageBody})

