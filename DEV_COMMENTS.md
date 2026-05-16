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

    overview
        Uses rtkq,
        use transform response to shape the reposne type
        use preparedHeaders to tokenize
        We also set params. First include it as a type file and add the params: args parameter in basequery

    GET
        queryFN
        uses 2 API calls to merge to a single res
        uses Promise.allSettled so only resolved ones are considered
        when Promis.allSettled is used type changes fro Promise.all will break, fixed that

        added params with relevant params type

        added tags by providedTags

    UPDATE
        id is passed as parameter, doesnt use params argument

        invalidated tags
    
    DELETE

         id is passed as parameter, doesnt use params arg

        invalidated tags

    Search
        added search bar with debounce hook




