import { Box, Paper, Typography } from '@mui/material';

import { ReactElement, useEffect, useRef } from 'react';
import EChartsReactCore from 'echarts-for-react/lib/core';

import WarningIcon from '@mui/icons-material/Warning';
import ReportIcon from '@mui/icons-material/Report';

const Earnings = (): ReactElement => {
  const chartRef = useRef<EChartsReactCore | null>(null);

  useEffect(() => {
    const handleResize = () => {
      if (chartRef.current) {
        const echartsInstance = chartRef.current.getEchartsInstance();
        echartsInstance.resize({ width: 'auto', height: 'auto' });
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [chartRef]);

  return (
    <Paper sx={{ p: { xs: 4, sm: 8 }, height: 1 }}>
      <Typography variant="h3" color="common.white" mb={3.5}>
        Notification
      </Typography>
      <Typography variant="h4" color="common.white" mb={2.5}>
      <ReportIcon sx={{ color: 'red' }} /> Asparin has 2 months before expired 
      </Typography>
    
      <Typography variant="body1" color="text.primary" mb={15}>
      AI Analysis: Paracetamol usage has increased by 15% this month.


      AI Suggestion: Review stock levels and consider reordering soon.
      </Typography>

      <Typography variant="h4" color="common.white" mb={2.5}>
      <WarningIcon sx={{ color: 'yellow' }} />  Vitamin C is run out of stock
      </Typography>
    
      <Typography variant="body1" color="text.primary" mb={15}>
      AI Analysis: Vitamin C usage has decreased by 5% this month.

AI Suggestion: Check for any product recalls or changes in usage patterns.
      </Typography>
      <Box
        flex={1}
        sx={{
          position: 'relative',
        }}
      >
        {/* <EarningsChart
          chartRef={chartRef}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flex: '1 1 0%',
            maxHeight: 152,
          }}
        /> */}
        {/* <Typography
          variant="h1"
          color="common.white"
          textAlign="center"
          mx="auto"
          position="absolute"
          left={0}
          right={0}
          bottom={0}
        >
          80%
        </Typography> */}
      </Box>
    </Paper>
  );
};

export default Earnings;
