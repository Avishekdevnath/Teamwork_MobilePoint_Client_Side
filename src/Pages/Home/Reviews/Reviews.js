import { Avatar, Card, CardActions, Container, Grid, Rating, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import useAuth from '../../../Hooks/useAuth';
import { useSelector } from 'react-redux';

const Reviews = () => {
    const reviews = useSelector((state) => state.reviewsReducer.reviews);
    return (
        <Container>
            <Typography sx={{ fontWeight: 'bold', my: 5 }} variant="h4">Our Happy Clients</Typography>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    {
                        reviews.map(review => {
                            const { _id, comment, picture, name, rating } = review;
                            return (
                                <Grid key={_id} item xs={12} md={4}>
                                    <Card sx={{ minWidth: 275, background: '#e6f2ff', height: '100%' }}>
                                        <CardActions sx={{ my: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
                                            <Avatar
                                                alt="Remy Sharp"
                                                src={picture}
                                                sx={{ width: 60, height: 60 }}
                                            />
                                            <Box>
                                                <Typography variant="h6">{name}</Typography>
                                                <Rating name="read-only" value={rating} readOnly />
                                            </Box>
                                        </CardActions>
                                        <Typography sx={{ textAlign: 'left', px: 3 }}>{comment}</Typography>
                                        <Typography sx={{ textAlign: 'center' }}>
                                            <FormatQuoteIcon sx={{ fontSize: 70, ml: 3, mt: 3 }} />
                                        </Typography>
                                    </Card>
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </Box>
        </Container>
    );
};

export default Reviews;