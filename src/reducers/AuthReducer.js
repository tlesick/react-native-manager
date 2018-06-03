import { 
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER
} from '../actions/types';

const INITIAL_STATE = { 
    email: '',
     password: '',
     user: null,
     error: '',
     loading: false,

    };
// remember the = sign means or use this default

// common error: misspelling of the import email_changed
// the program will still work, but since the 
// reducer cannot take anything that is undefined
// the reducer is never ran

export default (state = INITIAL_STATE, action) => {
    console.log(action);
    switch (action.type) {
        case EMAIL_CHANGED:
        // below line means, make a NEW OBJECT with all the 
        // properties of the exisiting state, then defined the action
        // email and give it all the properties and overide the object
            return { ...state, email: action.payload };

        case PASSWORD_CHANGED:
            return { ...state, password: action.payload };

        case LOGIN_USER_SUCCESS:
            return { ...state, user: action.payload, ...INITIAL_STATE };

            // rather than displaying
            //  error: '', loading: false, email: '', password: '' 
            // ...INITIAL_STATE can be used
        
        case LOGIN_USER_FAIL:
            return { ...state, error: 'Authentication Failed', password: '', loading: false };

        case LOGIN_USER:
            return { ...state, loading: true, error: '' };  

        default: 
            return state;
    }
};
