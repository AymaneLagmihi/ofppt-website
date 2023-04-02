export default function Error({statusCode}) {
    return(
        <>
            <h1>{statusCode}</h1>
        </>
    )
}

Error.getInitialProps = ({res , err})=>{
    const statusCode = res ? res.statusCode : err ? err.statusCode: 404
    return{statusCode}
}