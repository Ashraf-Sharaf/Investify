import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  MeetingProvider,
  MeetingConsumer,
  useMeeting,
  useParticipant,
} from "@videosdk.live/react-sdk";
import { authToken, createMeeting } from "./API";
import ReactPlayer from "react-player";



function Video() {
  const [meetingId, setMeetingId] = useState(null);

 
  const getMeetingAndToken = async (id) => {
    const meetingId =
      id == null ? await createMeeting({ token: authToken }) : id;
    setMeetingId(meetingId);
  };

  const onMeetingLeave = () => {
    setMeetingId(null);
  };

  function JoinScreen({ getMeetingAndToken }) {
    const [meetingId, setMeetingId] = useState(null);
    const onClick = async () => {
      await getMeetingAndToken(meetingId);
    };
    return (
      <div>
        <input
          type="text"
          placeholder="Enter Meeting Id"
          onChange={(e) => {
            setMeetingId(e.target.value);
          }}
        />
        <button onClick={onClick}>Join</button>
        {" or "}
        <button onClick={onClick}>Create Meeting</button>
      </div>
    );
  }
  
  function ParticipantView(props) {
    return null;
  }
  
  function Controls(props) {
    return null;
  }
  
  function MeetingView(props) {
    const [joined, setJoined] = useState(null);

    const { join, participants } = useMeeting({
     
      onMeetingJoined: () => {
        setJoined("JOINED");
      },
   
      onMeetingLeft: () => {
        props.onMeetingLeave();
      },
    });
    const joinMeeting = () => {
      setJoined("JOINING");
      join();
    };
  
    return (
      <div className="container">
        <h3>Meeting Id: {props.meetingId}</h3>
        {joined && joined == "JOINED" ? (
          <div>
            <Controls />
            //For rendering all the participants in the meeting
            {[...participants.keys()].map((participantId) => (
              <ParticipantView
                participantId={participantId}
                key={participantId}
              />
            ))}
          </div>
        ) : joined && joined == "JOINING" ? (
          <p>Joining the meeting...</p>
        ) : (
          <button onClick={joinMeeting}>Join</button>
        )}
      </div>
    );
  }
  
  return authToken && meetingId ? (
    <MeetingProvider
      config={{
        meetingId,
        micEnabled: true,
        webcamEnabled: true,
        name: " ",
      }}
      token={authToken}
    >
      <MeetingView meetingId={meetingId} onMeetingLeave={onMeetingLeave} />
    </MeetingProvider>
  ) : (
    <JoinScreen getMeetingAndToken={getMeetingAndToken} />
  );
}

export default Video;