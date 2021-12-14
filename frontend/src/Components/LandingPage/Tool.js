import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";
import { CardHeader, CardMedia } from "@mui/material";

import { Link } from "react-router-dom";

export function Tool({ title, image, description, link }) {
    return (
        <div>
            <Link to={link} className="link">
                <div>
                    <Card
                        raised={true}
                        sx={{ boxShadow: 10 }}
                        variant="outlined"
                        style={{ backgroundColor: "tool", boxShadow: "10px" }}
                    >
                        <CardHeader title={title}></CardHeader>
                        <CardMedia
                            component="img"
                            height="190"
                            image={image}
                            alt={title}
                        />

                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                {description}
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
            </Link>
        </div>
    );
}
