import { Box } from "@mui/material";
import Header from "../../components/Header";
import GeographyChart from "../../components/GeographyChart";
import { tokens } from "../../theme";
import { useTheme } from "@mui/material";

const Geography = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return(
        <Box sx={{ m: '20px' }}>
            <Header title="Geography Chart" subtitle="Simple Geography Chart" />
            <Box sx={{ height: "75vh", border: `1px solid ${colors.gray[100]}`, borderRadius: "4px" }}>
                <GeographyChart />
            </Box>
        </Box>
    );
};

export default Geography;