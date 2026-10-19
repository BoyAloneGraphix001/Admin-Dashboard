import { useState } from "react";
import FullCalendar, { formatDate } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/react/daygrid";
import timeGridPlugin from "@fullcalendar/react/timegrid";
import interactionPlugin from "@fullcalendar/react/interaction";
import listPlugin from "@fullcalendar/react/list";
import { Box, List, ListItem, ListItemText, Typography, useTheme } from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import "@fullcalendar/react/skeleton.css";
import "@fullcalendar/react/themes/monarch/theme.css";
import "@fullcalendar/react/themes/monarch/palettes/purple.css";
import themePlugin from "@fullcalendar/react/themes/monarch";

const Calendar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [currentEvents, setCurrentEvents] = useState([]);

    const handleDataSelect = (selected) => {
        const title = prompt("Please enter a new title for your event")
        const calendarApi = selected.view.calendar;
        calendarApi.unselect();

        if(title) {
            calendarApi.addEvent({
                id: `${selected.startStr}-${title}`,
                title,
                start: selected.startStr,
                end: selected.endStr,
                allDay: selected.allDay,
            });
        };
    };

    const handleEventClick = (selected) => {
        if (window.confirm(`Are you sure you want to delete the event '${selected.event.title}' `)) {
            selected.event.remove();
        }; 
    };

    return(
        <Box sx={{ m: "20px" }}>
            <Header title="CALENDAR" subtitle="Full Calendar Interactive Page" />

            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                {/* CALENDAR SIDEABR  */}
                <Box sx={{ flex: "1 1 20%", backgroundColor: colors.primary[700], p: "15px", borderRadius: "4px" }}>
                    <Typography variant="h5">Events</Typography>
                    <List>
                        {currentEvents.map((event) => (
                            <ListItem key={event.id}
                                        sx={{ backgroundColor: colors.greenAccent[500], margin: "10px 0", borderRadius: "2px" }}>
                                <ListItemText primary={event.title} secondary={
                                    <Typography>{formatDate(event.start, {
                                        year: "numeric",
                                        month: "short",
                                        day: "numeric",
                                    })}</Typography>
                                } />
                            </ListItem>
                        ))}
                    </List>
                </Box>

                {/* CALENDAR  */}
                <Box sx={{ flex: "1 1 100%", ml: "15px" }}>
                    <FullCalendar 
                        height="75vh"
                        plugins={[
                            themePlugin,
                            dayGridPlugin,
                            timeGridPlugin,
                            interactionPlugin,
                            listPlugin
                        ]} 
                        headerToolbar={{
                            left: "prev,next today",
                            center: "title",
                            right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth"
                        }}
                        initialView="dayGridMonth"
                        editable={true}
                        selectable={true}
                        selectMirror={true}
                        dayMaxEvents={true}
                        select={handleDataSelect}
                        eventClick={handleEventClick}
                        eventsSet={(events) => setCurrentEvents(events)}
                        initialEvents={[
                            { id: "1234", title: "All-day event", date: "2026-10-19" },
                            { id: "4321", title: "Timed event", date: "2026-10-29" },
                        ]}
                        />
                </Box>
            </Box>
        </Box>
    );
};

export default Calendar;