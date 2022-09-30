import React, { useEffect } from 'react'
import { useState } from 'react';
import { Grade } from './Grade';
export const Home = () => {

    const [user, setUser] = useState({ department: '', semester: '' })

    const data = {
        //department:
        BSEB: {
            first: [
                { course: 'CH101', credit: 8 },
                { course: 'CH110', credit: 3 },
                { course: 'EE101', credit: 8 },
                { course: 'MA101', credit: 8 },
                { course: 'CE101', credit: 7 },
                { course: 'PH101', credit: 6 },
                { course: 'ME110/PH110', credit: 3 }
            ],
            second: [
                { course: 'BT101', credit: 6 },
                { course: 'CS101', credit: 6 },
                { course: 'CS110', credit: 3 },
                { course: 'EE102', credit: 3 },
                { course: 'MA102', credit: 8 },
                { course: 'ME101', credit: 8 },
                { course: 'PH102', credit: 6 },
                { course: 'ME110/PH110', credit: 3 }
            ],
            third: [
                { course: 'MA102', credit: 8 },
                { course: 'BT201', credit: 6 },
                { course: 'BT202', credit: 6 },
                { course: 'BT203', credit: 6 },
                { course: 'BT204', credit: 6 },
                { course: 'BT205', credit: 6 },
            ],
            fourth: [
                { course: 'BT206', credit: 6 },
                { course: 'BT207', credit: 6 },
                { course: 'BT208', credit: 8 },
                { course: 'BT209', credit: 6 },
                { course: 'BT211', credit: 6 },
                { course: 'HSS', credit: 6 },
            ],
            fifth: [
                { course: 'BT301', credit: 6 },
                { course: 'BT302', credit: 6 },
                { course: 'BT303', credit: 6 },
                { course: 'BT304', credit: 6 },
                { course: 'BT311', credit: 6 },
                { course: 'BT312', credit: 6 },
                { course: 'HSS', credit: 6 },
            ],
            sixth: [
                { course: 'BT305', credit: 6 },
                { course: 'BT306', credit: 8 },
                { course: 'BT307', credit: 6 },
                { course: 'BT308', credit: 6 },
                { course: 'Open Elective I', credit: 6 },
                { course: 'Dept. Elective I', credit: 6 },
            ],
            seventh: [
                { course: 'Dept. Elective II', credit: 6 },
                { course: 'Dept. Elective III', credit: 6 },
                { course: 'Open Elective II', credit: 6 },
                { course: 'Open Elevtive III', credit: 6 },
                { course: 'BTP-I', credit: 6 },
                { course: 'HSS', credit: 6 },
            ],
            eighth: [
                { course: 'Dept. Elective IV', credit: 6 },
                { course: 'Dept. Elective V', credit: 6 },
                { course: 'Dept. Elective Vi', credit: 6 },
                { course: 'Open Elective VI', credit: 6 },
                { course: 'BTP-II', credit: 6 },
                { course: 'HSS', credit: 6 },
            ],
            cumulative_credit: [43, 86, 124, 162, 204, 242, 278, 314]

        },
        ChE: {
            first: [
                { course: 'CH101', credit: 8 },
                { course: 'CH110', credit: 3 },
                { course: 'EE101', credit: 8 },
                { course: 'MA101', credit: 8 },
                { course: 'CE101', credit: 7 },
                { course: 'PH101', credit: 6 },
                { course: 'ME110/PH110', credit: 3 }
            ],
            second: [
                { course: 'BT101', credit: 6 },
                { course: 'CS101', credit: 6 },
                { course: 'CS110', credit: 3 },
                { course: 'EE102', credit: 3 },
                { course: 'MA102', credit: 8 },
                { course: 'ME101', credit: 8 },
                { course: 'PH102', credit: 6 },
                { course: 'ME110/PH110', credit: 3 }
            ],
            third: [
                { course: 'MA201', credit: 8 },
                { course: 'ME212', credit: 6 },
                { course: 'CL201', credit: 6 },
                { course: 'CL202', credit: 6 },
                { course: 'CL203', credit: 8 },
                { course: 'CL204', credit: 6 }
            ],
            fourth: [
                { course: 'CL205', credit: 8 },
                { course: 'CL206', credit: 6 },
                { course: 'CL207', credit: 8 },
                { course: 'CL208', credit: 6 },
                { course: 'CL209', credit: 5 },
                { course: 'CL210H', credit: 1.5 },
                { course: 'CL211H', credit: 1.5 },
                { course: 'HSS', credit: 6 }
            ],
            fifth: [
                { course: 'CL301', credit: 8 },
                { course: 'CL302', credit: 6 },
                { course: 'CL303', credit: 8 },
                { course: 'Open Elective', credit: 6 },
                { course: 'CL310', credit: 3 },
                { course: 'CL311', credit: 2 },
                { course: 'HSS', credit: 6 }
            ],
            sixth: [
                { course: 'CL304', credit: 6 },
                { course: 'CL305', credit: 6 },
                { course: 'CL306', credit: 6 },
                { course: 'CL312', credit: 3 },
                { course: 'CL313', credit: 3 },
                { course: 'CL314H', credit: 1.5 },
                { course: 'CL315H', credit: 1.5 },
                { course: 'Open Elective', credit: 6 },
                { course: 'Dept. Elective I', credit: 6 }
            ],
            seventh: [
                { course: 'Dept. Elective II', credit: 6 },
                { course: 'Dept. Elevtive III', credit: 6 },
                { course: 'BTP I', credit: 12 },
                { course: 'Dept. Elective IV', credit: 6 },
                { course: 'Dept. Elective V', credit: 6 },
                { course: 'Open Elective', credit: 6 },
                { course: 'HSS', credit: 6 }
            ],
            eighth: [
                { course: 'Dept Elective VI', credit: 6 },
                { course: 'Dept Elective VII', credit: 6 },
                { course: 'BTP II', credit: 12 },
                { course: 'Dept Elective VIII', credit: 6 },
                { course: 'Dept Elective IX', credit: 6 },
                { course: 'Open Elevtive', credit: 6 },
                { course: 'HSS', credit: 6 }
            ],
            cumulative_credit: [43, 86, 126, 168, 207, 246, 282, 318]

        },
        CST: {
            first: [
                { course: 'CH101', credit: 8 },
                { course: 'CH110', credit: 3 },
                { course: 'EE101', credit: 8 },
                { course: 'MA101', credit: 8 },
                { course: 'CE101', credit: 7 },
                { course: 'PH101', credit: 6 },
                { course: 'ME110/PH110', credit: 3 }
            ],
            second: [
                { course: 'CH101', credit: 8 },
                { course: 'CH110', credit: 3 },
                { course: 'EE101', credit: 8 },
                { course: 'MA101', credit: 8 },
                { course: 'CE101', credit: 7 },
                { course: 'PH101', credit: 6 },
                { course: 'ME110/PH110', credit: 3 }
            ],
            third: [
                { course: 'MA201', credit: 8 },
                { course: 'CH212', credit: 6 },
                { course: 'CH212', credit: 8 },
                { course: 'CH231', credit: 6 },
                { course: 'CL201', credit: 6 },
                { course: 'CL202', credit: 6 },
            ],
            fourth: [
                { course: 'CH222', credit: 6 },
                { course: 'Group Theory', credit: 6 },
                { course: 'CH211', credit: 6 },
                { course: 'CH233', credit: 6 },
                { course: 'CH223', credit: 6 },
                { course: 'HSS', credit: 6 },
            ],
            fifth: [
                { course: 'Open Elective I', credit: 6 },
                { course: 'CH302', credit: 3 },
                { course: 'CH301', credit: 6 },
                { course: 'CH316', credit: 6 },
                { course: 'CH331', credit: 6 },
                { course: 'CH314', credit: 6 },
                { course: 'HSS', credit: 6 }
            ],
            sixth: [
                { course: 'CH332', credit: 6 },
                { course: 'CH335', credit: 6 },
                { course: 'CH323', credit: 6 },
                { course: 'CH334', credit: 6 },
                { course: 'Open Eelective II', credit: 6 },
            ],
            seventh: [
                { course: 'CH401', credit: 6 },
                { course: 'BTP I', credit: 12 },
                { course: 'Dept. Elective I', credit: 6 },
                { course: 'Open Elective III', credit: 6 },
                { course: 'HSS', credit: 6 },
            ],
            eighth: [
                { course: 'Dept. Elective III', credit: 6 },
                { course: 'BTP II', credit: 12 },
                { course: 'Dept. Elective IV', credit: 6 },
                { course: 'Dept. Elective V', credit: 6 },
                { course: 'Open Elective IV', credit: 6 },
                { course: 'HSS', credit: 6 },
            ],
            cumulative_credit: [43, 86, 126, 162, 201, 231, 267, 309]

        },
        CE: {
            first: [
                { course: 'CH101', credit: 8 },
                { course: 'CH110', credit: 3 },
                { course: 'EE101', credit: 8 },
                { course: 'MA101', credit: 8 },
                { course: 'CE101', credit: 7 },
                { course: 'PH101', credit: 6 },
                { course: 'ME110/PH110', credit: 3 }
            ],
            second: [
                { course: 'CH101', credit: 8 },
                { course: 'CH110', credit: 3 },
                { course: 'EE101', credit: 8 },
                { course: 'MA101', credit: 8 },
                { course: 'CE101', credit: 7 },
                { course: 'PH101', credit: 6 },
                { course: 'ME110/PH110', credit: 3 }
            ],
            third: [
                { course: 'MA201', credit: 8 },
                { course: 'CE202', credit: 8 },
                { course: 'CE211', credit: 6 },
                { course: 'CE212', credit: 3 },
                { course: 'CE203', credit: 6 },
                { course: 'CE214', credit: 2 },
                { course: 'CE207', credit: 6 },
                { course: 'CE208', credit: 2 }
            ],
            fourth: [
                { course: 'CE205', credit: 6 },
                { course: 'CE201', credit: 6 },
                { course: 'CE213', credit: 2 },
                { course: 'CE206', credit: 6 },
                { course: 'CE215', credit: 2 },
                { course: 'CE222', credit: 6 },
                { course: 'CE223', credit: 2 },
                { course: 'CE220', credit: 6 },
                { course: 'CE221', credit: 2 },
                { course: 'HSS', credit: 6 }
            ],
            fifth: [
                { course: 'CE302', credit: 8 },
                { course: 'Ce305', credit: 8 },
                { course: 'CE303', credit: 6 },
                { course: 'CE313', credit: 2 },
                { course: 'CE304', credit: 6 },
                { course: 'CE314', credit: 2 },
                { course: 'CE316', credit: 6 },
                { course: 'HSS', credit: 6 },
            ],
            sixth: [
                { course: 'CE308', credit: 6 },
                { course: 'CE309', credit: 8 },
                { course: 'CE322', credit: 6 },
                { course: 'CE323', credit: 2 },
                { course: 'CE320', credit: 6 },
                { course: 'CE321', credit: 2 },
                { course: 'CE324', credit: 8 }
            ],
            seventh: [
                { course: 'BTP I', credit: 6 },
                { course: 'CE402', credit: 5 },
                { course: 'Dept. Ele. I', credit: 6 },
                { course: 'Dept. Ele. II', credit: 6 },
                { course: 'Open Ele.', credit: 6 },
                { course: 'Hss', credit: 6 },
            ],
            eighth: [
                { course: 'BTP II', credit: 6 },
                { course: 'Dept. Ele. I', credit: 6 },
                { course: 'Dept. Ele. II', credit: 6 },
                { course: 'Open Ele. ', credit: 6 },
                { course: 'General Course-II', credit: 4 },
                { course: 'HSS', credit: 6 }
            ],
            cumulative_credit: [43, 86, 127, 171, 215, 253, 288, 318]

        },
        CSE: {
            first: [
                { course: 'CH101', credit: 8 },
                { course: 'CH110', credit: 3 },
                { course: 'EE101', credit: 8 },
                { course: 'MA101', credit: 8 },
                { course: 'CE101', credit: 7 },
                { course: 'PH101', credit: 6 },
                { course: 'ME110/PH110', credit: 3 }
            ],
            second: [
                { course: 'CH101', credit: 8 },
                { course: 'CH110', credit: 3 },
                { course: 'EE101', credit: 8 },
                { course: 'MA101', credit: 8 },
                { course: 'CE101', credit: 7 },
                { course: 'PH101', credit: 6 },
                { course: 'ME110/PH110', credit: 3 }
            ],
            third: [
                { course: 'MA222', credit: 6 },
                { course: 'MA225', credit: 8 },
                { course: 'CS201', credit: 6 },
                { course: 'CS203', credit: 6 },
                { course: 'CS204', credit: 5 },
                { course: 'CS221', credit: 6 },
                { course: 'CS242', credit: 5 }
            ],
            fourth: [
                { course: 'CS205', credit: 6 },
                { course: 'CS207', credit: 6 },
                { course: 'CS223', credit: 6 },
                { course: 'CS224', credit: 6 },
                { course: 'CS245', credit: 6 },
                { course: 'CS246', credit: 4 },
                { course: 'HSS', credit: 6 }
            ],
            fifth: [
                { course: 'MA321', credit: 6 },
                { course: 'CS341', credit: 6 },
                { course: 'CS342', credit: 4 },
                { course: 'CS343', credit: 6 },
                { course: 'CS344', credit: 4 },
                { course: 'Dept. Ele.', credit: 6 },
                { course: 'HSS', credit: 6 },
            ],
            sixth: [
                { course: 'CS345', credit: 4 },
                { course: 'CS346', credit: 3 },
                { course: 'CS348', credit: 7 },
                { course: 'CS361', credit: 6 },
                { course: 'Dept. Ele. I', credit: 6 },
                { course: 'Dept. Ele. II', credit: 6 },
                { course: 'Dept. Ele. III', credit: 5 }
            ],
            seventh: [
                { course: 'Open Ele. I', credit: 6 },
                { course: 'Dept/Open Ele. I', credit: 6 },
                { course: 'Dept. Ele II', credit: 6 },
                { course: 'Dept. Ele III', credit: 6 },
                { course: 'Dept. Ele IV', credit: 6 },
                { course: 'BTP I', credit: 12 },
                { course: 'HSS', credit: 6 }
            ],
            eighth: [
                { course: 'Open Ele. I', credit: 6 },
                { course: 'Open Ele. II', credit: 6 },
                { course: 'Dept. Ele. I', credit: 6 },
                { course: 'Dept. Ele. II', credit: 6 },
                { course: 'Dept. Ele. III', credit: 6 },
                { course: 'BTP II', credit: 12 },
                { course: 'HSS', credit: 6 }
            ],
            cumulative_credit: [43, 86, 128, 168, 206, 243, 279, 315]

        },
        EE: {
            first: [
                { course: 'CH101', credit: 8 },
                { course: 'CH110', credit: 3 },
                { course: 'EE101', credit: 8 },
                { course: 'MA101', credit: 8 },
                { course: 'CE101', credit: 7 },
                { course: 'PH101', credit: 6 },
                { course: 'ME110/PH110', credit: 3 }
            ],
            second: [
                { course: 'CH101', credit: 8 },
                { course: 'CH110', credit: 3 },
                { course: 'EE101', credit: 8 },
                { course: 'MA101', credit: 8 },
                { course: 'CE101', credit: 7 },
                { course: 'PH101', credit: 6 },
                { course: 'ME110/PH110', credit: 3 }
            ],
            third: [
                { course: 'MA201', credit: 8 },
                { course: 'EE203', credit: 6 },
                { course: 'EE205', credit: 8 },
                { course: 'EE210', credit: 6 },
                { course: 'EE211', credit: 3 },
                { course: 'EE220', credit: 8 }
            ],
            fourth: [
                { course: 'EE206', credit: 8 },
                { course: 'EE207', credit: 3 },
                { course: 'EE230', credit: 8 },
                { course: 'EE250', credit: 8 },
                { course: 'EE252', credit: 6 },
                { course: 'EE253', credit: 3 },
                { course: 'HSS', credit: 6 }
            ],
            fifth: [
                { course: 'EE312', credit: 7 },
                { course: 'EE380', credit: 6 },
                { course: 'EE331', credit: 8 },
                { course: 'EE340', credit: 6 },
                { course: 'EE351', credit: 3 },
                { course: 'Open Ele.', credit: 6 },
                { course: 'HSS', credit: 6 }
            ],
            sixth: [
                { course: 'EE360', credit: 6 },
                { course: 'EE370', credit: 6 },
                { course: 'EE371', credit: 3 },
                { course: 'EE381', credit: 3 },
                { course: 'Dept. Ele I/EE396', credit: 6 },
                { course: 'Dept. Ele II', credit: 6 },
                { course: 'EE390', credit: 6 },
                { course: 'Open Ele.', credit: 6 }
            ],
            seventh: [
                { course: 'Dept. Ele I', credit: 6 },
                { course: 'Dept. Ele II', credit: 6 },
                { course: 'Dept. Ele III', credit: 6 },
                { course: 'Open. Ele I', credit: 6 },
                { course: 'HSS', credit: 6 }
            ],
            eighth: [
                { course: 'Dept. Ele I', credit: 6 },
                { course: 'Dept. Ele. II', credit: 6 },
                { course: 'Dept. Ele III', credit: 6 },
                { course: 'Open. Ele I', credit: 6 },
                { course: 'HSS', credit: 6 }
            ],
            cumulative_credit: [43, 86, 125, 167, 209, 251, 281, 311]

        },
        ECE: {
            first: [
                { course: 'CH101', credit: 8 },
                { course: 'CH110', credit: 3 },
                { course: 'EE101', credit: 8 },
                { course: 'MA101', credit: 8 },
                { course: 'CE101', credit: 7 },
                { course: 'PH101', credit: 6 },
                { course: 'ME110/PH110', credit: 3 }
            ],
            second: [
                { course: 'CH101', credit: 8 },
                { course: 'CH110', credit: 3 },
                { course: 'EE101', credit: 8 },
                { course: 'MA101', credit: 8 },
                { course: 'CE101', credit: 7 },
                { course: 'PH101', credit: 6 },
                { course: 'ME110/PH110', credit: 3 }
            ],
            third: [
                { course: 'MA201', credit: 8 },
                { course: 'EE203', credit: 6 },
                { course: 'EE204', credit: 8 },
                { course: 'EE210', credit: 6 },
                { course: 'EE211', credit: 3 },
                { course: 'EE220', credit: 8 }
            ],
            fourth: [
                { course: 'EE206', credit: 8 },
                { course: 'EE207', credit: 3 },
                { course: 'EE230', credit: 8 },
                { course: 'EE250', credit: 8 },
                { course: 'EE252', credit: 6 },
                { course: 'EE253', credit: 3 },
                { course: 'HSS', credit: 6 }
            ],
            fifth: [
                { course: 'EE312', credit: 7 },
                { course: 'EE321', credit: 6 },
                { course: 'EE331', credit: 8 },
                { course: 'EE340', credit: 6 },
                { course: 'EE351', credit: 3 },
                { course: 'Open Ele.', credit: 6 },
                { course: 'HSS', credit: 6 }
            ],
            sixth: [
                { course: 'EE313', credit: 3 },
                { course: 'EE332', credit: 6 },
                { course: 'EE333', credit: 3 },
                { course: 'EE334', credit: 6 },
                { course: 'Open Ele./EE396', credit: 6 },
                { course: 'EE390', credit: 6 },
                { course: 'Open Ele.', credit: 6 }
            ],
            seventh: [
                { course: 'CH101', credit: 8 },
                { course: 'CH110', credit: 3 },
                { course: 'EE101', credit: 8 },
                { course: 'MA101', credit: 8 },
                { course: 'CE101', credit: 7 },
                { course: 'PH101', credit: 6 },
                { course: 'ME110/PH110', credit: 3 }
            ],
            eighth: [
                { course: 'Dept. Ele. I', credit: 6 },
                { course: 'Dept. Ele. II', credit: 6 },
                { course: 'Dept. Ele. III', credit: 6 },
                { course: 'Open. Ele. I', credit: 6 },
                { course: 'HSS', credit: 6 }
            ],
            cumulative_credit: [43, 86, 125, 167, 209, 251, 281, 311]

        },
        //completed till now.
        //TODO: verify the credit and calculate the cumulative.
        EP: {
            first: [
                { course: 'CH101', credit: 8 },
                { course: 'CH110', credit: 3 },
                { course: 'EE101', credit: 8 },
                { course: 'MA101', credit: 8 },
                { course: 'CE101', credit: 7 },
                { course: 'PH101', credit: 6 },
                { course: 'ME110/PH110', credit: 3 }
            ],
            second: [
                { course: 'CH101', credit: 8 },
                { course: 'CH110', credit: 3 },
                { course: 'EE101', credit: 8 },
                { course: 'MA101', credit: 8 },
                { course: 'CE101', credit: 7 },
                { course: 'PH101', credit: 6 },
                { course: 'ME110/PH110', credit: 3 }
            ],
            third: [
                { course: 'PH201', credit: 8 },
                { course: 'PH203', credit: 6 },
                { course: 'PH205', credit: 6 },
                { course: 'PH207', credit: 6 },
                { course: 'PH209', credit: 6 },
                { course: 'PH211', credit: 4 },
                { course: 'EE220', credit: 8 }
            ],
            fourth: [

                //TODO:  ph202 ka credit verifies karna hai
                { course: 'PH202', credit: 8 },
                { course: 'PH204', credit: 6 },
                { course: 'PH206', credit: 6 },
                { course: 'PH208', credit: 6 },
                { course: 'PH210', credit: 6 },
                { course: 'HSS', credit: 6 }
            ],

            //TODO: verifies the credit.
            fifth: [
                { course: 'PH301', credit: 8 },
                { course: 'PH303', credit: 6 },
                { course: 'PH305', credit: 6 },
                { course: 'PH307', credit: 6 },
                { course: 'PH309', credit: 4 },
                { course: 'HSS', credit: 6 }
            ],
            sixth: [
                { course: 'PH302', credit: 6 },
                { course: 'PH304', credit: 6 },
                { course: 'PH306', credit: 6 },
                { course: 'PH308', credit: 6 },
                { course: 'PH310', credit: 6 },
                { course: 'Mini project/ Dept. Ele.', credit: 6 },
                { course: 'Open Ele.', credit: 6 }
            ],
            seventh: [
                { course: 'PH411', credit: 6 },
                { course: 'PH413', credit: 6 },
                { course: 'PH415', credit: 6 },
                { course: 'BTP I/ Dept. Ele', credit: 6 },
                { course: 'Open Ele.', credit: 6 },
                { course: 'HSS', credit: 6 }
            ],
            eighth: [
                { course: 'Dept. Ele. I', credit: 6 },
                { course: 'Dept. Ele.II', credit: 6 },
                { course: 'Dept. Ele. III', credit: 6 },
                { course: 'BTP II/ Dept. Ele IV', credit: 6 },
                { course: 'Open Ele.', credit: 6 },
                { course: 'HSS', credit: 6 }
            ],
            cumulative_credit: [43, 86, 124, 163, 205, 247, 283, 319]

        },
        MNC: {
            first: [
                { course: 'CH101', credit: 8 },
                { course: 'CH110', credit: 3 },
                { course: 'EE101', credit: 8 },
                { course: 'MA101', credit: 8 },
                { course: 'CE101', credit: 7 },
                { course: 'PH101', credit: 6 },
                { course: 'ME110/PH110', credit: 3 }
            ],
            second: [
                { course: 'CH101', credit: 8 },
                { course: 'CH110', credit: 3 },
                { course: 'EE101', credit: 8 },
                { course: 'MA101', credit: 8 },
                { course: 'CE101', credit: 7 },
                { course: 'PH101', credit: 6 },
                { course: 'ME110/PH110', credit: 3 }
            ],
            third: [
                { course: 'MA201', credit: 8 },
                { course: 'MA221', credit: 6 },
                { course: 'MA222', credit: 6 },
                { course: 'MA225', credit: 8 },
                { course: 'MA251', credit: 6 },
                { course: 'CS221', credit: 6 }
            ],
            fourth: [
                { course: 'MA224', credit: 6 },
                { course: 'MA252', credit: 6 },
                { course: 'MA271', credit: 6 },
                { course: 'CS223', credit: 6 },
                { course: 'CS245', credit: 6 },
                { course: 'CS246', credit: 4 },
                { course: 'HSS', credit: 4 }
            ],
            fifth: [
                { course: 'MA321', credit: 6 },
                { course: 'MA323', credit: 4 },
                { course: 'MA372', credit: 6 },
                { course: 'CS341', credit: 6 },
                { course: 'CS342', credit: 4 },
                { course: 'CS343', credit: 6 },
                { course: 'CS344', credit: 4 },
                { course: 'HSS', credit: 6 }
            ],
            sixth: [
                { course: 'MA322', credit: 8 },
                { course: 'MA324', credit: 6 },
                { course: 'MA351', credit: 8 },
                { course: 'MA373', credit: 6 },
                { course: 'MA374', credit: 3 },
                { course: 'Dept. Ele', credit: 6 }
            ],
            seventh: [
                { course: 'MA423', credit: 8 },
                { course: 'MA473', credit: 8 },
                { course: 'Dept. Ele.', credit: 6 },
                { course: 'BTP I', credit: 6 },
                { course: 'HSS', credit: 6 }
            ],
            eighth: [
                { course: 'Dept. Ele. I', credit: 6 },
                { course: 'Dept. Ele. II', credit: 6 },
                { course: 'Open Ele.', credit: 6 },
                { course: 'BTP II', credit: 10 },
                { course: 'HSS', credit: 6 }
            ],
            cumulative_credit: [43, 86, 126, 166, 208, 245, 279, 313]

        },
        ME: {
            first: [
                { course: 'CH101', credit: 8 },
                { course: 'CH110', credit: 3 },
                { course: 'EE101', credit: 8 },
                { course: 'MA101', credit: 8 },
                { course: 'CE101', credit: 7 },
                { course: 'PH101', credit: 6 },
                { course: 'ME110/PH110', credit: 3 }
            ],
            second: [
                { course: 'BT101', credit: 6 },
                { course: 'CS101', credit: 6 },
                { course: 'CS110', credit: 3 },
                { course: 'EE102', credit: 3 },
                { course: 'MA102', credit: 8 },
                { course: 'ME101', credit: 8 },
                { course: 'PH102', credit: 6 },
                { course: 'ME110/PH110', credit: 3 }
            ],
            third: [
                { course: 'MA201', credit: 8 },
                { course: 'ME211', credit: 6 },
                { course: 'ME212', credit: 6 },
                { course: 'ME213', credit: 6 },
                { course: 'ME214', credit: 6 },
                { course: 'ME215', credit: 3 },
                { course: 'ME216', credit: 3 }
            ],
            fourth: [
                { course: 'ME221', credit: 6 },
                { course: 'ME222', credit: 6 },
                { course: 'ME223', credit: 6 },
                { course: 'ME224', credit: 6 },
                { course: 'ME225', credit: 6 },
                { course: 'ME226', credit: 3 },
                { course: 'HSS', credit: 6 }
            ],
            fifth: [
                { course: 'ME311', credit: 6 },
                { course: 'ME312', credit: 6 },
                { course: 'ME313', credit: 6 },
                { course: 'ME314', credit: 6 },
                { course: 'EE380', credit: 6 },
                { course: 'ME315', credit: 3 },
                { course: 'BTP-1', credit: 3 },
                { course: 'HSS', credit: 6 }
            ],
            sixth: [
                { course: 'ME321', credit: 6 },
                { course: 'ME322', credit: 6 },
                { course: 'ME323', credit: 6 },
                { course: 'ME324', credit: 6 },
                { course: 'ME325', credit: 6 },
                { course: 'ME326', credit: 3 },
                { course: 'DEPT. ELECTIVE I', credit: 6 },
                { course: 'BTP II', credit: 3 }
            ],
            seventh: [
                { course: 'OPEN ELECTIVE I', credit: 6 },
                { course: 'OPEN ELECTIVE II', credit: 6 },
                { course: 'DEPT. ELECTIVE II', credit: 6 },
                { course: 'DEPT. ELECTIVE III', credit: 6 },
                { course: 'BTP-III', credit: 6 },
                { course: 'HSS', credit: 6 }
            ],
            eighth: [
                { course: 'OPEN ELECTIVE III', credit: 6 },
                { course: 'OPEN ELECTIVE IV', credit: 6 },
                { course: 'DEPT. ELECTIVE IV', credit: 6 },
                { course: 'BTP - IV', credit: 12 },
                { course: 'HSS', credit: 6 },
            ],
            cumulative_credit: [43, 86, 124, 163, 205, 247, 283, 319]

        }
    }

    const handleSelect = async (e) => {
        e.preventDefault();
        // console.log({ [e.target.name]: e.target.value });
        setUser({ ...user, [e.target.name]: e.target.value });

    }

    const [userstate, setUserstate] = useState(null);

    useEffect(() => {

        user.department && user.semester && user.department !== 'department' && user.semester !== 'semester' && setUserstate(data[user.department][user.semester]);
        // eslint-disable-next-line
    }, [user]);

    // console.log(userstate);




    return (
        <>
            <div className="container my-5">

                <div className="row justify-content-around">
                    <div className="col-4">
                        <select className="form-select" id='semester' name='semester' aria-label="Default select example" placeholder='select semester' onChange={handleSelect}>
                            <option defaultValue value="semester" >Semester</option>
                            <option value="first">First</option>
                            <option value="second">Second</option>
                            <option value="third">Third</option>
                            <option value="fourth">Fourth</option>
                            <option value="fifth">Fifth</option>
                            <option value="sixth">Sixth</option>
                            <option value="seventh">Seventh</option>
                            <option value="eighth">Eighth</option>
                        </select>
                    </div>
                    <div className="col-4">
                        <select className="form-select" id='department' name='department' aria-label="Default select example" onChange={handleSelect}>
                            <option defaultValue value='department'>Select Your Department</option>
                            <option value="BSEB">Bio Technology</option>
                            <option value="ChE">Chemical Engineering</option>
                            <option value="CST">Chemical Science and Technology</option>
                            <option value="CE">Civil Engineering</option>
                            <option value="CSE">Computer Science and Engineering</option>
                            <option value="EE">Electronics and Electrical Engineering</option>
                            <option value="ECE">Electrnoics and Communication Engineering</option>
                            <option value="MNC">Mathematics and Computing</option>
                            <option value="ME">Mechanical Engineering</option>
                            <option value="EP">Engineering Physics</option>
                        </select>
                    </div>
                </div>
            </div>
            {
                userstate && <Grade user={userstate} cumulative_credit={data[user.department]['cumulative_credit']} />
            }
        </>

    )
}
