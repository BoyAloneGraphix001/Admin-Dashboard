import { Box, useTheme } from "@mui/material";
import { tokens } from "../theme";

const ProgressCircle = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const angle = progress * 360;

    return(
        <Box sx={{ 
            background: `radial-gradient(${})`
         }} />
    );
};

export default ProgressCircle;