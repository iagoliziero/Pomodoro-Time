function ArrowButton(props) {
    return (
        <button 
        {...props} 
        className="text-red-main text hover:text-zinc-900">
            {props.children}
        </button>
    )
}

export default ArrowButton;