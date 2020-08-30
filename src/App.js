import React from 'react';
// import logo from './logo.svg';
// import './App.css';
//元件==============================
import ClippedDrawer from './header';
// import PrimarySearchAppBar from './compomt/_search';
// import LetterAvatars from './compomt/_avater.js';
// import SimplePortal from './compomt/_changecontent';
// import AccessibleTabs from './compomt/_changepage';
// import StickyHeadTable from './compomt/_table';
// import CollapsibleTable from './compomt/_table_2';
// import MaterialTableDemo from './compomt/_table_3';

//路由
// import Routerone from './road.js';




function App() {
  return (
    <div >
      {/* 路由---------------------- */}
      {/* <Routerone></Routerone> */}
      {/* header 加左邊選單----------- */}
      <ClippedDrawer></ClippedDrawer>
      {/* 搜尋欄     放header裡------------------ */}
      {/* <PrimarySearchAppBar></PrimarySearchAppBar> */}

      {/* 頭像------------------ */}
      {/* <LetterAvatars></LetterAvatars> */}
      {/* 改變內容 ------------------*/}
      {/* <SimplePortal></SimplePortal> */}

      {/* 換頁鈕 吧 */}
      {/* <AccessibleTabs></AccessibleTabs> */}

      {/* 基本表格 */}
      {/* <StickyHeadTable></StickyHeadTable> */}

      {/* 可伸展表格 */}
      {/* <CollapsibleTable></CollapsibleTable> */}

      {/* 可刪減表格  icon不能動作*/}
      {/* <MaterialTableDemo></MaterialTableDemo> */}


      <p>156</p>
    </div>
  );
}

export default App;






