/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'Rectangle2',
                type: 'rect',
                rect: ['0px', '-11px','721px','5018px','auto', 'auto'],
                fill: ["rgba(255,0,0,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'Text2',
                type: 'text',
                rect: ['246px', '248px','260px','125px','auto', 'auto'],
                text: "blank<br>",
                font: ['Arial, Helvetica, sans-serif', 24, "rgba(0,0,0,1)", "normal", "none", ""]
            },
            {
                id: 'Rectangle3',
                type: 'rect',
                rect: ['184px', '133px','133px','97px','auto', 'auto'],
                fill: ["rgba(0,65,151,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'Rectangle',
                type: 'rect',
                rect: ['2px', '1px','222px','25px','auto', 'auto'],
                fill: ["rgba(255,0,0,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'Rectangle4',
                type: 'rect',
                rect: ['225px', '2365px','127px','108px','auto', 'auto'],
                fill: ["rgba(255,0,0,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['64px', '248px','260px','125px','auto', 'auto'],
                text: "blank<br>",
                font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(0,0,0,1)", "normal", "none", ""]
            },
            {
                id: 'green',
                type: 'rect',
                rect: ['202', '351','auto','auto','auto', 'auto']
            }],
            symbolInstances: [
            {
                id: 'green',
                symbolName: 'green'
            }
            ]
        },
    states: {
        "Base State": {
            "${_Rectangle2}": [
                ["color", "background-color", 'rgba(207,207,207,1.00)'],
                ["style", "width", '721px']
            ],
            "${_Text2}": [
                ["style", "top", '250px'],
                ["style", "left", '246px']
            ],
            "${_green}": [
                ["style", "top", '250px']
            ],
            "${_Rectangle3}": [
                ["color", "background-color", 'rgba(0,65,151,1.00)'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "height", '97px'],
                ["style", "top", '133px'],
                ["style", "left", '184px'],
                ["style", "width", '133px']
            ],
            "${_Text}": [
                ["style", "top", '250px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '550px'],
                ["style", "height", '500px'],
                ["style", "overflow", 'auto']
            ],
            "${_Rectangle}": [
                ["style", "height", '25px'],
                ["style", "top", '1px'],
                ["color", "background-color", 'rgba(255,0,0,1.00)']
            ],
            "${_Rectangle4}": [
                ["transform", "scaleX", '0'],
                ["style", "top", '2365px'],
                ["transform", "scaleY", '0'],
                ["color", "background-color", 'rgba(255,0,0,1)']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 10000,
            autoPlay: false,
            timeline: [
                { id: "eid15", tween: [ "transform", "${_Rectangle3}", "scaleX", '10', { fromValue: '1'}], position: 0, duration: 5000 },
                { id: "eid3", tween: [ "style", "${_Stage}", "height", '500px', { fromValue: '500px'}], position: 0, duration: 0 },
                { id: "eid4", tween: [ "style", "${_Stage}", "height", '500px', { fromValue: '500px'}], position: 10000, duration: 0 },
                { id: "eid23", tween: [ "transform", "${_Rectangle4}", "scaleY", '10', { fromValue: '0'}], position: 5000, duration: 5000 },
                { id: "eid18", tween: [ "color", "${_Rectangle4}", "background-color", 'rgba(255,0,232,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,0,0,1)'}], position: 5000, duration: 0 },
                { id: "eid14", tween: [ "style", "${_Rectangle3}", "top", '2400px', { fromValue: '133px'}], position: 0, duration: 5000 },
                { id: "eid25", tween: [ "style", "${_Rectangle3}", "top", '4500px', { fromValue: '2400px'}], position: 5000, duration: 5000 },
                { id: "eid13", tween: [ "style", "${_Text2}", "top", '4750px', { fromValue: '250px'}], position: 0, duration: 10000 },
                { id: "eid24", tween: [ "style", "${_Rectangle4}", "top", '4500px', { fromValue: '2365px'}], position: 5000, duration: 5000 },
                { id: "eid22", tween: [ "transform", "${_Rectangle4}", "scaleX", '10', { fromValue: '0'}], position: 5000, duration: 5000 },
                { id: "eid31", tween: [ "style", "${_green}", "top", '4800px', { fromValue: '250px'}], position: 0, duration: 10000 },
                { id: "eid16", tween: [ "transform", "${_Rectangle3}", "scaleY", '10', { fromValue: '1'}], position: 0, duration: 5000 },
                { id: "eid11", tween: [ "color", "${_Rectangle2}", "background-color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(207,207,207,1.00)'}], position: 0, duration: 10000 },
                { id: "eid12", tween: [ "style", "${_Text}", "top", '4750px', { fromValue: '250px'}], position: 0, duration: 10000 },
                { id: "eid1", tween: [ "style", "${_Rectangle}", "top", '4500px', { fromValue: '1px'}], position: 0, duration: 10000 }            ]
        }
    }
},
"green": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '81px', '68px', 'auto', 'auto'],
                    borderRadius: ['10px', '10px', '10px', '10px'],
                    id: 'RoundRect',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(0,65,151,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_RoundRect}": [
                ["color", "background-color", 'rgba(11,151,0,1)'],
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '68px'],
                ["style", "overflow", 'visible'],
                ["style", "width", '81px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 10000,
            autoPlay: false,
            timeline: [
                { id: "eid28", tween: [ "color", "${_RoundRect}", "background-color", 'rgba(255,0,249,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(11,151,0,1)'}], position: 0, duration: 10000 },
                { id: "eid29", tween: [ "style", "${_RoundRect}", "left", '359px', { fromValue: '0px'}], position: 0, duration: 10000 }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-102797626");
