<?php require_once('../../../scripts/init.php');





$sql = "SELECT * FROM `{$_SESSION['DBCoy']}`.`status` WHERE CategoryID={$_SESSION['stud_status']}";
$row_TCat = getDBDataRow($dbh, $sql);

?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Untitled Document</title>
<link href="/css/text.css" rel="stylesheet" type="text/css" />
</head>

<body>
<table border="0" align="center" cellpadding="0" cellspacing="0">
  <tr>
    <td class="frm_tl"></td>
    <td class="frm_tp"></td>
    <td class="frm_tr"></td>
  </tr>
  <tr>
    <td class="frm_lf"></td>
    <td valign="top" nowrap="nowrap" bgcolor="#CFCFCF">
        <form id="Frm" name="Frm" method="post" action="">
        <table border="0" cellspacing="4" cellpadding="4">
      <tr>
        <td colspan="2" align="left" class="h1"><b>Student Status</b></td>
      </tr>
      <tr>
        <td></td>
        <td align="center"><?php echo catch_error($errors) ?></td>
      </tr>
      <tr>
        <td class="titles">Name:</td>
        <td align="left"><?php echo $row_TCat['Category'] ?></td>
      </tr>
      <tr>
        <td class="titles">Description:</td>
        <td align="left"><textarea name="Description" rows="4" readonly="readonly" id="Description" style="width:300px"><?php echo $row_TCat['Description'] ?></textarea></td>
      </tr>
      <tr>
        <td class="titles">&nbsp;</td>
        <td align="center"><table border="0" cellspacing="4" cellpadding="4">
          <tr align="center">
            <td><a href="index.php"><img src="/images/but_lst.png" width="60" height="20" border="0" /></a></td>
            <td><a class="boldwhite1" href="edit.php?id=$id"><img src="/images/but_edit.png" alt="Edit" width="60" height="20" border="0" /></a></td>
            <td><a class="boldwhite1" href="javascript: void(0)" onclick="if (confirm('Are you sure you want to delete this entry?')) document.location='del.php?id=$id'"><img src="/images/but_del.png" alt="Delete" width="60" height="20" border="0" /></a></td>
          </tr>
        </table></td>
      </tr>
    </table>
   	</form></td>
    <td background="/images/xbox_rt.png"></td>
  </tr>
  <tr>
    <td class="frm_bl"></td>
    <td class="frm_bt"></td>
    <td class="frm_br"></td>
  </tr>
</table>
</body>
</html>