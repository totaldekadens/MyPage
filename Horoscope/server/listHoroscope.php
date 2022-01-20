<?php

    $getHoroscope = array(
        array(
            "startdate" => "0121",
            "enddate" => "0218",
            "name" => "Vattumannen",
            "image" => "aquarius.png",
            "date" => "21 januari - 18 februari"
        ),
        array(
            "startdate" => "0219",
            "enddate" => "0319",
            "name" => "Fiskarna",
            "image" => "pisces.png",
            "date" => "19 februari – 19 mars"
        ),
        array(
            "startdate" => "0320",
            "enddate" => "0419",
            "name" => "Väduren",
            "image" => "aries.png",
            "date" => "20 mars – 19 april"
        ),
        array(
            "startdate" => "0420",
            "enddate" => "0520",
            "name" => "Oxen",
            "image" => "taurus.png",
            "date" => "20 april – 20 maj"
        ),
        array(
            "startdate" => "0521",
            "enddate" => "0620",
            "name" => "Tvillingarna",
            "image" => "gemini.png",
            "date" => "21 maj – 20 juni"
        ),
        array(
            "startdate" => "0621",
            "enddate" => "0721",
            "name" => "Kräftan",
            "image" => "cancer.png",
            "date" => "21 juni – 21 juli"
        ),
        array(
            "startdate" => "0722",
            "enddate" => "0822",
            "name" => "Lejonet",
            "image" => "leo.png",
            "date" => "22 juli – 22 augusti"
        ),
        array(
            "startdate" => "0823",
            "enddate" => "0922",
            "name" => "Jungfrun",
            "image" => "virgo.png",
            "date" => "23 augusti – 22 september"
        ),
        array(
            "startdate" => "0923",
            "enddate" => "1022",
            "name" => "Vågen",
            "image" => "libra.png",
            "date" => "23 september – 22 oktober"
        ),
        array(
            "startdate" => "1023",
            "enddate" => "1121",
            "name" => "Skorpionen",
            "image" => "scorpio.png",
            "date" => "23 oktober – 21 november"
        ),
        array(
            "startdate" => "1122",
            "enddate" => "1221",
            "name" => "Skytten",
            "image" => "sagittarius.png",
            "date" => "22 november – 21 december"
        ),
        array(
            "startdate" => "1222",
            "enddate" => "1231",
            "name" => "Stenbocken",
            "image" => "capricorn.png",
            "date" => "22 december – 20 januari"
        ),
        array(
            "startdate" => "0101",
            "enddate" => "0120",
            "name" => "Stenbocken",
            "image" => "capricorn.png",
            "date" => "22 december – 20 januari"
        )
    );

function getOutput($inputDate, $getHoroscope){

    foreach ($getHoroscope as $starSign) {
   
        if($inputDate >= $starSign['startdate'] && $inputDate <= $starSign['enddate']) {
            
            return $starSign;
        };
    };   
};

?>
