window.onload = function () {
  //获取并设置当天时间
  function getCurrentDate() {
    var now = new Date();
    var year = now.getFullYear(); //得到年份
    var month = now.getMonth() + 1; //得到月份
    var date = now.getDate(); //得到日期
    var EndTime = "18:00:00"; //你下班的时间
    var time = year + "/" + month + "/" + date + "," + EndTime;
    return time;
  }
  let XB_Times = getCurrentDate(); //处理时间

  function addZero(i) {
    return i < 10 ? "0" + i : i + "";
  }
  function countDown() {
    var nowtime = new Date();
    var endtime = new Date(XB_Times);
    var lefttime = parseInt((endtime.getTime() - nowtime.getTime()) / 1000);
    var d = parseInt(lefttime / (24 * 60 * 60));
    var h = parseInt((lefttime / (60 * 60)) % 24);
    var m = parseInt((lefttime / 60) % 60);
    var s = parseInt(lefttime % 60);
    d = addZero(d);
    h = addZero(h);
    m = addZero(m);
    s = addZero(s);
    document.getElementById(
      "count"
    ).innerHTML = `${h} 时 ${m} 分 ${s} 秒`;
    if (lefttime <= 0) {
      document.getElementById("count").innerHTML = "已经下班啦";
      return;
    }
    setTimeout(() => {
      countDown(XB_Times);
    }, 1000);
  }
  countDown(XB_Times);
};
