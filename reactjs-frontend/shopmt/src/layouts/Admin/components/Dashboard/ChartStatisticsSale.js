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

function ChartStatisticsSale({ dataStatistic }) {
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
                data: dataStatistic,
                backgroundColor: 'rgba(255, 99, 1, 0.5)',
            },
        ],
    };
    return <Bar options={options} data={data} />;
}

export default ChartStatisticsSale;
