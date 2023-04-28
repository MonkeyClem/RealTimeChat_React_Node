import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
    let id = props.user

    return (
    <div style={{ height: "100vh" }}>
      <PrettyChatWindow
        projectId="c68517e5-d851-41c2-b452-ed2fa19f74c5"
        username={id.username} // adam
        secret={id.secret} // pass1234
        style={{ height: "100%" }}
      />
    </div>
  );
};

export default ChatsPage;