function Button({children, version, type, isDisabled}) {
    return (
        <button className={`btn btn-${version}`} type={type} disabled={isDisabled} >
            {children}
        </button>
    )
}

Button.defaultProps = {
    version: "primary",
    type: "button",
    isDisabled: true
}



export default Button