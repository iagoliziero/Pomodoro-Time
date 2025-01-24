function ButtonAdd(props) {
    return (
        <button
        {...props}
        className=" p-2 rounded-full border w-32 text-center border-red-main hover:border-zinc-900 hover:scale-105">
            {props.children}
        </button>
    )
}

export default ButtonAdd;