function getMood() {
    const moods = ['Angry', 'Hungry', 'Silly', 'Quiet', 'Paranoid']
    return moods[Math.floor(Math.random() * moods.length)]
}

class JSXDemo extends React.Component {
    render() {
        return (
            <div>
                <h1>My current Mood is : {getMood()}</h1>
                {/* <img src="https://unsplash.com/photos/vnvcYOjPuQI/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjM4ODIwOTY0&force=true&w=780" /> */}
            </div>
        )
    }
}


ReactDOM.render(<JSXDemo />, document.getElementById('root'))