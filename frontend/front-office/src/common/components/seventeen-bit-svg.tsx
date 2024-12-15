import { SvgIcon, SvgIconProps } from "@mui/material";
import { FC } from "react";

export const SeventeenBitSvg: FC<SvgIconProps> = (props) => {
  return (
    <SvgIcon
      {...props}
      //original
      //viewBox="0 0 900.000000 900.000000"

      // Scaled viewBox
      viewBox="0 0 24 24"
      aria-label="Seventeen Bit svg icon"
    >
      <g
        // original (works)
        //transform="translate(0.000000,900.000000) scale(0.100000,-0.100000)"

        // scaled
        transform="translate(0.000000,24.000000) scale(0.002667,-0.002667)" // Divide by 900 to scale to 24x24
        fill="currentColor"
        stroke="none"
      >
        <path
          d="M4265 8604 c-191 -105 -724 -406 -1050 -592 -71 -41 -227 -128 -345
-194 -190 -107 -487 -277 -850 -488 -163 -95 -584 -334 -935 -533 -165 -93
-307 -175 -315 -183 -13 -13 -15 -265 -18 -2127 -2 -1720 -1 -2115 10 -2129 7
-10 81 -53 163 -96 191 -99 368 -197 890 -492 483 -273 978 -551 1245 -700
220 -123 545 -311 615 -355 56 -36 121 -73 449 -257 291 -164 361 -199 381
-192 9 4 82 45 163 91 701 404 1759 1005 2012 1143 63 35 203 114 310 175 519
300 902 514 1107 620 62 32 120 67 130 77 17 19 18 122 21 2127 l2 2106 -407
230 c-225 126 -610 345 -858 486 -482 274 -510 290 -1360 776 -796 455 -1102
623 -1132 623 -10 0 -112 -52 -228 -116z m287 -218 c29 -18 226 -131 438 -251
580 -328 843 -479 1195 -685 518 -303 1604 -925 1688 -966 l77 -38 0 -1456 c0
-800 -3 -1680 -7 -1955 l-7 -500 -81 -41 c-44 -22 -370 -206 -725 -409 -355
-203 -791 -450 -970 -550 -422 -236 -1097 -616 -1181 -666 -79 -46 -480 -269
-485 -269 -1 0 -54 27 -116 61 -62 34 -189 102 -283 152 -145 77 -414 229
-1050 595 -71 41 -209 116 -305 167 -96 51 -224 120 -285 155 -60 34 -141 79
-180 100 -38 20 -124 70 -190 110 -208 126 -884 509 -1024 580 l-43 22 4 1945
c4 1918 4 1946 23 1960 11 8 295 170 630 362 559 318 1035 598 1209 709 38 24
155 90 261 147 106 57 230 128 276 158 91 59 508 292 839 469 113 60 209 114
215 119 14 14 20 12 77 -25z"
        />
        <path
          d="M4410 7788 c-47 -28 -211 -122 -365 -208 -397 -223 -1112 -632 -1542
-883 -658 -383 -867 -504 -909 -525 -41 -21 -41 -21 -47 -89 -4 -37 -7 -780
-7 -1650 l0 -1582 117 -70 c65 -38 294 -167 508 -286 793 -444 1278 -717 1575
-890 273 -159 565 -322 701 -391 l50 -25 302 174 c373 215 783 447 1067 602
406 222 699 387 1265 713 149 85 278 162 287 170 16 13 17 118 16 1653 -1
1490 -2 1640 -17 1653 -9 7 -169 102 -356 209 -187 107 -428 246 -535 307
-107 62 -566 325 -1020 585 -726 416 -903 518 -985 571 -18 11 -30 6 -105 -38z
m265 -367 c94 -52 361 -203 595 -336 234 -133 457 -259 495 -280 39 -21 214
-121 390 -223 176 -102 451 -261 612 -352 161 -92 290 -169 288 -171 -2 -3 -9
-619 -15 -1369 -5 -751 -13 -1400 -17 -1442 l-6 -77 -42 24 c-23 14 -54 25
-68 25 l-27 0 0 343 c0 188 -3 779 -6 1312 -3 534 -5 997 -5 1030 l0 60 -67
39 c-37 21 -150 85 -252 143 -102 58 -302 172 -445 253 -143 81 -336 189 -430
240 -93 51 -242 134 -330 185 -88 51 -212 120 -275 155 -63 34 -160 90 -215
123 -55 33 -146 85 -202 114 -143 74 -170 73 -329 -6 -66 -32 -159 -82 -209
-111 -247 -143 -534 -306 -855 -485 -488 -272 -987 -553 -1035 -583 -22 -14
-76 -45 -119 -68 l-80 -43 2 -683 c1 -376 -2 -822 -8 -993 -22 -631 -24 -936
-7 -983 l15 -44 -46 -31 c-52 -35 -119 -99 -145 -136 -9 -14 -20 -21 -24 -17
-5 4 -10 673 -11 1486 l-4 1477 84 50 c45 27 135 78 198 113 63 35 171 95 240
135 69 40 303 174 520 297 217 124 523 299 680 390 157 90 425 242 595 337
171 95 321 181 335 191 13 10 31 15 40 12 8 -3 92 -48 185 -101z m1554 -1567
c2 -1 -35 -70 -82 -151 -80 -141 -328 -606 -415 -779 -52 -104 -110 -170 -181
-209 -231 -123 -246 -133 -228 -152 6 -5 65 17 97 37 8 6 55 31 105 56 106 55
179 67 237 40 51 -25 190 -138 491 -402 l37 -33 0 -333 0 -334 -28 -45 c-16
-24 -78 -98 -138 -163 -172 -188 -234 -259 -251 -287 l-16 -27 -261 -7 c-250
-7 -1307 8 -1563 21 -80 5 -123 11 -123 18 0 6 32 70 71 141 39 72 114 209
166 305 106 195 317 577 428 775 40 72 123 225 185 340 139 259 193 354 242
426 21 31 38 60 38 65 0 10 112 87 160 110 8 4 17 10 20 14 6 8 176 91 187 92
4 0 24 14 44 32 19 17 44 37 55 43 10 7 -10 -1 -44 -16 -35 -16 -66 -32 -70
-35 -3 -3 -12 -6 -20 -6 -8 0 -54 -19 -101 -43 -47 -24 -113 -51 -146 -61 -33
-10 -71 -23 -85 -29 -14 -5 -153 -13 -310 -18 -424 -11 -471 -16 -574 -50 -48
-16 -112 -45 -141 -64 -28 -19 -55 -35 -58 -35 -9 0 -16 151 -21 467 l-6 303
1003 3 c914 3 1286 0 1296 -9z m-2694 -5 c2 -3 1 -624 -2 -1381 l-6 -1376
-166 -7 c-160 -7 -479 0 -491 11 -11 11 -12 1908 -1 1944 11 36 23 45 131 103
30 16 62 35 70 42 17 15 134 70 136 64 1 -2 19 12 41 31 22 19 48 41 59 48 10
7 1 4 -21 -7 -22 -10 -58 -26 -80 -35 -22 -10 -83 -37 -135 -61 -102 -47 -176
-77 -200 -80 -8 -1 -23 -6 -32 -10 -13 -5 -36 9 -86 54 -38 34 -111 94 -163
134 -62 48 -94 80 -94 93 0 19 75 74 292 211 54 34 145 97 203 140 88 65 113
79 155 85 53 6 382 4 390 -3z m-1324 -2712 c42 -25 150 -82 240 -127 90 -46
515 -277 944 -515 815 -451 976 -539 1061 -575 l52 -21 133 71 c74 40 260 143
414 230 154 86 368 206 475 265 107 59 265 147 350 195 85 48 304 167 485 265
182 97 356 193 388 212 68 41 72 40 162 -28 51 -39 67 -59 46 -59 -5 0 -57
-30 -117 -66 -60 -36 -163 -96 -229 -132 -226 -123 -930 -514 -940 -522 -5 -4
-120 -68 -255 -142 -135 -74 -345 -192 -467 -261 -122 -69 -276 -153 -342
-186 l-121 -61 -162 86 c-90 48 -264 145 -388 217 -299 172 -855 480 -1395
772 -454 245 -525 287 -525 309 0 7 18 27 40 45 22 17 40 38 40 44 0 15 20 38
29 33 3 -2 40 -24 82 -49z"
        />
        <path
          d="M5308 4142 l-148 -3 -20 -37 c-11 -20 -24 -44 -29 -52 -9 -14 -212
-405 -219 -422 -2 -5 138 -8 311 -8 308 0 316 1 357 23 24 12 53 38 66 57 32
49 67 186 59 229 -16 83 -86 176 -150 199 -45 16 -67 17 -227 14z"
        />
      </g>
    </SvgIcon>
  );
};
