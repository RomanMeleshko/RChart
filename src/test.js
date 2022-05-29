import $ from "jquery";
import "../scss/main.scss";
import "bootstrap/js/dist/util";

import Ghart from "./index.js";

$( document ).ready(function() {

     var arr_data = [{
        id: 1,
        summa: 30.67,
        info_kvartal: "20%"
    },
    {
        id: 2,
        summa: 99.67,
        info_kvartal: "90%"
    },
    {
        id: 2,
        summa: 556.67,
        info_kvartal: "10%"
    },
    {
        id: 4,
        summa: 14.03,
        info_kvartal: "30%"
    },
    {
        id: 5,
        summa: 954.00,
        info_kvartal: "60%"
    },
    {
        id: 6,
        summa: 112.43,
        info_kvartal: "40%"
    },
    {
        id: 7,
        summa: 0.43,
        info_kvartal: "70%"
    },


];



    var arr_data_2 = [{
             id: 1,
            summa: 30.67,
            info_kvartal: "10%"
        },
        {
            id: 2,
            summa: 99.67,
            info_kvartal: "20%"
        },
        {
            id: 2,
            summa: 556.67,
            info_kvartal: "30%"
        },


];

    var chart = new Ghart(".chart-container-clients", {
        data: arr_data_2
    });

    var chart = new Ghart(".chart-container", {
        data: arr_data
    });


});