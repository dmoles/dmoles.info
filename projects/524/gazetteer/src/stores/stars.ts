import { Star } from "../types/Star"
import { defineStore } from "pinia"

const allStars: Array<Star> = [
  {
    name: "53 UMa",
    type: "F8.5:V+G2V",
    temp: 6800,
    rgb: "#f9f6ff",
    to_xi_uma: 0.000,
    to_sol: 8.834,
    x: -7.405,
    y: 1.366,
    z: 4.620
  },
  {
    name: "WISE J111838.70+312537.9",
    type: "T8.5",
    temp: 900,
    rgb: "#ff3800",
    to_xi_uma: 0.022,
    to_sol: 8.834,
    x: -7.416,
    y: 1.353,
    z: 4.606
  },
  {
    name: "53 UMa B",
    type: "G2V",
    temp: 5700,
    rgb: "#ffefe6",
    to_xi_uma: 0.099,
    to_sol: 8.735,
    x: -7.322,
    y: 1.351,
    z: 4.568
  },
  {
    name: "61 UMa",
    type: "G8V",
    temp: 5700,
    rgb: "#ffefe6",
    to_xi_uma: 1.153,
    to_sol: 9.576,
    x: -7.893,
    y: 0.654,
    z: 5.383
  },
  {
    name: "GJ 450",
    type: "M1.5V",
    temp: 3000,
    rgb: "#ffb46b",
    to_xi_uma: 1.203,
    to_sol: 8.765,
    x: -7.151,
    y: 0.277,
    z: 5.062
  },
  {
    name: "GJ 1138",
    type: "M5V",
    temp: 3000,
    rgb: "#ffb46b",
    to_xi_uma: 1.465,
    to_sol: 9.732,
    x: -7.549,
    y: 2.389,
    z: 5.658
  },
  {
    name: "Ross 905",
    type: "M3V",
    temp: 3000,
    rgb: "#ffb46b",
    to_xi_uma: 1.489,
    to_sol: 9.775,
    x: -8.706,
    y: 0.678,
    z: 4.393
  },
  {
    name: "Groombridge 1830",
    type: "K1V_Fe-1.5",
    temp: 4600,
    rgb: "#ffddbe",
    to_xi_uma: 1.522,
    to_sol: 9.172,
    x: -7.252,
    y: 0.222,
    z: 5.611
  },
  {
    name: "GJ 1134",
    type: "M4.0V",
    temp: 3000,
    rgb: "#ffb46b",
    to_xi_uma: 2.003,
    to_sol: 10.054,
    x: -7.503,
    y: 2.671,
    z: 6.136
  },
  {
    name: "Ross 104",
    type: "M4V",
    temp: 3000,
    rgb: "#ffb46b",
    to_xi_uma: 2.453,
    to_sol: 6.748,
    x: -6.008,
    y: 1.608,
    z: 2.618
  },
  {
    name: "2MASS J10475385+2124234",
    type: "T6.5",
    temp: 900,
    rgb: "#ff3800",
    to_xi_uma: 2.676,
    to_sol: 10.556,
    x: -9.346,
    y: 3.041,
    z: 3.853
  },
  {
    name: "8 CVn",
    type: "G0V",
    temp: 5700,
    rgb: "#ffefe6",
    to_xi_uma: 2.736,
    to_sol: 8.473,
    x: -6.291,
    y: -0.933,
    z: 5.598
  },
  {
    name: "GJ 1151",
    type: "M4.5V",
    temp: 3000,
    rgb: "#ffb46b",
    to_xi_uma: 2.747,
    to_sol: 8.043,
    x: -5.338,
    y: 0.211,
    z: 6.012
  },
  {
    name: "LP 169-22",
    type: "M5.5",
    temp: 3000,
    rgb: "#ffb46b",
    to_xi_uma: 3.019,
    to_sol: 10.469,
    x: -7.069,
    y: 1.262,
    z: 7.618
  },
  {
    name: "Ross 1003",
    type: "M4.0V",
    temp: 3000,
    rgb: "#ffb46b",
    to_xi_uma: 3.029,
    to_sol: 11.027,
    x: -8.071,
    y: 0.644,
    z: 7.485
  },
  {
    name: "GJ 414",
    type: "K7V",
    temp: 4600,
    rgb: "#ffddbe",
    to_xi_uma: 3.064,
    to_sol: 11.880,
    x: -10.009,
    y: 2.169,
    z: 6.020
  },
  {
    name: "GJ 414 B",
    type: "M2V",
    temp: 3000,
    rgb: "#ffb46b",
    to_xi_uma: 3.067,
    to_sol: 11.883,
    x: -10.012,
    y: 2.172,
    z: 6.021
  },
  {
    name: "WISE J121756.90+162640.8",
    type: "T9+Y0",
    temp: 900,
    rgb: "#ff3800",
    to_xi_uma: 3.116,
    to_sol: 8.850,
    x: -8.462,
    y: -0.664,
    z: 2.505
  },
  {
    name: "GJ 3571",
    type: "M4.0Ve",
    temp: 3000,
    rgb: "#ffb46b",
    to_xi_uma: 3.514,
    to_sol: 9.545,
    x: -7.599,
    y: 4.660,
    z: 3.412
  },
  {
    name: "GJ 410",
    type: "M1.0Ve",
    temp: 3000,
    rgb: "#ffb46b",
    to_xi_uma: 3.599,
    to_sol: 11.938,
    x: -10.727,
    y: 2.742,
    z: 4.466
  },
  {
    name: "bet Leo",
    type: "A3Va",
    temp: 8800,
    rgb: "#d8e3ff",
    to_xi_uma: 3.820,
    to_sol: 11.000,
    x: -10.634,
    y: 0.508,
    z: 2.768
  },
  {
    name: "WISE J093735.61+293127.7",
    type: "T6",
    temp: 900,
    rgb: "#ff3800",
    to_xi_uma: 3.877,
    to_sol: 6.120,
    x: -4.330,
    y: 3.100,
    z: 3.016
  },
  {
    name: "43 Com",
    type: "F9.5V",
    temp: 6800,
    rgb: "#f9f6ff",
    to_xi_uma: 3.901,
    to_sol: 9.198,
    x: -7.734,
    y: -2.508,
    z: 4.301
  },
  {
    name: "Wolf 358",
    type: "M4V",
    temp: 3000,
    rgb: "#ffb46b",
    to_xi_uma: 3.938,
    to_sol: 6.967,
    x: -6.605,
    y: 2.055,
    z: 0.826
  },
  {
    name: "G 148-48",
    type: "M5",
    temp: 3000,
    rgb: "#ffb46b",
    to_xi_uma: 3.971,
    to_sol: 11.976,
    x: -10.258,
    y: -0.963,
    z: 6.104
  },
  {
    name: "G 148-47",
    type: "M4.5e",
    temp: 3000,
    rgb: "#ffb46b",
    to_xi_uma: 3.976,
    to_sol: 11.981,
    x: -10.263,
    y: -0.963,
    z: 6.107
  },
  {
    name: "GJ 1156",
    type: "M4.5Ve",
    temp: 3000,
    rgb: "#ffb46b",
    to_xi_uma: 4.015,
    to_sol: 6.464,
    x: -6.321,
    y: -0.525,
    z: 1.247
  },
  {
    name: "PM I11055+4331",
    type: "M6.0V",
    temp: 3000,
    rgb: "#ffb46b",
    to_xi_uma: 4.172,
    to_sol: 4.906,
    x: -3.457,
    y: 0.838,
    z: 3.378
  },
  {
    name: "GJ 412 A",
    type: "M1.0V",
    temp: 3000,
    rgb: "#ffb46b",
    to_xi_uma: 4.173,
    to_sol: 4.905,
    x: -3.456,
    y: 0.838,
    z: 3.378
  },
  {
    name: "G 123-45",
    type: "M4.5V",
    temp: 3000,
    rgb: "#ffb46b",
    to_xi_uma: 4.256,
    to_sol: 11.873,
    x: -9.580,
    y: -1.538,
    z: 6.844
  },
  {
    name: "gam Leo C",
    type: "dM3",
    temp: 3000,
    rgb: "#ffb46b",
    to_xi_uma: 4.366,
    to_sol: 4.965,
    x: -4.229,
    y: 1.981,
    z: 1.688
  },
  {
    name: "GJ 508",
    type: "M2V",
    temp: 3000,
    rgb: "#ffb46b",
    to_xi_uma: 4.374,
    to_sol: 9.092,
    x: -5.744,
    y: -2.084,
    z: 6.733
  },
  {
    name: "11 LMi",
    type: "G8Va",
    temp: 5700,
    rgb: "#ffefe6",
    to_xi_uma: 4.452,
    to_sol: 11.235,
    x: -7.363,
    y: 5.366,
    z: 6.573
  },
  {
    name: "Wolf 437",
    type: "M3.5V",
    temp: 3000,
    rgb: "#ffb46b",
    to_xi_uma: 4.454,
    to_sol: 8.079,
    x: -7.789,
    y: -1.654,
    z: 1.368
  },
  {
    name: "11 LMi B",
    type: "M5V",
    temp: 3000,
    rgb: "#ffb46b",
    to_xi_uma: 4.454,
    to_sol: 11.238,
    x: -7.365,
    y: 5.368,
    z: 6.576
  },
  {
    name: "GJ 3647",
    type: "M3.5V",
    temp: 3000,
    rgb: "#ffb46b",
    to_xi_uma: 4.543,
    to_sol: 13.354,
    x: -10.886,
    y: 2.321,
    z: 7.378
  },
  {
    name: "GJ 380",
    type: "K6VeFe-1",
    temp: 4600,
    rgb: "#ffddbe",
    to_xi_uma: 4.679,
    to_sol: 4.871,
    x: -2.817,
    y: 1.445,
    z: 3.701
  },
  {
    name: "GJ 338 B",
    type: "M0V",
    temp: 3000,
    rgb: "#ffb46b",
    to_xi_uma: 4.693,
    to_sol: 6.334,
    x: -2.880,
    y: 2.539,
    z: 5.037
  },
  {
    name: "GJ 338 A",
    type: "K7V",
    temp: 4600,
    rgb: "#ffddbe",
    to_xi_uma: 4.693,
    to_sol: 6.334,
    x: -2.880,
    y: 2.539,
    z: 5.037
  },
  {
    name: "G 195-59",
    type: "M3.5V",
    temp: 3000,
    rgb: "#ffb46b",
    to_xi_uma: 4.706,
    to_sol: 10.044,
    x: -4.872,
    y: 2.467,
    z: 8.430
  },
  {
    name: "Ross 1015",
    type: "M4V",
    temp: 3000,
    rgb: "#ffb46b",
    to_xi_uma: 4.740,
    to_sol: 9.192,
    x: -6.925,
    y: -3.330,
    z: 5.045
  },
  {
    name: "NC 28",
    type: "dM2",
    temp: 3000,
    rgb: "#ffb46b",
    to_xi_uma: 4.804,
    to_sol: 7.038,
    x: -6.488,
    y: 2.723,
    z: 0.103
  },
  {
    name: "LP 368-128",
    type: "M6.5Ve",
    temp: 3000,
    rgb: "#ffb46b",
    to_xi_uma: 4.829,
    to_sol: 6.359,
    x: -4.181,
    y: 4.166,
    z: 2.365
  },
  {
    name: "GJ 1154",
    type: "M4.5Ve",
    temp: 3000,
    rgb: "#ffb46b",
    to_xi_uma: 4.947,
    to_sol: 8.088,
    x: -8.072,
    y: -0.503,
    z: 0.088
  },
  {
    name: "GJ 1119",
    type: "M4.5Ve",
    temp: 3000,
    rgb: "#ffb46b",
    to_xi_uma: 5.093,
    to_sol: 10.084,
    x: -4.912,
    y: 4.889,
    z: 7.325
  },
  {
    name: "GJ 400 A",
    type: "K7/M0V",
    temp: 4600,
    rgb: "#ffddbe",
    to_xi_uma: 5.209,
    to_sol: 13.701,
    x: -10.157,
    y: 3.430,
    z: 8.531
  },
  {
    name: "Wolf 461",
    type: "M4.5Ve",
    temp: 3000,
    rgb: "#ffb46b",
    to_xi_uma: 5.267,
    to_sol: 8.545,
    x: -8.207,
    y: -2.221,
    z: 0.847
  },
  {
    name: "GJ 424",
    type: "M2V",
    temp: 3000,
    rgb: "#ffb46b",
    to_xi_uma: 5.288,
    to_sol: 9.072,
    x: -3.656,
    y: 0.643,
    z: 8.278
  },
  {
    name: "GJ 339.1",
    type: "DCP7",
    temp: 24000,
    rgb: "#c3d1ff",
    to_xi_uma: 5.288,
    to_sol: 10.273,
    x: -4.619,
    y: 4.017,
    z: 8.250
  },
  {
    name: "2MASS J09083803+5032088",
    type: "L8",
    temp: 1700,
    rgb: "#ff7900",
    to_xi_uma: 5.300,
    to_sol: 10.424,
    x: -4.858,
    y: 4.505,
    z: 8.048
  },
  {
    name: "GJ 1116",
    type: "M7V+M7V",
    temp: 3000,
    rgb: "#ffb46b",
    to_xi_uma: 5.309,
    to_sol: 5.263,
    x: -3.476,
    y: 3.529,
    z: 1.780
  },
  {
    name: "GJ 1116 A",
    type: "M8Ve",
    temp: 3000,
    rgb: "#ffb46b",
    to_xi_uma: 5.354,
    to_sol: 5.151,
    x: -3.401,
    y: 3.454,
    z: 1.742
  },
  {
    name: "Ross 490",
    type: "M1.0V",
    temp: 3000,
    rgb: "#ffb46b",
    to_xi_uma: 5.359,
    to_sol: 7.628,
    x: -6.932,
    y: -2.871,
    z: 1.374
  },
  {
    name: "WISE J082507.35+280548.5",
    type: "Y0.5",
    temp: 400,
    rgb: "#ff3800",
    to_xi_uma: 5.375,
    to_sol: 7.193,
    x: -3.755,
    y: 5.115,
    z: 3.388
  },
  {
    name: "GJ 1116 B",
    type: "M7V",
    temp: 3000,
    rgb: "#ffb46b",
    to_xi_uma: 5.377,
    to_sol: 5.095,
    x: -3.365,
    y: 3.416,
    z: 1.723
  },
  {
    name: "GJ 519",
    type: "K7.5V",
    temp: 4600,
    rgb: "#ffddbe",
    to_xi_uma: 5.378,
    to_sol: 10.942,
    x: -8.093,
    y: -3.666,
    z: 6.388
  },
  {
    name: "Wolf 424",
    type: "M5.5V",
    temp: 3000,
    rgb: "#ffb46b",
    to_xi_uma: 5.399,
    to_sol: 4.388,
    x: -4.288,
    y: -0.627,
    z: 0.688
  },
  {
    name: "WISE J140518.39+553421.3",
    type: "Y0(pec?)",
    temp: 400,
    rgb: "#ff3800",
    to_xi_uma: 5.435,
    to_sol: 7.519,
    x: -3.631,
    y: -2.210,
    z: 6.202
  },
  {
    name: "Wolf 498",
    type: "M2V",
    temp: 3000,
    rgb: "#ffb46b",
    to_xi_uma: 5.604,
    to_sol: 5.435,
    x: -4.703,
    y: -2.338,
    z: 1.397
  },
  {
    name: "GJ 505 A",
    type: "K2V",
    temp: 4600,
    rgb: "#ffddbe",
    to_xi_uma: 5.619,
    to_sol: 10.987,
    x: -9.921,
    y: -3.457,
    z: 3.215
  },
  {
    name: "GJ 505 B",
    type: "M0.5V",
    temp: 3000,
    rgb: "#ffb46b",
    to_xi_uma: 5.624,
    to_sol: 10.995,
    x: -9.928,
    y: -3.460,
    z: 3.218
  },
  {
    name: "GJ 3522",
    type: "M3.5V",
    temp: 3000,
    rgb: "#ffb46b",
    to_xi_uma: 5.644,
    to_sol: 6.772,
    x: -4.714,
    y: 4.758,
    z: 0.998
  },
  {
    name: "GJ 373",
    type: "M0.5V",
    temp: 3000,
    rgb: "#ffb46b",
    to_xi_uma: 5.867,
    to_sol: 10.521,
    x: -4.125,
    y: 2.475,
    z: 9.357
  },
  {
    name: "WISE J092055.40+453856.3",
    type: "L9.5",
    temp: 1700,
    rgb: "#ff7900",
    to_xi_uma: 5.931,
    to_sol: 12.301,
    x: -6.609,
    y: 5.501,
    z: 8.796
  },
  {
    name: "GJ 3512",
    type: "dM5.5",
    temp: 3000,
    rgb: "#ffb46b",
    to_xi_uma: 6.032,
    to_sol: 9.497,
    x: -3.120,
    y: 3.675,
    z: 8.183
  },
  {
    name: "GJ 1105",
    type: "M3.5V",
    temp: 3000,
    rgb: "#ffb46b",
    to_xi_uma: 6.166,
    to_sol: 8.850,
    x: -3.279,
    y: 5.783,
    z: 5.842
  },
  {
    name: "Ross 128",
    type: "dM4",
    temp: 3000,
    rgb: "#ffb46b",
    to_xi_uma: 6.212,
    to_sol: 3.375,
    x: -3.370,
    y: 0.180,
    z: 0.047
  },
  {
    name: "Wolf 489",
    type: "DC9",
    temp: 24000,
    rgb: "#c3d1ff",
    to_xi_uma: 6.285,
    to_sol: 8.350,
    x: -7.605,
    y: -3.407,
    z: 0.536
  },
  {
    name: "36 UMa B",
    type: "K7Ve",
    temp: 4600,
    rgb: "#ffddbe",
    to_xi_uma: 6.288,
    to_sol: 12.919,
    x: -6.679,
    y: 2.752,
    z: 10.710
  },
  {
    name: "GJ 3622",
    type: "M6.5V",
    temp: 3000,
    rgb: "#ffb46b",
    to_xi_uma: 6.302,
    to_sol: 4.559,
    x: -4.263,
    y: 1.381,
    z: -0.844
  },
  {
    name: "GJ 411",
    type: "M2+V",
    temp: 3000,
    rgb: "#ffb46b",
    to_xi_uma: 6.304,
    to_sol: 2.546,
    x: -1.998,
    y: 0.504,
    z: 1.495
  },
  {
    name: "36 UMa",
    type: "F8V",
    temp: 6800,
    rgb: "#f9f6ff",
    to_xi_uma: 6.305,
    to_sol: 12.945,
    x: -6.699,
    y: 2.753,
    z: 10.730
  },
  {
    name: "ULAS J133553.45+113005.2",
    type: "T8+/Y?",
    temp: 900,
    rgb: "#ff3800",
    to_xi_uma: 6.329,
    to_sol: 10.341,
    x: -9.259,
    y: -4.117,
    z: 2.062
  },
  {
    name: "GJ 1111",
    type: "M6.5Ve",
    temp: 3000,
    rgb: "#ffb46b",
    to_xi_uma: 6.343,
    to_sol: 3.581,
    x: -1.944,
    y: 2.538,
    z: 1.613
  },
  {
    name: "GJ 537 A",
    type: "M2V",
    temp: 3000,
    rgb: "#ffb46b",
    to_xi_uma: 6.368,
    to_sol: 11.160,
    x: -6.629,
    y: -3.927,
    z: 8.074
  },
  {
    name: "GJ 537 B",
    type: "M2.5V",
    temp: 3000,
    rgb: "#ffb46b",
    to_xi_uma: 6.373,
    to_sol: 11.169,
    x: -6.634,
    y: -3.930,
    z: 8.080
  },
  {
    name: "GJ 537",
    type: "M2V+M2.5V",
    temp: 3000,
    rgb: "#ffb46b",
    to_xi_uma: 6.430,
    to_sol: 11.261,
    x: -6.689,
    y: -3.962,
    z: 8.147
  },
  {
    name: "Ross 837",
    type: "M3.5Ve",
    temp: 3000,
    rgb: "#ffb46b",
    to_xi_uma: 6.438,
    to_sol: 9.360,
    x: -7.946,
    y: -4.506,
    z: 2.038
  },
  {
    name: "HD 122064",
    type: "K3V",
    temp: 4600,
    rgb: "#ffddbe",
    to_xi_uma: 6.488,
    to_sol: 10.067,
    x: -4.187,
    y: -2.357,
    z: 8.847
  },
  {
    name: "GJ 445",
    type: "M4.0V",
    temp: 3000,
    rgb: "#ffb46b",
    to_xi_uma: 6.531,
    to_sol: 5.254,
    x: -1.029,
    y: 0.055,
    z: 5.152
  },
  {
    name: "GJ 488",
    type: "M0V",
    temp: 3000,
    rgb: "#ffb46b",
    to_xi_uma: 6.535,
    to_sol: 10.655,
    x: -10.394,
    y: -2.339,
    z: 0.143
  },
  {
    name: "Ross 619",
    type: "M4.5V",
    temp: 3000,
    rgb: "#ffb46b",
    to_xi_uma: 6.711,
    to_sol: 6.769,
    x: -3.643,
    y: 5.612,
    z: 1.032
  },
  {
    name: "Wolf 359",
    type: "dM6",
    temp: 3000,
    rgb: "#ffb46b",
    to_xi_uma: 6.729,
    to_sol: 2.409,
    x: -2.299,
    y: 0.654,
    z: 0.294
  },
  {
    name: "WISE J150649.97+702736.1",
    type: "T6",
    temp: 900,
    rgb: "#ff3800",
    to_xi_uma: 6.756,
    to_sol: 5.156,
    x: -1.183,
    y: -1.256,
    z: 4.859
  },
  {
    name: "Ross 986",
    type: "M4.5Ve",
    temp: 3000,
    rgb: "#ffb46b",
    to_xi_uma: 6.812,
    to_sol: 6.053,
    x: -1.424,
    y: 4.516,
    z: 3.770
  },
  {
    name: "GJ 3855",
    type: "M6.5V",
    temp: 3000,
    rgb: "#ffb46b",
    to_xi_uma: 6.880,
    to_sol: 9.969,
    x: -3.979,
    y: -3.071,
    z: 8.609
  },
  {
    name: "Wolf 294",
    type: "M3V",
    temp: 3000,
    rgb: "#ffb46b",
    to_xi_uma: 7.221,
    to_sol: 5.585,
    x: -1.106,
    y: 4.536,
    z: 3.063
  },
  {
    name: "WISE J075840.16+324720.6",
    type: "T0.0+T3.5",
    temp: 900,
    rgb: "#ff3800",
    to_xi_uma: 7.293,
    to_sol: 10.878,
    x: -4.526,
    y: 7.946,
    z: 5.891
  },
  {
    name: "2MASS J08300825+4828482",
    type: "L9.5",
    temp: 1700,
    rgb: "#ff7900",
    to_xi_uma: 7.353,
    to_sol: 12.403,
    x: -5.009,
    y: 6.520,
    z: 9.286
  },
  {
    name: "2MASS J15150083+4847416",
    type: "L6.5",
    temp: 1700,
    rgb: "#ff7900",
    to_xi_uma: 7.500,
    to_sol: 9.807,
    x: -4.260,
    y: -4.858,
    z: 7.379
  },
  {
    name: "GJ 3421",
    type: "M5.0V",
    temp: 3000,
    rgb: "#ffb46b",
    to_xi_uma: 7.515,
    to_sol: 9.023,
    x: -1.505,
    y: 5.256,
    z: 7.178
  },
  {
    name: "Ross 882",
    type: "M4.0Ve",
    temp: 3000,
    rgb: "#ffb46b",
    to_xi_uma: 7.535,
    to_sol: 5.989,
    x: -2.636,
    y: 5.365,
    z: 0.371
  },
  {
    name: "alf CMi",
    type: "F5IV-V+DQZ",
    temp: 6800,
    rgb: "#f9f6ff",
    to_xi_uma: 7.549,
    to_sol: 3.514,
    x: -1.469,
    y: 3.176,
    z: 0.320
  },
  {
    name: "78 Gem",
    type: "K0IIIb",
    temp: 4600,
    rgb: "#ffddbe",
    to_xi_uma: 7.610,
    to_sol: 10.358,
    x: -4.055,
    y: 8.195,
    z: 4.867
  },
  {
    name: "WISE J085510.83-071442.5",
    type: "Y2",
    temp: 400,
    rgb: "#ff3800",
    to_xi_uma: 7.639,
    to_sol: 2.232,
    x: -1.534,
    y: 1.600,
    z: -0.263
  },
  {
    name: "GJ 625",
    type: "M1.5V",
    temp: 3000,
    rgb: "#ffb46b",
    to_xi_uma: 7.642,
    to_sol: 6.479,
    x: -1.516,
    y: -3.463,
    z: 5.262
  },
  {
    name: "Luyten's star",
    type: "M3.5V",
    temp: 3000,
    rgb: "#ffb46b",
    to_xi_uma: 7.671,
    to_sol: 3.786,
    x: -1.403,
    y: 3.499,
    z: 0.345
  },
  {
    name: "GJ 687",
    type: "M3.0V",
    temp: 3000,
    rgb: "#ffb46b",
    to_xi_uma: 7.854,
    to_sol: 4.550,
    x: -0.172,
    y: -1.671,
    z: 4.229
  },
  {
    name: "2MASS J06523073+4710348",
    type: "L3.5+L6.5",
    temp: 1700,
    rgb: "#ff7900",
    to_xi_uma: 7.873,
    to_sol: 9.110,
    x: -1.407,
    y: 6.031,
    z: 6.682
  },
  {
    name: "GJ 275.2 A",
    type: "M4V",
    temp: 3000,
    rgb: "#ffb46b",
    to_xi_uma: 8.100,
    to_sol: 11.271,
    x: -2.897,
    y: 6.932,
    z: 8.402
  },
  {
    name: "WISE J072227.27-054029.9",
    type: "T9",
    temp: 900,
    rgb: "#ff3800",
    to_xi_uma: 8.117,
    to_sol: 4.065,
    x: -1.427,
    y: 3.794,
    z: -0.307
  },
  {
    name: "GJ 1221",
    type: "DQ9P",
    temp: 24000,
    rgb: "#c3d1ff",
    to_xi_uma: 8.148,
    to_sol: 6.211,
    x: -0.105,
    y: -2.032,
    z: 5.869
  },
  {
    name: "GJ 623",
    type: "M3.0V",
    temp: 3000,
    rgb: "#ffb46b",
    to_xi_uma: 8.190,
    to_sol: 7.844,
    x: -2.117,
    y: -4.764,
    z: 5.862
  },
  {
    name: "GJ 1093",
    type: "M5.0Ve",
    temp: 3000,
    rgb: "#ffb46b",
    to_xi_uma: 8.203,
    to_sol: 7.753,
    x: -1.877,
    y: 7.070,
    z: 2.569
  },
  {
    name: "GJ 3426",
    type: "M4.35",
    temp: 3000,
    rgb: "#ffb46b",
    to_xi_uma: 8.278,
    to_sol: 10.613,
    x: -2.038,
    y: 6.704,
    z: 7.972
  },
  {
    name: "2MASS J10481463-3956062",
    type: "M8.5Ve:",
    temp: 3000,
    rgb: "#ffb46b",
    to_xi_uma: 8.360,
    to_sol: 4.045,
    x: -3.030,
    y: 0.981,
    z: -2.494
  },
  {
    name: "GJ 725 A",
    type: "M3V",
    temp: 3000,
    rgb: "#ffb46b",
    to_xi_uma: 8.488,
    to_sol: 3.523,
    x: 0.331,
    y: -1.750,
    z: 3.040
  },
  {
    name: "GJ 725 B",
    type: "M3.5V",
    temp: 3000,
    rgb: "#ffb46b",
    to_xi_uma: 8.488,
    to_sol: 3.523,
    x: 0.331,
    y: -1.750,
    z: 3.040
  },
  {
    name: "WISE J031325.94+780744.3",
    type: "T8.5",
    temp: 900,
    rgb: "#ff3800",
    to_xi_uma: 8.494,
    to_sol: 6.536,
    x: 0.893,
    y: 1.005,
    z: 6.396
  },
  {
    name: "GJ 661",
    type: "M3V",
    temp: 3000,
    rgb: "#ffb46b",
    to_xi_uma: 8.521,
    to_sol: 5.978,
    x: -0.866,
    y: -4.087,
    z: 4.276
  },
  {
    name: "WISE J164715.57+563208.3",
    type: "L9pec",
    temp: 1700,
    rgb: "#ff7900",
    to_xi_uma: 8.734,
    to_sol: 8.621,
    x: -1.483,
    y: -4.516,
    z: 7.192
  },
  {
    name: "Ross 614",
    type: "M4.5V",
    temp: 3000,
    rgb: "#ffb46b",
    to_xi_uma: 8.765,
    to_sol: 4.116,
    x: -0.526,
    y: 4.081,
    z: -0.085
  },
  {
    name: "9 CMa",
    type: "A0mA1Va",
    temp: 8800,
    rgb: "#d8e3ff",
    to_xi_uma: 8.788,
    to_sol: 2.637,
    x: -0.498,
    y: 2.495,
    z: -0.695
  },
  {
    name: "alf CMa B",
    type: "DA1.9",
    temp: 24000,
    rgb: "#c3d1ff",
    to_xi_uma: 8.792,
    to_sol: 2.670,
    x: -0.504,
    y: 2.526,
    z: -0.704
  },
  {
    name: "61 Dra",
    type: "K0V",
    temp: 4600,
    rgb: "#ffddbe",
    to_xi_uma: 8.832,
    to_sol: 5.764,
    x: 0.786,
    y: -1.843,
    z: 5.405
  },
  {
    name: "Sol",
    type: "G2V",
    temp: 5700,
    rgb: "#ffefe6",
    to_xi_uma: 8.834,
    to_sol: 0.000,
    x: 0.000,
    y: 0.000,
    z: 0.000
  },
  {
    name: "Luhman 16",
    type: "L7.5+T0.5",
    temp: 1700,
    rgb: "#ff7900",
    to_xi_uma: 8.869,
    to_sol: 2.016,
    x: -1.165,
    y: 0.371,
    z: -1.603
  },
  {
    name: "WISE J154151.65-225024.9",
    type: "Y0",
    temp: 400,
    rgb: "#ff3800",
    to_xi_uma: 8.907,
    to_sol: 2.849,
    x: -1.506,
    y: -2.189,
    z: -1.028
  },
  {
    name: "chi Dra",
    type: "F7V",
    temp: 6800,
    rgb: "#f9f6ff",
    to_xi_uma: 9.035,
    to_sol: 8.057,
    x: 0.219,
    y: -2.382,
    z: 7.694
  },
  {
    name: "G 227-22",
    type: "M5.0V",
    temp: 3000,
    rgb: "#ffb46b",
    to_xi_uma: 9.147,
    to_sol: 7.794,
    x: 0.034,
    y: -3.384,
    z: 7.021
  },
  {
    name: "alf02 Cen",
    type: "K1V",
    temp: 4600,
    rgb: "#ffddbe",
    to_xi_uma: 9.160,
    to_sol: 1.346,
    x: -0.529,
    y: -0.443,
    z: -1.156
  },
  {
    name: "alf01 Cen",
    type: "G2V",
    temp: 5700,
    rgb: "#ffefe6",
    to_xi_uma: 9.160,
    to_sol: 1.346,
    x: -0.529,
    y: -0.443,
    z: -1.156
  },
  {
    name: "alf Cen",
    type: "G2V+K1V",
    temp: 5700,
    rgb: "#ffefe6",
    to_xi_uma: 9.160,
    to_sol: 1.348,
    x: -0.530,
    y: -0.443,
    z: -1.157
  },
  {
    name: "alf Cen C",
    type: "M5.5Ve",
    temp: 3000,
    rgb: "#ffb46b",
    to_xi_uma: 9.164,
    to_sol: 1.302,
    x: -0.496,
    y: -0.380,
    z: -1.142
  },
  {
    name: "GJ 4053",
    type: "M4.5Ve",
    temp: 3000,
    rgb: "#ffb46b",
    to_xi_uma: 9.166,
    to_sol: 7.642,
    x: 0.255,
    y: -3.074,
    z: 6.992
  },
  {
    name: "GJ 3991",
    type: "M3.5V",
    temp: 3000,
    rgb: "#ffb46b",
    to_xi_uma: 9.174,
    to_sol: 7.599,
    x: -1.201,
    y: -5.363,
    z: 5.248
  },
  {
    name: "Barnard's star",
    type: "M4V",
    temp: 3000,
    rgb: "#ffb46b",
    to_xi_uma: 9.204,
    to_sol: 1.828,
    x: -0.017,
    y: -1.822,
    z: 0.150
  },
  {
    name: "GJ 1227",
    type: "M4.0V",
    temp: 3000,
    rgb: "#ffb46b",
    to_xi_uma: 9.794,
    to_sol: 8.351,
    x: 0.383,
    y: -3.895,
    z: 7.377
  },
  {
    name: "GJ 809",
    type: "M1.0V",
    temp: 3000,
    rgb: "#ffb46b",
    to_xi_uma: 10.490,
    to_sol: 7.040,
    x: 2.256,
    y: -2.392,
    z: 6.224
  },
  {
    name: "GJ 793",
    type: "M3V",
    temp: 3000,
    rgb: "#ffb46b",
    to_xi_uma: 10.636,
    to_sol: 8.087,
    x: 2.052,
    y: -2.661,
    z: 7.356
  },
  {
    name: "Ross 154",
    type: "M3.5Ve",
    temp: 3000,
    rgb: "#ffb46b",
    to_xi_uma: 10.650,
    to_sol: 2.976,
    x: 0.594,
    y: -2.691,
    z: -1.123
  },
  {
    name: "GJ 65",
    type: "M5.5V+M6V",
    temp: 3000,
    rgb: "#ffb46b",
    to_xi_uma: 11.113,
    to_sol: 2.667,
    x: 2.327,
    y: 1.073,
    z: -0.737
  },
  {
    name: "GJ 65 B",
    type: "M6V",
    temp: 3000,
    rgb: "#ffb46b",
    to_xi_uma: 11.120,
    to_sol: 2.675,
    x: 2.334,
    y: 1.077,
    z: -0.740
  },
  {
    name: "GJ 65 A",
    type: "M5.5V",
    temp: 3000,
    rgb: "#ffb46b",
    to_xi_uma: 11.160,
    to_sol: 2.720,
    x: 2.373,
    y: 1.094,
    z: -0.752
  }
]

function dist(s1: Star, s2: Star): Number {
  const dist = ((s1.x - s2.x) ** 2 + (s1.y - s2.y) ** 2 + (s1.z - s2.z) ** 2) ** 0.5
  if (s1.name.includes('1116')) {
    console.log(`${s1.name} -> ${s2.name} == ${dist}`)
  }
  return dist
}

const cutoff = 0.2

const stars = allStars.reduce((ss: Array<Star>, star: Star) => {
  const count = ss.length
  if (count == 0 || dist(star, ss[count - 1]) > cutoff) {
    // console.log(`pushing ${star.name}`)
    ss.push(star)
    // } else {
    //   console.log(`skipping ${star.name}`)
  }
  return ss
}, <Array<Star>>[])

const xiUMa: Star = <Star>stars.find((s) => s.name === "53 UMa")
const sol: Star = <Star>stars.find((s) => s.name === "Sol")

export const useStarsStore = defineStore('stars', () => {
  return { stars, xiUMa: xiUMa, sol }
})
