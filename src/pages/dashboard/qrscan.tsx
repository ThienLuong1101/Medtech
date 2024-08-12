import { Box } from '@mui/material';

// Define styles using the `sx` prop or `makeStyles` if using Material-UI
const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    display: 'flex',
    flexDirection: 'column', // Arrange items vertically
    alignItems: 'center',
    height: '15vh',
    margin: 0,
    backgroundColor: 'rgb(84, 90, 108)',
    textAlign: 'center',
  },
  card: {
    backgroundColor: 'rgb(84, 90, 108)',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    padding: '20px',
    maxWidth: '400px', // Adjust width as needed
    width: '100%',
  },
  dataItem: {
    backgroundColor:  'background.default',
    padding: '10px',
    borderRadius: '4px',
    margin: '10px 0',
    fontSize: '18px',
    fontWeight: 'bold',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  temperature: {
    color: '#2196F3', // Blue color for temperature
  },
  humidity: {
    color: '#FFC107', // Amber color for humidity
  },
  status: {
    color: '#FF5722', // Deep orange color for status
  },
  lastUpdated: {
    color: '#9E9E9E', // Grey color for last updated
  },
};

const WarehouseDataCard = () => {
  return (
    <>
    
      <Box sx={{...styles.card, marginTop:"80px"}}>
        <Box sx={{ ...styles.dataItem, ...styles.temperature }}>
          <span>Temperature:</span>
          <span>23°C</span>
        </Box>
        <Box sx={{ ...styles.dataItem, ...styles.humidity }}>
          <span>Humidity:</span>
          <span>45%</span>
        </Box>
        <Box sx={{ ...styles.dataItem, ...styles.status }}>
          <span>Status:</span>
          <span>Operational</span>
        </Box>
        <Box sx={{ ...styles.dataItem, ...styles.lastUpdated }}>
          <span>Last Updated:</span>
          <span>12:30 PM</span>
        </Box>
      </Box>
      </>
    
  );
};

export default WarehouseDataCard;
