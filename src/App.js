
import './App.css';
import { Container } from '@mui/material';
import VoteRectangle from './VoteRectangle';
import SponsorRect from './SponsorRect';
import AppBar from './AppBar';
import jsonData from './data.json'; // Import your JSON file
// Assuming VoteRectangle and Container are properly imported

function App() {
  const rectangles = [];

  for (let i = 0; i < 3; i++) {
    rectangles.push(<VoteRectangle key={i} index={i} />);
  }
  // rectangles.sort();
  console.log(jsonData);
  return (
    // <Container>
    //   {rectangles}
      
    // </Container>
    <Container>
      <AppBar></AppBar>
      {/* <SponsorRect></SponsorRect> */}
    {jsonData.map((data, index) => (
      <VoteRectangle
        key={index}
        title={data.title}
        date={data.date}
        time={data.time}
        location={data.location}
        place={data.place}
        category={data.category}
      />
    ))}
  </Container>
  );
}


export default App;
