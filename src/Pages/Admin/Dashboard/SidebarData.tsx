import React from "react";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
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
        title:'Contact',
        path:'#',
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
                path:'#',
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
        path:'#',
        icon:<FiIcons.FiLogOut />
    }
]