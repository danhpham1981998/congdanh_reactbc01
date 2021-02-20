import logo from './logo.svg';
import './App.css';
import HeaderFunc from './components/HeaderFun';
import HeaderClass from './components/HeaderClass';
import BaiTapLayout from './BaiTapLayout/BaiTapLayout';
import DataBinding from './DataBinding/DataBinding';
import RenderWithMap from './RenderWithMap/RenderWithMap';
import BaiTapRenderMap from './RenderWithMap/BaiTapRenderMap';
import DemoProps from './Props/DemoProps';
import DemoQLSP from './Props/DemoQLSP/DemoQLSP';

function App() {
  return (
    <div className="App">
      {/* <BaiTapLayout/> */}
      {/* <DataBinding/> */}
      {/* <RenderWithMap/> */}
      {/* <BaiTapRenderMap/> */}
      {/* <DemoProps/> */}
      <DemoQLSP/>
    </div>
  );
}

export default App;
