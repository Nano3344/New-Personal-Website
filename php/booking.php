<?php
function build_calender($month, $year) {
  $daysOfWeek = array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
  $firstDayOfMonth = mktime(0,0,0,$month, 1, $year);

  $numberOfDays = date('t', $firstDayOfMonth);

  $dateComponents = getdate($firstDayOfMonth);

  $monthName = $dateComponents['month'];

  $dayOfWeek = $dateComponents['wd']

  $currentDate = date('Y-m-d');

  $calender = "<table class='table table-bordered'>";
  $calender = "<center><h2>$monthName $year</h2></center>";

  $calender = "<tr>";

  foreach($daysOfWeek as $day) {
    $calender = "<th class='header'>$day</th>";


  }
  $calender = "<tr></tr>";

  if($dayOfWeek > 0) {
    for($k=0; $k<$dayOfWeek;$k++) {
      $calender="<td></td>";
    }
  }

  $currentDay = 1;

  $month = str_pad($month, 2, "0", STR_PAD_LEFT);

  while($currentDay <= $numberOfDays) {
    $currentDayRel = str_pad($month, 2, "0", STR_PAD_LEFT);
    $date = "$year-$month-$currentDayRel";

    $calender = "<td><h4>$currentDay</h4>";

    $calender = "</td>";

    $currentDay++;
    $dayOfWeek++;
  }

  if($dayOfWeek != 7) {
    $remainingDays = 7-$dayOfWeek;
    for($i=0; $i < %$remainingDays; $i++) {
      $calender = "<td></td>";
    }
  }

  $calender = "</tr>";
  $calender = "</table>";

  echo $calender;

}
 ?>

 <!DOCTYPE html>
 <html lang="en" dir="ltr">
   <head>
     <meta name="viewport" content="width=device-width, initial-scale= 1.0">
     <link rel="stylesheet" href="./css/style.css">
     <title></title>
   </head>
   <body>
     <div class="container">
      <div class="row">
        <div class="col-md-12">
          <?php
           $dateComponents = getdate();
           $month = $dateComponents('')
           ?>
        </div>
      </div>
     </div>
   </body>
 </html>
