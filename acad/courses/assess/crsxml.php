<?php

require_once("../../../scripts/init.php");

$ass = _xget("ass");
$url_var = _xget("id");
$url_var = $url_var == "" ? "1" : $url_var;
$keys = explode('#', $url_var);

if (count($keys) == 1) {
    $sql = "SELECT DISTINCT SUBSTRING_INDEX(category_id, '-', 2) AS par
            FROM `{$_SESSION['DBCoy']}`.`sch_programs`
            INNER JOIN `{$_SESSION['DBCoy']}`.`classifications` ON `sch_programs`.`department` = `classifications`.`catID`";
    $Tcat = getDBData($dbh, $sql);
    $expr = "";
    for ($i = 0; $i < count($Tcat); $i++) {
        $expr .= "|" . $Tcat[$i]['par'];
    }
    $expr = strlen($expr) == 0 ? "0" : substr($expr, 1);

    $sql = "SELECT `catID` AS id, 1 AS typ, category_id, `category_name`
        FROM `{$_SESSION['DBCoy']}`.`classifications`
        WHERE `category_id` REGEXP '^($expr)$'";
} elseif ($keys[2] == '1') {
    $sql = "SELECT `catID` AS id, 1 AS typ, category_id, `category_name`
        FROM `{$_SESSION['DBCoy']}`.`classifications`
        WHERE `parent_id` = '$keys[0]'
        UNION
        SELECT `prog_id` AS id, 2 AS typ, prog_code AS `category_id`, `prog_name` AS `category_name`
        FROM `{$_SESSION['DBCoy']}`.`sch_programs`
        WHERE `department` = $keys[1]";
} elseif ($keys[2] == '2') {
    $sql = "SELECT `class_id` AS id, 3 AS typ, `class_code` AS `category_id`, `class_name` AS `category_name`
        FROM `{$_SESSION['DBCoy']}`.`sch_class`
        WHERE `program` = $keys[1]";
} elseif ($ass != "cls" && $keys[2] == '3') {
    $sql = "SELECT `arm_id` AS id, 4 AS typ, arm_code AS `category_id`, `arm_name` AS `category_name`
        FROM `{$_SESSION['DBCoy']}`.`sch_arms`
        WHERE `class` = $keys[1] AND `active`=1";
} elseif ($keys[2] == '4' || $keys[2] == '3' && $ass == "cls") {
    if ($ass == "cls") {
        $fld_cls = "`class_id`";
        $join_str = "";
    } else {
        $fld_cls = "`arm_id`";
        $join_str = "INNER JOIN `{$_SESSION['DBCoy']}`.`sch_arms` ON `sch_class`.`class_id`=`sch_arms`.`class`";
    }
    $sql = "SELECT `term_id` AS id, 5 AS typ, $fld_cls AS `category_id`, `term_name` AS `category_name`
        FROM `{$_SESSION['DBCoy']}`.`sch_terms`
        INNER JOIN `{$_SESSION['DBCoy']}`.`sch_sessions` ON `sch_terms`.`session`=`sch_sessions`.`sess_id`
        INNER JOIN `{$_SESSION['DBCoy']}`.`sch_programs` ON `sch_sessions`.`scheme`=`sch_programs`.`scheme`
        INNER JOIN `{$_SESSION['DBCoy']}`.`sch_class` ON `sch_programs`.`prog_id`=`sch_class`.`program` $join_str
        WHERE `sch_sessions`.`active`=1 AND $fld_cls = $keys[1]";
} elseif ($keys[2] == '5') {
    $sql = "SELECT `courses` FROM `{$_SESSION['DBCoy']}`.`sch_electives` WHERE `elect_arm`=$keys[0] AND `elect_term`=$keys[1]";
    $row_TElectives = getDBDataRow($dbh, $sql);

    $crslst = str_replace("|", ",", $row_TElectives['courses']);
    $crslst = strlen($crslst) == 0 ? '0' : $crslst;
    $sql = "SELECT `course_id` AS id, 6 AS typ, `course_code` AS `category_id`, CONCAT(`course_name`, ' {', `course_code`, '}') AS `category_name`
        FROM `{$_SESSION['DBCoy']}`.`sch_courses`
        WHERE `course_id` IN ($crslst)";
}
$Tcat = getDBData($dbh, $sql);

header("Content-type:text/xml");
print("<?xml version='1.0' encoding='ISO-8859-15'?>");
print("<tree id='$url_var'
>");
foreach ($Tcat as $row_Tcat) {
    $catname = htmlspecialchars($row_Tcat["category_name"]);
    $cat_id = htmlspecialchars($row_Tcat["category_id"]);
    $typ = $ass=='cls' ? 5 : 6;
    $ch = $row_Tcat["typ"] == $typ ? '0' : '1';
    $img = $row_Tcat["typ"] == $typ ? ' im0="leaf3.gif"' : "";
    print('<item child="' . $ch . '"' . $img . ' id="' . $cat_id . '#' . $row_Tcat["id"] . '#' . $row_Tcat["typ"] . '" text="' . $catname . '"><userdata name="type">' . $row_Tcat["typ"] . '</userdata><userdata name="id">' . $row_Tcat["id"] . '</userdata><userdata name="code">' . $cat_id . '</userdata></item>');
}
print("</tree>");
?>