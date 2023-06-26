// tsx often use as react components file

// PascalCasing
function Message(){
    // JSX: JavaScript XML, allows us to easily create dynamtic content
    const name = "";
    if (name)
        return <h1>Hello {name}</h1>;
    return <h1>Hello World</h1>;
}

export default Message;