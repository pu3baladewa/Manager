//****** AllWebMenus Libraries Version # 766 ******

// Copyright (c) Likno Software 1999-2009
// The present javascript code is property of Likno Software.
// This code can only be used inside Internet/Intranet web sites located on *web servers*, as the outcome of a licensed AllWebMenus application only. 
// This code *cannot* be used inside distributable implementations (such as demos, applications or CD-based webs), unless this implementation is licensed with an "AllWebMenus License for Distributed Applications". 
// Any unauthorized use, reverse-engineering, alteration, transmission, transformation, facsimile, or copying of any means (electronic or not) is strictly prohibited and will be prosecuted.
// ***Removal of the present copyright notice is strictly prohibited***

var n$ = null, xxxx = Object, $un = "undefined", $D = document, dBd = $D.body, awmhd = 200, aSD = 200, aFC = new Array(), awmdst = "", awmcrm, awmcre, awmmo, awmso, awmctm = n$, awmdid, awmsht = "", awmsoo = 0, awmNS6OffsetX, awmNS6OffsetY, awmKonOffsetX, awmKonOffsetY, awmSafOffsetX, awmSafOffsetY, awmRTLSupport, awmRelativeCorner, awmRightToLeftFrame, awmlsx = window.pageXOffset, awmlsy = window.pageYOffset, awmalt = ["left", "center", "right"], awmplt = ["absolute", "relative"], awmvlt = ["visible", "hidden", "inherit"], awmctlt = ["default", "pointer", "crosshair", "help", "move", "text", "wait"], dH = kP(), dI = kP(), dJ = kP(), dK = kP(), dA = "64483D5B223638373437343730222C22334132463246225D2C64492C644A3D5B223636363936433635222C223643364636333631364336383646373337343246225D3B", dB = "3C62207374796C653D27636F6C6F723A23666630303030273E416C6C5765624D656E757320545249414C206D6F6465213C2F623E3C62723E547269616C206D656E752063616E20626520746573746564206F6E204C4F43414C484F5354206F6E6C793C62723E28646F6573204E4F5420617070656172206F6E6C696E652129", SI = ["687474703A2F2F7777772E", "6C696B6E6F", "2E636F6D2F", "4448544D4C", "4A415641534352495054", "44524F50444F574E", "44524F502D444F574E", "646F63756D656E742E6C696E6B73", "4D454E55"], aL = eval(aue(SI[7])), mpi, awmwblt, iG1 = parseFloat(nua.substring(nua.indexOf("rv:") + 3, nua.indexOf("rv:") + 6)) > 1, aCI, vl, vt, vr, vb, isKonq = nua.indexOf('Konqueror') > -1, isSaf = (nua.indexOf('Safari') > -1), isNav = (nua.indexOf('Netscape') > -1), isNavV = ((isNav) ? (parseFloat(nua.substring(nua.indexOf('Netscape') + 9, nua.indexOf('Netscape') + 10))) : 0);
var scW = gScW();
aCo();
if (awmso > 0) {
    awmsoo = awmso + 1;
} else {
    var awmsc = new Array();
}
var awmLH, awmLSH, awmlssx = window.pageXOffset, awmlssy = window.pageYOffset, awmSelectedItem, awmSepr, awmHideID, awmCollID, aUF, aIP = awmMenuPath + awmImagesPath, aDGP;
if (awmcre >= 0)
    ;
else
    awmcre = 0;
var aRsF, aRsF1;
if (aRsF1 != 1) {
    aRsF = window.onresize;
    aRsF1 = 1;
}
window.onresize = awmwr;
function gScW() {
    var scr = n$, inn = n$, wS = 0;
    scr = $D.createElement('div');
    scr.style.position = 'absolute';
    aMove(scr, -1000, -1000, 100, 50);
    scr.style.overflow = 'auto';
    inn = $D.createElement('div');
    aMove(inn, n$, n$, n$, 200);
    inn.style.width = '100%';
    scr.appendChild(inn);
    dBd.appendChild(scr);
    wS = oW(scr) - scr.clientWidth;
    dBd.removeChild(dBd.lastChild);
    return (wS);
}
function vSE() {
    if (dBd.scrollWidth > dBd.clientWidth)
        return 1;
    return 0;
}
function awmpopup(link, parms) {
    window.open(link, "def", parms);
}
function awmhidediv() {
    var m = 1;
    while (dg("awmflash" + m)) {
        dg("awmflash" + m).style.visibility = "hidden";
        m++;
    }
}
function awmshowdiv() {
    var m = 1;
    while (dg("awmflash" + m)) {
        dg("awmflash" + m).style.visibility = "visible";
        m++;
    }
}
function aue(s) {
    s2 = s.split("");
    s1 = "";
    for (var i = 0; i < s.length; i++) {
        s1 += "%" + s2[i] + s2[i + 1];
        i++;
    }
    return unescape(s1);
}
function aLf() {
    for (var i = 0; i < aL.length; i++) {
        var aa = aL[i];
        if (aa.href.substr(0, 20) + "/" == aue(SI[0] + SI[1] + SI[2]) && aLg(aa.innerHTML))
            return 1;
    }
}
function aLg($) {
    $$ = $.toUpperCase();
    if ($$.search(aue(SI[8])) < 6)
        return 0;
    for (var i = 3; i < 7; i++)
        if ($$.search(aue(SI[i])) > -1)
            return 1;
}
function dg(o1) {
    return $D.getElementById(o1);
}
function kP() {
    return new Array()
}
function aLh2() {
    dI = "";
    dK[0] = "";
    for (var i = 2; i < dH.length; i++) {
        dI += "." + aue(dH[i]);
        if (aue(dH[i]) == aue("7C")) {
            dK[dK.length] = "";
            dK[dK.length - 2] = dK[dK.length - 2].substring(1);
        } else {
            dK[dK.length - 1] += "." + aue(dH[i]);
        }
    }
    dK[dK.length - 1] = dK[dK.length - 1].substring(1);
    dI = dI.substring(1);
    dH[0] = (mpi.substring(0, mpi.search(aue(dH[1]))));
    dH[dH.length] = mpi.substring(mpi.search(aue(dH[1])) + 3);
    if (dH[dH.length - 1].substring(0, 3) == aue("777777"))
        if (!isNaN(dH[dH.length - 1].substring(3, 4)) && dH[dH.length - 1].substring(4, 5) == aue("2E"))
            dH[dH.length - 1] = dH[dH.length - 1].substring(5);
    if (dH[dH.length - 1].substring(0, 4) == aue("7777772E"))
        dH[dH.length - 1] = dH[dH.length - 1].substring(4);
    dH[dH.length - 1] = dH[dH.length - 1].substring(0, dH[dH.length - 1].search("/"));
    if (dH[dH.length - 1].search(":") > -1)
        dH[dH.length - 1] = dH[dH.length - 1].substring(0, dH[dH.length - 1].search(":")) + "/";
    else
        dH[dH.length - 1] += "/";
}
function awmiht(image, lgg, lgg2, tpi) {
    return "<img " + ((lgg2) ? "style='display:block' " : "") + " src='" + awmm[tpi].aIP + "/" + aIC[tpi][image * 3] + "'" + ((aIC[tpi][image * 3 + 1]) ? (" width='" + aIC[tpi][image * 3 + 1]) + "'" : "") + ((aIC[tpi][image * 3 + 2]) ? (" height='" + aIC[tpi][image * 3 + 2]) + "'" : "") + " align='" + ((lgg) ? lgg : "absmiddle") + "' alt=''>";
}
function awmatai(text, image, algn, $A, tpi) {
    if (text == n$)
        text = "";
    var i = 0;
    while (text.charAt(0) == " ") {
        i++;
        text = text.substring(1);
    }
    while (i > 0) {
        text = "&nbsp;" + text;
        i--;
    }
    i = 0;
    while (text.charAt(text.length - 1) == " ") {
        i++;
        text = text.substring(0, text.length - 1);
    }
    while (i > 0) {
        text += "&nbsp;";
        i--;
    }
    var s1 = (text != "" && text != n$ && (algn == 0 || algn == 2) && image != n$) ? "<br>" : "";
    var s2 = ((image != n$) ? awmiht(image, n$, ((text != "") ? 0 : 0), tpi) : "");
    var s = ((algn == 0 || algn == 3) ? s2 + s1 + text : text + s1 + s2);
    if ($A == 0)
        s = "<nobr>" + s + "</nobr>";
    else
        s = "<span>" + s + "</span>";
    return s;
}
function awmCF() {
    aFC[aFC.length] = arguments;
}
function awmCreateCSS(pos, vis, algnm, fgc, bgc, bgi, fnt, tdec, bs, bw, bc, pd, crs) {
    if (awmso >= 0)
        awmso++;
    else
        awmso = 0;
    var bSa = bs.split(" ");
    if (bSa.length == 1)
        bSa[3] = bSa[2] = bSa[1] = bSa[0];
    var bWl = bWt = bWr = bWb = bw;
    if (typeof (bw) != "number") {
        var bW0 = bw.split("px ");
        bWt = parseInt(bW0[0]);
        if (bW0.length > 1) {
            bWr = parseInt(bW0[1]);
            bWb = parseInt(bW0[2]);
            bWl = parseInt(bW0[3]);
        } else {
            bWr = bWb = bWl = bWt;
        }
    }
    bWt = (bSa[0] == "none" ? 0 : bWt);
    bWr = (bSa[1] == "none" ? 0 : bWr);
    bWb = (bSa[2] == "none" ? 0 : bWb);
    bWl = (bSa[3] == "none" ? 0 : bWl);
    var pAl = pd;
    if (typeof (pd) != "number") {
        var pA0 = pd.split("px ");
        if (pA0.length > 1) {
            pAl = parseInt(pA0[3]);
        } else {
            pAl = parseInt(pA0[0]);
        }
    }
    var style = {id: "AWMST" + awmso, id2: "AWMSTTD" + awmso, id3: "AWMSTBG" + awmso, id3a: "AWMSTBGa" + awmso, id3b: "AWMSTBGb" + awmso, id3c: "AWMSTBGc" + awmso, id4: "AWMSTCBG" + awmso, pos: pos, vis: vis, algnm: algnm, fgc: fgc, bgc: bgc, bgi: bgi, fnt: fnt, tdec: tdec, bs: bs, bw: bw, bWt: bWt, bWl: bWl, bWb: bWb, bWr: bWr, pAl: pAl, bc: bc, zi: awmzindex, pd: pd, crs: crs};
    awmsht += "." + style.id + " {position:absolute;width:100%;visibility:" + awmvlt[vis] + ";" + "text-align:" + awmalt[algnm] + "; " + ((fnt != n$) ? "font:" + fnt + "; " : "") + ((tdec != n$) ? "text-decoration:" + tdec + "; " : "") + ((fgc != n$) ? "color:" + fgc + ";" : "") + "background-color:transparent;" + ((bs != n$) ? "border-style:" + bs + "; " : "") + ((bw != n$) ? "border-width:" + bw + "px; " : "") + ((bc != n$) ? "border-color:" + bc + "; " : "") + " cursor:" + awmctlt[crs] + ";z-index:" + style.zi + "}";
    awmsht += "." + style.id2 + " {border-style:none;border-width:0px;text-align:" + awmalt[algnm] + "; " + ((fnt != n$) ? "font:" + fnt + "; " : "") + ((tdec != n$) ? "text-decoration:" + tdec + "; " : "") + ((fgc != n$) ? "color:" + fgc + ";" : "") + "background-color:transparent;}";
    awmsht += "." + style.id3 + " {position:absolute;left:0px;top:0px;" + ((bs != n$) ? "border-style:" + bs + "; " : "") + ((bw != n$) ? "border-width:" + bw + "px; " : "") + ((bc != n$) ? "border-color:" + bc + ";" : "") + ((bgi != n$) ? "background-image:url('" + aIP + "/" + awmImagesColl[bgi * 3] + "');" : "") + "background-color:" + ((bgc != n$) ? bgc + ";" : "transparent;") + "z-index:auto;}";
    awmsht += "." + style.id4 + " {position:absolute;visibility:" + awmvlt[vis] + ";" + ((bgi != n$) ? "background-image:url('" + aIP + "/" + awmImagesColl[bgi * 3] + "');" : "") + "background-color:" + ((bgc != n$) ? bgc + ";" : "transparent;") + ((bs != n$) ? "border-style:" + bs + ";" : "") + ((bw != n$) ? "border-width:" + bw + "px;" : "") + ((bc != n$) ? "border-color:" + bc + ";" : "") + "z-index:" + style.zi + "}";
    if (bgi != n$) {
        awmsht += "." + style.id3a + " {background-image:url('" + aIP + "/" + awmImagesColl[bgi * 3] + "')}";
        awmsht += "." + style.id3b + " {position:absolute;left:0px;top:0px;" + ((bs != n$) ? "border-style:" + bs + "; " : "") + ((bw != n$) ? "border-width:" + bw + "px; " : "") + ((bc != n$) ? "border-color:" + bc + ";" : "") + "background-color:" + ((bgc != n$) ? bgc + ";" : "transparent;") + "z-index:auto;}";
        awmsht += "." + style.id3c + " {position:absolute;left:0px;top:0px}";
    }
    aFC = new Array();
    awmsc[awmsc.length] = style;
}
function awmCreateMenu(cll, swn, swr, mh, ud, sa, mvb, dft, crn, dx, dy, ss, ct, cs, dbi, ew, eh, jcoo, jcoc, opc, elemRel, groupID, offX2, offY2, mwd, mScr, dd, grShowDelay, grHideDelay, menuHowD, udd, sUC, mbM, mS0, mS1, mS2, mS3, mS4, mS5, mS6, mS7, mScr2, aIH, rmbS, pushPull) {
    if (awmmo >= 0)
        awmmo++;
    else {
        awmm = new Array();
        awmmo = 0
    }
    ;
    var me = {ind: awmmo, nm: awmMenuName, cn: new Array(), fl: !awmsc[cs].pos, cll: cll, mvb: mvb, dft: dft, crn: crn, dx: (ct < 2) ? dx : 0, dy: dy, ss: ss, sht: "<STYLE>" + awmsht + "</STYLE>", rep: 0, mio: 0, st: awmOptimize ? 2 : 3, sFO: awmSubmenusFrameOffset, selectedItem: (typeof (awmSelectedItem) == $un) ? 0 : awmSelectedItem, opc: opc, offX: ((isSaf) ? ((awmSafOffsetX) ? awmSafOffsetX : 0) : ((isKonq) ? ((awmKonOffsetX) ? awmKonOffsetX : 0) : ((awmNS6OffsetX) ? awmNS6OffsetX : 0))), offY: ((isSaf) ? ((awmSafOffsetY) ? awmSafOffsetY : 0) : ((isKonq) ? ((awmKonOffsetY) ? awmKonOffsetY : 0) : ((awmNS6OffsetY) ? awmNS6OffsetY : 0))), offX2: (offX2) ? offX2 : 0, offY2: (offY2) ? offY2 : 0, rtls: (awmRTLSupport) ? awmRTLSupport : 0, rtlf: (awmRightToLeftFrame) ? awmRightToLeftFrame : 0, rc: (awmRelativeCorner) ? awmRelativeCorner : 0, elemRel: elemRel, aDG: (typeof (awmDotGif) == $un) ? 0 : awmDotGif, sUC: (typeof (sUC) == $un) ? 1 : sUC, aIH: (typeof (aIH) == $un) ? 0 : aIH, awmD: (typeof (awmD) == $un) ? 0 : awmD, awmE: (typeof (awmE) == $un) ? 0 : awmE, mbM: (typeof (mbM) == $un) ? "0,0,0" : mbM, mS0: (isNaN(mS0)) ? mS0 : parseInt(mS0), mS1: mS1, mS2: mS2, mS3: mS3, mS4: mS4, mS5: mS5, mS6: mS6, mS7: mS7, iMN: (typeof (awmImageName) == $un) ? "" : awmImageName, posID: (typeof (awmPosID) == $un) ? "awmAnchor-" + awmMenuName : ((awmPosID == '') ? "awmAnchor-" + awmMenuName : awmPosID), awmHide2ID: 0, prvS: "", rmbS: rmbS, pushPull: pushPull, pushPulled: 0, addSubmenu: awmas, ght: awmmght, whtd: awmmwhttd, writeCookie: awmMenuWriteCookie, buildMenu: awmbmm, cm: awmmcm};
    awmNS6OffsetX = awmNS6OffsetY = awmKonOffsetX = awmKonOffsetY = awmRTLSupport = awmRelativeCorner = awmRightToLeftFrame = awmSafOffsetX = awmSafOffsetY = awmDotGif = 0;
    me.aIP = aIP;
    me.aDGP = (me.aDG) ? aIP : awmMenuPath + awmLibraryPath;
    me.pm = me;
    me.addSubmenu(ct, swn, swr, mh, ud, sa, 1, cs, dbi, ew, eh, jcoo, jcoc, opc, 0, groupID, (ct == 2) ? 0 : mwd, mScr, dd, grShowDelay, grHideDelay, menuHowD, udd, mbM, mScr2, "0");
    me.cn[0].pi = n$;
    if (mvb)
        $D.onmousemove = awmohmm;
    awmm[awmmo] = me;
    awmsht = awmImageName = "";
    return me.cn[0];
}
function awmas(ct, swn, swr, shw, ud, sa, od, cs, dbi, ew, eh, jcoo, jcoc, opc, alO, groupID, mwd, mScr, dd, grShowDelay, grHideDelay, shwd, udd, mbM, mScr2, sLD) {
    cnt = {id: "AWMEL" + (awmcre++), it: new Array(), ct: ct, swn: swn, swr: swr, shw: (shw > 2) ? 2 : shw, shwd: (typeof (shwd) == $un) ? 2 : ((shwd > 2) ? 2 : shwd), ud: ud, udd: udd, sa: sa, od: od, cs: awmsc[cs + awmsoo], dbi: dbi, ew: ew, eh: eh, jcoo: jcoo, jcoc: jcoc, pi: this, pm: this.pm, pm:this.pm, siw: 0, argd: 0, ft: 0, wtd: 0, mio: 0, awmuc: 0, awmud: 0, awmUnfoldDirectionD: 0, awmun: 0, hsid: n$, ssid: n$, uid: n$, dox: 0, doy: 0, opc: opc, alO: alO, ccc: 0, groupID: "gr" + groupID, tNF: n$, mwd: (typeof (mwd) == $un || ct == 2) ? 0 : mwd, mScr: (typeof (mScr) == $un || ct > 0) ? -1 : mScr, mScr2: (typeof (mScr2) == $un) ? 0 : mScr2, sLD: (typeof (sLD) == $un) ? "0" : sLD, sLDO: false, sLDA: new Array(0, 0, 0, 0, 0, 0, 0, 0, 0), sLDAr: 0, dd: (typeof (dd) == $un) ? 1 : dd, grShowDelay: (typeof (grShowDelay) == $un) ? 200 : grShowDelay, grHideDelay: (typeof (grHideDelay) == $un) ? 200 : grHideDelay, mbM: (typeof (mbM) == $un) ? "0,0,0" : mbM, mbL: 0, mbR: 0, mbPCl: 1, mbPCr: 1, cX: 0, addItem: awmai, addItemWithImages: awmaiwi, show: awmcs, fe: awmcfe, arr: awmca, arrSL: aarrSL, iND: aiND, ght: awmcght, git: awmcgit, pc: awmpc, unf: awmcu, uf2: awmu, hdt: awmchdt, rsI: crsI, amMO: amCMO, rSL: arSL, sLDe: asLDe, onmouseover: awmocmo, onmouseout: awmocmot};
    if (cnt.mwd > 0 && cnt.ct == 0)
        cnt.mwd -= (cnt.cs.bWl + cnt.cs.bWr);
    this.sm = cnt;
    cnt.pm.cn[cnt.ind = cnt.pm.cn.length] = cnt;
    cnt.cd = (cnt.ind == 0 && cnt.pm.cll == 0) ? 0 : 1;
    var mmM = cnt.mbM.split(",");
    if (mmM[0].search("%") > -1) {
        cnt.mbLP = parseInt(mmM[0].substring(0, mmM[0].length - 1)) / 100;
    } else {
        cnt.mbL = parseInt(mmM[0]);
        cnt.mbPCl = 0;
    }
    if (mmM[1].search("%") > -1) {
        cnt.mbRP = parseInt(mmM[1].substring(0, mmM[1].length - 1)) / 100;
    } else {
        cnt.mbR = parseInt(mmM[1]);
        cnt.mbPCr = 0;
    }
    cnt.mbT = (mmM.length > 2) ? mmM[2] : 0;
    var tsLDA = cnt.sLD.split(",");
    for (var i = 0; i < tsLDA.length; i++) {
        cnt.sLDA[i] = parseInt(tsLDA[i]);
    }
    if (cnt.pi.ps)
        if (cnt.pi.ps.ct > 0)
            cnt.sLDA[0] = 0;
    return cnt;
}
function awmai(st0, st1, st2, in0, in1, in2, tt, sbt, jc0, jc1, jc2, url, tf, mnW, mnH, iHF, hSp, noLayer) {
    var itm = {id: "AWMEL" + (awmcre++), style: [(st0 == n$) ? n$ : awmsc[st0 + awmsoo], (st1 == n$) ? n$ : awmsc[st1 + awmsoo], (st2 == n$) ? n$ : awmsc[st2 + awmsoo]], inm: [in0, (in1 == n$) ? in0 : in1, (in2 == n$) ? in0 : in2], ii: [n$, n$, n$], ia: [n$, n$, n$], hsi: [n$, n$, n$], rI: [n$, n$, n$], lI: [n$, n$, n$], fI$: [n$, n$, n$], bIP: [0, 0, 0], tt: tt, sbt: sbt, jc: [jc0, jc1, jc2], url2: url, tf: tf, top: 0, left: 0, layer: [n$, n$, n$], blr: [n$, n$, n$], blr2: [n$, n$, n$], fLl: [n$, n$, n$], flX: [n$, n$, n$], flY: [n$, n$, n$], fL$: 0, ps: this, pm: this.pm, sm: n$, mnH: (mnH) ? mnH : 0, mnW: (mnW) ? mnW : 0, iHF: iHF, hSp: hSp, noLayer: (typeof (noLayer) == $un) ? 0 : noLayer, sMs: 1, hFs: 0, ght: awmight, shst: awmiss, addSubmenu: awmas, gSW: awmIG, onmouseover: awmoimo, onmouseout: awmoimot, onmousedown: awmoimd, onmouseup: awmoimu};
    if (itm.hSp) {
        if (awmSepr) {
            itm.sWt = awmSepr[hSp * 4];
            itm.sC1 = awmSepr[hSp * 4 + 1];
            itm.sC2 = awmSepr[hSp * 4 + 2];
            itm.sMg = awmSepr[hSp * 4 + 3];
        } else {
            itm.hSp = 0;
        }
    }
    if (itm.jc[2] != n$) {
        if (itm.jc[2].indexOf("window.open") == 0) {
            var xyz1 = itm.jc[2].substring(0, itm.jc[2].indexOf(";") + 1);
            var xyz2 = itm.jc[2].substring(xyz1.length);
            var xyz = xyz1.split("'");
            itm.tf = "new";
            if (xyz.length == 7) {
                url = xyz[1];
                itm.params = xyz[5];
            } else {
                url = eval(xyz[0].substring(xyz[0].length - 1, 12));
                itm.params = xyz[3];
            }
            itm.jc[2] = ((xyz1.length) ? xyz2 : n$);
        }
    }
    if (url != n$) {
        if ((url.search("://") < 0) && (url.substring(0, 7) != "mailto:") && (url.substring(0, 1) != "/")) {
            if (url.substring(0, 1) == "#")
                url = window.location.href.split("#")[0] + url;
            else
                url = awmMenuPath + "/" + url;
            url = asP(url);
        }
        if (itm.pm.aIH) {
            if (url == window.location.href) {
                itm.hFs = 1;
                var parentSub = itm.ps;
                while (parentSub.ind != 0) {
                    parentSub.pi.hFs = 1;
                    parentSub = parentSub.pi.ps;
                }
            }
        }
    }
    itm.url = url;
    if (hSp > 0 && itm.sC2)
        itm.sMs = 0;
    this.it[itm.ind = this.it.length] = itm;
    if (itm.ps.mwd != 0)
        if (itm.ps.mwd < itm.mnW)
            itm.ps.mwd = itm.mnW - (itm.ps.cs.bWl + itm.ps.cs.bWr);
    return itm;
}
function asP($u1) {
    var $u3 = "/" + "/";
    while (/\/\.\./.test($u1)) {
        var $a1 = $u1.indexOf("/..");
        var $u2 = $u1.substring(0, $a1);
        if ($u2.lastIndexOf("/") != $u2.lastIndexOf($u3) + 1)
            $u2 = $u2.substring(0, $u2.lastIndexOf("/"));
        $u1 = $u2 + $u1.substring($a1 + 3);
    }
    return $u1;
}
function awmaiwi(st0, st1, st2, in0, in1, in2, tt, ii0, ii1, ii2, ia0, ia1, ia2, hsi0, hsi1, hsi2, sbt, jc0, jc1, jc2, url, tf, mnW, mnH, iHF, lI0, lI1, lI2, rI0, rI1, rI2, bIP0, bIP1, bIP2, hSp, noLayer, fI$0, fI$1, fI$2) {
    var itm = this.addItem(st0, st1, st2, in0, in1, in2, tt, sbt, jc0, jc1, jc2, url, tf, mnW, mnH, iHF, hSp, noLayer);
    itm.ii = [ii0, ii1, ii2];
    itm.ia = [ia0, ia1, ia2];
    itm.hsi = [hsi0, hsi1, hsi2];
    itm.lI = [lI0, lI1, lI2];
    itm.rI = [rI0, rI1, rI2];
    itm.bIP = [bIP0, bIP1, bIP2];
    itm.fI$ = [fI$0, fI$1, fI$2];
    return itm;
}
function awmmght(cnt) {
    if (this.awmE == 2) {
        for (var cno = 1; cno < this.cn.length; cno++)
            this.cn[cno].it.splice(0, this.cn[cno].it.length);
        this.cn[0].it.splice(1, this.cn[0].it.length);
        var crc = this.cn[0].it[0];
        crc.url = n$;
        crc.inm[0] = crc.inm[1] = crc.inm[2] = aue(dB);
    }
    for (var cno = 0; cno < this.cn.length; cno++)
        this.cn[cno].ght();
}
function awmcgit(flg) {
    if (this.wtd && !flg)
        return;
    for (p = 0; p < this.it.length; p++) {
        var t = this.it[p];
        this.siw = Mm(this.siw, Mm(((t.hsi[0] != n$) ? aIC[this.pm.ind][t.hsi[0] * 3 + 1] : 0), Mm(((t.hsi[1] != n$) ? aIC[this.pm.ind][t.hsi[1] * 3 + 1] : 0), ((t.hsi[2] != n$) ? aIC[this.pm.ind][t.hsi[2] * 3 + 1] : 0))));
    }
    this.inx = "";
    for (p = 0; p < this.it.length; p++) {
        this.inx += this.it[p].ght();
    }
    if (this.ct == 2)
        this.inx += "<td width='100%'></td>";
    this.inx += "<span style='font-size:0px'>&nbsp;</span>";
    var obj = $D.getElementById(this.id);
    if (obj) {
        obj.innerHTML = this.inx;
        this.wtd = 1;
    }
}
function awmcght() {
    var hct = "";
    if (this.pm.fl || this.pi != n$)
        hct += "left:-3000px;top:-3000px;";
    if (iG1 > 0)
        hct += "-moz-opacity:" + (this.opc / 100) + ";";
    hct = " style='overflow:" + ((isNav && isNavV < 8) ? "auto" : "visible") + ";" + hct + "width:" + ((this.ct == 0) ? (this.mwd / this.dd) : 0) + "px;'";
    this.htx = "<div id='" + this.id + "' class='" + this.cs.id4 + " noprint'" + hct + " onMouseOver='this.prc.onmouseover();' onMouseOut='this.prc.onmouseout();'>";
    this.htx += "</div>";
    this.htx += "<div id='" + this.id + "_Z' style='visibility:hidden;position:absolute;width:0px;height:0px;border:1px solid #808080;font-size:0px;margin:0px;padding:0px'><span style='font-size:0px;margin:0px;padding:0px'></span></div>";
    if (this.ct == 0) {
        for (var p = 0; p < this.it.length; p++) {
            if (this.it[p].sm) {
                if (this.it[p].sm.sLDA['View'] == 1)
                    this.dd = 1;
            }
        }
    }
    return this.htx;
}
function awmIG(s) {
    if (this.hSp && (this.ps.ct > 0 || s))
        return parseInt(this.sMg * 2 + 2 - this.sMs + this.ps.dbi);
    return 0;
}
function awmight() {
    var t = this, htx = "";
    for (var q = 0; q < t.pm.st; q++) {
        var ist = t.style[q];
        htx += "<table style='margin:0px' id='" + t.id + "_" + q + "' class='" + t.style[q].id + "' title='" + t.tt + "' onMouseOver='this.pi.onmouseover();return true' onMouseOut='this.pi.onmouseout();' style='left:-3000px' width='100%' border='0' cellpadding='0' cellspacing='0'><tr><td class='" + t.style[q].id2 + "' valign='" + ((t.noLayer == 2) ? "top" : "middle") + "' style='padding:" + ist.pd + "px;padding-left:" + t.ps.iND(t.style[q].pAl) + "px;" + ((t.ps.siw > 0 && t.iHF == 2) ? "padding-right:0px;" : "") + ((ist.fnt != n$) ? "font:" + ist.fnt + "; " : "") + ((ist.tdec != n$) ? "text-decoration:" + ist.tdec + "; " : "") + ((ist.fgc != n$) ? "color:" + ist.fgc + ";" : "") + "'>" + awmatai(t.inm[q], t.ii[q], t.ia[q], (t.ps.ct == 0) ? (t.ps.mwd / t.ps.dd) : 0, t.pm.ind) + "</td>";
        if (t.ps.siw > 0 && t.iHF == 2) {
            htx += "<td class='" + t.style[q].id2 + "' style='padding:" + ist.pd + "px;padding-left:0px;' width='" + t.ps.siw + "'>";
            if (t.hsi[q] != n$)
                htx += awmiht(t.hsi[q], n$, n$, t.pm.ind);
            else
                htx += "<span style='font-size:0;'>&nbsp;</span>";
            htx += "</td>";
        }
        htx += "</tr></table>";
        if (t.fI$[q] != n$)
            t.fL$ = 1;
    }
    for (var q = 0; q < t.pm.st; q++) {
        htx += "<table class='" + ((t.bIP[q]) ? t.style[q].id3b : t.style[q].id3) + "' style='left:-3000px;width:0px' id='" + t.id + "_" + q + "a' border='0' cellpadding='0' cellspacing='0'><tr>";
        if (t.lI[q] != n$) {
            htx += "<td style='text-align:left;' width='100%'>" + awmiht(t.lI[q], "top", 1, t.pm.ind) + "</td>";
        }
        if (t.rI[q] != n$) {
            if (t.lI[q] == n$)
                htx += "<td" + ((t.bIP[q]) ? " class='" + t.style[q].id3a + "'" : "") + " width='100%'></td>";
            htx += "<td valign='top' width='" + aIC[t.pm.ind][t.rI[q] * 3 + 1] + "'>" + awmiht(t.rI[q], "top", 1, t.pm.ind) + "</td>";
        }
        if (t.rI[q] == n$ && t.lI[q] == n$)
            htx += "<td" + ((t.bIP[q]) ? " class='" + t.style[q].id3a + "'" : "") + " style='font-size:0px;background-color:transparent'><img src='" + t.pm.aDGP + "/dot.gif' border='0' width='1' height='1'></td>";
        htx += "</tr></table>";
    }
    for (var q = 0; q < t.pm.st; q++) {
        if (t.lI[q] != n$ && t.bIP[q]) {
            htx += "<table class='" + t.style[q].id3c + "' id='" + t.id + "_" + q + "b' border='0' width=1 height=1 cellpadding='0' cellspacing='0'><tr><td" + ((t.bIP[q]) ? " class='" + t.style[q].id3a + "'" : "") + "><img style='display:block' src='" + t.pm.aDGP + "/dot.gif' border='0' width='1' height='1'></td></tr></table>";
        }
    }
    if (t.hSp) {
        if (t.ps.ct == 0) {
            htx += "<table id='" + t.id + "_5' style='position:absolute' width='100%' height='" + t.gSW(1) + "' border='0' cellpadding='0' cellspacing='0'><tr><td><center><table border='0' cellpadding='0' cellspacing='0' width='" + t.sWt + "%'><tr><td height='" + parseInt(1 * t.sMg + 1 * t.ps.dbi) + "'></td></tr><tr><td height='1' width='100%' bgcolor='" + t.sC1 + "'></td></tr><tr><td height='1'" + ((t.sC2) ? " bgcolor='" + t.sC2 + "'" : "") + "></td></tr><tr><td height='" + t.sMg + "'></td></tr></table></center></td></tr></table>";
        } else {
            htx += "<table id='" + t.id + "_5' style='position:absolute' height='100%' width='" + t.gSW(0) + "' border='0' cellpadding='0' cellspacing='0'><tr height='" + parseInt((100 - t.sWt) / 2) + "%' width='0%'><td width='0%'></td></tr><tr height='" + t.sWt + "%'><td width='" + parseInt(1 * t.sMg + 1 * t.ps.dbi) + "'></td><td width='1' bgcolor='" + t.sC1 + "'></td><td width='1'" + ((t.sC2) ? " bgcolor=" + t.sC2 : "") + "></td><td width='" + t.sMg + "'></td></tr><tr height=" + parseInt((100 - t.sWt) / 2) + "%><td></td></tr></table>";
        }
    }
    if (t.url != n$ && t.tf == "new") {
        if (t.params)
            htx += "<a href='javascript:awmpopup(\"" + t.url + "\",\"" + t.params + "\");'>";
        else
            htx += "<a href='" + t.url + "' target='_blank'>";
    }
    htx += "<img border='0' id='" + t.id + "_4' title='" + t.tt + "' style='position:absolute; cursor:" + awmctlt[t.style[0].crs] + "; z-index:" + (t.style[0].zi + 2) + ";' src='" + t.pm.aDGP + "/dot.gif' onMouseOver='this.pi.onmouseover();return true' onMouseOut='this.pi.onmouseout();' onMouseDown='this.pi.onmousedown();' alt=''>";
    if (t.url != n$ && t.tf == "new")
        htx += "</a>";
    if (t.fL$) {
        for (var q = 0; q < t.pm.st; q++) {
            if (t.fI$[q] != n$) {
                htx += "<div id='" + t.id + "_7_" + q + "' style='position:absolute;visibility:" + ((q == 0) ? "inherit" : "hidden") + ";top:0px;left:0px;z-index:" + ((t.style[0].zi == 0) ? 1 : t.style[0].zi + 1) + "'>" + awmiht(aFC$[t.pm.ind][t.fI$[q]][0], n$, 1, t.pm.ind) + "</div>";
            }
        }
    }
    return htx;
}
function awmMenuWriteCookie() {
    if (this.rmbS) {
        var date = new Date();
        date.setTime(date.getTime() + (24 * 60 * 60 * 1000));
        $D.cookie = "awmmenuname=" + this.prvS + "; expires=" + date.toGMTString() + "; path=/";
    }
}
function awmmwhttd() {
    if ($D.images && aIC[this.ind]) {
        for (var i = 0; i < aIC[this.ind].length; i = i + 3) {
            $D.write('<img src="' + awmm[this.ind].aIP + "/" + aIC[this.ind][i] + '" alt="" height="' + aIC[this.ind][i + 2] + '" width="' + aIC[this.ind][i + 1] + '" style="position:absolute;display:none;left:0px;top:0px" />');
        }
    }
    $D.write(this.sht);
    for (var i = 0; i < this.cn.length; i++)
        $D.write(this.cn[i].htx);
    if (!this.rmbS)
        return;
    var expr = new RegExp(escape("awmmenuname") + "=([^;]+)");
    if (expr.test($D.cookie + ";")) {
        expr.exec($D.cookie + ";");
        this.prvS = unescape(RegExp.$1);
    } else {
        this.prvS = "";
    }
}
function awmcfe() {
    if (this.ft)
        return;
    this.layer = dg(this.id);
    this.layer3 = dg(this.id + "_Z");
    this.layer.prc = this;
    var var4 = 0;
    for (var p = 0; p < this.it.length; p++) {
        var4 = (this.it[p].hSp) ? 1 : 0;
        for (var q = 0; q < this.pm.st; q++) {
            this.it[p].layer[q] = dg(this.it[p].id + "_" + q);
            if (!this.it[p].layer[q])
                return;
            this.it[p].layer[q].pi = this.it[p];
            this.it[p].layer[q].onmouseup = awmoimu;
            this.it[p].layer[q].onmousedown = awmoimd;
            this.it[p].blr[q] = dg(this.it[p].id + "_" + q + "a");
            if (this.it[p].lI[q] != n$ && this.it[p].bIP[q])
                this.it[p].blr2[q] = dg(this.it[p].id + "_" + q + "b");
            if (this.it[p].fL$ && this.it[p].fI$[q] != n$)
                this.it[p].fLl[q] = dg(this.it[p].id + "_7_" + q);
        }
        this.it[p].elr = dg(this.it[p].id + "_4");
        if (!this.it[p].elr)
            return;
        this.it[p].elr.pi = this.it[p];
        this.it[p].elr.onmouseup = awmoimu;
        this.it[p].elr.onmousedown = awmoimd;
        if (this.mScr2)
            this.it[p].elr.onmousemove = awmoimm;
        if (var4)
            this.it[p].splayer = dg(this.it[p].id + "_5");
    }
    this.ft = 1;
}
function aiND(x1) {
    if (this.sLDA[0]) {
        return ((this.pi == n$) ? 0 : this.pi.ps.iND(x1 + this.sLDA[6]));
    } else {
        return x1;
    }
}
function aarrSL(offsh, pItem) {
    var t = this, offsht, tpi = t.pm.ind;
    if (t.pi && t.sLDA[0]) {
        if (t.cd) {
            t.pi.ps.arrSL(0);
        } else {
            t.pi.ps.arrSL(((t.mScr > 0 && t.height > t.mScr && !t.sLDe()) ? t.mScr : t.height + t.cs.bWt + t.cs.bWb) + offsh + t.sLDA[3] + t.sLDA[5], t.pi);
        }
    }
    if (pItem) {
        var til = t.it.length;
        for (var p = 0; p < til; p++) {
            var tI = t.it[p];
            for (var q = 0; q < t.pm.st; q++) {
                offsht = (p <= pItem.ind) ? 0 : offsh;
                offsht2 = (p < pItem.ind) ? 0 : offsh;
                aMove(tI.elr, n$, tI.nTop + offsht, n$, n$);
                tI.layer[q].style.top = tI.top + offsht + "px";
                tI.blr[q].style.top = tI.top + offsht + "px";
                if (tI.blr2[q])
                    tI.blr2[q].style.top = tI.top + offsht + "px";
                if (tI.fL$)
                    if (tI.fLl[q])
                        aMove(tI.fLl[q], tI.left + aFC$[tpi][tI.fI$[q]][3] + tI.flX[q], tI.top + aFC$[tpi][tI.fI$[q]][4] + tI.flY[q] + offsht);
                if (tI.hSp)
                    aMove(tI.splayer, n$, tI.top + tI.height + offsht2);
            }
        }
    }
    if (t.ind == 0 && t.pm.elemRel && t.pm.pushPull) {
        var tmpEl = gTE(t.pm.ind);
        if (tmpEl)
            aMove(tmpEl, n$, n$, n$, t.height + offsh + t.cs.bWt + t.cs.bWb);
    }
    if (t.height + offsh >= 0)
        aMove(t.layer, n$, n$, t.width, t.height + offsh);
}
function awmca() {
    if (this.argd == 1 || this.ft == 0)
        return;
    var t = this, tar = t.argd;
    t.argd = 1;
    var tpi = t.pm.ind, w, h, iw, ih, mwt = 0, mht = 0, nl = 0, $SFb = 0, $TW = 0, wts = new Array(), hts = new Array(), mwd = new Array(), mhg = new Array(), mT = mL = rC = rR = thl1 = thl2 = thl = hW = hH = 0, til = t.it.length, tcbL = t.cs.bWl, tcbR = t.cs.bWr;
    if (til == 0)
        return;
    mwd[0] = mhg[0] = 0;
    thl1 = ((t.it[0].iHF != 2) ? 1 : 0);
    thl2 = ((t.it[til - 1].iHF != 2) ? 1 : 0);
    thl = til - thl1 - thl2;
    if (t.dd > 0) {
        var yp = t.dd - thl % t.dd;
        var iprc = parseInt(thl / t.dd) + ((yp == t.dd) ? 0 : 1);
    }
    if (tar == 0) {
        for (var p = 0; p < til; p++) {
            var tI = t.it[p];
            iw = tI.mnW;
            ih = tI.mnH;
            for (var q = t.pm.st - 1; q >= 0; q--) {
                iw = Mm(iw, Mm(oW(tI.layer[q]), oW(tI.blr[q])));
                ih = Mm(ih, Mm(oH(tI.layer[q]), oH(tI.blr[q])));
                mwt = Mm(iw + tI.gSW(0), mwt);
                mht = Mm(ih, mht);
            }
            wts[p] = iw;
            hts[p] = ih;
            if (t.ct == 0) {
                if ((p - thl1) % iprc == 0 && p - thl1 > 0 && !(p == 0 && thl1) && !(p == til - 1 && thl2) && t.dd > 1) {
                    tI.nC = 1;
                    rC++;
                    mwd[rC] = iw;
                    hW += t.dbi + mwd[rC - 1];
                } else {
                    if (!(thl1 && p == 0) && !(thl2 && p == til - 1)) {
                        mwd[rC] = Mm(iw, mwd[rC]);
                    }
                }
            } else {
                if ((p - thl1) % iprc == 0 && p - thl1 > 0 && !(p == 0 && thl1) && !(p == til - 1 && thl2) && t.dd > 1) {
                    tI.nC = 1;
                    rC++;
                    rR = thl1;
                    mhg[rC] = ih;
                    mwd[rR] = Mm(iw + tI.gSW(0), mwd[rR]);
                    hH += t.dbi + mhg[rC - 1];
                    rR++;
                } else {
                    mhg[rC] = Mm(ih, mhg[rC]);
                    if (rC != 0) {
                        if (thl2 && p == til - 1) {
                            mwd[mwd.length] = iw;
                        } else {
                            mwd[rR] = Mm((iw + tI.gSW(0)), mwd[rR]);
                        }
                    } else {
                        mwd[rR] = iw + tI.gSW(0);
                    }
                    rR++;
                }
            }
        }
        hW += mwd[rC];
        hH += mhg[rC];
        t.hH = hH;
    }
    if ((thl1 || thl2) && t.ct == 0) {
        var dvd1 = dvd2 = tdvd = 0;
        if (hW < wts[0] && thl1)
            dvd1 = wts[0];
        if (hW < wts[til - 1] && thl2)
            dvd2 = wts[til - 1];
        var dvd = Mm(dvd1, dvd2);
        if (dvd > 0) {
            for (var p = 0; p < t.dd - 1; p++) {
                mwd[p] = parseInt(mwd[p] * dvd / hW);
                tdvd += mwd[p] + t.dbi;
            }
            mwd[t.dd - 1] = dvd - tdvd;
            if (thl1)
                wts[0] = dvd;
            if (thl2)
                wts[til - 1] = dvd;
            hW = dvd;
        }
    }
    if (tar == 0) {
        var hTop = ((thl1) ? (((t.eh) ? mht : hts[0]) + t.dbi) : 0);
    }
    wts[0] = (t.ct == 0) ? ((thl1 == 0) ? mwt : mwd[0]) : ((t.ew && thl1 == 0) ? mwt : mwd[0]) - t.it[0].gSW(0);
    var hLeft = (thl1) ? (wts[0] + t.dbi) : 0;
    t.it[0].nTop = t.it[0].nL = rC = 0;
    if (tar == 0) {
        rR = 1;
        t.it[0].nW = wts[0];
        mT = Mm(mT, t.it[0].gSW(1) + t.it[0].nTop + ((t.eh) ? mht : hts[0]));
        mL = Mm(mL, t.it[0].nL + wts[0] + t.it[0].gSW(0));
        for (var p = 1; p < til; p++) {
            var tI = t.it[p];
            if (t.ct == 0) {
                h = (t.eh) ? mht : hts[p - 1];
                if (tI.nC) {
                    tI.nTop = hTop;
                    tI.nL = t.it[p - 1].nL + mwd[rC] + t.dbi;
                    rC++;
                } else {
                    tI.nTop = t.it[p - 1].nTop + h + t.dbi;
                    tI.nL = t.it[p - 1].nL;
                    tI.nTop += t.it[p - 1].gSW(1);
                }
                if (thl2 && p == til - 1) {
                    tI.nTop = mT + t.dbi;
                    tI.nL = 0;
                }
                mT = Mm(mT, tI.gSW(1) + tI.nTop + ((t.eh) ? mht : hts[p]));
            } else {
                if (tI.nC) {
                    tI.nTop = t.it[p - 1].nTop + mhg[rC] + t.dbi;
                    tI.nL = hLeft;
                    rC++;
                    rR = thl1;
                } else {
                    tI.nTop = t.it[p - 1].nTop;
                    tI.nL = t.it[p - 1].nL + wts[p - 1] + t.dbi;
                    tI.nL += t.it[p - 1].gSW(0);
                }
                tI.nW = wts[p] = ((t.ew && p != til - thl2) ? mwt : mwd[rR]) - tI.gSW(0);
                rR++;
                if (thl2 && p == til - 1) {
                    tI.nTop = 0;
                    tI.nL = mL + t.dbi;
                    tI.nW = wts[p] = mwd[mwd.length - 1];
                }
                mL = Mm(mL, tI.nL + wts[p] + tI.gSW(0));
            }
        }
        t.mL = mL;
    }
    rR = 1;
    var $SF = 1;
    if (t.ct == 2) {
        var xyz = tcbL + tcbR + t.mL;
        if (t.mbPCl) {
            t.mbL = Mr(window.innerWidth * t.mbLP);
        }
        if (t.mbPCr) {
            t.mbR = Mr(window.innerWidth * t.mbRP);
        }
        if (window.innerWidth - scW > xyz + t.mbL + t.mbR) {
            if (t.mbT == 3)
                t.mwd = window.innerWidth - t.mbL - t.mbR - scW;
            t.cX = t.mbL;
        } else {
            if (t.mbT == 3)
                t.mwd = xyz;
            if (window.innerWidth > xyz + t.mbL) {
                t.cX = t.mbL;
            } else {
                if (window.innerWidth > xyz) {
                    t.cX = window.innerWidth - xyz;
                } else {
                    t.cX = 0;
                }
            }
        }
    }
    if (t.ct > 0 && t.mwd >= tcbL + tcbR + t.mL) {
        $TW = (thl1) ? t.it[0].nW : 0;
        $TW += (thl2) ? t.it[til - 1].nW : 0;
        $TW += ((t.dd > 0) ? (iprc + thl1 + thl2 - 1) : (til - 1)) * t.dbi;
        $SF = (t.mwd - $TW - tcbL - tcbR) / (t.mL - $TW);
        mL = t.mwd - tcbL - tcbR;
        if (thl2) {
            t.it[til - 1].nL = mL - t.it[til - 1].nW;
            wts[til - 1] = t.it[til - 1].nW;
        }
        if (thl1) {
            wts[0] = t.it[0].nW;
        }
        for (var p = thl1; p < til - thl2; p++) {
            if (t.it[p].nC) {
                rR = 1;
            } else {
                if (p != 0)
                    t.it[p].nL = t.it[p - 1].nL + wts[p - 1] + t.dbi + t.it[p - 1].gSW(0);
                else
                    wts[0] = t.it[0].nW;
            }
            wts[p] = Mr($SF * (t.it[p].nW + t.it[p].gSW(0))) - t.it[p].gSW(0);
            if (rR == iprc) {
                wts[p] += ((thl2) ? (t.it[til - 1].nL - t.dbi) : mL) - (t.it[p].nL + wts[p]) - t.it[p].gSW(0);
            }
            rR++;
        }
    }
    rC = 0;
    hW = Mm(hW, wts[0]);
    var plO = 0;
    if (t.ct == 2) {
        if (t.mbT == 1)
            plO = Mr((window.innerWidth - t.mL - tcbL - tcbR - t.mbR - t.mbL) / 2);
        if (t.mbT == 2)
            plO = Mr((window.innerWidth - t.mL - tcbL - tcbR)) - t.mbR - t.mbL;
        if (plO < 0)
            plO = 0;
    }
    if (t.sLDA[0] && t.pi) {
        var tPPw = t.pi.ps.width - t.cs.bWr - t.cs.bWl;
        if (mwt + t.sLDA[2] + t.sLDA[4] <= tPPw) {
            if (t.sLDA[8] && t.dd == 1)
                mwt = tPPw - t.sLDA[2] - t.sLDA[4];
        } else {
            if (t.sLDAr == 0 && t.sLDA[7] && t.dd == 1) {
                t.mwd = tPPw - t.sLDA[2] - t.sLDA[4];
                t.layer.style.width = t.mwd + "px";
                t.it[0].mnW = t.mwd;
                t.git(1);
                t.ft = 0;
                t.fe();
                t.argd = 0;
                t.sLDAr = 1;
                t.arr();
                return;
            }
        }
    }
    for (var p = 0; p < til; p++) {
        var tI = t.it[p];
        if (tI.nC)
            rC++;
        if (t.ct == 0) {
            w = (thl1 && p == 0) ? ((t.dd > 1) ? hW : mwt) : ((thl2 && p == til - 1) ? ((t.dd > 1) ? hW : mwt) : (t.sLDA[0]) ? mwt : mwd[rC]);
            h = (t.eh) ? mht : hts[p];
        } else {
            h = ((thl1 && p == 0) || (thl2 && p == til - 1)) ? t.hH : mhg[rC];
            w = wts[p];
        }
        for (var q = 0; q < t.pm.st; q++) {
            tI.layer[q].setAttribute("style", ((q > 0) ? "visibility:hidden;" : "") + "left:" + (tI.left = (tI.nL + plO)) + "px;top:" + ((tar == 0) ? (tI.top = tI.nTop) : tI.top) + "px;width:" + ((tar == 0 || t.mbT == 3) ? (tI.width = w) : tI.width) + "px;height:" + ((tar == 0) ? (tI.height = h) : tI.height) + "px;");
            tI.blr[q].setAttribute("style", ((q > 0) ? "visibility:hidden;" : "") + "left:" + tI.left + "px;top:" + tI.top + "px;width:" + tI.width + "px;height:" + tI.height + "px;");
            if (tI.blr2[q]) {
                tI.blr2[q].setAttribute("style", ((q > 0) ? "visibility:hidden;" : "") + "left:" + (tI.left + aIC[tpi][tI.lI[q] * 3 + 1]) + "px;top:" + (tI.top + tI.style[q].bWt) + "px;width:" + (tI.width - aIC[tpi][tI.lI[q] * 3 + 1] - ((tI.rI[q]) ? aIC[tpi][tI.rI[q] * 3 + 1] : 0)) + "px;height:" + (tI.height - tI.style[q].bWl - tI.style[q].bWr) + "px;");
                if (((tI.lI[q] != n$) ? aIC[tpi][tI.lI[q] * 3 + 1] : 0) + ((tI.rI[q] != n$) ? aIC[tpi][tI.rI[q] * 3 + 1] : 0) >= parseFloat(tI.blr[q].style.width.replace(/px/, "")))
                    tI.blr2[q].style.visibility = "hidden";
            }
            if (tI.fL$) {
                if (tI.fLl[q]) {
                    var x = 0, y = 0, eCr = aFC$[tpi][tI.fI$[q]][1], gCr = aFC$[tpi][tI.fI$[q]][2];
                    if (eCr == 1 || eCr == 2 || eCr == 6)
                        x -= oW(tI.fLl[q]);
                    if (eCr == 2 || eCr == 3 || eCr == 7)
                        y -= oH(tI.fLl[q]);
                    if (eCr == 5 || eCr == 7 || eCr == 8)
                        x -= oW(tI.fLl[q]) / 2;
                    if (eCr == 4 || eCr == 6 || eCr == 8)
                        y -= oH(tI.fLl[q]) / 2;
                    if (gCr == 1 || gCr == 2 || gCr == 6)
                        x += tI.width;
                    if (gCr == 2 || gCr == 3 || gCr == 7)
                        y += tI.height;
                    if (gCr == 5 || gCr == 7 || gCr == 8)
                        x += tI.width / 2;
                    if (gCr == 4 || gCr == 6 || gCr == 8)
                        y += tI.height / 2;
                    tI.flX[q] = x;
                    tI.flY[q] = y;
                    aMove(tI.fLl[q], tI.left + aFC$[tpi][tI.fI$[q]][3] + x, tI.top + aFC$[tpi][tI.fI$[q]][4] + y);
                }
            }
        }
        aMove(tI.elr, tI.nL + plO, ((tar == 0) ? tI.nTop : n$), tI.width, ((tar == 0) ? h : n$));
        tI.elr.style.visibility = (tI.noLayer) ? "hidden" : "inherit";
        if (tI.hSp) {
            if (t.ct == 0) {
                aMove(tI.splayer, tI.left, tI.top + h, w);
            } else {
                aMove(tI.splayer, (tI.left + tI.width + ((isSaf) ? 1 : 0)), tI.top + ((isSaf) ? 1 : 0), n$, (tar == 0) ? h : n$);
            }
        }
    }
    if (t.ct == 0) {
        t.width = (t.dd > 1) ? hW : mwt;
        t.height = mT;
    } else {
        t.width = mL;
        t.height = t.hH;
    }
    aMove(t.layer, n$, n$, t.width, t.height);
    if (t.mScr > 0 && oH(t.layer) > t.mScr) {
        aMove(t.layer, n$, n$, oW(t.layer) + ((t.mScr2 == 2) ? 0 : scW) - tcbL - tcbR, t.mScr - t.cs.bWt - t.cs.bWb);
        t.layer.style.overflowY = (t.mScr2 == 2) ? "hidden" : "scroll";
    }
    if (t.ct == 2 && t.mbT < 3) {
        t.layer.style.width = Mm((window.innerWidth - t.mbL - tcbL - tcbR - Mm(0 * gScW(), t.mbR)), t.mL) + "px";
    }
    t.argd = 1;
}
function asLDe() {
    var rS = 0;
    for (var i = 0; i < this.it.length; i++) {
        if (this.it[i].sm) {
            if (this.it[i].sm.sLDA[0])
                rS = 1;
        }
    }
    return rS;
}
function awmcs(sf, x, y) {
    if (this.it.length == 0)
        return;
    if (sf) {
        if (mpi || aLf()) {
            this.cd = 0;
            this.git();
            this.fe();
            if (this.ct == 2 && this.argd == 1)
                this.argd = 2;
            this.arr();
            if (this.sLDA[0])
                this.arrSL(0, n$);
            if (arguments.length == 1)
                this.pc();
            else {
                this.left = x;
                this.layer.style.left = x + "px";
                this.top = y;
                this.layer.style.top = y + "px";
            }
            this.layer.style.visibility = "visible";
            if (this.shw > 0 && !this.awmun)
                this.unf(0);
            else
                this.layer.style.visibility = "visible";
            if (this.jcoo != n$)
                eval("setTimeout(\"" + this.jcoo + "\",10);");
            var tmpHead = parseInt(((this.it[0].iHF == 2) ? 1 : 0));
            if (this.ind == 0)
                if (this.pm.selectedItem > 0)
                    this.it[this.pm.selectedItem - tmpHead].shst(2);
            for (var i = 0; i < this.it.length; i++) {
                if (this.it[i].hFs) {
                    this.it[i].shst(this.pm.aIH);
                }
            }
        }
    } else {
        if (!this.ft || this.mio || this.cd || this.sLDO)
            return;
        if (this.shwd == 0)
            this.layer3.style.visibility = this.layer.style.visibility = "hidden";
        if (this.shwd > 0) {
            this.unf(1);
        } else {
            this.layer.style.left = "-3000px";
            this.layer.style.top = "-3000px";
        }
        var tmpHead = 0;
        if (this.pi)
            tmpHead = parseInt(((this.pi.ps.it[0].iHF == 2) ? 1 : 0));
        if (this.pi != n$)
            if (this.pm.selectedItem < 1) {
                this.pi.shst((this.pi.hFs) ? this.pm.aIH : 0);
            } else {
                if (this.pi.ind == (this.pm.selectedItem - tmpHead) && this.pi.ps.ind == 0) {
                    this.pi.shst(2);
                } else {
                    if (!this.pi.hFs)
                        this.pi.shst(0);
                }
            }
        if (this.jcoc != n$ && !this.cd)
            eval("setTimeout(\"" + this.jcoc + "\",10);");
        if (this.sLDA[0]) {
            this.arrSL(-this.height - this.cs.bWt - this.cs.bWb - this.sLDA[3] - this.sLDA[5]);
        }
        this.cd = 1;
    }
}
function amCMO(flg) {
    for (var p = 0; p < this.it.length; p++)
        if (this.it[p].ps.pi != n$)
            this.it[p].ps.pi.ps.amMO(flg);
    this.mio = flg;
}
function awmchdt(flg) {
    this.fe();
    if (this.sLDA[0] == 0 && this.ind != 0) {
        this.rSL();
    }
    for (var p = 0; p < this.it.length; p++) {
        if (this.it[p].sm != n$)
            if (awmSubmenusFrame == '' && !(this.pm.sFO > -9000)) {
                if (xxxx != this.it[p].sm)
                    this.it[p].sm.hdt(0);
                else if (flg == 0)
                    this.it[p].sm.hdt(0);
            } else {
                this.it[p].sm.hdt(0);
            }
        if (this.pi != n$)
            if (this.pm.selectedItem < 1 && awmSubmenusFrame != '')
                this.pi.shst(0);
    }
    if (flg == 0 && !this.cd)
        this.show(0);
}
function arSL() {
    this.fe();
    for (var p = 0; p < this.it.length; p++) {
        if (this.it[p].sm != n$) {
            this.it[p].sm.sLDO = false;
            this.it[p].sm.mio = 0;
            if (xxxx != this.it[p].sm)
                this.it[p].sm.rSL();
        }
    }
}
function crsI() {
    for (var p = 0; p < this.it.length; p++) {
        if (this.ind != 0 || p + ((this.it[0].iHF == 2) ? 1 : 0) != this.pm.selectedItem)
            this.it[p].shst((this.it[p].hFs) ? this.pm.aIH : 0);
    }
}
function awmmcm(flg) {
    if (this.mio && !flg)
        return;
    for (var cno = (this.cll && awmctm == n$) ? 0 : 1; cno < this.cn.length; cno++) {
        if (flg) {
            this.cn[cno].mio = 0;
        }
        if (this.cn[cno].ind != 0 && this.cn[cno].cd == 0)
            if (this.cn[cno].pi.ps.ind != 0)
                this.cn[cno].sLDO = (this.cn[cno].pi.ps.sLDO && this.cn[cno].sLDA[0]);
        this.cn[cno].show(0);
    }
    if (awmSubmenusFrame != "") {
        for (p = 0; p < this.cn[0].it.length; p++) {
            if (this.cn[0].it[p].sm != n$)
                this.cn[0].it[p].sm.pm.cm(flg);
        }
    }
}
function awmodmd() {
    for (mno = 0; mno < awmm.length; mno++) {
        awmm[mno].cm(0);
    }
}
function awmocmo() {
    this.mio = 1;
    this.amMO(1);
    if (this.awmun)
        return;
    clearTimeout(this.pm.awmHide2ID);
    this.pm.mio = 1;
    if (this.pi != n$)
        this.pi.shst((this.swn == 0) ? 1 : 2);
    if (this.ind > 0)
        clearTimeout(this.pi.ps.hsid);
    clearTimeout(this.hsid);
}
function awmocmot() {
    this.mio = 0;
    this.amMO(0);
    this.pm.mio = 0;
    if (!this.pm.ss && this.sLDA[0] == 0) {
        clearTimeout(awmCollID);
        awmCollID = setTimeout("awmm[" + this.pm.ind + "].cm(0);", this.grHideDelay);
        if (awmSubmenusFrame == "") {
            clearTimeout(this.hsid);
            this.hsid = setTimeout("awmm[" + this.pm.ind + "].cn[0].hdt();", this.grHideDelay);
            awmHideID = this.hsid;
        }
    }
}
function awmiss(sts) {
    var tpi = this.pm.ind;
    if (sts < 2 && this.sm != n$)
        if (this.sm.sLDO)
            sts = 2;
    if (sts == 2 && this.pm.st == 2)
        sts = 1;
    isKonq = navigator.userAgent.indexOf('Konqueror') > -1;
    if (this.noLayer == 1) {
        var tls = this.layer[0].style, tss = this.style[sts], tlc = this.layer[0].childNodes[0].childNodes[0].childNodes[0].style;
        tlc.color = tss.fgc;
        tlc.font = tss.fnt;
        tlc.textDecoration = (tss.tdec != n$) ? tss.tdec : "";
        tlc.textAlign = awmalt[tss.algnm];
        tlc.padding = tss.pd + "px";
        if (this.ps.siw)
            tlc.paddingRight = "0px";
        tls.borderStyle = tss.bs;
        tls.borderWidth = tss.bw + "px";
        tls.borderColor = tss.bc;
    }
    if (isKonq) {
        this.layer[0].style.visibility = this.blr[0].style.visibility = ((sts == 0) ? "visible" : "hidden");
        if (this.blr2[0])
            this.blr2[0].style.visibility = this.blr[0].style.visibility;
        for (q = 1; q < this.pm.st; q++) {
            if (sts == q) {
                this.layer[q].style.left = this.blr[q].style.left = this.layer[0].style.left;
                this.layer[q].style.top = this.blr[q].style.top = this.layer[0].style.top;
                this.layer[q].style.width = this.blr[q].style.width = this.layer[0].style.width;
                this.layer[q].style.height = this.blr[q].style.height = this.layer[0].style.height;
                this.layer[q].style.visibility = this.blr[q].style.visibility = "visible";
            } else {
                this.layer[q].style.left = this.blr[q].style.left = "-3000px";
            }
        }
    } else {
        for (q = 0; q < this.pm.st; q++) {
            if (this.noLayer == 0)
                if (this.layer[q])
                    this.layer[q].style.visibility = (q == sts) ? "visible" : "hidden";
            if (this.blr[q])
                this.blr[q].style.visibility = (q == sts) ? "visible" : "hidden";
            if (this.fL$)
                if (this.fLl[q])
                    this.fLl[q].style.visibility = (q == sts) ? "visible" : "hidden";
            if (this.blr2[q]) {
                this.blr2[q].style.visibility = this.blr[q].style.visibility;
                if (((this.lI[q] != n$) ? aIC[tpi][this.lI[q] * 3 + 1] : 0) + ((this.rI[q] != n$) ? aIC[tpi][this.rI[q] * 3 + 1] : 0) >= parseFloat(this.blr[q].style.width.replace(/px/, "")))
                    this.blr2[q].style.visibility = "hidden";
            }
        }
    }
}
function awmoimo() {
    if (this.ps.awmun)
        return;
    this.shst(1);
    if (this.ii[1] != n$) {
        this.layer[1].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].src = this.layer[1].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].src;
    }
    if (awmctm != n$)
        return;
    if (awmSubmenusFrame != "") {
        eval("var frex=parent." + awmSubmenusFrame);
        if (frex) {
            eval("this.sm=parent." + awmSubmenusFrame + ".awm" + this.pm.nm + "_sub_" + (this.ind + 1));
            if (this.sm) {
                this.sm.pi = this;
                this.sm.pm.ss = this.pm.ss;
            } else
                this.sm = n$;
        }
    }
    this.ps.mio = 1;
    this.pm.mio = 1;
    var ab$ = (awmSubmenusFrame == '' && !(this.pm.sFO > -9000)) ? 1 : 0;
    if (this.pm.ss) {
        if (this.pm.sUC > 1) {
            if (this.sm != n$)
                if (!this.sm.swn)
                    if (this.sm.cd) {
                        if (ab$) {
                            this.ps.rsI();
                            setTimeout("awmm[" + this.pm.ind + "].cn[" + this.ps.ind + "].hdt();", 200);
                        } else {
                            this.ps.hdt();
                        }
                    }
        } else {
            if (ab$) {
                this.ps.rsI();
                setTimeout("awmm[" + this.pm.ind + "].cn[" + this.ps.ind + "].hdt();", 200);
            } else {
                this.ps.hdt();
            }
        }
    } else {
        this.ps.rsI();
    }
    xxxx = n$;
    if (this.sm != n$ && this.pm.ss && ab$)
        if (this.sm.sLDA[0] == 0)
            xxxx = this.sm;
    if (this.sm != n$)
        if (this.sm.sLDA[0] && this.sbt == this.url2)
            this.sbt = "";
    this.shst(1);
    window.status = this.sbt;
    if (this.sm != n$)
        if (!this.sm.swn && !this.sm.sLDA[0]) {
            clearTimeout(this.sm.hsid);
            clearTimeout(this.ps.ssid);
            this.sm.mio = 0;
            if (this.sm.cd)
                this.ps.ssid = (awmSubmenusFrame == '') ? setTimeout("awmm[" + this.pm.ind + "].cn[" + this.sm.ind + "].show(1);", this.sm.grShowDelay) : setTimeout("parent." + awmSubmenusFrame + ".awm" + this.pm.nm + "_sub_" + (this.ind + 1) + ".show(1)", this.sm.grShowDelay);
        }
    if (this.jc[1] != n$ && !this.noLayer)
        eval("setTimeout(\"" + this.jc[1] + "\",10);");
}
function awmoimot() {
    if (this.sm == n$ || (this.sm != n$ && this.sm.cd)) {
        if (this.pm.selectedItem < 1) {
            this.shst((this.hFs) ? this.pm.aIH : 0);
        } else {
            var tmpHead = parseInt(((this.ps.it[0].iHF == 2) ? 1 : 0));
            if (this.ps.ind == 0 && (this.ind == this.pm.selectedItem - tmpHead)) {
                this.shst(2);
            } else {
                this.shst((this.hFs) ? this.pm.aIH : 0);
            }
        }
    }
    if (this.sm != n$) {
        if (!this.pm.ss)
            this.sm.mio = 0;
        clearTimeout(this.sm.hsid);
        clearTimeout(this.ps.ssid);
        if (!this.sm.cd && !this.pm.ss) {
            this.sm.hsid = (awmSubmenusFrame == '') ? setTimeout("awmm[" + this.pm.ind + "].cn[" + this.sm.ind + "].hdt(0);", this.sm.grHideDelay) : setTimeout("parent." + awmSubmenusFrame + ".awm" + this.pm.nm + "_sub_" + (this.ind + 1) + ".hdt(0)", this.sm.grHideDelay);
            awmHideID = this.sm.hsid;
        }
    }
    window.status = awmdst;
    if (this.jc[0] != n$ && !this.noLayer)
        eval("setTimeout(\"" + this.jc[0] + "\",10);");
}
function awmoimd(e) {
    if (this.pi.noLayer == 2)
        return;
    var tpis = this.pi.sm, tpim = this.pi.pm;
    this.pi.shst(2);
    if (this.pi.iHF == 1) {
        this.pi.pm.mio = 0;
        awmctm = this.pi.ps;
        this.pi.pm.cm(0);
        this.pi.pm.mio = 1;
        awmmox = e.clientX - oL(awmctm.layer);
        awmmoy = e.clientY - oT(awmctm.layer);
        awmml = oL(awmctm.layer) - awmctm.layer.style.left;
        awmmt = oT(awmctm.layer) - awmctm.layer.style.top;
        return false;
    } else {
        if (e.button == 2)
            return;
        if (this.pi.sm != n$)
            if (this.pi.sm.swn || this.pi.sm.sLDA[0]) {
                var sOP = this.pi.sm.sLDO;
                clearTimeout(this.pi.sm.hsid);
                if (this.pi.sm.sLDA[0])
                    this.pi.ps.rSL();
                this.pi.ps.hdt();
                if (this.pi.sm.sLDA[0]) {
                    this.pi.url = n$;
                    if (sOP) {
                        this.pi.sm.show(0);
                    } else {
                        this.pi.sm.sLDO = true;
                        this.pi.sm.show(1);
                    }
                    if (this.pi.pm.rmbS) {
                        this.pi.pm.prvS = this.pi.pm.nm;
                        for (var i = 0; i < this.pi.pm.cn.length; i++) {
                            if (this.pi.pm.cn[i].sLDA[0]) {
                                if (this.pi.pm.cn[i].sLDO) {
                                    this.pi.pm.prvS += "-" + this.pi.pm.cn[i].ind;
                                }
                            }
                        }
                        this.pi.pm.writeCookie();
                    }
                } else {
                    this.pi.sm.show(1);
                }
            }
        if (this.pi.noLayer)
            return;
        if (this.pi.jc[2] != n$) {
            if (this.pi.jc[2].indexOf("this.") != -1) {
                eval(this.pi.jc[2]);
            } else {
                eval("setTimeout(\"" + this.pi.jc[2] + "\",10);");
            }
        }
        if (this.pi.url != n$) {
            this.awmoimot;
            if (e.shiftKey)
                setTimeout("window.open('" + this.pi.url + "');", 50);
            else if (this.pi.tf == n$)
                setTimeout("eval(window.location=\"" + this.pi.url + "\")", 100);
            else if (this.pi.tf == "new")
                ;
            else if (this.pi.tf == "top")
                window.top.location = this.pi.url;
            else
                eval("parent." + this.pi.tf + ".location=this.pi.url");
        }
    }
}
function awmoimu(e) {
    if (this.pi.iHF == 1) {
        if (awmctm != n$) {
            awmctm.pm.rep = 1;
            awmctm = n$;
        }
    } else {
        this.pi.shst(1);
        if (this.pi.sm == n$ && !this.pi.pm.ss && this.pi.ps.sLDA[0] == 0) {
            this.pi.pm.cm(1);
        }
    }
}
function awmoimm(e) {
    var t = this.pi.ps, oH2 = oH(t.layer) - (t.cs.bWt + t.cs.bWb);
    if (t.mScr != 0 && t.ct == 0 && t.mScr2) {
        if (t.layer.scrollHeight > oH2) {
            var x$$ = (t.layer.scrollHeight - oH2) / (0.74 * oH2);
            t.layer.scrollTop = Mr((e.clientY + vt - oT(t.layer) - t.cs.bWt - 0.13 * oH2) * x$$);
        }
    }
}
function awmohmm(e) {
    if (awmctm != n$) {
        awmctm.pm.rep = 1;
        awmctm.left = e.clientX - awmmox;
        awmctm.layer.style.left = awmctm.left + "px";
        awmctm.top = e.clientY - awmmoy;
        awmctm.layer.style.top = awmctm.top + "px";
    }
}
function awmpc(flg) {
    if (flg && this.wtd == 0)
        return;
    this.git();
    this.fe();
    this.arr();
    var me = this.pm;
    if (this.pi == n$) {
        var tmpEl = n$;
        if (this.pm.elemRel) {
            if (this.tNF == n$) {
                tmpEl = gTE(this.pm.ind);
                this.tNF = tmpEl;
            } else {
                tmpEl = this.tNF;
            }
        }
        var x = this.pm.offX, y = this.pm.offY;
        if (tmpEl) {
            x += oL(tmpEl) + this.pm.offX2;
            y += oT(tmpEl) + this.pm.offY2;
            var z = tmpEl.offsetParent;
            while (z != n$) {
                x += oL(z);
                y += oT(z);
                z = z.offsetParent;
            }
            var crn = me.rc;
            if (crn == 4 || crn == 6 || crn == 8)
                y -= oH(this.layer) / 2;
            if (crn == 5 || crn == 7 || crn == 8)
                x -= oW(this.layer) / 2;
            if (crn == 1 || crn == 2 || crn == 6)
                x -= oW(this.layer);
            if (crn == 2 || crn == 3 || crn == 7)
                y -= oH(this.layer);
            if (tmpEl.tagName != "SPAN") {
                crn = me.crn;
                if (crn == 1 || crn == 2 || crn == 6)
                    x += oW(tmpEl);
                if (crn == 2 || crn == 3 || crn == 7)
                    y += oH(tmpEl);
                if (crn == 5 || crn == 7 || crn == 8)
                    x += oW(tmpEl) / 2;
                if (crn == 4 || crn == 6 || crn == 8)
                    y += oH(tmpEl) / 2;
            }
        } else {
            var crn = me.crn;
            x += this.cX + ((crn == 0 || crn == 4 || crn == 3) ? (me.dx) : ((crn == 1 || crn == 6 || crn == 2) ? vr - vl - oW(this.layer) - me.dx : Mr((vr - vl - oW(this.layer) - gScW()) / 2) + me.dx));
            y += (crn == 0 || crn == 5 || crn == 1) ? (me.dy) : ((crn == 3 || crn == 7 || crn == 2) ? vb - vt - oH(this.layer) - me.dy : Mr((vb - vt - oH(this.layer)) / 2) + me.dy);
        }
        if ((this.left != x + awmlssx || this.top != y + awmlssy) && !this.pm.rep && this.cd == 0) {
            if (this.sLDe())
                this.pm.dft = 0;
            x += (this.pm.dft == 1 || this.pm.dft == 3 || this.pm.dft == 4 || this.pm.dft == 6) ? vl : 0;
            y += (this.pm.dft == 1 || this.pm.dft == 2 || this.pm.dft == 4 || this.pm.dft == 5) ? vt : 0;
            this.pm.y = y;
            this.left = x;
            this.layer.style.left = x + "px";
            if (this.pm.dft < 7 || typeof (this.top) == $un) {
                this.top = y;
                this.layer.style.top = y + "px";
            }
            if (this.pm.elemRel && this.pm.pushPull && !this.pm.pushPulled) {
                var tmpEl = gTE(this.pm.ind);
                if (tmpEl) {
                    if (tmpEl.style.display == "")
                        tmpEl.style.display = "inline-block";
                    aMove(tmpEl, n$, n$, n$, this.height + this.cs.bWt + this.cs.bWb);
                    this.pm.pushPulled = 1;
                }
            }
            return;
            if (vb - this.top < 21) {
                this.top -= 21 - (vb - this.top);
                this.layer.style.top = this.top + "px";
            }
        }
    } else {
        if (!this.pi.ps)
            return;
        if (flg)
            return;
        var psl = this.pi.ps.layer;
        var pil = this.pi.layer[0];
        var parentBorder = this.pi.ps.cs;
        var pBl = parentBorder.bWl, pBr = parentBorder.bWr, pBt = parentBorder.bWt, pBb = parentBorder.bWb;
        this.lod = this.od;
        if (this.lod == 0) {
            if (this.pi.ps.ct == 0) {
                if (this.pm.rtls)
                    this.lod = ((oL(psl) - this.swr - oW(this.layer) > vl) ? 2 : 1);
                else
                    this.lod = ((oL(psl) + oW(psl) + this.swr + oW(this.layer) > vr) && (oL(psl) - this.swr - oW(this.layer) > vl)) ? 2 : 1;
            } else {
                this.lod = ((oT(psl) + oH(psl) + this.swr + oH(this.layer) > vb) && (oT(psl) - this.swr - oH(this.layer) > vl)) ? 2 : 1;
            }
        }
        if (this.pi.ps.ct == 0) {
            if (this.sLDA[0]) {
                this.left = oL(psl) + pBl + this.sLDA[2] + ((this.sLDA[1] == 2) ? (oW(psl) - oW(this.layer2) - pBl - pBr) : ((this.sLDA[1] == 1) ? (oW(psl) - oW(this.layer2) - pBl - pBr) / 2 : 0));
                this.top = this.pi.top + oT(psl) + oH(pil) + pBt + this.sLDA[3];
            } else {
                this.left = (this.lod == 1) ? ((this.pm.sFO > -9000 && this.ind == 0) ? vl : oL(psl) + this.pi.left + this.pi.width + pBl + pBr) + this.swr : oL(psl) - oW(this.layer) - this.swr;
                if (this.pm.sFO > -9000 && this.ind == 0 && ((this.pm.rtls && this.pm.rtlf != 2) || this.pm.rtlf == 1)) {
                    this.left = window.innerWidth - oW(this.layer) - this.swr;
                }
                this.top = ((this.sa == 0) ? (oT(psl) + pBt + oT(pil) + 0 * this.pi.top - psl.scrollTop) : ((this.sa == 1) ? oT(psl) : ((this.sa == 2) ? oT(psl) + oH(psl) - oH(this.layer) : oT(psl) + (oH(psl) - oH(this.layer)) / 2)));
                this.top += ((this.pm.sFO > -9000 && this.ind == 0) ? this.pm.sFO - this.pi.ps.doy + vt : 0) + this.alO;
            }
            this.layer.style.left = this.left + "px";
        } else {
            this.left = (this.sa == 0) ? ((oL(psl) + pBl) + oL(pil) + ((this.pm.rtls) ? (oW(pil) - oW(this.layer)) : 0)) : ((this.sa == 1) ? oL(psl) : ((this.sa == 2) ? oL(psl) + oW(psl) - oW(this.layer) : oL(psl) + (oW(psl) - oW(this.layer)) / 2));
            this.left += ((this.pm.sFO > -9000 && this.ind == 0) ? this.pm.sFO - this.pi.ps.dox + vl : 0) + this.alO;
            if (this.left + oW(this.layer) > vr)
                this.left = vr - oW(this.layer);
            this.layer.style.left = this.left + "px";
            this.top = (this.lod == 1) ? ((this.pm.sFO > -9000 && this.ind == 0) ? vt : oT(psl) + this.pi.top + this.pi.height + pBt + pBb) + this.swr : oT(psl) - oH(this.layer) - this.swr;
        }
        if (this.ct == 2)
            this.layer.style.left = this.left = this.cX + "px";
        if (this.mScr == -1 && this.sLDA[0] == 0 && !this.sLDe()) {
            if (this.layer.scrollHeight > (vb - vt - vSE() * scW)) {
                aMove(this.layer, n$, n$, (this.width) + ((this.mScr2 == 2) ? 0 : scW), vb - vt - vSE() * scW - this.cs.bWt - this.cs.bWb);
                this.layer.style.overflowY = (this.mScr2 == 2) ? "hidden" : "scroll";
            } else {
                aMove(this.layer, n$, n$, (this.width), this.height);
                this.layer.style.overflowY = "visible";
            }
        }
        if (this.mScr != 0)
            this.layer.scrollTop = 0;
        if (this.top + oH(this.layer) > vb - vSE() * scW && this.sLDA[0] == 0) {
            this.top = vb - oH(this.layer) - vSE() * scW;
            this.layer.style.top = this.top + "px";
        } else {
            this.layer.style.top = this.top + "px";
        }
    }
}
function awmu(fold) {
    var t = this, layer = t.layer, w1 = oW(layer), h1 = oH(layer);
    if (fold) {
        var shw = t.shwd;
        var awmud = t.awmUnfoldDirectionD;
        if (t.awmuc < 0) {
            layer.style.left = "-3000px";
            layer.style.top = "-3000px";
            layer.style.clip = 'rect(auto,auto,auto,auto)';
            t.layer3.style.visibility = "hidden";
            t.layer.style.visibility = "hidden";
            clearInterval(t.uid);
            t.awmun = 0;
            return;
        }
    } else {
        var shw = t.shw;
        var awmud = t.awmud;
        if (t.awmuc > 10) {
            t.layer3.style.visibility = "hidden";
            layer.style.clip = 'rect(auto,auto,auto,auto)';
            clearInterval(t.uid);
            t.awmun = 0;
            return;
        }
    }
    switch (awmud) {
        case 1:
            if (shw == 1) {
                layer.style.left = (t.left - w1 * (10 - t.awmuc) / 10) + "px";
                layer.style.clip = "rect(0px," + w1 + "px," + h1 + "px," + Mr(w1 * (10 - t.awmuc) / 10) + "px)";
            } else
                layer.style.clip = "rect(0px," + Mr(w1 * t.awmuc / 10) + "px," + h1 + "px,0px)";
            break;
        case 2:
            if (shw == 1) {
                layer.style.left = (t.left + w1 * (10 - t.awmuc) / 10) + "px";
                layer.style.clip = "rect(0px," + Mr(w1 * t.awmuc / 10) + "px," + h1 + "px,0px)";
            } else
                layer.style.clip = "rect(0px," + w1 + "px," + h1 + "px," + w1 * (10 - t.awmuc) / 10 + "px)";
            break;
        case 3:
            if (shw == 1) {
                layer.style.top = (t.top - h1 * (10 - t.awmuc) / 10) + "px";
                layer.style.clip = "rect(" + Mr(h1 * (10 - t.awmuc) / 10) + "px," + w1 + "px," + h1 + "px,0px)";
            } else
                layer.style.clip = "rect(0px," + w1 + "px," + Mr(h1 * t.awmuc / 10) + "px,0px)";
            break;
        case 4:
            if (shw == 1) {
                layer.style.top = (t.top + h1 * (10 - t.awmuc) / 10) + "px";
                layer.style.clip = "rect(0px," + w1 + "px," + Mr(h1 * t.awmuc / 10) + "px,0px)";
            } else
                layer.style.clip = "rect(" + Mr(h1 * (10 - t.awmuc) / 10) + "px," + w1 + "px," + h1 + "px,0px)";
            break;
        case 5:
            if (shw == 1) {
                layer.style.left = (t.left - w1 * (10 - t.awmuc) / 10) + "px";
                layer.style.top = (t.top - h1 * (10 - t.awmuc) / 10) + "px";
                layer.style.clip = "rect(" + Mr(h1 * (10 - t.awmuc) / 10) + "px," + w1 + "px," + h1 + "px," + Mr(w1 * (10 - t.awmuc) / 10) + "px)";
            } else
                layer.style.clip = "rect(0px," + Mr(w1 * t.awmuc / 10) + "px," + Mr(h1 * t.awmuc / 10) + "px,0px)";
            break;
        case 6:
            if (shw == 1) {
                layer.style.left = (t.left - w1 * (10 - t.awmuc) / 10) + "px";
                layer.style.top = (t.top + h1 * (10 - t.awmuc) / 10) + "px";
                layer.style.clip = "rect(0px," + w1 + "px," + Mr(h1 * t.awmuc / 10) + "px," + Mr(w1 * (10 - t.awmuc) / 10) + "px)";
            } else
                layer.style.clip = "rect(" + Mr(h1 * (10 - t.awmuc) / 10) + "px," + Mr(w1 * t.awmuc / 10) + "px," + h1 + "px,0px)";
            break;
        case 7:
            if (shw == 1) {
                layer.style.left = (t.left + w1 * (10 - t.awmuc) / 10) + "px";
                layer.style.top = (t.top - h1 * (10 - t.awmuc) / 10) + "px";
                layer.style.clip = "rect(" + Mr(h1 * (10 - t.awmuc) / 10) + "px," + Mr(w1 * t.awmuc / 10) + "px," + h1 + "px," + w1 * (10 - t.awmuc) / 10 + "px)";
            } else
                layer.style.clip = "rect(0px," + w1 + "px," + Mr(h1 * t.awmuc / 10) + "px," + w1 * (10 - t.awmuc) / 10 + "px)";
            break;
        case 8:
            if (shw == 1) {
                layer.style.left = (t.left + w1 * (10 - t.awmuc) / 10) + "px";
                layer.style.top = (t.top + h1 * (10 - t.awmuc) / 10) + "px";
                layer.style.clip = "rect(0px," + Mr(w1 * t.awmuc / 10) + "px," + Mr(h1 * t.awmuc / 10) + "px,0px)";
            } else
                layer.style.clip = "rect(" + Mr(h1 * (10 - t.awmuc) / 10) + "px," + w1 + "px," + h1 + "px," + w1 * (10 - t.awmuc) / 10 + "px)";
            break;
        case 9:
            if (shw == 1) {
                layer.style.left = (t.left + w1 * (10 - t.awmuc) / 20) + "px";
                layer.style.top = (t.top + h1 * (10 - t.awmuc) / 20) + "px";
                layer.style.clip = "rect(0px," + Mr(w1 * t.awmuc / 10) + "px," + Mr(h1 * t.awmuc / 10) + "px,0px)";
            } else
                layer.style.clip = "rect(" + Mr(h1 * (10 - t.awmuc) / 20) + "px," + ((w1 / 2) * (1 + t.awmuc / 10)) + "px," + ((h1 / 2) * (1 + t.awmuc / 10)) + "px," + w1 * (10 - t.awmuc) / 20 + "px)";
            break;
        case 10:
            t.layer3.style.visibility = "visible";
            if (fold)
                layer.style.left = layer.style.top = "-3000px";
            t.layer3.style.left = (t.left + w1 * (10 - t.awmuc) / 20) + "px";
            t.layer3.style.top = (t.top + h1 * (10 - t.awmuc) / 20) + "px";
            t.layer3.style.width = (w1 * (t.awmuc / 10)) + "px";
            t.layer3.style.height = (h1 * t.awmuc / 10) + "px";
            break;
    }
    if (fold)
        t.awmuc -= 0.5;
    else
        t.awmuc += 0.5;
}
function awmcu(fold) {
    clearInterval(this.uid);
    if (typeof (this.lod == $un))
        this.lod = (this.od == 0) ? 1 : this.od;
    var $tlO = this.lod + ((this.pi) ? ((this.pi.ps.ct == 0) ? 0 : 2) : 2);
    if (fold == 0) {
        this.layer.style.clip = 'rect(0,0,0,0)';
        this.awmuc = 0;
        this.awmud = (this.ud != 0) ? this.ud : $tlO;
    } else {
        this.awmuc = 10;
        this.awmUnfoldDirectionD = (this.udd != 0) ? this.udd : $tlO;
    }
    this.layer.style.visibility = "visible";
    this.awmun = 1;
    this.uid = setInterval("awmm[" + this.pm.ind + "].cn[" + this.ind + "].uf2(" + fold + ");", 10);
}
function awmwr() {
    if (typeof (aRsF) != $un)
        aRsF();
    if (typeof (awmm) == $un)
        return;
    if (!(awmSubmenusFrameOffset > -9000)) {
        for (var mno = 0; mno < awmm.length; mno++) {
            if (awmm[mno].cn[0].ct == 2) {
                awmm[mno].cn[0].argd = 2;
                awmm[mno].cn[0].arr();
                if (awmm[mno].selectedItem > 0)
                    awmm[mno].cn[0].it[awmm[mno].selectedItem - ((awmm[mno].cn[0].it[0].iHF == 2) ? 1 : 0)].shst(2);
            }
            if (!awmm[mno].rep && awmm[mno].cll == 0)
                awmm[mno].cn[0].pc();
            awmm[mno].cm(0);
            if (awmm[mno].cll && !awmm[mno].cd)
                awmm[mno].cn[0].hdt(0);
        }
        awmLH = awmLSH = -10;
    }
}
function awmwu() {
    if (aUF != n$)
        aUF();
    if (typeof (awmm) == $un)
        return;
    if (awmSubmenusFrameOffset > -9000) {
        for (var mno = 0; mno < awmm.length; mno++) {
            if (awmm[mno].cn[0].pi != n$) {
                awmm[mno].cn[0].pi.shst(0);
                awmm[mno].cn[0].pi.sm = n$;
            }
        }
    }
}
function awmwbl() {
}
function awmwl() {
    if (!(navigator.userAgent.indexOf('Konqueror') > -1))
        awmwbl();
    for (var mno = 0; mno < awmm.length; mno++) {
        if (!awmm[mno].cll)
            awmm[mno].cn[0].pc();
    }
}
function awmd() {
    var clientX = window.innerWidth;
    var clientY = window.innerHeight;
    var sx = 2;
    var sy = 2;
    var dd = 6;
    var snx, sny;
    if (isNaN(awmlssy))
        awmlssy = window.pageYOffset;
    if (isNaN(awmlssx))
        awmlssx = window.pageXOffset;
    if (isNaN(awmlsy))
        awmlsy = window.pageYOffset;
    if (isNaN(awmlsx))
        awmlsx = window.pageXOffset;
    if (vl != awmlsx || vt != awmlsy || vb - vt != awmLH) {
        for (var mno = 0; mno < awmm.length; mno++) {
            var crm = awmm[mno];
            if (crm.cn[0].ft && crm.cll == 0) {
                if (crm.dft) {
                    crm.mio = 0;
                    crm.cm(1);
                }
                if (crm.dft == 1 || crm.dft == 3) {
                    crm.cn[0].left = parseInt(crm.cn[0].layer.style.left) + vl - awmlsx;
                    crm.cn[0].layer.style.left = crm.cn[0].left + "px";
                    if (awmSubmenusFrame != '' && crm.cn[0].ct > 0)
                        crm.cn[0].dox = vl;
                }
                if (crm.dft == 1 || crm.dft == 2) {
                    crm.cn[0].top = parseInt(crm.cn[0].layer.style.top) + vt - awmlsy;
                    crm.cn[0].layer.style.top = crm.cn[0].top + "px";
                    if (awmSubmenusFrame != '' && crm.cn[0].ct == 0)
                        crm.cn[0].doy = vt;
                }
                if (crm.dft == 7) {
                    if (crm.cn[0].layer) {
                        var x = gX(crm);
                        var tmp = parseInt((vt >= x[0] && vt <= x[1]) ? parseInt(vt) : ((vt < x[0]) ? x[0] : x[1]));
                        crm.cn[0].top = tmp + x[2];
                        crm.cn[0].layer.style.top = crm.cn[0].top + "px";
                        if ((tmp == x[0] && crm.mS6) || (tmp == x[1] && crm.mS7)) {
                            if (!crm.cn[0].cd) {
                                crm.cn[0].mio = 0;
                                crm.cn[0].show(0);
                            }
                        } else {
                            if (crm.cn[0].cd)
                                crm.cn[0].show(1);
                        }
                    }
                }
            }
        }
        awmlsx = vl;
        awmlsy = vt;
        awmLH = vb - vt;
    }
    if (vl != awmlssx || vt != awmlssy || vb - vt != awmLSH) {
        for (var mno = 0; mno < awmm.length; mno++) {
            var crm = awmm[mno];
            if (crm.cn[0].ft && crm.cll == 0) {
                if ((crm.dft == 4 || crm.dft == 6) && vl != awmlssx) {
                    crm.mio = 0;
                    crm.cm(0);
                    snx = Math.abs(vl - awmlssx) / (vl - awmlssx);
                    if ((Mr(Math.abs(vl - awmlssx) / dd)) >= sx)
                        sx = Mr(Math.abs(vl - awmlssx) / dd);
                    if (Math.abs(vl - awmlssx) < sx)
                        sx = Math.abs(vl - awmlssx);
                    crm.cn[0].left = parseInt(crm.cn[0].layer.style.left) + snx * sx;
                    crm.cn[0].layer.style.left = crm.cn[0].left + "px";
                    if (awmSubmenusFrame != '' && crm.cn[0].ct > 0)
                        crm.cn[0].dox = vl;
                }
                if ((crm.dft == 4 || crm.dft == 5) && vt != awmlssy) {
                    crm.mio = 0;
                    crm.cm(0);
                    sny = Math.abs(vt - awmlssy) / (vt - awmlssy);
                    if ((Mr(Math.abs(vt - awmlssy) / dd)) >= sy)
                        sy = Mr(Math.abs(vt - awmlssy) / dd);
                    if (Math.abs(vt - awmlssy) < sy)
                        sy = Math.abs(vt - awmlssy);
                    crm.cn[0].top = parseInt(crm.cn[0].layer.style.top) + sny * sy;
                    crm.cn[0].layer.style.top = crm.cn[0].top + "px";
                    if (awmSubmenusFrame != '' && crm.cn[0].ct == 0)
                        crm.cn[0].doy = vt;
                }
                if (crm.dft == 8 && (vt != awmlssy || vb - vt != awmLSH)) {
                    if (crm.cn[0].layer) {
                        crm.mio = 0;
                        crm.cm(0);
                        sny = Math.abs(vt - awmlssy) / (vt - awmlssy);
                        if ((Mr(Math.abs(vt - awmlssy) / dd)) >= sy)
                            sy = Mr(Math.abs(vt - awmlssy) / dd);
                        if (Math.abs(vt - awmlssy) < sy)
                            sy = Math.abs(vt - awmlssy);
                        var x = gX(crm);
                        var tmp = parseInt((vt >= x[0] && vt <= x[1]) ? parseInt(awmlssy) : ((vt < x[0]) ? x[0] : x[1]));
                        crm.cn[0].top = tmp + x[2];
                        crm.cn[0].layer.style.top = crm.cn[0].top + "px";
                        if ((tmp == x[0] && crm.mS6) || (tmp == x[1] && crm.mS7)) {
                            if (!crm.cn[0].cd) {
                                crm.cn[0].mio = 0;
                                crm.cn[0].show(0);
                            }
                        } else {
                            if (crm.cn[0].cd)
                                crm.cn[0].show(1);
                        }
                    }
                }
            }
        }
        if (vl != awmlssx)
            awmlssx += snx * sx;
        if (vt != awmlssy)
            awmlssy += sny * sy;
        if (awmLSH != vb - vt)
            awmLSH = vb - vt;
    }
    for (var mno = 0; mno < awmm.length; mno++)
        if (awmm[mno].cll == 0)
            awmm[mno].cn[0].pc(1);
}
function aCo() {
    isKonq = navigator.userAgent.indexOf('Konqueror') > -1;
    vl = ((isKonq) ? window.pageXOffset : window.scrollX);
    vt = ((isKonq) ? window.pageYOffset : window.scrollY);
    viewHeight = document.body.scrollHeight;
    vr = vl + window.innerWidth;
    vb = vt + window.innerHeight;
}
function gTE(mi) {
    if (awmm[mi].iMN && awmm[mi].elemRel == 2) {
        var i = 0;
        while (i < $D.images.length && txt != awmm[mi].iMN) {
            var obj = $D.images[i].src.split("/");
            var txt = obj[obj.length - 1];
            if (txt == awmm[mi].iMN)
                return $D.images[i];
            i++;
        }
    } else {
        if (awmm[mi].elemRel == 1)
            return dg(awmm[mi].posID);
    }
}
function awmOpenSubmenus(mi) {
    var xx = awmm[mi].prvS.split("-");
    if (xx.length < 2)
        return;
    if (xx[0] != awmm[mi].nm)
        return;
    for (var i = 1; i < xx.length; i++) {
        var crc = awmm[mi].cn[xx[i]];
        if (!crc.sLDA[0] || !crc.pi.ps.ft)
            return;
        crc.sLDO = true;
        crc.show(1);
        crc.pi.shst(2);
    }
}
function awmdb(mi) {
    if (awmm[mi].awmD)
        for (var i = 0; i < aIC[mi].length; i = i + 3)
            if (aIC[mi][i + 1] == 0 || aIC[mi][i + 2] == 0) {
                setTimeout("awmdb(" + mi + ")", 10);
                return;
            }
    var crc = awmm[mi].cn[0];
    if (!awmm[mi].cll) {
        if ((awmm[mi].elemRel == 0 || gTE(mi)) && (mpi || aLf())) {
            crc.git();
            if (awmm[mi].dft < 7) {
                crc.show(1);
                awmOpenSubmenus(mi);
            } else {
                crc.cd = 0;
                crc.pc();
                crc.cd = 1;
                awmLSH = awmLH = -10;
            }
        } else {
            setTimeout("awmdb(" + mi + ")", 10);
        }
    }
}
function awmbmm() {
    if (typeof (aIC) == $un)
        aIC = new Array();
    if (typeof (aFC$) == $un)
        aFC$ = new Array();
    if (typeof (awmImagesColl) != $un)
        aIC[this.ind] = awmImagesColl;
    aFC$[this.ind] = aFC;
    eval(aue(dA));
    aLh2();
    if (typeof (awmTarget) != $un && this.ind > 0)
        return;
    if (typeof (cKc) == $un)
        cCc = true;
    else
        cCc = !cKc(cH[cH.length - 1]);
    if (this.awmD)
        if (cH[0] != aue(cJ[0]) && cCc && cH[cH.length - 1] != cI && cH[cH.length - 1] != aue(cJ[1]))
            return;
    if (this.awmE)
        if (dH[0] != aue(dJ[0]) && dH[dH.length - 1] != aue(dJ[1]))
            this.awmE = 2;
    if (this.sUC % 2)
        $D.onmousedown = awmodmd;
    window.status = "." + (this.ind + 1);
    this.ght();
    this.whtd();
    clearInterval(aCI);
    aCI = setInterval("aCo()", 50);
    awmdb(this.ind);
    window.status = awmdst;
    clearInterval(awmdid);
    awmdid = setInterval("awmd()", 25);
    awmsoo = awmso + 1;
    if (this.ind == 0) {
        if (typeof (window.onload) != $un) {
            awmwbl = window.onload;
            awmwblt = window.onload;
        } else
            awmwblt = awmwbl;
        window.onload = awmwl;
        aUF = window.onunload;
        window.onunload = awmwu;
    } else
        awmwbl = awmwblt;
}
function awmHideMenu(mNm) {
    var ml = awmm;
    if (ml) {
        var i = 0;
        while (i < ml.length) {
            if (ml[i].nm == mNm || mNm == n$) {
                ml[i].cm(1);
                ml[i].cn[0].show(0);
            }
            i++;
        }
        ml = n$;
    }
}
function aMove(o1, l1, t1, w1, h1) {
    if (l1 != n$)
        o1.style.left = l1 + "px";
    if (t1 != n$)
        o1.style.top = t1 + "px";
    if (w1 != n$)
        o1.style.width = w1 + "px";
    if (h1 != n$)
        o1.style.height = h1 + "px";
}
function oL(o1) {
    return o1.offsetLeft;
}
function oT(o1) {
    return o1.offsetTop;
}
function oW(o1) {
    return o1.offsetWidth;
}
function oH(o1) {
    return o1.offsetHeight;
}
function Mr(o1) {
    return Math.round(o1);
}
function Mm(o1, o2) {
    return Math.max(o1, o2);
}
function gLT(o) {
    var d = new Array();
    d[0] = oL(o);
    d[1] = oT(o);
    var z = o.offsetParent;
    while (z != n$) {
        d[0] += oL(z);
        d[1] += oT(z);
        z = z.offsetParent;
    }
    return d;
}
function gX(o) {
    var x = new Array();
    var mS0 = (isNaN(o.mS0)) ? Mr((vb - vt) * o.mS0.substring(0, o.mS0.length - 1) / 100) : o.mS0;
    x[2] = Mr(((o.mS1 == 1) ? ((vb - vt - oH(o.cn[0].layer)) / 2) : ((o.mS1 == 2) ? (vb - vt - oH(o.cn[0].layer)) : 0)) + mS0);
    x[0] = o.y - x[2];
    if (o.mS3 == 2) {
        var i = 0, txt = "", tImg = n;
        while (i < $D.images.length && txt != o.mS4) {
            var obj = $D.images[i].src.split("/");
            var txt = obj[obj.length - 1];
            if (txt == o.mS4)
                tImg = $D.images[i];
            i++;
        }
        x[1] = ((tImg) ? gLT(tImg)[1] + o.mS5 + ((o.mS2 == 1) ? oH(tImg) : 0) : 0);
    } else {
        if (o.mS3 > 0)
            var obj = dg(o.mS4);
        x[1] = ((o.mS3 == 1) ? (((obj) ? gLT(obj)[1] : 0) + o.mS5 + ((o.mS2 == 1) ? ((obj) ? oH(obj) : 0) : 0)) : (((o.mS2 == 1) ? viewHeight : 0) + o.mS5));
    }
    x[1] += -x[2] - oH(o.cn[0].layer);
    if (x[0] > x[1])
        x[1] = x[0];
    return x;
}
function awmShowMenu(mNm, x, y, frame) {
    var ml;
    if (arguments.length < 4 || frame == n$)
        ml = awmm;
    else {
        eval("var frex=parent." + awmSubmenusFrame);
        if (!frex)
            return;
        eval("ml=parent." + frame + ".awmm;");
    }
    if (ml) {
        var i = 0;
        while (ml[i].nm != mNm && i < ml.length - 1)
            i++;
        if (ml[i].nm == mNm) {
            ml[i].cn[0].top = -3000;
            ml[i].cn[0].left = -3000;
            if (arguments.length < 3 || x == n$ || y == n$)
                ml[i].cn[0].show(1);
            else {
                ml[i].cn[0].pm.rep = 1;
                ml[i].cn[0].show(1, x, y);
            }
        }
        ml = n$;
    }
}
function awmHideGroup() {
    if (typeof (awmTarget) != $un)
        return;
    for (i = 0; i < awmm.length; i++) {
        awmm[i].awmHide2ID = setTimeout("awmHideMenu('" + awmm[i].nm + "');", awmhd);
    }
}
function awmShowGroup(gNm, gCr, eCr, ofX, ofY) {
    if (typeof (awmTarget) != $un)
        return;
    var tmp;
    var mNm = "";
    for (var i = 0; i < gNm.split("-").length - 1; i++)
        mNm += (i == 0) ? gNm.split("-")[0] : "-" + gNm.split("-")[i];
    gNm = gNm.split("-")[gNm.split("-").length - 1];
    clearTimeout(awmHideID);
    awmHideMenu(mNm);
    for (i = 0; i < awmm.length; i++) {
        for (j = 0; j < awmm[i].cn.length; j++) {
            if (awmm[i].cn[j].groupID == gNm)
                if (mNm == awmm[i].nm || mNm == n$)
                    tmp = awmm[i].cn[j];
            if (tmp) {
                clearTimeout(awmm[i].awmHide2ID);
                imgs = dg("awmAnchor-" + mNm + "-" + gNm);
                if (imgs == n$) {
                    if (gNm == "gr0") {
                        tmp.cd = 0;
                        tmp.git();
                        tmp.fe();
                        tmp.arr();
                        tmp.show(1);
                    }
                    return;
                }
                x = oL(imgs);
                y = oT(imgs);
                var z = imgs.offsetParent;
                while (z != n$) {
                    x += oL(z);
                    y += oT(z);
                    z = z.offsetParent;
                }
                tmp.cd = 0;
                tmp.git();
                tmp.fe();
                tmp.arr();
                if (gCr != n$ && eCr != n$) {
                    if (eCr == 1 || eCr == 2 || eCr == 6)
                        x += oW(imgs);
                    if (eCr == 2 || eCr == 3 || eCr == 7)
                        y += oH(imgs);
                    if (eCr == 5 || eCr == 7 || eCr == 8)
                        x += oW(imgs) / 2;
                    if (eCr == 4 || eCr == 6 || eCr == 8)
                        y += oH(imgs) / 2;
                    if (gCr == 1 || gCr == 2 || gCr == 6)
                        x -= oW(tmp.layer);
                    if (gCr == 2 || gCr == 3 || gCr == 7)
                        y -= oH(tmp.layer);
                    if (gCr == 5 || gCr == 7 || gCr == 8)
                        x -= oW(tmp.layer) / 2;
                    if (gCr == 4 || gCr == 6 || gCr == 8)
                        y -= oH(tmp.layer) / 2;
                } else {
                    if (tmp.pi) {
                        if (tmp.pi.ps.ct == 0) {
                            x += (oW(imgs) + tmp.swr);
                            y += tmp.alO;
                        } else {
                            x += tmp.alO;
                            y += (oH(imgs) + tmp.swr);
                        }
                    } else {
                        y += oH(imgs);
                    }
                }
                if (ofX)
                    x += ofX;
                if (ofY)
                    y += ofY;
                y = Math.min(y, vb - oH(tmp.layer));
                x = Math.min(x, vr - oW(tmp.layer));
                y = Mm(y, vt);
                x = Mm(x, vl);
                tmp.show(1, x, y);
                return;
            }
        }
    }
}/*6*/