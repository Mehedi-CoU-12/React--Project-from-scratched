function InputBox(props) {
    return (
        <>
            <div className="flex flex-row justify-between rounded-md text-white gap-x-3.5">
                <div className="flex flex-col items-center">
                    <p>{props.name}</p>
                    <input
                        className="text-black w-12 text-center h-8 rounded-lg outline-none"
                        type="number"
                        value={0}
                    />
                </div>
                <div className="flex flex-col items-center">
                    <p>Current type</p>
                    <select className="text-black rounded-lg w-12 text-center h-8 outline-none">
                        <option value="usd">usd</option>
                        <option value="tk">tk</option>
                    </select>
                </div>
            </div>
        </>
    );
}

export default InputBox;
