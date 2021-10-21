const SKILLS_TEXTURES =[
    "./assets/skills/cs.png",
    "./assets/skills/css.png",
    "./assets/skills/html.png",
    "./assets/skills/js.png",
    "./assets/skills/laravel.png",
    "./assets/skills/php.png",
    "./assets/skills/python.png",
    "./assets/skills/xd.png",
    "./assets/skills/detail.png",
    "./assets/skills/problem.png",
    "./assets/skills/idea.png",
    "./assets/skills/matter.png",
    "./assets/skills/p5.png"

]

let redOnImage, redOffImage, redClickedImage, greenOnImage, greenClickedImage

    redOnImage = "./assets/buttonOn.png"
    redOffImage = "./assets/buttonOff.png"
    redClickedImage = "./assets/buttonClicked.png"
    greenOnImage = "./assets/greenButton.png"
    greenClickedImage = "./assets/greenButton2.png"


const WINDOW_WIDTH = window.innerWidth;
const WINDOW_HEIGHT = window.innerHeight;
const XS_DIM = {
    BALL: {
        RADIUS: 16,
        FORCE:0.003

    },
    WALL: {
        SIZE: 16
    },
    CUP: {
        'X': WINDOW_WIDTH * 0.5,
        'Y': WINDOW_HEIGHT * 0.45,
        'SIZE':68,
        'SCALE': 0.42

    },
    LEFT_PLAT: {
        'SIZE': 100,
        'X': 0,
        'Y': 100,
        'ANGLE': 0.1
    },
    RIGHT_PLAT: {
        'SIZE': 100,
        'X': WINDOW_WIDTH,
        'Y': WINDOW_HEIGHT * 0.2,
        'ANGLE': 0.1
    }
}
const S_DIM = {
    BALL: {
        RADIUS: 20,
        FORCE:0.006
    },
    WALL: {
        SIZE: 20
    },
    CUP: {
        'X': WINDOW_WIDTH * 0.5,
        'Y': WINDOW_HEIGHT * 0.45,
        'SIZE': 100,
        'SCALE': 0.5

    },
    LEFT_PLAT: {
        'X': 0,
        'Y': 150,
        'SIZE': 350,
        'ANGLE': 0.1
    },
    RIGHT_PLAT: {
        'SIZE': 350,
        'X': WINDOW_WIDTH,
        'Y': WINDOW_HEIGHT * 0.15,
        'ANGLE': -0.1
    }
}
const M_DIM = {
    BALL: {
        RADIUS: 24,
        FORCE:0.01

    },
    WALL: {
        SIZE: 24
    },
    CUP: {
        'X': WINDOW_WIDTH * 0.5,
        'Y': WINDOW_HEIGHT * 0.45,
        'SIZE': 140,
        'SCALE': 0.75
    },
    LEFT_PLAT: {
        'X': 0,
        'Y': 200,
        'SIZE': 500,
        'ANGLE': 0.1
    },
    RIGHT_PLAT: {
        'SIZE': 500,
        'X': WINDOW_WIDTH,
        'Y': WINDOW_HEIGHT * 0.15,
        'ANGLE': -0.1
    }
}
const L_DIM = {
    BALL: {
        RADIUS: 28,
        FORCE:0.02

    },
    WALL: {
        SIZE: 28
    },
    CUP: {
        'X': WINDOW_WIDTH * 0.5,
        'Y': WINDOW_HEIGHT * 0.45,
        'SIZE': 168,
        'SCALE': 0.88

    },
    LEFT_PLAT: {
        'X': WINDOW_WIDTH / 5,
        'Y': 225,
        'SIZE': 100,
        'ANGLE': 0.05
    },
    RIGHT_PLAT: {
        'X': WINDOW_WIDTH - WINDOW_WIDTH / 5,
        'Y': 225,
        'SIZE': 1000,
        'ANGLE': -0.05
    }
}
const XL_DIM = {
    BALL: {
        RADIUS: 32,
        FORCE:0.04

    },
    WALL: {
        SIZE: 32
    },
    CUP: {
        'X': WINDOW_WIDTH * 0.5,
        'Y': WINDOW_HEIGHT * 0.45,
        'SIZE': 220,
        'SCALE': 1.15
    },
    LEFT_PLAT: {
        'X': 0,
        'Y': 300,
        'SIZE': WINDOW_WIDTH * 4 / 5,
        'ANGLE': 0.05
    },
    RIGHT_PLAT: {
        'X': WINDOW_WIDTH,
        'Y': 300,
        'SIZE': WINDOW_WIDTH * 4 / 5,
        'ANGLE': -0.05
    }
}

const COLORS = {
    "GREEN": "#38A544",
    "YELLOW": "#E8D957",
    "VIOLET": "#B8A1C7",
    "LIGHT-BLUE":"#3891EE",
    "DARK-BLUE": "#001166",
    "BLUE": "#0077A5" ,
    "BLACK": "#262629",
    "RED": "#D8333A",
    "PINK": "#E4718A",
    "ORANGE": "#FA8A00"
}

const MODAL_INFO = {
    "project1": {

        "title": "ISS Tracker",
        "ball":"./assets/skills/issTrack1.png",

        "image": "./iss1.png",
        "link": "https://github.com/Ricano/iss_tracker",
        "description": "A simple <strong>REST API</strong> consuming app that let's you know, in real time, the International Space Station whereabouts.",
        "color": COLORS["DARK-BLUE"],
        "logos": [
            "./assets/html5.svg",
            "./assets/css3.svg",
            "./assets/js.svg",
            "./assets/leaflet.png",
        ]
    },
    "project2": {

        "title": "IBIS - Gestão de atas",
        "ball":"./assets/skills/ibis1.png",
        "image": "./assets/ibisimg.png",
        "link": "https://github.com/Ricano/ibis",
        "description": "A meetings manager and automatic minute creator app.",
        "color":COLORS["DARK-BLUE"],
        "logos": [
            "./assets/laravel.png",
            "./assets/xampp.png",
            "./assets/skills/detail.png",
            "./assets/xd.svg",
            "./assets/drawio.png",

        ]
    }

}