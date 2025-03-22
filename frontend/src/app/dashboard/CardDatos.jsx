import { GraphicStyle, Texto, Titulo } from "@/componentes/style"
import { Tooltip } from "antd";
import { Bar, BarChart, CartesianGrid, Legend, RadialBar, RadialBarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';

const CardDatos = ({ gastos, ingresos, modoDatos }) => {

  const sumaGastos = parseFloat(gastos().map((item) => item.valor).reduce((acc, val) => acc + val, 0).toFixed(3));
  const sumaIngresos = parseFloat(ingresos.map((item) => item.valor).reduce((acc, val) => acc + val, 0).toFixed(3));
  const total = sumaIngresos - sumaGastos

  const gastosMap = gastos().map((item) => ({
    ...item,
    ["fecha"]: new Date(item.fecha).toLocaleDateString("es-ES"),
    ["gastos"]: item.valor

  }))

  const ingresosMap = ingresos.map((item) => ({
    ...item,
    ["fecha"]: new Date(item.fecha).toLocaleDateString("es-ES"),
    ["ingresos"]: item.valor

  }))

  const gastosIngresos = gastosMap.map((item, index) => ({

    ...item,
    ...ingresosMap[index],
  }))
  
  const datosGastos = gastos().map((item, index) => ({
    etiqueta: item.etiqueta || `Gasto ${index + 1}`, // Asegurar que haya etiqueta
    valor: item.valor,
    fill: item.fill || `#${Math.floor(Math.random() * 16777215).toString(16)}`, // Color aleatorio si no hay fill
  }));
  return (
    <GraphicStyle>
      {
      modoDatos === 1 && <LeaderboardIcon style={{ color: "orange",fontSize: "50px", display: "block",margin: "10px auto"}}/> ||
      modoDatos === 2 && <TrendingUpIcon style={{ color: "green",fontSize: "50px", display: "block",margin: "10px auto"}}/> ||
       modoDatos === 3 && <TrendingDownIcon style={{ color: "red",fontSize: "50px", display: "block",margin: "10px auto"}} /> 
      
      }
      {
        modoDatos === 1 && <Titulo >Total Acumulado</Titulo> ||
        modoDatos === 2 && <Titulo> Total Ingresos</Titulo> ||
        modoDatos === 3 && <Titulo> Total Gastos </Titulo> ||
        modoDatos === 4 && <Titulo>Diagrama de Ingresos y Gastos </Titulo> ||
        modoDatos === 5 && <Titulo>Diagrama de Gastos </Titulo>
      }
      {
        modoDatos === 1 && <Texto negativo={total < 0 ? "true" : undefined}>{total}</Texto> ||
        modoDatos === 2 && <Texto>{sumaIngresos}</Texto> ||
        modoDatos === 3 && <Texto>{sumaGastos} </Texto> ||
        modoDatos === 4 &&
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={gastosIngresos}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="fecha" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="gastos" fill="red" />
            <Bar dataKey="ingresos" fill="green" />
          </BarChart>
        </ResponsiveContainer>
        ||
        modoDatos === 5 &&
        <ResponsiveContainer width="100%" height={300} >
          <RadialBarChart
            innerRadius="10%"
            outerRadius="100%"
            barSize={20}
            data={datosGastos}
            startAngle={180}
            endAngle={0}
          >
            <RadialBar 
            minAngle={15} 
            label={{ fill: '#666', position: 'insideStart' }} 
            background 
            clockWise={true} 
            dataKey='valor' 
            />
            <Tooltip />
            <Legend 
            iconSize={10} 
            width={120} 
            height={140} 
            layout='vertical' 
            verticalAlign='middle' 
            align="center"
            wrapperStyle={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
              marginTop: 90
            }}
            formatter={(value, entry) => entry.payload.etiqueta} 
            />
          </RadialBarChart>
        </ResponsiveContainer>
        

      }
    </GraphicStyle >
  )
}

export default CardDatos