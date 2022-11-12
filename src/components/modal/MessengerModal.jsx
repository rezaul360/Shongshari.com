function MessengerModal({ show, showModal }) {
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
              <aside>
                <header>
                  <input type="text" placeholder="search" />
                </header>
                <ul>
                  <li>
                    <img
                      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_01.jpg"
                      alt=""
                    />
                    <div>
                      <h2>Prénom Nom</h2>
                      <h3>
                        <span className="status orange"></span>
                        offline
                      </h3>
                    </div>
                  </li>
                  <li>
                    <img
                      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_02.jpg"
                      alt=""
                    />
                    <div>
                      <h2>Prénom Nom</h2>
                      <h3>
                        <span className="status green"></span>
                        online
                      </h3>
                    </div>
                  </li>
                  <li>
                    <img
                      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_03.jpg"
                      alt=""
                    />
                    <div>
                      <h2>Prénom Nom</h2>
                      <h3>
                        <span className="status orange"></span>
                        offline
                      </h3>
                    </div>
                  </li>
                  <li>
                    <img
                      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_04.jpg"
                      alt=""
                    />
                    <div>
                      <h2>Prénom Nom</h2>
                      <h3>
                        <span className="status green"></span>
                        online
                      </h3>
                    </div>
                  </li>
                  <li>
                    <img
                      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_05.jpg"
                      alt=""
                    />
                    <div>
                      <h2>Prénom Nom</h2>
                      <h3>
                        <span className="status orange"></span>
                        offline
                      </h3>
                    </div>
                  </li>
                  <li>
                    <img
                      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_06.jpg"
                      alt=""
                    />
                    <div>
                      <h2>Prénom Nom</h2>
                      <h3>
                        <span className="status green"></span>
                        online
                      </h3>
                    </div>
                  </li>
                  <li>
                    <img
                      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_07.jpg"
                      alt=""
                    />
                    <div>
                      <h2>Prénom Nom</h2>
                      <h3>
                        <span className="status green"></span>
                        online
                      </h3>
                    </div>
                  </li>
                </ul>
              </aside>
              <main>
                <header>
                  <img
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_01.jpg"
                    alt=""
                  />
                  <div>
                    <h2>Vincent Porter</h2>
                    <h3>already 1902 messages</h3>
                  </div>
                </header>
                <ul id="chat">
                  <li className="you">
                    <div className="entete">
                      <span className="status green"></span>
                      <h2>Vincent</h2>
                      <h3>10:12AM, Today</h3>
                    </div>
                    <div className="triangle"></div>
                    <div className="message">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor.
                    </div>
                  </li>
                  <li className="me">
                    <div className="entete">
                      <h3>10:12AM, Today</h3>
                      <h2>Vincent</h2>
                      <span className="status blue"></span>
                    </div>
                    <div className="triangle"></div>
                    <div className="message">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor.
                    </div>
                  </li>
                  <li className="me">
                    <div className="entete">
                      <h3>10:12AM, Today</h3>
                      <h2>Vincent</h2>
                      <span className="status blue"></span>
                    </div>
                    <div className="triangle"></div>
                    <div className="message">OK</div>
                  </li>
                  <li className="you">
                    <div className="entete">
                      <span className="status green"></span>
                      <h2>Vincent</h2>
                      <h3>10:12AM, Today</h3>
                    </div>
                    <div className="triangle"></div>
                    <div className="message">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor.
                    </div>
                  </li>
                  <li className="me">
                    <div className="entete">
                      <h3>10:12AM, Today</h3>
                      <h2>Vincent</h2>
                      <span className="status blue"></span>
                    </div>
                    <div className="triangle"></div>
                    <div className="message">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor.
                    </div>
                  </li>
                  <li className="me">
                    <div className="entete">
                      <h3>10:12AM, Today</h3>
                      <h2>Vincent</h2>
                      <span className="status blue"></span>
                    </div>
                    <div className="triangle"></div>
                    <div className="message">OK</div>
                  </li>
                </ul>
                <footer>
                  <textarea placeholder="Type your message"></textarea>
                  <img
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/ico_picture.png"
                    alt=""
                  />
                  <img
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/ico_file.png"
                    alt=""
                  />
                  <a href="#">Send</a>
                </footer>
              </main>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MessengerModal;
