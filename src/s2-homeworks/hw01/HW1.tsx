import React from 'react'
import Message from './message/Message'
import MessageSender from './message-sender/MessageSender'
import s2 from '../../s1-main/App.module.css'
import FriendMessage from './friend-message/FriendMessage'

type UserType = {
    avatar: string,
    name: string,
}
type FirstMessageType = {
    text: string,
    time: string,
}
export type MessageType = {
    id: number,
    user: UserType,
    message: FirstMessageType
}

export const message0: MessageType = {
    id: 0,
    user: {
        avatar: 'https://staticg.sportskeeda.com/editor/2018/11/f3cc6-15423842330227-800.jpg', // можно менять
        name: 'Ronaldino',
    },
    message: {
        text: 'When can we have a dinner,mate?', // можно менять
        time: '21:00', // можно менять
    },
}
export const friendMessage0: MessageType = {
    id: 100,
    user: {
        avatar: 'https://d3nfwcxd527z59.cloudfront.net/content/uploads/2022/03/09220743/Kylian-Mbappe-PSG-Real-Madrid-1.jpg',
        name: 'Killian Mbappe',
    },
    message: {
        text: 'Who are you, bro?',
        time: '21:05',
    },
}

const HW1 = () => {
    return (
        <div id={'hw1'} >
            <div className={s2.hwTitle}>Homework #1</div>
            <div className={s2.hw}>
                <div className={s2.messenger}>
                    <Message message={message0}/>
                    <FriendMessage message={friendMessage0}/>
                </div>
                <MessageSender M={Message}/>
            </div>
        </div>
    )
}

export default HW1