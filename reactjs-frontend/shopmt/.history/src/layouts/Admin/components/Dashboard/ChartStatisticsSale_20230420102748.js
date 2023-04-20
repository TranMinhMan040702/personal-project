import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
const { faker } = require('@faker-js/faker');
export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Statistics Sales',
        },
    },
};
const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];

export const data = {
    labels,
    datasets: [
        {
            label: 'Doanh thu',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            backgroundColor: 'rgba(255, 99, 1, 0.5)',
        },
    ],
};
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
function ChartStatisticsSale() {
    return <Bar options={options} data={data} />;
}

export default ChartStatisticsSale;
