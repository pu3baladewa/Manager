<?php
require_once("$vpth/scripts/init.php");

$_access = _xvar_arr_sub($_SESSION, array('accesskeys', $vmod));
$access = _xvar_arr_sub($_access, array($vkey));
vetAccess($vmod, $vkey, 'View');

//$_bottons array(new, edit, delete, print, Nav, find)
$_bottons = array($access['Add'], 0, 0, 0, 1, 0, 0);
//Button order: 0 first | 1 previous | 2 next | 3 last | 4 new | 5 edit | 6 save | 7 delete | 8 back | 9 refresh | 10 find | 11 print
$buttons_links = array("", "", "", "", "add.php", "", "", "", "", "", "", "", "");
$rec_status = 4;

preOrd("cat$vcat", array('Category', 'code', 'Category', $parname, 'InUse'));

$fld = isset($vPar) ? ", `tab`.$parname AS parname" : "";
$join = isset($vPar) ? "LEFT JOIN `{$_SESSION['DBCoy']}`.`$partab` tab ON `status`.`par`=`tab`.`$parid`" : "";
$From = " FROM `{$_SESSION['DBCoy']}`.`status` $join WHERE cattype='$vcat'";

$sql = "SELECT `status`.CategoryID, Category, code, `status`.InUse $fld {$From}{$orderval}";

$currentPage = 'index.php';
$maxRows_TCat = 30;

$TabArray = 'TCat';
require_once (ROOT . '/scripts/fetchdata.php');
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Untitled Document</title>
<script language="JavaScript1.2" src="/scripts/js/basicroutines.js" type="text/javascript"></script>
<script type="text/javascript" src="/lib/jquery/jquery-1.4.2.min.js"></script>
<link href="/css/text.css" rel="stylesheet" type="text/css" />
</head>

<body>
<table width="100%" border="0" align="center" cellpadding="0" cellspacing="0">
  <tr>
    <td valign="top"><table width="100%" border="0" cellspacing="4" cellpadding="4">
        <tr>
          <td><table width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td style="border:solid 2px #666666" bgcolor="#F9F7E6"><table width="100%" border="0" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center" class="boldwhite1"><table width="100%" border="0" cellpadding="0" cellspacing="0">
                    <tr>
                      <td align="center" valign="top" bgcolor="#FFFBF0"><table width="100%" cellpadding="1" cellspacing="1" style="border: 2px #CCCCCC">
                        <tr align="center" bgcolor="#666666" class="boldwhite1">
                          <?php if (isset($vCode)) { ?>
                          <td nowrap="nowrap"><?php echo setOrderTitle('Code', $currentPage, 1, $ord, $asc); ?></td>
                          <?php } ?>
                          <td nowrap="nowrap"><?php echo setOrderTitle('Name', $currentPage, 2, $ord, $asc); ?></td>
                          <?php if (isset($vPar)) { ?>
                          <td nowrap="nowrap"><?php echo setOrderTitle($vPar, $currentPage, 3, $ord, $asc); ?></td>
                          <?php } ?>
                          <td nowrap="nowrap"><?php echo setOrderTitle('In Use', $currentPage, 4, $ord, $asc); ?></td>
                          </tr>
                        <?php $j=1;
	   foreach ($TCat as $row_TCat) {
	  $k=$j%2;
	  $rowdefcolor=($k==1) ? "#E5E5E5" : "#D5D5D5"; 
	  ?>
                        <tr bgcolor="<?php echo $rowdefcolor ?>" class="black-normal" 
onmouseover="setPointer(this, <?php echo $j ?>, 'over', '<?php echo $rowdefcolor ?>', '#CCFFCC', '#FFCC99');" onmouseout="setPointer(this, <?php echo $j ?>, 'out', '<?php echo $rowdefcolor ?>', '#CCFFCC', '#FFCC99');" onclick="location.href='view.php?id=<?php echo $row_TCat['CategoryID']; ?>'">
                          <?php if (isset($vCode)) { ?>
                          <td align="center" bgcolor="<?php echo $rowdefcolor ?>" class="black-normal"><b><?php echo $row_TCat['code'] ?></b></td>
                          <?php } ?>
                          <td align="center" nowrap="nowrap" bgcolor="<?php echo $rowdefcolor ?>" class="black-normal"><b><?php echo $row_TCat['Category']; ?></b></td>
                          <?php if (isset($vPar)) { ?>
                          <td align="center" bgcolor="<?php echo $rowdefcolor ?>" class="black-normal"><b><?php echo $row_TCat['parname'] ?></b></td>
                          <?php } ?>
                          <td align="center" bgcolor="<?php echo $rowdefcolor ?>" class="black-normal"><input type="checkbox"<?php if ($row_TCat['InUse'] == 1) {
                echo " checked=\"checked\"";
            } ?> disabled="disabled" /></td>
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
          <td><?php include("$vpth/scripts/buttonset.php"); ?></td>
        </tr>
      </table>
      <table width="100%" border="0" cellspacing="4" cellpadding="4">
    </table></td>
  </tr>
</table>
</body>
</html>