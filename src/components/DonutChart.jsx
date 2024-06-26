import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
// import ChartDataLabels from 'chartjs-plugin-datalabels';

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
                    usePointStyle: true,
                    font: {
                        size: 12,
                        weight: 'bold'
                    },
                    color: '#222',
                    generateLabels: (chart) => {
                        return chart.data.labels.map((label, index) => {
                            const value = chart.data.datasets[0].data[index];
                            return {
                                text: `${label}: ${value}`,
                                fillStyle: chart.data.datasets[0].backgroundColor[index],
                                strokeStyle: chart.data.datasets[0].borderColor[index],
                                // lineWidth: 3,
                            };
                        });
                    }
                }
            },
            // datalabels: {
            //     formatter: (value, context) => {
            //         // console.log(context.chart.data.datasets[0].data[context.dataIndex])
            //         return `${context.chart.data.labels[context.dataIndex]}: ${context.chart.data.datasets[0].data[context.dataIndex]}`;
            //     },
            //     color: '#fff',
            //     font: {
            //         weight: 'bold'
            //     },
            //     align: 'start',
            //     anchor: 'end'
            // }
        },
        cutout: '70%',
    };

    return (
        <div className='flex items-center justify-start w-[300px] h-[300px] md:w-[400px] md:h-[400px]'>
            {/* <Doughnut data={ data } options={ options } plugins={ [ChartDataLabels] } /> */ }
            <Doughnut data={ data } options={ options } />
        </div>
    );
};

