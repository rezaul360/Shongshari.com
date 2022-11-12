import React, { useEffect, useReducer } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProfileServices from '../../../../api/ProfileServices';
import { singleKaziAction } from '../../../../redux/actions/kazi/Kazi';
import { cityFunction, countryFunction } from '../../../../redux/actions/ProfileAction';
import { customPosition } from '../../../../utils/Modals';

const KaziProfileInput = ({ singleKaziData, id }) => {
    let dispatch = useDispatch();
    const { city, country, skinTone, jobs, hobbies } = useSelector(
        (state) => state.profileValue
    );
    let [state, setState] = useReducer(
        (state, newState) => ({ ...state, ...newState }),
        {
            email: "",
            intro: "",
            name: "",
            country_id: "",
            city_id: "",
            birthdate: "",
            gender: "",
            birthplace: "",
        }
    );

    useEffect(() => {
        dispatch(countryFunction());
        dispatch(cityFunction());
    }, [dispatch]);

    useEffect(() => {
        if (singleKaziData) {
            setState({
                email: singleKaziData?.email,
                name: singleKaziData?.name,
                fee: singleKaziData?.fee,
                phone: singleKaziData?.phone,
                gender: singleKaziData?.gender,
                birthplace: singleKaziData?.birthplace,

                country_id: singleKaziData?.country?.id,
                city: singleKaziData?.city?.id,
            });
        }
    }, [singleKaziData]);


    const inputChange = (e) => {
        const target = e.target;
        const name = target.name;
        let value = target.value;
        setState({
            [name]: value,
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log("aboutProfile :>> ", aboutProfile);

        // console.log("data :>> ", data);
        let res = await ProfileServices.updateKaziProfile(state);
        // console.log("res", res);
        if (res.status === 201) {
            dispatch(singleKaziAction(id));
            customPosition("center", "success", res.data.message);
        } else {
            customPosition("center", "error", res.data.message);
        }
    };
    let countrySelect = "";

    if (country?.data) {
        countrySelect = country?.data.map((country, index) => (
            <option
                key={index}
                value={country.id}
                selected={state.country_id == country.id}
            >
                {country.name}
            </option>
        ));
    }

    let citySelect = "";
    if (city?.data && state.country_id) {
        citySelect = city.data
            .filter((city) => city.country_id == state.country_id)
            .map((upazila, index) => (
                <option
                    key={index}
                    value={upazila.id}
                    selected={upazila.id == state.city}
                >
                    {upazila.name}
                </option>
            ));
    }
    return (
        <>
            <div className="input-info-box mt-30">
                <div className="header">About your Profile</div>
                <div className="content">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="my-input-box">
                                <label>Kazi Name</label>
                                <input
                                    type="text"
                                    name={"name"}
                                    value={state.name}
                                    placeholder="Kazi Profile Name"
                                    onChange={inputChange}
                                />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="my-input-box">
                                <label>Kazi Email</label>
                                <input
                                    type="text"
                                    placeholder="Kazi Email "
                                    name={"email"}
                                    value={state.email}
                                    onChange={inputChange}
                                />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="my-input-box">
                                <label>Kazi phone</label>
                                <input
                                    type="text"
                                    placeholder="Kazi Phone "
                                    name={"phone"}
                                    value={state.phone}
                                    onChange={inputChange}
                                />
                            </div>
                        </div>


                        <div className="col-md-6">
                            <div className="my-input-box">
                                <label>Country</label>
                                <select name="country_id" id="" onChange={inputChange}>
                                    <option disabled selected>
                                        Select Country
                                    </option>
                                    {countrySelect}
                                </select>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="my-input-box">
                                <label>City</label>
                                <select name="city_id" id="" onChange={inputChange}>
                                    <option disabled selected>
                                        Select City
                                    </option>
                                    {citySelect}
                                </select>
                            </div>
                        </div>



                        <div className="col-md-6">
                            <div className="my-input-box">
                                <label>Kazi Fee</label>
                                <input
                                    type="number"
                                    name={"fee"}
                                    value={state.fee}
                                    placeholder="Kazi fee"
                                    onChange={inputChange}
                                />
                            </div>
                        </div>


                        <div className="buttons  mt-30">
                            <button
                                type="submit"
                                className="custom-button"
                                onClick={handleSubmit}
                            >
                                Save Changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default KaziProfileInput;