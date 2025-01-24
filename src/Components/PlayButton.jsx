function PlayButton(props) {
    return (
        <button 
        {...props}
        className="bg-slate-100 w-14 h-14 md:w-16 md:h-16 rounded-full text-zinc-900 flex justify-center items-center hover:bg-zinc-900 hover:text-slate-100">
            {props.children}
        </button>
    )
}

export default PlayButton;