import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";
import {
    CardHeader,
    CardMedia,
    createTheme,
    ThemeProvider,
} from "@mui/material";

import { Link } from "react-router-dom";

export function Tool({ title, image, description, link }) {
    const theme = createTheme();

    theme.typography.h6 = {
        fontSize: "1rem",
        fontWeight: 400,

        "@media (max-width:600px)": {
            fontSize: "1.6rem",
            // fontfamily: "Sequel, sans-serif",
        },
    };

    theme.typography.h3 = {
        fontFamily: "Arial, Helvetica, sans-serif",
        fontSize: "1.7rem",
        fontWeight: "normal",

        "@media (max-width:600px)": {
            fontSize: "2.5rem",
        },
    };

    return (
        <div>
            <Link to={link} className="link">
                <div>
                    <Card
                        raised={true}
                        sx={{ boxShadow: 10 }}
                        // variant="outlined"
                        style={{ backgroundColor: "tool", boxShadow: "10px" }}
                    >
                        <CardHeader
                            title={
                                <ThemeProvider theme={theme}>
                                    <Typography variant="h3" component="h2">
                                        {title}
                                    </Typography>
                                </ThemeProvider>
                            }
                        ></CardHeader>
                        <CardMedia
                            component="img"
                            height="190"
                            image={image}
                            alt={title}
                        />

                        <CardContent>
                            <ThemeProvider theme={theme}>
                                <Typography variant="h6" color="text.secondary">
                                    {description}
                                </Typography>
                            </ThemeProvider>
                        </CardContent>
                    </Card>
                </div>
            </Link>
        </div>
    );
}
