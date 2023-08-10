type StatusProps = {
    status: 'loading'|'success'|'error'
}

export const Status = (props: StatusProps) => {
    let message 
    if (props.status === 'loading')
    {
        message= 'loading..'
    }
    else if (props.status === 'success'){
        message='Data fetched succesfuly'
    }
    else if (props.status==='error'){
        message= 'error fetching data..'
    }
    return (
        <div>
            <h2>{message}</h2>
        </div>
    )
}