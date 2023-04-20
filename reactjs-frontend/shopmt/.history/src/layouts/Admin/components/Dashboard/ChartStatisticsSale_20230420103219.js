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

const statistic = labels.map(() => faker.datatype.number({ min: 0, max: 1000 }));
console.log(statistic);

export const data = {
    labels,
    datasets: [
        {
            label: 'Doanh thu',
            data: [100, 555, 77, 88, 44, 12, 25, 36, 98, 78, 45, 16],
            backgroundColor: 'rgba(255, 99, 1, 0.5)',
        },
    ],
};
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
function ChartStatisticsSale() {
    return <Bar options={options} data={data} />;
}

export default ChartStatisticsSale;
