import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

//icon
import SettingsIcon from '@material-ui/icons/Settings';

//網格系統
import Grid from '@material-ui/core/Grid';

//路由
// import Routerone from './road.js';

//卡片
import RecipeReviewCard from './compomt/card_test_2.jsx';
// import MaterialTableDemo from './compomt/_table_3';

// //-----------icon----------------------------------------
// //加按鈕
// import AddCircleIcon from '@material-ui/icons/AddCircle';
// import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
// //病人躺床上
// import AirlineSeatFlatIcon from '@material-ui/icons/AirlineSeatFlat';
// //線圖
// import ShowChartIcon from '@material-ui/icons/ShowChart';



const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,//theme給值
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),//theme給值
  },
}));


//================寫抓資料function


//==========把資料寫成state timer計時改變 舊clock的東西搬過來
export default function ClippedDrawer() {
  const classes = useStyles();




  return (
    <div className={classes.root}>
      <CssBaseline />
      {/* ?? */}
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            醫療監控站
          </Typography>
          {/* api有甚麼 */}
        </Toolbar>
      </AppBar>
      {/* 左邊抽屉 ----------------------------------- */}
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        {/* Drawer 抽屜 */}
        <Toolbar />
        {/* 在這裡Toolber是加空間用的 */}

        {/* 左邊的list ListItemIcon??  ListItemText?? */}
        <div className={classes.drawerContainer}>
          <List>
            {['生理訊息監控', '訊息通知', '歷史紀錄', '釘選病人'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <SettingsIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          {/* 列表分隔線 */}
          <Divider />
          <List>
            {['帳號登入', '設定', '元件上線狀況'].map((text, index) => (
              <ListItem button key={text}>
                {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
                <ListItemIcon>
                  {/* {console.log("2626",index,"",text) } */}


                  {/* index是甚麼 */}
                  {index  === 1 ? <InboxIcon /> : <MailIcon />}
                  {/* {  if (index === 0) {
                       return  <InboxIcon />
                      } else {
                        result = 'NOT positive';
                      }} */}
                  {/* {index  === 1 ? <InboxIcon /> : <MailIcon />}
                  {index  === 2 ? <InboxIcon /> : <MailIcon />}
                  {index  === 3 ? <InboxIcon /> : <MailIcon />} */}
                  {/* <SettingsIcon/> */}
                  {/* <InboxIcon /> */}
                </ListItemIcon>

                <ListItemText primary={text} />
                {/* SettingsIcon */}
              </ListItem>
            ))}
              {/* 轉網址link --------------*/}
              {/* <Link to="/users">Users</Link> */}
              <ListItemLink to="/spam" primary="Spam" />
              {/* <ListItemLink href="/about">
                  <ListItemText primary="Spam" />
              </ListItemLink> */}

          </List>
        </div>
      </Drawer>
      {/* 主要頁面 */}
      <main className={classes.content}>
        <Toolbar />



        <Grid container spacing={5}>
              <Grid item xs={0} sm={1}/>
              <Grid item xs={12} sm={3} >
                  <RecipeReviewCard/>
              </Grid>
              <Grid item xs={12} sm={3} >
                  <RecipeReviewCard/>
              </Grid>
              <Grid item xs={12} sm={3} >
                  <RecipeReviewCard/>
              </Grid>
              {/* <Grid item xs={0} sm={2}/> */}
          </Grid>
          <br></br>
          <br></br>
          <br></br>
          <Grid container spacing={5}>
              <Grid item xs={0} sm={1}/>
              <Grid item xs={12} sm={3} >
                  <RecipeReviewCard/>
              </Grid>
              <Grid item xs={12} sm={3} >
                  <RecipeReviewCard/>
              </Grid>
              <Grid item xs={12} sm={3} >
                  <RecipeReviewCard/>
              </Grid>
              {/* <Grid item xs={0} sm={2}/> */}
          </Grid>

        {/* <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
          facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
          gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
          donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
          Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
          imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
          arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
          donec massa sapien faucibus et molestie ac.
          這裡要放病人card  先做病人card
        </Typography>
        <p>156</p>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
          facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
          tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
          consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
          vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
          hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
          tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
          nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
          accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography> */}
        <Grid container spacing={3}>
            <Grid item xs={0} sm={2}/>

            <Grid item xs={12} sm={6} >
                this is Grid this is Grid this is Grid this is Gridv this is Grid this is Grid this is Grid this is Grid
                this is Grid this is Grid this is Grid this is Gridv this is Grid this is Grid this is Grid this is Grid
                this is Grid this is Grid this is Grid this is Gridv this is Grid this is Grid this is Grid this is Grid
                this is Grid this is Grid this is Grid this is Gridv this is Grid this is Grid this is Grid this is Grid
            </Grid>

            <Grid item xs={0} sm={2}/>
        </Grid>



      </main>
    </div>
  );
}

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}