import { AxesDirective, AxisDirective, LinearGaugeComponent, PointerDirective, PointersDirective, RangeDirective, RangesDirective} from '@syncfusion/ej2-react-lineargauge';
import './App.css';

function App() {
  return (
    <div className="App">
      <LinearGaugeComponent orientation='Horizontal' >
        <AxesDirective>
          <AxisDirective line={{height:400,width:4,color:'#4286f4'}}
          majorTicks={{color:'green',interval:10,position:'Cross'}}
          minorTicks={{color:'red',interval:5,position:'Cross'}}
          isInversed={true}
          labelStyle={{font:{color:'#6FC78A'},position:'Inside',offset:10,useRangeColor:true}}>
            <RangesDirective>
              <RangeDirective start={50} end={80} startWidth={5} endWidth={10} color='blue'>
              </RangeDirective>
              {/* <RangeDirective start={20} end={40} color='#ECC85B'>
              </RangeDirective> */}
            </RangesDirective>
            <PointersDirective>
              <PointerDirective value={40} markerType='Circle' height={15} width={15} color='#cd41f4'
              position='Cross'>
              </PointerDirective>
              <PointerDirective value={30} type='Bar' color='#f54ea2' animationDuration={1000}>
              </PointerDirective>
            </PointersDirective>
          </AxisDirective>
          {/* <AxisDirective line={{height:400,color:'#4286f4'}} opposedPosition={true}>
          </AxisDirective> */}
        </AxesDirective>
      </LinearGaugeComponent>
    </div>
  );
}
export default App;