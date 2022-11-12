import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import KaziService from '../../../../../api/kaziService';
import { KaziComponentAction } from '../../../../../redux/actions/kazi/Kazi';
import { profileHeaderNow } from '../../../../../redux/actions/ProfileAction';
import Loading from '../../../../../utils/Loading';
import { customPosition } from '../../../../../utils/Modals';
import Loader from '../../../../Loader';

const KaziList = () => {
    let dispatch = useDispatch();
    const [allKaziData, setAllKaziData] = useState([]);
    let getKaziListData = async () => {
        let res = await KaziService.allKaziLis();
        // console.log("res :>> ", res);
        if (res.status === 200) {
            setAllKaziData(res.data);
        }
    };

    let hireKazi = async (id) => {
        let res = await KaziService.hire(id);
        if (res.status === 201) {
            customPosition("center", "success", res.data?.message);
        } else {
            customPosition("center", "error", res.data?.message);
        }
    };

    useEffect(() => {
        getKaziListData();
    }, []);

    let kaziCard = <Loading />


    if (allKaziData?.data) {
        kaziCard = allKaziData?.data.map((kazi) => (
            <div className="cardAgent">
                <div className="image">
                    <img src={kazi?.profile_photo} alt="" />
                </div>
                <div>
                    <div className="texts-h3">
                        <h2>Name:</h2>
                        <h3>{kazi?.name}</h3>
                    </div>
                    <div className="texts-h3">
                        <h2>Email:</h2>
                        <h3>{kazi?.email}</h3>
                    </div>
                    <div className="texts-h3">
                        <h2>Phone:</h2>
                        <h3>{kazi?.phone}</h3>
                    </div>
                    <div className="texts-h3">
                        <h2>Fee:</h2>
                        <h3>{kazi?.fee}</h3>
                    </div>
                    <div className="texts-h3">
                        <h2>Service:</h2>
                        {kazi?.services.map((service) => (
                            <h3 className="h3-small">{service.name}</h3>
                        ))}
                    </div>
                    <div className="texts-button text-center">
                        <button onClick={() => hireKazi(kazi?.id)}>Hire Kazi</button>
                    </div>
                </div>
            </div>
        ));
    }
    return (
        <div>
            <div className="texts-button">
                <button
                    style={{ width: "20%", margin: "0" }}
                    onClick={() => {
                        dispatch(KaziComponentAction("componentKazi"))
                        dispatch(profileHeaderNow("Kazi Profile Info"));

                    }}
                >
                    <i class="fa-solid fa-backward"></i> Back

                </button>
            </div>
            <div
                className="d-flex "
                style={{ justifyContent: "space-between", flexWrap: "wrap" }}
            >
                {kaziCard}
            </div>
        </div>
    );
};

export default KaziList;