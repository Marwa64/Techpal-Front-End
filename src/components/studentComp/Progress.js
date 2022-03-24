import { Chart as ChartJS, ArcElement} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useSelector } from 'react-redux';

const Progress = (props) => {
    const percent = Math.round((props.current / props.total) * 100)

    const darkmode = useSelector(state => state.darkmode);
    const darkgrey = "#4b5664"
    const grey = "#e5e5e5"

    ChartJS.register(ArcElement);
    const data = {
      labels: ['Completed', 'Remaining'],
      datasets: [
        {
          label: 'Progress',
          data: [props.current, (props.total - props.current)],
          backgroundColor: [
            '#F03939',
            `${darkmode ? darkgrey : grey}`
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)'
          ],
          borderWidth: 0,
        },
      ],
    };

    const options = {        
        cutout: props.cutout
    };

    const plugins = [{
        beforeDraw: function(chart) {
         var width = chart.width,
             height = chart.height,
             ctx = chart.ctx;
             ctx.restore();
             var fontSize = (height / 140).toFixed(2);
             ctx.font = "bold " + fontSize + "em sans-serif";
             ctx.textBaseline = "top";
             var text = `${percent}%`,
             textX = Math.round((width - ctx.measureText(text).width) / 2) + 2,
             textY = (height / 2) - ((height/2) * 0.1);
             ctx.fillStyle = '#F03939';
             ctx.fillText(text, textX, textY);
             ctx.save();
        } 
      }]
      
    return (
        <div style={{height: props.height, width: props.width, borderRadius: "100%", backgroundColor: `${darkmode ? "#262a2f" : "white"}`}}>
            <Doughnut data={data} plugins={plugins} options={options}/>
        </div>
    )
}

export default Progress;