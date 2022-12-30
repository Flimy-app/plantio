import {React, useEffect} from 'react';
import './Chatbot.css';
import CardItem from './CardItem'
import axios from 'axios';

var stylespan = {
"background-color": "#e699ff",
"padding": "10px",
"border-radius": "2px"
}


 async function getBotResponse() {
        var rawText = document.getElementById("textInput").value;
        if(rawText != ""){
        const test = document.createElement("p");
        test.setAttribute("class", "userText")
        // test.style.cssText = 'color: black;font-family: monospace;font-size: 17px;text-align: right;line-height: 30px;color: black;'
        const test2 = document.createElement('span')
        // test2.style.cssText = 'background-color: #e699ff;padding: 10px;border-radius: 2px;'
        test2.innerHTML = rawText
        test.appendChild(test2)
        var userHtml = test;
        console.log(userHtml)
        document.getElementById("textInput").value ="";
        document.getElementById("chatbox").append(userHtml);
        document
        .getElementById("userInput")
        .scrollIntoView({ block: "start", behavior: "smooth" });
        var request = {
            "query": rawText
        }
        document.getElementById("overlay").style.display = "flex";
        var data = await axios.post("https://plantioapi.herokuapp.com/result", request)
        .then((response)=>{

            console.log(response)
            document.getElementById("overlay").style.display = "none";
            return response.data
        }).catch((error)=>{
            console.log(error)
        })
        
        console.log("dibawah aku data")
        console.log(data)
        const test3 = document.createElement("p");
        test3.setAttribute("class", "botText")
        const test4 = document.createElement('span')
        test4.innerHTML = data
        
        test3.appendChild(test4)
        var botHtml = test3;
        document.getElementById("chatbox").append(botHtml);
        document
            .getElementById("userInput")
            .scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }
function Chatter() {
    useEffect(() => {
        const keyDownHandler = event => {
        console.log('User pressed: ', event.key);
    
        if (event.key === 'Enter') {
          event.preventDefault();
    
          getBotResponse();
        }
      };
    
      document.addEventListener('keydown', keyDownHandler);
    
      return () => {
        document.removeEventListener('keydown', keyDownHandler);
      };
    }, []);
  return (
    <body>
      <div class="bodybody">
      <div id="overlay">
        <div class='overlay-box'>
          <p>
            Sedang Berpikir...
          </p>
        </div>
      </div>
        <div class="opaci">
      <center>
      <h1 class="planty-chatbot">
        Planty
      </h1>
      </center>
      <div className='boxednobox'>
          <div class="boxed">
      <div>
        <div id="chatbox">
          <p class="botText">
            <span>Halo saya Planty</span>
          </p>
          <p class="botText">
          <span>Silahkan bertanya mengenai tanaman kepada saya</span>
          </p>
        </div>
        <div id="userInput">
          <input id="textInput" type="text" name="msg" placeholder="Masukkan pesan" />
        </div>
      </div>
    </div>
    </div>
    </div>
    </div>
    </body>
  );
}

export default Chatter;
