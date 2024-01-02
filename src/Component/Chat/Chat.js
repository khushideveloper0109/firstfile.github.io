import React from 'react'
import bubble from "./../../Assets/img/bubble.png"
import "./Chat.css"
import chat_logo from "./../../Assets/img/chat_logo.png"
import share from "./../../Assets/img/share (2).png"
export default function Chat() {
    return (
        <>
            <div className='mane'>
                <div className='bubbles'>
                    <img src={bubble} />
                    <img src={bubble} />
                    <img src={bubble} />
                    <img src={bubble} />
                    <img src={bubble} />
                    <img src={bubble} />
                    <img src={bubble} />
                </div>
                <div>
                    <nav>
                        <img src={chat_logo} class="logo" />
                        <div class="conteaner">
                            <div class="massges right">
                                <p>Ami:hlo kisi h</p>
                            </div>
                            <div class="massges left">
                                <p>sammi:hlo kisi h</p>
                            </div>
                            <div class="massges right">
                                <p>Ami:hlo kisi h</p>
                            </div>
                            <div class="massges left">
                                <p>sammi:hlo kisi h</p>
                            </div>
                            <div class="massges right">
                                <p>Ami:hlo kisi h</p>
                            </div>
                            <div class="massges left">
                                <p>sammi:hlo kisi h</p>
                            </div>
                            <div class="massges right">
                                <p>Ami:hlo kisi h</p>
                            </div>
                            <div class="massges left">
                                <p>sammi:hlo kisi h</p>
                            </div>

                        </div>
                        <div class="send">

                            <form class="send-container">
                                <input type="text" id="massges-text"placeholder='Type a Messges' />
                                <button type='submit' className='submit'>
                                <img src={share} class="shaer icon" />
</button>
                            </form>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}
