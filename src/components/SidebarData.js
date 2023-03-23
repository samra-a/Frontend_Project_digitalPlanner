import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import ListAltIcon from '@mui/icons-material/ListAlt';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SearchIcon from '@mui/icons-material/Search';
import Home from '@mui/icons-material/Home';
import Sidebar from './Sidebar';

export const SidebarData = [
  {
    title: "Search",
    icon: <SearchIcon/>,
  },
  {
    title: "Home",
    icon: <HomeIcon/>,
    link: "/home"
  },
  {
    title: "To-Do List",
    icon: <ListAltIcon/>,
    link: "/To-Do"
  },
  {
    title: "Journal",
    icon: <MenuBookIcon/>,
    link: "/Journal"
  },
  {
    title: "Calendar",
    icon: <CalendarMonthIcon/>,
    link: "/Calendar"
  },

]

export default SidebarData
