//****** AllWebMenus Libraries Version # 766 ******

// Copyright (c) Likno Software 1999-2009
// The present javascript code is property of Likno Software.
// This code can only be used inside Internet/Intranet web sites located on *web servers*, as the outcome of a licensed AllWebMenus application only. 
// This code *cannot* be used inside distributable implementations (such as demos, applications or CD-based webs), unless this implementation is licensed with an "AllWebMenus License for Distributed Applications". 
// Any unauthorized use, reverse-engineering, alteration, transmission, transformation, facsimile, or copying of any means (electronic or not) is strictly prohibited and will be prosecuted.
// ***Removal of the present copyright notice is strictly prohibited***

if (parseFloat(nua.substring(nua.indexOf("Version") + 8, nua.indexOf("Version") + 12)) > 2.99 || nua.indexOf("Chrome")) {
    document.write("<SCRIPT SRC='" + awmMenuPath + awmLibraryPath + "/awmlib2.js'><\/SCRIPT>");
}
var reloadID;
clearInterval(reloadID);
if (reloadID == null) {
    reloadID = setInterval("awmDrift2();", 500);
}
var n$ = null, xxxx = Object, $un = "undefined", $D = document, dBd = $D.body, awmhd = 200, aSD = 200, aFC = new Array(), awmdst = "", awmcrm, awmcre, awmmo, awmso, awmctm = n$, awmdid, awmsht = "", awmsoo = 0, awmlsx = window.pageXOffset, awmlsy = window.pageYOffset, awmliw = window.outerWidth, awmlih = window.outerHeight, awmdemo = 0, awmSafOffsetX, awmSafOffsetY, awmRTLSupport, awmRelativeCorner, awmRightToLeftFrame, awmalt = ["left", "center", "right"], awmplt = ["absolute", "relative"], awmvlt = ["visible", "hidden", "inherit"], awmctlt = ["default", "hand", "crosshair", "help", "move", "text", "wait"], dH = kP(), dI = kP(), dJ = kP(), dK = kP(), dA = "64483D5B223638373437343730222C22334132463246225D2C64492C644A3D5B223636363936433635222C223643364636333631364336383646373337343246225D3B", dB = "3C62207374796C653D27636F6C6F723A23666630303030273E416C6C5765624D656E757320545249414C206D6F6465213C2F623E3C62723E547269616C206D656E752063616E20626520746573746564206F6E204C4F43414C484F5354206F6E6C793C62723E28646F6573204E4F5420617070656172206F6E6C696E652129", SI = ["687474703A2F2F7777772E", "6C696B6E6F", "2E636F6D2F", "4448544D4C", "4A415641534352495054", "44524F50444F574E", "44524F502D444F574E", "646F63756D656E742E6C696E6B73", "4D454E55"], aL = eval(aue(SI[7])), mpi, awmav = navigator.userAgent, awmBefore7 = parseFloat(awmav.substring(awmav.indexOf("Opera") + 6, awmav.indexOf("Opera") + 7)) < 7, aCI, vl, vt, vr, vb, awmSepr, awmAfter1 = parseFloat(awmav.substring(awmav.indexOf("Safari") + 7, awmav.indexOf("Safari") + 10)) > 99;
var scW = gScW();
aCo();
if (awmso > 0) {
    awmsoo = awmso + 1;
} else {
    var awmsc = new Array();
}
var awmLH, awmLSH, awmlssx = window.pageXOffset, awmlssy = window.pageYOffset, awmHideID, awmCollID, aIP = awmMenuPath + awmImagesPath, aDGP;
if (awmcre >= 0)
    ;
else
    awmcre = 0;
window.onunload = awmwu;
function awmpopup(link, parms) {
    window.open(link, "def", parms);
}
function gScW() {
    var scr = n$, inn = n$, wNS = 0, wS = 0;
    scr = $D.createElement('div');
    scr.style.top = scr.style.left = '-1000px';
    scr.style.width = scr.style.height = '300px';
    scr.style.overflow = "hidden";
    inn = $D.createElement('div');
    inn.style.width = inn.style.height = '100%';
    scr.appendChild(inn);
    dBd.appendChild(scr);
    wNS = oW(inn);
    inn.style.width = inn.style.height = '500px';
    scr.style.overflow = "auto";
    inn.style.width = '100%';
    wS = oW(inn);
    dBd.removeChild(dBd.lastChild);
    return (wNS - wS);
}
function vSE() {
    if (dBd.offsetHeight > dBd.clientHeight)
        return 1;
    return 0;
}
function awmhidediv() {
    var m = 1;
    while (dg("awmobject" + m)) {
        dg("awmobject" + m).style.visibility = "hidden";
        m++;
    }
    var m = 1;
    while (dg("awmform" + m)) {
        dg("awmform" + m).style.visibility = "hidden";
        m++;
    }
    var m = 1;
    while (dg("awmflash" + m)) {
        dg("awmflash" + m).style.visibility = "hidden";
        m++;
    }
}
function awmshowdiv() {
    var m = 1;
    while (dg("awmobject" + m)) {
        dg("awmobject" + m).style.visibility = "visible";
        m++;
    }
    var m = 1;
    while (dg("awmform" + m)) {
        dg("awmform" + m).style.visibility = "visible";
        m++;
    }
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
function awmiht(image) {
    return "<img src='" + awmMenuPath + awmImagesPath + "/" + awmImagesColl[image * 3] + "'" + ((awmImagesColl[image * 3 + 1] != 0) ? (" width='" + awmImagesColl[image * 3 + 1]) + "'" : "") + ((awmImagesColl[image * 3 + 2] != 0) ? (" height='" + awmImagesColl[image * 3 + 2]) + "'" : "") + " align='absmiddle'>";
}
function awmatai(text, image, algn, $A) {
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
    var s2 = (image != n$) ? awmiht(image) : "";
    var s = ((algn == 0 || algn == 3) ? s2 + s1 + text : text + s1 + s2);
    if ($A == 0)
        s = "<nobr>" + s + "</nobr>";
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
    var pdr;
    if (typeof (pd) == "number") {
        pdr = pdt = pdb = pdl = pd;
    } else {
        var pda = pd.split("px ");
        pdt = parseInt(pda[0]);
        pdr = parseInt(pda[1]);
        pdb = parseInt(pda[2]);
        pdl = parseInt(pda[3]);
    }
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
    var style = {id: "AWMST" + awmso, id2: "AWMSTTD" + awmso, id3: "AWMSTBG" + awmso, id3b: "AWMSTBGb" + awmso, id3a: "AWMSTBGa" + awmso, id4: "AWMSTCBG" + awmso, pos: pos, vis: vis, algnm: algnm, fgc: fgc, bgc: bgc, bgi: bgi, fnt: fnt, tdec: tdec, bs: bs, bw: bw, bWt: bWt, bWl: bWl, bWb: bWb, bWr: bWr, bc: bc, zi: awmzindex, pd: pd, crs: crs, pdt: pdt, pdr: pdr, pdb: pdb, pdl: pdl};
    awmsht += "." + style.id + " {position:absolute;visibility:hidden;" + "text-align:" + awmalt[algnm] + ";" + ((fnt != n$) ? "font:" + fnt + ";" : "") + ((tdec != n$) ? "text-decoration:" + tdec + "; " : "") + ((fgc != n$) ? "color:" + fgc + "; " : "") + "background-color:" + ((bgc != n$) ? bgc + "; " : "transparent; ") + ((bgi != n$) ? "background-image:url('" + awmMenuPath + awmImagesPath + "/" + awmImagesColl[bgi * 3] + "'); " : "") + ((bs != n$) ? "border-style:" + bs + "; " : "") + ((bw != n$) ? "border-width:" + bw + "px;" : "") + ((bc != n$) ? "border-color:" + bc + ";" : "") + "cursor:" + awmctlt[crs] + ";z-index:" + style.zi + "}";
    awmsht += "." + style.id2 + " {border-style:none;border-width:0px;text-align:" + awmalt[algnm] + ";padding:" + pd + "px;" + ((fnt != n$) ? "font:" + fnt + "; " : "") + ((tdec != n$) ? "text-decoration:" + tdec + "; " : "") + ((fgc != n$) ? "color:" + fgc + "; " : "") + "background-color:transparent;" + "}";
    awmsht += "." + style.id3 + " {position:absolute;" + ((bs != n$) ? "border-style:" + bs + "; " : "") + ((bw != n$) ? "border-width:" + bw + "px; " : "") + ((bc != n$) ? "border-color:" + bc + ";" : "") + ((bgi != n$) ? "background-image:url('" + awmMenuPath + awmImagesPath + "/" + awmImagesColl[bgi * 3] + "');" : "") + "background-color:" + ((bgc != n$) ? bgc + ";" : "transparent;") + "z-index:-1000;}";
    awmsht += "." + style.id4 + " {position:absolute;visibility:hidden;" + "text-align:" + awmalt[algnm] + ";" + ((fnt != n$) ? "font:" + fnt + ";" : "") + ((tdec != n$) ? "text-decoration:" + tdec + "; " : "") + ((fgc != n$) ? "color:" + fgc + "; " : "") + "background-color:transparent;" + ((bs != n$) ? "border-style:" + bs + "; " : "") + ((bw != n$) ? "border-width:" + bw + "px;" : "") + ((bc != n$) ? "border-color:" + bc + ";" : "") + "cursor:" + awmctlt[crs] + ";}";
    if (bgi != n$) {
        awmsht += "." + style.id3a + " {background-image:url('" + awmMenuPath + awmImagesPath + "/" + awmImagesColl[bgi * 3] + "')}";
        awmsht += "." + style.id3b + " {position:absolute;left:0px;top:0px;" + ((bs != n$) ? "border-style:" + bs + "; " : "") + ((bw != n$) ? "border-width:" + bw + "px; " : "") + ((bc != n$) ? "border-color:" + bc + ";" : "") + "background-color:" + ((bgc != n$) ? bgc + ";" : "transparent;") + "z-index:-1;}";
    }
    aFC = new Array();
    awmsc[awmsc.length] = style;
}
function awmCreateMenu(cll, swn, swr, mh, ud, sa, mvb, dft, crn, dx, dy, ss, ct, cs, dbi, ew, eh, jcoo, jcoc, opc, elemRel, groupID, offX2, offY2, mwd, mScr, dd, grShowDelay, grHideDelay, menuHowD, udd, sUC, mbM, mS0, mS1, mS2, mS3, mS4, mS5, mS6, mS7, mScr2, aIH) {
    if (awmmo >= 0)
        awmmo++;
    else {
        awmm = new Array();
        awmmo = 0
    }
    ;
    var me = {ind: awmmo, nm: awmMenuName, cn: new Array(), fl: !awmsc[cs].pos, cll: cll, mvb: mvb, dft: dft, crn: crn, dx: (ct < 2) ? dx : 0, dy: dy, ss: ss, sht: "<STYLE>.awmGeneric{background-color:transparent}" + awmsht + "</STYLE>", rep: 0, mio: 0, st: awmOptimize ? 2 : 3, sFO: awmSubmenusFrameOffset, awmParentFrameName: (awmSubmenusFrame == "") ? "" : window.name, selectedItem: (typeof (awmSelectedItem) == $un) ? 0 : awmSelectedItem, offX: (awmSafOffsetX) ? awmSafOffsetX : 0, offY: (awmSafOffsetY) ? awmSafOffsetY : 0, offX2: (offX2) ? offX2 : 0, offY2: (offY2) ? offY2 : 0, rtls: (awmRTLSupport) ? awmRTLSupport : 0, rtlf: (awmRightToLeftFrame) ? awmRightToLeftFrame : 0, rc: (awmRelativeCorner) ? awmRelativeCorner : 0, elemRel: elemRel, aDG: (typeof (awmDotGif) == $un) ? 0 : awmDotGif, sUC: (typeof (sUC) == $un) ? 1 : sUC, aIH: (typeof (aIH) == $un) ? 0 : aIH, awmD: (typeof (awmD) == $un) ? 0 : awmD, awmE: (typeof (awmE) == $un) ? 0 : awmE, mbM: (typeof (mbM) == $un) ? "0,0,0" : mbM, mS0: (isNaN(mS0)) ? mS0 : parseInt(mS0), mS1: mS1, mS2: mS2, mS3: mS3, mS4: mS4, mS5: mS5, mS6: mS6, mS7: mS7, iMN: (typeof (awmImageName) == $un) ? "" : awmImageName, posID: (typeof (awmPosID) == $un) ? "awmAnchor-" + awmMenuName : ((awmPosID == '') ? "awmAnchor-" + awmMenuName : awmPosID), awmHide2ID: 0, addSubmenu: awmas, ght: awmmght, whtd: awmmwhttd, buildMenu: awmbmm, cm: awmmcm};
    awmSafOffsetX = awmSafOffsetY = awmRTLSupport = awmRelativeCorner = awmRightToLeftFrame = awmDotGif = 0;
    aDGP = (me.aDG) ? aIP : awmMenuPath + awmLibraryPath;
    me.pm = me;
    me.addSubmenu(ct, swn, swr, mh, ud, sa, 1, cs, dbi, ew, eh, jcoo, jcoc, 0, 0, groupID, (ct == 2) ? 0 : mwd, mScr, dd, grShowDelay, grHideDelay, menuHowD, udd, mbM, mScr2);
    me.cn[0].pi = n$;
    if (mvb)
        $D.onmousemove = awmohmm;
    awmm[awmmo] = me;
    awmsht = awmImageName = "";
    return me.cn[0];
}
function awmas(ct, swn, swr, shw, ud, sa, od, cs, dbi, ew, eh, jcoo, jcoc, opc, alO, groupID, mwd, mScr, dd, grShowDelay, grHideDelay, shwd, udd, mbM, mScr2) {
    cnt = {id: "AWMEL" + (awmcre++), it: new Array(), ct: ct, swn: swn, swr: swr, shw: (shw > 2) ? 2 : shw, shwd: (typeof (shwd) == $un) ? 2 : ((shwd > 2) ? 2 : shwd), ud: ud, udd: udd, sa: sa, od: od, cs: awmsc[cs + awmsoo], dbi: dbi, ew: ew, eh: eh, jcoo: jcoo, jcoc: jcoc, pi: this, pm: this.pm, pm:this.pm, siw: 0, argd: 0, ft: 0, mio: 0, awmuc: 0, awmud: 0, awmUnfoldDirectionD: 0, awmun: 0, hsid: n$, ssid: n$, uid: n$, dox: 0, doy: 0, alO: alO, groupID: "gr" + groupID, tNF: n$, mwd: (typeof (mwd) == $un || ct == 2) ? 0 : mwd, mScr: (typeof (mScr) == $un || ct > 0) ? -1 : mScr, mScr2: (typeof (mScr2) == $un) ? 0 : mScr2, dd: (typeof (dd) == $un) ? 1 : dd, grShowDelay: (typeof (grShowDelay) == $un) ? 200 : grShowDelay, grHideDelay: (typeof (grHideDelay) == $un) ? 200 : grHideDelay, mbM: (typeof (mbM) == $un) ? "0,0,0" : mbM, mbL: 0, mbR: 0, mbPCl: 1, mbPCr: 1, cX: 0, addItem: awmai, addItemWithImages: awmaiwi, show: awmcs, fe: awmcfe, arr: awmca, ght: awmcght, pc: awmpc, unf: awmcu, uf2: awmu, hdt: awmchdt, rsI: crsI, amMO: amCMO, onmouseover: awmocmo, onmouseout: awmocmot};
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
    return cnt;
}
function awmai(st0, st1, st2, in0, in1, in2, tt, sbt, jc0, jc1, jc2, url, tf, mnW, mnH, iHF, hSp, noLayer) {
    var itm = {id: "AWMEL" + (awmcre++), style: [(st0 == n$) ? n$ : awmsc[st0 + awmsoo], (st1 == n$) ? n$ : awmsc[st1 + awmsoo], (st2 == n$) ? n$ : awmsc[st2 + awmsoo]], inm: [in0, (in1 == n$) ? in0 : in1, (in2 == n$) ? in0 : in2], ii: [n$, n$, n$], ia: [n$, n$, n$], hsi: [n$, n$, n$], rI: [n$, n$, n$], lI: [n$, n$, n$], fI$: [n$, n$, n$], bIP: [0, 0, 0], tt: tt, sbt: sbt, jc: [jc0, jc1, jc2], tf: tf, top: 0, left: 0, layer: [n$, n$, n$], layerTD1: [n$, n$, n$], layerTD2: [n$, n$, n$], blr: [n$, n$, n$], fLl: [n$, n$, n$], fL$: 0, ps: this, pm: this.pm, sm: n$, mnH: (mnH) ? mnH : 0, mnW: (mnW) ? mnW : 0, iHF: iHF, hSp: hSp, noLayer: (typeof (noLayer) == $un) ? 0 : noLayer, sMs: 1, hFs: 0, ght: awmight, shst: awmiss, addSubmenu: awmas, gSW: awmIG, onmouseover: awmoimo, onmouseout: awmoimot, onmousedown: awmoimd, onmousemove: awmoimm, onmouseup: awmoimu};
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
        while (url.search("%20") > -1) {
            url = url.replace("%20", " ");
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
            itm.ps.mwd = itm.mnW - itm.ps.cs.bWl - itm.ps.cs.bWr;
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
    itm.lI = [lI0, lI1, lI2];
    itm.rI = [rI0, rI1, rI2];
    itm.ia = [ia0, ia1, ia2];
    itm.hsi = [hsi0, hsi1, hsi2];
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
function awmcght() {
    var hct = "";
    for (p = 0; p < this.it.length; p++) {
        var t = this.it[p];
        this.siw = Math.max(this.siw, Math.max(((t.hsi[0] != n$) ? awmImagesColl[t.hsi[0] * 3 + 1] + 1 : 0), Math.max(((t.hsi[1] != n$) ? awmImagesColl[t.hsi[1] * 3 + 1] + 1 : 0), ((t.hsi[2] != n$) ? awmImagesColl[t.hsi[2] * 3 + 1] + 1 : 0))));
    }
    if (this.pm.fl || this.pi != n$)
        hct = " style='left:-3000;top:-3000;" + ((this.mwd && this.ct == 0) ? "width:" + (this.mwd / this.dd) + "px" : "") + "'";
    this.htx = "<div id='" + this.id + "'" + hct + " class='" + this.cs.id + " noprint' onMouseOver='this.prc.onmouseover();' onMouseOut='this.prc.onmouseout();'>";
    for (p = 0; p < this.it.length; p++) {
        this.htx += this.it[p].ght();
    }
    if (this.ct == 2)
        this.htx += "<table><td width='100%'></td></table>";
    this.htx += "</div>";
    this.htx += "<div id='" + this.id + "_Z' style='visibility:hidden;position:absolute;width:0px;height:0px;border:1px solid #808080;font-size:0px;margin:0px;padding:0px'><span style='font-size:0px;margin:0px;padding:0px'></span></div>";
    return this.htx;
}
function awmIG(s) {
    if (this.hSp && (this.ps.ct > 0 || s))
        return parseInt(this.sMg * 2 + 2 - this.sMs + this.ps.dbi);
    return 0;
}
function awmight() {
    var t = this, htx = "";
    for (var q = 0; q < this.pm.st; q++) {
        htx += "<table " + ((this.ps.mwd && this.ps.ct == 0) ? "width='100%' " : "") + "id='" + this.id + "_" + q + "' title='" + this.tt + "' onMouseOver='this.pi.onmouseover();' onMouseOut='this.pi.onmouseout();' onMouseDown='this.pi.onmousedown();' onMouseUp='this.pi.onmouseup();' class='" + this.style[q].id4 + "' border='0' cellpadding='0' cellspacing='0'><tr><td class='" + this.style[q].id2 + "' id='" + this.id + "_9_" + q + "' valign='" + ((this.noLayer == 2) ? "top" : "middle") + "'" + ((this.ps.siw > 0 && this.iHF == 2) ? " style='padding-right:0px;'" : "") + " align='" + awmalt[this.style[q].algnm] + "'>" + awmatai(this.inm[q], this.ii[q], this.ia[q], (this.ps.ct == 0) ? (this.ps.mwd / this.ps.dd) : 0) + "</td>";
        if (this.ps.siw > 0 && this.iHF == 2) {
            htx += "<td id='" + this.id + "_9_" + q + "_4' class='" + this.style[q].id2 + "' STYLE='padding-left:0px;' width='" + this.ps.siw + "' style='position:absolute;'>";
            if (this.hsi[q] != n$)
                htx += awmiht(this.hsi[q]);
            htx += "</td>";
        }
        htx += "</tr></table>";
        if (t.fI$[q] != n$)
            t.fL$ = 1;
    }
    if (this.url != n$ && this.tf == "new" && t.noLayer == 0) {
        if (this.params)
            htx += "<a href='javascript:awmpopup(\"" + this.url + "\",\"" + this.params + "\");'>";
        else
            htx += "<a href='" + this.url + "' target='_blank'>";
    }
    htx += "<img border='0' id='" + this.id + "_4' title='" + this.tt + "' style='position:absolute; cursor:" + awmctlt[this.style[0].crs] + "; z-index:" + (awmzindex + 2) + ";' src='" + aDGP + "/dot.gif' onMouseOver='this.pi.onmouseover();return true' onMouseOut='this.pi.onmouseout();' onMouseDown='this.pi.onmousedown();' onMouseUp='this.pi.onmouseup();' " + ((this.ps.mScr2) ? "onMouseMove='this.pi.onmousemove();' " : "") + ">";
    if (this.url != n$ && this.tf == "new" && t.noLayer == 0)
        htx += "</a>";
    for (var q = 0; q < this.pm.st; q++) {
        htx += "<table class='" + ((this.bIP[q]) ? this.style[q].id3b : this.style[q].id3) + "' style='left:-3000px;' id='" + this.id + "_" + q + "a' border='0' cellpadding='0' cellspacing='0'><tr>";
        if (this.lI[q] != n$) {
            htx += "<td width='" + awmImagesColl[this.lI[q] * 3 + 1] + "'>" + awmiht(this.lI[q]) + "</td>";
            htx += "<td" + ((this.bIP[q]) ? " class='" + this.style[q].id3a + "'" : "") + " width=100%></td>";
        }
        if (this.rI[q] != n$) {
            if (this.lI[q] == n$)
                htx += "<td" + ((this.bIP[q]) ? " class='" + this.style[q].id3a + "'" : "") + " width=100%></td>";
            htx += "<td width='" + awmImagesColl[this.rI[q] * 3 + 1] + "'>" + awmiht(this.rI[q]) + "</td>";
        }
        if (this.rI[q] == n$ && this.lI[q] == n$)
            htx += "<td" + ((this.bIP[q]) ? " class='" + this.style[q].id3a + "'" : "") + " style='background-color:transparent'></td>";
        htx += "</tr></table>";
    }
    if (this.hSp) {
        if (this.ps.ct == 0) {
            htx += "<table id='" + this.id + "_5' style='position:absolute' bgcolor='" + this.sC1 + "' height='1' border='0' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";
            htx += "<table id='" + this.id + "_6' style='position:absolute'" + ((this.sC2) ? " bgcolor='" + this.sC2 + "'" : "") + " height='1' border='0' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";
        } else {
            htx += "<table id='" + this.id + "_5' style='position:absolute' bgcolor='" + this.sC1 + "' width='1' border='0' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";
            htx += "<table id='" + this.id + "_6' style='position:absolute'" + ((this.sC2) ? " bgcolor='" + this.sC2 + "'" : "") + " width='1' border='0' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";
        }
    }
    if (t.fL$) {
        for (var q = 0; q < t.pm.st; q++) {
            if (t.fI$[q] != n$) {
                htx += "<div id='" + t.id + "_7_" + q + "' style='position:absolute;visibility:" + ((q == 0) ? "visible" : "hidden") + ";top:0px;left:0px;z-index:" + ((awmzindex == 0) ? 1 : (awmzindex + 1)) + "'>" + awmiht(aFC$[this.pm.ind][t.fI$[q]][0]) + "</div>";
            }
        }
    }
    return htx;
}
function awmmwhttd() {
    var s = "", crc;
    s = this.sht;
    $D.write(s);
    for (var i = 0; i < this.cn.length; i++)
        $D.write(this.cn[i].htx);
}
function awmcfe() {
    if (this.ft)
        return;
    this.layer = dg(this.id);
    this.layer3 = dg(this.id + "_Z");
    this.layer.prc = this;
    for (var p = 0; p < this.it.length; p++) {
        var tmpcont = dg(this.it[p].id + "_4");
        while (typeof (tmpcont) != "object") {
            var tmpcont = dg(this.it[p].id + "_4");
        }
        this.it[p].elr = tmpcont;
        this.it[p].elr.pi = this.it[p];
        for (var q = this.pm.st - 1; q >= 0; q--) {
            this.it[p].layerTD1[q] = dg(this.it[p].id + "_9_" + q);
            this.it[p].layer[q] = this.it[p].layerTD1[q].parentNode.parentNode;
            if (this.it[p].layer[q].tagName == "TBODY") {
                this.it[p].layer[q] = this.it[p].layerTD1[q].parentNode.parentNode.parentNode;
            }
            this.it[p].layer[q].pi = this.it[p];
            this.it[p].blr[q] = dg(this.it[p].id + "_" + q + "a");
            if (this.it[p].fL$ && this.it[p].fI$[q] != n$)
                this.it[p].fLl[q] = dg(this.it[p].id + "_7_" + q);
        }
        if (this.it[p].ps.siw > 0 && this.it[p].iHF == 2) {
            for (var q = this.pm.st - 1; q >= 0; q--) {
                this.it[p].layerTD2[q] = dg(this.it[p].id + "_9_" + q + "_4");
            }
        }
    }
    this.ft = 1;
}
function awmca() {
    if (this.argd == 1)
        return;
    var $TW = 0, t = this, tar = t.argd, til = t.it.length, tpi = t.pm.ind, mT = mL = rC = rR = thl1 = thl2 = thl = hW = hH = 0, mwd = new Array(), mhg = new Array(), wts = new Array(), hts = new Array(), $SFb = 0, iw, ih, mwt = 0, mht = 0, tcbL = t.cs.bWl, tcbR = t.cs.bWr, tcbT = t.cs.bWt, tcbB = t.cs.bWb, nl = ((awmBefore7) ? tcbL : 0), nt = ((awmBefore7) ? tcbT : 0);
    t.argd == 1;
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
                while (typeof (tI.layerTD1[q].style) != 'object')
                    ;
                iw = Mm(iw, oW(tI.layerTD1[q]) + ((tI.iHF == 2) ? (1 * t.siw + 1 * tI.style[q].pdr) : 0) + tI.style[q].bWl + tI.style[q].bWr);
                ih = Mm(ih, Mm(oH(tI.layerTD1[q]), (t.siw == 0 || tI.iHF < 2) ? 0 : oH(tI.layerTD2[q])) + tI.style[q].bWt + tI.style[q].bWb);
                iw = Mm(iw, oW(tI.blr[q]));
                ih = Mm(ih, oH(tI.blr[q]));
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
        mL = Mm(mL, (t.it[0].nL + wts[0] + t.it[0].gSW(0)));
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
        if (window.innerWidth > xyz + t.mbL + t.mbR) {
            if (t.mbT == 3)
                t.mwd = window.innerWidth - t.mbL - t.mbR;
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
    for (var p = 0; p < til; p++) {
        var tI = t.it[p];
        if (tI.nC)
            rC++;
        if (t.ct == 0) {
            w = (thl1 && p == 0) ? ((t.dd > 1) ? hW : mwt) : ((thl2 && p == til - 1) ? ((t.dd > 1) ? hW : mwt) : mwd[rC]);
            h = (t.eh) ? mht : hts[p];
        } else {
            h = ((thl1 && p == 0) || (thl2 && p == til - 1)) ? t.hH : mhg[rC];
            w = wts[p];
        }
        for (var q = 0; q < t.pm.st; q++) {
            aMove(tI.layer[q], (tI.left = tI.nL + plO), (tI.top = tI.nTop), ((tar == 0 || t.mbT == 3) ? (tI.width = w) : tI.width), ((tar == 0) ? (tI.height = h) : tI.height));
            tI.layer[q].style.pixelHeight -= tI.layer[q].offsetHeight - tI.layer[q].style.pixelHeight;
            aMove(tI.blr[q], tI.left, tI.top, tI.layer[q].style.pixelWidth, tI.layer[q].style.pixelHeight);
            var tmpw1 = tI.layer[q].offsetWidth - ((tI.iHF == 2) ? (t.siw + tI.style[q].pdr) : 0) - tI.style[q].bWl - tI.style[q].bWr;
            var tmpw2 = tI.layerTD1[q].offsetWidth;
            var tmpal = tI.style[q].algnm;
            tI.layerTD1[q].style.pixelLeft = ((tmpal == 0) ? 0 : ((tmpal == 1) ? (tmpw1 - tmpw2) / 2 : tmpw1 - tmpw2));
            tI.layerTD1[q].style.pixelTop = ((tI.noLayer == 2) ? 0 : (tI.layer[q].style.pixelHeight - tI.layerTD1[q].offsetHeight) / 2);
            if (t.siw > 0 && tI.iHF == 2) {
                tI.layerTD2[q].style.pixelLeft = tI.layer[q].style.pixelWidth - tI.layerTD2[q].offsetWidth - tI.style[q].bWl;
                tI.layerTD2[q].style.pixelTop = (tI.layer[q].style.pixelHeight - tI.layerTD2[q].offsetHeight) / 2;
            }
            tI.layer[q].style.visibility = tI.blr[q].style.visibility = (q == 0) ? "visible" : "hidden";
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
                    aMove(tI.fLl[q], tI.left + aFC$[tpi][tI.fI$[q]][3] + x, tI.top + aFC$[tpi][tI.fI$[q]][4] + y);
                }
            }
        }
        tI.elr.style.visibility = (tI.noLayer) ? "hidden" : "inherit";
        aMove(tI.elr, tI.nL + plO, ((tar == 0) ? tI.nTop : n$), tI.width, ((tar == 0) ? h : n$));
        if (tI.hSp) {
            var var1 = dg(tI.id + "_5");
            var var2 = dg(tI.id + "_6");
            if (t.ct == 0) {
                aMove(var1, oW(tI.elr) * ((100 - tI.sWt) / 200) + oL(tI.elr), tI.top + 1 * tI.sMg + h + t.dbi, (tI.sWt / 100) * oW(tI.elr), n$);
                aMove(var2, oW(tI.elr) * ((100 - tI.sWt) / 200) + oL(tI.elr), tI.top + 1 * tI.sMg + h + t.dbi + 1, (tI.sWt / 100) * oW(tI.elr), n$);
            } else {
                aMove(var1, tI.left + tI.width + 1 * tI.sMg + t.dbi, Mr(h * ((100 - tI.sWt) / 200)) + tI.nTop, n$, Mr((tI.sWt / 100) * h));
                aMove(var2, tI.left + tI.width + 1 * tI.sMg + t.dbi + 1, Mr(h * ((100 - tI.sWt) / 200)) + tI.nTop, n$, Mr((tI.sWt / 100) * h));
            }
        }
    }
    if (t.ct == 0) {
        t.width = tcbL + tcbR + ((t.dd > 1) ? hW : mwt);
        t.height = tcbT + tcbB + mT;
    } else {
        t.width = tcbL + tcbR + mL;
        t.height = tcbT + tcbB + t.hH;
    }
    aMove(t.layer, n$, n$, t.width, t.height);
    t.layer.style.pixelHeight += t.layer.style.pixelHeight - oH(t.layer);
    t.layer.style.pixelWidth += t.layer.style.pixelWidth - oW(t.layer);
    if (t.ct == 2 && t.mbT < 3) {
        t.width = t.layer.style.pixelWidth = Mm((window.innerWidth - tcbL - tcbR - t.mbR - t.mbL), t.mL);
        t.width += tcbL + tcbR;
    }
    if (t.mScr > 0 && oH(t.layer) > t.mScr) {
        aMove(t.layer, n$, n$, oW(t.layer) + ((t.mScr2 == 2) ? 0 : scW) - (tcbL + tcbR), t.mScr - (tcbT + tcbB));
        t.layer.style.overflow = (t.mScr2 == 2) ? "hidden" : "auto";
    }
    t.offLeft = oL(t.layer);
    t.offTop = oT(t.layer);
    t.argd = 1;
}
function awmcs(sf, x, y) {
    if (this.it.length == 0)
        return;
    if (sf) {
        if (mpi || aLf()) {
            this.cd = 0;
            if (this.ct == 2 && this.argd == 1) {
                this.argd = 2;
                this.arr();
            }
            if (arguments.length == 1)
                this.pc();
            else {
                this.left = this.layer.style.pixelLeft = x;
                this.top = this.layer.style.pixelTop = y;
            }
            this.layer.style.visibility = "visible";
            if (this.shw > 0 && !this.awmun)
                this.unf(0);
            if (this.jcoo != n$)
                eval(this.jcoo);
            if (this.ind == 0)
                if (this.pm.selectedItem > 0)
                    this.it[this.pm.selectedItem - ((this.it[0].iHF == 2) ? 1 : 0)].shst(2);
            for (var i = 0; i < this.it.length; i++) {
                if (this.it[i].hFs == 1) {
                    this.it[i].shst(this.pm.aIH);
                }
            }
        }
    } else {
        if (!this.ft || this.mio || this.cd)
            return;
        if (this.shwd == 0)
            this.layer3.style.visibility = this.layer.style.visibility = "hidden";
        if (this.shwd > 0) {
            this.unf(1);
        } else {
            this.layer.style.pixelLeft = -3000;
            this.layer.style.pixelTop = -3000;
        }
        if (this.pi != n$)
            if (this.pm.selectedItem < 1) {
                this.pi.shst((this.pi.hFs) ? this.pm.aIH : 0);
            } else {
                if (this.pi.ind == this.pm.selectedItem - ((this.pi.ps.it[0].iHF == 2) ? 1 : 0) && this.pi.ps.ind == 0) {
                    this.pi.shst(2);
                } else {
                    if (!this.pi.hFs)
                        this.pi.shst(0);
                }
            }
        if (this.jcoc != n$ && !this.cd)
            eval(this.jcoc);
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
    if (arguments.length == 1 && !this.cd)
        this.show(0);
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
    this.pm.mio = 1;
    this.amMO(1);
    if (this.awmun)
        return;
    clearTimeout(this.pm.awmHide2ID);
    if (this.pi != n$)
        this.pi.shst((this.swn == 0) ? 1 : 2);
    if (this.ind > 0)
        clearTimeout(this.pi.ps.hsid);
    clearTimeout(this.hsid);
}
function awmocmot() {
    this.mio = 0;
    this.pm.mio = 0;
    this.amMO(0);
    if (!this.pm.ss) {
        clearTimeout(awmCollID);
        awmCollID = setTimeout("awmm[" + this.pm.ind + "].cm(0);", this.grHideDelay);
        if (awmSubmenusFrame == "") {
            this.hsid = setTimeout("awmm[" + this.pm.ind + "].cn[0].hdt();", this.grHideDelay);
            awmHideID = this.hsid;
        }
    }
}
function awmiss(sts) {
    if (sts == 2 && this.pm.st == 2)
        sts = 1;
    if (this.noLayer == 1) {
        var tls = this.layer[0].style, tss = this.style[sts], tlc = this.layer[0].children[0].children[0].children[0].children[0].style;
        tlc.color = tss.fgc;
        tlc.font = tss.fnt;
        tlc.textDecoration = (tss.tdec != n$) ? tss.tdec : "";
        this.layerTD1[0].style.textAlign = awmalt[tss.algnm];
        this.layerTD1[0].style.padding = tss.pd + "px";
        if (this.ps.siw)
            this.layerTD1[0].style.paddingRight = "0px";
        tls.borderStyle = tss.bs;
        tls.borderWidth = tss.bw + "px";
        tls.borderColor = tss.bc;
    }
    for (q = 0; q < this.pm.st; q++) {
        if (this.noLayer == 0)
            this.layer[q].style.visibility = (q == sts) ? "visible" : "hidden";
        this.blr[q].style.visibility = (q == sts) ? "visible" : "hidden";
        if (this.fL$)
            if (this.fLl[q])
                this.fLl[q].style.visibility = (q == sts) ? "visible" : "hidden";
    }
}
function awmoimo() {
    if (awmctm != n$)
        return;
    if (this.ps.awmun)
        return;
    if (awmdemo) {
        awmdemo = 0;
        return;
    }
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
    if (this.sm != n$ && this.pm.ss && ab$)
        xxxx = this.sm;
    else
        xxxx = n$;
    this.shst(1);
    status = this.sbt;
    if (this.sm != n$)
        if (!this.sm.swn) {
            clearTimeout(this.sm.hsid);
            clearTimeout(this.ps.ssid);
            this.sm.mio = 0;
            if (this.sm.cd)
                this.ps.ssid = (awmSubmenusFrame == '') ? setTimeout("awmm[" + this.pm.ind + "].cn[" + this.sm.ind + "].show(1);", this.sm.grShowDelay) : setTimeout("parent." + awmSubmenusFrame + ".awm" + this.pm.nm + "_sub_" + (this.ind + 1) + ".show(1)", this.sm.grShowDelay);
        }
    if (this.jc[1] != n$ && !this.noLayer)
        eval(this.jc[1]);
}
function awmoimot() {
    if (this.sm == n$ || (this.sm != n$ && this.sm.cd)) {
        if (this.pm.selectedItem < 1) {
            this.shst((this.hFs) ? this.pm.aIH : 0);
        } else {
            if (this.ps.ind == 0 && this.ind == this.pm.selectedItem - ((this.ps.it[0].iHF == 2) ? 1 : 0)) {
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
    status = awmdst;
    if (this.jc[0] != n$ && !this.noLayer)
        eval(this.jc[0]);
}
function awmoimd() {
    this.shst(2);
    if (this.iHF == 1) {
        this.pm.mio = 0;
        awmctm = this.ps;
        this.pm.cm(0);
        this.pm.mio = 1;
        awmmox = event.clientX - oL(awmctm.layer);
        awmmoy = event.clientY - oT(awmctm.layer);
        awmml = oL(awmctm.layer) - awmctm.layer.style.pixelLeft;
        awmmt = oT(awmctm.layer) - awmctm.layer.style.pixelTop;
        return false;
    } else {
        awmdemo = 1;
        if (this.sm != n$)
            if (this.sm.swn) {
                clearTimeout(this.sm.hsid);
                this.ps.hdt();
                this.sm.show(1);
            }
        if (this.noLayer)
            return;
        if (this.jc[2] != n$)
            eval(this.jc[2]);
        if (this.url != n$) {
            if (this.tf == n$)
                window.location = this.url;
            else if (this.tf == "new") {
                return;
            } else if (this.tf == "top")
                window.top.location = this.url;
            else
                eval("parent." + this.tf + ".location=this.url");
        }
    }
}
function awmoimu() {
    if (awmctm != n$) {
        awmctm.pm.rep = 1;
        awmctm = n$;
    }
    this.shst(1);
    if (this.sm == n$) {
        this.shst(0);
        awmdemo = 0;
        this.pm.cm(1);
    }
}
function awmoimm() {
    var t = this.ps, oH2 = oH(t.layer) - (t.cs.bWt + t.cs.bWb);
    if (t.mScr != 0 && t.ct == 0 && t.mScr2) {
        if (t.layer.scrollHeight > oH2) {
            var x$$ = (t.layer.scrollHeight - oH2) / (0.74 * oH2);
            t.layer.scrollTop = Mr((event.clientY + vt - oT(t.layer) - t.cs.bWt - 0.13 * oH2) * x$$);
        }
    }
}
function awmohmm() {
    if (awmctm != n$) {
        awmctm.pm.rep = 1;
        awmctm.left = awmctm.layer.style.pixelLeft = event.clientX - awmmox;
        awmctm.top = awmctm.layer.style.pixelTop = event.clientY - awmmoy;
        return false;
    }
}
function awmpc(flg) {
    if (!this.ft)
        return;
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
            x += this.pm.offX2 + gLT(tmpEl)[0];
            y += this.pm.offY2 + gLT(tmpEl)[1];
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
            x += this.cX + ((crn == 0 || crn == 4 || crn == 3) ? (me.dx) : ((crn == 1 || crn == 6 || crn == 2) ? vr - vl - oW(this.layer) - me.dx : Mr((vr - vl - scW - oW(this.layer)) / 2) + me.dx));
            y += (crn == 0 || crn == 5 || crn == 1) ? (me.dy) : ((crn == 3 || crn == 7 || crn == 2) ? vb - vt - oH(this.layer) - me.dy : Mr((vb - vt - oH(this.layer)) / 2) + me.dy);
        }
        if ((this.left != x + awmlssx || this.top != y + awmlssy) && !this.pm.rep && this.cd == 0) {
            x += (this.pm.dft == 1 || this.pm.dft == 3 || this.pm.dft == 4 || this.pm.dft == 6) ? vl : 0;
            y += (this.pm.dft == 1 || this.pm.dft == 2 || this.pm.dft == 4 || this.pm.dft == 5) ? vt : 0;
            this.pm.y = y;
            if (this.layer) {
                this.layer.style.pixelLeft = this.left = x;
                if (this.pm.dft < 7 || typeof (this.top) == $un)
                    this.layer.style.pixelTop = this.top = y;
            }
        }
    } else {
        if (flg)
            return;
        if (!this.pi.ps)
            return;
        var psl = this.pi.ps.layer;
        var pil = this.pi.layer[0];
        var parentBorder = this.pi.ps.cs;
        var pBl = parentBorder.bWl, pBr = parentBorder.bWr, pBt = parentBorder.bWt, pBb = parentBorder.bWb;
        this.lod = this.od;
        if (this.lod == 0) {
            if (this.pi.ps.ct == 0) {
                if (this.pm.rtls)
                    this.lod = ((oL(psl) - this.swr - this.layer.style.pixelWidth > vl) ? 2 : 1);
                else
                    this.lod = ((oL(psl) + oW(psl) + this.swr + this.layer.style.pixelWidth > vr) && (oL(psl) - this.swr - this.layer.style.pixelWidth > vl)) ? 2 : 1;
            } else {
                this.lod = ((oT(psl) + oH(psl) + this.swr + this.layer.style.pixelHeight > vb) && (oT(psl) - this.swr - this.layer.style.pixelHeight > vl)) ? 2 : 1;
            }
        }
        if (this.pi.ps.ct == 0) {
            this.left = this.layer.style.pixelLeft = (this.lod == 1) ? ((this.pm.sFO > -9000 && this.ind == 0) ? vl : oL(psl) + this.pi.left + this.pi.width + pBl + pBr) + this.swr : oL(psl) - oW(this.layer) - this.swr;
            if (this.pm.sFO > -9000 && this.ind == 0 && ((this.pm.rtls && this.pm.rtlf != 2) || this.pm.rtlf == 1)) {
                this.left = this.layer.style.pixelLeft = window.innerWidth - oW(this.layer) - this.swr;
            }
            this.top = ((this.sa == 0) ? oT(psl) + oT(pil) - psl.scrollTop : ((this.sa == 1) ? oT(psl) : ((this.sa == 2) ? oT(psl) + oH(psl) - oH(this.layer) : oT(psl) + (oH(psl) - oH(this.layer)) / 2)));
            this.layer.style.pixelTop = this.top += ((this.pm.sFO > -9000 && this.ind == 0) ? this.pm.sFO + vt - parent.frames[this.pi.pm.awmParentFrameName].pageYOffset : 0) + this.alO;
        } else {
            this.left = (this.sa == 0) ? (oL(psl) + oL(pil) + ((this.pm.rtls) ? (oW(pil) - oW(this.layer)) : 0)) : ((this.sa == 1) ? oL(psl) : ((this.sa == 2) ? oL(psl) + oW(psl) - oW(this.layer) : oL(psl) + (oW(psl) - oW(this.layer)) / 2));
            this.layer.style.pixelLeft = this.left += ((this.pm.sFO > -9000 && this.ind == 0) ? this.pm.sFO - this.pi.ps.dox + vl : 0) + this.alO;
            if (this.left + oW(this.layer) > vr)
                this.layer.style.pixelLeft = this.left = vr - oW(this.layer);
            this.top = this.layer.style.pixelTop = (this.lod == 1) ? ((this.pm.sFO > -9000 && this.ind == 0) ? vt : oT(psl) + this.pi.top + this.pi.height + pBt + pBb) + this.swr : oT(psl) - oH(this.layer) - this.swr;
        }
        if (this.ct == 2)
            this.layer.style.pixelLeft = this.left = this.cX;
        if (this.mScr == -1) {
            if (this.layer.scrollHeight > (vb - vt - vSE() * scW)) {
                aMove(this.layer, n$, n$, this.width + ((this.mScr2 == 2) ? 0 : scW), vb - vt - vSE() * scW);
                this.layer.style.overflow = (this.mScr2 == 2) ? "hidden" : "auto";
            } else {
                aMove(this.layer, n$, n$, this.width, this.height);
                this.layer.style.overflow = "visible";
            }
            this.layer.style.pixelHeight += this.layer.style.pixelHeight - oH(this.layer);
            this.layer.style.pixelWidth += this.layer.style.pixelWidth - oW(this.layer);
        }
        if (this.mScr != 0)
            this.layer.scrollTop = 0;
        if (this.top + oH(this.layer) > vb)
            this.layer.style.pixelTop = this.top = vb - oH(this.layer);
        if (this.top < vt)
            this.layer.style.pixelTop = this.top = vt;
    }
}
function awmu(fold) {
    var t = this, layer = t.layer, w1 = oW(layer), h1 = oH(layer);
    if (fold) {
        var shw = t.shwd;
        var awmud = t.awmUnfoldDirectionD;
        if (t.awmuc < 0) {
            layer.style.pixelLeft = -3000;
            layer.style.pixelTop = -3000;
            layer.style.clip = 'rect(-3000px,3000px,3000px,-3000px)';
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
            layer.style.clip = 'rect(-3000px,3000px,3000px,-3000px)';
            t.layer3.style.visibility = "hidden";
            clearInterval(t.uid);
            t.awmun = 0;
            return;
        }
    }
    switch (awmud) {
        case 1:
            if (shw == 1) {
                layer.style.pixelLeft = t.left - w1 * (10 - t.awmuc) / 10;
                layer.style.clip = "rect(0," + w1 + "," + h1 + "," + Mr(w1 * (10 - t.awmuc) / 10) + ")";
            } else
                layer.style.clip = "rect(0," + Mr(w1 * t.awmuc / 10) + "," + h1 + ",0)";
            break;
        case 2:
            if (shw == 1) {
                layer.style.pixelLeft = t.left + w1 * (10 - t.awmuc) / 10;
                layer.style.clip = "rect(0," + Mr(w1 * t.awmuc / 10) + "," + h1 + ",0)";
            } else
                layer.style.clip = "rect(0," + w1 + "," + h1 + "," + w1 * (10 - t.awmuc) / 10 + ")";
            break;
        case 3:
            if (shw == 1) {
                layer.style.pixelTop = t.top - h1 * (10 - t.awmuc) / 10;
                layer.style.clip = "rect(" + Mr(h1 * (10 - t.awmuc) / 10) + "," + w1 + "," + h1 + ",0)";
            } else
                layer.style.clip = "rect(0," + w1 + "," + Mr(h1 * t.awmuc / 10) + ",0)";
            break;
        case 4:
            if (shw == 1) {
                layer.style.pixelTop = t.top + h1 * (10 - t.awmuc) / 10;
                layer.style.clip = "rect(0," + w1 + "," + Mr(h1 * t.awmuc / 10) + ",0)";
            } else
                layer.style.clip = "rect(" + Mr(h1 * (10 - t.awmuc) / 10) + "," + w1 + "," + h1 + ",0)";
            break;
        case 5:
            if (shw == 1) {
                aMove(layer, (t.left - w1 * (10 - t.awmuc) / 10), (t.top - h1 * (10 - t.awmuc) / 10));
                layer.style.clip = "rect(" + Mr(h1 * (10 - t.awmuc) / 10) + "," + w1 + "," + h1 + "," + Mr(w1 * (10 - t.awmuc) / 10) + ")";
            } else
                layer.style.clip = "rect(0," + Mr(w1 * t.awmuc / 10) + "," + Mr(h1 * t.awmuc / 10) + ",0)";
            break;
        case 6:
            if (shw == 1) {
                aMove(layer, (t.left - w1 * (10 - t.awmuc) / 10), (t.top + h1 * (10 - t.awmuc) / 10));
                layer.style.clip = "rect(0," + w1 + "," + Mr(h1 * t.awmuc / 10) + "," + Mr(w1 * (10 - t.awmuc) / 10) + ")";
            } else
                layer.style.clip = "rect(" + Mr(h1 * (10 - t.awmuc) / 10) + "," + Mr(w1 * t.awmuc / 10) + "," + h1 + ",0)";
            break;
        case 7:
            if (shw == 1) {
                aMove(layer, (t.left + w1 * (10 - t.awmuc) / 10), (t.top - h1 * (10 - t.awmuc) / 10));
                layer.style.clip = "rect(" + Mr(h1 * (10 - t.awmuc) / 10) + "," + Mr(w1 * t.awmuc / 10) + "," + h1 + ",0)";
            } else
                layer.style.clip = "rect(0," + w1 + "," + Mr(h1 * t.awmuc / 10) + "," + w1 * (10 - t.awmuc) / 10 + ")";
            break;
        case 8:
            if (shw == 1) {
                aMove(layer, (t.left + w1 * (10 - t.awmuc) / 10), (t.top + h1 * (10 - t.awmuc) / 10));
                layer.style.clip = "rect(0," + Mr(w1 * t.awmuc / 10) + "," + Mr(h1 * t.awmuc / 10) + ",0)";
            } else
                layer.style.clip = "rect(" + Mr(h1 * (10 - t.awmuc) / 10) + "," + w1 + "," + h1 + "," + w1 * (10 - t.awmuc) / 10 + ")";
            break;
        case 9:
            if (shw == 1) {
                aMove(layer, (t.left + w1 * (10 - t.awmuc) / 20), (t.top + h1 * (10 - t.awmuc) / 20));
                layer.style.clip = "rect(0px," + Mr(w1 * t.awmuc / 10) + "px," + Mr(h1 * t.awmuc / 10) + "px,0px)";
            } else
                layer.style.clip = "rect(" + Mr(h1 * (10 - t.awmuc) / 20) + "px," + ((w1 / 2) * (1 + t.awmuc / 10)) + "px," + ((h1 / 2) * (1 + t.awmuc / 10)) + "px," + w1 * (10 - t.awmuc) / 20 + "px)";
            break;
        case 10:
            t.layer3.style.visibility = "visible";
            if (fold)
                layer.style.left = layer.style.top = "-3000px";
            aMove(t.layer3, t.left + w1 * (10 - t.awmuc) / 20, t.top + h1 * (10 - t.awmuc) / 20, w1 * (t.awmuc / 10), h1 * t.awmuc / 10);
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
        }
        awmLH = awmLSH = -10;
    }
}
function awmwu() {
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
function awmDrift2() {
    if (window.outerWidth != awmliw || window.outerHeight != awmlih) {
        awmliw = window.outerWidth;
        awmlih = window.outerHeight;
        awmwr();
    }
}
function awmDS() {
    var clientX = window.innerWidth;
    var clientY = window.innerHeight;
    var sx = 10;
    var sy = 10;
    var dd = 5;
    var snx, sny;
    if (vl != awmlssx || vt != awmlssy || (vb - vt) != awmLSH) {
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
                    crm.cn[0].left = crm.cn[0].layer.style.pixelLeft += snx * sx;
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
                    crm.cn[0].top = crm.cn[0].layer.style.pixelTop += sny * sy;
                    if (awmSubmenusFrame != '' && crm.cn[0].ct == 0)
                        crm.cn[0].doy = vt;
                }
                if (crm.dft == 8 && (vt != awmlssy || (vb - vt) != awmLSH)) {
                    crm.mio = 0;
                    crm.cm(1);
                    sny = Ma(vt - awmlssy) / (vt - awmlssy);
                    if ((Mr(Ma(vt - awmlssy) / dd)) >= sy)
                        sy = Mr(Ma(vt - awmlssy) / dd);
                    if (Ma(vt - awmlssy) < sy)
                        sy = Ma(vt - awmlssy);
                    if (crm.cn[0].layer) {
                        var x = gX(crm);
                        var tmp = ((vt >= x[0] && vt <= x[1]) ? awmlssy : ((vt < x[0]) ? x[0] : x[1]));
                        crm.cn[0].top = crm.cn[0].layer.style.pixelTop = tmp + x[2];
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
        if (vl != awmlssx && crm.dft > 3)
            awmlssx += snx * sx;
        if (vt != awmlssy && crm.dft > 3)
            awmlssy += sny * sy;
        if (awmLSH != vb - vt)
            awmLSH = vb - vt;
    }
}
function awmd(awmlsx, awmlsy) {
    if (vl != awmlsx || vt != awmlsy || (vb - vt) != awmLH) {
        for (var mno = 0; mno < awmm.length; mno++) {
            var crm = awmm[mno];
            if (crm.cn[0].ft && crm.cll == 0) {
                if (crm.dft) {
                    crm.mio = 0;
                    crm.cm(1);
                }
                if (crm.dft == 1 || crm.dft == 3) {
                    crm.cn[0].left = crm.cn[0].layer.style.pixelLeft += vl - awmlsx;
                    if (awmSubmenusFrame != '' && crm.cn[0].ct > 0)
                        crm.cn[0].dox = vl;
                }
                if (crm.dft == 1 || crm.dft == 2) {
                    crm.cn[0].top = crm.cn[0].layer.style.pixelTop += vt - awmlsy;
                    if (awmSubmenusFrame != '' && crm.cn[0].ct == 0)
                        crm.cn[0].doy = vt;
                }
                if (crm.dft == 7) {
                    if (crm.cn[0].layer) {
                        var x = gX(crm);
                        tmp = ((vt >= x[0] && vt <= x[1]) ? vt : ((vt < x[0]) ? x[0] : x[1]));
                        crm.cn[0].top = crm.cn[0].layer.style.pixelTop = tmp + x[2];
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
    awmDS();
    clearTimeout(awmdid);
    awmdid = setTimeout("awmd(" + awmlsx + "," + awmlsy + ");", 25);
    for (var mno = 0; mno < awmm.length; mno++) {
        if (awmm[mno].cll == 0)
            awmm[mno].cn[0].pc(1);
    }
}
function aCo() {
    vl = window.pageXOffset;
    vt = window.pageYOffset;
    vr = vl + window.innerWidth;
    vb = vt + window.innerHeight;
    viewHeight = document.body.scrollHeight;
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
function awmdb(mi) {
    if (awmm[mi].awmD) {
        for (var i = 0; i < awmImagesColl.length; i = i + 3)
            if (awmImagesColl[i + 1] == 0 || awmImagesColl[i + 2] == 0) {
                setTimeout("awmdb(" + mi + ")", 100);
                return;
            }
        rer(mi);
    }
    if (!awmm[mi].cll) {
        if ((awmm[mi].elemRel == 0 || gTE(mi)) && (mpi || aLf())) {
            if (awmm[mi].dft < 7)
                awmm[mi].cn[0].show(1);
            else {
                awmm[mi].cn[0].cd = 0;
                awmm[mi].cn[0].pc();
                awmm[mi].cn[0].cd = 1;
                awmLSH = awmLH = -10;
            }
        } else {
            setTimeout("awmdb(" + mi + ")", 100);
        }
    }
}
function awmbmm(noarrange) {
    if (typeof (awmTarget) != $un && this.ind > 0)
        return;
    if (typeof (aFC$) == $un)
        aFC$ = new Array();
    aFC$[this.ind] = aFC;
    eval(aue(dA));
    aLh2();
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
    status = "." + (this.ind + 1);
    this.ght();
    this.whtd();
    clearInterval(aCI);
    aCI = setInterval("aCo()", 25);
    for (var cno = 0; cno < this.cn.length; cno++)
        this.cn[cno].fe();
    if (arguments.length == 0) {
        var tmpcont = dg(awmm[0].cn[0].it[awmm[0].cn[0].it.length - 1].id + "_9_0");
        while (typeof (tmpcont) != "object")
            var tmpcont = dg(awmm[0].cn[0].it[awmm[0].cn[0].it.length - 1].id + "_9_0");
        for (var mno = 0; mno < awmm.length; mno++) {
            for (var cno = 0; cno < awmm[mno].cn.length; cno++) {
                awmm[mno].cn[cno].arr();
                if (!awmm[mno].cll && awmm[mno].cn[cno].ind == 0) {
                    var awmlsx = window.pageXOffset, awmlsy = window.pageYOffset;
                    awmdb(mno);
                }
            }
        }
    }
    status = awmdst;
    clearTimeout(awmdid);
    awmdid = setTimeout("awmd(" + awmlsx + "," + awmlsy + ");", 100);
    awmsoo = awmso + 1;
}
function awmHideMenu(mNm) {
    var ml = awmm;
    if (ml) {
        var i = 0;
        while (i < ml.length) {
            if (ml[i].nm == mNm || typeof (mNm) == $un) {
                ml[i].cm(1);
                ml[i].cn[0].show(0);
            }
            i++;
        }
        ml = n$;
    }
}
function aMove(o1, l1, t1, w1, h1) {
    var o2 = o1.style;
    if (l1 != n$)
        o2.pixelLeft = l1;
    if (t1 != n$)
        o2.pixelTop = t1;
    if (w1 != n$)
        o2.pixelWidth = w1;
    if (h1 != n$)
        o2.pixelHeight = h1;
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
function Ma(o1) {
    return Math.abs(o1);
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
        setTimeout("document.onmousedown=awmodmd", 0);
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
                        tmp.fe();
                        tmp.arr();
                        tmp.show(1);
                        setTimeout("document.onmousedown=awmodmd", 0);
                    }
                    return;
                }
                x = gLT(imgs)[0];
                y = gLT(imgs)[1];
                tmp.cd = 0;
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
                y = Math.max(y, vt);
                x = Math.max(x, vl);
                tmp.show(1, x, y);
                setTimeout("document.onmousedown=awmodmd", 0);
                return;
            }
        }
    }
}
function rer(mno) {
    for (var cno = 0; cno < awmm[mno].cn.length; cno++)
        awmm[mno].cn[cno].arr();
    awmm[mno].awmD = 0;
}/*6*/