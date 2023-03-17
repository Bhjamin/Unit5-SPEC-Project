import { useSelector } from "react-redux"
import { selectDisplay } from "../redux/slices/displayCountrySlice"

const Symbols = () => {

    const currentDisplay = useSelector(selectDisplay)

    const {coatOfArms, flags, name} = currentDisplay

    return(
        <div className="symbols">
            <div className="stack">
                <h2>Flag of {name.official}</h2>
                {flags ? <img src={flags.png}/> : 'N/A'}
            </div>
            <div className="stack">
            <h2>Coat of arms of {name.official}</h2>
            {coatOfArms ? <img src={coatOfArms.png}/> : 'N/A'}
            </div>
        </div>
    )
}

export default Symbols