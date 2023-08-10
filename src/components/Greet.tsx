type GreetProps= {
    name: string
    messageCount?: number
    isLoggedIn: Boolean
}
// the GreetProps object being called doesn't need to be a GreetProps object explicitly but instead we can 
// break it into components like name: {} messageCount: {} and isLoggedIn: {}
export const Greet = (props:GreetProps) => {
    const {messageCount = 0} = props
    return (
        <div>
            <h2>
                {
                    props.isLoggedIn ? `Welcome ${props.name}! you have ${props.messageCount} vals` : `Welcome guest`
                }
            </h2>
        </div>
    )
}