function getDateDelta(strdate1, strdate2) {
  try {
    let d1 = new Date(strdate1);
    let d2 = new Date(strdate2);
    let n1 = d1.valueOf();
    let n2 = d2.valueOf();
    return Math.floor((n1 - n2) / 86400000);
  } catch (err) {
    console.log("Something wrong on function getDate() !!!");
  }
};

function formatDate(date) {
  var d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("-");
};

Vue.filter("TachHang", function (t) {
  if (Number(t) == NaN) return "";
  return new Intl.NumberFormat("vi-VI", {
    useGrouping: true,
    minimumIntegerDigits: 2
  }).format(t);
});

var webapp = new Vue({
  el: "#webapp",
  delimiters: ["{`", "`}"],
  data() {
    return {
      calcDate: formatDate(new Date('2019-04-21')),
      calcKhu: "nb",
      calcLo: '00',
      Thoi: 10,
      testNhan: "87",
      isFat: false,
      maxRef: 14,
      showRef: false,
      dataApi: {},
    };
  },
  computed: {
    listNgay() {
      let now = new Date();
      let a = [];
      for (let i = 0; i < 7; i++) {
        let curDate = new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate() - i
        );
        a.push(formatDate(curDate));
      }
      return a;
    },
    listLo() {
      let a = [];
      for (let i = 0; i < 63; i++) {
        a.push(i);
      }
      return a;
    },
    listThoi() {
      let a = [];
      for (let i = 0; i < 11; i++) {
        a.push(i);
      }
      return a;
    },
    listmaxRef() {
      let a = [];
      for (let i = 1; i <= this.maxRef; i++) {
        a.push(i);
      }
      return a;
    },
    listKhu() {
      let a = ["nb", "mn", "mb", "mn1", "mn2"];
      return a;
    },
    dataMienFatFit() {
      switch (this.calcKhu) {
        case "mn1":
          if (this.isFat) {
            return this.dataApi.fatmn1;
          } else {
            return this.dataApi.fitmn1;
          }
        case "mn2":
          if (this.isFat) {
            return this.dataApi.fatmn2;
          } else {
            return this.dataApi.fitmn2;
          }
        case "mn":
          if (this.isFat) {
            return this.dataApi.fatmn;
          } else {
            return this.dataApi.fitmn;
          }
        case "mb":
          if (this.isFat) {
            return this.dataApi.fatmb;
          } else {
            return this.dataApi.fitmb;
          }
        default:
          if (this.isFat) {
            return this.dataApi.fatnb;
          } else {
            return this.dataApi.fitnb;
          }
      }
    },
    dataByLo() {
      try {
        return recs = this.dataMienFatFit.filter(
          item =>
            item.lo
              .indexOf(this.calcLo) > -1
        );
      } catch (e) {
        return [];
      }
    },
    dataKq() {
      try {
        //let calcDate= formatDate(this.calcDate)
        return this.dataByLo.filter(
          item =>
            item.ngay
              .toLowerCase()
              .indexOf(this.calcDate.toLowerCase()) > -1
        );
      } catch (e) {
        return [];
      }
    },
    dataRefs() {
      let recs = this.dataByLo;
      let ii = recs.length;
      let a = [];
      for (let i = 0; i < ii; i++) {
        let rec = recs[i];
        let delta = getDateDelta(this.calcDate, rec.ngay);
        if (delta <= this.maxRef && delta > 0) {
          a.push(rec);
        }
      }
      return a;
    },
    dataRef() {
      var aa = [];
      for (let t = 0; t < 10; t++) {
        let a = {
          thoi: t,
          lo: this.calcLo,
          tt: 0,
          td: 0,
          tc: 0,
          ct: 0,
          cn: 0,
          cc: 0,
          cl: 0,
          ca: 0,
          cd: 0,
          c0: 0,
          c1: 0,
          c2: 0,
          c3: 0,
          c4: 0,
          c5: 0,
          c6: 0,
          c7: 0,
          c8: 0,
          c9: 0,
          dt: 0,
          dn: 0,
          dc: 0,
          dl: 0,
          da: 0,
          dd: 0,
          d0: 0,
          d1: 0,
          d2: 0,
          d3: 0,
          d4: 0,
          d5: 0,
          d6: 0,
          d7: 0,
          d8: 0,
          d9: 0
        };
        let recs = this.dataRefs.filter(
          item => parseInt(item.thoi) == t
        );
        let ii = recs.length;
        for (let i = 0; i < ii; i++) {
          let rec = recs[i];
          a.tt = a.tt + rec.tt;
          a.tc = a.tc + rec.tc;
          a.td = a.td + rec.td;
          a.ct = a.ct + rec.ct;
          a.cn = a.cn + rec.cn;
          a.cc = a.cc + rec.cc;
          a.cl = a.cl + rec.cl;
          a.ca = a.ca + rec.ca;
          a.cd = a.cd + rec.cd;
          a.c0 = a.c0 + rec.c0;
          a.c1 = a.c1 + rec.c1;
          a.c2 = a.c2 + rec.c2;
          a.c3 = a.c3 + rec.c3;
          a.c4 = a.c4 + rec.c4;
          a.c5 = a.c5 + rec.c5;
          a.c6 = a.c6 + rec.c6;
          a.c7 = a.c7 + rec.c7;
          a.c8 = a.c8 + rec.c8;
          a.c9 = a.c9 + rec.c9;
          a.dt = a.dt + rec.dt;
          a.dn = a.dn + rec.dn;
          a.dc = a.dc + rec.dc;
          a.dl = a.dl + rec.dl;
          a.da = a.da + rec.da;
          a.dd = a.dd + rec.dd;
          a.d0 = a.d0 + rec.d0;
          a.d1 = a.d1 + rec.d1;
          a.d2 = a.d2 + rec.d2;
          a.d3 = a.d3 + rec.d3;
          a.d4 = a.d4 + rec.d4;
          a.d5 = a.d5 + rec.d5;
          a.d6 = a.d6 + rec.d6;
          a.d7 = a.d7 + rec.d7;
          a.d8 = a.d8 + rec.d8;
          a.d9 = a.d9 + rec.d9;
        }
        aa.push(a);
      }
      return aa;
    },
    thoiKq() {
      let recs = this.dataKq;
      if (this.Thoi >= 0 && this.Thoi < 10) {
        recs = recs.filter(item => parseInt(item.thoi) == this.Thoi);
      }
      return recs;
    },
    thoiRefs() {
      let recs = this.dataRefs;
      if (this.Thoi >= 0 && this.Thoi < 10) {
        recs = recs.filter(item => parseInt(item.thoi) == this.Thoi);
      }
      return recs;
    },
    thoiRef() {
      let recs = this.dataRef;
      if (this.Thoi >= 0 && this.Thoi < 10) {
        recs = recs.filter(item => parseInt(item.thoi) == this.Thoi);
      }
      return recs;
    },
    Nhan() {
      try {
        return this.thoiKq[0].nhan;
      } catch (err) {
        console.log("Something wrong on Nhan() !!!");
        return "-"
      }
    },
    doanKq() {
      var a = {
        c0: "c0",
        c1: "c1",
        c2: "c2",
        c3: "c3",
        c4: "c4",
        c5: "c5",
        c6: "c6",
        c7: "c7",
        c8: "c8",
        c9: "c9",
        d0: "d0",
        d1: "d1",
        d2: "d2",
        d3: "d3",
        d4: "d4",
        d5: "d5",
        d6: "d6",
        d7: "d7",
        d8: "d8",
        d9: "d9"
      };
      if (!isNaN(this.Nhan)) return a;
      if (this.Thoi > 9) return a;
      if (this.Thoi < 0) return a;
      let c = Math.floor(this.Nhan / 10);
      let d = this.Nhan % 10;
      let nu = (c + d) % 10;
      let dv = (nu + this.Thoi) % 10;
      let ch = (nu + c) % 10;
      a.c0 = ((ch + 0) % 10).toString() + dv.toString();
      a.c1 = ((ch + 1) % 10).toString() + dv.toString();
      a.c2 = ((ch + 2) % 10).toString() + dv.toString();
      a.c3 = ((ch + 3) % 10).toString() + dv.toString();
      a.c4 = ((ch + 4) % 10).toString() + dv.toString();
      a.c5 = ((ch + 5) % 10).toString() + dv.toString();
      a.c6 = ((ch + 6) % 10).toString() + dv.toString();
      a.c7 = ((ch + 7) % 10).toString() + dv.toString();
      a.c8 = ((ch + 8) % 10).toString() + dv.toString();
      a.c9 = ((ch + 9) % 10).toString() + dv.toString();
      ch = (nu + this.Thoi) % 10;
      dv = (nu + d) % 10;
      a.d0 = ch.toString() + ((dv + 0) % 10).toString();
      a.d1 = ch.toString() + ((dv + 1) % 10).toString();
      a.d2 = ch.toString() + ((dv + 2) % 10).toString();
      a.d3 = ch.toString() + ((dv + 3) % 10).toString();
      a.d4 = ch.toString() + ((dv + 4) % 10).toString();
      a.d5 = ch.toString() + ((dv + 5) % 10).toString();
      a.d6 = ch.toString() + ((dv + 6) % 10).toString();
      a.d7 = ch.toString() + ((dv + 7) % 10).toString();
      a.d8 = ch.toString() + ((dv + 8) % 10).toString();
      a.d9 = ch.toString() + ((dv + 9) % 10).toString();
      return a;
    },
    tongKq() {
      var a = {
        tt: 0,
        td: 0,
        tc: 0,
        ct: 0,
        cn: 0,
        cc: 0,
        cl: 0,
        ca: 0,
        cd: 0,
        c0: 0,
        c1: 0,
        c2: 0,
        c3: 0,
        c4: 0,
        c5: 0,
        c6: 0,
        c7: 0,
        c8: 0,
        c9: 0,
        dt: 0,
        dn: 0,
        dc: 0,
        dl: 0,
        da: 0,
        dd: 0,
        d0: 0,
        d1: 0,
        d2: 0,
        d3: 0,
        d4: 0,
        d5: 0,
        d6: 0,
        d7: 0,
        d8: 0,
        d9: 0
      };
      a.lo = this.calcLo;
      var recs = this.thoiKq;
      let ii = recs.length;
      for (let i = 0; i < ii; i++) {
        let rec = recs[i];
        a.tt = a.tt + rec.tt;
        a.tc = a.tc + rec.tc;
        a.td = a.td + rec.td;
        a.ct = a.ct + rec.ct;
        a.cn = a.cn + rec.cn;
        a.cc = a.cc + rec.cc;
        a.cl = a.cl + rec.cl;
        a.ca = a.ca + rec.ca;
        a.cd = a.cd + rec.cd;
        a.c0 = a.c0 + rec.c0;
        a.c1 = a.c1 + rec.c1;
        a.c2 = a.c2 + rec.c2;
        a.c3 = a.c3 + rec.c3;
        a.c4 = a.c4 + rec.c4;
        a.c5 = a.c5 + rec.c5;
        a.c6 = a.c6 + rec.c6;
        a.c7 = a.c7 + rec.c7;
        a.c8 = a.c8 + rec.c8;
        a.c9 = a.c9 + rec.c9;
        a.dt = a.dt + rec.dt;
        a.dn = a.dn + rec.dn;
        a.dc = a.dc + rec.dc;
        a.dl = a.dl + rec.dl;
        a.da = a.da + rec.da;
        a.dd = a.dd + rec.dd;
        a.d0 = a.d0 + rec.d0;
        a.d1 = a.d1 + rec.d1;
        a.d2 = a.d2 + rec.d2;
        a.d3 = a.d3 + rec.d3;
        a.d4 = a.d4 + rec.d4;
        a.d5 = a.d5 + rec.d5;
        a.d6 = a.d6 + rec.d6;
        a.d7 = a.d7 + rec.d7;
        a.d8 = a.d8 + rec.d8;
        a.d9 = a.d9 + rec.d9;
      }
      return a;
    },
    tongRef() {
      var a = {
        tt: 0,
        td: 0,
        tc: 0,
        ct: 0,
        cn: 0,
        cc: 0,
        cl: 0,
        ca: 0,
        cd: 0,
        c0: 0,
        c1: 0,
        c2: 0,
        c3: 0,
        c4: 0,
        c5: 0,
        c6: 0,
        c7: 0,
        c8: 0,
        c9: 0,
        dt: 0,
        dn: 0,
        dc: 0,
        dl: 0,
        da: 0,
        dd: 0,
        d0: 0,
        d1: 0,
        d2: 0,
        d3: 0,
        d4: 0,
        d5: 0,
        d6: 0,
        d7: 0,
        d8: 0,
        d9: 0
      };
      a.lo = this.calcLo;
      var recs = this.thoiRef;
      let ii = recs.length;
      for (let i = 0; i < ii; i++) {
        let rec = recs[i];
        a.tt = a.tt + rec.tt;
        a.tc = a.tc + rec.tc;
        a.td = a.td + rec.td;
        a.ct = a.ct + rec.ct;
        a.cn = a.cn + rec.cn;
        a.cc = a.cc + rec.cc;
        a.cl = a.cl + rec.cl;
        a.ca = a.ca + rec.ca;
        a.cd = a.cd + rec.cd;
        a.c0 = a.c0 + rec.c0;
        a.c1 = a.c1 + rec.c1;
        a.c2 = a.c2 + rec.c2;
        a.c3 = a.c3 + rec.c3;
        a.c4 = a.c4 + rec.c4;
        a.c5 = a.c5 + rec.c5;
        a.c6 = a.c6 + rec.c6;
        a.c7 = a.c7 + rec.c7;
        a.c8 = a.c8 + rec.c8;
        a.c9 = a.c9 + rec.c9;
        a.dt = a.dt + rec.dt;
        a.dn = a.dn + rec.dn;
        a.dc = a.dc + rec.dc;
        a.dl = a.dl + rec.dl;
        a.da = a.da + rec.da;
        a.dd = a.dd + rec.dd;
        a.d0 = a.d0 + rec.d0;
        a.d1 = a.d1 + rec.d1;
        a.d2 = a.d2 + rec.d2;
        a.d3 = a.d3 + rec.d3;
        a.d4 = a.d4 + rec.d4;
        a.d5 = a.d5 + rec.d5;
        a.d6 = a.d6 + rec.d6;
        a.d7 = a.d7 + rec.d7;
        a.d8 = a.d8 + rec.d8;
        a.d9 = a.d9 + rec.d9;
      }
      return a;
    },
    apiMien() {
      let s = '';
      switch (this.calcKhu) {
        case "mn1":
          if (this.isFat) {
            s = 'fatmn1';
            break;
          } else {
            s = 'fitmn1';
            break;
          }
        case "mn2":
          if (this.isFat) {
            s = 'fatmn2';
            break;
          } else {
            s = 'fitmn2';
            break;
          }
        case "mn":
          if (this.isFat) {
            s = 'fatmn';
            break;
          } else {
            s = 'fitmn';
            break;
          }
        case "mb":
          if (this.isFat) {
            s = 'fatmb';
            break;
          } else {
            s = 'fitmb';
            break;
          }
        default:
          if (this.isFat) {
            s = 'fatnb';
            break;
          } else {
            s = 'fitnb';
            break;
          }
      }
      return s;
    },
    apiDate() {
      return this.calcDate;
    }
  },
  methods: {
    getDataApi() {
      let url = 'http://localhost:8888/api/fitnb/2019-04-20';
      axios
        .get(url)
        .then(response => {
          this.dataApi = response.data;
        })
        .catch(e => {
          //hong bit
        })
    }
  },
  mounted() {
    this.getDataApi();
  },
});
