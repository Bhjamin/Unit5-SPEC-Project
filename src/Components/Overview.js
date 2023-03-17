import { useSelector } from "react-redux"
import { selectDisplay } from "../redux/slices/displayCountrySlice"

const Overview = () => {

    const currentDisplay = useSelector(selectDisplay)

    const {borders, capital, population, continents, independent, landlocked, unMember} = currentDisplay

    return(
        <div className="stack">
            <table className="overview-table" >
                <tr>
                    <td>Borders: </td>
                    <td> {borders ? borders.map(border => <td key={border}>{border}</td>) : 'N/A'} </td>
                </tr>
                <tr>
                    <td>Capital: </td>
                    <td>{capital}</td>
                </tr>
                <tr>
                <td>Population: </td>
                <td>{population}</td>
                </tr>
                <tr>
                    <td>Continents: </td>
                    <td>{continents ? continents.map(continent => <td key={continent}>{continent}</td>) : 'N/A'}</td>
                </tr>
                <tr>
                    <td>Independent: </td>
                    <td>{independent ? "True" : "False"}</td>
                </tr>
                <tr>
                    <td>Land locked: </td>
                    <td>{landlocked ? "True" : "False"}</td>
                </tr>
                <tr>
                    <td>UN Memeber: </td>
                    <td>{unMember ? "True" : "False"}</td>
                </tr>
            </table>
        </div>
    )
}

export default Overview