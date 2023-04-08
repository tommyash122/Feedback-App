function Header({text, bgColor, textColor}) {
    const headerStyle = {
        background: bgColor,
        color: textColor
    }

    return (
        <header style={headerStyle}>
            <div className="container">
                <h2>{text}</h2>
            </div>
        </header>
    )
}

Header.defaultProps = {
    text: "feedback UI",
    bgColor: "rgba(0,0,0,0.4)", //rgba = red green blue alpha
    textColor: "#ff6a95"
}

export default Header