// import React, {FC} from 'react'
// import {NavLink} from 'react-router-dom'
// import s from './Sidebar.module.css'
// import {PATH} from '../Pages'
// import closeIcon from './closeOutline.svg'
//
// type PropsType = {
//     open: boolean
//     handleClose: () => void
// }
//
// export const Sidebar: FC<PropsType> = ({open, handleClose}) => {
//     const sidebarClass = s.sidebar
//         + (open ? ' ' + s.open : '')
//     return (
//         <>
//             {/*затемнение справа от открытого меню*/}
//             {open && <div className={s.background} onClick={handleClose}/>}
//
//             <aside className={sidebarClass} >
//                 <button className={s.close} onClick={handleClose}>
//                     <img
//                         src={closeIcon}
//                         alt="close sidebar"
//                         id={'hw5-menu-close'}
//                     />
//                 </button>
//
//                 <nav id={'hw5-menu'} className={s.nav} >
//                     <NavLink
//                         id={'hw5-pre-junior-link'}
//                         to={PATH.PRE_JUNIOR}
//                         onClick={handleClose}
//
//                         className={(param)=>  param.isActive ? s.active : ''}// делает студент
//                     >
//                         Pre-junior
//                     </NavLink>
//                     <NavLink
//                         id={'hw5-junior-link'}
//                         to={PATH.JUNIOR}
//                         onClick={handleClose}
//                         className={(param)=> {return param.isActive ? s.active : ''}} // делает студент
//                     >
//                         Junior
//                     </NavLink>
//                     <NavLink
//                         id={'hw5-junior-plus-link'}
//                         to={PATH.JUNIOR_PLUS}
//                         onClick={handleClose}
//                         className={(param)=> {return param.isActive ? s.active : ''}} // делает студент
//                     >
//                         Junior Plus
//                     </NavLink>
//                 </nav>
//             </aside>
//         </>
//     )
// }

import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './s1-main/App'
import reportWebVitals from './reportWebVitals'
import store from './s2-homeworks/hw10/bll/store'
import {Provider} from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        {/*для дз 10*/}
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
