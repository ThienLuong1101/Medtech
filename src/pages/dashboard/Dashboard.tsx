import { ReactElement, useState } from 'react';
import { Box, Button } from '@mui/material';

import CustomerFulfillment from 'components/sections/dashboard/customer-fulfilment/CustomerFulfillment';
import VisitorInsights from 'components/sections/dashboard/visitor-insights/VisitorInsights';
import TodaysSales from 'components/sections/dashboard/todays-sales/TodaysSales';
import TopProducts from 'components/sections/dashboard/top-products/TopProducts';
import TrendingNow from 'components/sections/dashboard/trending-now/TrendingNow';
import Customers from 'components/sections/dashboard/customers/Customers';
import Earnings from 'components/sections/dashboard/earnings/Earnings';
import Level from 'components/sections/dashboard/level/Level';
import WarehouseDataCard from './qrscan.tsx';

// import QRCodeGenerator from 'components/pages/dashboard/qrscan';

const Dashboard = (): ReactElement => {
  const [showTrendingNow, setShowTrendingNow] = useState<boolean>(false);

  const toggleTrendingNow = () => {
    setShowTrendingNow((prev) => !prev);
  };

  return (
    <>
      <Button
        variant="contained"
        onClick={toggleTrendingNow}
        sx={{ mb: 3, mx: 'auto', display: 'block' ,
          flexDirection: 'column',
          justifyContent: 'center', backgroundColor: '#21222D', color: '#fff','&:hover': {
      backgroundColor: '#D2A86F', // Replace with the desired hover color
    }}}

      >
        {showTrendingNow ? 'WareHouse Management' : 'Digital WareHouse'}
      </Button>
      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={3.5}>
        {!showTrendingNow && (
          <>
            <Box gridColumn={{ xs: 'span 12', '2xl': 'span 8' }} order={{ xs: 0 }}>
              <Customers />
            </Box>
            <Box gridColumn={{ xs: 'span 12', '2xl': 'span 8' }} order={{ xs: 6 }}>
              <TodaysSales />
            </Box>
            <Box gridColumn={{ xs: 'span 12', lg: 'span 4' }} order={{ xs: 1, '2xl': 4 }}>
              <Level />
            </Box>
            <Box gridColumn={{ xs: 'span 12', lg: 'span 8' }} order={{ xs: 2, '2xl': 2 }}>
              <TopProducts />
            </Box>
            <Box gridColumn={{ xs: 'span 12', md: 'span 6', xl: 'span 4' }} order={{ xs: 3, xl: 3, '2xl': 3 }}>
              <CustomerFulfillment />
            </Box>
            <Box gridColumn={{ xs: 'span 12', md: 'span 6', xl: 'span 4' }} order={{ xs: 4, xl: 5, '2xl': 1 }}>
              <Earnings />
            </Box>
            <Box gridColumn={{ xs: 'span 12', xl: 'span 12' }} order={{ xs: 5, xl: 4, '2xl': 8 }}>
              <VisitorInsights />
            </Box>
          </>
        )}
        {showTrendingNow && (
          <>
           <Box
           gridColumn={{ xs: 'span 12', xl: 'span 8', '2xl': 'span 3' }}
           order={{ xs: 6, '2xl': 6 }}
         >   <WarehouseDataCard />
         </Box>
          <Box
            gridColumn={{ xs: 'span 12', xl: 'span 8', '2xl': 'span 6' }}
            order={{ xs: 6, '2xl': 7 }}
          >
            <TrendingNow />
          </Box>
          <Box
            gridColumn={{ xs: 'span 12', xl: 'span 8', '2xl': 'span 6' }}
            order={{ xs: 6, '2xl': 8 }}
          >
         
          </Box>
          </>
        )}
      </Box>
    </>
  );
};

export default Dashboard;
