import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import AgentService from "../../../../../api/agentService";
import KaziService from "../../../../../api/kaziService";
import { AgentComponentNowAction } from "../../../../../redux/actions/Agent/AgentAction";
import { KaziComponentAction } from "../../../../../redux/actions/kazi/Kazi";
import { profileHeaderNow } from "../../../../../redux/actions/ProfileAction";
import Loading from "../../../../../utils/Loading";
import { customPosition } from "../../../../../utils/Modals";
import Loader from "../../../../Loader";


const TopKaziList = () => {
    let dispatch = useDispatch();
    const [agents, setagents] = useState();
    let getKaziListData = async () => {
        let res = await KaziService.TopKazi();
        // console.log("res :>> ", res);
        if (res.status === 200) {
            setagents(res.data);
        }
    };

    useEffect(() => {
        getKaziListData();
    }, []);

    let hireAgent = async (id) => {
        let res = await KaziService.hire(id);
        if (res.status === 201) {
            customPosition("center", "success", res.data?.message);
        } else {
            customPosition("center", "error", res.data?.message);
        }
    };
    let agentcard = <Loading />;
    if (agents?.data) {
        agentcard = agents?.data.map((agent) => (
            <div className="cardAgent">
                <div className="image">
                    <img src={agent.profile_photo} alt="" />
                </div>
                <div>
                    <div className="texts-h3">
                        <h2>Name:</h2>
                        <h3>{agent.name}</h3>
                    </div>
                    <div className="texts-h3">
                        <h2>Email:</h2>
                        <h3>{agent.email}</h3>
                    </div>
                    <div className="texts-h3">
                        <h2>Phone:</h2>
                        <h3>{agent.phone}</h3>
                    </div>
                    <div className="texts-h3">
                        <h2>Fee:</h2>
                        <h3>{agent.fee}</h3>
                    </div>
                    <div className="texts-h3">
                        <h2>Service:</h2>
                        {agent?.services.map((service) => (
                            <h3 className="h3-small">{service.name}</h3>
                        ))}
                    </div>
                    <div className="texts-button text-center">
                        <button
                            onClick={() => hireAgent(agent.id)}>Hire Kazi</button>
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
                {agentcard}
            </div>
        </div>
    );
};

export default TopKaziList;