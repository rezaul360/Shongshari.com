import { useReducer } from "react";
import UtilsServices from "../../../../../api/UtilsServices";
import { customPosition } from "../../../../../utils/Modals";

function Review({ id, type, name }) {
  let [state, setState] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      count: 1,
      dataValue: [],
      star: 0,
      details: "",
    }
  );
  let activeStar = (i) => {
    // //console.log("i :>> ", i);
    setState({ star: i });
  };
  let starsRating = [];
  for (let i = 1; i <= 5; i++) {
    starsRating.push(
      <i
        className={
          state.star === i || state.star > i
            ? "fas fa-star active"
            : "fas fa-star"
        }
        onClick={() => activeStar(i)}
        key={i}
      ></i>
    );
  }

  let review = async () => {
    let data = {
      user_id: id,
      type: type,
      details: state.details,
      rating: state.star,
    };
    let res = await UtilsServices.reviewUser(data);
    if (res.status === 201) {
      customPosition("center", "success", res.data.message);
      // getagentListData();
      setState({
        count: 1,
        dataValue: [],
        star: 0,
        details: "",
      });
    } else {
      customPosition("center", "error", res.data.message);
    }
  };
  return (
    <div className="my-3 review">
      <div>
        <h4 className="mt-4">Review {name}</h4>
        <textarea
          placeholder="Review"
          name="details"
          value={state.details}
          onChange={(e) => setState({ details: e.target.value })}
        ></textarea>
        <div className="stars">{starsRating}</div>

        <button className="custom-button btn-block mx-auto" onClick={review}>
          Review
        </button>
      </div>
    </div>
  );
}

export default Review;
