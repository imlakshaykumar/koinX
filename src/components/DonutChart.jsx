import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const DonutChart = () => {
    const data = {
        labels: ['CrowdSale investors', 'Foundations'],
        datasets: [{
            label: 'Poll',
            data: [80, 20],
            backgroundColor: ['blue', 'red'],
            borderColor: ['blue', 'red']
        }]
    };

    const options = {
        plugins: {
            legend: {
                position: 'right',
                labels: {
                    boxWidth: 10,
                    usePointStyle: true
                }
            }
        }
    };

    return (
        <div className='flex items-center justify-start w-[50%]'>
            <Doughnut data={ data } options={ options } />
        </div>
    );
};

