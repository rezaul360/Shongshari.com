import { onValue, push, ref, set } from "firebase/database";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { db } from "../../firebase";
const time = new Date();
const option = {
  weekday: "long",
  month: "long",
  day: "2-digit",
  year: "numeric",
};

const ftime = time.toLocaleString("en-us", {
  hour: "numeric",
  minute: "numeric",
  hour12: true,
});
const fdate = time.toLocaleDateString("en-us", option);
const fullTime = ftime + "-" + fdate;
function SingleMessengerModal({ profile, show, showModal }) {
  const { currentUser } = useSelector((state) => state.authValue);
  console.log("profile :>> ", profile);
  const [message, setmessage] = useState();
  const [currentRecieverChats, setcurrentRecieverChats] = useState([]);
  const [currentUserChats, setcurrentUserChats] = useState([]);

  //   consocted={le.log("profile :>> ", profile);
  useEffect(() => {
    getMessage();
  }, [profile.id]);

  let messageSend = async (profile) => {
    const myKey = push(ref(db, `/message/${currentUser.id}/${profile.id}`));
    const userKey = push(ref(db, `/message/${profile.id}/${currentUser.id}`));
    let data = {
      time: fullTime,
      sender_id: currentUser.id,
      reciever_id: profile.id,
      message: message,
      r_profile: profile.profile_photo,
      s_profile: currentUser.profile_photo,
      r_name: profile.first_name + " " + profile.last_name,
      s_name: currentUser.first_name + " " + currentUser.last_name,
      myKey: myKey.key,
      userKey: userKey.key,
    };
    // console.log("data :>> ", data);

    const recieverUrl = `/message/${profile.id}/${currentUser.id}/${userKey.key}`;
    // console.log("object :>> ", recieverUrl);
    await set(ref(db, recieverUrl), data);

    const senderUrl = `/message//${currentUser.id}/${profile.id}/${userKey.key}`;
    await set(ref(db, senderUrl), data);

    // console.log("messageKey :>> ", messageKey.key);

    // getMessage();
    // console.log("data :>> ", data);
  };

  let getMessage = async () => {
    const user = `message/${currentUser.id}/${profile.id}`;
    const reciever = `message/${profile.id}/${currentUser.id}`;

    // console.log("user :>> ", user);

    const dbRef = ref(db, user);
    await onValue(dbRef, (snapshot) => {
      const data = snapshot.val();
      if (data !== null) {
        const values = Object.values(data);
        setcurrentUserChats(values);
        console.log("snapshot :>> ", values);

        // Object.values(data).map((da) => setChats(da));
      }
    });
    const dbRef2 = ref(db, reciever);
    await onValue(dbRef2, (snapshot) => {
      const data = snapshot.val();
      if (data !== null) {
        const values = Object.values(data);
        setcurrentRecieverChats(values);
        console.log("snapshot1 :>> ", values);

        // Object.values(data).map((da) => setChats(da));
      }
    });
  };

  let chatUi = "";
  if (currentUserChats.length > 0) {
    chatUi = currentUserChats.map((c) => (
      <>
        <li className="you">
          <div className="entete">
            <img className="status green" src={c.s_profile} alt="" />
            <h2>{c.s_name}</h2>
            <h3>10:12AM, Today</h3>
          </div>
          <div className="triangle"></div>
          <div className="message">{c.message}</div>
        </li>
        {/* <li className="me">
          <div className="entete">
            <h3>10:12AM, Today</h3>
            <h2>{c.r_name}</h2>
            <img className="status blue" src={c.r_profile} alt="" />
          </div>
          <div className="triangle"></div>
          <div className="message">
         {c.me}
          </div>
        </li> */}
      </>
    ));
  }

  return (
    <div
      className={show ? `modal fade show content` : `modal fade content`}
      id="usermessage"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      style={show ? { display: "block" } : { display: "none" }}
      aria-hidden="true"
    >
      <div
        className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable"
        role="document"
      >
        <div className="modal-content">
          <div
            className="close"
            data-dismiss="modal"
            aria-label="Close"
            onClick={() => showModal(false)}
          >
            <span aria-hidden="true">×</span>
          </div>
          <div className="modal-body">
            <div id="mycontainer">
              <main>
                <header className="d-flex">
                  <img
                    src={profile.profile_photo}
                    alt=""
                    style={{
                      width: "60px",
                      height: "60px",
                    }}
                  />
                  <div className="chat-profile-titles">
                    <h2>{profile.username}</h2>
                    {/* <h3
                      style={
                        {
                          // padding: "10px",
                          // background: "#58b666",
                          // borderRadius: "5px",
                          // textAlign: "center",
                        }
                      }
                    >
                      (Online)
                    </h3> */}
                  </div>
                </header>
                <ul id="chat">{chatUi}</ul>
                <footer>
                  <textarea
                    placeholder="Type your message"
                    name="message"
                    onChange={(e) => setmessage(e.target.value)}
                  ></textarea>
                  <div
                    className="mb-4 d-flex"
                    style={{
                      justifyContent: " flex-end",
                      alignItems: "center",
                      gap: "20px",
                    }}
                  >
                    <img
                      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/ico_picture.png"
                      alt=""
                    />
                    {/* <img
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/ico_file.png"
                    alt=""
                  /> */}
                    {/* <a href="#">Send</a> */}
                    <button
                      className="sendBtn"
                      onClick={() => messageSend(profile)}
                    >
                      Send
                    </button>
                  </div>
                </footer>
              </main>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleMessengerModal;
