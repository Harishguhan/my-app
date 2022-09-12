import React from "react";
import * as AiIcons from 'react-icons/ai';
import * as RiIcons from 'react-icons/ri';
import * as GiIcons from 'react-icons/gi';
import * as FiIcons from 'react-icons/fi';
export const Data= [
    {
        title:'Home',
        path:'#',
        icon:<AiIcons.AiFillHome />
    },
    {
        title:'About',
        path:'#',
        icon:<AiIcons.AiOutlineInfoCircle />
    },
    {
        title:'Profile',
        path:'/profile',
        icon:<AiIcons.AiFillContacts />
    },
    {
        title:'Medichine',
        path:'#',
        icon:<GiIcons.GiMedicalPackAlt/>,
        iconClosed:<RiIcons.RiArrowDropDownLine />,
        iconOpened:<RiIcons.RiArrowDropUpLine />,
        
        DropDown:[
            {
                title:'New',
                path:'/add_catogary',
                icon:<AiIcons.AiOutlinePlus />
            },
            {
                title:'View',
                path:'#',
                icon:<AiIcons.AiFillEye />
            }
        ]
    },
    {
        title:'Logout',
        path:'/admin_login',
        icon:<FiIcons.FiLogOut />
    }
]