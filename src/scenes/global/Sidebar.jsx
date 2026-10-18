import { useState } from "react";
import { Sidebar as ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from '@mui/material';
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";


const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.gray[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
      component={<Link to={to} />}
    >
      <Typography>{title}</Typography>
    </MenuItem>
  );
};

const Sidebar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState("Dashboard")

    return(
        <Box
            sx={{
              "& .ps-sidebar-container": {
                backgroundColor: `${colors.primary[700]} !important`,
              },
              "& .ps-menu-button": {
                padding: "5px 35px 5px 20px !important",
              },
              "& .ps-menu-button:hover": {
                color: "#868dfb !important",
              },
              "& .ps-menu-button.ps-active": {
                color: "#6870fa !important",
              },
            }}
            >
        
        <ProSidebar collapsed={isCollapsed}>
            <Menu iconShape="square">
                {/* Logo & Menu Icon */}
                <MenuItem onClick={() => setIsCollapsed(!isCollapsed)}
                        icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
                        style={{
                            margin: "10px 0 20px 0",
                            color: colors.gray[100],
                        }}>
                    {!isCollapsed && (
                        <Box
                            sx={{
                                justifyContent: "space-between",
                                display: "flex",
                                alignItems: "center",
                                ml: "15px"
                            }}
                        >
                        <Typography variant="h3" color={colors.gray[100]}>
                            ADMINS
                        </Typography>
                        <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                            <MenuOutlinedIcon />
                        </IconButton>
                        </Box>
                    )}
                </MenuItem>

                {!isCollapsed && (
                    <Box sx={{ mb: "25px" }}>
                        <Box sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        }}>
                            <img src={`../../assets/boyalone.jpg`} alt="profile-user" width="100px" height="100px" style={{ cursor: "pointer" }} />
                        </Box>
                        <Box sx={{ textAlign: "center" }}>
                            <Typography variant="h2" color={colors.gray[100]} sx={{ m: "10px 0 0 0", fontWeight: "bold" }}>
                                BoyAlone
                            </Typography>
                            <Typography variant="h5" color={colors.greenAccent[500]}>
                                VP Fancy Admin
                            </Typography>
                        </Box>
                    </Box>
                )}

                <Box
                    sx={{
                      pl: isCollapsed ? undefined : "10%",
                    }}
                    >
                    <Item title="Dashboard" to="/" icon={<HomeOutlinedIcon />} selected={selected} setSelected={setSelected} />
                    <Typography variant="h6" color={colors.gray[300]} sx={{ m: "15px 0 5px 20px" }}>
                        Data
                    </Typography>
                    <Item
                        title="Manage Team"
                        to="/team"
                        icon={<PeopleOutlinedIcon />}
                        selected={selected}
                        setSelected={setSelected}
                        />
                    <Item
                        title="Contacts Information"
                        to="/contacts"
                        icon={<ContactsOutlinedIcon />}
                        selected={selected}
                        setSelected={setSelected}
                        />
                    <Item
                      title="Invoices Balances"
                      to="/invoices"
                      icon={<ReceiptOutlinedIcon />}
                      selected={selected}
                      setSelected={setSelected}
                    />

                    <Typography
                      variant="h6"
                      color={colors.gray[300]}
                      sx={{ m: "15px 0 5px 20px" }}
                    >
                      Pages
                    </Typography>
                    <Item
                      title="Profile Form"
                      to="/form"
                      icon={<PersonOutlinedIcon />}
                      selected={selected}
                      setSelected={setSelected}
                    />
                    <Item
                      title="Calendar"
                      to="/calendar"
                      icon={<CalendarTodayOutlinedIcon />}
                      selected={selected}
                      setSelected={setSelected}
                    />
                    <Item
                      title="FAQ Page"
                      to="/faq"
                      icon={<HelpOutlineOutlinedIcon />}
                      selected={selected}
                      setSelected={setSelected}
                    />

                    <Typography
                      variant="h6"
                      color={colors.gray[300]}
                      sx={{ m: "15px 0 5px 20px" }}
                    >
                      Charts
                    </Typography>
                    <Item
                      title="Bar Chart"
                      to="/bar"
                      icon={<BarChartOutlinedIcon />}
                      selected={selected}
                      setSelected={setSelected}
                    />
                    <Item
                      title="Pie Chart"
                      to="/pie"
                      icon={<PieChartOutlineOutlinedIcon />}
                      selected={selected}
                      setSelected={setSelected}
                    />
                    <Item
                      title="Line Chart"
                      to="/line"
                      icon={<TimelineOutlinedIcon />}
                      selected={selected}
                      setSelected={setSelected}
                    />
                    <Item
                      title="Geography Chart"
                      to="/geography"
                      icon={<MapOutlinedIcon />}
                      selected={selected}
                      setSelected={setSelected}
                    />
                </Box>
            </Menu>
        </ProSidebar>
        </Box>
    );
};
export default Sidebar