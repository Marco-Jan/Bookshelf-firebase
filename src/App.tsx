import { useState } from 'react';
import "@fontsource/roboto";
import SignIn from './firebase/SignIn';
import SignOut from './firebase/SignOut';
import { auth } from './firebase/firebaseInit';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import { Button, Grid, Container } from '@mui/material';
import { useAuthState } from 'react-firebase-hooks/auth';
import './App.css';
import Books from './firebase/Books';
import Form from './firebase/Form';



export function App() {

  const [open, setOpen] = useState(false);
  const [user] = useAuthState(auth);
  const header = {
    height: '10vh',
    backgroundColor: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    boxShadow: '2px, 2px, 3px gray',
    padding: '3px 5%',
  };

  return (
    <>
      <header className='App' style={header}>
        <span style={{ fontSize: '2em', color: 'black' }}> Bookshelf</span>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            width: '400px',
            height: '80%',
            justifyContent: 'space-between',
          }}>
          <SignOut />
        </div>
        {user ? null : <SignIn />}
        {user && (
          <Button
            size='large'
            startIcon={<AutoStoriesIcon />}
            variant='outlined'
            onClick={() => setOpen(true)}
          >
            Add Book
          </Button>
        )}
      </header >
      <main style={{ paddingLeft: '5%', paddingRight: '5%' }}>
        <Container>
          <Grid
            container
            spacing={3}
            justifyContent='space-between'
            sx={{ display: 'flex', flexWrap: 'wrap', mt: 10, mb: 10 }}
          >
            {user ? (
              <Books />
            ) : (
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  fontSize: '2rem',
                  color: '#C0C4C4',
                  height: '60vh',
                  width: '100%',
                }}
              >
                Please Sign in to see your Books
              </div>
            )}
          </ Grid>
        </Container>
      </main>
      <Form open={open} handleClose={() => setOpen(false)} />
    </>
  );
}


export default App
