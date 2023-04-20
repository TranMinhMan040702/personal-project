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
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function ChartStatisticsSale() {
    const options = {
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

    const data = {
        labels,
        datasets: [
            {
                label: 'Doanh thu',
                data: [100, 55, 77, 88, 44, 12, 25, 36, 98, 78, 45, 16],
                backgroundColor: 'rgba(255, 99, 1, 0.5)',
            },
        ],
    };
    return <Bar options={options} data={data} />;
}

export default ChartStatisticsSale;
