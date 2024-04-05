export default function AnimatedBlockFinality() {

    // return (
    //     <div className="flex overflow-visible hue-rotate-[320deg] saturate-[1.2] brightness-105">
    //         <div className="blockchainSVGOverlay"></div>
    //         <svg xmlns="http://www.w3.org/2000/svg" version="1.1" height="50vh" enableBackground="new 0 0 2000 1200"
    //             viewBox="981.9 273.3 450.1 343.7" className="blockchainSVG">
    //             <g className="transition [transform:translate3d(-320px,186px,0px)] animate-[appear_3s_infinite]">
    //                 <linearGradient id="SVGID_49_" x1="1299.6068" x2="1361.6029" y1="-311.3163" y2="-344.4973"
    //                     gradientTransform="matrix(1 0 0 1 0 700)" gradientUnits="userSpaceOnUse">
    //                     <stop offset="0" style={{ stopColor: "#A91B37" }}></stop>
    //                     <stop offset="0.2857" style={{ stopColor: "#B21F37" }}></stop>
    //                     <stop offset="0.75" style={{ stopColor: "#CA2B38" }}></stop>
    //                     <stop offset="1" style={{ stopColor: "#DA3239" }}></stop>
    //                 </linearGradient>
    //                 <polygon fill="url(#SVGID_49_)" points="1300.9,313.8 1300.9,391.1 1362.9,429 1362.9,355.9    "></polygon>
    //                 <linearGradient id="SVGID_50_" x1="1372.5" x2="1424.6" y1="-353.6" y2="-301.5"
    //                     gradientTransform="matrix(1 0 0 1 0 700)" gradientUnits="userSpaceOnUse">
    //                     <stop offset="0" style={{ stopColor: "#FF999F" }}></stop>
    //                     <stop offset="0.1701" style={{ stopColor: "#F27B85" }}></stop>
    //                     <stop offset="0.4158" style={{ stopColor: "#E35566" }}></stop>
    //                     <stop offset="0.6441" style={{ stopColor: "#D73A4F" }}></stop>
    //                     <stop offset="0.8458" style={{ stopColor: "#D02A41" }}></stop>
    //                     <stop offset="1" style={{ stopColor: "#CE243C" }}></stop>
    //                 </linearGradient>
    //                 <polygon fill="url(#SVGID_50_)" points="1363,355.9 1363,429 1432,391.1 1432,313.8    "></polygon>
    //                 <linearGradient id="SVGID_51_" x1="1347.0559" x2="1388.1415" y1="-355.8673" y2="-420.1857"
    //                     gradientTransform="matrix(1 0 0 1 0 700)" gradientUnits="userSpaceOnUse">
    //                     <stop offset="0" style={{ stopColor: "#E64852" }}></stop>
    //                     <stop offset="5.850000e-02" style={{ stopColor: "#E44550" }}></stop>
    //                     <stop offset="0.6415" style={{ stopColor: "#D42D41" }}></stop>
    //                     <stop offset="1" style={{ stopColor: "#CE243C" }}></stop>
    //                 </linearGradient>
    //                 <polygon fill="url(#SVGID_51_)" points="1300.9,313.8 1362.7,355.9 1431.9,313.9 1367.9,273.3    "></polygon>
    //                 <g opacity="0.12">
    //                     <polygon fill="#FFFFFF" points="1317,325 1317,382.1 1363,410.2 1363,356.1     "></polygon>
    //                     <polygon fill="#FFFFFF" points="1413,325 1413,382.1 1363,410.2 1363,356.1     "></polygon>
    //                     <polygon fill="#FFFFFF" points="1316.3,325 1362.9,356.1 1413.7,325 1366.1,295     "></polygon>
    //                 </g>
    //                 <linearGradient id="SVGID_52_" x1="1390.3" x2="1404.4501" y1="-371.4" y2="-357.25"
    //                     gradientTransform="matrix(1 0 0 1 0 700)" gradientUnits="userSpaceOnUse">
    //                     <stop offset="0" style={{ stopColor: "#FFFFFF" }}></stop>
    //                     <stop offset="0.2713" style={{ stopColor: "#FDC8BA" }}></stop>
    //                     <stop offset="0.5184" style={{ stopColor: "#FB9C83" }}></stop>
    //                     <stop offset="0.7299" style={{ stopColor: "#F97C5B" }}></stop>
    //                     <stop offset="0.8974" style={{ stopColor: "#F86843" }}></stop>
    //                     <stop offset="1" style={{ stopColor: "#F8613A" }}></stop>
    //                 </linearGradient>
    //                 <polygon fill="url(#SVGID_52_)" points="1363,355.9 1363,357.4 1431.9,315.3 1431.8,314    "></polygon>
    //                 <linearGradient id="SVGID_53_" x1="3884.6614" x2="3895.3269" y1="-369.7385" y2="-359.0731"
    //                     gradientTransform="matrix(-1 0 0 1 5222 700)" gradientUnits="userSpaceOnUse">
    //                     <stop offset="0" style={{ stopColor: "#FFFFFF" }}></stop>
    //                     <stop offset="0.2713" style={{ stopColor: "#FDC8BA" }}></stop>
    //                     <stop offset="0.5184" style={{ stopColor: "#FB9C83" }}></stop>
    //                     <stop offset="0.7299" style={{ stopColor: "#F97C5B" }}></stop>
    //                     <stop offset="0.8974" style={{ stopColor: "#F86843" }}></stop>
    //                     <stop offset="1" style={{ stopColor: "#F8613A" }}></stop>
    //                 </linearGradient>
    //                 <polygon fill="url(#SVGID_53_)" points="1363,355.9 1363,357.4 1301,315.3 1301,313.8    "></polygon>
    //                 <linearGradient id="SVGID_54_" x1="1345.25" x2="1381.6" y1="-325.4501" y2="-289.0999"
    //                     gradientTransform="matrix(1 0 0 1 0 700)" gradientUnits="userSpaceOnUse">
    //                     <stop offset="0" style={{ stopColor: "#FFFFFF" }}></stop>
    //                     <stop offset="0.2713" style={{ stopColor: "#FDC8BA" }}></stop>
    //                     <stop offset="0.5184" style={{ stopColor: "#FB9C83" }}></stop>
    //                     <stop offset="0.7299" style={{ stopColor: "#F97C5B" }}></stop>
    //                     <stop offset="0.8974" style={{ stopColor: "#F86843" }}></stop>
    //                     <stop offset="1" style={{ stopColor: "#F8613A" }}></stop>
    //                 </linearGradient>
    //                 <polygon fill="url(#SVGID_54_)" points="1364,356.6 1363,356.8 1363,429 1364,428.5    "></polygon>
    //             </g>
    //             <g>
    //                 <g className="transition animate-[moveBlock_3s_infinite]">
    //                     <linearGradient id="SVGID_49_" x1="1299.6068" x2="1361.6029" y1="-311.3163" y2="-344.4973"
    //                         gradientTransform="matrix(1 0 0 1 0 700)" gradientUnits="userSpaceOnUse">
    //                         <stop offset="0" style={{ stopColor: "#A91B37" }}></stop>
    //                         <stop offset="0.2857" style={{ stopColor: "#B21F37" }}></stop>
    //                         <stop offset="0.75" style={{ stopColor: "#CA2B38" }}></stop>
    //                         <stop offset="1" style={{ stopColor: "#DA3239" }}></stop>
    //                     </linearGradient>
    //                     <polygon fill="url(#SVGID_49_)" points="1300.9,313.8 1300.9,391.1 1362.9,429 1362.9,355.9   "></polygon>
    //                     <linearGradient id="SVGID_50_" x1="1372.5" x2="1424.6" y1="-353.6" y2="-301.5"
    //                         gradientTransform="matrix(1 0 0 1 0 700)" gradientUnits="userSpaceOnUse">
    //                         <stop offset="0" style={{ stopColor: "#FF999F" }}></stop>
    //                         <stop offset="0.1701" style={{ stopColor: "#F27B85" }}></stop>
    //                         <stop offset="0.4158" style={{ stopColor: "#E35566" }}></stop>
    //                         <stop offset="0.6441" style={{ stopColor: "#D73A4F" }}></stop>
    //                         <stop offset="0.8458" style={{ stopColor: "#D02A41" }}></stop>
    //                         <stop offset="1" style={{ stopColor: "#CE243C" }}></stop>
    //                     </linearGradient>
    //                     <polygon fill="url(#SVGID_50_)" points="1363,355.9 1363,429 1432,391.1 1432,313.8   "></polygon>
    //                     <linearGradient id="SVGID_51_" x1="1347.0559" x2="1388.1415" y1="-355.8673" y2="-420.1857"
    //                         gradientTransform="matrix(1 0 0 1 0 700)" gradientUnits="userSpaceOnUse">
    //                         <stop offset="0" style={{ stopColor: "#E64852" }}></stop>
    //                         <stop offset="5.850000e-02" style={{ stopColor: "#E44550" }}></stop>
    //                         <stop offset="0.6415" style={{ stopColor: "#D42D41" }}></stop>
    //                         <stop offset="1" style={{ stopColor: "#CE243C" }}></stop>
    //                     </linearGradient>
    //                     <polygon fill="url(#SVGID_51_)" points="1300.9,313.8 1362.7,355.9 1431.9,313.9 1367.9,273.3   "></polygon>
    //                     <g opacity="0.12">
    //                         <polygon fill="#FFFFFF" points="1317,325 1317,382.1 1363,410.2 1363,356.1    "></polygon>
    //                         <polygon fill="#FFFFFF" points="1413,325 1413,382.1 1363,410.2 1363,356.1    "></polygon>
    //                         <polygon fill="#FFFFFF" points="1316.3,325 1362.9,356.1 1413.7,325 1366.1,295    "></polygon>
    //                     </g>
    //                     <linearGradient id="SVGID_52_" x1="1390.3" x2="1404.4501" y1="-371.4" y2="-357.25"
    //                         gradientTransform="matrix(1 0 0 1 0 700)" gradientUnits="userSpaceOnUse">
    //                         <stop offset="0" style={{ stopColor: "#FFFFFF" }}></stop>
    //                         <stop offset="0.2713" style={{ stopColor: "#FDC8BA" }}></stop>
    //                         <stop offset="0.5184" style={{ stopColor: "#FB9C83" }}></stop>
    //                         <stop offset="0.7299" style={{ stopColor: "#F97C5B" }}></stop>
    //                         <stop offset="0.8974" style={{ stopColor: "#F86843" }}></stop>
    //                         <stop offset="1" style={{ stopColor: "#F8613A" }}></stop>
    //                     </linearGradient>
    //                     <polygon fill="url(#SVGID_52_)" points="1363,355.9 1363,357.4 1431.9,315.3 1431.8,314   "></polygon>
    //                     <linearGradient id="SVGID_53_" x1="3884.6614" x2="3895.3269" y1="-369.7385" y2="-359.0731"
    //                         gradientTransform="matrix(-1 0 0 1 5222 700)" gradientUnits="userSpaceOnUse">
    //                         <stop offset="0" style={{ stopColor: "#FFFFFF" }}></stop>
    //                         <stop offset="0.2713" style={{ stopColor: "#FDC8BA" }}></stop>
    //                         <stop offset="0.5184" style={{ stopColor: "#FB9C83" }}></stop>
    //                         <stop offset="0.7299" style={{ stopColor: "#F97C5B" }}></stop>
    //                         <stop offset="0.8974" style={{ stopColor: "#F86843" }}></stop>
    //                         <stop offset="1" style={{ stopColor: "#F8613A" }}></stop>
    //                     </linearGradient>
    //                     <polygon fill="url(#SVGID_53_)" points="1363,355.9 1363,357.4 1301,315.3 1301,313.8   "></polygon>
    //                     <linearGradient id="SVGID_54_" x1="1345.25" x2="1381.6" y1="-325.4501" y2="-289.0999"
    //                         gradientTransform="matrix(1 0 0 1 0 700)" gradientUnits="userSpaceOnUse">
    //                         <stop offset="0" style={{ stopColor: "#FFFFFF" }}></stop>
    //                         <stop offset="0.2713" style={{ stopColor: "#FDC8BA" }}></stop>
    //                         <stop offset="0.5184" style={{ stopColor: "#FB9C83" }}></stop>
    //                         <stop offset="0.7299" style={{ stopColor: "#F97C5B" }}></stop>
    //                         <stop offset="0.8974" style={{ stopColor: "#F86843" }}></stop>
    //                         <stop offset="1" style={{ stopColor: "#F8613A" }}></stop>
    //                     </linearGradient>
    //                     <polygon fill="url(#SVGID_54_)" points="1364,356.6 1363,356.8 1363,429 1364,428.5   "></polygon>
    //                 </g>
    //                 <g className="transition animate-[moveBlock_3s_infinite]">
    //                     <linearGradient id="SVGID_55_" x1="1141.6068" x2="1203.6029" y1="-217.3163" y2="-250.4973"
    //                         gradientTransform="matrix(1 0 0 1 0 700)" gradientUnits="userSpaceOnUse">
    //                         <stop offset="0" style={{ stopColor: "#A91B37" }}></stop>
    //                         <stop offset="0.2857" style={{ stopColor: "#B21F37" }}></stop>
    //                         <stop offset="0.75" style={{ stopColor: "#CA2B38" }}></stop>
    //                         <stop offset="1" style={{ stopColor: "#DA3239" }}></stop>
    //                     </linearGradient>
    //                     <polygon fill="url(#SVGID_55_)" points="1142.9,407.8 1142.9,485.1 1204.9,523 1204.9,449.9   "></polygon>
    //                     <linearGradient id="SVGID_56_" x1="1214.5" x2="1266.6" y1="-259.6" y2="-207.5"
    //                         gradientTransform="matrix(1 0 0 1 0 700)" gradientUnits="userSpaceOnUse">
    //                         <stop offset="0" style={{ stopColor: "#FF999F" }}></stop>
    //                         <stop offset="0.1701" style={{ stopColor: "#F27B85" }}></stop>
    //                         <stop offset="0.4158" style={{ stopColor: "#E35566" }}></stop>
    //                         <stop offset="0.6441" style={{ stopColor: "#D73A4F" }}></stop>
    //                         <stop offset="0.8458" style={{ stopColor: "#D02A41" }}></stop>
    //                         <stop offset="1" style={{ stopColor: "#CE243C" }}></stop>
    //                     </linearGradient>
    //                     <polygon fill="url(#SVGID_56_)" points="1205,449.9 1205,523 1274,485.1 1274,407.8   "></polygon>
    //                     <linearGradient id="SVGID_57_" x1="1189.0559" x2="1230.1415" y1="-261.8673" y2="-326.1857"
    //                         gradientTransform="matrix(1 0 0 1 0 700)" gradientUnits="userSpaceOnUse">
    //                         <stop offset="0" style={{ stopColor: "#E64852" }}></stop>
    //                         <stop offset="5.850000e-02" style={{ stopColor: "#E44550" }}></stop>
    //                         <stop offset="0.6415" style={{ stopColor: "#D42D41" }}></stop>
    //                         <stop offset="1" style={{ stopColor: "#CE243C" }}></stop>
    //                     </linearGradient>
    //                     <polygon fill="url(#SVGID_57_)" points="1142.9,407.8 1204.7,449.9 1273.9,407.9 1209.9,367.3   "></polygon>
    //                     <g opacity="0.12">
    //                         <polygon fill="#FFFFFF" points="1159,419 1159,476.1 1205,504.2 1205,450.1    "></polygon>
    //                         <polygon fill="#FFFFFF" points="1255,419 1255,476.1 1205,504.2 1205,450.1    "></polygon>
    //                         <polygon fill="#FFFFFF" points="1158.3,419 1204.9,450.1 1255.7,419 1208.1,389    "></polygon>
    //                     </g>
    //                     <linearGradient id="SVGID_58_" x1="1232.3" x2="1246.4501" y1="-277.4" y2="-263.25"
    //                         gradientTransform="matrix(1 0 0 1 0 700)" gradientUnits="userSpaceOnUse">
    //                         <stop offset="0" style={{ stopColor: "#FFFFFF" }}></stop>
    //                         <stop offset="0.2713" style={{ stopColor: "#FDC8BA" }}></stop>
    //                         <stop offset="0.5184" style={{ stopColor: "#FB9C83" }}></stop>
    //                         <stop offset="0.7299" style={{ stopColor: "#F97C5B" }}></stop>
    //                         <stop offset="0.8974" style={{ stopColor: "#F86843" }}></stop>
    //                         <stop offset="1" style={{ stopColor: "#F8613A" }}></stop>
    //                     </linearGradient>
    //                     <polygon fill="url(#SVGID_58_)" points="1205,449.9 1205,451.4 1273.9,409.3 1273.8,408   "></polygon>
    //                     <linearGradient id="SVGID_59_" x1="4042.6614" x2="4053.3269" y1="-275.7386" y2="-265.0729"
    //                         gradientTransform="matrix(-1 0 0 1 5222 700)" gradientUnits="userSpaceOnUse">
    //                         <stop offset="0" style={{ stopColor: "#FFFFFF" }}></stop>
    //                         <stop offset="0.2713" style={{ stopColor: "#FDC8BA" }}></stop>
    //                         <stop offset="0.5184" style={{ stopColor: "#FB9C83" }}></stop>
    //                         <stop offset="0.7299" style={{ stopColor: "#F97C5B" }}></stop>
    //                         <stop offset="0.8974" style={{ stopColor: "#F86843" }}></stop>
    //                         <stop offset="1" style={{ stopColor: "#F8613A" }}></stop>
    //                     </linearGradient>
    //                     <polygon fill="url(#SVGID_59_)" points="1205,449.9 1205,451.4 1143,409.3 1143,407.8   "></polygon>
    //                     <linearGradient id="SVGID_60_" x1="1187.25" x2="1223.6" y1="-231.4501" y2="-195.0999"
    //                         gradientTransform="matrix(1 0 0 1 0 700)" gradientUnits="userSpaceOnUse">
    //                         <stop offset="0" style={{ stopColor: "#FFFFFF" }}></stop>
    //                         <stop offset="0.2713" style={{ stopColor: "#FDC8BA" }}></stop>
    //                         <stop offset="0.5184" style={{ stopColor: "#FB9C83" }}></stop>
    //                         <stop offset="0.7299" style={{ stopColor: "#F97C5B" }}></stop>
    //                         <stop offset="0.8974" style={{ stopColor: "#F86843" }}></stop>
    //                         <stop offset="1" style={{ stopColor: "#F8613A" }}></stop>
    //                     </linearGradient>
    //                     <polygon fill="url(#SVGID_60_)" points="1206,450.6 1205,450.8 1205,523 1206,522.5   "></polygon>
    //                 </g>
    //                 <g className="transition animate-[moveBlock_3s_infinite]">
    //                     <linearGradient id="SVGID_61_" x1="980.6068" x2="1042.6029" y1="-123.3163" y2="-156.4973"
    //                         gradientTransform="matrix(1 0 0 1 0 700)" gradientUnits="userSpaceOnUse">
    //                         <stop offset="0" style={{ stopColor: "#A91B37" }}></stop>
    //                         <stop offset="0.2857" style={{ stopColor: "#B21F37" }}></stop>
    //                         <stop offset="0.75" style={{ stopColor: "#CA2B38" }}></stop>
    //                         <stop offset="1" style={{ stopColor: "#DA3239" }}></stop>
    //                     </linearGradient>
    //                     <polygon fill="url(#SVGID_61_)" points="981.9,501.8 981.9,579.1 1043.9,617 1043.9,543.9   "></polygon>
    //                     <linearGradient id="SVGID_62_" x1="1053.5" x2="1105.6" y1="-165.6" y2="-113.5"
    //                         gradientTransform="matrix(1 0 0 1 0 700)" gradientUnits="userSpaceOnUse">
    //                         <stop offset="0" style={{ stopColor: "#FF999F" }}></stop>
    //                         <stop offset="0.1701" style={{ stopColor: "#F27B85" }}></stop>
    //                         <stop offset="0.4158" style={{ stopColor: "#E35566" }}></stop>
    //                         <stop offset="0.6441" style={{ stopColor: "#D73A4F" }}></stop>
    //                         <stop offset="0.8458" style={{ stopColor: "#D02A41" }}></stop>
    //                         <stop offset="1" style={{ stopColor: "#CE243C" }}></stop>
    //                     </linearGradient>
    //                     <polygon fill="url(#SVGID_62_)" points="1044,543.9 1044,617 1113,579.1 1113,501.8   "></polygon>
    //                     <linearGradient id="SVGID_63_" x1="1028.0559" x2="1069.1415" y1="-167.8673" y2="-232.1857"
    //                         gradientTransform="matrix(1 0 0 1 0 700)" gradientUnits="userSpaceOnUse">
    //                         <stop offset="0" style={{ stopColor: "#E64852" }}></stop>
    //                         <stop offset="5.850000e-02" style={{ stopColor: "#E44550" }}></stop>
    //                         <stop offset="0.6415" style={{ stopColor: "#D42D41" }}></stop>
    //                         <stop offset="1" style={{ stopColor: "#CE243C" }}></stop>
    //                     </linearGradient>
    //                     <polygon fill="url(#SVGID_63_)" points="981.9,501.8 1043.7,543.9 1112.9,501.9 1048.9,461.3   "></polygon>
    //                     <g opacity="0.12">
    //                         <polygon fill="#FFFFFF" points="998,513 998,570.1 1044,598.2 1044,544.1    "></polygon>
    //                         <polygon fill="#FFFFFF" points="1094,513 1094,570.1 1044,598.2 1044,544.1    "></polygon>
    //                         <polygon fill="#FFFFFF" points="997.3,513 1043.9,544.1 1094.7,513 1047.1,483    "></polygon>
    //                     </g>
    //                     <linearGradient id="SVGID_64_" x1="1071.3" x2="1085.45" y1="-183.4" y2="-169.25"
    //                         gradientTransform="matrix(1 0 0 1 0 700)" gradientUnits="userSpaceOnUse">
    //                         <stop offset="0" style={{ stopColor: "#FFFFFF" }}></stop>
    //                         <stop offset="0.2713" style={{ stopColor: "#FDC8BA" }}></stop>
    //                         <stop offset="0.5184" style={{ stopColor: "#FB9C83" }}></stop>
    //                         <stop offset="0.7299" style={{ stopColor: "#F97C5B" }}></stop>
    //                         <stop offset="0.8974" style={{ stopColor: "#F86843" }}></stop>
    //                         <stop offset="1" style={{ stopColor: "#F8613A" }}></stop>
    //                     </linearGradient>
    //                     <polygon fill="url(#SVGID_64_)" points="1044,543.9 1044,545.4 1112.9,503.3 1112.8,502   "></polygon>
    //                     <linearGradient id="SVGID_65_" x1="4203.6616" x2="4214.3271" y1="-181.7386" y2="-171.0729"
    //                         gradientTransform="matrix(-1 0 0 1 5222 700)" gradientUnits="userSpaceOnUse">
    //                         <stop offset="0" style={{ stopColor: "#FFFFFF" }}></stop>
    //                         <stop offset="0.2713" style={{ stopColor: "#FDC8BA" }}></stop>
    //                         <stop offset="0.5184" style={{ stopColor: "#FB9C83" }}></stop>
    //                         <stop offset="0.7299" style={{ stopColor: "#F97C5B" }}></stop>
    //                         <stop offset="0.8974" style={{ stopColor: "#F86843" }}></stop>
    //                         <stop offset="1" style={{ stopColor: "#F8613A" }}></stop>
    //                     </linearGradient>
    //                     <polygon fill="url(#SVGID_65_)" points="1044,543.9 1044,545.4 982,503.3 982,501.8   "></polygon>
    //                     <linearGradient id="SVGID_66_" x1="1026.25" x2="1062.6" y1="-137.4501" y2="-101.0999"
    //                         gradientTransform="matrix(1 0 0 1 0 700)" gradientUnits="userSpaceOnUse">
    //                         <stop offset="0" style={{ stopColor: "#FFFFFF" }}></stop>
    //                         <stop offset="0.2713" style={{ stopColor: "#FDC8BA" }}></stop>
    //                         <stop offset="0.5184" style={{ stopColor: "#FB9C83" }}></stop>
    //                         <stop offset="0.7299" style={{ stopColor: "#F97C5B" }}></stop>
    //                         <stop offset="0.8974" style={{ stopColor: "#F86843" }}></stop>
    //                         <stop offset="1" style={{ stopColor: "#F8613A" }}></stop>
    //                     </linearGradient>
    //                     <polygon fill="url(#SVGID_66_)" points="1045,544.6 1044,544.8 1044,617 1045,616.5   "></polygon>
    //                 </g>
    //                 <g className="transition animate-[moveBlock_3s_infinite]">
    //                     <linearGradient id="SVGID_61_" x1="980.6068" x2="1042.6029" y1="-123.3163" y2="-156.4973"
    //                         gradientTransform="matrix(1 0 0 1 0 700)" gradientUnits="userSpaceOnUse">
    //                         <stop offset="0" style={{ stopColor: "#A91B37" }}></stop>
    //                         <stop offset="0.2857" style={{ stopColor: "#B21F37" }}></stop>
    //                         <stop offset="0.75" style={{ stopColor: "#CA2B38" }}></stop>
    //                         <stop offset="1" style={{ stopColor: "#DA3239" }}></stop>
    //                     </linearGradient>
    //                     <polygon fill="url(#SVGID_61_)" points="981.9,501.8 981.9,579.1 1043.9,617 1043.9,543.9   "></polygon>
    //                     <linearGradient id="SVGID_62_" x1="1053.5" x2="1105.6" y1="-165.6" y2="-113.5"
    //                         gradientTransform="matrix(1 0 0 1 0 700)" gradientUnits="userSpaceOnUse">
    //                         <stop offset="0" style={{ stopColor: "#FF999F" }}></stop>
    //                         <stop offset="0.1701" style={{ stopColor: "#F27B85" }}></stop>
    //                         <stop offset="0.4158" style={{ stopColor: "#E35566" }}></stop>
    //                         <stop offset="0.6441" style={{ stopColor: "#D73A4F" }}></stop>
    //                         <stop offset="0.8458" style={{ stopColor: "#D02A41" }}></stop>
    //                         <stop offset="1" style={{ stopColor: "#CE243C" }}></stop>
    //                     </linearGradient>
    //                     <polygon fill="url(#SVGID_62_)" points="1044,543.9 1044,617 1113,579.1 1113,501.8   "></polygon>
    //                     <linearGradient id="SVGID_63_" x1="1028.0559" x2="1069.1415" y1="-167.8673" y2="-232.1857"
    //                         gradientTransform="matrix(1 0 0 1 0 700)" gradientUnits="userSpaceOnUse">
    //                         <stop offset="0" style={{ stopColor: "#E64852" }}></stop>
    //                         <stop offset="5.850000e-02" style={{ stopColor: "#E44550" }}></stop>
    //                         <stop offset="0.6415" style={{ stopColor: "#D42D41" }}></stop>
    //                         <stop offset="1" style={{ stopColor: "#CE243C" }}></stop>
    //                     </linearGradient>
    //                     <polygon fill="url(#SVGID_63_)" points="981.9,501.8 1043.7,543.9 1112.9,501.9 1048.9,461.3   "></polygon>
    //                     <g opacity="0.12">
    //                         <polygon fill="#FFFFFF" points="998,513 998,570.1 1044,598.2 1044,544.1    "></polygon>
    //                         <polygon fill="#FFFFFF" points="1094,513 1094,570.1 1044,598.2 1044,544.1    "></polygon>
    //                         <polygon fill="#FFFFFF" points="997.3,513 1043.9,544.1 1094.7,513 1047.1,483    "></polygon>
    //                     </g>
    //                     <linearGradient id="SVGID_64_" x1="1071.3" x2="1085.45" y1="-183.4" y2="-169.25"
    //                         gradientTransform="matrix(1 0 0 1 0 700)" gradientUnits="userSpaceOnUse">
    //                         <stop offset="0" style={{ stopColor: "#FFFFFF" }}></stop>
    //                         <stop offset="0.2713" style={{ stopColor: "#FDC8BA" }}></stop>
    //                         <stop offset="0.5184" style={{ stopColor: "#FB9C83" }}></stop>
    //                         <stop offset="0.7299" style={{ stopColor: "#F97C5B" }}></stop>
    //                         <stop offset="0.8974" style={{ stopColor: "#F86843" }}></stop>
    //                         <stop offset="1" style={{ stopColor: "#F8613A" }}></stop>
    //                     </linearGradient>
    //                     <polygon fill="url(#SVGID_64_)" points="1044,543.9 1044,545.4 1112.9,503.3 1112.8,502   "></polygon>
    //                     <linearGradient id="SVGID_65_" x1="4203.6616" x2="4214.3271" y1="-181.7386" y2="-171.0729"
    //                         gradientTransform="matrix(-1 0 0 1 5222 700)" gradientUnits="userSpaceOnUse">
    //                         <stop offset="0" style={{ stopColor: "#FFFFFF" }}></stop>
    //                         <stop offset="0.2713" style={{ stopColor: "#FDC8BA" }}></stop>
    //                         <stop offset="0.5184" style={{ stopColor: "#FB9C83" }}></stop>
    //                         <stop offset="0.7299" style={{ stopColor: "#F97C5B" }}></stop>
    //                         <stop offset="0.8974" style={{ stopColor: "#F86843" }}></stop>
    //                         <stop offset="1" style={{ stopColor: "#F8613A" }}></stop>
    //                     </linearGradient>
    //                     <polygon fill="url(#SVGID_65_)" points="1044,543.9 1044,545.4 982,503.3 982,501.8   "></polygon>
    //                     <linearGradient id="SVGID_66_" x1="1026.25" x2="1062.6" y1="-137.4501" y2="-101.0999"
    //                         gradientTransform="matrix(1 0 0 1 0 700)" gradientUnits="userSpaceOnUse">
    //                         <stop offset="0" style={{ stopColor: "#FFFFFF" }}></stop>
    //                         <stop offset="0.2713" style={{ stopColor: "#FDC8BA" }}></stop>
    //                         <stop offset="0.5184" style={{ stopColor: "#FB9C83" }}></stop>
    //                         <stop offset="0.7299" style={{ stopColor: "#F97C5B" }}></stop>
    //                         <stop offset="0.8974" style={{ stopColor: "#F86843" }}></stop>
    //                         <stop offset="1" style={{ stopColor: "#F8613A" }}></stop>
    //                     </linearGradient>
    //                     <polygon fill="url(#SVGID_66_)" points="1045,544.6 1044,544.8 1044,617 1045,616.5   "></polygon>
    //                 </g>
    //             </g>
    //         </svg>
    //     </div>
    // )



    return (
        <div className="flex w-[50vw] sm:w-[35vw] max-w-[700px] justify-end overflow-visible hue-rotate-[320deg] saturate-[1.2] brightness-105">

            <div className="blockchainSVGOverlay"></div>

            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Layer_1" enableBackground="new 0 0 2000 1200"
                viewBox="823.9 273.3 608.1 437.7" width="100%">

                <g>
                    <line fill="none" stroke="#FF4D6B" strokeWidth="3.4927" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" x1="986" y1="577" x2="1430.3" y2="315.4"></line>
                    <line className="transition animate-[connectBlock_3s_infinite]" fill="none" stroke="#FF4D6B" strokeWidth="3.4927" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" x1="986" y1="577" x2="954" y2="598"></line>
                </g>

                <g className="transition [transform:translate3d(-477px,282px,0px)] animate-[appear_3s_infinite]">
                    <linearGradient id="SVGID_49_" x1="1299.6068" x2="1361.6029" y1="-311.3163" y2="-344.4973"
                        gradientTransform="matrix(1 0 0 1 0 700)" gradientUnits="userSpaceOnUse">
                        <stop offset="0" style={{ stopColor: "#A91B37" }}></stop>
                        <stop offset="0.2857" style={{ stopColor: "#B21F37" }}></stop>
                        <stop offset="0.75" style={{ stopColor: "#CA2B38" }}></stop>
                        <stop offset="1" style={{ stopColor: "#DA3239" }}></stop>
                    </linearGradient>
                    <polygon fill="url(#SVGID_49_)" points="1300.9,313.8 1300.9,391.1 1362.9,429 1362.9,355.9    "></polygon>
                    <linearGradient id="SVGID_50_" x1="1372.5" x2="1424.6" y1="-353.6" y2="-301.5"
                        gradientTransform="matrix(1 0 0 1 0 700)" gradientUnits="userSpaceOnUse">
                        <stop offset="0" style={{ stopColor: "#FF999F" }}></stop>
                        <stop offset="0.1701" style={{ stopColor: "#F27B85" }}></stop>
                        <stop offset="0.4158" style={{ stopColor: "#E35566" }}></stop>
                        <stop offset="0.6441" style={{ stopColor: "#D73A4F" }}></stop>
                        <stop offset="0.8458" style={{ stopColor: "#D02A41" }}></stop>
                        <stop offset="1" style={{ stopColor: "#CE243C" }}></stop>
                    </linearGradient>
                    <polygon fill="url(#SVGID_50_)" points="1363,355.9 1363,429 1432,391.1 1432,313.8    "></polygon>
                    <linearGradient id="SVGID_51_" x1="1347.0559" x2="1388.1415" y1="-355.8673" y2="-420.1857"
                        gradientTransform="matrix(1 0 0 1 0 700)" gradientUnits="userSpaceOnUse">
                        <stop offset="0" style={{ stopColor: "#E64852" }}></stop>
                        <stop offset="5.850000e-02" style={{ stopColor: "#E44550" }}></stop>
                        <stop offset="0.6415" style={{ stopColor: "#D42D41" }}></stop>
                        <stop offset="1" style={{ stopColor: "#CE243C" }}></stop>
                    </linearGradient>
                    <polygon fill="url(#SVGID_51_)" points="1300.9,313.8 1362.7,355.9 1431.9,313.9 1367.9,273.3    "></polygon>
                    <g opacity="0.12">
                        <polygon fill="#FFFFFF" points="1317,325 1317,382.1 1363,410.2 1363,356.1     "></polygon>
                        <polygon fill="#FFFFFF" points="1413,325 1413,382.1 1363,410.2 1363,356.1     "></polygon>
                        <polygon fill="#FFFFFF" points="1316.3,325 1362.9,356.1 1413.7,325 1366.1,295     "></polygon>
                    </g>
                    <linearGradient id="SVGID_52_" x1="1390.3" x2="1404.4501" y1="-371.4" y2="-357.25"
                        gradientTransform="matrix(1 0 0 1 0 700)" gradientUnits="userSpaceOnUse">
                        <stop offset="0" style={{ stopColor: "#FFFFFF" }}></stop>
                        <stop offset="0.2713" style={{ stopColor: "#FDC8BA" }}></stop>
                        <stop offset="0.5184" style={{ stopColor: "#FB9C83" }}></stop>
                        <stop offset="0.7299" style={{ stopColor: "#F97C5B" }}></stop>
                        <stop offset="0.8974" style={{ stopColor: "#F86843" }}></stop>
                        <stop offset="1" style={{ stopColor: "#F8613A" }}></stop>
                    </linearGradient>
                    <polygon fill="url(#SVGID_52_)" points="1363,355.9 1363,357.4 1431.9,315.3 1431.8,314    "></polygon>
                    <linearGradient id="SVGID_53_" x1="3884.6614" x2="3895.3269" y1="-369.7385" y2="-359.0731"
                        gradientTransform="matrix(-1 0 0 1 5222 700)" gradientUnits="userSpaceOnUse">
                        <stop offset="0" style={{ stopColor: "#FFFFFF" }}></stop>
                        <stop offset="0.2713" style={{ stopColor: "#FDC8BA" }}></stop>
                        <stop offset="0.5184" style={{ stopColor: "#FB9C83" }}></stop>
                        <stop offset="0.7299" style={{ stopColor: "#F97C5B" }}></stop>
                        <stop offset="0.8974" style={{ stopColor: "#F86843" }}></stop>
                        <stop offset="1" style={{ stopColor: "#F8613A" }}></stop>
                    </linearGradient>
                    <polygon fill="url(#SVGID_53_)" points="1363,355.9 1363,357.4 1301,315.3 1301,313.8    "></polygon>
                    <linearGradient id="SVGID_54_" x1="1345.25" x2="1381.6" y1="-325.4501" y2="-289.0999"
                        gradientTransform="matrix(1 0 0 1 0 700)" gradientUnits="userSpaceOnUse">
                        <stop offset="0" style={{ stopColor: "#FFFFFF" }}></stop>
                        <stop offset="0.2713" style={{ stopColor: "#FDC8BA" }}></stop>
                        <stop offset="0.5184" style={{ stopColor: "#FB9C83" }}></stop>
                        <stop offset="0.7299" style={{ stopColor: "#F97C5B" }}></stop>
                        <stop offset="0.8974" style={{ stopColor: "#F86843" }}></stop>
                        <stop offset="1" style={{ stopColor: "#F8613A" }}></stop>
                    </linearGradient>
                    <polygon fill="url(#SVGID_54_)" points="1364,356.6 1363,356.8 1363,429 1364,428.5    "></polygon>
                </g>
                <g>
                    <g className="transition animate-[moveBlock_3s_infinite]">
                        <linearGradient id="SVGID_49_" x1="1299.6068" x2="1361.6029" y1="-311.3163" y2="-344.4973"
                            gradientTransform="matrix(1 0 0 1 0 700)" gradientUnits="userSpaceOnUse">
                            <stop offset="0" style={{ stopColor: "#A91B37" }}></stop>
                            <stop offset="0.2857" style={{ stopColor: "#B21F37" }}></stop>
                            <stop offset="0.75" style={{ stopColor: "#CA2B38" }}></stop>
                            <stop offset="1" style={{ stopColor: "#DA3239" }}></stop>
                        </linearGradient>
                        <polygon fill="url(#SVGID_49_)" points="1300.9,313.8 1300.9,391.1 1362.9,429 1362.9,355.9   "></polygon>
                        <linearGradient id="SVGID_50_" x1="1372.5" x2="1424.6" y1="-353.6" y2="-301.5"
                            gradientTransform="matrix(1 0 0 1 0 700)" gradientUnits="userSpaceOnUse">
                            <stop offset="0" style={{ stopColor: "#FF999F" }}></stop>
                            <stop offset="0.1701" style={{ stopColor: "#F27B85" }}></stop>
                            <stop offset="0.4158" style={{ stopColor: "#E35566" }}></stop>
                            <stop offset="0.6441" style={{ stopColor: "#D73A4F" }}></stop>
                            <stop offset="0.8458" style={{ stopColor: "#D02A41" }}></stop>
                            <stop offset="1" style={{ stopColor: "#CE243C" }}></stop>
                        </linearGradient>
                        <polygon fill="url(#SVGID_50_)" points="1363,355.9 1363,429 1432,391.1 1432,313.8   "></polygon>
                        <linearGradient id="SVGID_51_" x1="1347.0559" x2="1388.1415" y1="-355.8673" y2="-420.1857"
                            gradientTransform="matrix(1 0 0 1 0 700)" gradientUnits="userSpaceOnUse">
                            <stop offset="0" style={{ stopColor: "#E64852" }}></stop>
                            <stop offset="5.850000e-02" style={{ stopColor: "#E44550" }}></stop>
                            <stop offset="0.6415" style={{ stopColor: "#D42D41" }}></stop>
                            <stop offset="1" style={{ stopColor: "#CE243C" }}></stop>
                        </linearGradient>
                        <polygon fill="url(#SVGID_51_)" points="1300.9,313.8 1362.7,355.9 1431.9,313.9 1367.9,273.3   "></polygon>
                        <g opacity="0.12">
                            <polygon fill="#FFFFFF" points="1317,325 1317,382.1 1363,410.2 1363,356.1    "></polygon>
                            <polygon fill="#FFFFFF" points="1413,325 1413,382.1 1363,410.2 1363,356.1    "></polygon>
                            <polygon fill="#FFFFFF" points="1316.3,325 1362.9,356.1 1413.7,325 1366.1,295    "></polygon>
                        </g>
                        <linearGradient id="SVGID_52_" x1="1390.3" x2="1404.4501" y1="-371.4" y2="-357.25"
                            gradientTransform="matrix(1 0 0 1 0 700)" gradientUnits="userSpaceOnUse">
                            <stop offset="0" style={{ stopColor: "#FFFFFF" }}></stop>
                            <stop offset="0.2713" style={{ stopColor: "#FDC8BA" }}></stop>
                            <stop offset="0.5184" style={{ stopColor: "#FB9C83" }}></stop>
                            <stop offset="0.7299" style={{ stopColor: "#F97C5B" }}></stop>
                            <stop offset="0.8974" style={{ stopColor: "#F86843" }}></stop>
                            <stop offset="1" style={{ stopColor: "#F8613A" }}></stop>
                        </linearGradient>
                        <polygon fill="url(#SVGID_52_)" points="1363,355.9 1363,357.4 1431.9,315.3 1431.8,314   "></polygon>
                        <linearGradient id="SVGID_53_" x1="3884.6614" x2="3895.3269" y1="-369.7385" y2="-359.0731"
                            gradientTransform="matrix(-1 0 0 1 5222 700)" gradientUnits="userSpaceOnUse">
                            <stop offset="0" style={{ stopColor: "#FFFFFF" }}></stop>
                            <stop offset="0.2713" style={{ stopColor: "#FDC8BA" }}></stop>
                            <stop offset="0.5184" style={{ stopColor: "#FB9C83" }}></stop>
                            <stop offset="0.7299" style={{ stopColor: "#F97C5B" }}></stop>
                            <stop offset="0.8974" style={{ stopColor: "#F86843" }}></stop>
                            <stop offset="1" style={{ stopColor: "#F8613A" }}></stop>
                        </linearGradient>
                        <polygon fill="url(#SVGID_53_)" points="1363,355.9 1363,357.4 1301,315.3 1301,313.8   "></polygon>
                        <linearGradient id="SVGID_54_" x1="1345.25" x2="1381.6" y1="-325.4501" y2="-289.0999"
                            gradientTransform="matrix(1 0 0 1 0 700)" gradientUnits="userSpaceOnUse">
                            <stop offset="0" style={{ stopColor: "#FFFFFF" }}></stop>
                            <stop offset="0.2713" style={{ stopColor: "#FDC8BA" }}></stop>
                            <stop offset="0.5184" style={{ stopColor: "#FB9C83" }}></stop>
                            <stop offset="0.7299" style={{ stopColor: "#F97C5B" }}></stop>
                            <stop offset="0.8974" style={{ stopColor: "#F86843" }}></stop>
                            <stop offset="1" style={{ stopColor: "#F8613A" }}></stop>
                        </linearGradient>
                        <polygon fill="url(#SVGID_54_)" points="1364,356.6 1363,356.8 1363,429 1364,428.5   "></polygon>
                    </g>
                    <g className="transition animate-[moveBlock_3s_infinite]">
                        <linearGradient id="SVGID_55_" x1="1141.6068" x2="1203.6029" y1="-217.3163" y2="-250.4973"
                            gradientTransform="matrix(1 0 0 1 0 700)" gradientUnits="userSpaceOnUse">
                            <stop offset="0" style={{ stopColor: "#A91B37" }}></stop>
                            <stop offset="0.2857" style={{ stopColor: "#B21F37" }}></stop>
                            <stop offset="0.75" style={{ stopColor: "#CA2B38" }}></stop>
                            <stop offset="1" style={{ stopColor: "#DA3239" }}></stop>
                        </linearGradient>
                        <polygon fill="url(#SVGID_55_)" points="1142.9,407.8 1142.9,485.1 1204.9,523 1204.9,449.9   "></polygon>
                        <linearGradient id="SVGID_56_" x1="1214.5" x2="1266.6" y1="-259.6" y2="-207.5"
                            gradientTransform="matrix(1 0 0 1 0 700)" gradientUnits="userSpaceOnUse">
                            <stop offset="0" style={{ stopColor: "#FF999F" }}></stop>
                            <stop offset="0.1701" style={{ stopColor: "#F27B85" }}></stop>
                            <stop offset="0.4158" style={{ stopColor: "#E35566" }}></stop>
                            <stop offset="0.6441" style={{ stopColor: "#D73A4F" }}></stop>
                            <stop offset="0.8458" style={{ stopColor: "#D02A41" }}></stop>
                            <stop offset="1" style={{ stopColor: "#CE243C" }}></stop>
                        </linearGradient>
                        <polygon fill="url(#SVGID_56_)" points="1205,449.9 1205,523 1274,485.1 1274,407.8   "></polygon>
                        <linearGradient id="SVGID_57_" x1="1189.0559" x2="1230.1415" y1="-261.8673" y2="-326.1857"
                            gradientTransform="matrix(1 0 0 1 0 700)" gradientUnits="userSpaceOnUse">
                            <stop offset="0" style={{ stopColor: "#E64852" }}></stop>
                            <stop offset="5.850000e-02" style={{ stopColor: "#E44550" }}></stop>
                            <stop offset="0.6415" style={{ stopColor: "#D42D41" }}></stop>
                            <stop offset="1" style={{ stopColor: "#CE243C" }}></stop>
                        </linearGradient>
                        <polygon fill="url(#SVGID_57_)" points="1142.9,407.8 1204.7,449.9 1273.9,407.9 1209.9,367.3   "></polygon>
                        <g opacity="0.12">
                            <polygon fill="#FFFFFF" points="1159,419 1159,476.1 1205,504.2 1205,450.1    "></polygon>
                            <polygon fill="#FFFFFF" points="1255,419 1255,476.1 1205,504.2 1205,450.1    "></polygon>
                            <polygon fill="#FFFFFF" points="1158.3,419 1204.9,450.1 1255.7,419 1208.1,389    "></polygon>
                        </g>
                        <linearGradient id="SVGID_58_" x1="1232.3" x2="1246.4501" y1="-277.4" y2="-263.25"
                            gradientTransform="matrix(1 0 0 1 0 700)" gradientUnits="userSpaceOnUse">
                            <stop offset="0" style={{ stopColor: "#FFFFFF" }}></stop>
                            <stop offset="0.2713" style={{ stopColor: "#FDC8BA" }}></stop>
                            <stop offset="0.5184" style={{ stopColor: "#FB9C83" }}></stop>
                            <stop offset="0.7299" style={{ stopColor: "#F97C5B" }}></stop>
                            <stop offset="0.8974" style={{ stopColor: "#F86843" }}></stop>
                            <stop offset="1" style={{ stopColor: "#F8613A" }}></stop>
                        </linearGradient>
                        <polygon fill="url(#SVGID_58_)" points="1205,449.9 1205,451.4 1273.9,409.3 1273.8,408   "></polygon>
                        <linearGradient id="SVGID_59_" x1="4042.6614" x2="4053.3269" y1="-275.7386" y2="-265.0729"
                            gradientTransform="matrix(-1 0 0 1 5222 700)" gradientUnits="userSpaceOnUse">
                            <stop offset="0" style={{ stopColor: "#FFFFFF" }}></stop>
                            <stop offset="0.2713" style={{ stopColor: "#FDC8BA" }}></stop>
                            <stop offset="0.5184" style={{ stopColor: "#FB9C83" }}></stop>
                            <stop offset="0.7299" style={{ stopColor: "#F97C5B" }}></stop>
                            <stop offset="0.8974" style={{ stopColor: "#F86843" }}></stop>
                            <stop offset="1" style={{ stopColor: "#F8613A" }}></stop>
                        </linearGradient>
                        <polygon fill="url(#SVGID_59_)" points="1205,449.9 1205,451.4 1143,409.3 1143,407.8   "></polygon>
                        <linearGradient id="SVGID_60_" x1="1187.25" x2="1223.6" y1="-231.4501" y2="-195.0999"
                            gradientTransform="matrix(1 0 0 1 0 700)" gradientUnits="userSpaceOnUse">
                            <stop offset="0" style={{ stopColor: "#FFFFFF" }}></stop>
                            <stop offset="0.2713" style={{ stopColor: "#FDC8BA" }}></stop>
                            <stop offset="0.5184" style={{ stopColor: "#FB9C83" }}></stop>
                            <stop offset="0.7299" style={{ stopColor: "#F97C5B" }}></stop>
                            <stop offset="0.8974" style={{ stopColor: "#F86843" }}></stop>
                            <stop offset="1" style={{ stopColor: "#F8613A" }}></stop>
                        </linearGradient>
                        <polygon fill="url(#SVGID_60_)" points="1206,450.6 1205,450.8 1205,523 1206,522.5   "></polygon>
                    </g>
                    <g className="transition animate-[moveBlock_3s_infinite]">
                        <linearGradient id="SVGID_61_" x1="980.6068" x2="1042.6029" y1="-123.3163" y2="-156.4973"
                            gradientTransform="matrix(1 0 0 1 0 700)" gradientUnits="userSpaceOnUse">
                            <stop offset="0" style={{ stopColor: "#A91B37" }}></stop>
                            <stop offset="0.2857" style={{ stopColor: "#B21F37" }}></stop>
                            <stop offset="0.75" style={{ stopColor: "#CA2B38" }}></stop>
                            <stop offset="1" style={{ stopColor: "#DA3239" }}></stop>
                        </linearGradient>
                        <polygon fill="url(#SVGID_61_)" points="981.9,501.8 981.9,579.1 1043.9,617 1043.9,543.9   "></polygon>
                        <linearGradient id="SVGID_62_" x1="1053.5" x2="1105.6" y1="-165.6" y2="-113.5"
                            gradientTransform="matrix(1 0 0 1 0 700)" gradientUnits="userSpaceOnUse">
                            <stop offset="0" style={{ stopColor: "#FF999F" }}></stop>
                            <stop offset="0.1701" style={{ stopColor: "#F27B85" }}></stop>
                            <stop offset="0.4158" style={{ stopColor: "#E35566" }}></stop>
                            <stop offset="0.6441" style={{ stopColor: "#D73A4F" }}></stop>
                            <stop offset="0.8458" style={{ stopColor: "#D02A41" }}></stop>
                            <stop offset="1" style={{ stopColor: "#CE243C" }}></stop>
                        </linearGradient>
                        <polygon fill="url(#SVGID_62_)" points="1044,543.9 1044,617 1113,579.1 1113,501.8   "></polygon>
                        <linearGradient id="SVGID_63_" x1="1028.0559" x2="1069.1415" y1="-167.8673" y2="-232.1857"
                            gradientTransform="matrix(1 0 0 1 0 700)" gradientUnits="userSpaceOnUse">
                            <stop offset="0" style={{ stopColor: "#E64852" }}></stop>
                            <stop offset="5.850000e-02" style={{ stopColor: "#E44550" }}></stop>
                            <stop offset="0.6415" style={{ stopColor: "#D42D41" }}></stop>
                            <stop offset="1" style={{ stopColor: "#CE243C" }}></stop>
                        </linearGradient>
                        <polygon fill="url(#SVGID_63_)" points="981.9,501.8 1043.7,543.9 1112.9,501.9 1048.9,461.3   "></polygon>
                        <g opacity="0.12">
                            <polygon fill="#FFFFFF" points="998,513 998,570.1 1044,598.2 1044,544.1    "></polygon>
                            <polygon fill="#FFFFFF" points="1094,513 1094,570.1 1044,598.2 1044,544.1    "></polygon>
                            <polygon fill="#FFFFFF" points="997.3,513 1043.9,544.1 1094.7,513 1047.1,483    "></polygon>
                        </g>
                        <linearGradient id="SVGID_64_" x1="1071.3" x2="1085.45" y1="-183.4" y2="-169.25"
                            gradientTransform="matrix(1 0 0 1 0 700)" gradientUnits="userSpaceOnUse">
                            <stop offset="0" style={{ stopColor: "#FFFFFF" }}></stop>
                            <stop offset="0.2713" style={{ stopColor: "#FDC8BA" }}></stop>
                            <stop offset="0.5184" style={{ stopColor: "#FB9C83" }}></stop>
                            <stop offset="0.7299" style={{ stopColor: "#F97C5B" }}></stop>
                            <stop offset="0.8974" style={{ stopColor: "#F86843" }}></stop>
                            <stop offset="1" style={{ stopColor: "#F8613A" }}></stop>
                        </linearGradient>
                        <polygon fill="url(#SVGID_64_)" points="1044,543.9 1044,545.4 1112.9,503.3 1112.8,502   "></polygon>
                        <linearGradient id="SVGID_65_" x1="4203.6616" x2="4214.3271" y1="-181.7386" y2="-171.0729"
                            gradientTransform="matrix(-1 0 0 1 5222 700)" gradientUnits="userSpaceOnUse">
                            <stop offset="0" style={{ stopColor: "#FFFFFF" }}></stop>
                            <stop offset="0.2713" style={{ stopColor: "#FDC8BA" }}></stop>
                            <stop offset="0.5184" style={{ stopColor: "#FB9C83" }}></stop>
                            <stop offset="0.7299" style={{ stopColor: "#F97C5B" }}></stop>
                            <stop offset="0.8974" style={{ stopColor: "#F86843" }}></stop>
                            <stop offset="1" style={{ stopColor: "#F8613A" }}></stop>
                        </linearGradient>
                        <polygon fill="url(#SVGID_65_)" points="1044,543.9 1044,545.4 982,503.3 982,501.8   "></polygon>
                        <linearGradient id="SVGID_66_" x1="1026.25" x2="1062.6" y1="-137.4501" y2="-101.0999"
                            gradientTransform="matrix(1 0 0 1 0 700)" gradientUnits="userSpaceOnUse">
                            <stop offset="0" style={{ stopColor: "#FFFFFF" }}></stop>
                            <stop offset="0.2713" style={{ stopColor: "#FDC8BA" }}></stop>
                            <stop offset="0.5184" style={{ stopColor: "#FB9C83" }}></stop>
                            <stop offset="0.7299" style={{ stopColor: "#F97C5B" }}></stop>
                            <stop offset="0.8974" style={{ stopColor: "#F86843" }}></stop>
                            <stop offset="1" style={{ stopColor: "#F8613A" }}></stop>
                        </linearGradient>
                        <polygon fill="url(#SVGID_66_)" points="1045,544.6 1044,544.8 1044,617 1045,616.5   "></polygon>
                    </g>
                    <g className="transition animate-[moveBlockFirst_3s_infinite]">
                        <linearGradient id="SVGID_67_" x1="822.6068" x2="884.603" y1="-29.3163" y2="-62.4973"
                            gradientTransform="matrix(1 0 0 1 0 700)" gradientUnits="userSpaceOnUse">
                            <stop offset="0" style={{ stopColor: "#A91B37" }}></stop>
                            <stop offset="0.2857" style={{ stopColor: "#B21F37" }}></stop>
                            <stop offset="0.75" style={{ stopColor: "#CA2B38" }}></stop>
                            <stop offset="1" style={{ stopColor: "#DA3239" }}></stop>
                        </linearGradient>
                        <polygon fill="url(#SVGID_67_)" points="823.9,595.8 823.9,673.1 885.9,711 885.9,637.9   "></polygon>
                        <linearGradient id="SVGID_68_" x1="895.5" x2="947.6" y1="-71.6" y2="-19.5"
                            gradientTransform="matrix(1 0 0 1 0 700)" gradientUnits="userSpaceOnUse">
                            <stop offset="0" style={{ stopColor: "#FF999F" }}></stop>
                            <stop offset="0.1701" style={{ stopColor: "#F27B85" }}></stop>
                            <stop offset="0.4158" style={{ stopColor: "#E35566" }}></stop>
                            <stop offset="0.6441" style={{ stopColor: "#D73A4F" }}></stop>
                            <stop offset="0.8458" style={{ stopColor: "#D02A41" }}></stop>
                            <stop offset="1" style={{ stopColor: "#CE243C" }}></stop>
                        </linearGradient>
                        <polygon fill="url(#SVGID_68_)" points="886,637.9 886,711 955,673.1 955,595.8   "></polygon>
                        <linearGradient id="SVGID_69_" x1="870.056" x2="911.1414" y1="-73.8674" y2="-138.1857"
                            gradientTransform="matrix(1 0 0 1 0 700)" gradientUnits="userSpaceOnUse">
                            <stop offset="0" style={{ stopColor: "#E64852" }}></stop>
                            <stop offset="5.850000e-02" style={{ stopColor: "#E44550" }}></stop>
                            <stop offset="0.6415" style={{ stopColor: "#D42D41" }}></stop>
                            <stop offset="1" style={{ stopColor: "#CE243C" }}></stop>
                        </linearGradient>
                        <polygon fill="url(#SVGID_69_)" points="823.9,595.8 885.7,637.9 954.9,595.9 890.9,555.3   "></polygon>
                        <g opacity="0.12">
                            <polygon fill="#FFFFFF" points="840,607 840,664.1 886,692.2 886,638.1    "></polygon>
                            <polygon fill="#FFFFFF" points="936,607 936,664.1 886,692.2 886,638.1    "></polygon>
                            <polygon fill="#FFFFFF" points="839.3,607 885.9,638.1 936.7,607 889.1,577    "></polygon>
                        </g>
                        <linearGradient id="SVGID_70_" x1="913.3002" x2="927.4498" y1="-89.3999" y2="-75.2501"
                            gradientTransform="matrix(1 0 0 1 0 700)" gradientUnits="userSpaceOnUse">
                            <stop offset="0" style={{ stopColor: "#FFFFFF" }}></stop>
                            <stop offset="0.2713" style={{ stopColor: "#FDC8BA" }}></stop>
                            <stop offset="0.5184" style={{ stopColor: "#FB9C83" }}></stop>
                            <stop offset="0.7299" style={{ stopColor: "#F97C5B" }}></stop>
                            <stop offset="0.8974" style={{ stopColor: "#F86843" }}></stop>
                            <stop offset="1" style={{ stopColor: "#F8613A" }}></stop>
                        </linearGradient>
                        <polygon fill="url(#SVGID_70_)" points="886,637.9 886,639.4 954.9,597.3 954.8,596   "></polygon>
                        <linearGradient id="SVGID_71_" x1="4361.6616" x2="4372.3271" y1="-87.7386" y2="-77.0729"
                            gradientTransform="matrix(-1 0 0 1 5222 700)" gradientUnits="userSpaceOnUse">
                            <stop offset="0" style={{ stopColor: "#FFFFFF" }}></stop>
                            <stop offset="0.2713" style={{ stopColor: "#FDC8BA" }}></stop>
                            <stop offset="0.5184" style={{ stopColor: "#FB9C83" }}></stop>
                            <stop offset="0.7299" style={{ stopColor: "#F97C5B" }}></stop>
                            <stop offset="0.8974" style={{ stopColor: "#F86843" }}></stop>
                            <stop offset="1" style={{ stopColor: "#F8613A" }}></stop>
                        </linearGradient>
                        <polygon fill="url(#SVGID_71_)" points="886,637.9 886,639.4 824,597.3 824,595.8   "></polygon>
                        <linearGradient id="SVGID_72_" x1="868.25" x2="904.6" y1="-43.4501" y2="-7.0999"
                            gradientTransform="matrix(1 0 0 1 0 700)" gradientUnits="userSpaceOnUse">
                            <stop offset="0" style={{ stopColor: "#FFFFFF" }}></stop>
                            <stop offset="0.2713" style={{ stopColor: "#FDC8BA" }}></stop>
                            <stop offset="0.5184" style={{ stopColor: "#FB9C83" }}></stop>
                            <stop offset="0.7299" style={{ stopColor: "#F97C5B" }}></stop>
                            <stop offset="0.8974" style={{ stopColor: "#F86843" }}></stop>
                            <stop offset="1" style={{ stopColor: "#F8613A" }}></stop>
                        </linearGradient>
                        <polygon fill="url(#SVGID_72_)" points="887,638.6 886,638.8 886,711 887,710.5   "></polygon>
                    </g>
                </g>
            </svg>
        </div>
    )
}