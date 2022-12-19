import React, {useContext} from 'react'
import Header from '../../Components/Header.tsx'
import appContext from '../../Components/context.ts'

const FakeProject = ():JSX.Element => {
    const myContext = useContext(appContext)
    return (
        <>
        <Header/>
        <h2>FakeProject</h2>
        {myContext}
        </>
    )
}
export default FakeProject