<?php
require_once('../../scripts/init.php');

$_access = _xvar_arr_sub($_SESSION, array('accesskeys', 'Operations'));
$access = _xvar_arr_sub($_access, array('Services'));
vetAccess('Operations', 'Services', 'Print');

qryfind("srv");
preOrd("srv", array('', 'ProdCode', 'ProdName', 'catname', 'InUse'));

$From = "FROM `{$_SESSION['DBCoy']}`.items 
        INNER JOIN `{$_SESSION['DBCoy']}`.items_srv   ON items.ItemID=items_srv.ServiceID
    LEFT JOIN `{$_SESSION['DBCoy']}`.`classifications` ON `items`.Classification = classifications.catID
    {$qryvals}";

$sql = "SELECT `ServiceID`, `ProdCode`, `ProdName`, InUse, catname {$From}{$orderval}";

$TServices = getDBData($dbh, $sql);
$currentPage = 'printall.php';
doExcel($TServices);

?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Untitled Document</title>
<link href="/css/text.css" rel="stylesheet" type="text/css" />
<script language="JavaScript1.2" src="/scripts/js/basicroutines.js" type="text/javascript"></script>
<script type="text/javascript" src="/lib/jquery/jquery-1.4.2.min.js"></script>
<script type="text/javascript" src="/lib/jquery/jquery-1.4.2.min.js"></script>
<!--[if lte IE 6]><script type="text/javascript" src="/scripts/supersleight-min.js"></script><![endif]-->
</head>
<body>
<table border="0" cellpadding="0" cellspacing="0">
  <tr>
    <td><table border="0" cellspacing="2" cellpadding="2">
        <tr>
          <td><img src="<?php echo COYPIX_DIR, $_SESSION['coyid']."/xxpix.jpg" ?>" /></td>
          <td><span class="coytxt"><?php echo $_SESSION['COY']['CoyName'] ?></span></td>
        </tr>
    </table></td>
  </tr>
  <tr>
    <td><table width="100%" border="0" cellspacing="0" cellpadding="0">
        <tr>
          <td valign="top"><table width="100%" border="0" cellspacing="4" cellpadding="4">
              <tr>
                <td style="height:30px; min-width:500px; background-image:url(/images/lblservices.png); background-repeat:no-repeat">&nbsp;</td>
              </tr>
              <tr>
                <td class="h1" height="5px"></td>
              </tr>
              </table>
<table width="100%" border="0" cellspacing="4" cellpadding="4">
              <tr>
                <td><table width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="border:solid 2px #666666" bgcolor="#F9F7E6"><table width="100%" border="0" cellpadding="0" cellspacing="0">
                      <tr>
                        <td align="center" class="boldwhite1">
                          <table width="100%" border="0" cellpadding="0" cellspacing="0">
                            <tr>
                              <td align="center" valign="top" bgcolor="#FFFBF0"><table width="100%" cellpadding="4" cellspacing="1" style="border: 2px #CCCCCC">
                                <tr align="center" bgcolor="#666666" class="boldwhite1">
                                  <td nowrap="nowrap"><?php echo setOrderTitle('Code', $currentPage, 1, $ord, $asc); ?></td>
                                  <td nowrap="nowrap"><?php echo setOrderTitle('Name', $currentPage, 2, $ord, $asc); ?></td>
                                  <td nowrap="nowrap"><?php echo setOrderTitle('Category', $currentPage, 3, $ord, $asc); ?></td>
                                  <td nowrap="nowrap"><?php echo setOrderTitle('In Use', $currentPage, 10, $ord, $asc); ?></td>
                                </tr>
                                <?php $j=1;
	   foreach ($TServices as $row_TServices) {
	  $k=$j%2;
	  $rowdefcolor=($k==1) ? "#E5E5E5" : "#D5D5D5"; 
	  ?>
                                <tr bgcolor="<?php echo $rowdefcolor ?>" class="black-normal" 
onmouseover="setPointer(this, <?php echo $j ?>, 'over', '<?php echo $rowdefcolor ?>', '#CCFFCC', '#FFCC99');" onmouseout="setPointer(this, <?php echo $j ?>, 'out', '<?php echo $rowdefcolor ?>', '#CCFFCC', '#FFCC99');" onclick="location.href='view.php?id=<?php echo $row_TServices['ServiceID']; ?>'">
                                  <td align="center" bgcolor="<?php echo $rowdefcolor ?>" class="black-normal"><b><?php echo $row_TServices['ProdCode'] ?></b></td>
                                  <td align="center" nowrap="nowrap" bgcolor="<?php echo $rowdefcolor ?>" class="black-normal"><b><?php echo $row_TServices['ProdName'] ?></b></td>
                                  <td align="center" bgcolor="<?php echo $rowdefcolor ?>" class="black-normal"><b><?php echo $row_TServices['catname'] ?></b></td>
                                  <td align="center" bgcolor="<?php echo $rowdefcolor ?>" class="black-normal"><input type="checkbox" name="InUse" value=""  <?php echo $row_TServices['InUse']==1? "checked=\"checked\"": ""; ?> disabled="disabled" /></td>
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
                <td>&nbsp;</td>
              </tr>

            </table></td>
        </tr>
        <tr>
          <td align="center"><span class="blacktxt"><?php echo $_SESSION['COY']['Address'], ', ', $_SESSION['COY']['City'], ' ', $_SESSION['COY']['State']   ?><br /><?php echo $_SESSION['COY']['Web'], ' ', $_SESSION['COY']['Email'] ?>
          </span></td>
        </tr>
      </table></td>
  </tr>
</table><script type="text/javascript">
$(document).ready(function(){
	print();
});
</script>
</body>
</html>