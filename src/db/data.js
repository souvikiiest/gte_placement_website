import aditya from "../db/images/aditya.jpg";
import arjun from "../db/images/arjun.jpg";
import avikal from "../db/images/avikal.jpg";
import gautham from "../db/images/gautam.jpg";
import pavan from "../db/images/pavan.jpg";
import ravali from "../db/images/ravali.jpg";
import saswata from "../db/images/saswata.jpg";
import souvik from "../db/images/souvik.jpg";
import suvra from "../db/images/suvrakamal.jpg";
import thanmai from "../db/images/thanmai.jpg";
const datas=[
    {
        "Name": "Jadhav Arjun",
        "Email": "jarjun154@gmail.com",
        "project": "Determination of dynamic soil parameter using cyclic triaxial test ",
        "Photo":arjun,
        "Software":["PLAXIS(2D&3D)","STAAD-Pro", "AutoCAD"],
        "Resume":"https://drive.google.com/file/d/1xZtLn5BOjeeBXleXqZnPDT3AR_xMT-Co/view?usp=sharing",
    },
    {
        "Name": "Namburi Gowtham",
        "Email": "gowthamvarma@kgpian.iitkgp.ac.in",
        "project": "Estimation of buoyancy factor during inclined lateral breakout of on-bottom pipelines in clay",
        "Photo":gautham,
        "Software":["ABAQUS", "MATLAB", "STAADPro", "PLAXIS 2D", "MS Excel", "Python"],
        "Resume":"https://drive.google.com/file/d/1430nUxNi2ed455TdgNd7FIYOHLGM6xCH/view?usp=sharing",
    },
    
    {
        "Name": "Avikal Shrivastava",
        "Email": "shrivastava.avikal1805@gmail.com",
        "project": "Investigation on the Deformation response of Submarine pipelines subjected to Impact Loads",
        "Photo":avikal,
        "Software":["ABAQUS", "AUTOCAD", "MS OFFICE", "PLAXIS"],
        "Resume":"https://drive.google.com/file/d/1zPFcX9RpIlFAGt1kSfWyZdwhX05ANOP6/view?usp=sharing",
    },{
        "Name": "Aditya Roy",
        "Email": "adityaroy19991012@gmail.com",
        "project": "Effect of foundation width on N in dilative sands considering stress level dependency of peak friction angle and dilation angle ",
        "Photo":aditya,
        "Software":["Optum G2", "PLAXIS(2D&3D)","MATLAB", "MS Word,", "MS Excel" , "Pyhton"],
        "Resume":"https://drive.google.com/file/d/11TBELXrMSe04Jts7gsp48HmaYsFw48-q/view?usp=sharing",
    }, {
        "Name": "Chukkala Leela Ravali",
        "Email": "leelaravalichukkala@gmail.com",
        "project": "Stone Column Under Machine Foundation ",
        "Photo":ravali,
        "Software":["STAAD-Pro", "PLAXIS(2D&3D)", "AutoCAD", "Tekla" , "ERDAS", "D-Stability","Settle-D", "Python"],
        "Resume":"https://drive.google.com/file/d/1QqcIp3_R_vpJz_FrGUcDZfUgKOCJfOjn/view?usp=sharing",
    },{
        "Name": "Konnuru Pavan Kumar",
        "Email": "pavankonnuru@kgpian.iitkgp.ac.in",
        "project": "Effect of Particle shape and size on Cyclic Behaviour of Sand using Shake Table Test.",
        "Photo":pavan,
        "Software":["PLAXIS(2D&3D)","MATLAB","Microsoft Office","STAAD-Pro", "AutoCAD"],
        "Resume":"https://drive.google.com/file/d/1jPV9JbP7mAKpxg-A4zlGlBE9xi01rlbl/view?usp=sharing",
    },{
        "Name": "Saswata Bhattacharya",
        "Email": "saswatab@kgpian.iitkgp.ac.in",
        "project": "Interference of strip footings placed on slopes using Lower Bound Finite Element Limit Analysis",
        "Photo":saswata,
        "Software":["MATLAB", "AutoCAD", "Plaxis", "OptumG2", "Staad.Pro", "Microsoft Excel"],
        "Resume":"https://drive.google.com/file/d/1nOWrbrSblU6nBp8bKZcPHTqSxGRSe4ZI/view?usp=drive_link",
    },{
        "Name": "Souvik Ghosh",
        "Email": "souvikghosh734@gmail.com",
        "project": "Study on Behaviour of Shallow Embedded Foundations with Tunnel Proximity using Lower Bound Finite Element Limit Analysis",
        "Photo":souvik,
        "Software":["MATLAB", "PLAXIS(2D&3D)", "Optum-G2", "GeoStudio" , "C++", "Python"],
        "Resume":"https://drive.google.com/file/d/1uSawCW7CVdTHHLgKVU-BDMv86DQEYRST/view?usp=sharing",
    },{
        "Name": "Vemareddy Venkata Thanmai",
        "Email": "thanmaivemareddy@gmail.com",
        "project": "Application of Geocell Reinforced-Steel slag waste for construction of roads on clay subgrade",
        "Photo":thanmai,
        "Software":["PLAXIS 2D", "PLAXIS 3D", "SLIDE", "STAADPRO", "ABAQUS", "ARC GIS" , "AUTOCAD", "MACSTAR"],
        "Resume":"https://drive.google.com/file/d/1uAzhJwnakuvU4U_EURL2afdlnWgb_CJ7/view?usp=sharing",
    },{
     "Name": "Suvra Kamal Das",
        "Email": "suvrakamal@gmail.com",
        "project": "3D Kinematic limit analysis of slope reinforced with piles ",
        "Photo":suvra,
        "Software":["PLAXIS-(2D&3D)", "Matlab", "Staad.pro"],
        "Resume":"https://drive.google.com/file/d/1QwSWdKXyrhyEupaFXKY9KW7EwO7Vd0-m/view?usp=sharing",
    }
    
]

const course = [
    {
    sem1:["Strength and Deformation Characteristics of Soil","Mechanics of Soil","Computational Geomechanics","Applied Soil Mechanics","Bridge Engineering"],

    Laboratory:["Advanced Foundation Engineering Laboratory","Soil Mechanics Laboratory"],

    sem2:["Sub-Surface Soil Investigation","Advanced Foundation Engineering","Design of Foundation sessional","Rock Mechanics & Tunneling","Dynamics of Soils and Foundation","Soil-Structure Interaction"],
    }
       
];
const notable=["SPT","CPTu","Pressuremeter Testing","Sampling Techniques & Disturbances","Field Vane Shear Test","SASW","CSW","MASW",'Laterally Loaded Pile', "Vertical Anchors","Reflection/Refraction Survey","Finite Element Method", "Finite Difference Method"]

export { course, datas, notable };

