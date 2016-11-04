<?php
require_once('../../../scripts/init.php');

$_access = _xvar_arr_sub($_SESSION, array('accesskeys', 'Academics'));
$access = $_access['Parents'];
vetAccess('Academics', 'Parents', 'View');

//$_bottons array(new, edit, delete, print, Nav, find)
$_bottons = array($access['Add'], 0, 0, $access['Print'], 1, 1);
//Button order: 0 first | 1 previous | 2 next | 3 last | 4 new | 5 edit | 6 save | 7 delete | 8 back | 9 refresh | 10 find | 11 print
$buttons_links = array("","","","","add.php","","","","","","find.php","printall.php","");
$rec_status = 4;

qryfind('parent', array('name'));
preOrd('parent', array('', 'VendorName', 'ReferredBy', 'FaxNumber', 'loc', 'sex', 'age'));

$From = "FROM `{$_SESSION['DBCoy']}`.`vendors` WHERE VendorType=6 {$qryvals}";

$sql = "SELECT `vendors`.`VendorID`, $vendor_sql, CONCAT(`City`, ' ', `StateOrProvince`) AS loc, 
    `ReferredBy`, `FaxNumber`, `sex`, `datehired`, TIMESTAMPDIFF(YEAR, `dateofbirth`, 
    CURDATE()) AS age, `InUse` {$From}{$orderval}";

$currentPage = 'index.php';
$maxRows_TParent = 10;

$TabArray = 'TParent';
require_once (ROOT.'/scripts/fetchdata.php');

?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Untitled Document</title>
<link href="/css/text.css" rel="stylesheet" type="text/css" />
<script type="text/javascript">var GB_ROOT_DIR = "http://<?php echo WEBSITE ?>/lib/greybox/";</script>
<script type="text/javascript" src="/lib/greybox/AJS.js"></script>
<script type="text/javascript" src="/lib/greybox/AJS_fx.js"></script>
<script type="text/javascript" src="/lib/greybox/gb_scripts.js"></script>
<link rel="stylesheet" type="text/css" href="/lib/greybox/gb_styles.css" />
<script language="JavaScript1.2" src="/scripts/js/basicroutines.js" type="text/javascript"></script>
<script type="text/javascript" src="/lib/jquery/jquery-1.4.2.min.js"></script>
<!--[if lte IE 6]><script type="text/javascript" src="/scripts/supersleight-min.js"></script><![endif]-->
</head>
<body>
<script type="text/javascript">var MenuLinkedBy="AllWebMenus [4]",awmMenuName="mnulft",awmBN="766";awmAltUrl="";</script>
<script charset="UTF-8" src="../menu.js" type="text/javascript"></script>
<script type="text/javascript">awmBuildMenu();</script>
<table border="0" cellpadding="0" cellspacing="0">
  <tr>
    <td height="10"></td>
  </tr>
  <tr>
    <td><table width="100%" border="0" cellspacing="0" cellpadding="0">
        <tr>
          <td width="240" valign="top"><img src="/images/parents.jpg" width="240" height="300" />
          <div id='mnulft' style="width:70%; height:200px; margin:30px"></div></td>
          <td valign="top"><table width="100%" border="0" cellspacing="4" cellpadding="4">
              <tr>
                <td style="height:30px; min-width:500px; background-image:url(/images/lblparents.png); background-repeat:no-repeat">&nbsp;</td>
              </tr>
              <tr>
                <td class="h1" height="5px"></td>
              </tr>
              <tr>
                <td><?php include('../../../scripts/buttonset.php')?></td>
              </tr>
            </table>
<table width="100%" border="0" cellspacing="4" cellpadding="4">
              <tr>
                <td class="h1">&nbsp;</td>
              </tr>
              <tr>
                <td><table width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="border:solid 2px #666666" bgcolor="#F9F7E6"><table width="100%" border="0" cellpadding="0" cellspacing="0">
                      <tr>
                        <td align="center" class="boldwhite1">
                          <table width="100%" border="0" cellpadding="0" cellspacing="0">
                            <tr>
                              <td align="center" valign="top" bgcolor="#FFFBF0">
                                <table width="100%" cellpadding="4" cellspacing="1" style="border: 2px #CCCCCC">
                                  <tr align="center" bgcolor="#666666" class="boldwhite1">
                                    <td nowrap="nowrap"><?php echo setOrderTitle('Name', $currentPage, 1, $ord, $asc); ?></td>
                                    <td nowrap="nowrap"><?php echo setOrderTitle('Job Title', $currentPage, 2, $ord, $asc); ?></td>
                                    <td nowrap="nowrap"><?php echo setOrderTitle('Company', $currentPage, 3, $ord, $asc); ?></td>
                                    <td nowrap="nowrap"><?php echo setOrderTitle('City', $currentPage, 4, $ord, $asc); ?></td>
                                    <td nowrap="nowrap"><?php echo setOrderTitle('Gender', $currentPage, 5, $ord, $asc); ?></td>
                                    <td nowrap="nowrap"><?php echo setOrderTitle('Age', $currentPage, 6, $ord, $asc); ?></td>
                                    </tr>
                                  <?php $j=1;
	   foreach ($TParent as $row_TParent) {
	  $k=$j%2;
	  $rowdefcolor=($k==1) ? "#E5E5E5" : "#D5D5D5"; 
	  ?>
                                  <tr bgcolor="<?php echo $rowdefcolor ?>" class="black-normal" 
onmouseover="setPointer(this, <?php echo $j ?>, 'over', '<?php echo $rowdefcolor ?>', '#CCFFCC', '#FFCC99');" onmouseout="setPointer(this, <?php echo $j ?>, 'out', '<?php echo $rowdefcolor ?>', '#CCFFCC', '#FFCC99');" onclick="location.href='view.php?id=<?php echo $row_TParent['VendorID']; ?>'">
                                    <td align="center" nowrap="nowrap" bgcolor="<?php echo $rowdefcolor ?>" class="black-normal"><b><?php echo $row_TParent['VendorName'] ?></b></td>
                                    <td align="center" nowrap="nowrap" bgcolor="<?php echo $rowdefcolor ?>" class="black-normal"><?php echo $row_TParent['ReferredBy'] ?></td>
                                    <td align="center" bgcolor="<?php echo $rowdefcolor ?>" class="black-normal"><b><?php echo $row_TParent['FaxNumber'] ?></b></td>
                                    <td align="center" bgcolor="<?php echo $rowdefcolor ?>" class="black-normal"><b><?php echo $row_TParent['loc'] ?></b></td>
                                    <td align="center" bgcolor="<?php echo $rowdefcolor ?>" class="black-normal"><b>
                                      <script language="JavaScript" type="text/javascript">
switch (<?php echo $row_TParent['sex']; ?>) {
case 1: document.write("Male"); break;
case 2: document.write("Female"); break;
}</script>
                                      </b></td>
                                    <td align="center" bgcolor="<?php echo $rowdefcolor ?>" class="black-normal"><b><?php echo $row_TParent['age'] ?></b></td>
                                    </tr>
                                  <?php $j++;} ?>
                                  </table></td>
                            </tr>

                          </table></td>
                      </tr>
                    </table></td>
                  </tr>
                </table></td>
              </tr>
              <tr>
                <td></td>
              </tr>
              <tr>
                <td><?php include('../../../scripts/buttonset.php'); ?></td>
              </tr>

            </table>
<table width="100%" border="0" cellspacing="4" cellpadding="4">

          </table></td>
        </tr>
        <tr>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
        </tr>
      </table></td>
  </tr>
</table>
</body>
</html>