import Box from '@mui/material/Box';
import {Container} from '@mui/material';

function PlainLayout({children}) {

    return (
        <Box sx={{ display: 'flex' }}>
            <Container>
                {children}
            </Container>
        </Box>
    );
}

export default PlainLayout;
