import GeneralBody from '../../Components/generalBody/GeneralBody'
import AreaDropDown from '../../Components/AreaDropdown/AreaDropDown'
import AnimalCards from '../../Components/AnimalCards/AnimalCards'
import './reportsPanel.css'

const AppointmentsPanel = () => {
    return (
        <div className='general-body-container'>
            <GeneralBody panelTitle={"פאנל דיווחים"}>
                <AreaDropDown></AreaDropDown>
                <AnimalCards></AnimalCards>
            </GeneralBody>
        </div>
    )
}

export default AppointmentsPanel