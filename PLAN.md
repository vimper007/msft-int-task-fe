App Router

    We have these routes
    /login
    /signup
    /task
    /login

    /task - is a protected route



Protected Route

        this was created by simply checking the auth state, so inside the protected route it will redirect to /login if unauthenticated...
    else
        it will go to tasks page....



Login

    API Call
        REST API ---> fetch api.
        in service layer auth.api.ts, only an async func w/o any try catch


    Login Page
        invoke API, inside try catch, 
        dispatch to store.
        invoke localstorage helper to set auth info
        naviagete to /tasks

        TODO - add loading, error states


Signup
    
    API Call
        REST API ---> axios.
        in service layer auth.api.ts, only an async func w/o any try catch

    
    Signup Page
        invoke API, inside try catch, 
        dispatch to store.
        invoke localstorage helper to set auth info
        naviagete to /tasks
        

Task

    Uses rtkq,
    use transform response to shape the reposne type
    use preparedHeaders to tokenize


