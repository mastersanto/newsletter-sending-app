import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

import NewslettersList from './NewslettersList';
import './index.css';

function Newsletters() {
  return (
    <Container className="newsletters">
      <Grid className="newsletters-header" direction="row">
        <h2>Newsletters</h2>
        <Stack className="newsletters-actions" direction="row" spacing={2}>
          <Button variant="contained"><AddCircleOutlineIcon />Create</Button>
          <Button variant="contained"><DeleteOutlineIcon />Delete</Button>
        </Stack>
      </Grid>
      <NewslettersList />
    </Container>
  );
}

export default Newsletters;
