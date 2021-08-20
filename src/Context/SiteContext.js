import { createContext, useContext, useEffect, useState } from "react";

const authContext = createContext();



export default function ProvideSite({ children }) {
    const [messages, setMessages] = useState(null);
    const [audio, setAudio] = useState(null);

    useEffect(() => {
      const fetchData = () => {
        console.log('Getting:', `/genevieve_test/all_audio_messages.json`)
        fetch('/genevieve_test/all_audio_messages.json', {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        })
        .then(res => res.json())
        .then(data => {
          //console.log(data[0])
          setAudio(data)
        })
      }

      //fetchData()
      
      if (!audio) fetchData()
    }, [audio])

    // Get all the messages
    useEffect(() => {
      const fetchData = () => {
        //const days = Object.values(data[month]);
        console.log('Getting:', `/genevieve_test/all_messages.json`)
        fetch(`/genevieve_test/all_messages.json` ,{
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            }
          }
        )
        .then(function(response){
          //console.log('Responce:', response);
          return response.json();
        })
        .then(function(myJson) {
          //console.log('JSON: ',Object.keys(myJson));
          setMessages(myJson)
          //return myJson
        });
      }
      if (!messages) fetchData()

    }, [messages]) // data,

    const site = {
      name: 'BillyBackPack25',
      favicon: '/favicon-32x32.png',
      messages: messages,
      audio_files: audio
    }

    return (
      <authContext.Provider value={site}>
        {children}
      </authContext.Provider>
    );
}

export function useSite() {
    return useContext(authContext);
}