import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
// import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
// import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';


// //-----------icon----------------------------------------
// //加按鈕
// import AddCircleIcon from '@material-ui/icons/AddCircle';
// import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
// //病人躺床上
// import AirlineSeatFlatIcon from '@material-ui/icons/AirlineSeatFlat';
// //線圖
import ShowChartIcon from '@material-ui/icons/ShowChart';



//-----------------------------------
// CardHeader   card標頭
// CardMedia    媒體
// CardContent  內容
// CardActions  動作

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  //頭像
  avatar: {
    backgroundColor: red[500],
  },
}));

//病人個資  PATIENT
//patient    問題:怎麼分辨category是哪一行  一二三四行怎區分
const PATIENT = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

// console.log("PATIENTy 資料內容：",PATIENT)
// console.log("PATIENTy 第0個陣列[0]",PATIENT[0])
// console.log("PATIENTy 第1個陣列[1]",PATIENT[1])

// const datatest="測試資料";


//改變的資料用prprs給進來  setInterval設刷新時間
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date() ,
      count:0
    };
  }
  //每當 Clock render 到 DOM 的時
  componentDidMount() {
    //開始計時
    this.timerID = setInterval(() => this.gettemperture(),1000);
  }
  //每當產生的 Clock DOM 被移除時
  componentWillUnmount() {
    //給結果
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({
      date: new Date()
    });
  }

  gettemperture(){
    // // console.log("取得溫度",this.state.count)s
    // //打一個if 上他不要超過上限 5
    // if (this.state.count >= 5) {
    //   this.setState({
    //     count : 0
    //   });
    // } else {
    //   this.setState({
    //     count : this.state.count+1
    //   });
    // }
    // //,PATIENT[this.state.count]
    // // console.log("取得溫度：",PATIENT[this.state.count].price)
    // console.log("測試",this.props.data.price)
    // console.log("")
  }

  render() {
    return (
      <div>
        {/* toLocaleTimeString?? */}
        {/* <p>526 {this.props.patient.price}</p> */}

        {/* <span>{this.props.data[this.state.count].price}</span> */}

        &nbsp;
        <span>{this.props.data.price}</span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;
        <span>{this.props.data.name}</span>

        {/* <h2>資料： {this.state.date.toLocaleTimeString()}.</h2> */}
      </div>
    );
  }
}



export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  //cardhader-----------
  //Avatar 頭像
  //action
  //title      大標
  //subheader  小標
  //CardMedia  圖片

  //IconButton 包著iconsvg 製造陰影的包裝

  //Typography??

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          // 頭像
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
                {/* 右上按鈕 */}
            <MoreVertIcon />
          </IconButton>
        }
        title="病人姓名"
        subheader="September 14, 2016"
      />
      {/* 圖片 */}
      {/* <CardMedia
        className={classes.media}
        //圖片連結
        image="/static/images/cards/paella.jpg"
        //滑鼠移到上面會出現
        title="Paella dish"
      ></CardMedia> */}
      {/* 內容 */}
      <CardContent>
        {/* <Typography variant="body2" color="textSecondary" component="p"> */}
        <Typography variant="body2"  component="p">
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests.
        </Typography>

        {/* 變化資料的function */}&nbsp;
        <h1>體溫  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;心率 </h1>

        <div>

            {/* 傳入第一個陣列的值 */}
            <Clock data={PATIENT[0]}/>


            {/* products傳入一個物件 */}
            {/* <FilterableProductTable products={PRODUCTS} /> */}
        </div>
        {/* ------------------------*/}

      </CardContent>
      {/* 底下按鈕 ACTION */}
      <CardActions disableSpacing>
        {/*  加到最愛按鈕 */}
        <IconButton aria-label="add to favorites">
          {/* <FavoriteIcon /> */}
          <ShowChartIcon></ShowChartIcon>
        </IconButton>
        {/*  分享按鈕 */}
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 下拉看表單</p>
        {/*  展開式內容按鈕 */}
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />

        </IconButton>
      </CardActions>
      {/* --------------------- */}

      {/* 展開的文章內容 改變expanded展開或合起來 */}

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>個人資料:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
            minutes.
          </Typography>

          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
            without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
            medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
            again without stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don’t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}