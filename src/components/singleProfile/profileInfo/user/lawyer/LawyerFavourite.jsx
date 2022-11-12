import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LawyerComponentNowAction } from '../../../../../redux/actions/Lawyer/LayerAction';
import { addFavouriteAction, getFavouriteLawyerAction, profileHeaderNow, RemoveFavouriteAction } from '../../../../../redux/actions/ProfileAction';

const LawyerFavourite = () => {

    const { lawyerFavourite } = useSelector((state) => state.profileValue);

    console.log(lawyerFavourite, "kjdkfjdkjfk")
    const dispatch = useDispatch()


    const isFavourite = (id) => lawyerFavourite.data?.find((item) => item.lawyer?.id === id)


    useEffect(() => {
        dispatch(getFavouriteLawyerAction())
    }, [])
    const favroutie = async (id) => {
        const deleteid = lawyerFavourite.data?.find((item) => item.lawyer?.id === id)?.id
        if (deleteid == undefined) {
            console.log("add")
            let data = {
                type: 1,
                user_id: id
            }

            const res = await dispatch(addFavouriteAction(data))

            if (res.status === 201) {
                dispatch(getFavouriteLawyerAction())


            }

        }
        else {
            console.log("remove")
            const res = await dispatch(RemoveFavouriteAction(deleteid))

            if (res.status == 200) {
                dispatch(getFavouriteLawyerAction())
            }
        }

    }

    console.log(lawyerFavourite)



    return (
        <div>
            <div className="texts-button">
                <button
                    style={{ width: "20%", margin: "0" }}
                    onClick={() => {
                        dispatch(LawyerComponentNowAction("componentLawyer"))
                        dispatch(profileHeaderNow("Lawyer Profile Info"));

                    }}
                >
                    <i class="fa-solid fa-backward"></i> Back

                </button>
            </div>
            <div
                className="d-flex "
                style={{ justifyContent: "space-between", flexWrap: "wrap" }}
            >
                {/* {agentcard} */}
                <h1>hello</h1>
            </div>
        </div>
    );
};

export default LawyerFavourite;