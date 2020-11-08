import { Button, Typography } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components/macro';

export const HomeView = () => {
    return (
        <StyledHomeView>
            <Typography variant="h1">Heading 1</Typography>
            <Typography variant="h2">Heading 2</Typography>
            <Typography variant="h3">Heading 3</Typography>
            <Typography variant="h4">Heading 4</Typography>
            <Typography variant="h5">Heading 5</Typography>
            <Typography variant="h6">Heading 6</Typography>

            <Typography variant="body1">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea,
                ipsam. Autem, similique quae? Ratione non veniam, similique
                exercitationem eos veritatis rem, molestiae, sequi porro
                assumenda nemo velit esse dolorum delectus!
            </Typography>

            <Typography variant="body2">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea,
                ipsam. Autem, similique quae? Ratione non veniam, similique
                exercitationem eos veritatis rem, molestiae, sequi porro
                assumenda nemo velit esse dolorum delectus!
            </Typography>

            <Button variant="contained" color="primary">
                Button Test
            </Button>
        </StyledHomeView>
    );
};

const StyledHomeView = styled.div`
    width: 800px;
    max-width: 90%;
    margin: 0 auto;
`;
