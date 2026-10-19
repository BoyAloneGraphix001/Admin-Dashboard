import { Box, useTheme, Typography } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return(
        <Box sx={{ m: "20px" }}>
            <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography sx={{ colors: colors.greenAccent[500] }} variant="h5">
                    An Important Question
                </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi doloribus alias nam iusto iure esse provident maxime non earum nesciunt. Quae ut cupiditate dolorem reprehenderit beatae eveniet animi exercitationem illo?
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography sx={{ colors: colors.greenAccent[500] }} variant="h5">
                    Some Random Question
                </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi doloribus alias nam iusto iure esse provident maxime non earum nesciunt. Quae ut cupiditate dolorem reprehenderit beatae eveniet animi exercitationem illo?
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography sx={{ colors: colors.greenAccent[500] }} variant="h5">
                    Your Favorite Question
                </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi doloribus alias nam iusto iure esse provident maxime non earum nesciunt. Quae ut cupiditate dolorem reprehenderit beatae eveniet animi exercitationem illo?
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography sx={{ colors: colors.greenAccent[500] }} variant="h5">
                    Few Necessary Question
                </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi doloribus alias nam iusto iure esse provident maxime non earum nesciunt. Quae ut cupiditate dolorem reprehenderit beatae eveniet animi exercitationem illo?
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography sx={{ colors: colors.greenAccent[500] }} variant="h5">
                    Filtered Question
                </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi doloribus alias nam iusto iure esse provident maxime non earum nesciunt. Quae ut cupiditate dolorem reprehenderit beatae eveniet animi exercitationem illo?
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography sx={{ colors: colors.greenAccent[500] }} variant="h5">
                    Simple Question
                </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi doloribus alias nam iusto iure esse provident maxime non earum nesciunt. Quae ut cupiditate dolorem reprehenderit beatae eveniet animi exercitationem illo?
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Box>
    );
};

export default FAQ;
